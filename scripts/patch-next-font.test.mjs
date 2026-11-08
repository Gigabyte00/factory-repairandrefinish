import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFileSync, writeFileSync, mkdirSync, mkdtempSync, rmSync, symlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import vm from 'node:vm';
import { NEXT_VERSION, NEXT_INTEGRITY, PATCHES, sha256, patchSource, applyPatch } from './patch-next-font.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const FONT_ROOT = resolve(ROOT, 'node_modules/next/dist/compiled/@next/font/dist/google');
const realRequire = createRequire(resolve(FONT_ROOT, 'loader.js'));

// npm ci supplies pristine files; tests also work after an earlier successful prebuild.
// Reverse only the exact known patch, then verify the original published byte hash.
function pristine(patch) {
  let source = readFileSync(resolve(FONT_ROOT, patch.file), 'utf8');
  if (sha256(source) === patch.after) {
    for (const [before, after] of [...patch.edits].reverse()) {
      assert.equal(source.split(after).length - 1, 1);
      source = source.replace(after, before);
    }
  }
  assert.equal(sha256(source), patch.before, 'Tests require the exact published dependency bytes');
  return source;
}
const originals = PATCHES.map(pristine);
const patched = PATCHES.map((patch, index) => patchSource(originals[index], patch));

function moduleFrom(source, dependencies = {}) {
  const exports = {};
  const context = vm.createContext({ exports, console, Buffer,
    require: (name) => Object.hasOwn(dependencies, name) ? dependencies[name] : realRequire(name) });
  vm.runInContext(source, context);
  return exports;
}
const find = moduleFrom(patched[0]).findFontFilesInCss;
function css(url, format = "format('woff2')") {
  return `/* latin */\n@font-face {\n  font-family: 'Inter';\n  src: url(${url}) ${format};\n}`;
}
function loaderWith(source, parser, response, fetches = []) {
  return moduleFrom(source, {
    './find-font-files-in-css': parser,
    './fetch-css-from-google-fonts': { fetchCSSFromGoogleFonts: async () => response },
    './fetch-font-file': { fetchFontFile: async (url) => { fetches.push(url); return Buffer.from('font fixture'); } },
  }).default;
}
const cases = [
  ['https://fonts.gstatic.com/s/example.woff2', "format('woff2')", 'woff2'],
  ['https://fonts.gstatic.com/l/font?kit=a=b&skey=c&v=v20', "format('woff2')", 'woff2'],
  ['https://fonts.gstatic.com/l/font?kit=a%2Bb&skey=c', 'format("woff")', 'woff'],
  ['https://fonts.gstatic.com/l/font', "format('truetype')", 'ttf'],
  ['https://fonts.gstatic.com/l/font', "format('opentype')", 'otf'],
  ['https://fonts.gstatic.com/l/font', "format('embedded-opentype')", 'eot'],
  ['https://fonts.gstatic.com/l/font', '', 'woff2'],
  ['https://fonts.gstatic.com/l/font', "format('unknown')", 'woff2'],
  ['https://fonts.gstatic.com/s/font.ttf?kit=a&v=1#font', "format('woff2')", 'ttf'],
  ['https://fonts.gstatic.com/l/font?kit=a.woff', "format('woff2')", 'woff2'],
];

for (const [url, format, extension] of cases) {
  test(`CSS parser and loader emit ${extension}: ${url} ${format}`, async () => {
    const response = css(url, format);
    const found = find(response + '\n' + response, ['latin']);
    assert.equal(found.length, 1);
    assert.equal(found[0].googleFontFileUrl, url);
    assert.equal(found[0].preloadFontFile, true);
    assert.equal(found[0].ext, extension);
    const fetched = [];
    const emitted = [];
    const loader = loaderWith(patched[1], { findFontFilesInCss: find }, response, fetched);
    const result = await loader({ functionName: 'Inter', data: [{ subsets: ['latin'], adjustFontFallback: false }],
      isDev: false, isServer: true,
      emitFontFile: (bytes, ext, preload, fallback) => {
        emitted.push({ bytes: bytes.toString(), ext, preload, fallback });
        return `/_next/static/media/font.${ext}`;
      },
    });
    assert.deepEqual(fetched, [url]);
    assert.deepEqual(emitted, [{ bytes: 'font fixture', ext: extension, preload: true, fallback: false }]);
    assert.ok(result.css.includes(`url(/_next/static/media/font.${extension})`));
    assert.ok(!result.css.includes(url));
  });
}

test('original pinned loader reproduces the extensionless null-match failure', async () => {
  const loader = loaderWith(originals[1], moduleFrom(originals[0]), css('https://fonts.gstatic.com/l/font?kit=a&v=1'));
  await assert.rejects(loader({ functionName: 'Inter', data: [{ subsets: ['latin'], adjustFontFallback: false }],
    isDev: false, isServer: true, emitFontFile: () => { throw new Error('Must fail before emission'); },
  }), /Cannot read properties of null \(reading '1'\)/);
});

test('preload subset selection and duplicate handling remain unchanged', () => {
  const found = find(css('latin.woff2') + '\n/* greek */\n@font-face {\n  src: url(greek.woff2);\n}', ['latin']);
  assert.equal(found.length, 2);
  assert.equal(found[0].preloadFontFile, true);
  assert.equal(found[1].preloadFontFile, false);
  assert.equal(find(css('latin.woff2'))[0].preloadFontFile, false);
});

function fixture(t) {
  const root = mkdtempSync(resolve(tmpdir(), 'next-font-backport-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const next = resolve(root, 'node_modules/next');
  const fonts = resolve(next, 'dist/compiled/@next/font/dist/google');
  mkdirSync(fonts, { recursive: true });
  writeFileSync(resolve(root, 'package.json'), JSON.stringify({ dependencies: { next: NEXT_VERSION } }));
  writeFileSync(resolve(root, 'package-lock.json'), JSON.stringify({ packages: { 'node_modules/next': { version: NEXT_VERSION, integrity: NEXT_INTEGRITY } } }));
  writeFileSync(resolve(next, 'package.json'), JSON.stringify({ version: NEXT_VERSION }));
  PATCHES.forEach((patch, i) => writeFileSync(resolve(fonts, patch.file), originals[i]));
  return { root, next, fonts };
}

test('patch applies exactly once, supports known partial completion, and is idempotent', (t) => {
  const { root, fonts } = fixture(t);
  assert.deepEqual(applyPatch(root), { files: 2, changed: 2 });
  assert.deepEqual(applyPatch(root), { files: 2, changed: 0 });
  writeFileSync(resolve(fonts, PATCHES[1].file), originals[1]);
  assert.deepEqual(applyPatch(root), { files: 2, changed: 1 });
  PATCHES.forEach((patch) => assert.equal(sha256(readFileSync(resolve(fonts, patch.file))), patch.after));
});

test('dependency drift in either file stops before any file is written', (t) => {
  const { root, fonts } = fixture(t);
  writeFileSync(resolve(fonts, PATCHES[1].file), originals[1] + '\n// drift\n');
  assert.throws(() => applyPatch(root), /Unrecognized loader.js/);
  assert.equal(readFileSync(resolve(fonts, PATCHES[0].file), 'utf8'), originals[0]);
});

test('wrong package version or lock integrity fails closed', (t) => {
  const { root, next, fonts } = fixture(t);
  writeFileSync(resolve(next, 'package.json'), JSON.stringify({ version: '15.1.12' }));
  assert.throws(() => applyPatch(root), /exact locked/);
  writeFileSync(resolve(next, 'package.json'), JSON.stringify({ version: NEXT_VERSION }));
  writeFileSync(resolve(root, 'package-lock.json'), JSON.stringify({ packages: { 'node_modules/next': { version: NEXT_VERSION, integrity: 'wrong' } } }));
  assert.throws(() => applyPatch(root), /exact locked/);
  assert.equal(readFileSync(resolve(fonts, PATCHES[0].file), 'utf8'), originals[0]);
});

test('matching count and patched hash guards reject an invalid patch description', () => {
  assert.throws(() => patchSource(originals[0], { ...PATCHES[0], edits: [['not present', 'replacement']] }), /exactly one match/);
  assert.throws(() => patchSource(originals[0], { ...PATCHES[0], after: '0'.repeat(64) }), /Unexpected patched/);
});

test('a linked dependency file is rejected rather than modifying another checkout', (t) => {
  const { root, fonts } = fixture(t);
  const path = resolve(fonts, PATCHES[0].file);
  rmSync(path);
  symlinkSync(resolve(FONT_ROOT, PATCHES[0].file), path);
  assert.throws(() => applyPatch(root), /regular dependency file/);
});

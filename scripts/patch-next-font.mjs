#!/usr/bin/env node
/**
 * Narrow Webpack backport for the pinned Next 15.1.11 Google font URL parser.
 * Adapted from the MIT-licensed upstream fix, commit 98a73ea / PR #100158:
 * https://github.com/vercel/next.js/pull/100158
 * URL pathname extension wins, then CSS format(), then WOFF2 for Next's Chrome UA.
 * Remove this backport only after reviewing a dependency release containing the fix.
 * Every input and output is hash checked; dependency drift stops the build.
 */
import { createHash } from 'node:crypto';
import { readFileSync, lstatSync, realpathSync, writeFileSync, renameSync, unlinkSync } from 'node:fs';
import { resolve, dirname, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

export const NEXT_VERSION = '15.1.11';
export const NEXT_INTEGRITY = 'sha512-UiVJaOGhKST58AadwbFUZThlNBmYhKqaCs8bVtm4plTxsgKq0mJ0zTsp7t7j/rzsbAEj9WcAMdZCztjByi4EoQ==';
export const PATCHES = [
  {
    file: 'find-font-files-in-css.js',
    before: 'e5fc1ff64077832b12aad76778668ee5ba8f7720aed87e9f86613ecd0620cb2a',
    after: 'efc7b827779207ffe6056457b817c0c80fb70d776462812ac6ad97fcfb18b862',
    edits: [
      [
        'exports.findFontFilesInCss = findFontFilesInCss;\n',
        `exports.findFontFilesInCss = findFontFilesInCss;
const formatToExtension = new Map([
    ['woff', 'woff'],
    ['woff2', 'woff2'],
    ['truetype', 'ttf'],
    ['opentype', 'otf'],
    ['embedded-opentype', 'eot'],
]);
`,
      ],
      [
        '                // Found the font file in the @font-face declaration.\n',
        String.raw`                // Google may return extensionless /l/font?kit=... URLs.
                // Match upstream: pathname, CSS format hint, then Chrome-UA WOFF2.
                const pathname = googleFontFileUrl.split(/[?#]/, 1)[0];
                const format = /format\(['"](.+?)['"]\)/.exec(line)?.[1];
                const ext = /\.(woff|woff2|eot|ttf|otf)$/.exec(pathname)?.[1]
                    ?? formatToExtension.get(format ?? '') ?? 'woff2';
`,
      ],
      [
        '                    googleFontFileUrl,\n',
        '                    googleFontFileUrl,\n                    ext,\n',
      ],
    ],
  },
  {
    file: 'loader.js',
    before: '45e38a6da7efde1a8f53c29619af2eb8f202d352119dbc91c7714db07db385f4',
    after: '4543a03ce3505386ad1e2b3cbee93d7adb58f6420acff09af940d0733820e6f9',
    edits: [
      [
        'fontFiles.map(async ({ googleFontFileUrl, preloadFontFile }) => {',
        'fontFiles.map(async ({ googleFontFileUrl, preloadFontFile, ext }) => {',
      ],
      [
        String.raw`            const ext = /\.(woff|woff2|eot|ttf|otf)$/.exec(googleFontFileUrl)[1];` + '\n            // Emit font file to .next/static/media\n',
        '            // Emit font file to .next/static/media\n',
      ],
    ],
  },
];

export function sha256(value) {
  return createHash('sha256').update(value).digest('hex');
}

function requireCondition(ok, message) {
  if (!ok) throw new Error(`[next-font-patch] ${message}`);
}

export function patchSource(source, patch) {
  const hash = sha256(source);
  if (hash === patch.after) return source;
  requireCondition(hash === patch.before, `Unrecognized ${patch.file}; review dependency drift before building.`);
  for (const [before, after] of patch.edits) {
    requireCondition(source.split(before).length - 1 === 1, `Expected exactly one match in ${patch.file}.`);
    source = source.replace(before, after);
  }
  requireCondition(sha256(source) === patch.after, `Unexpected patched ${patch.file}; refusing to write.`);
  return source;
}

export function applyPatch(root = resolve(dirname(fileURLToPath(import.meta.url)), '..')) {
  root = realpathSync(root);
  const packageJson = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8'));
  const lock = JSON.parse(readFileSync(resolve(root, 'package-lock.json'), 'utf8'));
  const locked = lock.packages?.['node_modules/next'];
  const nextRoot = resolve(root, 'node_modules/next');
  const location = relative(realpathSync(root), realpathSync(nextRoot));
  requireCondition(location && location !== '..' && !location.startsWith('..' + sep), 'Next must be installed inside this checkout.');
  const installed = JSON.parse(readFileSync(resolve(nextRoot, 'package.json'), 'utf8'));
  requireCondition(packageJson.dependencies?.next === NEXT_VERSION && locked?.version === NEXT_VERSION &&
    locked?.integrity === NEXT_INTEGRITY && installed.version === NEXT_VERSION, 'Expected the exact locked Next 15.1.11 package.');
  // Validate both files before writing either. A partially completed known patch is safe to resume.
  const changes = PATCHES.map((patch) => {
    const path = resolve(nextRoot, 'dist/compiled/@next/font/dist/google', patch.file);
    requireCondition(lstatSync(path).isFile() && !lstatSync(path).isSymbolicLink(), 'Expected a regular dependency file.');
    requireCondition(realpathSync(path) === path, 'Dependency path must not traverse symlinks.');
    const before = readFileSync(path, 'utf8');
    return { path, before, after: patchSource(before, patch) };
  });
  for (const { path, before, after } of changes) {
    if (before === after) continue;
    const temporary = `${path}.font-patch-${process.pid}`;
    try {
      writeFileSync(temporary, after, { flag: 'wx', mode: lstatSync(path).mode & 0o777 });
      renameSync(temporary, path);
    } finally {
      try { unlinkSync(temporary); } catch (error) { if (error.code !== 'ENOENT') throw error; }
    }
    requireCondition(readFileSync(path, 'utf8') === after, 'Dependency patch readback failed.');
  }
  return { files: changes.length, changed: changes.filter(({ before, after }) => before !== after).length };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const result = applyPatch();
    console.log(`[next-font-patch] Next ${NEXT_VERSION}: ${result.files} files verified, ${result.changed} patched.`);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

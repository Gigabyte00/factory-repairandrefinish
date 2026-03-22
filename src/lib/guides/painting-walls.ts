import type { Guide } from '@/types';
import { defaultAuthor } from '../site-config';

export const paintingWallsGuides: Guide[] = [
  // ---------------------------------------------------------------------------
  // Guide 10: Paint a Room Like a Pro
  // ---------------------------------------------------------------------------
  {
    id: 'guide-paint-room-like-pro',
    slug: 'paint-room-like-pro',
    title: 'How to Paint a Room Like a Pro',
    excerpt:
      'Get professional-quality results with proper prep, technique, and the right tools. This guide covers everything from taping and priming to cutting in and rolling for a flawless finish.',
    content: `Painting a room is one of the most transformative home improvement projects — and one of the most commonly botched. The difference between a DIY paint job that looks amateur and one that looks professional comes down to preparation and technique, not talent.

## The 80/20 Rule of Painting

80% of a great paint job is preparation: cleaning the walls, filling holes, taping edges, and priming. Only 20% is the actual painting. Rush the prep and you'll see every shortcut once the paint dries.

## Paint Selection

Use flat or matte finish for ceilings and low-traffic rooms, eggshell or satin for living areas and bedrooms, and semi-gloss for kitchens, bathrooms, and trim. Higher sheen means more durable and washable, but it also highlights imperfections.`,
    category: 'painting-walls',
    difficulty: 'beginner',
    estimatedTime: '4-6 hours per room',
    estimatedCost: {
      low: 80,
      mid: 150,
      high: 200,
      diyVsPro: 'Professional painters charge $400-$800 per room. DIY paint and supplies cost $80-$200 for the same room.',
    },
    tools: [
      '9-inch roller frame and cover (3/8" nap for smooth walls)',
      '2.5-inch angled sash brush',
      'Paint tray',
      'Painter\'s tape (FrogTape or 3M ScotchBlue)',
      'Drop cloths (canvas, not plastic)',
      'Stepladder',
      'Paint can opener and stir stick',
      'Damp rag',
    ],
    materials: [
      'Interior latex paint (1 gallon per 350-400 sq ft per coat)',
      'Primer (if needed for color change or new drywall)',
      'Painter\'s tape',
      'Lightweight spackle (for nail holes)',
      'Fine-grit sandpaper (150-220 grit)',
      'TSP cleaner or degreaser (for kitchen/bath walls)',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Clear and Prep the Room',
        description:
          'Move furniture to the center and cover it with drop cloths. Remove switch plates, outlet covers, curtain rods, and anything hanging on the walls. Place all hardware and screws in a labeled ziplock bag so you can find them later. Lay canvas drop cloths on the floor along the walls — canvas absorbs drips better than plastic, which creates a slippery hazard.',
        imagePrompt:
          'Room being prepared for painting: furniture gathered in center covered with drop cloths, outlet covers removed, canvas drop cloths along walls',
        proTip:
          'Use canvas drop cloths, not plastic. Paint drips on plastic stay wet and get tracked around. Canvas absorbs the drips and stays put.',
      },
      {
        stepNumber: 2,
        title: 'Repair and Clean the Walls',
        description:
          'Fill all nail holes and small dents with lightweight spackle using a putty knife. Let the spackle dry (it goes from pink to white if using DAP DryDex), then sand smooth with 150-grit sandpaper. Wipe the walls with a damp rag to remove dust, cobwebs, and grime. For kitchens, clean grease off walls with TSP or a degreaser — paint won\'t stick to grease.',
        imagePrompt:
          'Filling nail holes with pink spackle that dries white, then sanding smooth, then wiping walls clean with a damp cloth, three-step prep sequence',
        proTip:
          'Run your hand across the wall after sanding. If you feel any bumps, sand them again. Once paint goes on, every imperfection becomes twice as visible.',
      },
      {
        stepNumber: 3,
        title: 'Apply Painter\'s Tape',
        description:
          'Apply painter\'s tape along the ceiling line, baseboards, window trim, and door trim. Press the edge of the tape firmly with a putty knife or credit card to seal it — this prevents paint from bleeding underneath. Don\'t tape off areas you plan to cut in freehand (pros rarely tape the ceiling line, but beginners should). Remove the tape while the final coat is still slightly tacky for the cleanest edge.',
        imagePrompt:
          'Applying green FrogTape along a ceiling line, pressing it down firmly with a putty knife for a clean seal, straight crisp line',
      },
      {
        stepNumber: 4,
        title: 'Prime Where Needed',
        description:
          'Apply primer over spackled spots, bare drywall, or any stains (use a stain-blocking primer like Zinsser for water stains or marker). If you\'re making a dramatic color change (dark to light or light to dark), prime the entire wall with a tinted primer to reduce the number of topcoats needed. Let primer dry for the time specified on the label, usually 1-2 hours.',
        imagePrompt:
          'Roller applying white primer over patched drywall areas and a water stain on a wall, covering imperfections before paint, clean application',
        proTip:
          'Ask the paint store to tint your primer to approximately 50% of your paint color. This dramatically improves coverage in the topcoat, especially with reds, yellows, and deep blues.',
      },
      {
        stepNumber: 5,
        title: 'Cut In the Edges',
        description:
          'Dip your angled sash brush about 1 inch into the paint and tap off the excess on the side of the can (don\'t wipe it on the rim). Paint a 2-3 inch band along the ceiling line, corners, around trim, and along baseboards. Use long, smooth strokes and keep a wet edge. Work in 3-4 foot sections so the cut-in area is still wet when you roll, allowing the brush marks and roller texture to blend.',
        imagePrompt:
          'Hand holding an angled brush cutting in paint along a ceiling line, steady hand creating a clean straight line, close-up technique shot',
        proTip:
          'Load the brush with enough paint that you can make one full pass of 3-4 feet without reloading. Skimpy brushwork leaves thin, visible edges.',
      },
      {
        stepNumber: 6,
        title: 'Roll the Walls',
        description:
          'Pour paint into the tray until the reservoir is half full. Roll the roller cover through the paint, then roll it back and forth on the tray\'s ramp to distribute paint evenly. Apply paint to the wall in a large W or M pattern, then fill in the area with parallel overlapping strokes. Work in 3x3 foot sections, keeping a wet edge to prevent lap marks. Don\'t press too hard — let the roller do the work.',
        imagePrompt:
          'Person rolling paint onto a wall in a W pattern, then filling in with even strokes, paint tray on floor, proper roller technique demonstration',
      },
      {
        stepNumber: 7,
        title: 'Apply the Second Coat',
        description:
          'Let the first coat dry completely (2-4 hours for latex paint). Inspect for thin spots, holidays (missed areas), and drips. Sand any drips smooth with fine sandpaper. Apply the second coat using the same cut-in-then-roll technique. The second coat should go on more smoothly and evenly since the first coat provides a uniform base. Two coats is the minimum for any professional-looking result.',
        imagePrompt:
          'Second coat of paint being applied with a roller, showing improved coverage and even color compared to the first coat, satisfying transformation',
        proTip:
          'The second coat dries slightly faster than the first because the sealed wall absorbs less moisture from the paint.',
      },
      {
        stepNumber: 8,
        title: 'Remove Tape and Reinstall Hardware',
        description:
          'Remove painter\'s tape while the final coat is still slightly tacky (about 30-60 minutes after rolling). Pull the tape back on itself at a 45-degree angle for the cleanest line. If paint has dried over the tape edge, score along the tape line with a utility knife before pulling. Reinstall outlet covers, switch plates, curtain rods, and any wall hardware once the paint is fully dry (usually 24 hours).',
        imagePrompt:
          'Painter\'s tape being pulled off at a 45-degree angle revealing a clean, crisp paint line, satisfying peel, freshly painted room',
        proTip:
          'If you get any bleed-through under the tape, touch it up with a small artist\'s brush and the trim or ceiling color. A small artist brush costs $2 and makes invisible touch-ups.',
      },
    ],
    tips: [
      'Buy more paint than you think you need. One gallon covers about 350-400 sq ft per coat. Keep the extra for future touch-ups.',
      'Box your paint: pour all cans into a 5-gallon bucket and mix thoroughly. This eliminates slight color variations between cans.',
      'Paint the ceiling first (if you\'re doing it), then the walls, then the trim. Work from top to bottom.',
      'Don\'t buy cheap rollers. A $6 Purdy or Wooster roller cover produces dramatically better results than a $2 store-brand cover.',
      'Keep a damp rag in your back pocket to immediately wipe any drips on trim or floor.',
    ],
    warnings: [
      'Ensure adequate ventilation when painting. Open windows and use a fan to circulate air. Paint fumes cause headaches and dizziness in enclosed spaces.',
      'Homes built before 1978 may contain lead paint. Test with a lead test kit before sanding or scraping. Follow EPA lead-safe work practices if lead is present.',
      'Don\'t paint in high humidity (above 85%) or low temperatures (below 50°F). Paint won\'t cure properly and can peel or blister.',
    ],
    affiliateProducts: [
      {
        id: 'prod-purdy-white-dove',
        name: 'Purdy White Dove 9" Roller Cover (3/8" nap, 3-pack)',
        description:
          'Premium woven roller cover for smooth to semi-smooth walls. Excellent paint pick-up and release, minimal lint and splatter. The roller cover pros actually use.',
        price: 22.97,
        affiliateUrl: 'https://www.lowes.com/pd/Purdy-White-Dove/1000169499',
        retailer: 'lowes',
        imageUrl: '/products/purdy-white-dove.jpg',
        rating: 4.7,
        reviewCount: 8400,
        badge: 'our-pick',
      },
      {
        id: 'prod-wooster-shortcut',
        name: 'Wooster Shortcut 2" Angled Sash Brush',
        description:
          'Compact angled brush designed for cutting in. Short handle gives excellent control for edges and trim. Firm synthetic bristles hold their shape through multiple uses.',
        price: 9.98,
        affiliateUrl: 'https://www.homedepot.com/p/Wooster-Shortcut/202066395',
        retailer: 'homedepot',
        imageUrl: '/products/wooster-shortcut.jpg',
        rating: 4.6,
        reviewCount: 11200,
      },
      {
        id: 'prod-frogtape-multi',
        name: 'FrogTape Multi-Surface Painter\'s Tape (1.41" x 60 yd)',
        description:
          'PaintBlock technology creates a micro-barrier that prevents paint bleed. Works on walls, trim, glass, and metal. Clean removal for up to 21 days.',
        price: 7.98,
        affiliateUrl: 'https://www.homedepot.com/p/FrogTape/202244596',
        retailer: 'homedepot',
        imageUrl: '/products/frogtape.jpg',
        rating: 4.6,
        reviewCount: 19700,
        badge: 'best-value',
      },
      {
        id: 'prod-bm-regal-select',
        name: 'Benjamin Moore Regal Select Interior Paint (1 gallon)',
        description:
          'Premium self-priming interior paint with excellent hide and coverage. Low-VOC formula, smooth application, and a durable washable finish. Available in any color.',
        price: 59.99,
        affiliateUrl: 'https://www.amazon.com/dp/B08TKCCNPS',
        retailer: 'amazon',
        imageUrl: '/products/bm-regal-select.jpg',
        rating: 4.8,
        reviewCount: 2600,
      },
    ],
    featuredImage: '/guides/paint-room-like-pro-hero.jpg',
    publishedAt: '2026-02-28T09:00:00Z',
    updatedAt: '2026-03-19T14:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Paint a Room Like a Pro (DIY Guide) | Repair & Refinish',
      description:
        'Paint a room like a professional. Complete guide covering wall prep, taping, priming, cutting in, rolling technique, and finishing for a flawless result.',
      keywords: [
        'how to paint a room',
        'paint room like pro',
        'interior painting tips',
        'wall painting technique',
        'cutting in paint',
        'roller painting walls',
        'DIY painting guide',
        'room painting steps',
      ],
      ogImage: '/guides/paint-room-like-pro-og.jpg',
    },
    faqs: [
      {
        question: 'How many coats of paint do I need?',
        answer:
          'Two coats minimum for any quality result. One coat almost always shows thin spots, roller marks, and uneven color. If you\'re making a dramatic color change (e.g., dark blue to white), you may need a tinted primer plus two topcoats.',
      },
      {
        question: 'How long should I wait between coats?',
        answer:
          'For latex paint, wait 2-4 hours between coats (check the label). The wall should be completely dry to the touch and not tacky. In humid conditions, wait longer. For oil-based paint, wait 24 hours between coats.',
      },
      {
        question: 'Is expensive paint worth it?',
        answer:
          'Yes. Premium paints (like Benjamin Moore Regal or Sherwin-Williams Duration) have higher pigment concentration, better coverage, and more durable binders. You often need fewer coats, which saves time. The difference in material cost between cheap and premium paint for one room is only $30-$50.',
      },
      {
        question: 'Should I use a roller or a brush for walls?',
        answer:
          'Both. Use an angled brush to "cut in" (paint edges, corners, and around trim) and a roller for the large wall surfaces. This combination gives you precision at the edges and smooth, even coverage on the field.',
      },
    ],
    relatedGuides: ['patch-repair-drywall', 'remove-wallpaper', 'install-tile-backsplash'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide 11: Remove Wallpaper
  // ---------------------------------------------------------------------------
  {
    id: 'guide-remove-wallpaper',
    slug: 'remove-wallpaper',
    title: 'How to Remove Wallpaper',
    excerpt:
      'Stripping old wallpaper is tedious but not complicated. Learn the scoring, soaking, and scraping technique that makes removal as painless as possible, plus how to prep walls for paint.',
    content: `Removing wallpaper is a messy, time-consuming job — but it's not difficult. The key is patience and the right approach for your specific wallpaper type. Some wallpaper peels off dry, while others need to be scored and soaked with a remover solution.

## Types of Wallpaper

- **Strippable wallpaper:** Peels off in full sheets from the top down. Try this first — grab a corner and pull slowly.
- **Peelable wallpaper:** The top decorative layer peels off, leaving a paper backing that needs to be soaked and scraped.
- **Traditional pasted wallpaper:** Must be scored, soaked, and scraped in sections. This is the most common type in older homes.

## Time Estimate

Plan for 3-5 hours per room. Strippable wallpaper is faster; traditional pasted wallpaper over unprimed drywall is the slowest.`,
    category: 'painting-walls',
    difficulty: 'beginner',
    estimatedTime: '3-5 hours per room',
    estimatedCost: {
      low: 20,
      mid: 40,
      high: 60,
      diyVsPro: 'A professional wallpaper removal service charges $300-$800 per room. DIY supplies cost $20-$60.',
    },
    tools: [
      'Wallpaper scoring tool (Paper Tiger)',
      'Wide putty knife or scraper (6-inch)',
      'Spray bottle or garden pump sprayer',
      'Drop cloths',
      'Sponge',
      'Stepladder',
      'Garbage bags',
    ],
    materials: [
      'Wallpaper remover concentrate (like DIF)',
      'Warm water',
      'TSP cleaner (for wall prep after removal)',
      'Primer (for painting after removal)',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Test a Corner First',
        description:
          'Use a putty knife to lift a corner of the wallpaper at a seam. Pull slowly at a low angle (close to the wall). If the wallpaper comes off in a full sheet, you have strippable wallpaper — keep peeling from top to bottom. If only the top decorative layer comes off (leaving paper backing), or if it tears into small pieces, you\'ll need to score and soak it.',
        imagePrompt:
          'Hand peeling a corner of wallpaper from a wall, testing if it comes off in a full sheet, showing the peel angle close to the wall, bright room',
        proTip:
          'If the wallpaper was applied over unprimed drywall, removal will be much harder because the paste bonds to the paper face of the drywall. Go slowly to avoid tearing the drywall surface.',
      },
      {
        stepNumber: 2,
        title: 'Prep the Room',
        description:
          'Remove all furniture or move it to the center. Lay canvas or plastic drop cloths on the floor and tape them to the baseboards — wallpaper removal is wet and messy. Turn off power to all outlets and switches on the walls you\'re stripping (wallpaper solution and water will drip into them). Cover outlets and switches with painter\'s tape. Remove all wall-mounted items.',
        imagePrompt:
          'Room prepped for wallpaper removal: drop cloths on floor taped to baseboards, outlet covers removed and taped over, furniture cleared from walls',
        warning:
          'Turn off the breaker for any outlets on walls being stripped. Water and wallpaper remover solution will run down the wall and into outlet boxes. Electrical shock is a real risk.',
      },
      {
        stepNumber: 3,
        title: 'Score the Wallpaper',
        description:
          'Run a wallpaper scoring tool (Paper Tiger) over the entire surface in overlapping circular motions. The tool creates hundreds of tiny perforations that allow the remover solution to penetrate behind the wallpaper and dissolve the paste. Don\'t press too hard — you want to puncture the wallpaper, not gouge the drywall underneath. Score every inch of the wallpaper surface.',
        imagePrompt:
          'Paper Tiger scoring tool being rolled over wallpaper in circular motions, tiny perforations visible in the wallpaper surface, wall-wide coverage',
        proTip:
          'If you don\'t have a scoring tool, you can create perforations with coarse (60-grit) sandpaper. Sand lightly over the wallpaper surface to scratch through the coating.',
      },
      {
        stepNumber: 4,
        title: 'Apply the Remover Solution',
        description:
          'Mix wallpaper remover concentrate with warm water according to the label (DIF concentrate typically mixes 1:4 with warm water). Apply generously to a section of wallpaper using a spray bottle or garden pump sprayer. Saturate the wallpaper completely — you should see it darken as it absorbs the solution. Work in manageable sections (about 4x4 feet) so the solution doesn\'t dry before you scrape.',
        imagePrompt:
          'Pump sprayer applying wallpaper remover solution to scored wallpaper, solution soaking into perforations, wallpaper darkening with moisture, working in sections',
      },
      {
        stepNumber: 5,
        title: 'Wait, Then Scrape',
        description:
          'Let the solution soak for 10-15 minutes. The wallpaper should start to bubble and lift. Slide a wide putty knife or scraper under the wallpaper at a low angle and push forward. The paper should come off in large pieces. If it doesn\'t, re-soak and wait another 10 minutes. Keep the angle shallow to avoid gouging the wall surface. Deposit the wet wallpaper strips directly into garbage bags.',
        imagePrompt:
          'Wide putty knife scraping softened wallpaper off a wall in large satisfying strips, wet paste visible, bucket of discarded wallpaper below, progress shown',
        proTip:
          'Keep re-wetting stubborn areas rather than scraping harder. The solution does the work — aggressive scraping damages the wall.',
      },
      {
        stepNumber: 6,
        title: 'Remove Paste Residue',
        description:
          'After all the wallpaper is off, you\'ll see a film of dried paste residue on the wall. Spray the wall with the remover solution again and wipe with a large sponge, rinsing the sponge frequently in a bucket of clean water. Change the water often. Continue until the wall feels smooth when you run your hand across it — any remaining paste will prevent paint from adhering properly.',
        imagePrompt:
          'Sponge wiping paste residue off a stripped wall, bucket of soapy water nearby, clean bare wall emerging, thorough cleaning process',
      },
      {
        stepNumber: 7,
        title: 'Repair and Prime the Walls',
        description:
          'Inspect the bare walls for gouges, torn drywall paper, and other damage. Fill gouges with spackle and sand smooth when dry. If the drywall paper is torn or fuzzy, skim coat those areas with a thin layer of joint compound, let dry, and sand. Prime the entire wall with a good quality primer (like Zinsser Gardz, which is specifically designed to seal and harden damaged drywall after wallpaper removal). Once primed, the walls are ready for paint.',
        imagePrompt:
          'Repairing wall damage after wallpaper removal: spackling gouges, sanding smooth, then applying primer over the entire stripped wall, three-step finish',
        warning:
          'Never paint directly over stripped walls without priming. Residual paste and damaged drywall paper will cause the paint to bubble and peel.',
      },
    ],
    tips: [
      'A pump sprayer (garden sprayer) makes the job much faster than a spray bottle. You can soak large sections quickly and keep your hands free.',
      'Work from top to bottom. Gravity helps the solution run down into the scored perforations below.',
      'Hot water works better than warm. Heat helps dissolve wallpaper paste faster.',
      'If you encounter multiple layers of wallpaper, remove one layer at a time. Don\'t try to soak through all layers at once.',
      'Bag the wet wallpaper strips as you go. If they dry on the floor, they\'ll stick to the drop cloth and create a second removal project.',
    ],
    warnings: [
      'Turn off power to all outlets and switches on the walls you\'re stripping. Water and remover solution will flow into electrical boxes.',
      'If the wallpaper was applied over unprimed drywall, the paper face of the drywall may come off with the wallpaper. Go slowly and be prepared to skim coat those areas.',
      'Homes built before 1978 may have lead paint under the wallpaper. Test before sanding or scraping exposed paint surfaces.',
    ],
    affiliateProducts: [
      {
        id: 'prod-dif-remover',
        name: 'Zinsser DIF Fast-Acting Wallpaper Stripper (32 oz concentrate)',
        description:
          'Enzyme-based formula that dissolves wallpaper paste quickly. One bottle covers 400-500 sq ft of wallpaper. Low odor and biodegradable.',
        price: 9.98,
        affiliateUrl: 'https://www.homedepot.com/p/Zinsser-DIF/100091158',
        retailer: 'homedepot',
        imageUrl: '/products/zinsser-dif.jpg',
        rating: 4.4,
        reviewCount: 7600,
        badge: 'our-pick',
      },
      {
        id: 'prod-paper-tiger',
        name: 'Zinsser PaperTiger Scoring Tool (single head)',
        description:
          'Rolling scoring tool with tiny wheels that create hundreds of perforations. Lets remover solution penetrate behind wallpaper without damaging drywall.',
        price: 6.98,
        affiliateUrl: 'https://www.homedepot.com/p/Zinsser-PaperTiger/100091161',
        retailer: 'homedepot',
        imageUrl: '/products/paper-tiger.jpg',
        rating: 4.2,
        reviewCount: 4300,
        badge: 'best-value',
      },
      {
        id: 'prod-zinsser-gardz',
        name: 'Zinsser Gardz Drywall Sealer (1 quart)',
        description:
          'Specifically designed to seal and harden damaged drywall after wallpaper removal. Penetrates and binds torn paper fibers. Essential primer for post-wallpaper walls.',
        price: 14.98,
        affiliateUrl: 'https://www.lowes.com/pd/Zinsser-Gardz/1000371821',
        retailer: 'lowes',
        imageUrl: '/products/zinsser-gardz.jpg',
        rating: 4.7,
        reviewCount: 3800,
      },
      {
        id: 'prod-warner-scraper',
        name: 'Warner 6" ProGrip Flexible Putty Knife',
        description:
          'Flexible stainless steel blade glides under wallpaper without gouging drywall. Soft-grip handle for comfort during long stripping sessions.',
        price: 8.47,
        affiliateUrl: 'https://www.amazon.com/dp/B000BQXQF4',
        retailer: 'amazon',
        imageUrl: '/products/warner-scraper.jpg',
        rating: 4.5,
        reviewCount: 5100,
      },
    ],
    featuredImage: '/guides/remove-wallpaper-hero.jpg',
    publishedAt: '2026-03-05T09:00:00Z',
    updatedAt: '2026-03-19T15:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Remove Wallpaper (Score, Soak, Scrape Method) | Repair & Refinish',
      description:
        'Remove wallpaper the right way with scoring, soaking, and scraping. Complete guide for stripping old wallpaper and prepping walls for paint.',
      keywords: [
        'remove wallpaper',
        'strip wallpaper',
        'wallpaper removal',
        'how to remove wallpaper',
        'wallpaper remover',
        'DIF wallpaper stripper',
        'scrape wallpaper',
        'wallpaper scoring tool',
      ],
      ogImage: '/guides/remove-wallpaper-og.jpg',
    },
    faqs: [
      {
        question: 'Can I paint over wallpaper instead of removing it?',
        answer:
          'Technically yes, but it\'s not recommended. Wallpaper seams, texture, and patterns will show through paint. The paint can also cause the wallpaper to bubble or peel. Removing the wallpaper first gives a vastly better result that lasts.',
      },
      {
        question: 'Can I use fabric softener instead of wallpaper remover?',
        answer:
          'A mixture of hot water and liquid fabric softener (1:1 ratio) does work as a DIY remover. However, commercial wallpaper removers like DIF contain enzymes that break down paste more effectively and are only about $10 per room. The dedicated product is worth the small cost.',
      },
      {
        question: 'How do I remove wallpaper from drywall without damage?',
        answer:
          'Score lightly (don\'t press hard with the scoring tool), soak thoroughly (let the solution do the work), and scrape at a shallow angle with a flexible putty knife. If the wallpaper was applied over unprimed drywall, some paper tearing is inevitable. Plan to skim coat and prime damaged areas.',
      },
    ],
    relatedGuides: ['paint-room-like-pro', 'patch-repair-drywall', 'install-tile-backsplash'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide: Create an Accent Wall
  // ---------------------------------------------------------------------------
  {
    id: 'guide-create-accent-wall',
    slug: 'create-accent-wall',
    title: 'How to Create an Accent Wall',
    excerpt:
      'Transform any room with a bold accent wall in 3-4 hours. This beginner guide covers color selection, prep, painting technique, and design options including geometric patterns and board-and-batten.',
    content: `An accent wall is the quickest way to add drama and personality to a room without the commitment of painting every wall. By painting one wall a bold or contrasting color, you create a focal point that anchors furniture, artwork, or a fireplace.

## Choosing the Right Wall

Pick the wall that naturally draws the eye — usually the wall behind the bed in a bedroom, behind the sofa in a living room, or the fireplace wall. Avoid walls broken up by doors and windows, which fragment the visual impact.

## Color Strategy

Choose a color 2-3 shades darker or more saturated than your other walls for a subtle accent. Or go bold with a completely different hue — deep navy, forest green, charcoal, or terracotta are popular accent wall colors that work with neutral rooms. Test your color with a sample pint before committing.`,
    category: 'painting-walls',
    difficulty: 'beginner',
    estimatedTime: '3-4 hours',
    estimatedCost: {
      low: 40,
      mid: 70,
      high: 100,
      diyVsPro: 'A professional painter charges $200-$400 for an accent wall. DIY materials cost $40-$100.',
    },
    tools: [
      '9-inch roller frame and cover (3/8" nap)',
      '2.5-inch angled sash brush',
      'Paint tray',
      'Painter\'s tape',
      'Drop cloth',
      'Stepladder',
      'Level (for geometric patterns)',
    ],
    materials: [
      'Interior latex paint (1 gallon is enough for most accent walls)',
      'Primer (if making a dramatic color change)',
      'Painter\'s tape',
      'Lightweight spackle',
      'Fine-grit sandpaper (150-220 grit)',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Choose Your Wall and Color',
        description:
          'Select the wall that serves as the natural focal point of the room. Hold paint samples against the wall at different times of day — colors shift dramatically in morning vs. evening light. Buy a sample pint and paint a 2x2 foot test patch. Live with it for 24 hours before committing. Bold colors often need a tinted primer underneath for true color coverage in two coats.',
        imagePrompt:
          'Paint color samples held against a wall, 2x2 foot test patch painted on a bedroom wall, different lighting conditions shown, color selection process',
        proTip:
          'Deep colors like navy, emerald, and charcoal look stunning but require more coats. Ask the paint store to tint your primer to 50% of the final color — this dramatically improves coverage.',
      },
      {
        stepNumber: 2,
        title: 'Prep the Wall',
        description:
          'Fill any nail holes or dents with spackle. Sand the patches smooth when dry. Wipe the wall with a damp cloth to remove dust. Apply painter\'s tape along the ceiling line, adjacent walls (where the accent wall meets the regular-colored walls), baseboards, and around window and door trim. Press the tape edge firmly with a putty knife to prevent bleed-through.',
        imagePrompt:
          'Accent wall being prepped: spackle on nail holes, painter tape applied along ceiling and adjacent wall corners, clean surface ready for paint',
      },
      {
        stepNumber: 3,
        title: 'Prime If Needed',
        description:
          'If you\'re painting a dramatic color change (light to dark or dark to light), apply a coat of tinted primer first. For dark accent colors over a light wall, ask the paint store to tint the primer to a gray that approximates the accent color. This base coat ensures the final color reads true in just two topcoats instead of three or four. Let the primer dry 1-2 hours.',
        imagePrompt:
          'Roller applying tinted gray primer to a wall as a base for a dark accent color, even coverage, primer before topcoat technique',
      },
      {
        stepNumber: 4,
        title: 'Cut In the Edges',
        description:
          'Use your angled sash brush to paint a 2-3 inch band along all taped edges — ceiling, corners, baseboards, and trim. Work in 3-4 foot sections so the cut-in area stays wet until you roll. For the corners where the accent wall meets the adjacent walls, cut in carefully along the tape line. This is the most visible transition and needs to be clean.',
        imagePrompt:
          'Angled brush cutting in deep navy paint along the ceiling line and corner of an accent wall, careful technique at the wall-to-wall transition',
        proTip:
          'When cutting in at the corner where two different wall colors meet, overlap the painter\'s tape onto the adjacent wall by 1/4 inch. This ensures a razor-sharp color transition.',
      },
      {
        stepNumber: 5,
        title: 'Roll the First Coat',
        description:
          'Load your roller and apply paint in W or M patterns, then fill in with even, overlapping strokes. Work from top to bottom in 3x3 foot sections. Keep a wet edge to avoid lap marks. Don\'t worry if the first coat looks uneven or streaky — dark colors especially look patchy on the first coat. This is normal and the second coat will even everything out.',
        imagePrompt:
          'Roller applying deep emerald green paint to an accent wall, W pattern technique, first coat showing expected patchiness, working top to bottom',
      },
      {
        stepNumber: 6,
        title: 'Apply the Second Coat and Remove Tape',
        description:
          'Wait 2-4 hours for the first coat to dry completely. Apply the second coat using the same cut-in-then-roll technique. The second coat should look rich, even, and fully opaque. Remove the painter\'s tape while the final coat is still slightly tacky (about 30-60 minutes after rolling). Pull the tape back on itself at a 45-degree angle for the cleanest line. Step back and admire the transformation.',
        imagePrompt:
          'Second coat of accent wall paint being rolled on for full, rich coverage, then painter tape being peeled to reveal a crisp color transition, dramatic before-and-after',
      },
    ],
    tips: [
      'Deep, muted tones (navy, forest green, charcoal) are safer accent wall choices than bright or neon colors, which can feel overwhelming.',
      'The accent wall should be the backdrop for a focal element — your bed, sofa, fireplace, or gallery wall. Don\'t accent a blank wall with nothing on it.',
      'For a textured look, consider board-and-batten, shiplap, or geometric wood trim before painting. The 3D texture adds architectural interest beyond just color.',
      'Metallic or matte black accent walls are trending and create a luxe, modern look. Use a flat or matte finish for the most sophisticated appearance.',
    ],
    warnings: [
      'Test your accent color with a sample pint before buying gallons. Colors look dramatically different on a large wall than on a small chip card.',
      'Ensure adequate ventilation when painting. Open windows and use a fan for air circulation.',
      'Dark accent walls show imperfections more readily than light walls. Fix all dents and holes before painting.',
    ],
    affiliateProducts: [
      {
        id: 'prod-bm-hale-navy',
        name: 'Benjamin Moore Regal Select HC-154 Hale Navy (1 gallon)',
        description:
          'The #1 best-selling accent wall color. Rich, sophisticated navy that works in any room. Self-priming formula. Low-VOC. Available in any sheen.',
        price: 59.99,
        affiliateUrl: 'https://www.amazon.com/dp/B08TKCCNPS',
        retailer: 'amazon',
        imageUrl: '/products/bm-hale-navy.jpg',
        rating: 4.8,
        reviewCount: 2600,
        badge: 'Our Pick',
      },
      {
        id: 'prod-frogtape-delicate',
        name: 'FrogTape Delicate Surface Painter\'s Tape (1.41" x 60 yd)',
        description:
          'Low-adhesion tape for freshly painted walls and delicate surfaces. Clean removal for up to 60 days. PaintBlock technology prevents bleed-through.',
        price: 8.98,
        affiliateUrl: 'https://www.homedepot.com/p/FrogTape-Delicate/205171874',
        retailer: 'homedepot',
        imageUrl: '/products/frogtape-delicate.jpg',
        rating: 4.5,
        reviewCount: 8900,
        badge: 'Best Value',
      },
      {
        id: 'prod-purdy-nylox',
        name: 'Purdy Nylox Dale 2.5" Angled Sash Brush',
        description:
          'Ultra-soft nylon bristles for smooth latex paint application. Excellent for cutting in straight lines on accent walls. Professional quality at a DIY price.',
        price: 13.98,
        affiliateUrl: 'https://www.amazon.com/dp/B001DJ2P0K',
        retailer: 'amazon',
        imageUrl: '/products/purdy-nylox.jpg',
        rating: 4.7,
        reviewCount: 6400,
      },
    ],
    featuredImage: '/images/guides/create-accent-wall.jpg',
    publishedAt: '2025-08-15T09:00:00Z',
    updatedAt: '2026-01-05T14:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Create an Accent Wall (Color & Design Guide) | Repair & Refinish',
      description:
        'Create a stunning accent wall in 3-4 hours. Covers color selection, wall prep, painting techniques, and design options for a dramatic room transformation.',
      keywords: [
        'accent wall',
        'paint accent wall',
        'accent wall colors',
        'feature wall painting',
        'bold wall color',
        'accent wall ideas',
        'DIY accent wall',
      ],
    },
    faqs: [
      {
        question: 'Which wall should be the accent wall?',
        answer:
          'Choose the wall that naturally draws the eye when you enter the room. In bedrooms, it\'s usually the wall behind the headboard. In living rooms, the fireplace wall or the wall behind the main sofa. Avoid walls broken up by multiple doors and windows.',
      },
      {
        question: 'Can I use wallpaper instead of paint for an accent wall?',
        answer:
          'Absolutely. Peel-and-stick wallpaper is a popular accent wall option — it\'s easy to install, comes in hundreds of patterns, and is removable for renters. Traditional wallpaper is more durable but harder to remove later.',
      },
      {
        question: 'Will a dark accent wall make my room feel smaller?',
        answer:
          'Not necessarily. A single dark wall can actually create depth and make the room feel larger by drawing the eye to a focal point. The key is keeping the remaining three walls light. Rooms that feel smaller are those where ALL walls are painted dark.',
      },
    ],
    relatedGuides: ['paint-room-like-pro', 'patch-repair-drywall', 'remove-wallpaper'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide: Apply Textured Wall Finish
  // ---------------------------------------------------------------------------
  {
    id: 'guide-apply-textured-wall-finish',
    slug: 'apply-textured-wall-finish',
    title: 'How to Apply Textured Wall Finish',
    excerpt:
      'Add visual depth and hide imperfections with a textured wall finish. This intermediate guide covers knockdown, orange peel, skip trowel, and skim coat techniques — from mixing to the final seal.',
    content: `Textured walls add character to flat, boring drywall and are excellent at hiding minor imperfections that would show through flat paint. Whether you're matching existing texture on a repair or adding a new finish to an entire room, the techniques are learnable with practice.

## Popular Texture Styles

- **Orange peel:** Light, subtle texture that resembles citrus skin. Applied with a hopper gun.
- **Knockdown:** Splattered joint compound that's flattened with a trowel for a rustic, stucco-like look.
- **Skip trowel:** Hand-applied with a curved trowel for an old-world Mediterranean feel.
- **Skim coat:** A thin, smooth layer of compound that creates a polished, refined surface.

## Practice First

Texture is permanent and hard to undo. Practice on a spare piece of drywall or cardboard before applying to your actual wall. This is especially important for skip trowel, which is the most technique-dependent style.`,
    category: 'painting-walls',
    difficulty: 'intermediate',
    estimatedTime: '4-6 hours',
    estimatedCost: {
      low: 30,
      mid: 65,
      high: 100,
      diyVsPro: 'A drywall professional charges $500-$1,500 per room for texture. DIY materials cost $30-$100.',
    },
    tools: [
      'Drywall hopper gun (for orange peel/knockdown)',
      'Knockdown knife (18-inch)',
      'Drywall trowel (for skip trowel)',
      'Mixing drill and paddle',
      'Bucket (5-gallon)',
      'Spray bottle',
      'Drop cloths',
      'Painter\'s tape',
    ],
    materials: [
      'All-purpose joint compound (pre-mixed)',
      'Wall texture spray (for small areas)',
      'Primer',
      'Paint',
      'Plastic sheeting (to protect floors)',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Prepare the Room and Walls',
        description:
          'Cover the floor with plastic sheeting taped to the baseboards. Cover any furniture with drop cloths. Apply painter\'s tape along the ceiling line and around all trim, outlets, and switches. The walls should be clean, primed, and free of loose paint or debris. Fill any cracks or holes with spackle and sand smooth before texturing.',
        imagePrompt:
          'Room being prepped for wall texturing: plastic on floors, tape on ceiling and trim, clean primed walls ready for texture application',
        warning:
          'Texture application is messy. Cover everything you don\'t want textured, including light fixtures and the floor. Dried joint compound is difficult to remove from surfaces.',
      },
      {
        stepNumber: 2,
        title: 'Mix the Joint Compound',
        description:
          'For hopper gun application (orange peel and knockdown), thin pre-mixed joint compound with water to a pancake-batter consistency. Add water gradually — about 1 pint per gallon of compound — and mix with a drill-mounted paddle mixer until smooth with no lumps. For skip trowel, keep the compound slightly thicker (peanut butter consistency). The consistency directly controls the texture result, so test on cardboard first.',
        imagePrompt:
          'Joint compound being thinned with water and mixed with a drill paddle in a 5-gallon bucket, testing consistency by dripping from the paddle, smooth batter texture',
        proTip:
          'Mix more compound than you think you need. Running out mid-wall and mixing a new batch often creates a visible texture difference where the batches meet.',
      },
      {
        stepNumber: 3,
        title: 'Apply Orange Peel Texture',
        description:
          'Load the thinned compound into a drywall hopper gun. Set the nozzle to a small opening and the air pressure to 25-30 PSI. Hold the gun 18-24 inches from the wall and spray in sweeping, overlapping passes. The splatter should create small, evenly-sized dots resembling orange skin. For consistency, maintain the same distance and speed across the entire wall. Let it dry without knocking it down — this IS the final texture.',
        imagePrompt:
          'Hopper gun spraying joint compound onto a wall creating orange peel texture, even dot pattern, consistent distance maintained, wall texture taking shape',
      },
      {
        stepNumber: 4,
        title: 'Apply Knockdown Texture',
        description:
          'Spray the compound using the hopper gun as with orange peel, but use a slightly larger nozzle setting to create bigger splatter. Wait 10-15 minutes until the compound starts to set (it loses its wet sheen but is still pliable). Using a knockdown knife, lightly drag the blade across the high points in a single pass, flattening the peaks while leaving texture in the valleys. Work in one direction per section. Don\'t press too hard or you\'ll remove all the texture.',
        imagePrompt:
          'Splattered joint compound on a wall, then a knockdown knife being dragged across the surface flattening the peaks, creating a stucco-like pattern, technique demonstration',
        proTip:
          'The timing of the knockdown is critical. If the compound is too wet, the knife smears it. If it\'s too dry, the knife drags and tears. The sweet spot is when the surface has lost its wet sheen but still dents when you press a finger.',
      },
      {
        stepNumber: 5,
        title: 'Apply Skip Trowel Texture (Hand-Applied)',
        description:
          'Load a small amount of joint compound onto a curved drywall trowel. Hold the trowel at a slight angle (about 15 degrees) and arc it across the wall in random, overlapping sweeps. The trowel "skips" across the surface, leaving compound on the high spots and skipping over the low spots. Vary your arc direction and pressure for a natural, organic look. This technique takes practice — work from the bottom up and keep passes irregular.',
        imagePrompt:
          'Curved trowel applying joint compound in sweeping arcs across a wall, skip trowel texture building up with overlapping passes, Mediterranean-style finish taking shape',
      },
      {
        stepNumber: 6,
        title: 'Let Dry, Prime, and Paint',
        description:
          'Let the texture dry completely — 24 hours for most textures, up to 48 hours for heavy applications. Do not touch or sand the texture while it\'s drying. Once dry, apply a coat of drywall primer to seal the compound (raw joint compound absorbs paint unevenly). After the primer dries, apply two coats of your chosen paint color. A flat or matte sheen enhances texture visibility; satin or semi-gloss fills in the texture for a subtler effect.',
        imagePrompt:
          'Textured wall being primed with a roller, then painted, showing the texture pattern visible through the paint, finished textured accent wall in a room',
        proTip:
          'Use a thick-nap roller cover (3/4" nap) to work paint into the texture crevices. A thin-nap roller misses the low points and leaves them uncoated.',
      },
    ],
    tips: [
      'Practice your texture technique on scrap drywall or cardboard before committing to the wall. Texture is hard to undo once dried.',
      'For small repair patches where you need to match existing texture, buy a spray can of wall texture (like Homax Wall Texture). It\'s much easier than mixing and using a hopper gun for a small area.',
      'Knockdown texture hides imperfections better than any other finish — it\'s ideal for older walls with bumps and patches.',
      'If you don\'t own a hopper gun, many hardware stores rent them for $30-$50 per day.',
    ],
    warnings: [
      'Wear a dust mask and safety glasses when spraying texture. Joint compound spray creates fine airborne particles.',
      'Texture application is very messy. Cover all surfaces you don\'t want coated, including floors, windows, and light fixtures.',
      'Do not attempt to sand texture until it is completely dry (24-48 hours). Sanding wet compound creates a smeared mess.',
    ],
    affiliateProducts: [
      {
        id: 'prod-homax-knockdown',
        name: 'Homax Pro Grade Knockdown Wall Texture (25 oz)',
        description:
          'Spray-on wall texture for knockdown and orange peel finishes. No mixing or hopper gun needed. Adjustable nozzle controls texture size. Perfect for repairs and small rooms.',
        price: 14.98,
        affiliateUrl: 'https://www.homedepot.com/p/Homax-Knockdown-Texture/100044279',
        retailer: 'homedepot',
        imageUrl: '/products/homax-knockdown.jpg',
        rating: 4.2,
        reviewCount: 6800,
        badge: 'Best Value',
      },
      {
        id: 'prod-goldblatt-knife',
        name: 'Goldblatt 18" Stainless Steel Knockdown Knife',
        description:
          'Wide stainless steel blade for smooth, consistent knockdown texture. Comfortable rubber grip. Stainless won\'t rust or leave marks in the compound.',
        price: 18.97,
        affiliateUrl: 'https://www.amazon.com/dp/B00LIGTG9G',
        retailer: 'amazon',
        imageUrl: '/products/goldblatt-knockdown.jpg',
        rating: 4.5,
        reviewCount: 3200,
      },
      {
        id: 'prod-sheetrock-compound-texture',
        name: 'USG Sheetrock All Purpose Joint Compound (4.5 gal)',
        description:
          'The purple-lid bucket trusted by professionals. Smooth, easy to thin for spray application. Sands easily when dry. One bucket textures an entire room.',
        price: 18.48,
        affiliateUrl: 'https://www.lowes.com/pd/USG-Sheetrock/1000176507',
        retailer: 'lowes',
        imageUrl: '/products/sheetrock-compound.jpg',
        rating: 4.7,
        reviewCount: 7100,
        badge: 'Pro Pick',
      },
    ],
    featuredImage: '/images/guides/apply-textured-wall-finish.jpg',
    publishedAt: '2025-07-20T09:00:00Z',
    updatedAt: '2025-12-15T14:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Apply Textured Wall Finish (4 Techniques) | Repair & Refinish',
      description:
        'Apply textured wall finish with knockdown, orange peel, skip trowel, or skim coat techniques. Complete DIY guide with mixing, application, and painting instructions.',
      keywords: [
        'textured wall finish',
        'knockdown texture',
        'orange peel texture',
        'skip trowel wall',
        'wall texture DIY',
        'drywall texture',
        'textured paint walls',
      ],
    },
    faqs: [
      {
        question: 'What\'s the easiest wall texture for beginners?',
        answer:
          'Orange peel is the easiest — it\'s just spray and dry, no troweling required. Knockdown is the next easiest. Skip trowel requires the most practice because the pattern depends entirely on your hand technique.',
      },
      {
        question: 'Can I texture over existing flat drywall?',
        answer:
          'Yes. Clean and prime the walls first. The primer creates a consistent surface for the texture compound to bond to. You can texture over painted drywall as long as the paint is in good condition and not peeling.',
      },
      {
        question: 'How do I match existing texture on a repair patch?',
        answer:
          'Buy a spray can of Homax Wall Texture and practice on cardboard. Adjust the nozzle and distance until the splatter size matches your existing texture. Apply to the patch, and if it\'s knockdown, wait the same amount of time before knocking down as the original installer would have.',
      },
    ],
    relatedGuides: ['patch-repair-drywall', 'paint-room-like-pro', 'create-accent-wall'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide: Paint Kitchen Cabinets
  // ---------------------------------------------------------------------------
  {
    id: 'guide-paint-kitchen-cabinets',
    slug: 'paint-kitchen-cabinets',
    title: 'How to Paint Kitchen Cabinets',
    excerpt:
      'Transform your kitchen without a $20,000 remodel by painting the cabinets. This intermediate 2-day project covers degreasing, sanding, priming, and painting for a factory-smooth finish.',
    content: `Painting kitchen cabinets is the single highest-impact, lowest-cost kitchen transformation. New cabinets cost $10,000-$25,000 installed. Painting existing cabinets costs $200-$400 in materials and delivers a dramatic visual upgrade that looks professional when done correctly.

## The Secret to a Pro Finish

The difference between a DIY cabinet paint job that looks amateur and one that looks factory-sprayed comes down to three things: thorough degreasing, the right primer, and thin coats. Skip any of these and the paint will peel, chip, or show brush marks within months.

## Cabinet-Specific Paint

Regular wall paint will NOT hold up on cabinets. You need a cabinet-grade paint or a high-quality alkyd/enamel like Benjamin Moore Advance or Sherwin-Williams ProClassic. These paints self-level (minimizing brush marks) and cure to a hard, durable finish that withstands kitchen abuse.`,
    category: 'painting-walls',
    difficulty: 'intermediate',
    estimatedTime: '8-12 hours over 2 days',
    estimatedCost: {
      low: 150,
      mid: 275,
      high: 400,
      diyVsPro: 'Professional cabinet painting costs $3,000-$7,000. DIY materials cost $150-$400 and produce comparable results with proper technique.',
    },
    tools: [
      'High-density foam rollers (4-inch)',
      'Angled sash brush (2-inch)',
      'Screwdriver',
      'Sanding sponges (120 and 220 grit)',
      'Tack cloth',
      'Painter\'s tape',
      'Sawhorses or a drying rack',
      'Drop cloths',
      'Ziplock bags (for hardware)',
    ],
    materials: [
      'TSP or heavy-duty degreaser',
      'Shellac-based primer (BIN or similar)',
      'Cabinet-grade paint (Benjamin Moore Advance or Sherwin-Williams ProClassic)',
      'Sandpaper (120 and 220 grit)',
      'New cabinet hardware (optional upgrade)',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Remove Doors, Drawers, and Hardware',
        description:
          'Number each door and its corresponding hinge location with painter\'s tape and a marker (e.g., "L1," "L2," "R1"). Remove all doors, drawer fronts, and hardware. Place hinges and screws in labeled ziplock bags. Remove shelves if possible. You\'ll paint the cabinet boxes in place and the doors and drawers on sawhorses or a drying rack in the garage.',
        imagePrompt:
          'Kitchen cabinet doors being removed, labeled with numbers on painter tape, hardware in ziplock bags, organized disassembly process',
        proTip:
          'Take a photo of the entire kitchen before starting. When fatigue sets in on day two, the "before" photo motivates you to finish.',
      },
      {
        stepNumber: 2,
        title: 'Clean and Degrease Everything',
        description:
          'Mix TSP (trisodium phosphate) with warm water according to the label and scrub every surface you plan to paint — cabinet boxes, doors, drawer fronts. Kitchen cabinets accumulate years of cooking grease that you can\'t see but paint can\'t bond to. Scrub with a sponge, rinse with clean water, and let everything dry completely. This step is non-negotiable — skip it and your paint will peel within months.',
        imagePrompt:
          'Sponge scrubbing cabinet surface with TSP solution, brown grease residue visible on the sponge, thorough degreasing process, kitchen setting',
        warning:
          'Wear rubber gloves when using TSP — it\'s a strong alkaline cleaner that irritates skin. Work in a ventilated area.',
      },
      {
        stepNumber: 3,
        title: 'Sand All Surfaces',
        description:
          'Sand every surface to be painted with 120-grit sandpaper or sanding sponges. You\'re not removing the finish — you\'re scuffing it to give the primer something to grip. Sand with the grain on flat surfaces and use sanding sponges on profiles and edges. Wipe all surfaces with a tack cloth to remove every speck of dust. Any dust left on the surface will be trapped under the primer.',
        imagePrompt:
          'Sanding sponge scuffing a cabinet door surface, fine dust being created, then tack cloth wiping the surface clean, prep sequence',
      },
      {
        stepNumber: 4,
        title: 'Apply Shellac-Based Primer',
        description:
          'Apply one coat of shellac-based primer (Zinsser BIN is the gold standard for cabinets). Use a foam roller on flat surfaces and a brush on edges and profiles. Shellac primer blocks stains, adheres to any surface (even slick factory finishes), and provides a perfect base for cabinet paint. Let it dry 1 hour, then lightly sand with 220-grit and tack cloth again.',
        imagePrompt:
          'Foam roller applying shellac-based primer to a cabinet door laid flat on sawhorses, smooth even coverage, primer on both sides',
        proTip:
          'BIN shellac primer smells strong but dries fast (45 minutes touch-dry). Open windows and use a fan. The smell dissipates completely once dry. It\'s worth the fumes — no other primer performs as well on cabinets.',
      },
      {
        stepNumber: 5,
        title: 'Paint the Cabinet Boxes',
        description:
          'With the doors and drawers removed, paint the visible parts of the cabinet boxes in place. Use a 4-inch foam roller on flat panel areas and a 2-inch brush on edges and corners. Apply thin coats — two thin coats are better than one thick coat. Thick paint runs, sags, and takes days to cure. Let the first coat dry 4-6 hours, then apply the second coat.',
        imagePrompt:
          'Foam mini-roller painting the inside face frame of kitchen cabinets, thin even coat, brush for edges, cabinet boxes being painted in place',
      },
      {
        stepNumber: 6,
        title: 'Paint the Doors and Drawer Fronts',
        description:
          'Lay doors flat on sawhorses (flat surfaces dry with fewer runs). Paint the back side first: roll the flat panel, then brush the raised profiles. Let the backs dry overnight, flip, and paint the fronts. Apply two thin coats on each side, sanding lightly with 220-grit between coats for the smoothest possible finish. Don\'t rush — thin coats cure harder and smoother.',
        imagePrompt:
          'Cabinet doors laid flat on sawhorses being painted with a foam roller, smooth white paint, multiple doors drying, garage workspace',
        proTip:
          'For the smoothest finish, add 10% Floetrol (latex paint conditioner) to your paint. It extends the drying time slightly, allowing brush and roller marks to level out.',
      },
      {
        stepNumber: 7,
        title: 'Let Cure, Then Reinstall',
        description:
          'Cabinet paint needs to CURE, not just dry. It may feel dry in 4 hours, but it takes 2-3 weeks to reach full hardness. Wait at least 3 days before rehanging doors (longer in humid conditions). Install new hardware if you\'re upgrading — this is the cheapest way to modernize the look further. Rehang doors using your numbered labels. Adjust hinges so doors hang evenly.',
        imagePrompt:
          'Freshly painted white cabinet doors being reinstalled with new brushed brass hardware, cabinet transformation complete, bright modern kitchen',
      },
    ],
    tips: [
      'Benjamin Moore Advance is the #1 recommended cabinet paint for DIYers. It self-levels beautifully and cures to a furniture-grade finish.',
      'Don\'t skip the degreasing step. TSP cleaning is the single biggest factor in whether cabinet paint sticks or peels.',
      'New hardware transforms painted cabinets even further. Modern bar pulls or brass knobs cost $3-$8 each and take 5 minutes to install.',
      'Paint the insides of cabinets only if they\'re visible (glass-front cabinets). Otherwise, focus your effort on the visible surfaces.',
      'Use a foam roller, not a fabric roller. Foam gives a smoother, stipple-free finish on cabinets.',
    ],
    warnings: [
      'Do NOT use regular wall paint on cabinets. It\'s too soft and will chip and peel within months of kitchen use.',
      'Shellac-based primer (BIN) is flammable and fumes are strong. Ensure good ventilation and no ignition sources.',
      'Don\'t close cabinet doors for at least 2 weeks after painting. The paint needs to cure fully or doors will stick to the frames and peel.',
    ],
    affiliateProducts: [
      {
        id: 'prod-bm-advance',
        name: 'Benjamin Moore Advance Interior Paint (1 quart, Satin)',
        description:
          'The gold standard for DIY cabinet painting. Waterborne alkyd formula self-levels to a furniture-grade finish. Low-VOC. Dries slowly for maximum leveling. Satin sheen is ideal for cabinets.',
        price: 28.99,
        affiliateUrl: 'https://www.amazon.com/dp/B08TKCCNPS',
        retailer: 'amazon',
        imageUrl: '/products/bm-advance.jpg',
        rating: 4.7,
        reviewCount: 3200,
        badge: 'Our Pick',
      },
      {
        id: 'prod-zinsser-bin',
        name: 'Zinsser B-I-N Shellac-Based Primer (1 quart)',
        description:
          'Ultimate adhesion primer for cabinets. Blocks stains, tannin bleed, and odors. Dries in 45 minutes. Sticks to glossy surfaces without sanding. The only primer you need for cabinets.',
        price: 14.98,
        affiliateUrl: 'https://www.homedepot.com/p/Zinsser-BIN-Primer/100398381',
        retailer: 'homedepot',
        imageUrl: '/products/zinsser-bin.jpg',
        rating: 4.7,
        reviewCount: 11200,
        badge: 'Best Value',
      },
      {
        id: 'prod-whizz-foam-roller',
        name: 'Whizz 4" Foam Roller Covers (10-pack)',
        description:
          'High-density foam mini-rollers that produce a super-smooth finish on cabinets. No stipple or texture. Disposable — use a fresh one for each coat. The secret weapon of cabinet painters.',
        price: 12.97,
        affiliateUrl: 'https://www.amazon.com/dp/B001DZHV7K',
        retailer: 'amazon',
        imageUrl: '/products/whizz-foam.jpg',
        rating: 4.5,
        reviewCount: 8400,
      },
    ],
    featuredImage: '/images/guides/paint-kitchen-cabinets.jpg',
    publishedAt: '2025-06-10T09:00:00Z',
    updatedAt: '2025-11-20T14:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Paint Kitchen Cabinets Like a Pro | Repair & Refinish',
      description:
        'Paint kitchen cabinets for a factory-smooth finish. Complete 2-day guide covering degreasing, sanding, shellac primer, and cabinet-grade paint application. Save $5,000+ over new cabinets.',
      keywords: [
        'paint kitchen cabinets',
        'cabinet painting DIY',
        'how to paint cabinets',
        'kitchen cabinet makeover',
        'cabinet paint',
        'Benjamin Moore Advance',
        'cabinet primer',
        'refinish kitchen cabinets',
      ],
    },
    faqs: [
      {
        question: 'How long does cabinet paint take to fully cure?',
        answer:
          'Cabinet paint is touch-dry in 4-6 hours but takes 2-3 weeks to reach full hardness. During the curing period, be gentle — don\'t slam doors, stack items against the paint, or scrub with abrasive cleaners. After full cure, the finish is extremely durable.',
      },
      {
        question: 'Can I paint laminate cabinets?',
        answer:
          'Yes, with proper prep. Shellac-based primer (BIN) adheres to laminate surfaces. Clean thoroughly with TSP, scuff-sand with 120-grit, apply BIN primer, then paint with cabinet-grade paint. The bond won\'t be as bulletproof as on real wood, but it holds up well with care.',
      },
      {
        question: 'Should I spray or brush/roll cabinets?',
        answer:
          'Spraying gives the smoothest, most factory-like finish but requires a paint sprayer ($100-$400), spray tent, and more masking. Foam roller + brush is more accessible for DIYers and produces excellent results with cabinet-grade paint that self-levels. For a first-time project, brush and roll.',
      },
    ],
    relatedGuides: ['paint-room-like-pro', 'patch-repair-drywall', 'install-tile-backsplash'],
    status: 'published',
  },
];

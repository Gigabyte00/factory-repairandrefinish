import type { Guide } from '@/types';
import { defaultAuthor } from '../site-config';

export const kitchenBathGuides: Guide[] = [
  // ---------------------------------------------------------------------------
  // Guide 14: Regrout a Tile Shower
  // ---------------------------------------------------------------------------
  {
    id: 'guide-regrout-tile-shower',
    slug: 'regrout-tile-shower',
    title: 'How to Regrout a Tile Shower',
    excerpt:
      'Crumbling, moldy grout makes even nice tile look terrible — and lets water seep behind the wall. Regrouting a shower is a weekend project that restores the look and watertight integrity of your tile.',
    content: `Grout doesn't last forever. After 10-15 years (or sooner in high-moisture areas like showers), grout cracks, crumbles, and develops mold that can't be cleaned away. When the grout fails, water penetrates behind the tile and damages the substrate, leading to costly repairs.

## Grout vs. Caulk

An important distinction: grout fills the joints between tiles on flat surfaces, while caulk (silicone) should be used where two planes meet (wall-to-floor, wall-to-wall corners, and around fixtures). Many builders incorrectly use grout in corners, which cracks because it can't flex. Part of this project is correcting that mistake.

## Sanded vs. Unsanded

Use sanded grout for joints wider than 1/8 inch and unsanded grout for joints 1/8 inch or narrower. Most shower tile has 1/8 to 3/16 inch joints, which calls for sanded grout.`,
    category: 'kitchen-bath',
    difficulty: 'intermediate',
    estimatedTime: '3-4 hours (plus 24hr cure time)',
    estimatedCost: {
      low: 25,
      mid: 45,
      high: 60,
      diyVsPro: 'A tile contractor charges $500-$1,000 to regrout a standard shower. DIY materials cost $25-$60.',
    },
    tools: [
      'Oscillating multi-tool with grout removal blade',
      'Grout float (rubber)',
      'Large sponge',
      'Bucket',
      'Grout haze remover',
      'Caulk gun',
      'Utility knife',
    ],
    materials: [
      'Sanded grout (pre-mixed or powder)',
      'Silicone caulk (color-matched to grout)',
      'Grout sealer',
      'Painters tape (for caulk lines)',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Remove the Old Grout',
        description:
          'Use an oscillating multi-tool fitted with a carbide grout removal blade to cut out the old grout from all joints. Hold the tool at a slight angle and run it along each grout line, removing at least 2/3 of the grout depth. Work carefully to avoid chipping tile edges. For tight corners and small areas, use a manual grout saw. Vacuum out all loose debris when finished.',
        imagePrompt:
          'Oscillating multi-tool with grout removal blade cutting old grout from tile shower joints, dust and debris being removed, careful angle technique shown',
        proTip:
          'Don\'t try to remove 100% of the old grout. Removing 2/3 of the depth gives the new grout plenty of surface to bond to and saves significant time.',
        warning:
          'Wear safety glasses and a dust mask. Grout dust is abrasive and silica-containing. Work in a well-ventilated area.',
      },
      {
        stepNumber: 2,
        title: 'Clean and Prep the Joints',
        description:
          'After removing the old grout, vacuum all joints thoroughly with a shop vac or hand vacuum. Wipe the joints with a damp sponge to remove remaining dust. Check for any loose or hollow-sounding tiles — press on each one. If a tile feels loose, re-adhere it with tile adhesive before regrouting. Let everything dry completely before applying new grout.',
        imagePrompt:
          'Vacuuming empty grout lines in a tile shower, then wiping with a damp sponge, clean bare joints ready for new grout, shower tile background',
      },
      {
        stepNumber: 3,
        title: 'Mix the Grout',
        description:
          'If using powder grout, mix it with water according to the package directions until it reaches a thick peanut-butter consistency. Let it slake (rest) for 10 minutes, then remix briefly. Don\'t add extra water to thin it — watery grout is weak and will crack. If using pre-mixed grout, stir it and it\'s ready. Only mix as much as you can use in 30 minutes.',
        imagePrompt:
          'Grout being mixed in a bucket to peanut butter consistency, measuring water, proper thick texture shown, grout mixing paddle visible',
        proTip:
          'Pre-mixed grout (like SimpleGrout) costs more but eliminates mixing errors. For a small project like one shower, it\'s worth the convenience.',
      },
      {
        stepNumber: 4,
        title: 'Apply the Grout',
        description:
          'Scoop grout onto the rubber float and press it diagonally across the tile joints at a 45-degree angle. Push the grout firmly into each joint, making multiple passes to fill them completely. Work in 3-4 square foot sections. After filling all joints in a section, scrape off excess grout by holding the float at a steep angle (nearly 90 degrees) and pulling diagonally across the tiles.',
        imagePrompt:
          'Rubber grout float pressing white grout into tile joints at a 45-degree angle, diagonal strokes across subway tile, excess being scraped off, shower wall',
      },
      {
        stepNumber: 5,
        title: 'Sponge and Shape the Joints',
        description:
          'Wait 15-20 minutes until the grout begins to firm up (it will lose its wet sheen). Wring a large sponge almost completely dry and wipe the tile surface in gentle diagonal strokes. Rinse the sponge frequently and wring thoroughly — too much water washes grout out of the joints. Two or three passes should clean the tile surface while leaving smooth, slightly concave grout lines.',
        imagePrompt:
          'Damp sponge wiping grout haze off tile in diagonal strokes, revealing clean tile face with neat grout lines, rinsing sponge in clean water bucket',
        proTip:
          'Change your rinse water often. Dirty water just spreads grout haze. Three buckets of clean water per sponge session is a good target.',
      },
      {
        stepNumber: 6,
        title: 'Caulk the Corners and Transitions',
        description:
          'Apply painter\'s tape on both sides of corner joints, floor-to-wall joints, and around fixtures (showerhead flange, faucet escutcheons). Apply a bead of color-matched silicone caulk along the joint, then smooth it with a wet finger. Remove the tape immediately while the caulk is wet for a clean line. Silicone caulk stays flexible and won\'t crack in corners like grout does.',
        imagePrompt:
          'Applying silicone caulk along the corner joint of a tile shower where two walls meet, smoothing with a wet finger, painter tape creating clean edges',
        proTip:
          'Cut the caulk tube tip at a 45-degree angle and make it small — you can always cut more off, but you can\'t add material back to the tip.',
      },
      {
        stepNumber: 7,
        title: 'Clean Haze and Seal the Grout',
        description:
          'After the grout cures for 24 hours, buff off any remaining haze with a dry cloth or grout haze remover. Then apply a penetrating grout sealer to all grout lines using a small applicator bottle or brush. The sealer soaks into the grout and creates a barrier against moisture and stains. Wipe excess sealer off the tile surface. Reapply sealer annually for best protection.',
        imagePrompt:
          'Applying grout sealer with a small applicator bottle along grout lines in a freshly regrouted shower, clean white grout, sealed protection',
        warning:
          'Do not use the shower for at least 24 hours after grouting, and wait 48-72 hours after sealing. The grout and sealer need time to cure fully.',
      },
    ],
    tips: [
      'Pre-mixed grout (like Custom Building Products SimpleGrout) is more expensive but eliminates mixing errors and is ideal for small shower projects.',
      'Use an old toothbrush to pack grout into tight corners where the float can\'t reach.',
      'If your old grout was white and turned moldy, consider switching to a gray or darker grout color — it hides future staining better.',
      'Apply grout sealer once a year to keep your shower looking fresh and prevent mold from taking hold.',
    ],
    warnings: [
      'Wear safety glasses and an N95 dust mask when removing old grout. Grout dust contains silica, which is a respiratory hazard.',
      'Always use silicone caulk (not grout) in corners and where tile meets the tub or shower pan. Grout cracks in these areas because it can\'t flex.',
      'Don\'t use the shower for at least 24 hours after regrouting. Water exposure before the grout cures weakens the bond.',
    ],
    affiliateProducts: [
      {
        id: 'prod-custom-simpleground',
        name: 'Custom Building Products SimpleGrout Pre-Mixed (1 qt)',
        description:
          'Ready-to-use pre-mixed grout — no measuring, no mixing. Perfect consistency every time. Available in 10 colors. Ideal for shower regrout projects.',
        price: 14.98,
        affiliateUrl: 'https://www.homedepot.com/p/Custom-SimpleGrout/206564703',
        retailer: 'homedepot',
        imageUrl: '/products/custom-simplegrout.jpg',
        rating: 4.3,
        reviewCount: 5400,
        badge: 'our-pick',
      },
      {
        id: 'prod-dremel-grout-blade',
        name: 'Dremel Multi-Max Carbide Grout Removal Blade (1/16")',
        description:
          'Carbide-grit oscillating blade designed specifically for grout removal. Fits Dremel, DEWALT, Fein, and most oscillating tools. Lasts through multiple showers.',
        price: 12.97,
        affiliateUrl: 'https://www.amazon.com/dp/B00D7SA35Y',
        retailer: 'amazon',
        imageUrl: '/products/dremel-grout-blade.jpg',
        rating: 4.4,
        reviewCount: 6200,
      },
      {
        id: 'prod-511-impregnator',
        name: 'Miracle Sealants 511 Impregnator Grout Sealer (16 oz)',
        description:
          'Professional-grade penetrating sealer for grout and natural stone. One application lasts 3-5 years. Prevents stains and moisture penetration.',
        price: 24.97,
        affiliateUrl: 'https://www.homedepot.com/p/Miracle-Sealants-511/100067468',
        retailer: 'homedepot',
        imageUrl: '/products/miracle-511.jpg',
        rating: 4.6,
        reviewCount: 8900,
        badge: 'best-value',
      },
      {
        id: 'prod-ge-silicone-caulk',
        name: 'GE Supreme Silicone Kitchen & Bath Caulk (10.1 oz)',
        description:
          'Mold-resistant silicone caulk for shower corners, tub-to-tile joints, and fixtures. 10-year mold-free guarantee. Available in white and almond.',
        price: 7.98,
        affiliateUrl: 'https://www.lowes.com/pd/GE-Supreme-Silicone/5001380367',
        retailer: 'lowes',
        imageUrl: '/products/ge-supreme-silicone.jpg',
        rating: 4.5,
        reviewCount: 11700,
      },
    ],
    featuredImage: '/guides/regrout-tile-shower-hero.jpg',
    publishedAt: '2026-03-08T09:00:00Z',
    updatedAt: '2026-03-20T10:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Regrout a Tile Shower (Step-by-Step) | Repair & Refinish',
      description:
        'Regrout your tile shower and stop water damage. Complete guide for removing old grout, applying new grout, caulking corners, and sealing for a watertight, fresh-looking shower.',
      keywords: [
        'regrout shower',
        'regrout tile shower',
        'shower grout repair',
        'how to regrout',
        'replace shower grout',
        'bathroom grout repair',
        'shower tile grout',
        'grout removal tool',
      ],
      ogImage: '/guides/regrout-tile-shower-og.jpg',
    },
    faqs: [
      {
        question: 'How often should shower grout be replaced?',
        answer:
          'With proper sealing and maintenance, grout lasts 10-15 years. However, in showers that are used daily without sealing, grout can start to crack and mold within 5-7 years. Annual grout sealer application significantly extends grout life.',
      },
      {
        question: 'Can I regrout over existing grout?',
        answer:
          'No — you need to remove at least 2/3 of the old grout depth for the new grout to bond properly. Applying new grout on top of old grout creates a thin, weak layer that will crack and fall out within months.',
      },
      {
        question: 'Should I use sanded or unsanded grout in my shower?',
        answer:
          'If your grout joints are wider than 1/8 inch, use sanded grout (the sand adds strength to wider joints). For joints 1/8 inch or narrower, use unsanded grout. Most standard subway tile and wall tile uses 1/8-inch joints, which is the cutoff — either type works, but sanded is more forgiving for beginners.',
      },
    ],
    relatedGuides: ['install-tile-backsplash', 'replace-toilet', 'replace-kitchen-faucet'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide 15: Install a Tile Backsplash
  // ---------------------------------------------------------------------------
  {
    id: 'guide-install-tile-backsplash',
    slug: 'install-tile-backsplash',
    title: 'How to Install a Tile Backsplash',
    excerpt:
      'A tile backsplash transforms a kitchen from builder-grade to custom. This guide covers layout, cutting, setting, grouting, and sealing for a professional-looking backsplash you install yourself.',
    content: `A tile backsplash is one of the highest-impact kitchen upgrades. It protects the wall from splashes and stains, and it elevates the entire look of the kitchen. Subway tile remains the most popular choice for DIYers — it's affordable, timeless, and forgiving of minor imperfections.

## Planning Your Layout

Before buying tile, measure the backsplash area (width × height from countertop to upper cabinets). Account for outlets, switches, and windows. Buy 15% more tile than your calculated square footage to cover cuts and waste.

## Choosing Adhesive

For most backsplash projects, pre-mixed mastic adhesive (like Omnigrip) is easier than mixing thinset mortar. However, if your backsplash is directly behind a stove, use heat-resistant thinset.`,
    category: 'kitchen-bath',
    difficulty: 'intermediate',
    estimatedTime: '4-6 hours (plus overnight drying)',
    estimatedCost: {
      low: 150,
      mid: 275,
      high: 400,
      diyVsPro: 'A tile installer charges $800-$2,000 for a kitchen backsplash. DIY materials cost $150-$400 depending on tile selection.',
    },
    tools: [
      'Tile cutter or wet saw',
      'V-notch trowel (1/4" x 3/8")',
      'Grout float',
      'Level (2-foot)',
      'Tile spacers',
      'Sponge and bucket',
      'Tape measure',
      'Pencil',
    ],
    materials: [
      'Tile (subway tile, mosaic sheets, or your choice)',
      'Pre-mixed mastic adhesive (or thinset mortar)',
      'Unsanded grout',
      'Grout sealer',
      'Silicone caulk (for countertop-to-tile joint)',
      'Tile spacers (1/8" or 1/16")',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Prepare the Wall Surface',
        description:
          'Turn off power to any outlets or switches in the backsplash area. Remove the cover plates. Clean the wall with TSP or degreaser to remove cooking grease. The wall surface should be clean, dry, flat, and free of loose paint. If the wall is textured, sand it smooth — mastic needs a flat surface to grip. Mark a level line at the bottom of where the first row of tile will sit.',
        imagePrompt:
          'Kitchen wall being prepped for backsplash: outlet covers removed, wall cleaned, level line drawn above countertop, flat clean surface ready for tile',
        proTip:
          'Don\'t assume your countertop is level. Draw a level line and use it as your starting guide, not the countertop edge. You can cover any gap at the bottom with caulk.',
      },
      {
        stepNumber: 2,
        title: 'Dry-Fit Your Layout',
        description:
          'Lay tiles on the counter against the wall (with spacers) to determine your pattern and see where cuts fall. Center the layout so that cut tiles at each end are equal width. Avoid having a sliver of tile at an edge — it looks cheap and is hard to cut. Mark the center of the wall and work outward. For subway tile, plan your offset pattern (typically 50% or 1/3 offset).',
        imagePrompt:
          'Subway tiles dry-fit against a kitchen wall, spacers between them, centered layout with equal cuts on each side, pattern planning visible',
      },
      {
        stepNumber: 3,
        title: 'Apply Mastic and Set the First Row',
        description:
          'Spread mastic adhesive on a 3-4 square foot section of wall using a V-notch trowel. Hold the trowel at a 45-degree angle to create even ridges. Press the first tile into the mastic with a slight twisting motion. Place spacers at each corner and continue setting tiles in your planned pattern. Check level every few tiles — corrections get harder as the mastic sets.',
        imagePrompt:
          'V-notch trowel spreading mastic adhesive on kitchen wall, then white subway tile being pressed into the adhesive with spacers, first row being set level',
        warning:
          'Only spread as much mastic as you can tile in 15-20 minutes. If it skins over (forms a dry film), scrape it off and apply fresh mastic. Tile won\'t bond to skinned mastic.',
      },
      {
        stepNumber: 4,
        title: 'Cut Tiles for Edges and Outlets',
        description:
          'Use a manual tile cutter (snap cutter) for straight cuts — score the tile surface and snap along the score line. For cuts around outlets and switches, measure and mark the tile, then use a wet saw or tile nippers to make the cut. Outlet openings are typically cut by making two parallel cuts and snapping out the waste. The outlet cover plate will hide 1/4 inch of tile overlap around the box.',
        imagePrompt:
          'Manual tile cutter scoring and snapping a subway tile, and a marked tile being cut for an outlet opening, two cutting technique panels',
        proTip:
          'Outlet cover plates extend about 1/4 inch beyond the box opening. You don\'t need a perfect cut around outlets — just get within 1/4 inch and the plate covers the edge.',
      },
      {
        stepNumber: 5,
        title: 'Work Upward to the Top Row',
        description:
          'Continue setting tile row by row from the bottom up. At the top, measure each tile individually — the distance from the last full row to the cabinet or ceiling often varies. Cut top-row tiles to fit with a 1/16-inch gap at the top (the gap will be hidden by the cabinet or caulked). Use tape to hold any top-row tiles that tend to slide down while the mastic sets.',
        imagePrompt:
          'Backsplash tile progressing upward from counter to cabinets, painter tape holding top row tiles in place while mastic sets, complete pattern visible',
      },
      {
        stepNumber: 6,
        title: 'Grout the Joints',
        description:
          'Let the mastic cure for 24 hours before grouting. Remove all spacers. Mix unsanded grout to a peanut-butter consistency (or use pre-mixed). Spread grout over the tiles using a rubber float held at a 45-degree angle, pushing grout into every joint. Scrape off excess at a steep angle. Wait 15-20 minutes, then wipe with a damp sponge in diagonal strokes to clean the tile face and smooth the joints.',
        imagePrompt:
          'Rubber grout float pressing grout into subway tile backsplash joints, then sponge wiping excess, clean grout lines emerging on white tile',
      },
      {
        stepNumber: 7,
        title: 'Caulk the Transitions and Seal',
        description:
          'Apply color-matched silicone caulk where the backsplash meets the countertop, inside corners, and around any fixtures. Use painter\'s tape for clean caulk lines. After the grout has cured 48-72 hours, apply grout sealer to all grout joints. Reinstall outlet covers (use longer screws if needed to span the added tile thickness). Stand back and enjoy your new backsplash.',
        imagePrompt:
          'Silicone caulk being applied where tile backsplash meets the countertop, clean bead, then grout sealer being applied, finished professional kitchen backsplash',
        proTip:
          'Use outlet box extenders (or longer 6-32 screws) to bring the outlet flush with the new tile surface. Most hardware stores carry them for about $1 each.',
      },
    ],
    tips: [
      'Buy a manual snap cutter for straight cuts — it\'s faster, quieter, and less messy than a wet saw for subway tile.',
      'Mix tiles from multiple boxes to distribute any color variation evenly across the backsplash.',
      'Peel-and-stick tile sheets look tempting but don\'t hold up in a real kitchen. Invest in proper tile and mastic for a permanent result.',
      'Start with the most visible wall (behind the sink or stove) and do less visible areas last as your technique improves.',
    ],
    warnings: [
      'Turn off power to outlets and switches before removing covers or tiling near them. Mastic and grout are conductive when wet.',
      'Do not grout the joint where the backsplash meets the countertop. Use silicone caulk — this joint needs to flex as the house settles.',
      'Wear safety glasses when cutting tile. Ceramic shards are sharp and can fly unpredictably.',
    ],
    affiliateProducts: [
      {
        id: 'prod-daltile-subway',
        name: 'Daltile Restore 3" x 6" Subway Tile (12.5 sq ft/case)',
        description:
          'Classic bright white ceramic subway tile. Smooth glossy finish. Case covers 12.5 sq ft. The most popular backsplash tile in America — timeless and affordable.',
        price: 17.98,
        affiliateUrl: 'https://www.homedepot.com/p/Daltile-Restore/311024855',
        retailer: 'homedepot',
        imageUrl: '/products/daltile-subway.jpg',
        rating: 4.5,
        reviewCount: 9400,
        badge: 'best-value',
      },
      {
        id: 'prod-omnigrip-mastic',
        name: 'Custom Building Products OmniGrip Mastic (1 gallon)',
        description:
          'Pre-mixed white wall tile adhesive. No mixing required. Strong bond on drywall, cement board, and plywood. One gallon covers 60-70 sq ft.',
        price: 14.98,
        affiliateUrl: 'https://www.homedepot.com/p/OmniGrip/202327134',
        retailer: 'homedepot',
        imageUrl: '/products/omnigrip-mastic.jpg',
        rating: 4.4,
        reviewCount: 3800,
      },
      {
        id: 'prod-qep-tile-cutter',
        name: 'QEP 14" Manual Tile Cutter',
        description:
          'Score-and-snap cutter for ceramic and porcelain tile up to 14" long. Tungsten carbide scoring wheel. Fast, quiet, no water mess. Perfect for subway tile cuts.',
        price: 29.98,
        affiliateUrl: 'https://www.homedepot.com/p/QEP-Tile-Cutter/202540098',
        retailer: 'homedepot',
        imageUrl: '/products/qep-tile-cutter.jpg',
        rating: 4.3,
        reviewCount: 7100,
        badge: 'our-pick',
      },
    ],
    featuredImage: '/guides/install-tile-backsplash-hero.jpg',
    publishedAt: '2026-03-10T09:00:00Z',
    updatedAt: '2026-03-20T11:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Install a Tile Backsplash (Kitchen DIY Guide) | Repair & Refinish',
      description:
        'Install a kitchen tile backsplash yourself and save $500-$1,500. Complete guide covering layout, cutting, setting with mastic, grouting, and caulking.',
      keywords: [
        'install tile backsplash',
        'kitchen backsplash DIY',
        'subway tile backsplash',
        'how to tile a backsplash',
        'tile backsplash installation',
        'kitchen tile wall',
        'backsplash grout',
      ],
      ogImage: '/guides/install-tile-backsplash-og.jpg',
    },
    faqs: [
      {
        question: 'Do I need to use cement board behind a backsplash?',
        answer:
          'For a kitchen backsplash (not inside a shower), standard drywall is fine as a substrate. Cement board is only required for areas with direct water exposure, like inside showers or behind tubs. Just make sure the drywall is clean, smooth, and solidly attached.',
      },
      {
        question: 'How do I tile around outlets and switches?',
        answer:
          'Measure the outlet box position on the tile and mark your cuts. Use tile nippers for small cuts or a wet saw for clean straight cuts. The outlet cover plate overlaps 1/4 inch beyond the box, so your cuts don\'t need to be perfect — just within 1/4 inch of the box edge. Use longer screws or outlet box extenders to accommodate the added tile thickness.',
      },
      {
        question: 'Can I install tile over existing tile?',
        answer:
          'Yes, if the existing tile is in good condition and firmly bonded. Lightly sand the glazed surface with 80-grit sandpaper to give the mastic something to grip. However, this adds thickness, which affects outlets, trim, and cabinet clearances. Removing the old tile first gives a cleaner result.',
      },
    ],
    relatedGuides: ['regrout-tile-shower', 'replace-kitchen-faucet', 'paint-room-like-pro'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide 16: Replace a Toilet
  // ---------------------------------------------------------------------------
  {
    id: 'guide-replace-toilet',
    slug: 'replace-toilet',
    title: 'How to Replace a Toilet',
    excerpt:
      'Replacing a toilet is simpler than it looks — it\'s just two bolts and a water line. This guide walks you through removing the old toilet, installing a new wax ring, and setting the new fixture leak-free.',
    content: `Toilets don't last forever. Cracks, persistent leaks from the base, outdated water-guzzling models, and stained porcelain are all good reasons to swap in a new one. The good news: a toilet is held in place by just two bolts and a single water supply connection. If you can lift 50-60 pounds, you can replace a toilet.

## Choosing a Toilet

The most important measurement is the "rough-in" — the distance from the wall to the center of the floor drain bolts. Standard is 12 inches. Measure before you buy. Also check the bowl shape (round vs. elongated) to make sure the new toilet fits the space.

## What's Included

Most new toilets come with mounting hardware, a wax ring, and supply line. If yours doesn't include a wax ring, buy one separately (a $5 part). Consider upgrading to a wax-free ring (Fluidmaster Better Than Wax) — they're reusable if you need to reposition the toilet.`,
    category: 'kitchen-bath',
    difficulty: 'intermediate',
    estimatedTime: '60-90 minutes',
    estimatedCost: {
      low: 100,
      mid: 200,
      high: 300,
      diyVsPro: 'A plumber charges $250-$500 for toilet installation. DIY you pay only for the toilet ($100-$300) and possibly a wax ring ($5-$15).',
    },
    tools: [
      'Adjustable wrench',
      'Tongue-and-groove pliers',
      'Hacksaw (if bolts are rusted)',
      'Putty knife',
      'Bucket and sponge',
      'Old towels and rags',
      'Level',
    ],
    materials: [
      'New toilet (bowl and tank)',
      'Wax ring (or wax-free alternative)',
      'Closet bolts (usually included)',
      'Supply line (braided stainless steel)',
      'Toilet shims (if floor is uneven)',
      'Silicone caulk',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Turn Off Water and Drain the Toilet',
        description:
          'Turn off the shut-off valve behind the toilet (clockwise). Flush the toilet to empty the tank. Hold the flush handle down to drain as much water as possible. Use a sponge to absorb the remaining water in the tank and bowl. Disconnect the water supply line from the bottom of the tank — have a towel ready to catch drips.',
        imagePrompt:
          'Hand turning toilet shut-off valve, then flushing to drain, then sponging remaining water from tank and bowl, step-by-step water removal',
      },
      {
        stepNumber: 2,
        title: 'Remove the Old Toilet',
        description:
          'Pop off the bolt caps at the base of the toilet and unscrew the closet bolts (the nuts holding the toilet to the floor). If the bolts are rusted and won\'t turn, cut them with a hacksaw. Rock the toilet gently side to side to break the wax seal, then lift the toilet straight up and off the bolts. Toilets weigh 50-70 pounds — lift with your legs. Set the old toilet on a towel or garbage bag.',
        imagePrompt:
          'Hands unscrewing closet bolt nuts at the base of a toilet, then lifting the toilet straight up off the floor flange, two-step removal process',
        proTip:
          'Stuff a rag or old towel into the open drain hole immediately after removing the toilet. This prevents sewer gases from entering the house and stops you from dropping tools into the drain.',
        warning:
          'The old wax ring is messy. Wear rubber gloves and have trash bags ready. Scrape all old wax off the toilet flange and the floor with a putty knife.',
      },
      {
        stepNumber: 3,
        title: 'Inspect and Prepare the Flange',
        description:
          'Examine the closet flange (the ring set into the floor around the drain). It should be firmly attached and sit flush with or slightly above the finished floor surface. If the flange is cracked or broken, install a repair ring (available at hardware stores for about $10). Insert new closet bolts into the flange slots and center them. Make sure the bolts stand straight up.',
        imagePrompt:
          'Toilet floor flange exposed after toilet removal, old wax scraped clean, new closet bolts inserted into flange slots, drain hole visible, clean floor',
      },
      {
        stepNumber: 4,
        title: 'Install the Wax Ring',
        description:
          'Place the new wax ring on the flange with the tapered (horn) side pointing down into the drain. Press it firmly into place. Alternatively, if you\'re using a wax-free ring (like Fluidmaster Better Than Wax), set it on the flange per the manufacturer\'s instructions. Remove the rag you stuffed in the drain.',
        imagePrompt:
          'Wax ring being placed on the toilet flange, tapered horn pointing down into drain, centered over the opening, ready for toilet installation',
        proTip:
          'In cold weather, warm the wax ring with your hands for a minute before placing it. Cold wax is stiff and doesn\'t seal as well.',
      },
      {
        stepNumber: 5,
        title: 'Set the New Toilet',
        description:
          'Turn the new toilet bowl upside down or on its side to access the outlet horn. Lift the bowl and align the holes at the base with the closet bolts sticking up from the flange. Lower the bowl straight down onto the wax ring. Press down firmly and rock slightly to set the wax seal. Do not lift the bowl back up — once the wax compresses, lifting it breaks the seal and you\'ll need a new ring.',
        imagePrompt:
          'New toilet bowl being lowered onto closet bolts and wax ring, aligning holes carefully, pressing down to set seal, straight-down motion',
        warning:
          'Once the bowl contacts the wax ring, commit to the placement. Lifting and repositioning damages the wax seal. If you need to reposition, use a new wax ring (or use a wax-free ring, which allows repositioning).',
      },
      {
        stepNumber: 6,
        title: 'Secure and Level the Bowl',
        description:
          'Place washers and nuts onto the closet bolts and tighten alternately (a few turns on each side) to draw the bowl down evenly. Don\'t overtighten — porcelain cracks under pressure. The bowl should be snug against the floor with no rocking. If the floor is uneven, slip plastic toilet shims under the base until it\'s stable, then trim the shims flush with a utility knife. Cut the bolts off with a hacksaw if they\'re too long, then snap on the bolt caps.',
        imagePrompt:
          'Tightening closet bolt nuts alternately on each side of toilet base, checking level, placing shims under base for stability, clean installation',
        proTip:
          'Use a level across the top of the bowl front-to-back and side-to-side. A level toilet flushes better and looks right.',
      },
      {
        stepNumber: 7,
        title: 'Attach the Tank and Connect Water',
        description:
          'If your toilet has a separate tank, place the rubber gasket over the flush valve opening on the bottom of the tank. Set the tank onto the bowl, aligning the bolt holes. Insert the tank bolts with rubber washers and tighten alternately. Don\'t overtighten. Connect the water supply line to the fill valve at the bottom of the tank. Turn on the shut-off valve slowly and let the tank fill. Check every connection for leaks.',
        imagePrompt:
          'Toilet tank being set onto bowl with gasket, tank bolts being tightened, then water supply line connected, water filling the tank, leak check in progress',
      },
      {
        stepNumber: 8,
        title: 'Caulk the Base and Test',
        description:
          'Run a bead of silicone caulk around the base of the toilet where it meets the floor, leaving a small gap at the back (so you can spot a future wax ring leak before it causes hidden damage). Smooth the caulk with a wet finger. Flush the toilet three or four times and check for leaks at the base, at the tank-to-bowl connection, and at the supply line. Verify the toilet fills and stops correctly.',
        imagePrompt:
          'Caulk gun applying a bead of clear silicone caulk around the base of a newly installed white toilet, smooth application, finished professional look',
      },
    ],
    tips: [
      'Buy a toilet with the wax ring and supply line included — many models bundle them, saving you $10-$15.',
      'A wax-free ring (like Fluidmaster Better Than Wax) costs $7 more but allows repositioning without replacement. Worth it for first-timers.',
      'Measure the rough-in BEFORE buying the toilet. 12 inches is standard, but 10-inch and 14-inch rough-ins exist in older homes.',
      'Use an elongated bowl if space allows — they\'re more comfortable. Round bowls save about 2 inches in a tight bathroom.',
    ],
    warnings: [
      'Do not overtighten closet bolts or tank bolts. Porcelain cracks under pressure, and a cracked toilet can\'t be repaired — only replaced.',
      'If you see a rotted or damaged subfloor around the flange, you must repair it before installing the new toilet. A toilet on a soft subfloor will rock, break the wax seal, and leak.',
      'If the flange sits more than 1/4 inch below the finished floor, use an extra-thick wax ring or a flange extender to ensure a proper seal.',
    ],
    affiliateProducts: [
      {
        id: 'prod-toto-drake',
        name: 'TOTO Drake Two-Piece Elongated Toilet (1.28 GPF)',
        description:
          'TOTO\'s best-selling toilet with powerful Tornado Flush technology. WaterSense certified at 1.28 GPF. Elongated bowl for comfort. Includes wax ring and bolt caps.',
        price: 269.00,
        affiliateUrl: 'https://www.homedepot.com/p/TOTO-Drake/315831413',
        retailer: 'homedepot',
        imageUrl: '/products/toto-drake.jpg',
        rating: 4.7,
        reviewCount: 6800,
        badge: 'our-pick',
      },
      {
        id: 'prod-american-standard-champion',
        name: 'American Standard Champion 4 Max Elongated Toilet',
        description:
          'Ultra-powerful siphon flush clears the bowl in one flush every time. 1.28 GPF WaterSense certified. Slow-close seat included. Best value for a high-performance toilet.',
        price: 199.00,
        affiliateUrl: 'https://www.lowes.com/pd/American-Standard-Champion/5001709793',
        retailer: 'lowes',
        imageUrl: '/products/as-champion.jpg',
        rating: 4.5,
        reviewCount: 12400,
        badge: 'best-value',
      },
      {
        id: 'prod-better-than-wax',
        name: 'Fluidmaster Better Than Wax Universal Toilet Seal',
        description:
          'Wax-free rubber seal that allows repositioning during installation. No mess, no wax, reusable if you need to lift the toilet. Fits any drain size and flange height.',
        price: 12.98,
        affiliateUrl: 'https://www.amazon.com/dp/B00DM8ITLQ',
        retailer: 'amazon',
        imageUrl: '/products/better-than-wax.jpg',
        rating: 4.4,
        reviewCount: 9200,
      },
    ],
    featuredImage: '/guides/replace-toilet-hero.jpg',
    publishedAt: '2026-03-12T09:00:00Z',
    updatedAt: '2026-03-20T12:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Replace a Toilet (DIY Installation Guide) | Repair & Refinish',
      description:
        'Replace a toilet yourself in 90 minutes. Step-by-step guide for removing the old toilet, setting the wax ring, installing the new one, and connecting the water supply.',
      keywords: [
        'replace toilet',
        'install toilet',
        'toilet installation',
        'how to replace a toilet',
        'wax ring toilet',
        'remove toilet',
        'DIY toilet install',
        'toilet replacement',
      ],
      ogImage: '/guides/replace-toilet-og.jpg',
    },
    faqs: [
      {
        question: 'How do I measure the rough-in for a new toilet?',
        answer:
          'Measure from the finished wall (not the baseboard) to the center of the closet bolt holes in the floor. Standard rough-in is 12 inches. If the bolts are hidden, measure to the center of the drain hole. Never buy a toilet before confirming this measurement.',
      },
      {
        question: 'Should I use a wax ring or a wax-free seal?',
        answer:
          'Both create a reliable seal. Traditional wax rings cost $3-$5 and have been used for decades. Wax-free seals cost $10-$15 but offer the advantage of being mess-free and repositionable. For first-time DIYers, the wax-free seal is more forgiving.',
      },
      {
        question: 'Can I install a toilet on a tile floor?',
        answer:
          'Yes. If the flange sits on top of the tile and is level, installation is standard. If the flange is below the tile surface (common after re-tiling), use an extra-thick wax ring or a flange extender to bridge the gap. The flange should ideally sit flush with or 1/4 inch above the finished floor.',
      },
    ],
    relatedGuides: ['fix-running-toilet', 'regrout-tile-shower', 'replace-kitchen-faucet'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide: Install a Bathroom Vanity
  // ---------------------------------------------------------------------------
  {
    id: 'guide-install-bathroom-vanity',
    slug: 'install-bathroom-vanity',
    title: 'How to Install a Bathroom Vanity',
    excerpt:
      'Upgrade your bathroom with a new vanity in 3-4 hours. This intermediate guide covers removal of the old vanity, plumbing connections, and leveling for a professional-looking install.',
    content: `A new bathroom vanity instantly modernizes the entire room. Whether you're replacing a dated pedestal sink or swapping an old vanity for a new style, the process involves basic plumbing and carpentry skills.

## Measuring for Your New Vanity

Measure the width, depth, and height of your current vanity. Note the plumbing rough-in positions: distance from the wall to the center of the drain pipe, and the height and position of the water supply lines. Your new vanity needs to accommodate these positions — or you'll need to adjust the plumbing.

## Choosing the Right Size

Standard vanity widths are 24, 30, 36, and 48 inches. Make sure the new vanity fits the space with room for the door to open and close. Measure twice before ordering — returns on vanities are a hassle.`,
    category: 'kitchen-bath',
    difficulty: 'intermediate',
    estimatedTime: '3-4 hours',
    estimatedCost: { low: 200, mid: 450, high: 800, diyVsPro: 'A plumber/contractor charges $400-$1,000 for vanity installation. DIY you pay only for the vanity ($200-$800).' },
    tools: ['Adjustable wrench', 'Bucket and towels', 'Level', 'Drill/driver', 'Stud finder', 'Utility knife', 'Silicone caulk gun', 'Tape measure'],
    materials: ['New bathroom vanity with top and faucet', 'Supply lines (braided stainless)', 'P-trap kit (if old one doesn\'t fit)', 'Silicone caulk', 'Wall anchors/screws', 'Plumber\'s putty'],
    steps: [
      { stepNumber: 1, title: 'Shut Off Water and Disconnect Plumbing', description: 'Turn off the hot and cold shut-off valves under the sink. Open the faucet to relieve pressure. Place a bucket under the P-trap and disconnect the supply lines from the shut-off valves. Loosen the slip nuts on the P-trap and remove it. Stuff a rag in the drain pipe to block sewer gas. Disconnect any pop-up drain linkage.', imagePrompt: 'Hands turning shut-off valves, disconnecting supply lines into a bucket, P-trap being removed, under-vanity plumbing disconnection', proTip: 'Take a photo of the plumbing connections before disconnecting. This serves as a reference when hooking up the new vanity.' },
      { stepNumber: 2, title: 'Remove the Old Vanity', description: 'Remove any screws or brackets securing the vanity to the wall (check inside the cabinet along the back rail). Cut any caulk between the vanity top and the wall with a utility knife. Carefully pull the vanity away from the wall and remove it. If the vanity has a separate top, remove the top first (it may be siliconed or clipped to the base). Patch any wall damage behind the old vanity.', imagePrompt: 'Utility knife cutting caulk between vanity and wall, screws being removed from back rail, old vanity being pulled away from wall, removal process' },
      { stepNumber: 3, title: 'Prepare the Wall and Floor', description: 'With the old vanity out, inspect the wall and floor. Repair any damaged drywall. If the new vanity is smaller than the old one, you may need to paint or patch the wall where it was previously covered. Check the floor for level — shim the new vanity if needed. Locate the wall studs with a stud finder and mark them with tape above where the vanity back rail will be.', imagePrompt: 'Wall behind removed vanity being patched and painted, floor being checked with a level, stud locations marked with tape, prep work' },
      { stepNumber: 4, title: 'Position and Level the New Vanity', description: 'Slide the new vanity into position. Check for level front-to-back and side-to-side. Use shims under the base to level it on an uneven floor. Mark the wall stud locations on the back rail of the vanity. The vanity must be level for the doors and drawers to function properly and for water to drain correctly.', imagePrompt: 'New vanity being positioned against the wall, level being checked on the countertop, shims being placed under the base for leveling, precise positioning' },
      { stepNumber: 5, title: 'Secure the Vanity to the Wall', description: 'Drive screws through the back rail of the vanity cabinet into the wall studs. Use at least two screws, one into each stud. The screws should be long enough to penetrate the stud by 1.5 inches. Don\'t overtighten — you can pull the back rail out of square. Trim any protruding shims flush with the base using a utility knife.', imagePrompt: 'Drill driving screws through vanity back rail into wall studs, vanity secured firmly, shims being trimmed flush, solid mount', proTip: 'If studs don\'t align with the vanity back rail, use toggle bolts or wall anchors rated for at least 75 pounds.' },
      { stepNumber: 6, title: 'Install the Faucet and Drain', description: 'If the vanity top doesn\'t have the faucet pre-installed, mount the faucet now (it\'s easier before the top is in place). Apply plumber\'s putty around the drain flange and seat it through the sink hole. Connect the drain body and pop-up assembly from below. Follow the faucet manufacturer\'s instructions for supply line connections.', imagePrompt: 'Faucet being mounted to the vanity top before placement, drain assembly being connected from below, plumber putty around the flange' },
      { stepNumber: 7, title: 'Set the Vanity Top and Connect Plumbing', description: 'Apply a bead of silicone caulk along the top edge of the vanity base. Set the top in position, pressing it down evenly. Connect the supply lines to the shut-off valves (hand-tight plus a quarter turn with pliers). Install a new P-trap, connecting the tailpiece to the drain pipe in the wall. Make sure the P-trap slopes slightly downward toward the wall.', imagePrompt: 'Vanity top being placed on the base, then supply lines being connected to shut-off valves, P-trap being installed, plumbing hookup' },
      { stepNumber: 8, title: 'Caulk, Test, and Finish', description: 'Apply a bead of silicone caulk where the vanity top meets the wall (backsplash joint). Smooth with a wet finger. Turn on the shut-off valves slowly and check every connection for leaks. Run water for a full minute and check the P-trap and supply connections. Tighten any dripping joints a quarter turn. Install the mirror, light fixture, and accessories.', imagePrompt: 'Silicone caulk being applied along the backsplash, water running to test for leaks, checking under the sink, finished modern bathroom vanity', proTip: 'Let the silicone caulk cure 24 hours before exposing it to water. Use the sink gently for the first day.' },
    ],
    tips: ['Buy a vanity with the faucet holes pre-drilled to match your faucet configuration (single-hole, 4-inch centerset, or 8-inch widespread).', 'Braided stainless steel supply lines are worth the small extra cost — they\'re more reliable and easier to install than rigid supply tubes.', 'Measure your existing plumbing rough-in BEFORE buying a vanity. A 30-inch vanity won\'t work if your drain pipe exits 20 inches from the wall.', 'Consider a wall-mounted vanity for a modern look and easy floor cleaning, but note it requires a blocking board installed in the wall for support.'],
    warnings: ['Always shut off the water supply before disconnecting plumbing. Verify by trying to run the faucet after closing the valves.', 'Vanity tops are heavy and fragile. Have a helper when lifting stone or marble tops — they can crack if flexed.', 'If the drain or supply lines need to be moved more than a few inches, consult a plumber. Moving rough-in plumbing involves opening the wall.'],
    affiliateProducts: [
      { id: 'prod-glacier-bay-vanity', name: 'Glacier Bay Everdean 30" Vanity with Top and Mirror', description: 'Complete vanity set with pre-drilled top, soft-close doors, and matching mirror. Pearl gray finish. Modern shaker style. Faucet sold separately.', price: 299.00, affiliateUrl: 'https://www.homedepot.com/p/Glacier-Bay-Everdean/312845963', retailer: 'homedepot', imageUrl: '/products/glacier-bay-everdean.jpg', rating: 4.3, reviewCount: 8700, badge: 'Best Value' },
      { id: 'prod-delta-foundations-bath', name: 'Delta Foundations 4" Centerset Bathroom Faucet (Chrome)', description: 'Classic two-handle centerset faucet with brass construction. Fits standard 4-inch vanity tops. Includes pop-up drain. Lifetime limited warranty.', price: 49.00, affiliateUrl: 'https://www.lowes.com/pd/Delta-Foundations/1000244515', retailer: 'lowes', imageUrl: '/products/delta-foundations.jpg', rating: 4.4, reviewCount: 12400 },
      { id: 'prod-keeney-ptrap', name: 'Keeney 1-1/4" White PVC P-Trap Kit', description: 'Complete P-trap assembly for bathroom sinks. Includes trap, tailpiece extension, wall tube, and all slip nuts and washers. Fits standard lavatory drains.', price: 8.98, affiliateUrl: 'https://www.homedepot.com/p/Keeney-P-Trap/100347890', retailer: 'homedepot', imageUrl: '/products/keeney-ptrap.jpg', rating: 4.5, reviewCount: 3400 },
    ],
    featuredImage: '/images/guides/install-bathroom-vanity.jpg',
    publishedAt: '2025-08-20T09:00:00Z',
    updatedAt: '2026-01-15T14:00:00Z',
    author: defaultAuthor,
    seo: { title: 'How to Install a Bathroom Vanity (DIY Guide) | Repair & Refinish', description: 'Install a new bathroom vanity in 3-4 hours. Covers old vanity removal, plumbing connections, leveling, mounting, and leak testing.', keywords: ['install bathroom vanity', 'replace bathroom vanity', 'bathroom vanity installation', 'vanity plumbing', 'bathroom sink install', 'DIY vanity', 'bathroom remodel'] },
    faqs: [
      { question: 'Can I replace a pedestal sink with a vanity?', answer: 'Yes. You\'ll need to cap or extend the drain and supply lines, which may be exposed behind a pedestal sink. The vanity hides the plumbing, so it often looks cleaner. Make sure the vanity drain lines up with the existing rough-in.' },
      { question: 'Do I need a plumber to install a bathroom vanity?', answer: 'Not if the new vanity uses the same plumbing positions as the old one. Connecting supply lines and a P-trap is straightforward DIY plumbing. If you need to move pipes, that\'s when a plumber is worth the call.' },
      { question: 'What\'s the standard bathroom vanity height?', answer: 'Traditional vanity height is 31-32 inches (including the countertop). "Comfort height" vanities are 36 inches, matching kitchen counter height. Comfort height is increasingly popular and more ergonomic for most adults.' },
    ],
    relatedGuides: ['regrout-tile-shower', 'replace-toilet', 'replace-kitchen-faucet'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide: Caulk a Bathtub Like a Pro
  // ---------------------------------------------------------------------------
  {
    id: 'guide-caulk-bathtub',
    slug: 'caulk-bathtub',
    title: 'How to Caulk a Bathtub Like a Pro',
    excerpt:
      'Cracked or moldy caulk around your tub lets water seep behind the wall, causing hidden damage. Re-caulking takes just 30-45 minutes and prevents thousands in water damage repairs.',
    content: `The caulk seal between your bathtub and the wall is your bathroom's first line of defense against water damage. When it cracks, peels, or turns black with mold, water seeps behind the tile and into the wall cavity — causing rot, mold growth, and structural damage that costs thousands to repair.

## Why Caulk Fails

Bathtub caulk fails because the tub moves. When you fill a tub with water, it settles slightly under the weight. When it drains, the tub rises back up. This constant movement eventually cracks rigid caulk. That's why you must use 100% silicone caulk — it stays flexible permanently.

## The Secret to Perfect Caulk Lines

The difference between professional-looking caulk and amateur blobs comes down to one thing: masking tape. Apply tape on both sides of the joint, caulk, smooth, and remove the tape. The result is a perfectly straight, uniform bead every time.`,
    category: 'kitchen-bath',
    difficulty: 'beginner',
    estimatedTime: '30-45 minutes',
    estimatedCost: { low: 5, mid: 12, high: 20, diyVsPro: 'A handyman charges $75-$150 for bathtub caulking. DIY materials cost $5-$20.' },
    tools: ['Caulk gun', 'Utility knife or 5-in-1 tool', 'Painter\'s tape', 'Caulk smoothing tool or your finger', 'Spray bottle with soapy water', 'Paper towels', 'Rubbing alcohol'],
    materials: ['100% silicone caulk (kitchen & bath grade, mold-resistant)', 'Caulk remover gel (like Goo Gone Caulk Remover)', 'Rubbing alcohol (for surface prep)', 'Painter\'s tape'],
    steps: [
      { stepNumber: 1, title: 'Remove the Old Caulk Completely', description: 'Apply caulk remover gel along the old caulk line and let it sit for 2-3 hours (or overnight for stubborn silicone). Use a utility knife or 5-in-1 tool to slice along both edges of the old caulk bead, then pull it out in strips. Scrape any remaining residue. For persistent silicone, reapply the remover and scrub with a stiff plastic brush. The surface must be completely clean and free of old caulk for the new bead to adhere.', imagePrompt: 'Caulk remover gel applied along old bathtub caulk, then utility knife slicing and pulling out old caulk in strips, clean joint revealed', proTip: 'Never apply new caulk over old caulk. The new bead won\'t bond properly and will peel within months.' },
      { stepNumber: 2, title: 'Clean and Dry the Joint', description: 'After removing all old caulk, wipe both surfaces (tub edge and tile/wall) with rubbing alcohol to remove soap residue, oils, and remaining adhesive. Let the surfaces dry completely — at least 30 minutes. Any moisture prevents silicone from curing properly. Run a fan to speed drying if needed.', imagePrompt: 'Rubbing alcohol on a cloth wiping the clean caulk joint where tub meets tile, both surfaces being thoroughly cleaned, preparing for new caulk' },
      { stepNumber: 3, title: 'Apply Masking Tape for Perfect Lines', description: 'Apply painter\'s tape along both sides of the joint — one strip on the tub edge and one on the tile or wall, leaving a gap of about 3/8 inch (the width you want the caulk bead). Press the tape edges firmly. This masking technique is the secret to perfectly straight caulk lines. Take your time here — the tape placement determines the final appearance.', imagePrompt: 'Painter tape being applied in two parallel strips along the bathtub-to-tile joint, even gap between the strips, precise masking for clean caulk lines', proTip: 'Run your fingernail along the inner edge of the tape to seal it tight. Any gap under the tape allows caulk to bleed underneath and ruin the clean line.' },
      { stepNumber: 4, title: 'Fill the Tub With Water', description: 'Before caulking, fill the bathtub with water to its normal bath level. The weight of the water pushes the tub down to its lowest point. When you caulk in this position and the tub rises after draining, the caulk compresses slightly rather than stretching and cracking. This trick significantly extends caulk life.', imagePrompt: 'Bathtub filled with water before caulking, showing the tub settling under the weight, preparing for caulk application at the settled position', warning: 'Don\'t skip this step. Caulking an empty tub means the bead will stretch and crack much sooner because the tub drops every time it\'s filled.' },
      { stepNumber: 5, title: 'Apply the Caulk Bead', description: 'Cut the caulk tube tip at a 45-degree angle, making a small opening (1/4 inch). Puncture the inner seal with the rod on the caulk gun. Starting at one end of the joint, apply a steady, continuous bead of silicone caulk along the entire length. Move at a consistent speed — too fast creates a thin bead, too slow creates a thick one. Don\'t stop and restart mid-run if you can avoid it.', imagePrompt: 'Caulk gun applying a steady bead of white silicone caulk along the taped bathtub joint, consistent speed, smooth application from one end to the other' },
      { stepNumber: 6, title: 'Smooth the Bead', description: 'Spray the caulk bead lightly with soapy water (dish soap and water in a spray bottle). Run your finger or a caulk smoothing tool along the bead in one continuous pass, pressing the caulk into the joint and creating a smooth concave surface. Wipe excess caulk from your finger with a paper towel. The soapy water prevents the caulk from sticking to your finger.', imagePrompt: 'Finger smoothing the caulk bead in one continuous stroke, soapy water preventing sticking, smooth concave bead forming, professional-looking result' },
      { stepNumber: 7, title: 'Remove Tape and Let Cure', description: 'Immediately remove the painter\'s tape while the caulk is still wet. Pull the tape away at a 45-degree angle. This reveals perfectly crisp caulk lines. If any caulk smears onto the tile or tub, wipe it immediately with a paper towel dampened with rubbing alcohol. Do not use the tub for at least 24 hours while the silicone cures. Drain the water carefully after the caulk skins over (about 30 minutes).', imagePrompt: 'Painter tape being peeled away revealing perfectly clean caulk lines, smooth white silicone bead between tub and tile, professional finish', proTip: 'Remove the tape immediately — don\'t wait. Once silicone begins to skin over (15-20 minutes), pulling the tape tears the caulk.' },
    ],
    tips: ['Always use 100% silicone caulk for bathtubs — never acrylic or latex caulk. Silicone stays flexible, is waterproof, and resists mold far better.', 'Fill the tub with water before caulking. This prevents the caulk from stretching and cracking when the tub settles under bath water.', 'Cut the caulk tube tip small. You can always cut more off, but you can\'t make the opening smaller.', 'Re-caulk your tub annually or whenever you see any separation, discoloration, or mold in the bead.'],
    warnings: ['Do not use the bathtub or shower for 24 hours after caulking. Water exposure before silicone cures prevents proper bonding.', 'Ensure ventilation when working with silicone caulk. The acetic acid fumes (vinegar smell) can be irritating in enclosed bathrooms.', 'If you see black mold on the wall or substrate after removing old caulk, clean it with a bleach solution (1:10 ratio) before re-caulking.'],
    affiliateProducts: [
      { id: 'prod-ge-silicone-tub', name: 'GE Supreme Silicone Kitchen & Bath Caulk (10.1 oz)', description: 'Mold-resistant 100% silicone with 10-year mold-free guarantee. Permanently flexible. Waterproof in 30 minutes. Available in white, clear, and almond.', price: 7.98, affiliateUrl: 'https://www.lowes.com/pd/GE-Supreme-Silicone/5001380367', retailer: 'lowes', imageUrl: '/products/ge-supreme-silicone.jpg', rating: 4.5, reviewCount: 11700, badge: 'Our Pick' },
      { id: 'prod-dap-caulk-remover', name: 'DAP Caulk-Be-Gone Caulk Remover (12 oz)', description: 'Gel formula that softens silicone and latex caulk for easy removal. Apply, wait 2-3 hours, and peel. Works on tubs, sinks, and windows.', price: 7.98, affiliateUrl: 'https://www.homedepot.com/p/DAP-Caulk-Be-Gone/202097344', retailer: 'homedepot', imageUrl: '/products/dap-caulk-remover.jpg', rating: 4.2, reviewCount: 6800 },
      { id: 'prod-allway-caulk-tool', name: 'Allway 3-in-1 Caulk Tool (Smoother, Scraper, Remover)', description: 'Multi-function caulk tool with silicone smoother, old caulk scraper, and removal hook. Creates professional-looking beads every time. Dishwasher safe.', price: 5.98, affiliateUrl: 'https://www.amazon.com/dp/B001BKYBUI', retailer: 'amazon', imageUrl: '/products/allway-caulk-tool.jpg', rating: 4.4, reviewCount: 9200, badge: 'Best Value' },
    ],
    featuredImage: '/images/guides/caulk-bathtub.jpg',
    publishedAt: '2025-07-15T09:00:00Z',
    updatedAt: '2025-12-10T14:00:00Z',
    author: defaultAuthor,
    seo: { title: 'How to Caulk a Bathtub Like a Pro | Repair & Refinish', description: 'Caulk your bathtub perfectly in 30-45 minutes. Step-by-step guide for removing old caulk, masking for clean lines, and applying silicone for a watertight seal.', keywords: ['caulk bathtub', 'bathtub caulking', 'silicone caulk tub', 'recaulk bathtub', 'bathroom caulk', 'tub caulk removal', 'caulk around tub'] },
    faqs: [
      { question: 'How often should I re-caulk my bathtub?', answer: 'Inspect annually. Good silicone caulk lasts 5-10 years, but heavy use, hard water, and poor ventilation can shorten its life. Re-caulk at the first sign of separation, cracking, or mold that won\'t clean away.' },
      { question: 'Can I caulk over old caulk?', answer: 'No. New caulk doesn\'t bond well to old caulk. Always remove the old caulk completely before applying new. This takes extra time but ensures a lasting seal.' },
      { question: 'Why does my bathtub caulk keep getting moldy?', answer: 'Poor ventilation is the primary cause. Run the bathroom fan during and for 30 minutes after every shower. Squeegee the tub area after bathing. Use a mold-resistant silicone caulk (look for "mold-free" guarantee on the label). If mold persists, the caulk may not be 100% silicone — acrylic and latex caulks are far more mold-prone.' },
    ],
    relatedGuides: ['regrout-tile-shower', 'replace-toilet', 'install-bathroom-vanity'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide: Replace Cabinet Hardware
  // ---------------------------------------------------------------------------
  {
    id: 'guide-replace-cabinet-hardware',
    slug: 'replace-cabinet-hardware',
    title: 'How to Replace Cabinet Hardware',
    excerpt:
      'New knobs and pulls are the quickest, cheapest kitchen or bathroom upgrade — 30-60 minutes and under $100 transforms the entire look. This beginner guide covers measuring, drilling, and installing.',
    content: `Replacing cabinet hardware is the easiest kitchen and bathroom upgrade. Swapping dated brass knobs for modern bar pulls or matte black handles costs $50-$100 for an average kitchen and takes under an hour. The visual impact rivals projects that cost ten times more.

## Knobs vs. Pulls

Knobs (single screw) are simpler — they use the existing screw hole. Pulls (two screws) offer a more modern look and are easier to grab, but they require a second hole if you're switching from knobs. A cabinet hardware jig makes drilling new holes perfectly aligned every time.

## Measuring for Pulls

"Center-to-center" (CC) measurement is the distance between the two screw holes. Common sizes are 3 inches, 3-3/4 inches, 5 inches, and 6-5/16 inches. Measure your existing pulls (if any) to buy the same CC — or choose a new size and drill new holes.`,
    category: 'kitchen-bath',
    difficulty: 'beginner',
    estimatedTime: '30-60 minutes',
    estimatedCost: { low: 25, mid: 60, high: 100, diyVsPro: 'A handyman charges $100-$200 for hardware replacement. DIY hardware costs $25-$100 for an average kitchen (20-30 pieces).' },
    tools: ['Screwdriver (Phillips)', 'Drill with bits', 'Cabinet hardware jig (for new holes)', 'Tape measure', 'Pencil', 'Painter\'s tape'],
    materials: ['New cabinet knobs or pulls', 'Machine screws (if included screws are wrong length)', 'Wood filler (to fill old holes if changing configurations)'],
    steps: [
      { stepNumber: 1, title: 'Choose Your Hardware and Measure', description: 'Decide between knobs (one hole) and pulls (two holes). If switching from knobs to pulls, you\'ll need to drill new holes. Measure the center-to-center (CC) distance of your existing pulls (if applicable). Count all the cabinets and drawers that need hardware — typically 20-30 pieces for an average kitchen. Order a few extras in case of defects.', imagePrompt: 'Tape measure checking center-to-center distance on existing cabinet pull, counting cabinets in a kitchen, hardware selection laid out on counter', proTip: 'Put drawers on pulls (easier to open) and doors on knobs (cleaner look). Or use pulls everywhere for a uniform modern aesthetic.' },
      { stepNumber: 2, title: 'Remove Old Hardware', description: 'Unscrew all existing knobs or pulls from the inside of the cabinet door or drawer front. If the old hardware has been painted over, score around the base with a utility knife first to prevent paint chipping. Save one old screw — you\'ll use it to check the length of the new screws. Set old hardware aside (donate it if it\'s still in good condition).', imagePrompt: 'Screwdriver removing old cabinet knob from inside the door, scoring paint around the base, old hardware collected in a bowl' },
      { stepNumber: 3, title: 'Fill Old Holes If Needed', description: 'If you\'re switching from pulls to knobs (going from two holes to one) or changing the CC distance, fill the old holes with wood filler. Press filler in with a putty knife, let it dry, then sand smooth. Touch up with matching paint. If simply swapping knobs for knobs or matching-CC pulls, skip this step — you\'ll reuse the existing holes.', imagePrompt: 'Wood filler being pressed into old cabinet hardware holes, drying, then sanded flush and touched up with paint, hole filling process' },
      { stepNumber: 4, title: 'Mark and Drill New Holes', description: 'If drilling new holes, use a cabinet hardware jig (like the Liberty Align Right Jig). The jig clamps to the door or drawer edge and positions the drill guide at the exact center. Mark your desired hole positions through the jig. Apply painter\'s tape over the mark (this prevents the drill from chipping paint or laminate), then drill through the tape with the correct size bit — typically 3/16 inch for standard hardware screws.', imagePrompt: 'Cabinet hardware jig clamped to a drawer front, drill going through the positioned guide holes, painter tape preventing chip-out, precise alignment', proTip: 'A hardware jig costs $20-$30 and ensures every hole is perfectly centered and aligned. Without a jig, it\'s very easy to get pulls slightly crooked — and it\'s noticeable.' },
      { stepNumber: 5, title: 'Install the New Hardware', description: 'Insert the machine screw through the back of the cabinet door or drawer front. Thread the knob or pull onto the screw from the front and tighten. For pulls, insert both screws and start both before tightening either one — this ensures the pull sits straight. Tighten until snug — don\'t overtighten or you\'ll strip the screw hole or crack the door panel.', imagePrompt: 'New brushed brass pull being attached to a white cabinet door, screw going through from behind, pull being hand-tightened, modern look' },
      { stepNumber: 6, title: 'Adjust Screw Length If Needed', description: 'If the screws that came with your hardware are too long (they stick out inside the cabinet) or too short (they don\'t reach through the door), buy replacement machine screws at the hardware store. Common sizes are #8-32 thread in various lengths. Bring one of the included screws to match the thread. Drawer fronts are usually thicker than doors, so you may need two different screw lengths.', imagePrompt: 'Comparing screw lengths — one too long protruding inside cabinet, replacement screw of correct length being installed, proper fit', proTip: 'For thick drawer fronts, some hardware brands offer long-screw kits. Check the manufacturer\'s website before making a trip to the hardware store.' },
      { stepNumber: 7, title: 'Step Back and Verify Alignment', description: 'After installing all hardware, close all doors and drawers and step back to check alignment. All pulls should be at the same height and orientation. All knobs should be centered consistently. If any are off, loosen and adjust. The visual consistency of aligned hardware is what separates a professional-looking kitchen from a DIY one.', imagePrompt: 'Newly installed matte black bar pulls on white kitchen cabinets, perfectly aligned, uniform spacing, dramatic before-and-after transformation' },
    ],
    tips: ['Buy hardware in bulk online — prices are 40-60% lower than hardware stores. Amazon and Build.com have the best selection and pricing.', 'Consistent placement matters: upper cabinet knobs go in the lower corner, lower cabinet knobs go in the upper corner, and drawer pulls go centered vertically.', 'Matte black, brushed brass, and brushed nickel are the three most popular finishes in 2025-2026. Polished chrome is classic but dated in traditional kitchens.', 'Buy one piece first and live with it for a few days before ordering the full set. Hardware looks different on your cabinets than in the store.'],
    warnings: ['Don\'t overtighten hardware screws. They can strip the hole in the door panel or crack thin drawer fronts.', 'When drilling through laminate or painted surfaces, apply painter\'s tape first to prevent chipping.', 'If the screw hole is stripped (screw spins freely), fill it with a toothpick and wood glue, let dry, then re-drill.'],
    affiliateProducts: [
      { id: 'prod-goldenwarm-pulls', name: 'goldenwarm 5" Cabinet Pulls Matte Black (30-pack)', description: 'Modern bar pulls, 3-3/4" center-to-center. Solid stainless steel construction. Matte black finish. Includes mounting screws. The best-selling cabinet pull on Amazon.', price: 35.99, affiliateUrl: 'https://www.amazon.com/dp/B07VFHJB5G', retailer: 'amazon', imageUrl: '/products/goldenwarm-pulls.jpg', rating: 4.7, reviewCount: 24300, badge: 'Best Seller' },
      { id: 'prod-liberty-jig', name: 'Liberty Align Right Cabinet Hardware Jig', description: 'Universal cabinet hardware mounting template. Self-centering for doors and drawers. Drill perfectly aligned holes every time. Adjustable for any center-to-center distance.', price: 24.98, affiliateUrl: 'https://www.homedepot.com/p/Liberty-Align-Right/203735915', retailer: 'homedepot', imageUrl: '/products/liberty-jig.jpg', rating: 4.5, reviewCount: 8400, badge: 'Best Value' },
      { id: 'prod-amerock-knobs', name: 'Amerock Allison 1-1/4" Cabinet Knob Satin Nickel (10-pack)', description: 'Classic round cabinet knobs in satin nickel. Solid zinc die-cast construction. Simple one-hole installation. Timeless design suits any kitchen style.', price: 19.98, affiliateUrl: 'https://www.amazon.com/dp/B01LY8R6Z4', retailer: 'amazon', imageUrl: '/products/amerock-knobs.jpg', rating: 4.6, reviewCount: 14200 },
    ],
    featuredImage: '/images/guides/replace-cabinet-hardware.jpg',
    publishedAt: '2025-06-25T09:00:00Z',
    updatedAt: '2025-11-15T14:00:00Z',
    author: defaultAuthor,
    seo: { title: 'How to Replace Cabinet Hardware (Quick Kitchen Upgrade) | Repair & Refinish', description: 'Replace cabinet knobs and pulls in 30-60 minutes. Covers measuring, drilling with a jig, and installing for a quick, affordable kitchen transformation.', keywords: ['replace cabinet hardware', 'cabinet knobs and pulls', 'kitchen hardware upgrade', 'cabinet pull installation', 'change cabinet knobs', 'hardware jig', 'kitchen cabinet handles'] },
    faqs: [
      { question: 'What size cabinet pulls should I get?', answer: 'The most popular pull length is 5 inches (3-3/4" CC) for drawers and small doors, and 7-1/2 inches (5" CC) for larger doors. Use the same CC measurement throughout for a uniform look, but you can mix sizes between drawers and doors.' },
      { question: 'Can I switch from knobs to pulls without drilling?', answer: 'Not usually. Pulls require two screw holes while knobs use one. You\'ll need to drill one new hole and fill the old one (if it\'s not aligned with either new hole). A cabinet hardware jig makes this easy and accurate.' },
      { question: 'Where should cabinet hardware be positioned?', answer: 'Standard placement: upper cabinet knobs/pulls go 2-1/2 to 3 inches from the bottom corner. Lower cabinet knobs/pulls go 2-1/2 to 3 inches from the top corner. Drawer pulls are centered vertically on the drawer front.' },
    ],
    relatedGuides: ['paint-kitchen-cabinets', 'install-tile-backsplash', 'replace-kitchen-faucet'],
    status: 'published',
  },
];

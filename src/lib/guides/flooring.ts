import type { Guide } from '@/types';
import { defaultAuthor } from '../site-config';

export const flooringGuides: Guide[] = [
  // ---------------------------------------------------------------------------
  // Guide 12: Install Vinyl Plank Flooring
  // ---------------------------------------------------------------------------
  {
    id: 'guide-install-vinyl-plank-flooring',
    slug: 'install-vinyl-plank-flooring',
    title: 'How to Install Vinyl Plank Flooring',
    excerpt:
      'Luxury vinyl plank (LVP) is waterproof, durable, and installs as a floating floor over almost any existing surface. This guide covers layout planning, cutting, and click-lock installation for a professional result.',
    content: `Luxury vinyl plank flooring has exploded in popularity for good reason: it's waterproof, scratch-resistant, comfortable underfoot, and mimics the look of real hardwood at a fraction of the cost. Most LVP uses a click-lock system that snaps together without glue, making it a true DIY-friendly project.

## Can I Install Over My Existing Floor?

LVP can be installed over concrete, plywood, existing vinyl, tile, and even hardwood — as long as the surface is flat, clean, and structurally sound. It cannot be installed over carpet. The subfloor must be flat to within 3/16 inch over 10 feet.

## Acclimation

Stack the unopened boxes in the room for 48 hours before installation. This lets the planks adjust to the room's temperature and humidity, which prevents expansion gaps and buckling after installation.`,
    category: 'flooring',
    difficulty: 'intermediate',
    estimatedTime: '4-8 hours (200 sq ft room)',
    estimatedCost: {
      low: 200,
      mid: 350,
      high: 500,
      diyVsPro: 'Professional LVP installation costs $3-$7 per sq ft (installed). DIY material cost is $1-$3 per sq ft plus underlayment.',
    },
    tools: [
      'Utility knife with fresh blades',
      'T-square or speed square',
      'Tape measure',
      'Rubber mallet',
      'Pull bar (for last row)',
      'Tapping block',
      'Spacers (1/4 inch)',
      'Pencil',
    ],
    materials: [
      'Luxury vinyl plank flooring (order 10% extra for waste)',
      'Underlayment (if not pre-attached to planks)',
      'Transition strips (for doorways)',
      'Quarter-round or shoe molding (to cover expansion gap)',
      '1/4-inch spacers',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Prepare the Subfloor',
        description:
          'Remove the existing baseboards or shoe molding (label them for reinstallation). Clean the subfloor thoroughly — sweep, vacuum, and remove any debris, staples, or high spots. Check for flatness by laying a long straightedge across the floor; fill any low spots with floor leveling compound and sand down any high spots. The floor must be flat to within 3/16 inch over a 10-foot span.',
        imagePrompt:
          'Subfloor being prepared: baseboards removed, floor being checked with a long straightedge, high spots marked, clean bare floor ready for installation',
        proTip:
          'If installing over concrete, do a moisture test first. Tape a 2x2 foot piece of plastic sheeting to the floor, wait 48 hours, and check for condensation underneath. Moisture means you need a vapor barrier.',
      },
      {
        stepNumber: 2,
        title: 'Install the Underlayment',
        description:
          'If your LVP doesn\'t have pre-attached underlayment (a foam or cork pad on the bottom of each plank), roll out a separate underlayment. Lay strips edge to edge without overlapping (overlap causes high spots). Tape the seams with the manufacturer\'s recommended tape. On concrete subfloors, use an underlayment with a built-in vapor barrier. Trim the underlayment flush at the walls.',
        imagePrompt:
          'Foam underlayment being rolled out across a subfloor, seams taped with underlayment tape, smooth flat surface prepared for vinyl planks',
      },
      {
        stepNumber: 3,
        title: 'Plan Your Layout',
        description:
          'Measure the room width and divide by the plank width to determine how many rows you need. If the last row would be less than half a plank wide, adjust the first row by ripping it narrower to balance the two sides. Run planks parallel to the longest wall or toward the main light source for the best visual effect. Dry-fit the first two rows without clicking them together to verify the layout looks right.',
        imagePrompt:
          'Top-down view of room layout planning for vinyl plank: tape measure across room width, planks dry-fit along first two rows, spacers along walls',
        proTip:
          'Stagger the end joints between rows by at least 6 inches (12 inches is better). This creates a natural, random pattern and prevents weak seam lines.',
      },
      {
        stepNumber: 4,
        title: 'Install the First Row',
        description:
          'Place 1/4-inch spacers along the starting wall to create an expansion gap. Lay the first plank with the tongue side facing the wall. If you need to rip the first row narrower, score the plank with a utility knife against a straightedge and snap it, or use a table saw for a cleaner cut. Connect subsequent planks in the first row end-to-end by angling the tongue of the new plank into the groove of the previous plank and pressing down until it clicks.',
        imagePrompt:
          'First row of vinyl plank being installed with spacers along the wall, plank being angled and clicked into the adjacent plank, hands pressing down on the lock',
        warning:
          'Never skip the expansion gap. LVP expands and contracts with temperature changes. Without a gap, the floor will buckle.',
      },
      {
        stepNumber: 5,
        title: 'Continue Row by Row',
        description:
          'Start the second row with a plank cut to a different length (at least 6 inches offset from the first row\'s end joint). Angle the long edge of the new plank into the groove of the first row at about 20 degrees, then press down and forward until it clicks flat. Use a tapping block and rubber mallet to snug tight end joints. Continue row by row, maintaining the staggered pattern and checking alignment every few rows.',
        imagePrompt:
          'Vinyl plank being angled and clicked into the previous row, tapping block and rubber mallet used to close end joints, staggered pattern visible, floor progress',
        proTip:
          'Save your cut-off pieces from the end of each row to start the next row (as long as they\'re at least 8 inches long). This minimizes waste and naturally creates a staggered pattern.',
      },
      {
        stepNumber: 6,
        title: 'Cut Around Obstacles',
        description:
          'For door frames, use an oscillating multi-tool or a handsaw to undercut the door casing so the plank slides underneath. For pipes, drill a hole slightly larger than the pipe diameter, then make a straight cut from the hole to the nearest edge, install the plank, and fill the gap around the pipe with matching caulk. For irregular shapes, make a cardboard template and transfer it to the plank.',
        imagePrompt:
          'Oscillating tool undercutting a door frame for vinyl plank, and a plank being cut to fit around a pipe, two-panel obstacle solution guide',
      },
      {
        stepNumber: 7,
        title: 'Install the Last Row',
        description:
          'Measure the width needed for the last row (accounting for the 1/4-inch expansion gap). Rip the planks to width using a utility knife and straightedge (score deeply and snap) or a table saw. Use a pull bar hooked over the plank\'s edge and tap it with a rubber mallet to pull the last row tight against the previous row. The pull bar is essential because there\'s no room to swing a tapping block against the wall.',
        imagePrompt:
          'Pull bar being used to draw the last row of vinyl plank tight against the previous row, rubber mallet tapping the pull bar, tight fit against wall with spacers',
      },
      {
        stepNumber: 8,
        title: 'Install Transitions and Trim',
        description:
          'Remove all spacers. Install transition strips at doorways where the LVP meets a different flooring material. Reinstall the baseboards or add new quarter-round molding to cover the expansion gap along the walls. Nail the molding to the wall (not the floor) so the floor can still expand freely underneath. Set nails below the surface and fill the holes with matching wood filler.',
        imagePrompt:
          'Quarter-round molding being nailed to the wall above the expansion gap, transition strip installed in doorway, clean finished vinyl plank floor, complete installation',
        proTip:
          'If you removed the original baseboards, reinstalling them covers the gap perfectly. If not, quarter-round molding is the fastest solution and costs about $0.50 per linear foot.',
      },
    ],
    tips: [
      'Order 10% more material than your room\'s square footage to account for cuts, mistakes, and future repairs.',
      'Use a sharp utility knife for cutting vinyl planks. Score the face, then snap over your knee or a straightedge. A dull blade tears rather than scores.',
      'Keep the room temperature between 65-85°F during and after installation. Extreme cold makes LVP brittle; extreme heat makes it too flexible.',
      'Mix planks from multiple boxes as you install. This prevents pattern repetition and color banding.',
      'Save a few extra planks in a closet for future repairs. Matching color and pattern later is nearly impossible.',
    ],
    warnings: [
      'Always maintain a 1/4-inch expansion gap around all walls, cabinets, and fixed objects. LVP expands with heat and will buckle without this gap.',
      'Do not install heavy kitchen islands or cabinets on top of floating LVP — the weight prevents the floor from expanding. Install cabinets first, then float the floor up to them.',
      'Check the manufacturer\'s subfloor moisture requirements before installing over concrete. Excess moisture causes mold under the flooring.',
    ],
    affiliateProducts: [
      {
        id: 'prod-lifeproof-lvp',
        name: 'LifeProof Sterling Oak 8.7" x 47.6" Vinyl Plank (20.06 sq ft/case)',
        description:
          'Waterproof rigid core LVP with attached underlayment. Realistic wood grain texture, 6mm thick with a 12-mil wear layer. Click-lock installation. Exclusive to Home Depot.',
        price: 42.98,
        affiliateUrl: 'https://www.homedepot.com/p/LifeProof-Sterling-Oak/312693810',
        retailer: 'homedepot',
        imageUrl: '/products/lifeproof-sterling-oak.jpg',
        rating: 4.3,
        reviewCount: 14200,
        badge: 'our-pick',
      },
      {
        id: 'prod-smartcore-naturals',
        name: 'SmartCore Naturals 5" Waterproof Vinyl Plank (20.01 sq ft/case)',
        description:
          'Real wood veneer over rigid core. Waterproof with built-in underlayment. Click-lock for easy DIY installation. Exclusive to Lowe\'s.',
        price: 59.98,
        affiliateUrl: 'https://www.lowes.com/pd/SmartCore-Naturals/5005341597',
        retailer: 'lowes',
        imageUrl: '/products/smartcore-naturals.jpg',
        rating: 4.4,
        reviewCount: 6800,
      },
      {
        id: 'prod-roberts-pullbar',
        name: 'Roberts Pro Pull Bar and Tapping Block Kit',
        description:
          'Essential installation kit with 14" pull bar, tapping block, and 30 spacers. The pull bar is critical for installing the last row against the wall.',
        price: 14.98,
        affiliateUrl: 'https://www.homedepot.com/p/Roberts-Pull-Bar-Kit/312587432',
        retailer: 'homedepot',
        imageUrl: '/products/roberts-pullbar-kit.jpg',
        rating: 4.5,
        reviewCount: 3200,
        badge: 'best-value',
      },
      {
        id: 'prod-dewalt-oscillating',
        name: 'DEWALT DCS354B 20V Oscillating Multi-Tool (tool only)',
        description:
          'Cordless oscillating tool for undercutting door frames and trimming planks. Quick-change blade system. Essential for a clean installation around obstacles.',
        price: 99.00,
        affiliateUrl: 'https://www.amazon.com/dp/B07KXHH1DG',
        retailer: 'amazon',
        imageUrl: '/products/dewalt-oscillating.jpg',
        rating: 4.7,
        reviewCount: 18900,
      },
    ],
    featuredImage: '/guides/install-vinyl-plank-flooring-hero.jpg',
    publishedAt: '2026-03-02T09:00:00Z',
    updatedAt: '2026-03-19T16:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Install Vinyl Plank Flooring (DIY Guide) | Repair & Refinish',
      description:
        'Install luxury vinyl plank (LVP) flooring yourself. Complete guide covering subfloor prep, click-lock installation, cutting, transitions, and finishing for a pro-quality floor.',
      keywords: [
        'install vinyl plank flooring',
        'LVP flooring installation',
        'luxury vinyl plank DIY',
        'click lock flooring',
        'vinyl plank over concrete',
        'how to lay vinyl planks',
        'floating floor installation',
      ],
      ogImage: '/guides/install-vinyl-plank-flooring-og.jpg',
    },
    faqs: [
      {
        question: 'Can I install vinyl plank flooring over tile?',
        answer:
          'Yes, as long as the tile is in good condition, firmly adhered, and the grout lines are not too deep (less than 1/8 inch). If grout lines are deep, use a floor leveling compound to fill them first. The subfloor must be flat to within 3/16 inch over 10 feet.',
      },
      {
        question: 'How long does vinyl plank flooring last?',
        answer:
          'Quality LVP with a 12-20 mil wear layer lasts 15-25 years in residential settings. The wear layer thickness is the most important durability factor. Budget LVP with a 6-mil wear layer may only last 5-10 years in high-traffic areas.',
      },
      {
        question: 'Does vinyl plank flooring need underlayment?',
        answer:
          'Check your planks — many LVP products have underlayment pre-attached (a thin foam pad on the bottom). If yours does, do NOT add additional underlayment. If yours doesn\'t, use a 1-2mm foam or cork underlayment. On concrete, use one with a vapor barrier.',
      },
      {
        question: 'Can I put vinyl plank flooring in a bathroom?',
        answer:
          'Absolutely. Waterproof LVP is one of the best flooring choices for bathrooms. Make sure to apply silicone caulk where the floor meets the tub, shower, and toilet base to prevent water from seeping under the planks.',
      },
    ],
    relatedGuides: ['refinish-hardwood-floors', 'fix-squeaky-floors', 'install-tile-backsplash'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide 13: Fix Squeaky Floors
  // ---------------------------------------------------------------------------
  {
    id: 'guide-fix-squeaky-floors',
    slug: 'fix-squeaky-floors',
    title: 'How to Fix Squeaky Floors',
    excerpt:
      'End the annoying creaks and squeaks under your feet. This guide covers fixes for both accessible subfloors (from the basement) and finished floors (from above) without tearing anything apart.',
    content: `Squeaky floors are caused by one thing: wood rubbing against wood (or against a nail or screw). When the subfloor separates slightly from the joist below it — due to drying, shrinkage, or seasonal movement — stepping on that spot flexes the subfloor and creates friction noise.

## Two Approaches

If you can access the underside of the floor (from a basement or crawl space), fixes are easy and invisible. If the ceiling below is finished, you'll need to work from above through the flooring surface — still doable, but requires more care to keep the repair hidden.

## Quick Diagnosis

Walk slowly across the squeaky area and have someone below identify the exact spot. Mark it with painter's tape from below. Most squeaks are directly over or near a joist.`,
    category: 'flooring',
    difficulty: 'beginner',
    estimatedTime: '30-60 minutes',
    estimatedCost: {
      low: 5,
      mid: 15,
      high: 30,
      diyVsPro: 'A handyman charges $100-$200 to fix squeaky floors. DIY repair costs $5-$30 for screws and shims.',
    },
    tools: [
      'Drill/driver',
      'Stud finder',
      'Hammer',
      'Utility knife',
      'Nail set',
      'Wood shims',
    ],
    materials: [
      'Wood screws (1-1/4" or 2" depending on method)',
      'Squeeeeek No More kit (for carpeted floors)',
      'Wood shims',
      'Construction adhesive',
      'Wood filler (for hardwood floors)',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Locate the Exact Squeak',
        description:
          'Walk slowly across the squeaky area, shifting your weight from foot to foot. Mark the squeaky spots with painter\'s tape. If you have access from below (basement or crawl space), have someone walk upstairs while you watch and listen from below. You\'ll likely see the subfloor flex slightly at the squeak point. Mark the spot from below with tape or a pencil.',
        imagePrompt:
          'Person walking on a hardwood floor, stepping on a squeaky spot marked with blue painter\'s tape, floor flexing slightly, diagnostic process',
        proTip:
          'Use a stud finder to locate the joists. Most squeaks happen where the subfloor has separated from a joist — that\'s where your repair needs to go.',
      },
      {
        stepNumber: 2,
        title: 'Fix from Below: Shim the Gap',
        description:
          'If you can see daylight between the subfloor and the joist from below, tap a thin wood shim coated with construction adhesive into the gap. Don\'t force the shim in aggressively — you just want to fill the gap, not push the floor up and create a bump. The adhesive keeps the shim in place permanently. Have someone stand on the squeak spot above to verify the noise is gone.',
        imagePrompt:
          'Hand tapping a wood shim with construction adhesive between a subfloor and a joist from below, gap being filled, basement ceiling view',
        proTip:
          'Apply a bead of construction adhesive along the joist-to-subfloor seam for 2-3 feet in each direction from the squeak. This prevents new squeaks from developing nearby.',
      },
      {
        stepNumber: 3,
        title: 'Fix from Below: Screw Through the Subfloor',
        description:
          'For larger gaps or persistent squeaks, drive a short screw from below up through the subfloor to pull it tight against the joist. Drill a pilot hole first. Use a screw that\'s long enough to bite into the subfloor (3/4 inch thick) but NOT long enough to poke through the finished floor above. For 3/4-inch subfloor over hardwood, use a 1-inch screw. Have someone stand on the spot above while you drive the screw.',
        imagePrompt:
          'Drill driving a screw from below through the subfloor into the joist, pulling the subfloor tight, close-up underneath view, squeak elimination',
        warning:
          'Measure carefully. A screw that\'s too long will puncture through the finished floor above, causing damage that\'s expensive to repair.',
      },
      {
        stepNumber: 4,
        title: 'Fix from Above: Drive Screws Through Carpet',
        description:
          'If you can\'t access below, use a Squeeeeek No More kit (or Counter Snap for hardwood). For carpet: place the kit\'s alignment tool over the joist location, drive the scored breakaway screw through the carpet and subfloor into the joist, then snap off the screw head below the carpet surface by rocking the tool back and forth. The screw pulls the subfloor tight and the broken-off head is hidden under the carpet.',
        imagePrompt:
          'Squeeeeek No More kit being used on a carpeted floor: alignment tool positioned, screw being driven, then screw head being snapped off below carpet level, three-step process',
        proTip:
          'The Squeeeeek No More kit is specifically designed for this job. The scored screws break off cleanly at exactly the right depth every time.',
      },
      {
        stepNumber: 5,
        title: 'Fix from Above: Drive Screws Through Hardwood',
        description:
          'For hardwood floors, drill a 1/16-inch pilot hole through the floor into the joist below. Drive a trim-head screw (very small head) into the pilot hole to pull the floor tight against the subfloor. Countersink the screw head slightly below the surface with a nail set. Fill the tiny hole with color-matched wood filler and wipe smooth. The repair is virtually invisible once the filler dries.',
        imagePrompt:
          'Drill making a pilot hole in a hardwood floor, then a trim-head screw being driven in, then the hole being filled with wood filler, three-step close-up on wood floor',
      },
      {
        stepNumber: 6,
        title: 'Test and Address Remaining Squeaks',
        description:
          'Walk across the repaired area multiple times with normal foot pressure. If any squeaks remain, they\'re likely at a different joist or between joists. Repeat the shimming or screwing process for each remaining squeak point. Check again in a few days — temperature and humidity changes can reveal squeaks that weren\'t active during your initial repair.',
        imagePrompt:
          'Person walking confidently across a previously squeaky floor, now silent, satisfied expression, finished repair with no visible signs of work',
      },
    ],
    tips: [
      'Squeaks are usually worse in winter when dry air causes wood to shrink and gaps to open up.',
      'Baby powder or talcum powder sprinkled between hardwood floorboards provides a quick (temporary) fix by lubricating the rubbing surfaces.',
      'If a squeak is between joists (not over one), add a block of wood between the joists, glued and screwed to the subfloor from below.',
      'For widespread squeaking across an entire floor, the subfloor may need to be re-secured to all joists with construction adhesive and screws.',
    ],
    warnings: [
      'When driving screws from below, measure the total floor thickness (subfloor + finished floor) and use screws at least 1/4 inch shorter to avoid punching through.',
      'If your home has radiant floor heating, do NOT drive screws without first identifying the tubing layout. A punctured radiant tube is an expensive repair.',
      'Avoid using nails to fix squeaks. Nails work loose over time and the squeak returns. Screws hold permanently because of their threads.',
    ],
    affiliateProducts: [
      {
        id: 'prod-squeeeek-no-more',
        name: 'Squeeeeek No More Floor Repair Kit (Counter Snap)',
        description:
          'Includes alignment/depth control tool and 50 scored breakaway screws. Works through carpet to pull subfloor tight to joists. Snaps off screw head below surface.',
        price: 23.99,
        affiliateUrl: 'https://www.amazon.com/dp/B00DQUPNW0',
        retailer: 'amazon',
        imageUrl: '/products/squeeeeek-no-more.jpg',
        rating: 4.3,
        reviewCount: 7800,
        badge: 'our-pick',
      },
      {
        id: 'prod-counter-snap-hardwood',
        name: 'Counter Snap Hardwood Floor Squeak Repair Kit',
        description:
          'Same concept as Squeeeeek No More but designed for hardwood and vinyl floors. Trim-head screws countersink below the surface for an invisible repair.',
        price: 21.99,
        affiliateUrl: 'https://www.amazon.com/dp/B001GPSS0Y',
        retailer: 'amazon',
        imageUrl: '/products/counter-snap-hardwood.jpg',
        rating: 4.2,
        reviewCount: 3600,
      },
      {
        id: 'prod-loctite-pl400',
        name: 'Loctite PL 400 Subfloor & Deck Adhesive (10 oz)',
        description:
          'Construction adhesive specifically formulated for subfloor-to-joist bonding. Stays flexible after curing to absorb seasonal wood movement. Prevents future squeaks.',
        price: 5.98,
        affiliateUrl: 'https://www.homedepot.com/p/Loctite-PL400/202020727',
        retailer: 'homedepot',
        imageUrl: '/products/loctite-pl400.jpg',
        rating: 4.6,
        reviewCount: 4100,
        badge: 'best-value',
      },
    ],
    featuredImage: '/guides/fix-squeaky-floors-hero.jpg',
    publishedAt: '2026-03-06T09:00:00Z',
    updatedAt: '2026-03-19T17:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Fix Squeaky Floors (From Above or Below) | Repair & Refinish',
      description:
        'Stop floor squeaks for good. Step-by-step fixes from below (shims, screws) and above (through carpet or hardwood) without tearing up your floor.',
      keywords: [
        'fix squeaky floors',
        'floor squeaks',
        'stop floor creaking',
        'squeaky floor repair',
        'squeeeeek no more',
        'floor squeak from above',
        'subfloor squeak fix',
        'creaky floorboards',
      ],
      ogImage: '/guides/fix-squeaky-floors-og.jpg',
    },
    faqs: [
      {
        question: 'Why do my floors squeak more in winter?',
        answer:
          'Winter air is drier, which causes wood to shrink. When the subfloor shrinks, it pulls away from the joists and nails, creating gaps. Stepping on these gaps flexes the wood and creates the squeak. A humidifier set to 35-45% relative humidity helps reduce winter squeaking.',
      },
      {
        question: 'Can I fix squeaky floors under carpet without pulling up the carpet?',
        answer:
          'Yes. The Squeeeeek No More kit drives scored screws through the carpet into the joist, then snaps the screw head off below carpet level. The carpet fibers close over the spot and the repair is invisible.',
      },
      {
        question: 'Is it normal for new floors to squeak?',
        answer:
          'Some squeaking in the first year is common as lumber dries and settles. If squeaking is limited to a few spots, fix them with screws or shims. If the entire floor squeaks, the builder may not have used enough construction adhesive or screws on the subfloor — a valid warranty claim on new construction.',
      },
    ],
    relatedGuides: ['refinish-hardwood-floors', 'install-vinyl-plank-flooring', 'repair-deck-board'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide: Repair Cracked Tile
  // ---------------------------------------------------------------------------
  {
    id: 'guide-repair-cracked-tile',
    slug: 'repair-cracked-tile',
    title: 'How to Repair Cracked Tile',
    excerpt:
      'A cracked floor or wall tile is unsightly and lets moisture seep underneath. Learn how to remove and replace a single tile without disturbing the surrounding ones — a 45-60 minute fix.',
    content: `Cracked tiles happen — a dropped pan, settling foundation, or just age can crack a single tile. The good news is that replacing one tile is a focused, manageable repair. The key is removing the damaged tile without cracking the neighbors.

## Why Tiles Crack

The most common causes are impact (dropping something heavy), a void in the thinset underneath (the tile flexes when stepped on until it cracks), or foundation settling that puts stress on the tile. If multiple tiles are cracking in a pattern, you may have a structural issue — address that before replacing tiles.

## Matching Replacement Tile

Bring a piece of the cracked tile to the store for color matching. If you can't find an exact match, check if the builder or previous owner left spare tiles in the garage or basement — it's common practice to leave a partial box. As a last resort, replace the cracked tile with a decorative accent tile.`,
    category: 'flooring',
    difficulty: 'beginner',
    estimatedTime: '45-60 minutes',
    estimatedCost: {
      low: 10,
      mid: 25,
      high: 50,
      diyVsPro: 'A tile installer charges $150-$300 to replace a single tile. DIY materials cost $10-$50.',
    },
    tools: [
      'Grout removal tool or oscillating multi-tool',
      'Cold chisel and hammer',
      'Putty knife or scraper',
      'Notched trowel (1/4" V-notch)',
      'Grout float',
      'Sponge',
      'Safety glasses',
      'Work gloves',
    ],
    materials: [
      'Replacement tile',
      'Thinset mortar (pre-mixed for small jobs)',
      'Grout (matching color)',
      'Tile spacers',
      'Masking tape',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Remove the Grout Around the Cracked Tile',
        description:
          'Using a grout removal tool or an oscillating multi-tool with a grout blade, carefully cut out all the grout around the damaged tile. Work slowly along each edge. Removing the grout first isolates the cracked tile from its neighbors so they won\'t crack when you chisel out the damaged one. Remove grout to the full depth of the joint.',
        imagePrompt:
          'Oscillating multi-tool with grout blade removing grout around a cracked floor tile, careful work along each edge, grout dust being cleared',
        proTip:
          'Apply painter\'s tape on the adjacent tiles close to the grout line. This protects their glazed edges from accidental scratches during grout removal.',
      },
      {
        stepNumber: 2,
        title: 'Break Out the Cracked Tile',
        description:
          'Place a cold chisel in the center of the cracked tile and tap with a hammer to break it into smaller pieces. Work from the center outward toward the edges. Pry out the pieces with the chisel, angling away from adjacent tiles. Be especially careful at the edges — if the chisel slips toward a neighboring tile, you\'ll crack that one too. Wear safety glasses — ceramic shards are sharp.',
        imagePrompt:
          'Cold chisel breaking a cracked tile from the center outward, pieces being pried out, adjacent tiles protected with tape, safety glasses worn',
        warning:
          'Wear safety glasses and work gloves. Broken ceramic tile creates razor-sharp edges and flying fragments.',
      },
      {
        stepNumber: 3,
        title: 'Remove Old Thinset and Clean the Substrate',
        description:
          'Scrape off all the old thinset mortar from the substrate using a cold chisel and hammer or a floor scraper. The surface needs to be as flat and clean as possible for the new tile to sit level with its neighbors. Vacuum all debris from the area. Check that the substrate is solid — if it\'s damaged or soft, repair it with a patch of cement board before proceeding.',
        imagePrompt:
          'Chisel scraping old dried thinset from the floor substrate, clean flat surface emerging, vacuum removing debris, prepared surface',
      },
      {
        stepNumber: 4,
        title: 'Dry-Fit the Replacement Tile',
        description:
          'Place the new tile in the opening without mortar. Check that it sits level with the surrounding tiles and that the grout joints are even on all sides. Use tile spacers to verify consistent joint width. If the tile sits too high, scrape more thinset from the substrate. If it sits too low, you\'ll use slightly more thinset. The dry-fit should look perfect before you commit to mortar.',
        imagePrompt:
          'New tile being placed in the opening for a dry fit, checking level with adjacent tiles, spacers ensuring even grout joints, test fitting',
        proTip:
          'Hold a straightedge across the new tile and its neighbors. The surface should be perfectly flush. Even a 1/16-inch difference in height creates a trip hazard and an obvious repair.',
      },
      {
        stepNumber: 5,
        title: 'Set the Tile With Thinset',
        description:
          'Apply thinset mortar to the back of the replacement tile (called "back-buttering") using a notched trowel. Spread a flat layer first, then comb it with the notched edge to create ridges. Press the tile firmly into position, twisting slightly to collapse the ridges and ensure full contact. Use spacers to maintain even joints. Check level again and adjust within the first few minutes before the thinset begins to set.',
        imagePrompt:
          'Thinset being back-buttered onto a replacement tile with a notched trowel, tile being pressed into position, spacers inserted, level check',
      },
      {
        stepNumber: 6,
        title: 'Let the Thinset Cure',
        description:
          'Do not walk on the tile or grout the joints until the thinset has cured. Most thinset takes 24 hours to achieve sufficient strength. Keep the area dry during this time. Place a piece of cardboard or plywood over the tile to prevent accidental stepping if it\'s in a high-traffic area.',
        imagePrompt:
          'Newly set tile with spacers in place, cardboard cover protecting it from foot traffic, 24-hour cure time indicator',
      },
      {
        stepNumber: 7,
        title: 'Grout and Clean',
        description:
          'After 24 hours, remove the spacers. Mix grout to match the existing color (or use pre-mixed grout). Press grout into the joints with a rubber grout float at a 45-degree diagonal angle. Scrape off excess at a steep angle. Wait 15-20 minutes, then wipe the haze with a damp sponge using diagonal strokes. Buff any remaining haze with a dry cloth after the grout firms up. The repair should be virtually invisible.',
        imagePrompt:
          'Grout float pressing matching grout into joints around the replacement tile, then sponge cleaning excess, seamless repair result, invisible fix',
        proTip:
          'Buy grout that matches as closely as possible. If the existing grout has yellowed with age, mix a tiny amount of the old grout color into the new batch to get a closer match.',
      },
    ],
    tips: [
      'Keep leftover tiles from any tile installation. Store them in the garage for future repairs. Matching discontinued tile years later is often impossible.',
      'For hairline cracks that are cosmetic only, you can fill them with color-matched epoxy rather than replacing the entire tile.',
      'If you can\'t match the tile, replace it with a decorative accent tile. One intentionally different tile looks like a design choice, not a repair.',
      'Practice your chisel technique on a spare tile first. The key is starting at the center and working outward.',
    ],
    warnings: [
      'Wear safety glasses and heavy gloves when breaking out tile. Ceramic shards are razor-sharp.',
      'Be extremely careful not to crack adjacent tiles when chiseling. Always angle the chisel away from neighboring tiles.',
      'If multiple tiles are cracking in a pattern, have a professional inspect for structural settling or subfloor failure before replacing tiles.',
    ],
    affiliateProducts: [
      {
        id: 'prod-custom-thinset',
        name: 'Custom Building Products VersaBond Thinset Mortar (25 lb)',
        description:
          'Professional-grade thinset for floor and wall tile. Interior and exterior rated. Excellent bond strength. Mix with water — sets in 24 hours. One bag covers ~75 sq ft.',
        price: 11.98,
        affiliateUrl: 'https://www.homedepot.com/p/Custom-VersaBond/202327137',
        retailer: 'homedepot',
        imageUrl: '/products/custom-versabond.jpg',
        rating: 4.5,
        reviewCount: 7200,
        badge: 'Best Value',
      },
      {
        id: 'prod-dremel-grout-tile',
        name: 'Dremel Multi-Max Carbide Grout Removal Blade',
        description:
          'Carbide-grit oscillating blade for precise grout removal. Fits most oscillating tools. Removes grout without damaging adjacent tiles. Lasts through multiple repairs.',
        price: 12.97,
        affiliateUrl: 'https://www.amazon.com/dp/B00D7SA35Y',
        retailer: 'amazon',
        imageUrl: '/products/dremel-grout-blade.jpg',
        rating: 4.4,
        reviewCount: 6200,
      },
      {
        id: 'prod-mapei-grout',
        name: 'Mapei Keracolor U Unsanded Grout (10 lb)',
        description:
          'Premium unsanded grout for joints up to 1/8 inch. Polymer-modified for crack resistance. Available in 40+ colors for matching. Consistent color without efflorescence.',
        price: 14.28,
        affiliateUrl: 'https://www.homedepot.com/p/Mapei-Keracolor/100090479',
        retailer: 'homedepot',
        imageUrl: '/products/mapei-keracolor.jpg',
        rating: 4.5,
        reviewCount: 4800,
      },
    ],
    featuredImage: '/images/guides/repair-cracked-tile.jpg',
    publishedAt: '2025-10-05T09:00:00Z',
    updatedAt: '2026-01-20T14:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Repair a Cracked Tile (Single Tile Replacement) | Repair & Refinish',
      description:
        'Replace a single cracked floor or wall tile in 45-60 minutes. Step-by-step guide for grout removal, tile extraction, thinset application, and seamless repair.',
      keywords: [
        'repair cracked tile',
        'replace broken tile',
        'fix cracked floor tile',
        'single tile replacement',
        'cracked tile repair',
        'replace one tile',
        'tile repair DIY',
      ],
    },
    faqs: [
      {
        question: 'Can I repair a cracked tile without replacing it?',
        answer:
          'For hairline cracks, yes — fill the crack with a color-matched tile repair epoxy or super glue, then wipe smooth. For larger cracks or chips, replacement is the better fix. Filled large cracks remain visible and can worsen over time.',
      },
      {
        question: 'Why did my tile crack?',
        answer:
          'The most common causes are impact (dropped heavy object), a void in the thinset (tile flexes when stepped on), or substrate movement (foundation settling). If multiple tiles are cracking without impact, inspect the subfloor for structural issues.',
      },
      {
        question: 'How do I match grout color when regrouting a repair?',
        answer:
          'Buy grout in the closest color match. Note that new grout often looks different from aged grout. After the new grout cures, it will darken slightly. If the color difference is noticeable, consider regrouting the entire section for a uniform look.',
      },
    ],
    relatedGuides: ['install-vinyl-plank-flooring', 'regrout-tile-shower', 'refinish-hardwood-floors'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide: Install Peel-and-Stick Floor Tiles
  // ---------------------------------------------------------------------------
  {
    id: 'guide-install-peel-and-stick-floor-tiles',
    slug: 'install-peel-and-stick-floor-tiles',
    title: 'How to Install Peel-and-Stick Floor Tiles',
    excerpt:
      'Update a bathroom, laundry room, or entryway floor in a single afternoon with peel-and-stick vinyl tiles. This beginner-friendly project requires no special tools, no mortar, and no mess.',
    content: `Peel-and-stick vinyl tiles are the easiest and most affordable flooring option for a quick transformation. Modern versions look remarkably like real stone or wood, and they're waterproof — perfect for bathrooms, laundry rooms, and kitchens.

## Where They Work Best

Peel-and-stick tiles perform best on smooth, flat, clean substrates: existing vinyl, plywood, concrete, or smooth-finished underlayment. They do NOT adhere well to textured surfaces, carpet, or waxed floors. The subfloor must be completely flat — bumps telegraph through and edges lift.

## Quality Matters

Budget tiles ($0.50/sq ft) are thin, shift over time, and peel at the edges. Mid-range tiles ($1-$2/sq ft) like FloorPops or Achim are thicker, more realistic, and stay put much longer. Rigid-core peel-and-stick tiles ($2-$4/sq ft) are the best quality and last 10+ years.`,
    category: 'flooring',
    difficulty: 'beginner',
    estimatedTime: '2-4 hours',
    estimatedCost: {
      low: 50,
      mid: 120,
      high: 200,
      diyVsPro: 'Professional vinyl tile installation costs $3-$6 per sq ft. Peel-and-stick DIY costs $0.50-$4 per sq ft with no labor cost.',
    },
    tools: [
      'Utility knife with fresh blades',
      'T-square or straightedge',
      'Tape measure',
      'Pencil',
      'Chalk line (optional)',
      'J-roller or rolling pin',
    ],
    materials: [
      'Peel-and-stick vinyl floor tiles (order 10% extra)',
      'Floor prep cleaner or TSP',
      'Floor leveling compound (if needed)',
      'Transition strips (for doorways)',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Prepare the Subfloor',
        description:
          'The subfloor must be clean, dry, smooth, and flat. Sweep, vacuum, and mop the floor with a degreaser. Remove any old wax with a commercial wax stripper. Fill low spots with floor leveling compound and sand down high spots. The adhesive on peel-and-stick tiles won\'t bond to dirty, dusty, or greasy surfaces. Let the floor dry completely before starting — any moisture prevents adhesion.',
        imagePrompt:
          'Floor being cleaned and degreased with a mop, then checked for flatness with a straightedge, low spots marked for filling, smooth clean surface',
        proTip:
          'The #1 reason peel-and-stick tiles fail is a dirty subfloor. Scrub it like you\'re prepping for surgery. Every speck of dust weakens the adhesive bond.',
      },
      {
        stepNumber: 2,
        title: 'Plan Your Layout',
        description:
          'Find the center of the room by measuring and marking the midpoint of two opposite walls. Snap a chalk line connecting them. Dry-lay tiles from the center outward to see how the pattern works. If the last row against a wall would be less than half a tile, shift the center line by half a tile. Ensure the layout looks balanced with equal-width cuts on opposite sides.',
        imagePrompt:
          'Chalk line snapped at the center of a room, peel-and-stick tiles dry-laid from center outward, checking layout symmetry, planning the pattern',
      },
      {
        stepNumber: 3,
        title: 'Acclimate the Tiles',
        description:
          'Stack the tile boxes in the room for 48 hours before installation. The tiles need to adjust to the room\'s temperature. Also, ensure the room is at least 65°F during installation and for 48 hours afterward — the adhesive bonds poorly in cold conditions. If working in a basement, use a space heater to warm the room to at least 65°F.',
        imagePrompt:
          'Boxes of peel-and-stick tiles stacked in the room being tiled, thermometer showing room temperature above 65°F, 48-hour acclimation period',
      },
      {
        stepNumber: 4,
        title: 'Start at the Center and Work Outward',
        description:
          'Peel the backing off the first tile and align one edge precisely with the chalk line at the center of the room. Press it down firmly. Place the next tile butted tightly against the first, aligning edges precisely. Continue laying tiles outward from the center in a quadrant pattern. Press each tile firmly as you go — use a J-roller or rolling pin to ensure full adhesive contact.',
        imagePrompt:
          'First peel-and-stick tile being placed at the center chalk line, subsequent tiles being butted tightly together, J-roller pressing tiles firmly, installation in progress',
        proTip:
          'Peel only about 6 inches of backing at first, align the tile precisely, then slowly peel the rest as you press down. This prevents the tile from sticking crooked.',
      },
      {
        stepNumber: 5,
        title: 'Cut Tiles for Edges and Obstacles',
        description:
          'For border tiles, place a full tile exactly on top of the last full tile in the row. Place another tile on top with its edge against the wall. Trace the exposed edge of the middle tile — this marks your cut line, accounting for the wall gap. Cut along the line with a utility knife and straightedge: score the face deeply, then snap the tile. For pipes and obstacles, make a cardboard template and transfer to the tile.',
        imagePrompt:
          'Border tile cutting method: stacking tiles to mark the cut line, utility knife scoring along a straightedge, tile snapping cleanly, edge tile being placed',
        proTip:
          'Warm your utility knife blade with a hair dryer for 10 seconds. Warm vinyl cuts much cleaner than cold vinyl, with fewer ragged edges.',
      },
      {
        stepNumber: 6,
        title: 'Roll the Entire Floor and Add Transitions',
        description:
          'After laying all tiles, go over the entire floor with a J-roller or heavy rolling pin, pressing firmly on every tile to ensure complete adhesive contact. Pay special attention to edges and seams. Install transition strips at doorways where the new tile meets different flooring. Wait 24 hours before moving heavy furniture onto the floor. The adhesive reaches full bond strength in about 72 hours.',
        imagePrompt:
          'J-roller pressing across the completed peel-and-stick floor, ensuring adhesive bond, transition strip at doorway, finished professional-looking floor',
      },
    ],
    tips: [
      'Buy 10% more tiles than your room\'s square footage. Cuts, mistakes, and future repairs all require extras.',
      'Mix tiles from multiple boxes as you install. This distributes any color or pattern variations evenly across the floor.',
      'A sharp utility knife blade is critical. Change the blade every 10-15 cuts. A dull blade tears rather than cuts cleanly.',
      'If a tile goes down crooked, heat it with a hair dryer for 30 seconds to soften the adhesive, then peel it up and reposition.',
    ],
    warnings: [
      'The subfloor must be completely clean and dry. Dust, wax, and moisture all prevent adhesion and cause tiles to lift.',
      'Install only in rooms at 65°F or warmer. Cold prevents the adhesive from bonding. Avoid installing in unheated garages or during winter in cold rooms.',
      'Peel-and-stick tiles over textured floors (like embossed sheet vinyl) will telegraph the texture and eventually lift at the embossing points.',
    ],
    affiliateProducts: [
      {
        id: 'prod-floorpops-marble',
        name: 'FloorPops Peel & Stick Floor Tiles - Comet (10-pack)',
        description:
          'Realistic marble-look vinyl tiles, 12x12 inches. Thick and durable. Self-adhesive with strong bond. Water-resistant. Great for bathrooms and entryways.',
        price: 17.98,
        affiliateUrl: 'https://www.homedepot.com/p/FloorPops-Comet/313456789',
        retailer: 'homedepot',
        imageUrl: '/products/floorpops-comet.jpg',
        rating: 4.3,
        reviewCount: 5600,
        badge: 'Best Seller',
      },
      {
        id: 'prod-achim-nexus',
        name: 'Achim Nexus Peel & Stick Vinyl Floor Tiles (20-pack)',
        description:
          'Budget-friendly 12x12 inch vinyl tiles. Multiple patterns available. Self-adhesive and easy to cut. One box covers 20 sq ft. Perfect for small rooms.',
        price: 14.99,
        affiliateUrl: 'https://www.amazon.com/dp/B000LNRSMA',
        retailer: 'amazon',
        imageUrl: '/products/achim-nexus.jpg',
        rating: 4.2,
        reviewCount: 12400,
        badge: 'Budget Pick',
      },
      {
        id: 'prod-j-roller',
        name: 'QEP 75010 Seam Roller (3-inch J-Roller)',
        description:
          'Heavy steel roller for pressing peel-and-stick tiles, sheet vinyl, and laminate edges. Ensures full adhesive contact. Comfortable rubber grip. Essential installation tool.',
        price: 9.98,
        affiliateUrl: 'https://www.homedepot.com/p/QEP-Seam-Roller/202034318',
        retailer: 'homedepot',
        imageUrl: '/products/qep-j-roller.jpg',
        rating: 4.6,
        reviewCount: 4200,
      },
    ],
    featuredImage: '/images/guides/install-peel-and-stick-floor-tiles.jpg',
    publishedAt: '2025-09-12T09:00:00Z',
    updatedAt: '2026-01-25T14:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Install Peel-and-Stick Floor Tiles (Easy DIY Guide) | Repair & Refinish',
      description:
        'Install peel-and-stick vinyl floor tiles in 2-4 hours. Beginner-friendly guide covering subfloor prep, layout, cutting, and installation for a quick floor transformation.',
      keywords: [
        'peel and stick floor tiles',
        'vinyl peel and stick',
        'install peel and stick',
        'self adhesive floor tiles',
        'peel and stick vinyl',
        'easy floor tiles DIY',
        'bathroom floor tiles',
      ],
    },
    faqs: [
      {
        question: 'How long do peel-and-stick floor tiles last?',
        answer:
          'Budget tiles last 3-5 years. Mid-range tiles last 5-10 years. Premium rigid-core peel-and-stick can last 10-15 years. Lifespan depends heavily on subfloor prep, traffic level, and quality of the tile. Proper installation on a clean subfloor is the biggest factor.',
      },
      {
        question: 'Can I put peel-and-stick tiles over existing tile?',
        answer:
          'Yes, if the existing tile is flat, firmly adhered, and has shallow grout lines (less than 1/16 inch). Deep grout lines telegraph through and cause the peel-and-stick tiles to crack at the grout joints. Fill deep grout lines with floor leveling compound first.',
      },
      {
        question: 'Can I use peel-and-stick tiles in a shower?',
        answer:
          'No. Peel-and-stick tiles are water-resistant but not waterproof when submerged or exposed to standing water. They work well in bathrooms on the floor (water splashes are fine) but not inside a shower or tub surround.',
      },
    ],
    relatedGuides: ['install-vinyl-plank-flooring', 'repair-cracked-tile', 'fix-squeaky-floors'],
    status: 'published',
  },
];

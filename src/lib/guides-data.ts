import type { Guide } from '@/types';
import { defaultAuthor } from './site-config';
import { plumbingGuides } from './guides/plumbing';
import { electricalGuides } from './guides/electrical';
import { paintingWallsGuides } from './guides/painting-walls';
import { flooringGuides } from './guides/flooring';
import { kitchenBathGuides } from './guides/kitchen-bath';
import { doorsWindowsGuides } from './guides/doors-windows';
import { hvacClimateGuides } from './guides/hvac-climate';
import { outdoorLandscapingGuides } from './guides/outdoor-landscaping';
import { applianceRepairGuides } from './guides/appliance-repair';
import { furnitureDecorGuides } from './guides/furniture-decor';

// =============================================================================
// Repair & Refinish - Guide Data
// =============================================================================
// Static guide data. Each guide is a complete, self-contained repair tutorial
// with steps, tools, materials, cost estimates, and affiliate product links.
//
// Guides are organized into per-category files under ./guides/ and combined here.
// Total: 50 guides across 10 categories.
// =============================================================================

export const guides: Guide[] = [
  // ---------------------------------------------------------------------------
  // Guide 1: Fix a Running Toilet (Plumbing)
  // ---------------------------------------------------------------------------
  {
    id: 'guide-fix-running-toilet',
    slug: 'fix-running-toilet',
    title: 'How to Fix a Running Toilet',
    excerpt:
      'Stop that constant running sound and save up to $200 per year on your water bill. This beginner-friendly guide covers the three most common causes and how to fix each one in under 30 minutes.',
    content: `A running toilet is one of the most common — and most annoying — household plumbing problems. The good news? It's also one of the easiest to fix yourself. Most running toilets are caused by one of three parts: a worn-out flapper, a faulty fill valve, or an improperly adjusted float. In this guide, we'll walk through diagnosing the problem and replacing the offending part.

## Why Your Toilet Won't Stop Running

When you flush, the flapper lifts to let water flow from the tank into the bowl. Once the tank empties, the flapper seals shut and the fill valve refills the tank. If any part of this cycle fails, water runs continuously — wasting up to 200 gallons per day.

## Before You Start

Turn off the water supply valve (the oval knob on the wall behind the toilet) and flush to empty the tank. Lay down an old towel to catch drips. That's it — no special prep needed.`,
    category: 'plumbing',
    difficulty: 'beginner',
    estimatedTime: '20-30 minutes',
    estimatedCost: {
      low: 5,
      mid: 15,
      high: 30,
      diyVsPro: 'A plumber typically charges $150-$300 for this repair. DIY cost is $5-$30 for parts.',
    },
    tools: [
      'Adjustable wrench',
      'Tongue-and-groove pliers',
      'Sponge or towel',
      'Bucket',
      'Rubber gloves',
    ],
    materials: [
      'Universal toilet flapper',
      'Fill valve replacement kit (if needed)',
      'Toilet tank repair kit (optional all-in-one)',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Diagnose the Problem',
        description:
          'Remove the tank lid and set it aside on a towel (porcelain chips easily). Flush the toilet and watch what happens. If water keeps flowing after the tank fills, note whether it\'s leaking past the flapper into the bowl (flapper issue), overflowing into the overflow tube (float issue), or the fill valve never shuts off (fill valve issue).',
        imagePrompt:
          'Inside of a toilet tank with lid removed, arrows pointing to flapper, fill valve, and overflow tube, clean bright bathroom, educational diagram style',
        proTip:
          'Add a few drops of food coloring to the tank water and wait 15 minutes without flushing. If color appears in the bowl, your flapper is leaking.',
      },
      {
        stepNumber: 2,
        title: 'Shut Off the Water Supply',
        description:
          'Locate the shut-off valve on the wall behind and below the toilet. Turn it clockwise until it stops. Flush the toilet to drain the tank. Use a sponge to soak up any remaining water in the bottom of the tank.',
        imagePrompt:
          'Hand turning a chrome shut-off valve behind a white toilet, close-up shot, bathroom setting',
      },
      {
        stepNumber: 3,
        title: 'Replace the Flapper (Most Common Fix)',
        description:
          'Unhook the old flapper from the overflow tube ears — it usually just unclips. Disconnect the chain from the flush lever. Take the old flapper to the hardware store to match the size, or use a universal flapper. Attach the new flapper to the overflow tube ears, reconnect the chain to the flush lever with about ½ inch of slack, and trim any excess chain.',
        imagePrompt:
          'Hands replacing a red rubber toilet flapper inside a tank, showing the chain connection to the flush handle, step-by-step repair',
        proTip:
          'Universal flappers fit about 90% of toilets. If yours has an unusual flush valve, bring the old flapper to the store for an exact match.',
        warning:
          'Some newer toilets use canister-style flush valves instead of flappers. Check your model before buying parts.',
      },
      {
        stepNumber: 4,
        title: 'Adjust the Float Level (If Water Overflows)',
        description:
          'If water is flowing into the overflow tube, your float is set too high. For a ball float, bend the metal rod slightly downward or turn the adjustment screw. For a cup float (cylinder on the fill valve shaft), squeeze the clip and slide it down about half an inch. The water level should be about 1 inch below the top of the overflow tube.',
        imagePrompt:
          'Inside toilet tank showing water level marks, hand adjusting a cup-style float on the fill valve, clear water, measurement markings',
        proTip:
          'Most overflow tubes have a water level line marked on them. Aim for that mark.',
      },
      {
        stepNumber: 5,
        title: 'Replace the Fill Valve (If Still Running)',
        description:
          'If the flapper and float are fine but water still runs, replace the fill valve. Disconnect the water supply line from the bottom of the tank (have a bucket ready). Unscrew the lock nut holding the fill valve, remove the old valve, and insert the new one. Hand-tighten the lock nut, reconnect the supply line, and attach the refill tube to the overflow pipe.',
        imagePrompt:
          'Hands installing a new white Fluidmaster fill valve into a toilet tank, bottom-up view showing lock nut, supply line connection',
        warning:
          'Do not overtighten the lock nut — you can crack the porcelain tank. Hand-tight plus a quarter turn with pliers is sufficient.',
      },
      {
        stepNumber: 6,
        title: 'Test and Adjust',
        description:
          'Turn the water supply back on slowly and let the tank fill. Watch for leaks at the supply connection and around the base of the fill valve. Flush two or three times to confirm the flapper seals properly and water stops at the correct level. Listen for silence — a properly working toilet is quiet between flushes.',
        imagePrompt:
          'Toilet with tank lid on, person listening with satisfied expression, water supply valve open, clean bathroom',
        proTip:
          'If the new flapper still leaks, the flush valve seat may be corroded. You can smooth it with an emery cloth or replace the entire flush valve.',
      },
    ],
    tips: [
      'Buy a complete toilet repair kit for $15-$20 — it includes a flapper, fill valve, and all hardware, covering every possible cause.',
      'Take a photo of your toilet internals before you start so you remember how everything connects.',
      'Write your toilet model number down (stamped inside the tank or on the bowl) for exact part matches.',
      'Check the flapper chain length — too tight prevents sealing, too loose prevents a full flush.',
    ],
    warnings: [
      'Always shut off the water supply before working inside the tank.',
      'Porcelain tank lids are heavy and break easily — set them on a towel on the floor, not on the toilet seat.',
      'If you see cracks in the tank or bowl, do not attempt repair — replace the toilet.',
      'If water is leaking from the base of the toilet (not the tank), the wax ring needs replacement, which is a separate project.',
    ],
    affiliateProducts: [
      {
        id: 'prod-fluidmaster-400a',
        name: 'Fluidmaster 400A Universal Fill Valve',
        description:
          'The industry standard fill valve. Fits most toilets, easy to install, and comes with a refill tube and mounting hardware.',
        price: 8.98,
        affiliateUrl: 'https://www.amazon.com/dp/B000JFI0GQ',
        retailer: 'amazon',
        imageUrl: '/products/fluidmaster-400a.jpg',
        rating: 4.5,
        reviewCount: 28400,
        badge: 'Best Seller',
      },
      {
        id: 'prod-fluidmaster-502',
        name: 'Fluidmaster 502 Universal Flapper',
        description:
          'Adjustable universal flapper that fits most 2-inch flush valves. Features a built-in dial to control flush volume.',
        price: 5.98,
        affiliateUrl: 'https://www.amazon.com/dp/B000BQOVWO',
        retailer: 'amazon',
        imageUrl: '/products/fluidmaster-502.jpg',
        rating: 4.3,
        reviewCount: 15200,
      },
      {
        id: 'prod-fluidmaster-400ak',
        name: 'Fluidmaster 400AK Complete Toilet Repair Kit',
        description:
          'All-in-one kit with fill valve, flapper, flush valve seal, and tank-to-bowl hardware. Everything you need for a full toilet overhaul.',
        price: 18.48,
        affiliateUrl: 'https://www.homedepot.com/p/Fluidmaster-400AK/100554467',
        retailer: 'homedepot',
        imageUrl: '/products/fluidmaster-400ak.jpg',
        rating: 4.4,
        reviewCount: 9800,
        badge: 'Best Value',
      },
      {
        id: 'prod-channellock-430',
        name: 'Channellock 430 Tongue & Groove Pliers, 10"',
        description:
          'Essential for any plumbing job. Adjustable jaw grips nuts and supply lines securely without slipping.',
        price: 17.98,
        affiliateUrl: 'https://www.amazon.com/dp/B00004SBCU',
        retailer: 'amazon',
        imageUrl: '/products/channellock-430.jpg',
        rating: 4.8,
        reviewCount: 22100,
      },
    ],
    featuredImage: '/guides/fix-running-toilet-hero.jpg',
    publishedAt: '2026-01-15T09:00:00Z',
    updatedAt: '2026-03-10T14:30:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Fix a Running Toilet (3 Easy Fixes) | Repair & Refinish',
      description:
        'Stop a running toilet in 30 minutes or less. Step-by-step guide to replacing the flapper, adjusting the float, and fixing the fill valve. Save $200/year on water bills.',
      keywords: [
        'fix running toilet',
        'toilet won\'t stop running',
        'replace toilet flapper',
        'toilet fill valve',
        'DIY toilet repair',
        'how to fix a toilet',
        'running toilet fix',
        'toilet keeps running',
      ],
      ogImage: '/guides/fix-running-toilet-og.jpg',
    },
    faqs: [
      {
        question: 'Why does my toilet run intermittently (ghost flushing)?',
        answer:
          'Ghost flushing is caused by a slow leak past the flapper. Water gradually seeps from the tank into the bowl until the fill valve triggers a refill. Replacing the flapper almost always fixes this.',
      },
      {
        question: 'How much water does a running toilet waste?',
        answer:
          'A constantly running toilet can waste 200 gallons per day or more — that\'s up to 6,000 gallons per month. At average US water rates, that adds $70-$200 to your annual water bill.',
      },
      {
        question: 'Do I need to replace the whole toilet if it keeps running?',
        answer:
          'Almost never. The internal parts (flapper, fill valve, flush valve) are all replaceable for under $30 total. The only reason to replace the whole toilet is if the porcelain is cracked.',
      },
      {
        question: 'Can I use a generic flapper or do I need a brand-specific one?',
        answer:
          'Universal flappers work for about 90% of toilets. If your toilet uses a canister-style flush valve (common in newer Kohler and American Standard models), you\'ll need a brand-specific part.',
      },
    ],
    relatedGuides: ['replace-kitchen-faucet', 'unclog-kitchen-sink', 'replace-toilet'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide 2: Patch and Repair Drywall (Painting & Walls)
  // ---------------------------------------------------------------------------
  {
    id: 'guide-patch-repair-drywall',
    slug: 'patch-repair-drywall',
    title: 'How to Patch and Repair Drywall',
    excerpt:
      'From tiny nail holes to fist-sized dents, learn how to patch drywall like a pro. This guide covers four repair methods based on damage size, plus tips for an invisible finish.',
    content: `Drywall damage happens — doorknobs punch holes, picture hangers leave marks, kids test the laws of physics. The good news is that drywall repair is one of the most forgiving DIY projects. Even a rough patch disappears under a coat of paint if you follow the right technique.

## Choosing Your Repair Method

The size of the damage determines your approach:
- **Small holes (under ½ inch):** Spackle and a putty knife
- **Medium holes (½ inch to 4 inches):** Self-adhesive mesh patch
- **Large holes (4 to 8 inches):** California patch method
- **Very large holes (8+ inches):** Full drywall section replacement

This guide covers all four methods so you're prepared for any damage you find.`,
    category: 'painting-walls',
    difficulty: 'beginner',
    estimatedTime: '1-3 hours (plus drying time)',
    estimatedCost: {
      low: 8,
      mid: 25,
      high: 50,
      diyVsPro: 'A handyman charges $75-$200 per patch. DIY materials cost $8-$50 depending on damage size.',
    },
    tools: [
      '6-inch and 12-inch drywall knives (taping knives)',
      'Utility knife',
      'Drywall saw (for larger holes)',
      'Sanding sponge (120-150 grit)',
      'Pencil',
      'Straightedge or T-square',
      'Drill or screwdriver',
      'Dust mask',
      'Drop cloth',
    ],
    materials: [
      'Lightweight spackle (for small holes)',
      'Pre-mixed joint compound (for larger repairs)',
      'Self-adhesive mesh drywall patch (4" or 6")',
      'Drywall scrap piece (for California patch)',
      'Paper drywall tape (for seams)',
      'Primer',
      'Paint to match existing wall',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Assess the Damage',
        description:
          'Examine the damaged area and determine which repair method you need. For holes under ½ inch (nail holes, small dents), you\'ll use spackle only. For holes ½ to 4 inches, use a self-adhesive mesh patch. For holes 4 to 8 inches, use the California patch method. For anything larger, you\'ll cut out and replace a full section of drywall.',
        imagePrompt:
          'Four types of drywall damage shown side by side: tiny nail hole, medium 2-inch hole, larger 6-inch hole, and a very large 12-inch hole in white drywall, comparison guide style',
        proTip:
          'Press gently around the damage to check for soft or water-damaged drywall. If the area is spongy, cut back to solid material before patching.',
      },
      {
        stepNumber: 2,
        title: 'Prep the Area',
        description:
          'For small holes, use a putty knife to scrape away any loose material or peeling paint around the hole. For medium and large holes, trim any ragged edges with a utility knife so you have clean borders. For very large holes, use a pencil and straightedge to mark a rectangle around the damage, then cut along the lines with a drywall saw. Lay down a drop cloth to catch dust.',
        imagePrompt:
          'Hand using a utility knife to trim ragged drywall edges around a medium hole, clean cuts, dust cloth below, well-lit room',
        warning:
          'Before cutting into any wall, check for electrical wires, plumbing pipes, or gas lines. Use a stud finder with wire detection, or at minimum, check what\'s on the wall on the other side.',
      },
      {
        stepNumber: 3,
        title: 'Small Holes: Apply Spackle',
        description:
          'Dip your putty knife into the lightweight spackle and press it firmly into the hole, filling it slightly proud of (higher than) the wall surface. Scrape the knife flat across the surface to remove excess. Spackle shrinks as it dries, so overfilling slightly ensures a flush finish. Let it dry 1-2 hours, then sand smooth with a sanding sponge.',
        imagePrompt:
          'Close-up of a putty knife pressing white spackle into a nail hole in drywall, smooth application technique, bright lighting',
        proTip:
          'For tiny nail holes, skip the putty knife — just push spackle in with your finger and wipe the excess with a damp cloth.',
      },
      {
        stepNumber: 4,
        title: 'Medium Holes: Self-Adhesive Mesh Patch',
        description:
          'Peel the backing off the self-adhesive mesh patch and center it over the hole, pressing it firmly against the wall. Using a 6-inch drywall knife, spread a thin layer of joint compound over the entire patch, extending 2 inches beyond the edges. Let it dry completely (follow the label, usually 2-4 hours). Apply a second coat with a 12-inch knife, feathering the edges further out. After drying, sand smooth.',
        imagePrompt:
          'Self-adhesive mesh drywall patch being applied over a medium hole, then covered with joint compound using a wide taping knife, two-panel step illustration',
      },
      {
        stepNumber: 5,
        title: 'Large Holes: California Patch Method',
        description:
          'Cut a piece of new drywall about 2 inches larger than the hole on all sides. Place it face-down and score the back paper and gypsum 1 inch in from each edge, then snap off the gypsum — leaving the front paper intact as a built-in flange. Test-fit the gypsum center into the hole (trim as needed). Apply joint compound around the hole edges, press the patch in so the paper flange lies flat against the wall, and smooth joint compound over the entire area. Let dry, apply a second coat, and sand smooth.',
        imagePrompt:
          'Step-by-step California patch: drywall piece being scored on the back, gypsum snapped away leaving paper flange, patch fitted into wall hole, compound applied over paper edges, 4-panel tutorial',
        proTip:
          'The California patch is stronger than a mesh patch because the paper flange creates a seamless bond with the existing wall surface.',
      },
      {
        stepNumber: 6,
        title: 'Very Large Holes: Cut and Replace',
        description:
          'After cutting out the damaged rectangle, attach 1x3 furring strips or pieces of plywood behind the opening on each side using drywall screws as backing supports. Cut new drywall to match the opening, screw it into the backing strips, then tape the seams with paper drywall tape and three coats of joint compound (letting each coat dry between applications). Sand between coats for a perfectly smooth result.',
        imagePrompt:
          'Installing backing strips behind a large drywall opening, then screwing in a new drywall piece, then taping and mudding the seams, 3-panel repair sequence',
        warning:
          'If the damaged area extends across a stud, you can screw the new drywall directly into the stud instead of using backing strips.',
      },
      {
        stepNumber: 7,
        title: 'Sand to a Smooth Finish',
        description:
          'Once the final coat of compound is fully dry, sand the entire patched area with a 150-grit sanding sponge using light, circular motions. Feather the edges so there\'s no visible ridge where the compound meets the wall. Run your hand over the surface — it should feel completely flat. Wipe away dust with a damp cloth.',
        imagePrompt:
          'Hand sanding a dried drywall patch with a sanding sponge, smooth circular motion, dust visible, satisfying smooth result',
        proTip:
          'Hold a flashlight flat against the wall surface to reveal any remaining ridges or imperfections. This "raking light" technique is how professional finishers check their work.',
      },
      {
        stepNumber: 8,
        title: 'Prime and Paint',
        description:
          'Apply a coat of drywall primer over the patched area — this is essential because raw joint compound absorbs paint differently than the surrounding wall, creating a visible flash mark. Once the primer dries (about 1 hour), paint the entire wall section (wall edge to wall edge, not just the patch) with your matching paint color. Two coats ensures a seamless blend.',
        imagePrompt:
          'Roller applying primer over a patched drywall area, then painting over with wall color, clean professional result, before-and-after split',
        warning:
          'Skipping primer is the #1 reason drywall patches are visible after painting. Always prime.',
      },
    ],
    tips: [
      'Buy pre-mixed joint compound (the purple-lid bucket) for easier application and smoother finish than mixing your own.',
      'Thin coats are always better than thick coats — thick compound cracks and takes forever to dry.',
      'Keep a spray bottle of water nearby. A light mist on your knife edge prevents compound from sticking to the blade.',
      'If you need to match an existing wall texture (orange peel, knockdown), practice the texture technique on cardboard first.',
      'Joint compound is water-soluble before it cures — clean tools and spills immediately with warm water.',
    ],
    warnings: [
      'Wear a dust mask when sanding joint compound. The fine dust is a respiratory irritant.',
      'Check for electrical wiring and plumbing before cutting into any wall.',
      'If drywall is water-damaged, find and fix the water source before patching. Otherwise the new patch will fail.',
      'Homes built before 1978 may have lead paint. Test before sanding and follow EPA lead-safe work practices.',
    ],
    affiliateProducts: [
      {
        id: 'prod-3m-patch-kit',
        name: '3M High Strength Large Hole Repair Kit',
        description:
          'Complete kit with self-adhesive patch, primer, spackling compound, and putty knife. Handles holes up to 5 inches.',
        price: 14.97,
        affiliateUrl: 'https://www.amazon.com/dp/B000BQS3UO',
        retailer: 'amazon',
        imageUrl: '/products/3m-patch-kit.jpg',
        rating: 4.4,
        reviewCount: 8900,
        badge: 'Best Seller',
      },
      {
        id: 'prod-dap-drydex',
        name: 'DAP DryDex Spackling (8 oz)',
        description:
          'Goes on pink and turns white when dry so you know exactly when to sand. Perfect for nail holes and small dents.',
        price: 5.47,
        affiliateUrl: 'https://www.homedepot.com/p/DAP-DryDex/100634629',
        retailer: 'homedepot',
        imageUrl: '/products/dap-drydex.jpg',
        rating: 4.6,
        reviewCount: 12300,
      },
      {
        id: 'prod-warner-knife-set',
        name: 'Warner ProGrip Drywall Knife Set (6", 10", 12")',
        description:
          'Three-knife set covering all patching needs. Stainless steel blades with soft-grip handles.',
        price: 24.98,
        affiliateUrl: 'https://www.amazon.com/dp/B0037MHXNQ',
        retailer: 'amazon',
        imageUrl: '/products/warner-knife-set.jpg',
        rating: 4.5,
        reviewCount: 5600,
      },
      {
        id: 'prod-sheetrock-compound',
        name: 'USG Sheetrock All Purpose Joint Compound (4.5 gal)',
        description:
          'The purple-lid bucket that every drywall pro uses. Pre-mixed, smooth, and easy to sand. Buy once, use for years of repairs.',
        price: 18.48,
        affiliateUrl: 'https://www.lowes.com/pd/USG-Sheetrock/1000176507',
        retailer: 'lowes',
        imageUrl: '/products/sheetrock-compound.jpg',
        rating: 4.7,
        reviewCount: 7100,
        badge: 'Pro Pick',
      },
    ],
    featuredImage: '/guides/patch-drywall-hero.jpg',
    publishedAt: '2026-01-22T09:00:00Z',
    updatedAt: '2026-03-05T11:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Patch and Repair Drywall (4 Methods by Hole Size) | Repair & Refinish',
      description:
        'Learn to repair drywall holes of any size — from nail holes to large damage. Step-by-step instructions for spackle, mesh patches, California patches, and full section replacement.',
      keywords: [
        'patch drywall',
        'repair drywall hole',
        'fix hole in wall',
        'drywall patch',
        'how to fix drywall',
        'California patch',
        'drywall repair kit',
        'spackle walls',
      ],
      ogImage: '/guides/patch-drywall-og.jpg',
    },
    faqs: [
      {
        question: 'How long does joint compound take to dry?',
        answer:
          'Standard joint compound takes 24 hours for a thick coat, but thin drywall patches usually dry in 2-4 hours. Quick-setting compound (like Durabond) dries in 20-90 minutes but is harder to sand.',
      },
      {
        question: 'Can I paint over spackle without priming?',
        answer:
          'Technically yes, but you shouldn\'t. Unprimed spackle and joint compound absorb paint differently than the surrounding wall, creating a visible difference in sheen called "flashing." Always prime patched areas.',
      },
      {
        question: 'What\'s the difference between spackle and joint compound?',
        answer:
          'Spackle is thicker, dries faster, and is designed for small holes. Joint compound is thinner, sandable to a smoother finish, and used for larger patches and taping seams. For patches bigger than a coin, use joint compound.',
      },
    ],
    relatedGuides: ['paint-room-like-pro', 'remove-wallpaper', 'refinish-hardwood-floors'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide 3: Refinish Hardwood Floors (Flooring)
  // ---------------------------------------------------------------------------
  {
    id: 'guide-refinish-hardwood-floors',
    slug: 'refinish-hardwood-floors',
    title: 'How to Refinish Hardwood Floors',
    excerpt:
      'Bring worn, scratched hardwood floors back to life. This comprehensive guide covers sanding, staining, and sealing — everything you need to transform tired floors into a stunning feature.',
    content: `Refinishing hardwood floors is one of the highest-ROI home improvement projects you can do. A professional refinishing job costs $3-$8 per square foot; doing it yourself costs about $1-$2 per square foot for materials. For a 500 sq ft room, that's a savings of $1,000 to $3,000.

## Is Your Floor a Candidate?

Solid hardwood floors can typically be refinished 4-6 times over their lifetime. Engineered hardwood with a wear layer of at least 2mm can be refinished once or twice. Laminate and vinyl cannot be refinished — if that's what you have, this guide isn't for you.

## Plan for Downtime

This project takes 3-5 days from start to finish: 1 day for sanding, 1 day for staining (optional), and 1-2 days for polyurethane coats (with drying time between). The room will be unusable during this time, so plan accordingly.`,
    category: 'flooring',
    difficulty: 'advanced',
    estimatedTime: '3-5 days',
    estimatedCost: {
      low: 200,
      mid: 500,
      high: 900,
      diyVsPro: 'Professional refinishing costs $1,500-$4,000 for a 500 sq ft room. DIY materials and rental equipment cost $200-$900 for the same space.',
    },
    tools: [
      'Drum sander (rental)',
      'Edge sander (rental)',
      'Random orbital sander',
      'Shop vacuum',
      'Paint tray and roller frame',
      'Synthetic floor finish applicator (T-bar)',
      'Foam brushes (3-inch)',
      'Painter\'s tape',
      'Pry bar (for removing baseboards)',
      'Hammer and nail set',
      'Dust mask (N95 or P100)',
      'Ear protection',
      'Knee pads',
    ],
    materials: [
      'Sandpaper rolls for drum sander (36, 60, 100 grit)',
      'Sandpaper discs for edge sander (36, 60, 100 grit)',
      'Sanding screen (120 grit) for final buff',
      'Wood stain (if changing color)',
      'Oil-based or water-based polyurethane (2-3 coats)',
      'Wood filler (for gaps and nail holes)',
      'Tack cloth',
      'Plastic sheeting (for doorways)',
      'Painter\'s tape',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Prepare the Room',
        description:
          'Remove all furniture from the room. Remove shoe molding and baseboards carefully with a pry bar (number them so they go back in the right places). Pull up any floor vents or transition strips. Seal doorways with plastic sheeting and painter\'s tape to contain dust. Cover HVAC vents with plastic. Set nails below the floor surface with a nail set and hammer so they don\'t catch the sander.',
        imagePrompt:
          'Empty room being prepared for floor refinishing: baseboards being removed with a pry bar, plastic sheeting taped over doorway, numbered baseboards against wall, empty hardwood floor visible',
        proTip:
          'Run a metal detector over the floor to find any hidden nails or staples. A single missed nail can rip a sanding belt and gouge the floor.',
      },
      {
        stepNumber: 2,
        title: 'Sand with the Drum Sander (Coarse - 36 Grit)',
        description:
          'Start with 36-grit sandpaper on the drum sander. Sand with the grain of the wood, moving at a steady walking pace. Start the sander while it\'s tilted back (drum off the floor), then slowly lower it to make contact. Never let a running drum sander sit still — it will dig a valley in seconds. Overlap each pass by about 3 inches. This first pass removes the old finish and levels the floor.',
        imagePrompt:
          'Person operating a drum floor sander on hardwood floor, dust collection bag visible, sanding with the grain, protective gear including ear muffs and dust mask',
        warning:
          'The drum sander is aggressive. Practice on a closet floor or scrap plywood first. Keep the sander moving at all times when the drum is in contact with the floor.',
      },
      {
        stepNumber: 3,
        title: 'Edge Sand the Perimeter',
        description:
          'The drum sander can\'t reach within 4-6 inches of the walls. Use the edge sander with 36-grit paper to sand the perimeter, corners, and any areas the drum couldn\'t reach. Move the edge sander in a sweeping, semi-circular motion. This is the most physically demanding part of the job — take breaks to avoid fatigue and mistakes.',
        imagePrompt:
          'Edge sander being used along the baseboard area of a hardwood floor, showing the overlap zone where drum sander stopped, close-up of technique',
      },
      {
        stepNumber: 4,
        title: 'Second Pass (60 Grit) and Third Pass (100 Grit)',
        description:
          'Replace the sandpaper with 60-grit and repeat the entire floor with both the drum and edge sanders. This removes the scratch marks left by the 36-grit. Then do a final pass with 100-grit sandpaper. Each successive grit creates finer scratches that give the finish something to grip. Vacuum thoroughly between each grit change.',
        imagePrompt:
          'Three sandpaper grits shown (36, 60, 100) next to progressively smoother hardwood floor samples, demonstrating the refinement process, educational layout',
        proTip:
          'After the 100-grit pass, use a random orbital sander with a 120-grit screen to blend any remaining edge sander marks where they meet the drum-sanded area.',
      },
      {
        stepNumber: 5,
        title: 'Fill Gaps and Nail Holes',
        description:
          'Mix wood filler with some of the sanding dust to create a color-matched filler. Press it into any gaps between boards, nail holes, and minor gouges with a putty knife. Let it dry according to the manufacturer\'s instructions (usually 1-2 hours), then sand flush with 100-grit sandpaper. Vacuum the entire floor again.',
        imagePrompt:
          'Applying wood filler mixed with sanding dust into gaps between hardwood floor boards using a putty knife, close-up detail shot',
      },
      {
        stepNumber: 6,
        title: 'Final Vacuum and Tack Cloth',
        description:
          'Vacuum the entire floor, edges, and corners thoroughly with a shop vacuum. Then go over the entire surface with a tack cloth to pick up any remaining fine dust particles. Any dust left on the floor will be trapped under the finish and visible forever. Also vacuum the walls and any horizontal surfaces where dust has settled — you don\'t want it falling onto wet finish.',
        imagePrompt:
          'Person meticulously cleaning a sanded hardwood floor with a tack cloth, the floor showing clean bare wood grain, dust-free environment',
        proTip:
          'Wait 10-15 minutes after vacuuming for airborne dust to settle, then do a final pass with the tack cloth.',
      },
      {
        stepNumber: 7,
        title: 'Apply Stain (Optional)',
        description:
          'If you want to change the floor color, apply oil-based wood stain with a foam brush or rag, working in 3-4 foot sections. Apply generously with the grain, wait 5-10 minutes (per the stain label), then wipe off the excess with clean rags. Work quickly at board junctions to avoid lap marks. Let the stain dry 24 hours before applying polyurethane.',
        imagePrompt:
          'Hands applying dark walnut wood stain to a hardwood floor with a rag, showing the dramatic color transformation from raw wood to rich stained finish, half-and-half before/after',
        warning:
          'Test your stain color on an inconspicuous area first. Stain looks different on bare wood than on the can lid. Also test in a closet to check drying time in your humidity conditions.',
      },
      {
        stepNumber: 8,
        title: 'Apply First Coat of Polyurethane',
        description:
          'Stir (never shake) the polyurethane. Using a synthetic floor finish applicator (T-bar) or a high-density foam roller, apply a thin, even coat of polyurethane with the grain. Start at the far corner and work toward the exit door. Maintain a wet edge to prevent lap marks. Apply in long, smooth strokes. The first coat will raise the grain slightly and look rough — that\'s normal.',
        imagePrompt:
          'Applying polyurethane to a hardwood floor with a T-bar applicator, long smooth strokes, golden finish coating, person working from far corner toward doorway',
        proTip:
          'Water-based poly dries faster (2 hours between coats) and has less odor. Oil-based poly takes 8-12 hours between coats but creates a warmer, amber tone.',
      },
      {
        stepNumber: 9,
        title: 'Screen and Apply Second (and Third) Coats',
        description:
          'After the first coat is fully dry, lightly screen the entire floor with a 120-grit sanding screen on a random orbital sander or pole sander. This knocks down the raised grain and gives the next coat something to bond to. Vacuum and tack cloth again, then apply the second coat. Repeat the screening and application for a third coat. Three coats of poly is the standard for residential floors.',
        imagePrompt:
          'Screening a polyurethane-coated floor with a pole sander and sanding screen, then applying the next coat, showing the build-up of a glossy protective finish',
      },
      {
        stepNumber: 10,
        title: 'Let It Cure and Reinstall Trim',
        description:
          'Wait at least 24 hours before walking on the floor in socks (48 hours for shoes). Wait 72 hours before moving furniture back. For oil-based poly, wait a full week for heavy furniture. Reinstall the baseboards and shoe molding using your numbering system. Touch up any nail holes in the trim with wood filler. Stand back and admire your work — you just saved thousands of dollars.',
        imagePrompt:
          'Beautifully refinished hardwood floor in a sunlit room, rich warm finish, baseboards reinstalled, empty room ready for furniture, dramatic before-and-after transformation',
        proTip:
          'Place felt pads under all furniture legs before putting anything back. This prevents scratches on your fresh finish from day one.',
      },
    ],
    tips: [
      'Rent sanding equipment from a dedicated tool rental shop, not a big box store — rental shops maintain their equipment better and can give you hands-on instruction.',
      'Buy more sandpaper than you think you need. It\'s cheaper to return unused rolls than to make a mid-project run to the store.',
      'If you\'re refinishing multiple rooms, do them all at once to save on equipment rental costs.',
      'Keep windows closed while applying poly (dust blows in) but open them during drying time for ventilation.',
      'Water-based polyurethane is recommended for DIYers: it dries faster, has lower odor, and doesn\'t yellow over time.',
      'Practice with the drum sander on a piece of plywood before touching your actual floor.',
    ],
    warnings: [
      'Always wear an N95 or P100 dust mask when sanding. Hardwood dust is a known respiratory irritant and some species (like cedar and walnut) can cause allergic reactions.',
      'Wear ear protection — drum sanders are extremely loud.',
      'Oil-based polyurethane fumes are flammable and hazardous. Ensure adequate ventilation and keep ignition sources away.',
      'Do not use steel wool on water-based polyurethane — microscopic steel fibers will rust and leave black spots in the finish.',
      'Never leave oil-soaked rags in a pile — they can spontaneously combust. Spread them flat outside to dry, then dispose of them.',
      'Engineered hardwood with a thin veneer (under 2mm) cannot survive aggressive sanding. Measure your wear layer before starting.',
    ],
    affiliateProducts: [
      {
        id: 'prod-bona-mega-one',
        name: 'Bona Mega ONE Water-Based Floor Finish (1 gallon)',
        description:
          'Professional-grade one-component water-based polyurethane. Low odor, fast dry (2-3 hours between coats), and exceptional durability. Covers ~500 sq ft per gallon.',
        price: 74.97,
        affiliateUrl: 'https://www.amazon.com/dp/B007PMDQGS',
        retailer: 'amazon',
        imageUrl: '/products/bona-mega-one.jpg',
        rating: 4.6,
        reviewCount: 3200,
        badge: 'Pro Pick',
      },
      {
        id: 'prod-minwax-stain',
        name: 'Minwax Wood Finish Oil-Based Stain (1 quart)',
        description:
          'The go-to penetrating stain for hardwood floors. Available in 28 colors from Natural to Dark Walnut. One quart covers about 150 sq ft.',
        price: 10.98,
        affiliateUrl: 'https://www.homedepot.com/p/Minwax-Wood-Finish/100376098',
        retailer: 'homedepot',
        imageUrl: '/products/minwax-stain.jpg',
        rating: 4.5,
        reviewCount: 14700,
      },
      {
        id: 'prod-norton-sandpaper-kit',
        name: 'Norton Floor Sanding Belt Assortment (36, 60, 100 grit)',
        description:
          'Premium aluminum oxide sanding belts sized for standard drum sanders. Aggressive cut on coarse grits, smooth finish on fine. Pack of 15 belts (5 each grit).',
        price: 62.99,
        affiliateUrl: 'https://www.amazon.com/dp/B001DT2F3C',
        retailer: 'amazon',
        imageUrl: '/products/norton-sandpaper.jpg',
        rating: 4.4,
        reviewCount: 1800,
      },
      {
        id: 'prod-timber-filler',
        name: 'Timbermate Wood Filler (8 oz)',
        description:
          'Water-based, non-shrinking wood filler that accepts stain. Mix with your sanding dust for an invisible color match. Will not crack or fall out over time.',
        price: 11.99,
        affiliateUrl: 'https://www.amazon.com/dp/B002BTRJWU',
        retailer: 'amazon',
        imageUrl: '/products/timbermate-filler.jpg',
        rating: 4.5,
        reviewCount: 4200,
      },
      {
        id: 'prod-3m-n95',
        name: '3M 8210 N95 Respirator (20-pack)',
        description:
          'NIOSH-approved N95 particulate respirator. Essential for sanding hardwood floors. Comfortable fit for all-day wear.',
        price: 16.99,
        affiliateUrl: 'https://www.amazon.com/dp/B008MCUULW',
        retailer: 'amazon',
        imageUrl: '/products/3m-n95.jpg',
        rating: 4.7,
        reviewCount: 38500,
      },
    ],
    featuredImage: '/guides/refinish-hardwood-floors-hero.jpg',
    publishedAt: '2026-02-05T09:00:00Z',
    updatedAt: '2026-03-15T10:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Refinish Hardwood Floors (Complete DIY Guide) | Repair & Refinish',
      description:
        'Save $1,000-$3,000 by refinishing your hardwood floors yourself. Complete guide covering sanding, staining, and polyurethane application with pro tips for a flawless finish.',
      keywords: [
        'refinish hardwood floors',
        'sand hardwood floors',
        'how to refinish wood floors',
        'DIY floor refinishing',
        'hardwood floor restoration',
        'polyurethane hardwood floor',
        'stain hardwood floors',
        'floor sanding guide',
      ],
      ogImage: '/guides/refinish-hardwood-floors-og.jpg',
    },
    faqs: [
      {
        question: 'How do I know if my floors can be refinished?',
        answer:
          'Solid hardwood (3/4 inch thick) can be refinished 4-6 times. Engineered hardwood needs at least a 2mm wear layer. Check by removing a floor vent and measuring the thickness of the top wood layer. Laminate and luxury vinyl plank cannot be refinished.',
      },
      {
        question: 'Should I use oil-based or water-based polyurethane?',
        answer:
          'Water-based poly dries faster, has less odor, won\'t yellow over time, and is easier for DIYers. Oil-based poly is slightly more durable, gives a warm amber tone, and is less expensive per coat. For most DIY projects, we recommend water-based.',
      },
      {
        question: 'How much does it cost to rent a floor sander?',
        answer:
          'Drum sander rental is typically $60-$80 per day. Edge sander rental is $40-$60 per day. Most projects need both for 1-2 days. Including sandpaper and other consumables, budget $150-$250 for equipment.',
      },
      {
        question: 'Can I refinish floors without sanding?',
        answer:
          'If the existing finish is in decent shape (just dull, no deep scratches or wear-through), you can use a chemical etcher or abrasion screen to scuff the surface, then apply a fresh coat of poly. This is called a "screen and recoat" and costs about $50 in materials. It won\'t fix deep damage though.',
      },
      {
        question: 'How long before I can put furniture back?',
        answer:
          'Light foot traffic (socks only) after 24 hours. Normal foot traffic after 48-72 hours. Furniture after 72 hours for water-based poly, or 1 week for oil-based poly. Use felt pads under all furniture legs.',
      },
    ],
    relatedGuides: ['install-vinyl-plank-flooring', 'fix-squeaky-floors', 'refinish-wood-table'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guides 4-25: Imported from category files
  // ---------------------------------------------------------------------------
  ...plumbingGuides,
  ...electricalGuides,
  ...paintingWallsGuides,
  ...flooringGuides,
  ...kitchenBathGuides,
  ...doorsWindowsGuides,
  ...hvacClimateGuides,
  ...outdoorLandscapingGuides,
  ...applianceRepairGuides,
  ...furnitureDecorGuides,
];

// =============================================================================
// Guide Lookup Helpers
// =============================================================================

/**
 * Get a guide by its slug.
 */
export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

/**
 * Get all guides for a specific category.
 */
export function getGuidesByCategory(categorySlug: string): Guide[] {
  return guides.filter((g) => g.category === categorySlug);
}

/**
 * Get all guides filtered by difficulty.
 */
export function getGuidesByDifficulty(difficulty: Guide['difficulty']): Guide[] {
  return guides.filter((g) => g.difficulty === difficulty);
}

/**
 * Get all published guide slugs (useful for static params generation).
 */
export function getAllGuideSlugs(): string[] {
  return guides.filter((g) => g.status === 'published').map((g) => g.slug);
}

/**
 * Get featured/recent guides for the homepage.
 */
export function getFeaturedGuides(count = 6): Guide[] {
  return guides
    .filter((g) => g.status === 'published')
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count);
}

/**
 * Simple text search across guides.
 */
export function searchGuides(query: string): Guide[] {
  const lower = query.toLowerCase();
  return guides.filter(
    (g) =>
      g.status === 'published' &&
      (g.title.toLowerCase().includes(lower) ||
        g.excerpt.toLowerCase().includes(lower) ||
        g.category.toLowerCase().includes(lower) ||
        g.tools.some((t) => t.toLowerCase().includes(lower)) ||
        g.materials.some((m) => m.toLowerCase().includes(lower)))
  );
}

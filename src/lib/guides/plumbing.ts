import type { Guide } from '@/types';
import { defaultAuthor } from '../site-config';

export const plumbingGuides: Guide[] = [
  // ---------------------------------------------------------------------------
  // Guide 4: Unclog a Kitchen Sink
  // ---------------------------------------------------------------------------
  {
    id: 'guide-unclog-kitchen-sink',
    slug: 'unclog-kitchen-sink',
    title: 'How to Unclog a Kitchen Sink',
    excerpt:
      'A clogged kitchen sink is one of the most common household headaches. Learn how to clear it quickly using a plunger, drain snake, or simple baking soda and vinegar — no harsh chemicals needed.',
    content: `A slow-draining or completely clogged kitchen sink usually means grease, food particles, or soap scum have built up in the drain pipe or P-trap. Before you reach for a bottle of chemical drain cleaner (which can corrode pipes and is harmful to septic systems), try these mechanical methods that work better and cost less.

## Common Causes

Kitchen clogs are almost always caused by grease that solidifies in the pipe, food scraps that slip past the strainer, or a combination of both. Coffee grounds and starchy foods like pasta and rice are especially notorious — they expand in water and create sticky blockages.

## Before You Start

If you have a garbage disposal, make sure it isn't the source of the clog. Run it with water flowing to see if that clears things up. If the disposal hums but doesn't spin, it may be jammed (use the hex key that came with it to manually turn the flywheel from underneath).`,
    category: 'plumbing',
    difficulty: 'beginner',
    estimatedTime: '15-30 minutes',
    estimatedCost: {
      low: 0,
      mid: 15,
      high: 30,
      diyVsPro: 'A plumber charges $150-$250 for a simple drain clearing. DIY cost is $0-$30 using tools you likely already own.',
    },
    tools: [
      'Flat-bottom sink plunger',
      'Drain snake (25-foot)',
      'Tongue-and-groove pliers',
      'Bucket',
      'Rubber gloves',
      'Flashlight',
    ],
    materials: [
      'Baking soda (1/2 cup)',
      'White vinegar (1/2 cup)',
      'Dish soap',
      'Old towels',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Check the Garbage Disposal',
        description:
          'If your sink has a garbage disposal, turn it on and run hot water. If the disposal hums but doesn\'t spin, it\'s jammed — turn it off and insert the hex wrench (usually 1/4 inch) into the bottom of the disposal unit and turn it back and forth to free the flywheel. If the disposal works fine but water still won\'t drain, the clog is further down the pipe.',
        imagePrompt:
          'Underneath a kitchen sink, hand inserting hex wrench into bottom of garbage disposal unit, close-up educational shot, bright kitchen lighting',
        proTip:
          'Most disposals come with a hex key, but if you lost yours, a standard 1/4-inch Allen wrench from any hardware store works perfectly.',
      },
      {
        stepNumber: 2,
        title: 'Try Boiling Water First',
        description:
          'Boil a full kettle of water and pour it directly down the drain in two or three stages, waiting a few seconds between pours. Boiling water can melt and flush grease buildup that\'s narrowing the pipe. This works surprisingly often for slow drains caused by grease accumulation. If the water drains freely after this, you\'re done.',
        imagePrompt:
          'Pouring boiling water from a kettle directly into a stainless steel kitchen sink drain, steam rising, close-up action shot',
        warning:
          'Do not pour boiling water if you have PVC drain pipes (white plastic). Boiling water can soften PVC joints. Use very hot tap water instead.',
      },
      {
        stepNumber: 3,
        title: 'Use the Baking Soda and Vinegar Method',
        description:
          'Pour 1/2 cup of baking soda down the drain, followed by 1/2 cup of white vinegar. The mixture will fizz and bubble — that reaction helps break up organic clogs. Cover the drain opening with a wet cloth to keep the pressure directed downward. Wait 15-30 minutes, then flush with hot water. Repeat once if the drain is still slow.',
        imagePrompt:
          'Baking soda being poured into a kitchen sink drain, then vinegar added causing fizzing reaction, two-panel before-and-after, clean kitchen setting',
        proTip:
          'For extra grease-cutting power, squirt a tablespoon of dish soap down the drain before the baking soda. The soap helps emulsify grease.',
      },
      {
        stepNumber: 4,
        title: 'Plunge the Drain',
        description:
          'If the clog persists, fill the sink with 3-4 inches of water. Place a flat-bottom sink plunger (not a flange toilet plunger) over the drain opening, ensuring a complete seal. If you have a double sink, stuff a wet rag into the other drain to prevent air from escaping. Plunge vigorously 15-20 times with sharp, forceful strokes, then pull the plunger away quickly to break the suction.',
        imagePrompt:
          'Person using a flat-bottom plunger on a kitchen sink drain, sink partially filled with water, proper technique shown with both hands on handle, kitchen background',
        proTip:
          'Coat the rim of the plunger cup with petroleum jelly for a better seal against the sink surface.',
      },
      {
        stepNumber: 5,
        title: 'Snake the Drain',
        description:
          'If plunging doesn\'t work, feed a 25-foot drain snake into the drain opening. Push it forward while cranking the handle clockwise. When you feel resistance, you\'ve hit the clog — keep cranking to break through it or hook it. Pull the snake out slowly, wiping it with a rag as it comes. Run hot water for a minute to flush loosened debris.',
        imagePrompt:
          'Hand feeding a coiled drain snake into a kitchen sink drain, cranking the handle, close-up showing technique, rubber gloves on',
        warning:
          'Be gentle when snaking through the P-trap — too much force can push through the pipe joint. If you feel the snake hit a hard stop that won\'t give, stop and try cleaning the P-trap instead.',
      },
      {
        stepNumber: 6,
        title: 'Clean the P-Trap (If Needed)',
        description:
          'Place a bucket directly under the P-trap (the U-shaped pipe under the sink). Loosen the slip nuts on both ends of the P-trap by hand or with tongue-and-groove pliers — turn counterclockwise. Carefully lower the P-trap and dump its contents into the bucket. Clean the inside of the trap with a bottle brush or old toothbrush. Inspect the pipe going into the wall for blockages. Reinstall the P-trap, hand-tighten the slip nuts, then snug them a quarter turn with pliers.',
        imagePrompt:
          'Underneath kitchen sink, hands removing the P-trap pipe into a bucket, showing the slip nuts being loosened, debris visible in the trap, educational plumbing shot',
        proTip:
          'Take a photo of the P-trap assembly before disassembling it so you remember the exact order and orientation of the parts.',
      },
      {
        stepNumber: 7,
        title: 'Test and Prevent Future Clogs',
        description:
          'Run hot water for a full minute to confirm the drain flows freely. Check under the sink for any leaks at the P-trap connections. To prevent future clogs, always run hot water after washing greasy dishes, use a sink strainer to catch food particles, and never pour cooking oil or grease down the drain. Once a month, flush the drain with the baking soda and vinegar method as preventive maintenance.',
        imagePrompt:
          'Water flowing freely down a kitchen sink drain, person checking under sink for leaks, clean and clear drain, satisfied result',
      },
    ],
    tips: [
      'Never use chemical drain cleaners like Drano on a completely blocked drain — the caustic chemicals will just sit in the pipe and can damage it.',
      'Run hot water for 30 seconds after every dishwashing session to keep grease from solidifying in the pipes.',
      'A mesh sink strainer costs $3 and prevents 90% of kitchen clogs. It\'s the best $3 you\'ll ever spend.',
      'Keep a dedicated plunger under the kitchen sink — the small flat-bottom type, not the toilet kind.',
    ],
    warnings: [
      'Never plunge or snake a drain after pouring chemical drain cleaner — the chemicals can splash back and burn your skin or eyes.',
      'If multiple drains in your house are clogged simultaneously, you likely have a main sewer line blockage. Call a professional.',
      'Do not pour boiling water into PVC pipes (white plastic). Use very hot tap water instead to avoid softening pipe joints.',
    ],
    affiliateProducts: [
      {
        id: 'prod-drainfx-snake',
        name: 'FlexiSnake Drain Millipede Hair Clog Tool (5-pack)',
        description:
          'Disposable 18-inch micro-hook drain tool that grabs hair and gunk. Thin enough for kitchen and bathroom drains. Just insert, twist, and pull.',
        price: 8.99,
        affiliateUrl: 'https://www.amazon.com/dp/B01DP87IF8',
        retailer: 'amazon',
        imageUrl: '/products/flexisnake.jpg',
        rating: 4.3,
        reviewCount: 18700,
        badge: 'best-value',
      },
      {
        id: 'prod-ridgid-kwiksnake',
        name: 'RIDGID Kwik Spin+ Drain Snake (25 ft)',
        description:
          'Professional-quality 1/4-inch drain cable with auto-feed and ergonomic pistol grip. Clears tough kitchen clogs that plungers can\'t handle.',
        price: 34.97,
        affiliateUrl: 'https://www.homedepot.com/p/RIDGID-Kwik-Spin/312624282',
        retailer: 'homedepot',
        imageUrl: '/products/ridgid-kwiksnake.jpg',
        rating: 4.4,
        reviewCount: 3200,
        badge: 'our-pick',
      },
      {
        id: 'prod-simplihome-plunger',
        name: 'OXO Good Grips Sink Plunger',
        description:
          'Flat-bottom plunger designed specifically for sinks and tubs. The broad rubber cup creates a strong seal on flat surfaces.',
        price: 11.99,
        affiliateUrl: 'https://www.amazon.com/dp/B00004OCLJ',
        retailer: 'amazon',
        imageUrl: '/products/oxo-sink-plunger.jpg',
        rating: 4.5,
        reviewCount: 6800,
      },
      {
        id: 'prod-sink-strainer',
        name: 'OXO Good Grips Silicone Sink Strainer',
        description:
          'Flexible silicone strainer catches food particles while letting water flow freely. Fits most standard drains and is dishwasher safe.',
        price: 6.99,
        affiliateUrl: 'https://www.amazon.com/dp/B00A2KD8NY',
        retailer: 'amazon',
        imageUrl: '/products/oxo-sink-strainer.jpg',
        rating: 4.6,
        reviewCount: 22400,
        badge: 'budget',
      },
    ],
    featuredImage: '/guides/unclog-kitchen-sink-hero.jpg',
    publishedAt: '2026-02-10T09:00:00Z',
    updatedAt: '2026-03-18T14:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Unclog a Kitchen Sink (5 Methods) | Repair & Refinish',
      description:
        'Clear a clogged kitchen sink in 30 minutes or less. Step-by-step methods including plunging, drain snaking, baking soda & vinegar, and P-trap cleaning.',
      keywords: [
        'unclog kitchen sink',
        'clogged kitchen drain',
        'how to unclog a sink',
        'kitchen sink not draining',
        'clear kitchen drain',
        'DIY drain cleaning',
        'unclog drain without chemicals',
      ],
      ogImage: '/guides/unclog-kitchen-sink-og.jpg',
    },
    faqs: [
      {
        question: 'Why shouldn\'t I use chemical drain cleaners?',
        answer:
          'Chemical drain cleaners (like Drano or Liquid-Plumr) contain sodium hydroxide or sulfuric acid that can corrode metal pipes, damage PVC joints, and are harmful to septic systems. They also pose a serious burn risk if they splash back. Mechanical methods (plunging, snaking) are more effective and safer.',
      },
      {
        question: 'Can I unclog a double kitchen sink?',
        answer:
          'Yes, but you need to seal the other drain opening when plunging. Stuff a wet rag tightly into the opposite drain, then plunge the clogged side. This directs all the pressure toward the clog instead of letting it escape through the other basin.',
      },
      {
        question: 'How do I prevent kitchen sink clogs?',
        answer:
          'The three biggest prevention measures are: (1) Never pour grease or oil down the drain — let it cool and toss it in the trash. (2) Use a mesh sink strainer to catch food particles. (3) Run hot water for 30 seconds after every dishwashing session to flush any remaining grease.',
      },
      {
        question: 'My kitchen sink gurgles when I run water. What does that mean?',
        answer:
          'Gurgling usually indicates a partial blockage or a venting problem. Air is being sucked through the water in the P-trap instead of entering through the vent pipe. Try snaking the drain first. If gurgling persists, you may have a blocked or improperly installed vent pipe, which requires a plumber.',
      },
    ],
    relatedGuides: ['fix-running-toilet', 'replace-kitchen-faucet', 'fix-leaky-pipe-joint'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide 5: Replace a Kitchen Faucet
  // ---------------------------------------------------------------------------
  {
    id: 'guide-replace-kitchen-faucet',
    slug: 'replace-kitchen-faucet',
    title: 'How to Replace a Kitchen Faucet',
    excerpt:
      'Upgrade your kitchen with a new faucet in about an hour. This intermediate guide covers removing the old faucet, installing the new one, and connecting the supply lines without leaks.',
    content: `Replacing a kitchen faucet is one of the best bang-for-your-buck kitchen upgrades. A new faucet instantly modernizes the look of your kitchen, and today's models offer features like pull-down sprayers, touchless activation, and built-in water filters.

## Choosing a Faucet

Before you buy, count the number of holes in your sink or countertop. Most kitchen sinks have 1, 3, or 4 holes. Single-hole faucets are the most popular and easiest to install. If you have extra holes, you can use a deck plate (included with many faucets) to cover the unused openings.

## Plan Ahead

The hardest part of this project isn't the plumbing — it's working upside-down in the cramped space under the sink. A basin wrench (about $15) makes reaching those hard-to-access mounting nuts much easier.`,
    category: 'plumbing',
    difficulty: 'intermediate',
    estimatedTime: '60-90 minutes',
    estimatedCost: {
      low: 100,
      mid: 175,
      high: 250,
      diyVsPro: 'A plumber charges $200-$400 for faucet installation (plus the faucet cost). DIY you pay only for the faucet itself ($100-$250).',
    },
    tools: [
      'Basin wrench',
      'Adjustable wrench',
      'Tongue-and-groove pliers',
      'Bucket',
      'Flashlight or headlamp',
      'Plumber\'s putty or silicone caulk',
      'Towels',
    ],
    materials: [
      'New kitchen faucet with supply lines',
      'Plumber\'s tape (Teflon tape)',
      'Silicone caulk or plumber\'s putty',
      'Supply line connectors (if not included)',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Turn Off the Water Supply',
        description:
          'Open the cabinet under the sink and locate the hot and cold shut-off valves on the wall. Turn both valves clockwise until they stop. Turn on the faucet to relieve any remaining pressure and drain the lines. Place a bucket under the supply connections to catch residual water.',
        imagePrompt:
          'Under a kitchen sink cabinet, hands turning chrome shut-off valves clockwise, bucket positioned below, bright flashlight illuminating the workspace',
        proTip:
          'If the shut-off valves are old gate valves that won\'t close completely, turn off the main water supply to the house instead.',
      },
      {
        stepNumber: 2,
        title: 'Disconnect the Supply Lines',
        description:
          'Use an adjustable wrench to loosen the supply line nuts where they connect to the shut-off valves (turn counterclockwise). Then disconnect the supply lines from the faucet connections under the sink. Have a towel ready — some water will spill. If you have a sprayer hose, disconnect it from the diverter valve as well.',
        imagePrompt:
          'Wrench disconnecting braided stainless steel supply lines from shut-off valves under kitchen sink, water dripping into bucket, close-up hands-on shot',
      },
      {
        stepNumber: 3,
        title: 'Remove the Old Faucet',
        description:
          'Use a basin wrench to reach the mounting nuts holding the faucet to the sink deck. Turn counterclockwise to loosen. These nuts are often corroded and stubborn — spray them with penetrating oil (WD-40 or PB Blaster) and wait 10 minutes if they won\'t budge. Once the nuts are off, lift the old faucet out from above. Clean any old putty or caulk residue from the sink surface with a plastic scraper.',
        imagePrompt:
          'Basin wrench reaching up behind a kitchen sink to loosen a faucet mounting nut, tight workspace under sink, educational plumbing technique',
        proTip:
          'Take a photo of how the old faucet supply lines are connected before removing them. This serves as a reference for installing the new faucet.',
        warning:
          'Corroded mounting nuts may break rather than unscrew. If this happens, use a reciprocating saw with a metal-cutting blade to cut through the nut. Protect the sink surface with tape.',
      },
      {
        stepNumber: 4,
        title: 'Prepare the New Faucet',
        description:
          'Read the new faucet\'s installation instructions — every brand is slightly different. Thread the supply lines and any sprayer hose through the mounting hole from above. If your faucet requires plumber\'s putty, roll a pencil-thick rope of putty and press it around the base of the faucet before setting it in place. Some faucets include a rubber gasket instead, which eliminates the need for putty.',
        imagePrompt:
          'New chrome kitchen faucet being lowered into sink mounting hole from above, supply lines threading through, plumber putty visible around base, clean install',
      },
      {
        stepNumber: 5,
        title: 'Secure the Faucet to the Sink',
        description:
          'From underneath the sink, slide the mounting hardware (washer and nut) onto the threaded studs or tailpiece. Hand-tighten the mounting nut, then use the basin wrench to snug it firmly. Don\'t overtighten — you just need it snug enough that the faucet doesn\'t rotate when you use the handle. Check from above that the faucet is centered and straight before final tightening.',
        imagePrompt:
          'Under-sink view of hands tightening mounting nut on new faucet with basin wrench, faucet base visible from above through mounting hole, dual perspective',
        proTip:
          'Have someone hold the faucet straight from above while you tighten from below. This prevents it from rotating crooked.',
      },
      {
        stepNumber: 6,
        title: 'Connect the Supply Lines',
        description:
          'Connect the hot supply line (left) to the hot shut-off valve and the cold supply line (right) to the cold valve. Hand-tighten the connections first, then give them a quarter to half turn more with pliers. If your new faucet came with braided stainless steel supply lines, they typically don\'t need Teflon tape — the rubber washers inside the connections create the seal. If using rigid supply tubes, apply Teflon tape to the threads.',
        imagePrompt:
          'Hands connecting braided stainless steel supply lines to shut-off valves under kitchen sink, hot on left cold on right, secure connections',
      },
      {
        stepNumber: 7,
        title: 'Connect the Sprayer Hose (If Applicable)',
        description:
          'For pull-down or pull-out faucets, connect the sprayer hose to the faucet body according to the manufacturer\'s instructions. There\'s usually a quick-connect fitting that snaps into place. Thread the counterweight onto the hose at the position specified in the instructions — this weight ensures the sprayer head retracts smoothly into the faucet spout.',
        imagePrompt:
          'Pull-down kitchen faucet sprayer hose being connected with quick-connect fitting under sink, counterweight attached to hose, clean installation',
        proTip:
          'Test the sprayer retraction before finishing up. If the hose doesn\'t retract smoothly, adjust the counterweight position on the hose.',
      },
      {
        stepNumber: 8,
        title: 'Turn On the Water and Check for Leaks',
        description:
          'Slowly turn on both shut-off valves. Remove the aerator from the faucet spout and run water for 30 seconds to flush debris from the new lines. Replace the aerator. Check every connection under the sink for drips — shut-off valve connections, supply line connections, and the sprayer hose. Tighten any dripping connections a quarter turn at a time until the leak stops. Wipe all connections dry and check again after 10 minutes.',
        imagePrompt:
          'Water running from a newly installed kitchen faucet, person checking under sink with flashlight for leaks, dry towel under connections, successful install',
        warning:
          'If a connection keeps leaking after tightening, turn off the water, disconnect it, check for a missing washer or cross-threaded fitting, and reconnect properly.',
      },
    ],
    tips: [
      'A basin wrench is the single most important tool for this job. Don\'t even attempt faucet removal without one — you\'ll waste hours and damage your knuckles.',
      'Buy a faucet with braided stainless steel supply lines pre-attached. It eliminates two potential leak points and saves 15 minutes of installation time.',
      'Measure the distance from your sink holes to the shut-off valves to make sure the new supply lines are long enough.',
      'Choose a faucet with a ceramic disc cartridge rather than a rubber washer — ceramic lasts 5-10 times longer.',
      'If your sink has extra holes from the old faucet, buy a deck plate or use a soap dispenser to fill them.',
    ],
    warnings: [
      'Always shut off water supply valves before disconnecting any plumbing. Verify by trying to run the faucet after closing the valves.',
      'If your shut-off valves are more than 20 years old, they may not close fully. Be prepared to shut off the main water supply as a backup.',
      'Never overtighten supply line connections — this can crack the valve or strip the threads, leading to a worse leak.',
    ],
    affiliateProducts: [
      {
        id: 'prod-moen-georgene',
        name: 'Moen Georgene Single-Handle Pull-Down Kitchen Faucet',
        description:
          'Spot-resistant stainless finish, Power Boost spray, and Reflex retraction system. Includes deck plate for 1- or 3-hole installation.',
        price: 189.00,
        affiliateUrl: 'https://www.homedepot.com/p/Moen-Georgene/312387545',
        retailer: 'homedepot',
        imageUrl: '/products/moen-georgene.jpg',
        rating: 4.6,
        reviewCount: 8900,
        badge: 'our-pick',
      },
      {
        id: 'prod-delta-essa',
        name: 'Delta Essa Single-Handle Pull-Down Kitchen Faucet',
        description:
          'Arctic stainless finish with MagnaTite magnetic docking. Touch-Clean spray holes make maintenance easy. Lifetime limited warranty.',
        price: 219.00,
        affiliateUrl: 'https://www.lowes.com/pd/Delta-Essa/5001954403',
        retailer: 'lowes',
        imageUrl: '/products/delta-essa.jpg',
        rating: 4.5,
        reviewCount: 5400,
      },
      {
        id: 'prod-basin-wrench',
        name: 'RIDGID 1017 Basin Wrench (3/8" to 1-1/4")',
        description:
          'The essential tool for reaching faucet mounting nuts in tight spaces. Telescoping shaft adjusts from 10" to 17". Spring-loaded jaw grips automatically.',
        price: 17.97,
        affiliateUrl: 'https://www.homedepot.com/p/RIDGID-Basin-Wrench/100067927',
        retailer: 'homedepot',
        imageUrl: '/products/ridgid-basin-wrench.jpg',
        rating: 4.4,
        reviewCount: 4300,
        badge: 'best-value',
      },
      {
        id: 'prod-kraus-faucet',
        name: 'Kraus Bolden Single-Handle Pull-Down Kitchen Faucet',
        description:
          'Commercial-style dual-function sprayer head with spot-free stainless steel finish. Heavy-duty ceramic cartridge. Great value for a pro-look faucet.',
        price: 129.95,
        affiliateUrl: 'https://www.amazon.com/dp/B07BQLJQK9',
        retailer: 'amazon',
        imageUrl: '/products/kraus-bolden.jpg',
        rating: 4.6,
        reviewCount: 11200,
        badge: 'budget',
      },
    ],
    featuredImage: '/guides/replace-kitchen-faucet-hero.jpg',
    publishedAt: '2026-02-18T09:00:00Z',
    updatedAt: '2026-03-19T10:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Replace a Kitchen Faucet (Step-by-Step) | Repair & Refinish',
      description:
        'Replace your kitchen faucet yourself in 60-90 minutes. Complete guide covering removal, installation, supply line connections, and leak testing. Save $200+ over a plumber.',
      keywords: [
        'replace kitchen faucet',
        'install kitchen faucet',
        'how to change a faucet',
        'kitchen faucet installation',
        'DIY faucet replacement',
        'remove old kitchen faucet',
        'basin wrench faucet',
      ],
      ogImage: '/guides/replace-kitchen-faucet-og.jpg',
    },
    faqs: [
      {
        question: 'Do I need a plumber to replace a kitchen faucet?',
        answer:
          'No — this is a standard DIY project that most homeowners can handle. You need basic tools (basin wrench, adjustable wrench), about 60-90 minutes, and the ability to work in the cramped space under the sink. The only time to call a plumber is if your shut-off valves don\'t work or if you discover corroded supply pipes.',
      },
      {
        question: 'How do I know what size faucet to buy?',
        answer:
          'Count the holes in your sink deck. Most kitchen sinks have 1, 3, or 4 holes. Single-hole faucets are the most versatile — many come with a deck plate that covers 3- or 4-hole configurations. Measure the center-to-center distance between the outer holes if you\'re buying a widespread faucet (usually 8 inches).',
      },
      {
        question: 'What\'s the best kitchen faucet brand?',
        answer:
          'Moen, Delta, and Kohler are the top three for reliability and warranty coverage. All three offer lifetime warranties on the cartridge and finish. For budget-friendly options with good quality, Kraus and Pfister are solid choices. Avoid no-name brands — the ceramic cartridges in cheap faucets fail quickly.',
      },
      {
        question: 'Do I need Teflon tape on faucet supply lines?',
        answer:
          'If your faucet comes with braided stainless steel supply lines (most modern faucets do), they use rubber washers inside the connections and do NOT need Teflon tape. Adding tape to a washer-sealed connection can actually prevent it from sealing properly. Only use Teflon tape on threaded pipe-to-pipe connections.',
      },
    ],
    relatedGuides: ['unclog-kitchen-sink', 'fix-leaky-pipe-joint', 'fix-running-toilet'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide 6: Fix a Leaky Pipe Joint
  // ---------------------------------------------------------------------------
  {
    id: 'guide-fix-leaky-pipe-joint',
    slug: 'fix-leaky-pipe-joint',
    title: 'How to Fix a Leaky Pipe Joint',
    excerpt:
      'A dripping pipe joint under the sink or in the basement can cause water damage and mold if left unchecked. Learn how to identify the type of joint and apply the right fix — from simple tightening to full re-soldering.',
    content: `Leaky pipe joints are one of the most common causes of water damage in homes. A single dripping joint can waste hundreds of gallons per month and create conditions for mold growth. The good news is that most leaky joints can be fixed in under an hour with basic tools.

## Types of Pipe Joints

The fix depends on what kind of joint is leaking. Compression fittings (common under sinks) usually just need tightening. Threaded fittings may need new Teflon tape or pipe dope. Soldered copper joints need to be re-soldered. Push-fit joints (SharkBite) may need a new O-ring or replacement fitting.

## Diagnosing the Leak

Before you start, dry the pipe completely with a towel, then wrap it with a paper towel or toilet paper. Run water and wait — the paper will show you exactly where the drip originates, which is often not where the water lands.`,
    category: 'plumbing',
    difficulty: 'intermediate',
    estimatedTime: '30-45 minutes',
    estimatedCost: {
      low: 5,
      mid: 20,
      high: 40,
      diyVsPro: 'A plumber charges $150-$300 for a joint repair. DIY parts cost $5-$40 depending on the joint type.',
    },
    tools: [
      'Adjustable wrench',
      'Tongue-and-groove pliers',
      'Pipe wrench (for threaded joints)',
      'Propane torch (for soldered joints)',
      'Emery cloth or sandpaper',
      'Bucket and towels',
    ],
    materials: [
      'Teflon tape (PTFE tape)',
      'Pipe joint compound (pipe dope)',
      'Compression ferrule and nut (if needed)',
      'Lead-free solder and flux (for copper)',
      'Fiberglass pipe repair tape (for emergency fixes)',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Identify the Joint Type and Leak Location',
        description:
          'Dry the pipe thoroughly and identify what kind of joint you\'re dealing with. Compression fittings have a visible nut and ferrule (sleeve) where the pipe enters the fitting. Threaded joints show visible pipe threads. Soldered copper joints appear as a smooth, silver ring where two copper pieces meet. Run water and use a paper towel to pinpoint the exact drip location.',
        imagePrompt:
          'Side-by-side comparison of four pipe joint types: compression fitting, threaded joint, soldered copper, and push-fit SharkBite, labeled educational diagram',
        proTip:
          'Wipe the joint dry, then wrap it in toilet paper and run water for a minute. The wet spot on the paper shows you the exact leak origin.',
      },
      {
        stepNumber: 2,
        title: 'Shut Off the Water',
        description:
          'Close the nearest shut-off valve upstream of the leak. If there\'s no local valve, shut off the main water supply to the house. Open a faucet downstream of the leak to relieve pressure and drain residual water. Place a bucket under the joint to catch any drips during the repair.',
        imagePrompt:
          'Hand turning a water shut-off valve near a leaky pipe joint, bucket positioned below, basement or under-sink setting',
      },
      {
        stepNumber: 3,
        title: 'Fix a Compression Fitting Leak',
        description:
          'Compression fittings are the most common under-sink joint. First, try tightening the compression nut a quarter turn clockwise with an adjustable wrench. Run water and check. If it still leaks, shut off water, unscrew the nut, slide it back, and inspect the brass ferrule (ring) for damage or misalignment. If the ferrule is scored or cracked, slide it off and replace it with a new one of the same size. Re-seat the pipe into the fitting, slide the ferrule and nut back, and tighten snugly.',
        imagePrompt:
          'Close-up of hands tightening a compression fitting nut with an adjustable wrench under a sink, showing the ferrule and pipe clearly, educational repair shot',
        proTip:
          'When replacing a ferrule, buy a few extras — they\'re only about 50 cents each and having spares saves a trip to the hardware store.',
        warning:
          'Do not overtighten compression fittings. A quarter turn past snug is usually all you need. Overtightening deforms the ferrule and makes the leak worse.',
      },
      {
        stepNumber: 4,
        title: 'Fix a Threaded Joint Leak',
        description:
          'For a leaky threaded joint, unscrew the fitting (turn counterclockwise). Clean the male threads with a wire brush to remove old tape or compound. Wrap new Teflon tape clockwise around the threads — three to five wraps, keeping the tape tight and smooth. Apply a thin layer of pipe joint compound over the tape for a belt-and-suspenders seal. Screw the fitting back on hand-tight, then add one to one-and-a-half turns with a wrench.',
        imagePrompt:
          'Hands wrapping white Teflon tape clockwise around pipe threads, then applying pipe dope, then threading the fitting back on, three-panel instruction',
        proTip:
          'Always wrap Teflon tape in the same direction the fitting screws on (clockwise when facing the end of the pipe). If you wrap it backwards, the tape bunches up and doesn\'t seal.',
      },
      {
        stepNumber: 5,
        title: 'Fix a Soldered Copper Joint Leak',
        description:
          'Soldered joints require more skill. Drain the pipe completely — even a small amount of water prevents solder from bonding. Heat the joint with a propane torch until the old solder melts, then pull the pipes apart with pliers. Clean both surfaces with emery cloth until they\'re shiny. Apply flux to both the pipe exterior and fitting interior. Reassemble, heat the joint evenly with the torch, and touch lead-free solder to the joint — it will wick into the gap by capillary action. Let it cool undisturbed for two minutes.',
        imagePrompt:
          'Person using a propane torch to heat a copper pipe joint, solder being applied to the heated joint, silver solder wicking into the gap, copper pipe close-up',
        warning:
          'Keep a fire extinguisher nearby when soldering. Use a flame protector cloth behind the pipe to prevent heat damage to nearby walls or framing. Never solder near gas lines.',
      },
      {
        stepNumber: 6,
        title: 'Emergency Temporary Fix',
        description:
          'If you need a temporary fix until you can do a proper repair, dry the leaky area thoroughly and wrap it tightly with self-fusing silicone repair tape, overlapping each wrap by half. This tape bonds to itself and creates a waterproof seal that can hold for weeks or months. Alternatively, apply a pipe repair clamp (a stainless steel sleeve that bolts around the pipe over a rubber gasket).',
        imagePrompt:
          'Self-fusing silicone tape being wrapped around a leaky pipe joint, and a stainless steel pipe repair clamp being tightened, two-option emergency fix',
        proTip:
          'Self-fusing silicone tape (like Rescue Tape) is a must-have for any homeowner\'s emergency kit. It works on any pipe material and holds under pressure.',
      },
      {
        stepNumber: 7,
        title: 'Test and Monitor',
        description:
          'Turn the water back on slowly and observe the repaired joint for a full five minutes. Wipe the joint completely dry, then wrap it with a paper towel and leave it for 30 minutes. Check the paper towel for any dampness. A properly repaired joint should be completely dry. Check again 24 hours later to catch any very slow seepage you might have missed initially.',
        imagePrompt:
          'Dry paper towel wrapped around a repaired pipe joint, person checking for dampness after 30 minutes, clean dry joint confirmed, successful repair',
      },
    ],
    tips: [
      'Keep a plumbing emergency kit under your sink: Teflon tape, a compression ferrule assortment, pipe joint compound, and self-fusing silicone tape.',
      'If a joint has leaked once, inspect neighboring joints — corrosion and mineral buildup often affect multiple fittings in the same area.',
      'For copper pipe repairs, use a MAP/PRO gas torch instead of propane — it burns hotter and makes soldering faster and more reliable.',
      'Consider upgrading old brass compression fittings to push-fit (SharkBite) fittings. They install in seconds with no tools and create reliable connections.',
    ],
    warnings: [
      'Always shut off the water supply before disassembling any pipe joint. Know where your main shut-off valve is.',
      'When using a propane torch on copper joints, keep a fire extinguisher within arm\'s reach and use a flame protector cloth to prevent heat damage to surrounding surfaces.',
      'If you discover a corroded or pinhole-leaking pipe (not just the joint), the pipe section likely needs replacement. A joint repair won\'t fix pipe wall failure.',
    ],
    affiliateProducts: [
      {
        id: 'prod-rescue-tape',
        name: 'Rescue Tape Self-Fusing Silicone Tape (1" x 12 ft)',
        description:
          'Emergency repair tape that bonds to itself, not the pipe. Creates a waterproof seal in seconds. Works on any material — copper, PVC, PEX, galvanized. Withstands 950°F and 700 PSI.',
        price: 12.95,
        affiliateUrl: 'https://www.amazon.com/dp/B000NG48SE',
        retailer: 'amazon',
        imageUrl: '/products/rescue-tape.jpg',
        rating: 4.5,
        reviewCount: 9800,
        badge: 'our-pick',
      },
      {
        id: 'prod-oatey-flux',
        name: 'Oatey No. 95 Tinning Flux (1.7 oz)',
        description:
          'Lead-free flux with fine tin particles for pre-tinning copper pipe joints. Creates stronger solder bonds than standard flux. NSF-approved for potable water systems.',
        price: 5.98,
        affiliateUrl: 'https://www.homedepot.com/p/Oatey-Tinning-Flux/100345971',
        retailer: 'homedepot',
        imageUrl: '/products/oatey-flux.jpg',
        rating: 4.7,
        reviewCount: 3400,
      },
      {
        id: 'prod-bernzomatic-ts8000',
        name: 'Bernzomatic TS8000 High-Intensity Trigger Start Torch',
        description:
          'Premium MAP/PRO gas torch with instant trigger ignition. Ideal for copper pipe soldering — heats joints faster and more evenly than standard propane torches.',
        price: 42.99,
        affiliateUrl: 'https://www.amazon.com/dp/B000FPAN6K',
        retailer: 'amazon',
        imageUrl: '/products/bernzomatic-ts8000.jpg',
        rating: 4.7,
        reviewCount: 15600,
        badge: 'best-value',
      },
      {
        id: 'prod-teflon-tape-pack',
        name: 'Harvey\'s PTFE Thread Seal Tape (3-pack, 1/2" x 260")',
        description:
          'Standard white Teflon tape for threaded pipe joints. Three rolls for the price of one. Essential for any plumbing repair toolkit.',
        price: 3.48,
        affiliateUrl: 'https://www.lowes.com/pd/Harvey-PTFE-Tape/1000218855',
        retailer: 'lowes',
        imageUrl: '/products/harvey-teflon-tape.jpg',
        rating: 4.6,
        reviewCount: 7200,
        badge: 'budget',
      },
    ],
    featuredImage: '/guides/fix-leaky-pipe-joint-hero.jpg',
    publishedAt: '2026-02-25T09:00:00Z',
    updatedAt: '2026-03-19T11:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Fix a Leaky Pipe Joint (4 Methods) | Repair & Refinish',
      description:
        'Fix a leaky pipe joint in 45 minutes. Step-by-step instructions for compression fittings, threaded joints, soldered copper, and emergency temporary repairs.',
      keywords: [
        'fix leaky pipe joint',
        'pipe joint leak repair',
        'compression fitting leak',
        'soldering copper pipe',
        'threaded pipe leak',
        'pipe repair tape',
        'DIY pipe repair',
        'leaking pipe under sink',
      ],
      ogImage: '/guides/fix-leaky-pipe-joint-og.jpg',
    },
    faqs: [
      {
        question: 'Can I use plumber\'s putty to fix a pipe joint leak?',
        answer:
          'No. Plumber\'s putty is designed to seal fixtures (like sink drains and faucet bases) to surfaces — it does not create a watertight seal on pressurized pipe joints. For pipe joints, use Teflon tape, pipe joint compound, solder, or replacement fittings.',
      },
      {
        question: 'Why does my pipe joint leak only when the water is on?',
        answer:
          'This indicates a pressure-related leak, which is the most common type. The fitting is not sealed tightly enough to hold back water pressure. Compression fittings need tightening, threaded fittings need tape/compound, and soldered joints need re-soldering.',
      },
      {
        question: 'Is it safe to use a push-fit fitting (SharkBite) as a permanent repair?',
        answer:
          'Yes. Push-fit fittings are code-approved for permanent installations in most jurisdictions. They\'re particularly useful for connecting copper to PEX or CPVC. However, they must remain accessible (not buried behind drywall) for inspection, and they cost more than traditional fittings.',
      },
    ],
    relatedGuides: ['unclog-kitchen-sink', 'replace-kitchen-faucet', 'fix-running-toilet'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide: Install a Garbage Disposal
  // ---------------------------------------------------------------------------
  {
    id: 'guide-install-garbage-disposal',
    slug: 'install-garbage-disposal',
    title: 'How to Install a Garbage Disposal',
    excerpt:
      'Replace a worn-out disposal or add one for the first time. This intermediate guide covers electrical connections, plumbing hookups, and mounting — all in 60-90 minutes with basic tools.',
    content: `A garbage disposal is one of the most-used kitchen appliances, grinding food scraps so they flush through your drain instead of piling up in the trash. Whether you're replacing a dead unit or installing one for the first time, the job is manageable for any DIYer comfortable with basic plumbing and a simple electrical connection.

## Choosing the Right Disposal

Disposals are rated in horsepower. A 1/3 HP unit handles a single person or couple. A 1/2 HP model suits most families. A 3/4 HP or 1 HP unit powers through tough scraps like chicken bones and fibrous vegetables. Higher HP also means quieter operation and less jamming. For most households, 1/2 HP is the sweet spot of performance and price.

## Before You Start

Check under your sink for an existing electrical outlet or hardwired connection. Most disposals plug into a switched outlet inside the cabinet. If you don't have one, you'll need an electrician to install a dedicated circuit and switch — that part is not DIY-friendly for most homeowners.`,
    category: 'plumbing',
    difficulty: 'intermediate',
    estimatedTime: '60-90 minutes',
    estimatedCost: {
      low: 80,
      mid: 150,
      high: 250,
      diyVsPro: 'A plumber charges $250-$500 for disposal installation. DIY you pay only for the unit ($80-$250) and possibly a power cord ($10).',
    },
    tools: [
      'Plumber\'s putty or mounting gasket',
      'Screwdriver (flathead and Phillips)',
      'Tongue-and-groove pliers',
      'Hex wrench (included with disposal)',
      'Bucket and towels',
      'Wire strippers (if hardwiring)',
      'Hammer',
    ],
    materials: [
      'Garbage disposal unit with mounting hardware',
      'Power cord (if not included)',
      'Discharge tube and gasket',
      'Plumber\'s putty',
      'Wire nuts (if hardwiring)',
      'Dishwasher drain connector (if applicable)',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Disconnect Power and Remove the Old Disposal',
        description:
          'Turn off the circuit breaker for the disposal. If replacing an existing unit, unplug it from the outlet under the sink (or disconnect the hardwired connection). Place a bucket under the disposal. Disconnect the discharge pipe and dishwasher drain hose. Support the disposal with one hand and turn the lower mounting ring counterclockwise to release it from the mounting assembly. The unit will drop free — it\'s heavy (8-15 pounds), so be ready.',
        imagePrompt:
          'Hand supporting a garbage disposal while turning the mounting ring to release it, bucket below, under-sink view, removal process',
        warning:
          'Always disconnect power before working on a disposal. Even with the switch off, the outlet may still be live if it\'s on a different circuit.',
      },
      {
        stepNumber: 2,
        title: 'Remove the Old Mounting Assembly (If Incompatible)',
        description:
          'If your new disposal uses the same mounting system as the old one (most InSinkErator models share a mount), you can reuse it. If not, loosen the three mounting screws, remove the snap ring from inside the sink drain opening, and push the flange up through the sink hole. Clean all old putty from around the drain opening with a plastic scraper.',
        imagePrompt:
          'Snap ring being removed from the mounting assembly under the sink drain, old flange being pushed up through the drain hole, cleaning putty residue',
        proTip:
          'Most disposals use the InSinkErator-style EZ Mount or a 3-bolt mounting system. Check compatibility before buying — reusing the existing mount saves 30 minutes.',
      },
      {
        stepNumber: 3,
        title: 'Install the New Mounting Assembly',
        description:
          'Roll a pencil-thick rope of plumber\'s putty and press it around the underside of the new sink flange. Push the flange down through the drain hole from above. From below, slide the fiber gasket, metal backup ring, and mounting ring onto the flange. Install the snap ring into the groove on the flange — it holds everything in place. Tighten the three mounting screws evenly until the flange sits flush and putty squeezes out slightly. Wipe away excess putty from above.',
        imagePrompt:
          'Sink flange with plumber\'s putty being inserted from above, then mounting hardware being assembled from below — gasket, backup ring, snap ring, screws tightened evenly',
        proTip:
          'Tighten the three mounting screws in a star pattern (like lug nuts) to ensure even pressure and a leak-free seal.',
      },
      {
        stepNumber: 4,
        title: 'Attach the Power Cord',
        description:
          'If your disposal doesn\'t have a pre-attached power cord (most don\'t), remove the electrical cover plate on the bottom. Thread the power cord through the strain relief fitting. Connect the black wire to black, white to white, and green to the green ground screw using wire nuts. Tighten the strain relief to secure the cord. Replace the cover plate. If your setup is hardwired, make the same connections with the house wiring.',
        imagePrompt:
          'Bottom of garbage disposal with electrical cover removed, power cord wires being connected with wire nuts — black to black, white to white, green to ground screw',
        warning:
          'Ensure the breaker is OFF before making any electrical connections. Double-check that wire nuts are tight and no bare copper is exposed outside the nuts.',
      },
      {
        stepNumber: 5,
        title: 'Knock Out the Dishwasher Plug (If Needed)',
        description:
          'If you have a dishwasher that drains through the disposal, locate the dishwasher inlet on the side of the disposal. Use a hammer and screwdriver to knock the plastic plug inward. Reach inside the disposal and remove the loose plug — if you leave it inside, it will cause a jam. Connect the dishwasher drain hose to this inlet with a hose clamp.',
        imagePrompt:
          'Hammer and screwdriver knocking out the dishwasher drain plug from inside the disposal inlet, then retrieving the loose plug, dishwasher hose being connected',
        warning:
          'Always remove the knockout plug from inside the disposal after punching it out. A plug left inside will immediately jam the grinder.',
      },
      {
        stepNumber: 6,
        title: 'Mount the Disposal',
        description:
          'Lift the disposal and align the three tabs on the unit with the mounting ring under the sink. Turn the lower mounting ring clockwise until all three tabs lock into place — you\'ll hear and feel them click. Some units come with a wrenchette tool to tighten the ring the final quarter turn. The disposal should hang securely from the mounting assembly with no wobble.',
        imagePrompt:
          'Garbage disposal being lifted and aligned with the mounting ring, turning to lock into place, wrenchette tool for final tightening, secure mount',
      },
      {
        stepNumber: 7,
        title: 'Connect the Discharge Pipe',
        description:
          'Attach the discharge tube to the side outlet on the disposal using the provided gasket and flange. Connect the discharge tube to your sink\'s P-trap using a slip joint connection. Make sure the discharge tube slopes downward from the disposal to the P-trap — water needs to flow by gravity. Hand-tighten all slip joints, then snug with pliers (quarter turn past hand-tight).',
        imagePrompt:
          'Discharge tube being connected from the disposal side outlet to the P-trap, proper downward slope shown, slip joint connections being tightened',
        proTip:
          'If the discharge tube is too long, cut it with a hacksaw. If it\'s too short, buy a longer tube or an extension — don\'t force a connection that doesn\'t reach.',
      },
      {
        stepNumber: 8,
        title: 'Test for Leaks and Proper Operation',
        description:
          'Turn the water on and let it run through the disposal for a minute. Check every connection for leaks: the sink flange, the mounting assembly, the discharge tube, and the dishwasher hose. Tighten any dripping connections. Turn on the circuit breaker and flip the disposal switch. Run cold water and feed small amounts of food waste to test grinding. The disposal should grind smoothly without excessive vibration or noise.',
        imagePrompt:
          'Water running through a new garbage disposal, checking underneath for leaks with a flashlight, then testing with food scraps and cold water running, successful install',
        proTip:
          'Always run cold water when using the disposal. Cold water solidifies grease so the disposal can grind it up. Hot water keeps grease liquid, letting it coat the drain pipe downstream.',
      },
    ],
    tips: [
      'Run cold water for 15 seconds before and after grinding food. This flushes ground particles through the drain line.',
      'The InSinkErator Badger 5 is the best-selling disposal for a reason — reliable, affordable, and compatible with the most common mounting system.',
      'Never put fibrous foods (celery, artichokes, corn husks), grease, pasta, rice, or coffee grounds down the disposal. These items clog the drain or jam the grinder.',
      'If the disposal jams, turn it off, use the hex wrench in the bottom of the unit to manually turn the grinder, then press the reset button.',
      'Freshen a smelly disposal by grinding ice cubes and a lemon wedge with cold water running.',
    ],
    warnings: [
      'Always disconnect power at the breaker before working on the disposal\'s electrical connections.',
      'Never put your hand inside a disposal — even when it\'s off. Use pliers or tongs to retrieve dropped items.',
      'If you don\'t have a switched outlet under the sink, hire an electrician to install one. Running new electrical is not a beginner project.',
    ],
    affiliateProducts: [
      {
        id: 'prod-insinkerator-badger5',
        name: 'InSinkErator Badger 5 1/2 HP Garbage Disposal',
        description:
          'The best-selling disposal in America. 1/2 HP motor handles everyday food waste. Galvanized steel grind components. Quick-lock mounting system. 2-year warranty.',
        price: 99.00,
        affiliateUrl: 'https://www.homedepot.com/p/InSinkErator-Badger-5/100062460',
        retailer: 'homedepot',
        imageUrl: '/products/insinkerator-badger5.jpg',
        rating: 4.4,
        reviewCount: 18700,
        badge: 'Best Seller',
      },
      {
        id: 'prod-insinkerator-evolution',
        name: 'InSinkErator Evolution Compact 3/4 HP Disposal',
        description:
          'Two-stage grind technology handles tough scraps. SoundSeal technology for quiet operation. Stainless steel components. 4-year warranty. Worth the upgrade.',
        price: 209.00,
        affiliateUrl: 'https://www.amazon.com/dp/B000BQP68C',
        retailer: 'amazon',
        imageUrl: '/products/insinkerator-evolution.jpg',
        rating: 4.6,
        reviewCount: 9400,
        badge: 'Best Value',
      },
      {
        id: 'prod-disposal-power-cord',
        name: 'InSinkErator CRD-00 Power Cord Kit',
        description:
          'Pre-wired 3-foot power cord with grounded plug for InSinkErator disposals. UL-listed. Includes strain relief fitting. Required if your disposal doesn\'t come with a cord.',
        price: 12.18,
        affiliateUrl: 'https://www.amazon.com/dp/B000BQWWEE',
        retailer: 'amazon',
        imageUrl: '/products/insinkerator-cord.jpg',
        rating: 4.7,
        reviewCount: 14200,
      },
      {
        id: 'prod-waste-king-legend',
        name: 'Waste King Legend Series 1/2 HP Disposal (L-2600)',
        description:
          'Continuous feed disposal with permanent magnet motor. Stainless steel impellers. EZ Mount for easy installation. Lifetime limited warranty. Great budget alternative.',
        price: 69.99,
        affiliateUrl: 'https://www.amazon.com/dp/B000B0CKAG',
        retailer: 'amazon',
        imageUrl: '/products/waste-king-l2600.jpg',
        rating: 4.3,
        reviewCount: 11800,
      },
    ],
    featuredImage: '/images/guides/install-garbage-disposal.jpg',
    publishedAt: '2025-11-10T09:00:00Z',
    updatedAt: '2026-02-15T14:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Install a Garbage Disposal (DIY Guide) | Repair & Refinish',
      description:
        'Install or replace a garbage disposal in 60-90 minutes. Step-by-step guide covering mounting, electrical connections, plumbing hookups, and testing.',
      keywords: [
        'install garbage disposal',
        'replace garbage disposal',
        'garbage disposal installation',
        'how to install disposal',
        'InSinkErator installation',
        'kitchen disposal DIY',
        'garbage disposal wiring',
      ],
    },
    faqs: [
      {
        question: 'Can I install a disposal if I\'ve never had one?',
        answer:
          'Yes, but you\'ll need a switched electrical outlet under the sink. If you don\'t already have one, an electrician will need to install a dedicated circuit and wall switch. The plumbing and mounting are straightforward DIY work.',
      },
      {
        question: 'How long do garbage disposals last?',
        answer:
          'A quality disposal lasts 8-15 years with normal use. Signs it needs replacement include frequent jams, persistent leaks from the housing (not connections), excessive noise or vibration, and a persistent foul smell despite cleaning.',
      },
      {
        question: 'What should I NOT put in a garbage disposal?',
        answer:
          'Avoid grease/oil (coats and clogs pipes), fibrous vegetables (celery, corn husks, artichokes), starchy foods (pasta, rice, potato peels — they expand and clog), bones larger than chicken bones, fruit pits, coffee grounds (accumulate in pipes), and any non-food items.',
      },
      {
        question: 'Do I need to replace the mounting assembly when replacing a disposal?',
        answer:
          'Not if the new disposal uses the same mounting system. Most InSinkErator models share the same Quick Lock mount. If switching brands (e.g., InSinkErator to Waste King), you\'ll likely need to replace the mount since they use different systems.',
      },
    ],
    relatedGuides: ['unclog-kitchen-sink', 'replace-kitchen-faucet', 'fix-running-toilet'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide: Fix Low Water Pressure
  // ---------------------------------------------------------------------------
  {
    id: 'guide-fix-low-water-pressure',
    slug: 'fix-low-water-pressure',
    title: 'How to Fix Low Water Pressure',
    excerpt:
      'Weak water flow driving you crazy? Low water pressure is usually caused by clogged aerators, partially closed valves, or mineral buildup in pipes. Diagnose and fix the most common causes in 30-60 minutes.',
    content: `Low water pressure makes showers miserable, faucets trickle, and washing machines take forever to fill. Before you call a plumber, know that the most common causes are simple fixes you can handle yourself — often in under 30 minutes with no special tools.

## Localized vs. Whole-House

First, determine if the low pressure affects one fixture, one room, or the entire house. A single slow faucet is usually a clogged aerator. One bathroom with low pressure may have a partially closed valve. Whole-house low pressure could be a main valve issue, a failing pressure regulator, or a municipal supply problem.

## Check With Your Neighbors

If your whole house has suddenly lost pressure, ask your neighbors if they're experiencing the same thing. If they are, it's a municipal supply issue — call your water company. If it's just your house, the problem is in your plumbing system.`,
    category: 'plumbing',
    difficulty: 'beginner',
    estimatedTime: '30-60 minutes',
    estimatedCost: {
      low: 0,
      mid: 15,
      high: 50,
      diyVsPro: 'A plumber charges $150-$350 for a pressure diagnosis. Most DIY fixes cost $0-$50 in parts.',
    },
    tools: [
      'Adjustable wrench or pliers',
      'Screwdriver',
      'Toothbrush (for cleaning aerators)',
      'Bucket',
      'White vinegar',
    ],
    materials: [
      'Replacement faucet aerators (if corroded)',
      'White vinegar (for soaking mineral-clogged parts)',
      'Replacement pressure regulator (if faulty, $25-$50)',
      'Teflon tape',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Determine If the Problem Is Localized',
        description:
          'Turn on faucets throughout the house one at a time — kitchen, bathrooms, laundry, outdoor hose bibs. Note which fixtures have low pressure. If only one faucet is affected, the problem is at that fixture (likely a clogged aerator). If an entire bathroom is low, check the shut-off valves for that room. If the whole house is low, the issue is the main supply — move to step 4.',
        imagePrompt:
          'Person testing water pressure at multiple faucets throughout the house, noting which ones have low flow, diagnostic checklist approach',
        proTip:
          'Test both hot and cold separately. If only hot water is low, the problem is at or after the water heater — possibly a partially closed hot water outlet valve.',
      },
      {
        stepNumber: 2,
        title: 'Clean or Replace Clogged Aerators',
        description:
          'The aerator is the screened tip screwed onto the end of the faucet spout. Unscrew it by hand or with pliers (wrap the jaws in tape to avoid scratching the finish). Disassemble the aerator — you\'ll find a screen, a flow restrictor, and gaskets. Soak all parts in white vinegar for 30 minutes to dissolve mineral deposits. Scrub the screen with a toothbrush. Reassemble and screw it back on. If the screen is badly corroded, buy a new aerator for $3-$5.',
        imagePrompt:
          'Faucet aerator being unscrewed, disassembled showing the screen and flow restrictor, soaking in vinegar, then scrubbed clean and reinstalled, before-and-after flow',
        proTip:
          'Shower heads clog the same way. Unscrew the shower head, soak it in a bag of vinegar tied around it overnight, and scrub the nozzle holes with a toothpick.',
      },
      {
        stepNumber: 3,
        title: 'Check All Shut-Off Valves',
        description:
          'Locate every shut-off valve in the affected area — under sinks, behind toilets, and at the water heater. All valves should be fully open (turned counterclockwise until they stop). Gate valves (round handles) are especially notorious for being left partially closed after repairs. A valve that\'s only 50% open dramatically reduces water flow. Also check the main shut-off valve where water enters the house.',
        imagePrompt:
          'Hand turning a shut-off valve fully counterclockwise to the open position under a sink, then checking the main house shut-off valve, valve positions labeled',
      },
      {
        stepNumber: 4,
        title: 'Test the Main Water Pressure',
        description:
          'Screw a water pressure gauge ($10 at any hardware store) onto an outdoor hose bib or the laundry faucet. Turn the faucet on fully with no other fixtures running. Normal household pressure is 40-60 PSI. Below 40 PSI is low. Above 80 PSI is too high (and can damage plumbing). If pressure at the gauge is normal but fixtures are slow, the problem is internal (clogged pipes or fixtures). If the gauge reads low, move to the next step.',
        imagePrompt:
          'Water pressure gauge screwed onto an outdoor hose bib, reading showing PSI, person noting the measurement, diagnostic testing tool in use',
        proTip:
          'A water pressure gauge costs $8-$12 and is an invaluable diagnostic tool. Keep one in your plumbing toolbox for future troubleshooting.',
      },
      {
        stepNumber: 5,
        title: 'Adjust or Replace the Pressure Regulator',
        description:
          'Many homes have a pressure-reducing valve (PRV) or pressure regulator on the main water line, usually near the meter or where the line enters the house. It looks like a bell-shaped brass fitting with an adjustable screw on top. Turn the adjustment screw clockwise to increase pressure (small turns — 1/4 turn at a time, then re-test). If adjusting doesn\'t help, the regulator may have failed and needs replacement — a $25-$50 part.',
        imagePrompt:
          'Brass pressure-reducing valve on a main water line, adjustment screw being turned clockwise with a wrench, pressure being increased, close-up identification',
        warning:
          'Don\'t set pressure above 80 PSI. Excessive pressure damages fixtures, bursts hoses, and can cause pipe joints to fail. If you need high pressure, 60 PSI is ideal.',
      },
      {
        stepNumber: 6,
        title: 'Flush the Water Heater (For Hot Water Issues)',
        description:
          'If only hot water pressure is low, mineral sediment may have built up in the water heater tank, restricting the hot water outlet. Turn off the heater (gas or electric). Connect a garden hose to the drain valve at the bottom of the tank and run it to a floor drain or outside. Open the drain valve and let water flow until it runs clear. Close the valve, refill the tank, and restart the heater. This should restore hot water flow.',
        imagePrompt:
          'Garden hose connected to water heater drain valve, sediment-filled water draining out, then running clear, water heater flush process',
        proTip:
          'Flush your water heater annually. Sediment buildup not only reduces pressure but also reduces heating efficiency and shortens the heater\'s lifespan.',
      },
      {
        stepNumber: 7,
        title: 'Check for Galvanized Pipe Corrosion',
        description:
          'If your home has galvanized steel pipes (gray metal, common in homes built before 1970), internal corrosion may be restricting flow. Look at exposed pipes in the basement or crawl space. If the pipes appear rusty or have mineral buildup at joints, the internal diameter is likely narrowed. Unfortunately, the only permanent fix for corroded galvanized pipes is re-piping with copper or PEX — a professional job that costs $2,000-$5,000.',
        imagePrompt:
          'Corroded galvanized steel pipe showing mineral buildup at joints and rust, compared to a clean copper pipe, educational diagnostic comparison',
      },
    ],
    tips: [
      'Clean faucet aerators every 6 months to prevent mineral buildup from reducing flow. It takes 2 minutes per faucet.',
      'A $10 water pressure gauge from any hardware store is the single best diagnostic tool for pressure problems.',
      'If pressure drops only when multiple fixtures are in use, your supply line may be undersized. This is common in older homes with 1/2-inch supply lines instead of 3/4-inch.',
      'Running a water softener can prevent mineral buildup that causes low pressure over time.',
    ],
    warnings: [
      'Never set your pressure regulator above 80 PSI. Excessive pressure damages fixtures, appliances, and pipe joints.',
      'If you suspect a water main leak (low pressure plus unusually high water bill), call your water company or a plumber immediately.',
      'If adjusting the pressure regulator doesn\'t restore pressure, don\'t force it — the regulator may have failed internally. Replace it or call a plumber.',
    ],
    affiliateProducts: [
      {
        id: 'prod-watts-pressure-gauge',
        name: 'Watts 276H300 Water Pressure Test Gauge (0-300 PSI)',
        description:
          'Screw-on gauge for testing household water pressure. Brass construction with hose bib connection. Easy-to-read dial. Essential diagnostic tool for any plumbing troubleshooting.',
        price: 11.34,
        affiliateUrl: 'https://www.amazon.com/dp/B000JOK19A',
        retailer: 'amazon',
        imageUrl: '/products/watts-pressure-gauge.jpg',
        rating: 4.5,
        reviewCount: 8700,
        badge: 'Best Value',
      },
      {
        id: 'prod-watts-pressure-regulator',
        name: 'Watts 3/4" LF25AUB-Z3 Water Pressure Reducing Valve',
        description:
          'Lead-free brass pressure-reducing valve for residential use. Adjustable from 25-75 PSI. Factory set at 50 PSI. Fits standard 3/4-inch main supply lines.',
        price: 48.64,
        affiliateUrl: 'https://www.homedepot.com/p/Watts-Pressure-Reducing/312637821',
        retailer: 'homedepot',
        imageUrl: '/products/watts-prv.jpg',
        rating: 4.4,
        reviewCount: 3200,
      },
      {
        id: 'prod-danco-aerator-kit',
        name: 'Danco Faucet Aerator Variety Pack (6-piece)',
        description:
          'Assorted aerator sizes for most standard faucets. Includes male and female threads in common sizes. Six aerators cover most household fixtures. Great to keep on hand.',
        price: 7.98,
        affiliateUrl: 'https://www.homedepot.com/p/Danco-Aerator-Pack/312845620',
        retailer: 'homedepot',
        imageUrl: '/products/danco-aerator-pack.jpg',
        rating: 4.3,
        reviewCount: 5100,
        badge: 'Budget Pick',
      },
    ],
    featuredImage: '/images/guides/fix-low-water-pressure.jpg',
    publishedAt: '2025-10-22T09:00:00Z',
    updatedAt: '2026-01-18T11:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Fix Low Water Pressure (7 Common Causes) | Repair & Refinish',
      description:
        'Diagnose and fix low water pressure in 30-60 minutes. Covers clogged aerators, shut-off valves, pressure regulators, and more. Save $150+ over a plumber visit.',
      keywords: [
        'fix low water pressure',
        'low water pressure house',
        'increase water pressure',
        'clogged aerator',
        'water pressure regulator',
        'weak water flow',
        'low pressure faucet',
        'water pressure gauge',
      ],
    },
    faqs: [
      {
        question: 'Why is only my hot water pressure low?',
        answer:
          'Low hot-water-only pressure usually means sediment buildup in the water heater, a partially closed valve on the hot water outlet, or corroded pipes between the heater and fixtures. Flushing the water heater and checking the outlet valve are the first two steps.',
      },
      {
        question: 'What is normal household water pressure?',
        answer:
          'Normal residential water pressure is 40-60 PSI. Below 40 PSI feels noticeably low. Above 80 PSI is too high and risks damaging plumbing fixtures and appliances. You can test your pressure with a $10 gauge from any hardware store.',
      },
      {
        question: 'Can a water softener cause low water pressure?',
        answer:
          'Yes. A water softener that needs regeneration or has a clogged resin bed can restrict flow significantly. Check your softener settings, regenerate manually, and see if pressure improves. Also check the bypass valve — it may have been left partially engaged.',
      },
    ],
    relatedGuides: ['replace-kitchen-faucet', 'fix-leaky-pipe-joint', 'unclog-kitchen-sink'],
    status: 'published',
  },
];

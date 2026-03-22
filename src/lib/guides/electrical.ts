import type { Guide } from '@/types';
import { defaultAuthor } from '../site-config';

export const electricalGuides: Guide[] = [
  // ---------------------------------------------------------------------------
  // Guide 7: Replace a Light Switch
  // ---------------------------------------------------------------------------
  {
    id: 'guide-replace-light-switch',
    slug: 'replace-light-switch',
    title: 'How to Replace a Light Switch',
    excerpt:
      'A broken or outdated light switch is a quick fix that takes about 20 minutes. This guide walks you through safely replacing a single-pole switch, from killing the power to testing the finished connection.',
    content: `Replacing a light switch is one of the simplest electrical tasks a homeowner can do. Whether your switch is broken, you want to upgrade to a modern style, or you're adding a dimmer, the process is straightforward once you understand basic safety procedures.

## Single-Pole vs. Three-Way

This guide covers single-pole switches, which control a light from one location. If your light is controlled from two different switches (like at the top and bottom of a staircase), that's a three-way switch — same process but with one extra wire.

## Safety First

Electricity kills. Always turn off the breaker before touching any wires, and always verify the power is off with a voltage tester. Never trust that the breaker label is correct.`,
    category: 'electrical',
    difficulty: 'beginner',
    estimatedTime: '15-20 minutes',
    estimatedCost: {
      low: 3,
      mid: 8,
      high: 15,
      diyVsPro: 'An electrician charges $100-$200 for a simple switch replacement. A new switch costs $3-$15.',
    },
    tools: [
      'Flathead screwdriver',
      'Phillips screwdriver',
      'Non-contact voltage tester',
      'Wire stripper',
      'Needle-nose pliers',
    ],
    materials: [
      'New single-pole light switch',
      'Wire nuts (if needed)',
      'Electrical tape',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Turn Off the Power at the Breaker',
        description:
          'Go to your electrical panel and turn off the breaker that controls the switch you\'re replacing. Flip the light switch a few times to confirm the light doesn\'t turn on. Never rely on the breaker labels alone — they\'re often mislabeled. Use a non-contact voltage tester in the next step to be completely sure.',
        imagePrompt:
          'Hand flipping a breaker switch to the OFF position in an electrical panel, clear label visible, safety-first approach',
        warning:
          'Never work on electrical wiring with the power on. Electrocution can cause serious injury or death. Always verify power is off with a voltage tester.',
      },
      {
        stepNumber: 2,
        title: 'Remove the Cover Plate and Test for Power',
        description:
          'Unscrew the switch cover plate and set it aside. Before touching any wires, hold a non-contact voltage tester near each wire connected to the switch. The tester should show no voltage (no beep, no light). Test each wire individually, including the ground wire. If the tester detects voltage, stop — go back to the panel and find the correct breaker.',
        imagePrompt:
          'Non-contact voltage tester being held near wires on a light switch, showing no voltage detected, cover plate removed, safety verification step',
        proTip:
          'Test your voltage tester on a known live outlet first to make sure the tester itself is working. A dead tester gives false confidence.',
      },
      {
        stepNumber: 3,
        title: 'Remove the Old Switch',
        description:
          'Unscrew the two mounting screws that hold the switch to the electrical box. Gently pull the switch out of the box, being careful not to touch the side terminals. Note which wires connect where — take a photo for reference. A single-pole switch has two brass-colored screw terminals (for the hot wires) and one green screw (for the ground wire). Loosen the terminal screws and unhook the wires.',
        imagePrompt:
          'Light switch being pulled out of the electrical box, wires visible on terminal screws, hands using screwdriver to loosen connections, close-up detail',
        proTip:
          'If the wires are connected by pushing into holes on the back of the switch (backstab connections), insert a small flathead screwdriver into the release slot next to the hole to free the wire.',
      },
      {
        stepNumber: 4,
        title: 'Prepare the Wires',
        description:
          'Inspect the wire ends. If they\'re nicked, corroded, or have a short stripped section, use wire strippers to cut off the old end and strip a fresh 3/4 inch of insulation. Use needle-nose pliers to form a clockwise hook on each wire end. The hook should wrap about 3/4 of the way around the screw terminal.',
        imagePrompt:
          'Wire strippers stripping insulation from a copper wire, then needle-nose pliers bending the bare end into a hook shape, two-step process, close-up',
      },
      {
        stepNumber: 5,
        title: 'Connect the New Switch',
        description:
          'Hook each hot wire (black or red) clockwise around one of the brass terminal screws on the new switch. Tighten each screw firmly — the wire should be snug under the screw head with no exposed copper visible beyond the screw. Connect the bare copper or green ground wire to the green ground screw. For a single-pole switch, it doesn\'t matter which hot wire goes to which brass terminal.',
        imagePrompt:
          'Hands connecting a black wire to a brass terminal screw on a new white light switch, wire hooked clockwise, screwdriver tightening, clear instructional angle',
        proTip:
          'Always hook wires clockwise around screws. When you tighten the screw (clockwise), it pulls the wire tighter under the screw head. A counterclockwise hook pushes the wire out.',
        warning:
          'If you see a white wire connected to the switch, it may be acting as a hot wire (called a switch leg). Mark it with black electrical tape so future homeowners know it\'s hot, not neutral.',
      },
      {
        stepNumber: 6,
        title: 'Mount the Switch and Finish',
        description:
          'Carefully fold the wires back into the electrical box in an accordion pattern (don\'t just cram them). Push the switch into the box and secure it with the two mounting screws. Make sure the switch sits straight — adjust the screws on the mounting ears if needed. Attach the cover plate and screw it in snugly but not so tight that it cracks.',
        imagePrompt:
          'New light switch being mounted flush in the electrical box, wires neatly folded inside, cover plate being attached, clean finished result',
      },
      {
        stepNumber: 7,
        title: 'Restore Power and Test',
        description:
          'Turn the breaker back on at the electrical panel. Flip the new switch on and off to confirm the light works properly. If the light doesn\'t work, turn the breaker off and recheck your wire connections. The most common issue is a loose wire that slipped off a terminal screw during installation.',
        imagePrompt:
          'Finger flipping a newly installed light switch, light turning on in a room, successful completion, clean modern switch plate',
      },
    ],
    tips: [
      'Buy a few extra switches when you\'re at the store. They cost under $2 each and you\'ll save a trip next time one fails.',
      'Upgrade to a decorator-style (Decora) rocker switch for a modern look. They\'re the same price as toggle switches and easier to operate.',
      'If you want a dimmer, buy a dimmer switch rated for the wattage and bulb type (LED, CFL, incandescent) you\'re using.',
      'Label your breaker panel correctly while you have things identified. Future you will be grateful.',
    ],
    warnings: [
      'Always verify power is off with a non-contact voltage tester before touching any wires. Breaker labels are frequently wrong.',
      'If you find aluminum wiring (silver-colored instead of copper), stop and call a licensed electrician. Aluminum wiring requires special connectors and techniques.',
      'If the electrical box is overcrowded with wires, don\'t force the switch in. Box fill calculations are a code requirement — consult an electrician if needed.',
    ],
    affiliateProducts: [
      {
        id: 'prod-klein-ncvt',
        name: 'Klein Tools NCVT-1P Non-Contact Voltage Tester',
        description:
          'Detects voltage from 50-1000V AC without touching wires. Bright LED and audible alarm. Auto power-off saves battery. The tool every homeowner needs before touching anything electrical.',
        price: 17.87,
        affiliateUrl: 'https://www.amazon.com/dp/B00CJLM3NW',
        retailer: 'amazon',
        imageUrl: '/products/klein-ncvt.jpg',
        rating: 4.7,
        reviewCount: 42300,
        badge: 'our-pick',
      },
      {
        id: 'prod-leviton-decora',
        name: 'Leviton Decora 15A Single-Pole Switch (10-pack)',
        description:
          'Clean, modern rocker-style switch in white. Commercial-grade quality at a residential price. Includes matching wall plate screws.',
        price: 23.70,
        affiliateUrl: 'https://www.homedepot.com/p/Leviton-Decora-Switch/100356966',
        retailer: 'homedepot',
        imageUrl: '/products/leviton-decora-switch.jpg',
        rating: 4.8,
        reviewCount: 8700,
        badge: 'best-value',
      },
      {
        id: 'prod-lutron-dimmer',
        name: 'Lutron Diva LED+ Dimmer Switch',
        description:
          'Smooth slide dimmer with rocker on/off. Works with dimmable LEDs, CFLs, halogen, and incandescent. Preset feature remembers your favorite light level.',
        price: 23.47,
        affiliateUrl: 'https://www.lowes.com/pd/Lutron-Diva/1000443315',
        retailer: 'lowes',
        imageUrl: '/products/lutron-diva.jpg',
        rating: 4.6,
        reviewCount: 12400,
      },
    ],
    featuredImage: '/guides/replace-light-switch-hero.jpg',
    publishedAt: '2026-02-12T09:00:00Z',
    updatedAt: '2026-03-18T15:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Replace a Light Switch (Safe DIY Guide) | Repair & Refinish',
      description:
        'Replace a light switch safely in 20 minutes. Step-by-step guide covering breaker safety, voltage testing, wire connections, and switch installation.',
      keywords: [
        'replace light switch',
        'change light switch',
        'how to wire a light switch',
        'install dimmer switch',
        'single pole switch',
        'DIY electrical repair',
        'light switch wiring',
      ],
      ogImage: '/guides/replace-light-switch-og.jpg',
    },
    faqs: [
      {
        question: 'What\'s the difference between a single-pole and three-way switch?',
        answer:
          'A single-pole switch controls a light from one location and has two brass terminals plus a ground. A three-way switch controls a light from two locations (like top and bottom of stairs) and has two brass terminals, one black "common" terminal, and a ground. They\'re not interchangeable.',
      },
      {
        question: 'Can I install a dimmer switch in place of a regular switch?',
        answer:
          'Yes, as long as the dimmer is rated for your bulb type. LED bulbs require LED-compatible dimmers. A standard incandescent dimmer will cause LED bulbs to flicker, buzz, or not dim properly. Check the dimmer packaging for a compatible bulb list.',
      },
      {
        question: 'Why does my new switch feel warm?',
        answer:
          'Dimmer switches normally feel slightly warm to the touch — this is the electronics dissipating a small amount of heat. If a standard on/off switch feels warm, there\'s a problem: likely a loose wire connection causing resistance. Turn off the breaker and tighten all connections.',
      },
    ],
    relatedGuides: ['install-ceiling-fan', 'add-usb-outlet', 'replace-thermostat'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide 8: Install a Ceiling Fan
  // ---------------------------------------------------------------------------
  {
    id: 'guide-install-ceiling-fan',
    slug: 'install-ceiling-fan',
    title: 'How to Install a Ceiling Fan',
    excerpt:
      'Replace a boring light fixture with a ceiling fan for year-round comfort. This intermediate guide covers electrical box requirements, proper mounting, wiring, and blade balancing for a wobble-free installation.',
    content: `A ceiling fan is one of the most practical upgrades you can make. It cools rooms in summer, circulates warm air in winter, and reduces energy costs year-round. If you already have a ceiling light fixture, you have the wiring in place — you just need to upgrade the electrical box and mount the fan.

## The Critical First Step

Before you buy a fan, you must verify that your ceiling electrical box is rated for fan support. Ceiling fans weigh 25-50 pounds and vibrate during operation. A standard light fixture box will fail — the fan could fall. Fan-rated boxes are labeled "Acceptable for Fan Support" and are secured directly to a ceiling joist or with a fan brace bar.

## Choosing the Right Fan Size

A 42-inch fan suits rooms up to 144 sq ft. A 52-inch fan works for rooms 144-225 sq ft. Larger rooms need 60+ inches. The fan should hang at least 7 feet above the floor and 10 inches below the ceiling for optimal airflow.`,
    category: 'electrical',
    difficulty: 'intermediate',
    estimatedTime: '90 minutes',
    estimatedCost: {
      low: 100,
      mid: 200,
      high: 300,
      diyVsPro: 'An electrician charges $200-$450 for ceiling fan installation. DIY you pay only for the fan ($100-$300) and possibly a fan-rated box ($15-$25).',
    },
    tools: [
      'Non-contact voltage tester',
      'Phillips and flathead screwdrivers',
      'Adjustable wrench',
      'Wire strippers',
      'Pliers',
      'Drill with bits',
      'Step ladder',
      'Helper (second person)',
    ],
    materials: [
      'Ceiling fan with mounting hardware',
      'Fan-rated electrical box (if needed)',
      'Fan brace bar (if no joist access)',
      'Wire nuts',
      'Electrical tape',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Turn Off Power and Remove the Old Fixture',
        description:
          'Turn off the breaker that controls the ceiling fixture. Use a non-contact voltage tester to verify the power is off at the fixture. Remove the existing light fixture by unscrewing the mounting screws or canopy nut, disconnecting the wire nuts, and lowering the fixture. Inspect the electrical box attached to the ceiling.',
        imagePrompt:
          'Person on step ladder removing a ceiling light fixture, wire connections visible, non-contact voltage tester nearby, bright well-lit room',
        warning:
          'Always verify power is off with a voltage tester, not just by flipping the switch. Someone may have wired the fixture to a different circuit than you expect.',
      },
      {
        stepNumber: 2,
        title: 'Verify or Install a Fan-Rated Electrical Box',
        description:
          'Check the existing box for a label that reads "Acceptable for Fan Support." If the box is not fan-rated, you must replace it. If the box is attached directly to a joist, swap it for a fan-rated box screwed into the joist. If there\'s no joist access, install a fan brace bar: push it through the hole, expand it between the joists, and attach the fan-rated box to the brace.',
        imagePrompt:
          'Expanding fan brace bar being installed between ceiling joists through the electrical box hole, then a fan-rated box being attached, step-by-step ceiling installation',
        proTip:
          'If you can see "For Fixture Support Only" or "50 lbs Max" on the box, it\'s not fan-rated. The fan brace bar is the easiest solution when you can\'t access the attic.',
        warning:
          'A ceiling fan mounted on a non-rated box can fall. This is not optional — the box must be fan-rated.',
      },
      {
        stepNumber: 3,
        title: 'Assemble the Fan Components',
        description:
          'While on the ground, assemble as much of the fan as possible per the manufacturer\'s instructions. Attach the fan blades to the blade arms (irons). If the fan has a light kit, wire it according to the instructions but don\'t attach it yet — it\'s easier to wire the main fan body first. Install the down rod into the motor housing and thread the wires through it.',
        imagePrompt:
          'Ceiling fan being assembled on the floor: blades being attached to blade arms, down rod inserted into motor housing, organized parts layout',
        proTip:
          'Lay out all hardware packets and read the entire instruction manual before starting assembly. Missing or misidentified parts are the #1 cause of frustration.',
      },
      {
        stepNumber: 4,
        title: 'Mount the Fan Bracket',
        description:
          'Screw the mounting bracket that came with the fan into the fan-rated electrical box using the provided screws. Make sure the bracket is secure and sits flush. The bracket has a slot or ball mount that will hold the fan\'s weight while you make wire connections — this is critical so you don\'t have to hold a 30-pound fan overhead while wiring.',
        imagePrompt:
          'Fan mounting bracket being screwed into a fan-rated ceiling box, showing the ball mount socket, secure attachment to ceiling, step ladder view',
      },
      {
        stepNumber: 5,
        title: 'Hang the Fan and Connect the Wires',
        description:
          'Lift the motor assembly and hook the down rod ball into the mounting bracket socket. This allows the fan to hang in place while you make connections. Connect the wires: black (fan) to black (ceiling), white to white, and green or bare copper to the ground wire. If there\'s a blue wire from the fan, that\'s for a separate light kit circuit — connect it to the second black (switched) wire from the ceiling if you have one, otherwise connect it to the black wire with the fan wire.',
        imagePrompt:
          'Ceiling fan motor hung on mounting bracket, hands connecting black to black and white to white wires with wire nuts, wire color coding visible, overhead angle',
        proTip:
          'Have a helper hold a flashlight and hand you tools while you\'re on the ladder. This job is much easier with two people.',
        warning:
          'Double-check that the power is still off before connecting any wires. Confirm all wire nut connections are tight — give each a gentle tug.',
      },
      {
        stepNumber: 6,
        title: 'Secure the Canopy and Attach Blades',
        description:
          'Tuck all wire connections neatly into the electrical box. Slide the canopy (decorative ceiling cover) up against the ceiling and tighten the canopy screws. The canopy should sit flush against the ceiling with no gaps. Now attach each fan blade assembly to the motor using the provided screws. Tighten each screw firmly but don\'t strip them.',
        imagePrompt:
          'Ceiling fan canopy being pushed flush against the ceiling and tightened, then fan blades being attached to the motor, clean professional installation',
      },
      {
        stepNumber: 7,
        title: 'Install the Light Kit (If Included)',
        description:
          'Remove the bottom cap from the fan motor and connect the light kit wires per the instructions (typically blue to blue or black, white to white). Secure the light kit housing to the motor with the provided screws. Install the light bulbs (use LED bulbs — they generate less heat and last longer). Attach the glass shade or diffuser.',
        imagePrompt:
          'Light kit being attached to the bottom of a ceiling fan motor, wire connections being made, then glass globe being installed, bottom-up view',
      },
      {
        stepNumber: 8,
        title: 'Test, Balance, and Adjust',
        description:
          'Restore power at the breaker. Turn the fan on to low speed and check for excessive wobble. Some wobble is normal, but if the fan shakes visibly, use the balancing kit included with the fan (a clip-on weight you move blade to blade until the wobble minimizes). Test all three speeds and the light kit. Set the fan direction switch: counterclockwise in summer (pushes air down) and clockwise in winter (circulates warm air from the ceiling).',
        imagePrompt:
          'Ceiling fan spinning smoothly, person using a balancing clip on a blade, direction switch being set, fully installed and operational fan with light on',
        proTip:
          'If the fan wobbles, first check that all blade screws are tight and each blade is the same distance from the ceiling. Warped blades cause more wobble than imbalance.',
      },
    ],
    tips: [
      'Buy a fan with a remote control. It costs $10-$20 more but saves you from running a separate switch leg for the light and fan controls.',
      'Use the fan in reverse (clockwise on low speed) during winter to push warm air down from the ceiling. This can reduce heating costs by 10-15%.',
      'For rooms with low ceilings (under 8 feet), use a flush-mount (hugger) fan instead of a down rod to maintain the required 7-foot clearance.',
      'LED bulbs are strongly recommended — they generate far less heat near the motor and last 15-25 times longer than incandescent bulbs.',
    ],
    warnings: [
      'Never mount a ceiling fan on a box that isn\'t rated for fan support. The vibration will loosen a standard box over time, and the fan can fall.',
      'Always turn off the breaker (not just the switch) and verify with a voltage tester before working on ceiling wiring.',
      'If you find only one wire (besides ground) coming from the ceiling, you have a switch loop. The fan and light will operate on the same switch unless you run additional wiring.',
    ],
    affiliateProducts: [
      {
        id: 'prod-hunter-dempsey',
        name: 'Hunter Dempsey 52" Indoor Ceiling Fan with Light & Remote',
        description:
          'Fresh white finish with reversible blades. Whisper-quiet motor, integrated LED light kit, and handheld remote. Flush mount or down rod included.',
        price: 169.99,
        affiliateUrl: 'https://www.homedepot.com/p/Hunter-Dempsey/313040569',
        retailer: 'homedepot',
        imageUrl: '/products/hunter-dempsey.jpg',
        rating: 4.5,
        reviewCount: 5400,
        badge: 'our-pick',
      },
      {
        id: 'prod-hampton-bay-rockport',
        name: 'Hampton Bay Rockport 52" LED Indoor Ceiling Fan',
        description:
          'Budget-friendly fan with oil-rubbed bronze finish and frosted glass light. 3-speed pull chain, reversible blades. Excellent value for standard room installations.',
        price: 79.97,
        affiliateUrl: 'https://www.homedepot.com/p/Hampton-Bay-Rockport/313867723',
        retailer: 'homedepot',
        imageUrl: '/products/hampton-bay-rockport.jpg',
        rating: 4.3,
        reviewCount: 11200,
        badge: 'budget',
      },
      {
        id: 'prod-westinghouse-brace',
        name: 'Westinghouse 15.5" Adjustable Fan Brace Bar',
        description:
          'Installs from below through the existing electrical box hole — no attic access needed. Adjusts from 16" to 24" to span standard joist spacing. Supports fans up to 70 lbs.',
        price: 18.98,
        affiliateUrl: 'https://www.amazon.com/dp/B00CJOT4GU',
        retailer: 'amazon',
        imageUrl: '/products/westinghouse-brace.jpg',
        rating: 4.4,
        reviewCount: 7800,
        badge: 'best-value',
      },
      {
        id: 'prod-klein-wire-stripper',
        name: 'Klein Tools 11055 Wire Stripper/Cutter (10-18 AWG)',
        description:
          'Professional-grade wire stripper with precision ground stripping holes. Comfortable grip and spring-loaded action. Essential for any electrical project.',
        price: 15.97,
        affiliateUrl: 'https://www.amazon.com/dp/B00080DPNQ',
        retailer: 'amazon',
        imageUrl: '/products/klein-wire-stripper.jpg',
        rating: 4.8,
        reviewCount: 29600,
      },
    ],
    featuredImage: '/guides/install-ceiling-fan-hero.jpg',
    publishedAt: '2026-02-20T09:00:00Z',
    updatedAt: '2026-03-19T12:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Install a Ceiling Fan (Complete DIY Guide) | Repair & Refinish',
      description:
        'Install a ceiling fan yourself in 90 minutes. Covers fan-rated boxes, wiring, mounting, blade balancing, and light kit installation. Save $200-$400 over hiring an electrician.',
      keywords: [
        'install ceiling fan',
        'ceiling fan installation',
        'how to wire a ceiling fan',
        'replace light with ceiling fan',
        'fan rated box',
        'ceiling fan wiring',
        'DIY ceiling fan',
        'ceiling fan mount',
      ],
      ogImage: '/guides/install-ceiling-fan-og.jpg',
    },
    faqs: [
      {
        question: 'Can I install a ceiling fan where there\'s currently a light fixture?',
        answer:
          'Yes, as long as you upgrade the electrical box to a fan-rated box. The wiring from your light fixture will work for the fan. If you want separate switches for the fan and light, you\'ll either need a fan with a remote control or an additional wire run from the switch.',
      },
      {
        question: 'How do I know if my electrical box is fan-rated?',
        answer:
          'Remove the existing fixture and look at the box. Fan-rated boxes are stamped with "Acceptable for Fan Support" or have a weight rating of 35+ lbs. Metal boxes screwed directly into a joist or a fan brace bar are typically fan-rated. Plastic boxes are almost never fan-rated.',
      },
      {
        question: 'Why does my ceiling fan wobble?',
        answer:
          'The most common causes are: loose blade screws, warped blades (check with a yardstick from ceiling to blade tip), unbalanced blades (use the included balancing kit), or a loose mounting bracket. Tighten everything first before trying the balancing clip.',
      },
      {
        question: 'What size ceiling fan do I need?',
        answer:
          'For rooms up to 75 sq ft, a 29-36" fan. For 76-144 sq ft, a 42-48" fan. For 144-225 sq ft, a 52" fan. For 225-400 sq ft, a 60" fan. The fan should hang 7-9 feet above the floor for optimal airflow. Use a flush-mount kit for ceilings under 8 feet.',
      },
    ],
    relatedGuides: ['replace-light-switch', 'add-usb-outlet', 'replace-thermostat'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide 9: Add a USB Outlet
  // ---------------------------------------------------------------------------
  {
    id: 'guide-add-usb-outlet',
    slug: 'add-usb-outlet',
    title: 'How to Add a USB Outlet',
    excerpt:
      'Ditch the bulky wall chargers and upgrade a standard outlet to one with built-in USB ports. This beginner-friendly guide takes about 30 minutes and costs under $25.',
    content: `USB outlets eliminate the need for phone charger adapters and free up your regular plug slots. Modern USB outlets include both USB-A and USB-C ports, and some support fast charging. Installation is identical to replacing a standard outlet — if you can swap a light switch, you can do this.

## Choosing the Right USB Outlet

Look for outlets with at least one USB-C port that supports 15W+ charging. Many budget USB outlets only deliver 2.4A total across all USB ports, which means slow charging if you plug in multiple devices. Higher-end models offer USB-C Power Delivery for fast charging laptops and tablets.

## Compatibility Check

USB outlets are deeper than standard outlets. Measure the depth of your electrical box — you need at least 2 inches of depth for most USB outlets. Shallow boxes (common in older homes) may not fit.`,
    category: 'electrical',
    difficulty: 'beginner',
    estimatedTime: '20-30 minutes',
    estimatedCost: {
      low: 15,
      mid: 20,
      high: 25,
      diyVsPro: 'An electrician charges $100-$200 per outlet swap. A USB outlet costs $15-$25.',
    },
    tools: [
      'Flathead screwdriver',
      'Phillips screwdriver',
      'Non-contact voltage tester',
      'Wire strippers',
      'Needle-nose pliers',
    ],
    materials: [
      'USB wall outlet (with USB-A and USB-C)',
      'Wire nuts (if needed)',
      'Electrical tape',
      'New wall plate (if needed)',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Turn Off the Breaker and Verify',
        description:
          'Go to the electrical panel and turn off the breaker for the outlet you\'re replacing. Plug a lamp or phone charger into the outlet to confirm there\'s no power. Then remove the wall plate and use a non-contact voltage tester to check each wire in the box. Test both the hot (black) and neutral (white) wires.',
        imagePrompt:
          'Non-contact voltage tester being held near outlet wires showing no voltage, breaker panel in background turned off, safety verification',
        warning:
          'Always verify the power is off with a voltage tester — not just by plugging something in. Some outlets are split-wired to two different circuits.',
      },
      {
        stepNumber: 2,
        title: 'Remove the Old Outlet',
        description:
          'Unscrew the two mounting screws holding the outlet to the box. Gently pull the outlet out and note the wire connections. Take a photo for reference. You\'ll see black wires (hot) on the brass screws, white wires (neutral) on the silver screws, and a bare or green wire on the green ground screw. Loosen all terminal screws and disconnect the wires.',
        imagePrompt:
          'Standard outlet pulled from electrical box, wire connections visible on brass and silver terminals, phone camera taking a reference photo',
        proTip:
          'If wires are connected via the push-in (backstab) holes on the back, insert a small flathead screwdriver into the release slot to free each wire.',
      },
      {
        stepNumber: 3,
        title: 'Check the Box Depth',
        description:
          'USB outlets have electronics built in and are deeper than standard outlets. Measure the depth of your electrical box from the back wall to the front edge. Most USB outlets need at least 2 inches of depth. If your box is too shallow, you won\'t be able to fold the wires and push the outlet in safely. In that case, consider a USB outlet with a slimmer design or add a box extender.',
        imagePrompt:
          'Ruler measuring the depth of an electrical box from the inside, showing 2+ inches of depth, comparison with USB outlet depth, diagnostic step',
      },
      {
        stepNumber: 4,
        title: 'Connect the Wires to the New USB Outlet',
        description:
          'Connect the black (hot) wire to the brass terminal screw on the new USB outlet. Connect the white (neutral) wire to the silver terminal screw. Connect the bare copper or green ground wire to the green ground screw. If there are multiple sets of wires (the box feeds other outlets downstream), connect them to the corresponding terminals on the other side of the outlet. Tighten all screws firmly.',
        imagePrompt:
          'Hands connecting wires to a new USB outlet: black to brass, white to silver, green ground, close-up showing proper terminal connections',
        proTip:
          'If the USB outlet has pigtail leads instead of screw terminals, use wire nuts to connect: black to black, white to white, ground to ground.',
        warning:
          'Never connect the hot (black) wire to the silver (neutral) terminal. This creates a reverse-polarity condition that is a shock hazard.',
      },
      {
        stepNumber: 5,
        title: 'Mount the Outlet and Attach the Wall Plate',
        description:
          'Carefully fold the wires into the box in an accordion pattern. Push the USB outlet into the box — it will be a tighter fit than the old outlet due to the USB electronics. Secure it with the two mounting screws. Attach the wall plate. If the new outlet uses a Decora-style (rectangular) face, you\'ll need a Decora wall plate rather than the old duplex style.',
        imagePrompt:
          'USB wall outlet being pressed into the electrical box, wires folded neatly, then Decora wall plate being screwed on, clean finished result',
      },
      {
        stepNumber: 6,
        title: 'Restore Power and Test Everything',
        description:
          'Turn the breaker back on. Plug a lamp into each standard outlet slot to verify they work. Then plug a USB cable into each USB port and confirm your phone charges. Check that the USB-C port delivers adequate charging speed. If anything doesn\'t work, turn off the breaker and recheck connections. The most common issue is a loose wire nut or a wire that pulled off a terminal during installation.',
        imagePrompt:
          'Phone charging via USB-C cable plugged into a new wall USB outlet, blue charging LED visible, lamp plugged into standard outlet, everything working',
        proTip:
          'Test the USB-C port with a fast-charge compatible device. If your outlet supports Power Delivery, you should see "Fast Charging" or "Quick Charging" on your phone\'s screen.',
      },
    ],
    tips: [
      'Prioritize outlets near beds, desks, and kitchen counters — these are where USB charging is most useful.',
      'Choose an outlet with at least one USB-C port. USB-A is being phased out and USB-C supports faster charging.',
      'If your box is too shallow, the Topgreener Slim USB outlet is one of the thinnest designs available and fits most standard boxes.',
      'Consider a USB outlet with a built-in night light for hallways and bathrooms.',
    ],
    warnings: [
      'Always kill the breaker and verify with a voltage tester before working on any outlet.',
      'USB outlets are deeper than standard outlets. If you can\'t push the outlet into the box without forcing it, the box is too shallow. Do not crush wires.',
      'If you see signs of overheating (melted insulation, burn marks) on the existing wires, call an electrician before proceeding.',
    ],
    affiliateProducts: [
      {
        id: 'prod-topgreener-usb',
        name: 'TOPGREENER USB-C Wall Outlet (30W PD)',
        description:
          'Dual USB-C ports with 30W Power Delivery for fast charging phones and tablets. Two standard 15A outlets. UL-listed and compatible with all standard wall plates.',
        price: 22.99,
        affiliateUrl: 'https://www.amazon.com/dp/B09FJ7X4DK',
        retailer: 'amazon',
        imageUrl: '/products/topgreener-usb-c.jpg',
        rating: 4.6,
        reviewCount: 8900,
        badge: 'our-pick',
      },
      {
        id: 'prod-leviton-usb',
        name: 'Leviton T5633-W USB-A/USB-C Outlet (15A)',
        description:
          'Trusted brand with one USB-A and one USB-C port. Tamper-resistant receptacles for child safety. Decora-style design. UL-listed.',
        price: 24.97,
        affiliateUrl: 'https://www.homedepot.com/p/Leviton-USB-Outlet/317494821',
        retailer: 'homedepot',
        imageUrl: '/products/leviton-usb.jpg',
        rating: 4.5,
        reviewCount: 4200,
      },
      {
        id: 'prod-faith-usb-budget',
        name: 'FAITH USB-A/USB-C Wall Outlet (2-pack)',
        description:
          'Budget-friendly two-pack with USB-A and USB-C ports. 15A tamper-resistant outlets. UL-listed. White finish matches standard Decora plates.',
        price: 19.99,
        affiliateUrl: 'https://www.amazon.com/dp/B0B5JRVQ13',
        retailer: 'amazon',
        imageUrl: '/products/faith-usb-outlet.jpg',
        rating: 4.4,
        reviewCount: 6700,
        badge: 'best-value',
      },
    ],
    featuredImage: '/guides/add-usb-outlet-hero.jpg',
    publishedAt: '2026-03-01T09:00:00Z',
    updatedAt: '2026-03-19T13:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Add a USB Outlet (Easy DIY Upgrade) | Repair & Refinish',
      description:
        'Add built-in USB charging to any wall outlet in 30 minutes. Step-by-step guide for swapping a standard outlet for a USB-C fast charging outlet.',
      keywords: [
        'USB wall outlet',
        'install USB outlet',
        'USB-C outlet',
        'add USB to wall outlet',
        'USB charging outlet',
        'replace outlet with USB',
        'DIY electrical outlet',
      ],
      ogImage: '/guides/add-usb-outlet-og.jpg',
    },
    faqs: [
      {
        question: 'Do USB outlets use electricity when nothing is plugged in?',
        answer:
          'Yes, but the standby power draw is negligible — typically 0.1-0.3 watts, which costs less than $0.50 per year per outlet. Higher-quality USB outlets have lower standby draw.',
      },
      {
        question: 'Can I install a USB outlet on a GFCI-protected circuit?',
        answer:
          'Yes. USB outlets work on any 15A or 20A circuit, including GFCI-protected circuits. However, you cannot replace the GFCI outlet itself with a USB outlet and maintain the GFCI protection. Install the USB outlet downstream of the GFCI.',
      },
      {
        question: 'Will a USB wall outlet charge my phone as fast as the factory charger?',
        answer:
          'It depends on the outlet. Basic USB outlets output 5V/2.4A (12W), which is adequate for most phones. For fast charging, look for outlets with USB-C Power Delivery that output 15W-30W. These match or exceed the speed of most factory chargers.',
      },
    ],
    relatedGuides: ['replace-light-switch', 'install-ceiling-fan', 'replace-thermostat'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide: Install Under-Cabinet Lighting
  // ---------------------------------------------------------------------------
  {
    id: 'guide-install-under-cabinet-lighting',
    slug: 'install-under-cabinet-lighting',
    title: 'How to Install Under-Cabinet Lighting',
    excerpt:
      'Brighten dark kitchen countertops with LED under-cabinet lights. This intermediate guide covers both plug-in and hardwired options, from planning your layout to hiding the wires for a clean install.',
    content: `Under-cabinet lighting eliminates the shadows cast by upper cabinets, making food prep safer and your kitchen more inviting. Modern LED strip lights and puck lights are energy-efficient, run cool, and last 50,000+ hours.

## Plug-In vs. Hardwired

Plug-in LED light bars are the easiest: mount, plug in, done. The downside is visible cords. Hardwired lights look cleaner but require running wires inside the wall to a switch — an intermediate electrical project. This guide covers both approaches so you can choose your comfort level.

## Choosing the Right Light

LED light bars provide the most even illumination and are the best choice for task lighting. LED puck lights create pools of light (good for accent, less ideal for cooking). Warm white (2700-3000K) complements wood cabinets; cool white (4000K) suits modern white kitchens.`,
    category: 'electrical',
    difficulty: 'intermediate',
    estimatedTime: '60-90 minutes',
    estimatedCost: {
      low: 30,
      mid: 80,
      high: 150,
      diyVsPro: 'An electrician charges $200-$500 for hardwired under-cabinet lights. Plug-in LED kits cost $30-$80 DIY; hardwired setups cost $80-$150.',
    },
    tools: [
      'Drill/driver with bits',
      'Tape measure',
      'Level',
      'Wire strippers (for hardwired)',
      'Stud finder',
      'Screwdriver',
      'Cable staples or clips',
    ],
    materials: [
      'LED under-cabinet light bars or strip lights',
      'Mounting hardware (screws, brackets, or adhesive)',
      'Cable management clips or raceways',
      'Wire nuts and electrical tape (if hardwiring)',
      'Dimmer switch (optional)',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Plan the Layout and Choose Your Lights',
        description:
          'Measure the length of each cabinet section where you want lighting. Position lights toward the front edge of the cabinet (closest to the countertop edge) to minimize visible glare when standing at the counter. For even coverage, the light bar should span at least 2/3 the width of the cabinet. Mark the mounting positions with painter\'s tape.',
        imagePrompt:
          'Kitchen cabinets with painter tape marking light positions toward the front of each section, tape measure shown, layout planning from below',
        proTip:
          'Position lights behind any valance or front trim piece on the cabinet. This hides the light fixture from view when standing at the counter — you see the light, not the source.',
      },
      {
        stepNumber: 2,
        title: 'Mount the Light Fixtures',
        description:
          'Most LED under-cabinet light bars include mounting clips or brackets. Hold each bracket against the cabinet bottom, mark the screw holes, and drill pilot holes. Screw the brackets in place. If using adhesive-backed LED strips, clean the cabinet surface with rubbing alcohol first, then press the strip firmly into position. For puck lights, drill the screw holes and mount each puck.',
        imagePrompt:
          'Mounting brackets being screwed into the underside of a kitchen cabinet, LED light bar clicking into brackets, clean installation process',
      },
      {
        stepNumber: 3,
        title: 'Route the Wiring (Plug-In Method)',
        description:
          'For plug-in lights, run the power cord along the back of the cabinet, down the wall behind the backsplash, to the nearest outlet. Use adhesive-backed cable clips every 12 inches to secure the cord. A paintable cord cover (raceway) can hide the wire against the wall or cabinet back. Many plug-in LED kits can be daisy-chained, so you only need one outlet for multiple lights.',
        imagePrompt:
          'Power cord being routed along the back edge of cabinets with cable clips, then down behind the backsplash to an outlet, cord cover hiding the wire neatly',
        proTip:
          'If your countertop has a small gap between the backsplash and the wall cabinets, you can tuck the wire in this channel for a nearly invisible installation.',
      },
      {
        stepNumber: 4,
        title: 'Wire to a Switch (Hardwired Method)',
        description:
          'For a hardwired installation, turn off the breaker. Run 14/2 Romex from the switch location up through the wall, into the cabinet void above the uppers, and down to each light position. Connect the wires at the switch (black to switch terminal, white to neutral bundle, ground to ground). At each light fixture, connect black to black, white to white, and ground to ground using wire nuts. If using a transformer for low-voltage LED lights, mount it inside the cabinet and wire the line-voltage side to the house wiring.',
        imagePrompt:
          'Romex wire being fished through the wall from a switch to above the cabinets, then connections being made at each light fixture, hardwired installation',
        warning:
          'Turn off the breaker and verify with a voltage tester before making any electrical connections. If you\'re not comfortable running wiring through walls, use the plug-in method or hire an electrician.',
      },
      {
        stepNumber: 5,
        title: 'Install a Dimmer Switch (Optional)',
        description:
          'A dimmer lets you set the mood from bright task lighting to soft ambiance. For plug-in lights, use an inline dimmer ($10-$15) on the power cord. For hardwired lights, install a wall dimmer switch rated for LED loads. Standard incandescent dimmers cause LED lights to flicker — buy a dimmer specifically marked "LED compatible." Follow the dimmer\'s wiring instructions for your specific setup.',
        imagePrompt:
          'LED-compatible dimmer switch being installed at a wall switch box, or an inline cord dimmer being added to a plug-in setup, two options shown',
        proTip:
          'The Lutron Caseta dimmer is the gold standard for LED under-cabinet lights. It eliminates flickering and works with a wireless remote, so you can control the lights from anywhere.',
      },
      {
        stepNumber: 6,
        title: 'Test and Adjust',
        description:
          'Restore power and test all lights. Check for even illumination across the counter — if you see dark spots between fixtures, move the bars closer together. Verify the dimmer works smoothly through its full range. Check all wire connections one final time. If using adhesive-backed strips, press them firmly again after 10 minutes — the adhesive reaches full bond strength in 24 hours.',
        imagePrompt:
          'Under-cabinet LED lights turned on illuminating a kitchen counter evenly, warm white glow on stone countertop, no shadows, professional result',
      },
    ],
    tips: [
      'LED light bars with a CRI (Color Rendering Index) of 90+ make food look more natural and appetizing. Cheap LEDs with CRI below 80 give everything a gray cast.',
      'Warm white (2700-3000K) is best for kitchens with wood cabinets and warm tones. Cool white (4000-5000K) suits modern white or gray kitchens.',
      'Link multiple light bars with the included connectors for seamless coverage across long runs of cabinets.',
      'Use frosted or diffused LED strips rather than bare diodes. Bare LEDs create harsh bright spots instead of even illumination.',
    ],
    warnings: [
      'Always turn off the breaker before doing any hardwired electrical work. Verify power is off with a voltage tester.',
      'Use only LED-compatible dimmers with LED lights. Standard dimmers cause flickering, buzzing, and premature LED failure.',
      'Don\'t mount lights directly above a heat source (like above a stove without a hood). Heat shortens LED lifespan.',
    ],
    affiliateProducts: [
      {
        id: 'prod-black-decker-led-bar',
        name: 'BLACK+DECKER LED Under Cabinet Lighting Kit (3-bar)',
        description:
          'Plug-in LED light bars with warm white LEDs. Linkable design — one outlet powers all three bars. Tool-free snap-in mounting. 1,050 lumens total.',
        price: 34.99,
        affiliateUrl: 'https://www.amazon.com/dp/B01M7Z0L9A',
        retailer: 'amazon',
        imageUrl: '/products/blackdecker-led-bar.jpg',
        rating: 4.5,
        reviewCount: 14200,
        badge: 'Best Seller',
      },
      {
        id: 'prod-ge-premium-led',
        name: 'GE Premium LED Direct Wire Under Cabinet Light (18")',
        description:
          'Hardwired slim-profile LED light with high CRI (90+) warm white LEDs. Linkable for continuous runs. Includes all mounting hardware. Dimmable with compatible switch.',
        price: 42.99,
        affiliateUrl: 'https://www.homedepot.com/p/GE-Premium-LED/314832645',
        retailer: 'homedepot',
        imageUrl: '/products/ge-premium-led.jpg',
        rating: 4.6,
        reviewCount: 5800,
      },
      {
        id: 'prod-govee-led-strip',
        name: 'Govee Under Cabinet LED Strip Lights (6.6 ft, Warm White)',
        description:
          'Flexible adhesive-backed LED strip with warm white LEDs. Dimmable. Cuttable every 2 inches for custom lengths. USB-powered. Budget-friendly accent lighting.',
        price: 14.99,
        affiliateUrl: 'https://www.amazon.com/dp/B08FX1TB9V',
        retailer: 'amazon',
        imageUrl: '/products/govee-led-strip.jpg',
        rating: 4.4,
        reviewCount: 22100,
        badge: 'Budget Pick',
      },
    ],
    featuredImage: '/images/guides/install-under-cabinet-lighting.jpg',
    publishedAt: '2025-12-05T09:00:00Z',
    updatedAt: '2026-02-20T14:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Install Under-Cabinet Lighting (LED Guide) | Repair & Refinish',
      description:
        'Install LED under-cabinet kitchen lighting in 60-90 minutes. Covers plug-in and hardwired methods, light selection, dimmer setup, and wire hiding techniques.',
      keywords: [
        'under cabinet lighting',
        'LED under cabinet lights',
        'install kitchen lighting',
        'under cabinet LED',
        'kitchen counter lighting',
        'cabinet light installation',
        'hardwired under cabinet',
      ],
    },
    faqs: [
      {
        question: 'Are plug-in under-cabinet lights as good as hardwired?',
        answer:
          'The light quality is identical. The only difference is aesthetics — plug-in lights have a visible cord running to an outlet, while hardwired lights look cleaner. If you use cable covers and route the cord behind the backsplash, plug-in lights can look nearly as clean.',
      },
      {
        question: 'How many lumens do I need for under-cabinet lighting?',
        answer:
          'For task lighting (food prep, reading recipes), aim for 250-400 lumens per linear foot of counter. For ambient/accent lighting, 100-200 lumens per foot is sufficient. Most LED light bars specify lumens per bar in their specs.',
      },
      {
        question: 'Can I use LED strip lights instead of light bars?',
        answer:
          'Yes, but use strips with a diffuser channel (an aluminum track with a frosted cover). Bare LED strips create harsh dots of light. A diffuser blends them into a smooth, even glow. Diffuser channels cost $10-$20 per 3-foot section.',
      },
    ],
    relatedGuides: ['replace-light-switch', 'install-ceiling-fan', 'add-usb-outlet'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide: Replace a Doorbell
  // ---------------------------------------------------------------------------
  {
    id: 'guide-replace-doorbell',
    slug: 'replace-doorbell',
    title: 'How to Replace a Doorbell',
    excerpt:
      'Fix a dead doorbell or upgrade to a smart video doorbell in 30-45 minutes. This beginner guide covers traditional wired doorbells and modern smart doorbell installation.',
    content: `A doorbell that doesn't ring is usually caused by a failed button, a burned-out transformer, or broken wiring. Replacing the entire system — button, chime, and transformer — is straightforward and gives you the opportunity to upgrade to a smart video doorbell.

## Wired vs. Wireless vs. Smart

Traditional wired doorbells use a low-voltage transformer (16V) to power a simple button and chime. Wireless doorbells eliminate the wiring entirely — just mount the button and plug in the receiver. Smart video doorbells (Ring, Nest) use your existing doorbell wiring for power and connect to your Wi-Fi for video, notifications, and two-way audio.

## Diagnosing a Dead Doorbell

Before replacing everything, test each component. Press the button — if nothing happens, bypass the button by touching the two wires together (carefully). If the chime rings, the button is bad. If not, check the transformer voltage with a multimeter (should read 16-24V AC). If the transformer is dead, that's your culprit.`,
    category: 'electrical',
    difficulty: 'beginner',
    estimatedTime: '30-45 minutes',
    estimatedCost: {
      low: 15,
      mid: 50,
      high: 200,
      diyVsPro: 'An electrician charges $100-$250 for doorbell replacement. A basic wired doorbell kit costs $15-$30. A smart video doorbell costs $100-$200.',
    },
    tools: [
      'Screwdriver (flathead and Phillips)',
      'Non-contact voltage tester',
      'Multimeter (for testing transformer)',
      'Wire strippers',
      'Drill with masonry bit (for new installations)',
      'Level',
    ],
    materials: [
      'Doorbell button or smart video doorbell',
      'Doorbell chime unit (if replacing)',
      'Doorbell transformer (if faulty)',
      'Low-voltage doorbell wire (if running new wire)',
      'Wire nuts',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Test the Existing Doorbell Components',
        description:
          'Remove the doorbell button from the wall by unscrewing the mounting screws and pulling it away. You\'ll see two low-voltage wires connected to the back. Touch the two bare wire ends together (this is safe — doorbell wires are only 16-24V). If the chime rings, the button is the problem. If not, locate the transformer (usually in the basement, attic, or utility closet near the electrical panel) and test it with a multimeter set to AC voltage. It should read 16-24V.',
        imagePrompt:
          'Doorbell button removed from wall showing two wires, bare ends being touched together to test, then multimeter testing the transformer voltage',
        proTip:
          'Doorbell transformers are often hard to find. Check the basement near the electrical panel, in the attic, or inside a closet. Follow the doorbell wire from the chime unit to trace it back to the transformer.',
      },
      {
        stepNumber: 2,
        title: 'Replace the Doorbell Button',
        description:
          'If the button was the problem, disconnect the two wires from the old button terminals. Strip 1/2 inch of insulation from each wire if the ends are corroded. Connect the wires to the new button\'s terminals (polarity doesn\'t matter on a standard doorbell). Mount the new button to the wall with the provided screws. Test by pressing the button — the chime should ring immediately.',
        imagePrompt:
          'Old doorbell button being removed, wires connected to a new modern doorbell button, button being mounted to the wall, testing with a press',
      },
      {
        stepNumber: 3,
        title: 'Replace the Transformer (If Faulty)',
        description:
          'Turn off the breaker that powers the transformer. The transformer\'s primary (high-voltage) side is wired to a junction box or the electrical panel. Disconnect the wire nuts connecting the transformer to the house wiring. Remove the old transformer. Mount the new transformer in the same location, connecting black to black, white to white, and green to ground on the primary side. Reconnect the low-voltage doorbell wires to the secondary terminals. Restore power.',
        imagePrompt:
          'Old doorbell transformer being disconnected from the junction box, new transformer wired in its place, low-voltage terminals reconnected',
        warning:
          'The transformer\'s primary side carries full household voltage (120V). Always turn off the breaker and verify with a voltage tester before touching the primary-side wires.',
      },
      {
        stepNumber: 4,
        title: 'Install a Smart Video Doorbell (Optional Upgrade)',
        description:
          'If upgrading to a smart doorbell (Ring, Nest, etc.), remove the old button and connect the existing doorbell wires to the terminals on the back of the smart doorbell (polarity doesn\'t matter). Mount the bracket to the wall using the included hardware — use a masonry drill bit if mounting on brick or stucco. Snap the doorbell onto the bracket. Download the manufacturer\'s app and follow the on-screen setup for Wi-Fi pairing and video configuration.',
        imagePrompt:
          'Smart video doorbell mounting bracket being screwed to a door frame, wires connected, doorbell unit snapped onto bracket, app setup on phone screen',
        proTip:
          'If your existing transformer is less than 16V, most smart doorbells require a 16-24V transformer. You may need to upgrade the transformer for reliable power — the doorbell app will alert you if voltage is too low.',
      },
      {
        stepNumber: 5,
        title: 'Replace or Add a Chime Unit',
        description:
          'If your chime is dead or you want to add one, turn off the breaker. Remove the old chime cover. Disconnect the three wires (labeled "Front," "Trans," and possibly "Rear"). Connect the same wires to the matching terminals on the new chime. Mount the new chime on the wall (use the old mounting holes if they align). Replace the cover. Smart doorbells can also send chime notifications to your phone and to smart speakers like Alexa or Google Home.',
        imagePrompt:
          'Old doorbell chime being removed from the wall, wires labeled, new chime being connected and mounted, clean wall installation',
      },
      {
        stepNumber: 6,
        title: 'Test the Complete System',
        description:
          'Restore power at the breaker. Press the doorbell button and verify the chime sounds. For smart doorbells, check that you receive a notification on your phone, that the live video feed works, and that two-way audio functions. Walk past the doorbell to test the motion detection range. Adjust motion sensitivity in the app to avoid false alerts from passing cars or pets.',
        imagePrompt:
          'Finger pressing a newly installed doorbell, chime ringing inside, phone showing video doorbell notification and live feed, complete system test',
      },
    ],
    tips: [
      'Most doorbell problems are the button, not the chime or transformer. Start your diagnosis there.',
      'Smart video doorbells work with your existing wiring in most cases. You don\'t need to run new wires.',
      'If you don\'t have existing doorbell wiring, choose a battery-powered smart doorbell (like Ring Battery Doorbell) — no wiring needed at all.',
      'Label your doorbell wires at the chime before disconnecting anything. "Front," "Trans," and "Rear" must reconnect to the correct terminals.',
    ],
    warnings: [
      'Doorbell wires are low-voltage (16-24V) and safe to touch. However, the transformer connects to full household voltage (120V) — always turn off the breaker before working on the transformer.',
      'When drilling into exterior walls for mounting, avoid hitting wires or pipes. Drill slowly and stop if you feel resistance.',
      'Smart doorbells require a strong Wi-Fi signal at the front door. Test signal strength before purchasing — a Wi-Fi extender may be needed.',
    ],
    affiliateProducts: [
      {
        id: 'prod-ring-doorbell',
        name: 'Ring Video Doorbell (2nd Gen, Wired)',
        description:
          'HD video, two-way talk, motion detection, and night vision. Works with existing doorbell wiring. Alexa compatible. The most popular smart doorbell in the US.',
        price: 99.99,
        affiliateUrl: 'https://www.amazon.com/dp/B08N5NQ69J',
        retailer: 'amazon',
        imageUrl: '/products/ring-doorbell.jpg',
        rating: 4.5,
        reviewCount: 87600,
        badge: 'Best Seller',
      },
      {
        id: 'prod-heath-zenith-wired',
        name: 'Heath Zenith Wired Door Chime Kit (Button + Chime + Transformer)',
        description:
          'Complete traditional doorbell kit with everything you need. Includes push button, two-note chime, 16V transformer, and 40 feet of wire. Easy DIY install.',
        price: 24.98,
        affiliateUrl: 'https://www.homedepot.com/p/Heath-Zenith-Chime-Kit/304178521',
        retailer: 'homedepot',
        imageUrl: '/products/heath-zenith-kit.jpg',
        rating: 4.3,
        reviewCount: 4200,
        badge: 'Best Value',
      },
      {
        id: 'prod-google-nest-doorbell',
        name: 'Google Nest Doorbell (Wired, 2nd Gen)',
        description:
          'HDR video with 24/7 recording. Person, package, and vehicle detection. Google Home integration. Sleek low-profile design. Requires existing doorbell wiring.',
        price: 179.99,
        affiliateUrl: 'https://www.amazon.com/dp/B09FCLPLWX',
        retailer: 'amazon',
        imageUrl: '/products/nest-doorbell.jpg',
        rating: 4.4,
        reviewCount: 12400,
      },
    ],
    featuredImage: '/images/guides/replace-doorbell.jpg',
    publishedAt: '2025-09-18T09:00:00Z',
    updatedAt: '2026-01-10T11:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Replace a Doorbell (Traditional & Smart) | Repair & Refinish',
      description:
        'Replace a broken doorbell or upgrade to a smart video doorbell in 30-45 minutes. Covers testing, button replacement, transformer replacement, and smart doorbell setup.',
      keywords: [
        'replace doorbell',
        'install doorbell',
        'doorbell not working',
        'smart doorbell install',
        'Ring doorbell installation',
        'doorbell transformer',
        'fix doorbell',
        'video doorbell setup',
      ],
    },
    faqs: [
      {
        question: 'Can I install a smart doorbell with my existing wiring?',
        answer:
          'In most cases yes. Smart doorbells like Ring and Nest use the same two low-voltage wires as traditional doorbells. The only potential issue is transformer voltage — smart doorbells typically need 16-24V AC. If your transformer outputs less, you\'ll need to upgrade it ($15-$25).',
      },
      {
        question: 'Why does my doorbell only work sometimes?',
        answer:
          'Intermittent doorbell issues are usually caused by a loose wire connection at the button, a corroded button contact, or a transformer that\'s on its last legs. Start by cleaning and re-tightening the wire connections at the button.',
      },
      {
        question: 'Do I need a subscription for a smart doorbell?',
        answer:
          'Smart doorbells work without a subscription for live viewing and two-way talk. However, features like video recording, playback history, and advanced detection require a paid plan. Ring Protect costs $4/month; Nest Aware costs $8/month.',
      },
    ],
    relatedGuides: ['replace-light-switch', 'add-usb-outlet', 'install-under-cabinet-lighting'],
    status: 'published',
  },
];

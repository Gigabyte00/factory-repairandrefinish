import type { Guide } from '@/types';
import { defaultAuthor } from '../site-config';

export const hvacClimateGuides: Guide[] = [
  // ---------------------------------------------------------------------------
  // Guide 19: Replace a Thermostat
  // ---------------------------------------------------------------------------
  {
    id: 'guide-replace-thermostat',
    slug: 'replace-thermostat',
    title: 'How to Replace a Thermostat',
    excerpt:
      'Upgrade to a smart or programmable thermostat and save 10-15% on heating and cooling costs. This beginner-friendly swap takes about 30 minutes and requires no special electrical knowledge.',
    content: `Replacing a thermostat is one of the easiest and most impactful energy-saving upgrades you can make. A programmable or smart thermostat automatically adjusts temperatures when you're asleep or away, saving the average household $50-$150 per year.

## Compatibility Check

Before buying a new thermostat, check your HVAC system type. Most homes have a standard forced-air system (gas or electric) with a single heating and cooling stage. If you have a heat pump, multi-stage system, or zoned system, make sure the thermostat supports it. The Nest and ecobee smart thermostats are compatible with about 95% of systems.

## Wire Check

Pull off your old thermostat cover and look at the wires. You need at least 4 wires for a basic heat/cool system. Smart thermostats require a "C" (common) wire for power. If you don't have a C wire, many smart thermostats include an adapter or power extender kit.`,
    category: 'hvac-climate',
    difficulty: 'beginner',
    estimatedTime: '20-30 minutes',
    estimatedCost: {
      low: 25,
      mid: 130,
      high: 250,
      diyVsPro: 'An HVAC tech charges $150-$300 to install a thermostat. DIY you pay only for the thermostat itself ($25-$250).',
    },
    tools: [
      'Phillips screwdriver',
      'Flathead screwdriver',
      'Level',
      'Drill with 3/16" bit (if mounting new backplate)',
      'Wire stripper',
      'Smartphone (for smart thermostat setup)',
    ],
    materials: [
      'New thermostat',
      'Wire labels (usually included)',
      'Wall anchors (usually included)',
      'Painter\'s tape (to hold wires)',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Turn Off the HVAC System',
        description:
          'Go to your breaker panel and turn off the breaker for your HVAC system (usually labeled "Furnace," "AC," or "HVAC"). This is important even though thermostat wires are low-voltage (24V) — it prevents short circuits while you work. Verify the system is off by checking that the old thermostat display goes blank or the fan stops running.',
        imagePrompt:
          'Breaker panel with HVAC breaker being switched off, old thermostat display going blank, safety-first approach to thermostat replacement',
        warning:
          'Although thermostat wires are low-voltage, a short circuit can blow the HVAC control board fuse (a $5-$50 part) or damage the control board itself ($100-$300). Always turn off the breaker.',
      },
      {
        stepNumber: 2,
        title: 'Remove the Old Thermostat and Label Wires',
        description:
          'Pull the old thermostat faceplate off the wall plate. You\'ll see colored wires connected to lettered terminals (R, W, Y, G, C, etc.). Before disconnecting anything, take a clear photo of the wire connections. Then label each wire with the letter of the terminal it\'s connected to using the labels included with your new thermostat (or masking tape). Disconnect the wires and remove the old wall plate.',
        imagePrompt:
          'Old thermostat pulled off showing labeled wire terminals (R, W, Y, G), phone camera taking a reference photo, wire labels being applied, organized process',
        proTip:
          'Wrap loose wires around a pencil or tape them to the wall so they don\'t fall back into the wall cavity. Fishing wires out of a wall hole is frustrating and sometimes impossible without cutting drywall.',
      },
      {
        stepNumber: 3,
        title: 'Mount the New Thermostat Backplate',
        description:
          'Hold the new thermostat\'s backplate against the wall and use a level to make sure it\'s straight. Thread the wires through the opening in the plate. Mark the screw holes with a pencil. If the holes align with the old screws, you\'re set. If not, drill new holes and insert the included wall anchors. Screw the backplate to the wall. Make sure it\'s firmly mounted — a loose backplate causes display flicker on smart thermostats.',
        imagePrompt:
          'New thermostat backplate being leveled and screwed to wall, wires threaded through center opening, level tool showing straight alignment',
      },
      {
        stepNumber: 4,
        title: 'Connect the Wires',
        description:
          'Connect each labeled wire to the matching terminal on the new thermostat (R to R, W to W, Y to Y, G to G, etc.). Most new thermostats use push-in connectors — strip 1/4 inch of insulation from the wire end (if needed) and push it firmly into the labeled port. For a smart thermostat, check if you need a C (common) wire. If you don\'t have one, install the included C-wire adapter per the instructions.',
        imagePrompt:
          'Color-coded wires being pushed into labeled terminals on a new smart thermostat backplate, R=red, W=white, Y=yellow, G=green, clean connections',
        proTip:
          'If you have a Nest thermostat and no C wire, use the included power connector on your furnace control board. It takes 10 minutes and is well-documented in the Nest app.',
      },
      {
        stepNumber: 5,
        title: 'Attach the Thermostat and Power On',
        description:
          'Snap or screw the thermostat body onto the mounted backplate. Turn the HVAC breaker back on. The thermostat should power up within 30 seconds. For a programmable thermostat, set the time, date, and your desired schedule. For a smart thermostat, follow the app-guided setup — it will walk you through Wi-Fi connection, system type detection, and schedule preferences.',
        imagePrompt:
          'Smart thermostat being snapped onto backplate, screen lighting up with welcome message, phone showing companion app setup, modern clean wall mount',
      },
      {
        stepNumber: 6,
        title: 'Test All Modes',
        description:
          'Test heating by setting the thermostat above room temperature — the furnace should kick on within 2 minutes. Test cooling by setting it below room temperature — the AC compressor should start. Test the fan by switching to "Fan On" mode. Run each mode for at least 5 minutes to verify proper operation. If any mode doesn\'t work, turn off the breaker and recheck your wire connections.',
        imagePrompt:
          'Smart thermostat showing heating mode (orange glow), then switching to cooling mode (blue glow), system responding, verification testing',
        proTip:
          'Wait 5 minutes between testing heating and cooling. Most HVAC systems have a built-in time delay to prevent the compressor from cycling too quickly, which can damage it.',
      },
    ],
    tips: [
      'Take a compatibility quiz on the thermostat manufacturer\'s website before buying. Nest and ecobee both have online tools that check your wiring.',
      'If your current thermostat uses mercury (a small glass vial with silver liquid), dispose of it at a hazardous waste facility. Don\'t throw it in the trash.',
      'Smart thermostats pay for themselves within 1-2 years through energy savings. The Nest and ecobee models offer the best integration with smart home systems.',
      'Set your programmable schedule to lower heat by 7-10°F for 8 hours (while sleeping or at work). This alone saves 10% annually.',
    ],
    warnings: [
      'Always turn off the HVAC breaker before touching thermostat wires. A short circuit can blow the control board fuse or damage the board.',
      'If you have a heat pump system, make sure the new thermostat has a specific heat pump setting. Incorrect wiring of a heat pump thermostat can lock the system into auxiliary heating, which is extremely expensive.',
      'If you find thick, high-voltage wires (line voltage thermostat, common with baseboard heaters), do not replace with a standard smart thermostat. You need a line-voltage smart thermostat or a relay adapter.',
    ],
    affiliateProducts: [
      {
        id: 'prod-google-nest',
        name: 'Google Nest Learning Thermostat (4th Gen)',
        description:
          'Auto-learns your schedule and adjusts temperature to save energy. Built-in motion sensor, Wi-Fi, and Google Home integration. Includes C-wire adapter. Sleek modern display.',
        price: 249.99,
        affiliateUrl: 'https://www.amazon.com/dp/B0CZYVVWZ6',
        retailer: 'amazon',
        imageUrl: '/products/nest-thermostat-4.jpg',
        rating: 4.5,
        reviewCount: 4800,
        badge: 'our-pick',
      },
      {
        id: 'prod-ecobee-smart',
        name: 'ecobee Smart Thermostat Premium',
        description:
          'Built-in air quality monitor, Alexa, and room sensor included. Manages hot and cold spots. Works with Apple HomeKit, Google, and Alexa. Best all-around smart thermostat.',
        price: 219.99,
        affiliateUrl: 'https://www.amazon.com/dp/B09XXTQPXC',
        retailer: 'amazon',
        imageUrl: '/products/ecobee-premium.jpg',
        rating: 4.5,
        reviewCount: 7200,
      },
      {
        id: 'prod-honeywell-t6',
        name: 'Honeywell Home T6 Pro Programmable Thermostat',
        description:
          'Reliable non-smart programmable thermostat with large display. 7-day flexible scheduling. Works with virtually every HVAC system. No Wi-Fi needed.',
        price: 49.99,
        affiliateUrl: 'https://www.homedepot.com/p/Honeywell-T6-Pro/315378892',
        retailer: 'homedepot',
        imageUrl: '/products/honeywell-t6.jpg',
        rating: 4.6,
        reviewCount: 9400,
        badge: 'best-value',
      },
    ],
    featuredImage: '/guides/replace-thermostat-hero.jpg',
    publishedAt: '2026-03-04T09:00:00Z',
    updatedAt: '2026-03-20T15:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Replace a Thermostat (Smart or Programmable) | Repair & Refinish',
      description:
        'Replace your old thermostat with a smart or programmable model in 30 minutes. Step-by-step guide for wire labeling, mounting, and setup. Save 10-15% on energy bills.',
      keywords: [
        'replace thermostat',
        'install smart thermostat',
        'Nest thermostat installation',
        'programmable thermostat',
        'thermostat wiring',
        'DIY thermostat install',
        'ecobee installation',
        'thermostat upgrade',
      ],
      ogImage: '/guides/replace-thermostat-og.jpg',
    },
    faqs: [
      {
        question: 'Do I need a C wire for a smart thermostat?',
        answer:
          'Most smart thermostats need a C (common) wire for continuous power. If you don\'t have one (common in older homes), the Nest includes a power connector that attaches to your furnace control board. The ecobee includes a Power Extender Kit. Both solutions avoid running a new wire.',
      },
      {
        question: 'What do the thermostat wire colors mean?',
        answer:
          'Wire colors typically follow this convention: R (red) = 24V power, W (white) = heat, Y (yellow) = cooling, G (green) = fan, C (blue or brown) = common. However, colors are not always standardized — always go by the terminal letter on the old thermostat, not the wire color.',
      },
      {
        question: 'Will a smart thermostat work with my old furnace?',
        answer:
          'Smart thermostats are compatible with about 95% of HVAC systems, including systems that are 20+ years old. The exception is certain high-voltage systems (like some baseboard electric heaters) that use 120V/240V wiring. Check the compatibility tool on the thermostat manufacturer\'s website.',
      },
    ],
    relatedGuides: ['change-hvac-filter', 'weather-strip-door', 'replace-light-switch'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide 20: Change Your HVAC Filter
  // ---------------------------------------------------------------------------
  {
    id: 'guide-change-hvac-filter',
    slug: 'change-hvac-filter',
    title: 'How to Change Your HVAC Filter',
    excerpt:
      'A dirty HVAC filter reduces airflow, increases energy bills, and worsens air quality. Learn how to find, size, and replace your filter in under 10 minutes — the easiest home maintenance task there is.',
    content: `Changing your HVAC filter is the single most important routine maintenance task for your heating and cooling system. A clogged filter forces the system to work harder (increasing energy bills by 5-15%), shortens equipment life, and circulates dust, pollen, and pet dander through your home.

## How Often?

Standard 1-inch filters should be replaced every 30-90 days (monthly if you have pets or allergies). 4-inch media filters last 6-12 months. Check your filter monthly — if it looks gray and dirty, replace it regardless of the calendar.

## MERV Ratings

Filters are rated by MERV (Minimum Efficiency Reporting Value). MERV 8 catches dust and pollen. MERV 11 adds mold spores and pet dander. MERV 13 catches bacteria and smoke particles. Don't exceed your system's recommended MERV rating — a too-restrictive filter reduces airflow and strains the blower motor.`,
    category: 'hvac-climate',
    difficulty: 'beginner',
    estimatedTime: '5-10 minutes',
    estimatedCost: {
      low: 5,
      mid: 15,
      high: 30,
      diyVsPro: 'An HVAC service call costs $75-$150 and usually includes a filter change, but you can do it yourself in 5 minutes for $5-$30 per filter.',
    },
    tools: [
      'Step stool or ladder (if filter is in ceiling)',
      'Flashlight',
    ],
    materials: [
      'Replacement HVAC filter (correct size and MERV rating)',
      'Permanent marker (to write install date on filter)',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Locate Your HVAC Filter',
        description:
          'Filters can be in several locations depending on your system. The most common spots are: inside a return air grille on a wall or ceiling, in a slot at the furnace or air handler (between the return duct and the blower), or in a ceiling-mounted return vent. If you have multiple return vents, each may have its own filter. Check every return vent in your home.',
        imagePrompt:
          'Three common HVAC filter locations shown: wall return grille, furnace slot, and ceiling return vent, each with arrows pointing to the filter, educational layout',
        proTip:
          'Not sure which vents are returns? Turn the system fan on and hold a tissue near each vent. If the tissue is sucked toward the vent (rather than blown away), it\'s a return vent with a filter.',
      },
      {
        stepNumber: 2,
        title: 'Remove the Old Filter and Note the Size',
        description:
          'For wall or ceiling grilles, open the grille (most have latches or swing open). For furnace filters, slide the access panel open. Pull the old filter out and look at the size printed on the frame — it will show three numbers like 16x25x1 or 20x20x4 (width x height x depth in inches). Write this size down or take a photo. This is the filter size you need to buy.',
        imagePrompt:
          'Hand pulling a dirty gray HVAC filter out of a wall return grille, filter size label visible on the cardboard frame (16x25x1), comparison of dirty vs. clean',
      },
      {
        stepNumber: 3,
        title: 'Check the Airflow Direction Arrow',
        description:
          'Every HVAC filter has an arrow on the frame showing the correct airflow direction. The arrow should point TOWARD the furnace or air handler (in the direction the air flows). For wall and ceiling return grilles, the arrow points into the wall or ceiling (away from the room). For furnace-mounted filters, the arrow points toward the blower motor. Getting this backwards reduces filter efficiency.',
        imagePrompt:
          'Close-up of HVAC filter airflow direction arrow on the frame, with a diagram showing correct orientation for wall-mount and furnace-mount installations',
        warning:
          'Installing the filter backwards (arrow facing the wrong way) significantly reduces its effectiveness. The filter media is layered directionally — the coarser side should face the incoming air.',
      },
      {
        stepNumber: 4,
        title: 'Insert the New Filter',
        description:
          'Slide the new filter into the slot with the airflow arrow pointing in the correct direction. The filter should fit snugly without gaps around the edges — air bypassing the filter defeats its purpose. If the filter is slightly loose, check that you have the right size. Close the grille or furnace access panel. Write the installation date on the filter frame with a marker so you know when to replace it next.',
        imagePrompt:
          'Clean white HVAC filter being slid into a wall return grille, airflow arrow pointing into the wall, snug fit, date being written on frame with marker',
        proTip:
          'Buy filters in bulk (packs of 4-6). It\'s cheaper, you always have one on hand, and it reminds you to change them regularly. Set a calendar reminder for every 90 days.',
      },
      {
        stepNumber: 5,
        title: 'Dispose of the Old Filter and Set a Reminder',
        description:
          'Place the old filter in a garbage bag to contain the trapped dust and allergens, and dispose of it in your regular trash. If you have washable/reusable filters, rinse them with water, let them dry completely (at least 24 hours), and reinstall. Set a recurring reminder on your phone to check the filter every 30 days — hold it up to a light, and if you can\'t see light through it, replace it.',
        imagePrompt:
          'Old dirty filter being placed in a trash bag, phone calendar showing a recurring monthly reminder for HVAC filter check, clean maintenance routine',
      },
    ],
    tips: [
      'Buy a year\'s supply of filters at once. A 4-pack or 6-pack is significantly cheaper per filter and ensures you always have one ready.',
      'MERV 11 is the sweet spot for most homes — it catches dust, pollen, mold, and pet dander without restricting airflow excessively.',
      'If you have pets, check the filter monthly. Pet hair and dander clog filters 2-3 times faster than in pet-free homes.',
      'Write the install date on the filter frame with a marker. It\'s easy to forget when you last changed it.',
    ],
    warnings: [
      'Never run your HVAC system without a filter. Dust and debris will accumulate on the evaporator coil and blower motor, causing expensive damage.',
      'Don\'t use a filter with a higher MERV rating than your system supports. High-MERV filters restrict airflow, which can cause the evaporator coil to freeze or the blower motor to overheat.',
      'If your filter is clogged solid after only 2 weeks, check your ductwork for leaks that are pulling in extra dust from attics or crawl spaces.',
    ],
    affiliateProducts: [
      {
        id: 'prod-filtrete-1500',
        name: 'Filtrete 1500 MPR Allergen Reduction Filter (6-pack)',
        description:
          'MERV 12 rating catches dust, pollen, mold, pet dander, and smoke. Electrostatic charge attracts particles. 90-day replacement cycle. Available in all standard sizes.',
        price: 56.99,
        affiliateUrl: 'https://www.amazon.com/dp/B000XNQ6N4',
        retailer: 'amazon',
        imageUrl: '/products/filtrete-1500.jpg',
        rating: 4.7,
        reviewCount: 32400,
        badge: 'our-pick',
      },
      {
        id: 'prod-nordic-pure-merv11',
        name: 'Nordic Pure MERV 11 Pleated AC Furnace Filter (6-pack)',
        description:
          'Made in USA. Excellent balance of filtration and airflow. Electrostatically charged synthetic media. Available in over 100 sizes. Best value MERV 11 filter.',
        price: 37.99,
        affiliateUrl: 'https://www.amazon.com/dp/B005GQBEFK',
        retailer: 'amazon',
        imageUrl: '/products/nordic-pure.jpg',
        rating: 4.6,
        reviewCount: 28700,
        badge: 'best-value',
      },
      {
        id: 'prod-honeywell-4inch',
        name: 'Honeywell FC100A1037 4" Media Filter (20x25x4)',
        description:
          'High-capacity 4-inch filter that lasts 6-12 months between changes. MERV 11 rated. Fits Honeywell media air cleaners and many standard 4-inch filter slots.',
        price: 24.99,
        affiliateUrl: 'https://www.homedepot.com/p/Honeywell-4-Inch-Filter/204742027',
        retailer: 'homedepot',
        imageUrl: '/products/honeywell-4in.jpg',
        rating: 4.5,
        reviewCount: 6800,
      },
    ],
    featuredImage: '/guides/change-hvac-filter-hero.jpg',
    publishedAt: '2026-03-03T09:00:00Z',
    updatedAt: '2026-03-20T16:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Change Your HVAC Filter (5-Minute Guide) | Repair & Refinish',
      description:
        'Change your HVAC filter in 5 minutes. Learn how to find, size, and replace your air filter for better air quality and lower energy bills. MERV ratings explained.',
      keywords: [
        'change HVAC filter',
        'replace air filter',
        'HVAC filter size',
        'furnace filter replacement',
        'AC filter change',
        'MERV rating explained',
        'how often change air filter',
        'best HVAC filter',
      ],
      ogImage: '/guides/change-hvac-filter-og.jpg',
    },
    faqs: [
      {
        question: 'How often should I change my HVAC filter?',
        answer:
          'Standard 1-inch filters: every 30-90 days (30 days with pets or allergies, 90 days in a clean, pet-free home). 4-inch media filters: every 6-12 months. Check monthly by holding the filter to a light — if you can\'t see through it, replace it.',
      },
      {
        question: 'What MERV rating should I use?',
        answer:
          'MERV 8 is the minimum for basic dust filtration. MERV 11 is ideal for most homes — it catches dust, pollen, mold, and pet dander. MERV 13 adds bacteria and smoke filtration. Don\'t exceed your system\'s recommendation — check your furnace manual or ask an HVAC tech.',
      },
      {
        question: 'Can I use a washable/reusable filter?',
        answer:
          'Yes, but washable filters typically have lower MERV ratings (MERV 4-6) and don\'t capture fine particles as well as disposable pleated filters. They save money long-term but must be rinsed monthly and dried completely before reinstalling (running the system with a wet filter promotes mold growth).',
      },
    ],
    relatedGuides: ['replace-thermostat', 'weather-strip-door', 'clean-dishwasher-not-draining'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide: Seal Air Leaks Around Windows
  // ---------------------------------------------------------------------------
  {
    id: 'guide-seal-air-leaks-windows',
    slug: 'seal-air-leaks-windows',
    title: 'How to Seal Air Leaks Around Windows',
    excerpt:
      'Drafty windows waste energy and money. Seal air leaks with caulk, weatherstripping, and shrink film in 60-90 minutes to cut heating and cooling costs by up to 15%.',
    content: `Windows are the second-largest source of air leaks in most homes (after doors). Sealing the gaps, cracks, and failed seals around windows is one of the highest-ROI energy improvements you can make — $20-$50 in materials can save $100-$300 per year in energy costs.

## Where Windows Leak

Air leaks around windows in three places: (1) the gap between the window frame and the wall (sealed with caulk), (2) the gap between the sash and the frame (sealed with weatherstripping), and (3) through the glass itself (addressed with insulating film or storm windows). This guide addresses all three.

## Finding the Leaks

On a windy day, hold a lit incense stick near window edges and watch the smoke. Deflection indicates air movement. You can also feel for drafts with a wet hand — moving air feels cold on damp skin.`,
    category: 'hvac-climate',
    difficulty: 'beginner',
    estimatedTime: '60-90 minutes',
    estimatedCost: { low: 15, mid: 35, high: 60, diyVsPro: 'A contractor charges $150-$400 for window sealing. DIY materials cost $15-$60 for an entire house.' },
    tools: ['Caulk gun', 'Utility knife', 'Putty knife', 'Tape measure', 'Scissors', 'Hair dryer (for shrink film)', 'Incense stick (for leak detection)'],
    materials: ['Exterior paintable caulk (silicone or polyurethane)', 'V-strip or foam weatherstripping', 'Window insulation shrink film kit', 'Backer rod (for large gaps)', 'Rope caulk (for temporary fixes)'],
    steps: [
      { stepNumber: 1, title: 'Detect Air Leaks', description: 'Light an incense stick and slowly move it around the perimeter of each window — along the frame, where the sash meets the frame, and at the meeting rail where upper and lower sashes overlap. Watch the smoke stream for deflection. Mark every leak point with painter\'s tape. Check both inside and outside. Do this on a windy day for the most obvious results.', imagePrompt: 'Incense smoke being deflected near a window edge indicating an air leak, painter tape marking the leak location, diagnostic process', proTip: 'Turn off all exhaust fans and close the fireplace damper during your air leak test. These create air movement that masks small window leaks.' },
      { stepNumber: 2, title: 'Caulk the Exterior Frame Joints', description: 'Outside, inspect where the window frame meets the siding. Old caulk may be cracked or missing. Use a putty knife to remove old caulk and debris. For gaps wider than 1/4 inch, press backer rod (foam rope) into the gap first, leaving 1/4 inch depth for caulk. Apply a continuous bead of exterior-grade paintable caulk along all frame-to-siding joints. Smooth with a wet finger. Let cure 24 hours.', imagePrompt: 'Caulk gun applying a bead along the exterior window frame where it meets the siding, old cracked caulk removed, clean new seal being applied' },
      { stepNumber: 3, title: 'Caulk the Interior Trim', description: 'Inside, check where the window casing (trim) meets the wall. Gaps here allow air from the wall cavity to enter the room. Apply interior paintable caulk along the top and sides of the trim. Also caulk the joint between the sill and the wall. Use a smooth, thin bead — this caulk will be visible, so neatness matters.', imagePrompt: 'Caulk being applied where the interior window trim meets the wall, thin clean bead, smooth finish for visible indoor joint' },
      { stepNumber: 4, title: 'Apply Weatherstripping to the Sash', description: 'For double-hung windows, apply V-strip (self-adhesive bronze or plastic) to the channels where the sash slides. The V-strip compresses when the sash closes, creating a seal. For the meeting rail (where upper and lower sashes overlap), apply foam compression tape. For casement windows, replace the perimeter weatherstrip with a matching profile. Test by closing the window — it should seal snugly without requiring excessive force.', imagePrompt: 'V-strip weatherstripping being applied to the window channel, sash compressing the strip when closed, foam tape on the meeting rail, snug seal' },
      { stepNumber: 5, title: 'Install Window Insulation Film (For Winter)', description: 'For single-pane or drafty windows, apply a window insulation shrink film kit. Clean the window frame with rubbing alcohol. Apply the double-sided tape to the frame perimeter. Press the film onto the tape, leaving it slightly loose. Use a hair dryer on medium heat to shrink the film taut and wrinkle-free. The trapped air layer acts as insulation, reducing heat loss by up to 50%.', imagePrompt: 'Window insulation film being applied with double-sided tape, hair dryer shrinking the film drum-tight, clear insulating layer over the window, winter prep', proTip: 'Apply shrink film to the inside of the trim, not the sash. This creates a larger air gap and better insulation. It also doesn\'t interfere with opening the window if you need to (though you\'d need to remove the film).' },
      { stepNumber: 6, title: 'Seal the Window Lock Hardware', description: 'The lock mechanism on double-hung windows often has gaps around it. Apply a thin bead of clear silicone caulk around the lock housing on the interior side. For sliding windows, check the latch and weep holes. Don\'t seal weep holes — they\'re designed to drain water from the sill track.', imagePrompt: 'Clear silicone being applied around a window lock mechanism to seal the small gap, careful application avoiding the lock function' },
      { stepNumber: 7, title: 'Verify the Seal and Calculate Savings', description: 'Repeat the incense smoke test around every sealed window. The smoke should now drift straight up with no deflection at the sealed points. Close all windows firmly and verify the weatherstripping compresses. A properly sealed window should feel noticeably warmer to the touch on cold days compared to before the sealing work.', imagePrompt: 'Incense smoke rising straight near a sealed window (no deflection), before-and-after comparison, thermal comfort improvement confirmed' },
    ],
    tips: ['Caulk and weatherstrip ALL windows at once — air leaks are cumulative, and sealing just a few windows redirects airflow to the remaining leaky ones.', 'Window insulation film is virtually invisible when properly applied. It\'s the most cost-effective insulation improvement for single-pane windows.', 'Replace old putty (glazing compound) around single-pane glass. Crumbling putty lets air leak around the glass pane itself.', 'For maximum impact, combine window sealing with door weatherstripping in one session.'],
    warnings: ['Don\'t seal weep holes in the window sill track. These drain water and preventing drainage causes rot and mold.', 'Ensure at least one window in each bedroom can still be opened for fire escape. Don\'t permanently seal any bedroom window.', 'If your windows have visible condensation between double-pane glass, the seal has failed. Sealing the frame won\'t fix this — the glass unit needs replacement.'],
    affiliateProducts: [
      { id: 'prod-3m-shrink-film', name: '3M Indoor Window Insulation Kit (5-window)', description: 'Crystal-clear shrink film for 5 standard windows. Includes double-sided tape and film. Shrinks smooth with a hair dryer. Reduces heating costs up to 15%.', price: 19.98, affiliateUrl: 'https://www.amazon.com/dp/B00002NCJI', retailer: 'amazon', imageUrl: '/products/3m-window-film.jpg', rating: 4.5, reviewCount: 28400, badge: 'Best Seller' },
      { id: 'prod-dap-alex-plus', name: 'DAP Alex Plus Acrylic Latex Caulk with Silicone (10.1 oz)', description: 'Paintable interior/exterior caulk with silicone for extra flexibility. 35-year durability. Excellent adhesion to wood, vinyl, and aluminum window frames.', price: 4.98, affiliateUrl: 'https://www.homedepot.com/p/DAP-Alex-Plus/100052403', retailer: 'homedepot', imageUrl: '/products/dap-alex-plus.jpg', rating: 4.6, reviewCount: 14800, badge: 'Best Value' },
      { id: 'prod-frost-king-vstrip', name: 'Frost King V-Seal Weather Strip (17 ft, Clear)', description: 'Self-adhesive V-strip for double-hung and sliding windows. Compresses to fill gaps. Clear plastic won\'t show. Two rolls cover 3-4 standard windows.', price: 5.98, affiliateUrl: 'https://www.amazon.com/dp/B000BQYQIE', retailer: 'amazon', imageUrl: '/products/frost-king-vstrip.jpg', rating: 4.3, reviewCount: 7200 },
    ],
    featuredImage: '/images/guides/seal-air-leaks-windows.jpg',
    publishedAt: '2025-10-15T09:00:00Z',
    updatedAt: '2026-01-28T14:00:00Z',
    author: defaultAuthor,
    seo: { title: 'How to Seal Air Leaks Around Windows | Repair & Refinish', description: 'Seal drafty windows with caulk, weatherstripping, and insulation film. Save up to 15% on energy bills with this 60-90 minute beginner project.', keywords: ['seal window air leaks', 'drafty windows fix', 'window caulking', 'window weatherstripping', 'window insulation film', 'energy efficiency windows', 'seal drafty windows'] },
    faqs: [
      { question: 'How much can sealing windows save on energy bills?', answer: 'The Department of Energy estimates sealing air leaks can reduce heating and cooling costs by 10-20%. For windows specifically, the savings depend on how leaky they are, but $50-$200/year per home is typical.' },
      { question: 'Should I replace my windows or just seal them?', answer: 'Sealing is always the first step — it costs $20-$60 and takes an afternoon. Window replacement costs $300-$1,000 per window. Seal first, and if you still have comfort or condensation issues, then evaluate replacement. Many homeowners find sealing eliminates 80% of their window problems.' },
      { question: 'Does window film reduce visibility?', answer: 'Quality window insulation film (like 3M) is virtually invisible when properly applied with a hair dryer. It may reduce clarity by 1-2% but is unnoticeable in daily use. It\'s meant for winter use and removed in spring.' },
    ],
    relatedGuides: ['weather-strip-door', 'replace-thermostat', 'change-hvac-filter'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide: Insulate Your Attic
  // ---------------------------------------------------------------------------
  {
    id: 'guide-insulate-attic',
    slug: 'insulate-attic',
    title: 'How to Insulate Your Attic',
    excerpt:
      'An under-insulated attic is the biggest energy waster in most homes. Adding blown-in or batt insulation in 4-6 hours can cut heating bills by 20-30% and pay for itself in one winter.',
    content: `The attic is where most homes lose the most heat — hot air rises and escapes through thin or missing insulation above your ceiling. The Department of Energy recommends R-38 to R-60 of attic insulation for most climate zones. Many homes, especially older ones, have R-19 or less.

## How Much Do You Need?

Measure your current insulation depth: fiberglass batts provide about R-3.2 per inch, so 6 inches of batts is roughly R-19. To reach R-38, you'd need to add about 6 more inches. Blown-in cellulose or fiberglass provides R-2.5 to R-3.7 per inch.

## Blown-In vs. Batts

For adding to existing insulation, blown-in is superior — it fills gaps, conforms to irregular spaces, and installs faster. Many home improvement stores rent blowing machines free with a minimum insulation purchase. Batts work well for open attics with standard joist spacing.`,
    category: 'hvac-climate',
    difficulty: 'intermediate',
    estimatedTime: '4-6 hours',
    estimatedCost: { low: 300, mid: 600, high: 1000, diyVsPro: 'Professional attic insulation costs $1,500-$3,500. DIY blown-in insulation for a 1,500 sq ft attic costs $300-$1,000 in materials (machine rental often free with purchase).' },
    tools: ['Insulation blowing machine (rental)', 'Utility knife', 'Tape measure', 'Staple gun', 'Work light/headlamp', 'Dust mask (N95 or P100)', 'Safety glasses', 'Long-sleeve shirt and gloves'],
    materials: ['Blown-in cellulose or fiberglass insulation (bags)', 'Batt insulation (if using batts)', 'Foam board for attic hatch insulation', 'Weatherstrip for attic hatch', 'Baffles/rafter vents (for soffit vents)'],
    steps: [
      { stepNumber: 1, title: 'Assess Current Insulation and Calculate Needs', description: 'Go into your attic and measure the depth of existing insulation. Fiberglass batts are about R-3.2 per inch; loose-fill cellulose is about R-3.5 per inch. Check your climate zone on the DOE insulation map — most areas need R-38 to R-60 total. Calculate how many inches you need to add. For blown-in cellulose, the bags list coverage at different R-values per bag.', imagePrompt: 'Tape measure checking insulation depth in an attic, comparing to an R-value chart, calculating additional insulation needed, attic with existing insulation', proTip: 'Check the DOE insulation calculator online — enter your zip code and it tells you exactly what R-value you need and how much material to buy.' },
      { stepNumber: 2, title: 'Seal Air Leaks Before Insulating', description: 'Before adding insulation, seal all air leaks from the living space into the attic. The biggest culprits: gaps around electrical wires and pipes penetrating the ceiling, the attic hatch perimeter, recessed light housings, and the tops of interior wall cavities. Use expanding foam sealant for gaps around pipes and wires. Use metal flashing and high-temperature caulk around anything that generates heat (exhaust flues, recessed lights).', imagePrompt: 'Expanding foam being applied around a pipe penetration in the attic floor, sealing the gap between the ceiling drywall and the framing, air sealing process', warning: 'Do NOT seal around recessed lights unless they are IC-rated (Insulation Contact). Non-IC lights generate heat and can start fires if insulated over or sealed too tightly.' },
      { stepNumber: 3, title: 'Install Rafter Vents at the Soffits', description: 'If your home has soffit vents (vents in the eave overhang), install polystyrene rafter vents (baffles) in each rafter bay where the roof meets the attic floor. Staple them in place. These vents create an air channel from the soffit to the attic space, preventing insulation from blocking airflow. Proper attic ventilation prevents ice dams and moisture buildup.', imagePrompt: 'Polystyrene rafter vent being stapled between rafters at the eave, creating an air channel above the insulation, soffit vent airflow path diagram' },
      { stepNumber: 4, title: 'Set Up the Blowing Machine', description: 'Rent a blowing machine from the hardware store (usually free with a purchase of 10+ bags of insulation). Position the machine outside near the attic access. Feed the hose up through the attic hatch. One person operates the machine below, feeding bags of insulation into the hopper. The other person directs the hose in the attic. The machine breaks up the compressed cellulose and blows it through the hose.', imagePrompt: 'Insulation blowing machine positioned outside the attic hatch, hose running up into the attic, bags of cellulose being loaded into the hopper, two-person operation' },
      { stepNumber: 5, title: 'Blow Insulation Starting From the Far End', description: 'Start blowing insulation at the farthest point from the attic access and work backward toward the hatch. This prevents you from having to walk over freshly blown insulation. Aim for an even depth — use a depth gauge (a marked stick) to check depth as you work. Fill all areas evenly, including around ductwork, plumbing, and between joists. Don\'t block soffit vents (the rafter baffles you installed protect them).', imagePrompt: 'Person directing a blowing hose in an attic, cellulose insulation building up evenly between joists, depth gauge checking coverage, working from far end toward access', proTip: 'Blow slightly more than your target depth — loose-fill insulation settles 10-15% over the first year.' },
      { stepNumber: 6, title: 'Insulate the Attic Hatch', description: 'The attic hatch is often completely uninsulated — a major heat loss point. Cut rigid foam board to fit the back of the hatch and glue it on (two layers of 2-inch foam = R-20). Apply adhesive-backed foam weatherstripping around the hatch frame so the door seals when closed. If your attic access is a pull-down staircase, build an insulated box that sits over the opening from inside the attic.', imagePrompt: 'Rigid foam board being glued to the back of an attic hatch, foam weatherstripping applied to the frame, insulated and sealed attic access' },
      { stepNumber: 7, title: 'Clean Up and Verify Coverage', description: 'Check the entire attic one final time for even coverage. No joist tops should be visible — insulation should be above the joist line everywhere. Verify rafter baffles are still unblocked. Remove the blowing machine hose and clean up any spilled insulation. Note the date and R-value achieved on a label stuck inside the attic hatch for future reference.', imagePrompt: 'Evenly insulated attic floor with no joist tops visible, complete coverage check, R-value label being noted, clean finished attic insulation job' },
    ],
    tips: ['Buy insulation and rent the blowing machine on the same trip. Most stores include the machine rental free with a 10+ bag purchase.', 'Cellulose insulation (recycled paper treated with fire retardant) has a slightly higher R-value per inch than blown fiberglass and is better at filling irregular spaces.', 'Seal all air leaks BEFORE adding insulation. Insulation slows heat transfer but doesn\'t stop air movement — unsealed gaps let warm air bypass the insulation entirely.', 'Wear an N95 mask, safety glasses, long sleeves, and gloves. Loose-fill insulation is irritating to skin, eyes, and lungs.'],
    warnings: ['Never lay insulation over recessed lights unless they are IC-rated (Insulation Contact). Non-IC lights can overheat and start a fire.', 'Don\'t block soffit vents with insulation. Install rafter baffles first to maintain ventilation. Blocked vents cause ice dams and moisture damage.', 'Work carefully on the joists — the attic floor between joists is just drywall. Stepping between joists means stepping through your ceiling.', 'If your attic has vermiculite insulation (small gray/brown pellets), do NOT disturb it — it may contain asbestos. Have it tested before adding insulation.'],
    affiliateProducts: [
      { id: 'prod-greenfiber-cellulose', name: 'GreenFiber Cellulose Blown-In Insulation (19 lb bag)', description: 'Recycled paper cellulose with fire retardant. R-3.8 per inch. Each bag covers 40.5 sq ft at R-30. Meets ASTM standards. Made in USA. Works with any blowing machine.', price: 12.48, affiliateUrl: 'https://www.homedepot.com/p/GreenFiber-Cellulose/100318582', retailer: 'homedepot', imageUrl: '/products/greenfiber-cellulose.jpg', rating: 4.5, reviewCount: 8900, badge: 'Best Value' },
      { id: 'prod-owens-corning-batts', name: 'Owens Corning R-30 Unfaced Fiberglass Batt Insulation (15" x 25\')', description: 'Standard fiberglass batt for attic insulation. 9.5" thick for R-30 coverage. Unfaced for adding over existing insulation. Fits standard 16" on-center joists.', price: 34.98, affiliateUrl: 'https://www.homedepot.com/p/Owens-Corning-R30/100320574', retailer: 'homedepot', imageUrl: '/products/owens-corning-r30.jpg', rating: 4.4, reviewCount: 6200 },
      { id: 'prod-great-stuff-foam', name: 'Great Stuff Gaps & Cracks Expanding Foam Sealant (12 oz)', description: 'Expanding polyurethane foam for sealing air leaks around pipes, wires, and ducts in the attic. Fills gaps up to 1 inch. Permanently flexible and airtight.', price: 5.98, affiliateUrl: 'https://www.homedepot.com/p/Great-Stuff-Gaps-Cracks/100003351', retailer: 'homedepot', imageUrl: '/products/great-stuff.jpg', rating: 4.6, reviewCount: 22400, badge: 'Our Pick' },
    ],
    featuredImage: '/images/guides/insulate-attic.jpg',
    publishedAt: '2025-09-25T09:00:00Z',
    updatedAt: '2026-02-05T14:00:00Z',
    author: defaultAuthor,
    seo: { title: 'How to Insulate Your Attic (Blown-In DIY Guide) | Repair & Refinish', description: 'Insulate your attic in 4-6 hours with blown-in cellulose. Save 20-30% on heating bills. Covers air sealing, ventilation baffles, and blowing machine operation.', keywords: ['insulate attic', 'attic insulation DIY', 'blown in insulation', 'attic insulation cost', 'cellulose insulation', 'R-value attic', 'energy savings insulation'] },
    faqs: [
      { question: 'How much does attic insulation save on energy bills?', answer: 'The DOE estimates upgrading from R-11 to R-38 can reduce heating costs by 20-30%. For an average home spending $2,000/year on heating, that\'s $400-$600 in annual savings — the project pays for itself in 1-2 winters.' },
      { question: 'Can I add new insulation over old insulation?', answer: 'Yes, in most cases. If the old insulation is dry and in reasonable condition, simply blow new insulation on top. Don\'t compress existing batts — that reduces their R-value. If the old insulation is wet, moldy, or contaminated, remove it first.' },
      { question: 'Is cellulose or fiberglass better for attic insulation?', answer: 'Cellulose has a slightly higher R-value per inch (R-3.5-3.8 vs. R-2.5-3.2 for blown fiberglass). It also fills irregular spaces better and is less irritating to install. Fiberglass is more moisture-resistant. Both are effective — cellulose is preferred by most energy auditors.' },
    ],
    relatedGuides: ['seal-air-leaks-windows', 'replace-thermostat', 'change-hvac-filter'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide: Clean Air Ducts Yourself
  // ---------------------------------------------------------------------------
  {
    id: 'guide-clean-air-ducts',
    slug: 'clean-air-ducts',
    title: 'How to Clean Air Ducts Yourself',
    excerpt:
      'Dusty, dirty air ducts reduce airflow and circulate allergens through your home. Clean accessible ducts yourself in 2-3 hours with a vacuum, brush, and basic tools — no professional equipment needed.',
    content: `While professional duct cleaning uses truck-mounted vacuums and rotary brushes, you can make a significant improvement in your duct cleanliness with tools you already own. DIY duct cleaning focuses on the accessible parts of the system: register vents, the first 6-8 feet of each duct run, the return air plenum, and the blower compartment.

## When to Clean Your Ducts

The EPA recommends duct cleaning when you see visible mold, excessive dust blowing from vents, evidence of vermin, or after a renovation that generated significant dust. Routine cleaning every 3-5 years maintains good air quality.

## What DIY Covers vs. Professional

DIY cleaning reaches the registers, accessible duct sections, and the furnace blower. Professional cleaning uses 200+ CFM vacuum trucks and agitation devices to clean the entire duct system including long runs and hard-to-reach branches. For most homes, DIY cleaning every 1-2 years with professional cleaning every 5-7 years is a good balance.`,
    category: 'hvac-climate',
    difficulty: 'intermediate',
    estimatedTime: '2-3 hours',
    estimatedCost: { low: 0, mid: 20, high: 40, diyVsPro: 'Professional duct cleaning costs $300-$600. DIY cleaning costs $0-$40 using tools and supplies you likely own.' },
    tools: ['Shop vacuum with hose attachment', 'Dryer vent brush or long-handled duct brush', 'Screwdriver (for removing register covers)', 'Flashlight', 'Step stool or ladder', 'Microfiber cloths'],
    materials: ['Furnace filter (new one for after cleaning)', 'Paper towels', 'Mild dish soap', 'Dust mask (N95)'],
    steps: [
      { stepNumber: 1, title: 'Turn Off the HVAC System', description: 'Turn off your heating and cooling system at the thermostat. This prevents the blower from turning on and blowing dislodged dust through the house while you\'re cleaning. You want the system completely off so loosened debris stays in the ducts until you vacuum it out.', imagePrompt: 'Thermostat being turned off, HVAC system shutting down, preparing for duct cleaning, safety-first approach' },
      { stepNumber: 2, title: 'Remove and Wash All Register Covers', description: 'Unscrew and remove every supply and return register cover in the house. Most are held by two screws. Soak the covers in warm soapy water in the bathtub or a large bucket. Scrub with a brush to remove built-up dust and grime. Rinse and set aside to dry. While the covers are off, you have clear access to the duct openings.', imagePrompt: 'Register cover being unscrewed from the ceiling, stack of dirty covers soaking in soapy water, scrubbing with a brush, clean covers drying', proTip: 'Take a photo of each register location so you remember which cover goes where. Covers aren\'t always interchangeable — different sizes and paint colors.' },
      { stepNumber: 3, title: 'Vacuum Inside Each Duct Opening', description: 'Insert the shop vacuum hose into each duct opening and vacuum as far as you can reach (typically 6-8 feet). Use the crevice tool to reach the sides and bottom of the duct. For floor registers, vacuum the duct boot (the sheet metal box connecting the duct to the register). For ceiling registers, use a ladder and vacuum upward — gravity has probably deposited dust on the bottom of the horizontal run.', imagePrompt: 'Shop vacuum hose inserted into a floor register opening, vacuuming dust from inside the duct, flashlight illuminating the duct interior, thorough cleaning' },
      { stepNumber: 4, title: 'Brush Loose Debris From Duct Walls', description: 'Insert a long-handled duct brush (or a dryer vent brush on extension rods) into each duct and brush the interior walls with a twisting motion. This dislodges dust and debris that\'s stuck to the duct surface. Pull the brush out and vacuum the loosened debris. Repeat for each duct. Focus extra attention on return air ducts — they tend to accumulate more dust because they pull air in.', imagePrompt: 'Long-handled brush being twisted inside a duct to dislodge wall debris, brush being pulled out with dust, then vacuuming the loosened material' },
      { stepNumber: 5, title: 'Clean the Return Air Plenum', description: 'The return air plenum is the large sheet-metal box between your return duct and the furnace. Open the access panel (usually held by sheet metal screws or latches). Vacuum the interior thoroughly — this area collects the most dust in the system. Wipe down the interior walls with a damp microfiber cloth. Check for mold or moisture stains, which indicate a humidity problem.', imagePrompt: 'Return air plenum access panel being opened, shop vacuum cleaning the interior, damp cloth wiping the walls, large dust accumulation being removed', warning: 'If you see visible mold growth inside the plenum or ducts, stop and call a professional. Mold in HVAC systems requires specialized remediation to prevent spreading spores throughout the house.' },
      { stepNumber: 6, title: 'Clean the Blower Compartment', description: 'Open the blower compartment door on the furnace. Use the vacuum to clean the blower wheel (the squirrel-cage fan) and the area around it. Dust accumulates on the blower blades and reduces airflow. Use a damp cloth to wipe the blower housing. If the blower is extremely dirty, you may need to remove it and clean it more thoroughly — but for most homes, vacuuming and wiping is sufficient.', imagePrompt: 'Furnace blower compartment open, vacuum cleaning the blower wheel, dust being removed from the squirrel-cage fan blades, cloth wiping the housing' },
      { stepNumber: 7, title: 'Reinstall Covers and Replace the Filter', description: 'Reinstall all clean, dry register covers. Install a fresh HVAC filter. Turn the system back on and let it run for 30 minutes. Check each register for proper airflow. Inspect the area around each register for any dust that may have been dislodged during cleaning — vacuum the surrounding floor and wall area.', imagePrompt: 'Clean register covers being screwed back in, new HVAC filter being installed, system turned on, clean air flowing from vents, finished duct cleaning' },
    ],
    tips: ['Clean your ducts after any renovation that generates dust (drywall work, sanding, demolition). Construction dust settles in ducts and circulates for months.', 'While register covers are off, check for disconnected or torn flexible duct — this is a common cause of poor airflow and energy waste.', 'A dryer vent brush kit ($13 on Amazon) with extension rods works perfectly for reaching into ducts.', 'Clean ducts paired with a new MERV 11 filter creates a noticeable improvement in indoor air quality.'],
    warnings: ['If you see mold growth in your ducts, call a professional. Disturbing mold without proper containment spreads spores through the house.', 'Wear an N95 dust mask during duct cleaning. The dust contains allergens, mold spores, and potentially harmful particles.', 'Do not use chemical sprays or disinfectants inside ductwork unless specifically designed for HVAC use. Many household cleaners release harmful fumes when they pass through the heating system.'],
    affiliateProducts: [
      { id: 'prod-holikme-duct-brush', name: 'Holikme Dryer Vent Cleaner Brush Kit (30 feet)', description: 'Flexible lint brush with multiple extension rods. Attaches to any drill for powered cleaning. Works for dryer vents AND HVAC ducts. Reaches 30 feet into duct runs.', price: 12.99, affiliateUrl: 'https://www.amazon.com/dp/B08B37ZM7C', retailer: 'amazon', imageUrl: '/products/holikme-vent-kit.jpg', rating: 4.4, reviewCount: 72300, badge: 'Best Seller' },
      { id: 'prod-craftsman-shopvac', name: 'CRAFTSMAN 6-Gallon Shop Vacuum', description: 'Powerful wet/dry vacuum perfect for duct cleaning. Includes hose, crevice tool, and floor nozzle. 3.5 peak HP motor for strong suction. Compact and portable.', price: 69.98, affiliateUrl: 'https://www.lowes.com/pd/CRAFTSMAN-6-Gallon/5001880047', retailer: 'lowes', imageUrl: '/products/craftsman-shopvac.jpg', rating: 4.5, reviewCount: 16800 },
      { id: 'prod-filtrete-1500-duct', name: 'Filtrete 1500 MPR Allergen Reduction Filter (2-pack)', description: 'MERV 12 filter catches dust, pollen, mold, and pet dander. Install fresh after duct cleaning for maximum air quality improvement. 90-day replacement cycle.', price: 24.99, affiliateUrl: 'https://www.amazon.com/dp/B000XNQ6N4', retailer: 'amazon', imageUrl: '/products/filtrete-1500.jpg', rating: 4.7, reviewCount: 32400, badge: 'Best Value' },
    ],
    featuredImage: '/images/guides/clean-air-ducts.jpg',
    publishedAt: '2025-11-18T09:00:00Z',
    updatedAt: '2026-02-22T14:00:00Z',
    author: defaultAuthor,
    seo: { title: 'How to Clean Air Ducts Yourself (DIY Guide) | Repair & Refinish', description: 'Clean your HVAC air ducts in 2-3 hours with a shop vacuum and brush. Improve air quality and airflow. Save $300-$600 over professional duct cleaning.', keywords: ['clean air ducts', 'DIY duct cleaning', 'air duct cleaning', 'HVAC duct cleaning', 'clean ductwork', 'vent cleaning', 'improve air quality'] },
    faqs: [
      { question: 'How often should air ducts be cleaned?', answer: 'The EPA recommends cleaning when you see visible dust, mold, or vermin evidence. For most homes, DIY cleaning every 1-2 years and professional cleaning every 5-7 years maintains good air quality. Homes with pets, smokers, or allergies benefit from more frequent cleaning.' },
      { question: 'Does duct cleaning really improve air quality?', answer: 'Yes, if your ducts are actually dirty. Studies show that cleaning contaminated ducts reduces airborne particulates by 30-50%. However, if your ducts are relatively clean, the improvement is minimal. The biggest air quality impact comes from a clean filter, not clean ducts.' },
      { question: 'Can I use bleach to clean mold in ducts?', answer: 'No. Never use bleach or household chemicals in ductwork. The fumes circulate through the entire house when the system runs. If you find mold, call a professional HVAC contractor who specializes in mold remediation. They use EPA-approved biocides applied with proper containment.' },
    ],
    relatedGuides: ['change-hvac-filter', 'replace-thermostat', 'seal-air-leaks-windows'],
    status: 'published',
  },
];

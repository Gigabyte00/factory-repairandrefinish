import type { Guide } from '@/types';
import { defaultAuthor } from '../site-config';

export const applianceRepairGuides: Guide[] = [
  // ---------------------------------------------------------------------------
  // Guide 23: Clean a Dishwasher That's Not Draining
  // ---------------------------------------------------------------------------
  {
    id: 'guide-clean-dishwasher-not-draining',
    slug: 'clean-dishwasher-not-draining',
    title: 'How to Clean a Dishwasher That\'s Not Draining',
    excerpt:
      'Standing water in the bottom of your dishwasher is usually caused by a clogged filter, blocked drain hose, or dirty air gap. Fix it in 30 minutes with no special tools — and no service call.',
    content: `A dishwasher that doesn't drain completely is one of the most common appliance complaints. In most cases, it's not a broken pump or motor — it's a blockage in the filter, drain hose, or air gap that you can clear yourself in minutes.

## How Dishwasher Drainage Works

When the dishwasher finishes a cycle, a drain pump pushes dirty water out through a drain hose that connects to your kitchen sink's drain or garbage disposal. If any part of this path is clogged — the filter basket, the drain hose, the air gap (the chrome cap on the sink), or the disposal knockout plug — water backs up into the dishwasher.

## When to Call a Pro

If you've cleared all blockages and the dishwasher still won't drain, the drain pump may be faulty. A new pump costs $30-$80, and replacement is a more involved repair that some homeowners can handle and others should leave to a tech.`,
    category: 'appliance-repair',
    difficulty: 'beginner',
    estimatedTime: '20-30 minutes',
    estimatedCost: {
      low: 0,
      mid: 5,
      high: 15,
      diyVsPro: 'An appliance repair service call costs $100-$200 for this diagnosis. DIY cost is $0-$15 (you likely already have what you need).',
    },
    tools: [
      'Towels or sponge',
      'Screwdriver (Phillips or Torx, depending on model)',
      'Shallow pan or baking dish',
      'Wire hanger or pipe cleaner',
      'Flashlight',
    ],
    materials: [
      'White vinegar (2 cups)',
      'Baking soda (1/2 cup)',
      'Dish soap',
      'Replacement air gap cap (if cracked)',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Run the Garbage Disposal',
        description:
          'If your dishwasher drains through the garbage disposal, the disposal itself may be clogged. Turn on the disposal and run hot water for 30 seconds. If the disposal is clear, the clog is elsewhere. If the disposal grinds but doesn\'t drain, the disposal drain is clogged (clear it with a plunger on the sink). This single step fixes the problem about 20% of the time.',
        imagePrompt:
          'Hand turning on garbage disposal under kitchen sink, hot water running, checking if disposal drain is clear, diagnostic first step',
        proTip:
          'If you recently installed a new garbage disposal, check that the knockout plug has been removed from the dishwasher inlet. This is the #1 overlooked cause of dishwasher drainage failure after a new disposal install.',
      },
      {
        stepNumber: 2,
        title: 'Clean the Dishwasher Filter',
        description:
          'Remove the bottom dish rack. Locate the filter assembly at the bottom of the dishwasher near the spray arm (it\'s a cylindrical screen or a flat filter cover). Twist the filter counterclockwise and pull it out. You\'ll likely find a gross buildup of food particles, grease, and debris. Rinse the filter under hot running water and scrub with an old toothbrush and dish soap. For stubborn grease, soak the filter in hot vinegar water for 10 minutes.',
        imagePrompt:
          'Dishwasher filter being removed from the bottom of the tub, showing food debris buildup, then being scrubbed clean under running water, before-and-after',
        proTip:
          'Clean the filter once a month to prevent drainage problems. Most dishwashers built after 2010 have a manual filter that needs regular cleaning (older models had self-cleaning grinders).',
      },
      {
        stepNumber: 3,
        title: 'Clear the Drain Basket and Sump',
        description:
          'With the filter removed, look into the sump area (the recessed space where the filter was). Remove any food debris, broken glass, or foreign objects you see. Use a flashlight to check for blockages. You may find a bottle cap, piece of bone, or chunk of label that\'s blocking the drain port. Check the drain port opening and clear it with a straightened wire hanger if it appears clogged.',
        imagePrompt:
          'Looking into the dishwasher sump with a flashlight after filter removal, removing debris with fingers and a wire hanger, clearing the drain port opening',
      },
      {
        stepNumber: 4,
        title: 'Check and Clean the Air Gap',
        description:
          'If your sink has an air gap (a small chrome cylinder usually next to the faucet), remove the decorative cap and the inner cap. Look inside for food debris. Clean it out with a bottle brush or pipe cleaner. Water and food particles sometimes back up through the air gap, indicating a clog between the air gap and the disposal. Blow compressed air through the hose from the air gap to the disposal to clear it.',
        imagePrompt:
          'Kitchen sink air gap device being opened, inner cap removed showing debris, bottle brush cleaning the interior, chrome cap beside sink faucet',
      },
      {
        stepNumber: 5,
        title: 'Inspect the Drain Hose',
        description:
          'The drain hose runs from the dishwasher pump to the garbage disposal or sink drain. Check under the sink where the hose connects — disconnect it and inspect for kinks, clogs, or buildup. A kinked hose is a common cause of poor drainage, especially if the dishwasher was recently installed or the cabinet was reorganized. Blow through the hose to check for blockages (or use a flashlight to see through it). Straighten any kinks and reconnect.',
        imagePrompt:
          'Under-sink drain hose being inspected, checking for kinks and clogs, hose disconnected from disposal connection, straightening and reconnecting',
        warning:
          'Place a towel or shallow pan under the drain hose connection before disconnecting it. Water in the hose will spill when you remove it.',
      },
      {
        stepNumber: 6,
        title: 'Run a Cleaning Cycle and Test',
        description:
          'Reinstall the filter and replace any parts you removed. Place a cup of white vinegar in a dishwasher-safe measuring cup on the top rack and run a hot water cycle (empty dishwasher). This flushes the drain system and removes grease buildup. When the cycle ends, open the dishwasher and check for standing water — there should be little to no water in the bottom (a thin film is normal).',
        imagePrompt:
          'Cup of white vinegar placed on dishwasher top rack, running a hot cleaning cycle, then opening the door to check for clear drainage, clean empty tub',
        proTip:
          'After the vinegar cycle, sprinkle 1/2 cup of baking soda on the bottom of the tub and run another short hot cycle. This freshens the interior and removes odors.',
      },
    ],
    tips: [
      'Clean the dishwasher filter once a month. This single habit prevents 90% of drainage problems.',
      'Scrape plates before loading (no need to pre-rinse, but remove large food pieces). Seeds, bones, and labels are common culprits.',
      'Run hot water at the kitchen faucet for 30 seconds before starting the dishwasher. This ensures the first fill is hot, which dissolves grease better.',
      'Run the garbage disposal before starting the dishwasher. A clogged disposal blocks the dishwasher drain path.',
    ],
    warnings: [
      'Never put your hand into the dishwasher sump without first checking for broken glass. Use a flashlight and pliers to remove sharp objects.',
      'If the dishwasher is completely full of standing water (not just a puddle), bail most of it out before removing the filter to avoid a flood.',
      'If you smell gas near the dishwasher, leave the house and call your gas company. Some dishwashers are near gas lines that could have shifted.',
    ],
    affiliateProducts: [
      {
        id: 'prod-affresh-dishwasher',
        name: 'Affresh Dishwasher Cleaner Tablets (6-count)',
        description:
          'Drop-in cleaning tablets that dissolve mineral buildup, grease, and food residue inside the dishwasher tub, pump, and drain. Use monthly for optimal performance.',
        price: 6.54,
        affiliateUrl: 'https://www.amazon.com/dp/B00SXO3D4S',
        retailer: 'amazon',
        imageUrl: '/products/affresh-dishwasher.jpg',
        rating: 4.6,
        reviewCount: 48200,
        badge: 'our-pick',
      },
      {
        id: 'prod-finish-machine-clean',
        name: 'Finish Dishwasher Machine Cleaner (3-count)',
        description:
          'Liquid cleaner that targets grease and limescale in the hidden parts of your dishwasher. Place upside-down in the bottom rack and run empty. Works in a single cycle.',
        price: 7.99,
        affiliateUrl: 'https://www.amazon.com/dp/B00U5SGL40',
        retailer: 'amazon',
        imageUrl: '/products/finish-machine-clean.jpg',
        rating: 4.5,
        reviewCount: 21300,
        badge: 'best-value',
      },
      {
        id: 'prod-general-elec-airgap',
        name: 'Eastman Air Gap Kit (Chrome)',
        description:
          'Replacement air gap assembly with cap, body, and hose. Chrome finish matches most kitchen fixtures. Easy 10-minute installation. Prevents dishwasher backflow.',
        price: 11.98,
        affiliateUrl: 'https://www.homedepot.com/p/Eastman-Air-Gap/301990653',
        retailer: 'homedepot',
        imageUrl: '/products/eastman-airgap.jpg',
        rating: 4.3,
        reviewCount: 1800,
      },
    ],
    featuredImage: '/guides/clean-dishwasher-not-draining-hero.jpg',
    publishedAt: '2026-03-14T09:00:00Z',
    updatedAt: '2026-03-21T10:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Fix a Dishwasher That Won\'t Drain (5 Fixes) | Repair & Refinish',
      description:
        'Fix a dishwasher that\'s not draining in 30 minutes. Step-by-step guide for cleaning the filter, clearing the drain hose, checking the air gap, and more.',
      keywords: [
        'dishwasher not draining',
        'dishwasher standing water',
        'clean dishwasher filter',
        'dishwasher drain clogged',
        'fix dishwasher drain',
        'dishwasher won\'t drain',
        'dishwasher air gap',
        'dishwasher repair DIY',
      ],
      ogImage: '/guides/clean-dishwasher-not-draining-og.jpg',
    },
    faqs: [
      {
        question: 'Is standing water in the bottom of my dishwasher normal?',
        answer:
          'A thin film of water covering the bottom is normal — it keeps the seals from drying out. But if there\'s more than 1/4 inch of standing water after a completed cycle, you have a drainage problem. Start with cleaning the filter.',
      },
      {
        question: 'How often should I clean my dishwasher filter?',
        answer:
          'Once a month for normal use. If you run your dishwasher daily or frequently wash heavily soiled dishes, clean it every 2 weeks. A dirty filter reduces cleaning performance and is the most common cause of poor drainage and bad odors.',
      },
      {
        question: 'My dishwasher drains slowly but eventually empties. Is that a problem?',
        answer:
          'Yes — slow drainage indicates a partial blockage in the filter, drain hose, or air gap. It will worsen over time until the dishwasher stops draining entirely. Clean all three components now while it\'s an easy fix.',
      },
    ],
    relatedGuides: ['fix-dryer-not-heating', 'unclog-kitchen-sink', 'change-hvac-filter'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide 24: Fix a Dryer That's Not Heating
  // ---------------------------------------------------------------------------
  {
    id: 'guide-fix-dryer-not-heating',
    slug: 'fix-dryer-not-heating',
    title: 'How to Fix a Dryer That\'s Not Heating',
    excerpt:
      'A dryer that tumbles but doesn\'t heat is usually caused by a blown thermal fuse, a clogged vent, or a faulty heating element. Diagnose and fix the most common causes yourself and save a $200 service call.',
    content: `When your dryer runs but clothes come out cold and damp, the drum is turning but the heating system has failed. In electric dryers, the most common culprits are a blown thermal fuse (45% of cases), a clogged lint vent (30%), or a burned-out heating element (20%). Gas dryers add a failed igniter to the list.

## Safety First

Electric dryers run on 240 volts, which is lethal. Always unplug the dryer before opening the cabinet or touching any components. Gas dryers also have an electrical connection for the motor and igniter — unplug them too, and turn off the gas supply valve before working on gas components.

## The #1 Root Cause

A clogged dryer vent duct is the underlying cause of most thermal fuse failures. The fuse blows because the dryer overheats due to restricted airflow. If you replace the fuse without cleaning the vent, the new fuse will blow too. Always clean the vent as part of this repair.`,
    category: 'appliance-repair',
    difficulty: 'intermediate',
    estimatedTime: '30-45 minutes',
    estimatedCost: {
      low: 10,
      mid: 40,
      high: 80,
      diyVsPro: 'An appliance tech charges $150-$300 for dryer heating diagnosis and repair. DIY parts cost $10-$80 depending on the component.',
    },
    tools: [
      'Multimeter (for continuity testing)',
      'Phillips and Torx screwdrivers',
      'Nut driver (1/4" and 5/16")',
      'Dryer vent cleaning brush kit',
      'Vacuum with hose attachment',
      'Work gloves',
    ],
    materials: [
      'Thermal fuse (model-specific, $5-$15)',
      'Heating element (if needed, $20-$60)',
      'High-temperature electrical tape',
      'Dryer vent cleaning brush (if vent is clogged)',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Check the Dryer Vent for Blockage',
        description:
          'Go outside and find where the dryer vent exits the house. Start a dryer cycle and hold your hand near the vent opening — you should feel strong, warm airflow. If airflow is weak or absent, the vent is clogged. Disconnect the vent hose from the back of the dryer and from the wall. Use a dryer vent cleaning brush kit to clear lint from the entire duct run. Reconnect and test again.',
        imagePrompt:
          'Hand checking airflow at exterior dryer vent, then dryer vent brush being inserted into disconnected duct, lint being pulled out, vent cleaning process',
        proTip:
          'A clogged vent is the most common root cause of dryer heating failures AND the #1 cause of dryer fires (2,900 per year in the US). Clean your vent at least once per year.',
        warning:
          'A clogged dryer vent is a serious fire hazard. Lint is highly flammable. If your vent hasn\'t been cleaned in over a year, prioritize this step.',
      },
      {
        stepNumber: 2,
        title: 'Unplug the Dryer and Access the Thermal Fuse',
        description:
          'Unplug the dryer from the wall outlet (or turn off the breaker if the plug is inaccessible). Pull the dryer away from the wall. For most dryers, remove the back panel (held by screws) to access the thermal fuse. The thermal fuse is a small white or silver component mounted on the exhaust duct or the heating element housing. It has two wire terminals.',
        imagePrompt:
          'Back panel of a dryer being unscrewed and removed, thermal fuse location highlighted on the exhaust duct housing, component identification',
        warning:
          'Electric dryers use 240 volts. ALWAYS unplug the dryer before removing any panels or touching internal components. Verify the power cord is disconnected.',
      },
      {
        stepNumber: 3,
        title: 'Test the Thermal Fuse with a Multimeter',
        description:
          'Disconnect one wire from the thermal fuse (pull it straight off the terminal). Set your multimeter to the continuity setting (the diode or beep symbol). Touch one probe to each terminal on the fuse. If the multimeter beeps (shows continuity), the fuse is good. If there\'s no beep (no continuity), the fuse is blown and needs replacement. A blown thermal fuse is the single most common cause of a no-heat dryer.',
        imagePrompt:
          'Multimeter probes touching both terminals of a dryer thermal fuse, meter showing no continuity (blown fuse), close-up diagnostic testing',
        proTip:
          'Write down your dryer\'s model number (on a sticker inside the door or on the back panel) before ordering parts. Thermal fuses are model-specific.',
      },
      {
        stepNumber: 4,
        title: 'Replace the Thermal Fuse',
        description:
          'If the fuse tested as blown, disconnect both wires from the fuse terminals (note which wire goes where). Unscrew the mounting screw holding the fuse. Install the new fuse in the same position, reconnect the wires, and tighten the screw. Thermal fuses cost $5-$15 and are available at appliance parts stores and online. Make sure the replacement matches your dryer model.',
        imagePrompt:
          'Old blown thermal fuse being unscrewed and removed, new thermal fuse being installed in the same mounting position, wires reconnected, simple replacement',
      },
      {
        stepNumber: 5,
        title: 'Test the Heating Element (If Fuse Was Good)',
        description:
          'If the thermal fuse tested OK, the heating element may be burned out. Locate the element (a large coil inside a metal housing, usually behind the drum or at the back of the dryer). Disconnect one wire and test for continuity with the multimeter. If there\'s no continuity, the element is broken and needs replacement. Also test for a short to ground: touch one probe to an element terminal and the other to the metal housing. If you get a beep, the element has shorted to ground and must be replaced.',
        imagePrompt:
          'Dryer heating element coil being tested with a multimeter for continuity, element housing visible, probes on terminals, diagnostic step',
      },
      {
        stepNumber: 6,
        title: 'Reassemble and Test',
        description:
          'Replace the back panel and secure all screws. Push the dryer back into position. Reconnect the vent hose and plug the dryer back in. Run a timed dry cycle on high heat with a load of damp towels. Within 5 minutes, you should feel hot air inside the drum. Let the full cycle run and verify the towels come out dry. If the dryer still doesn\'t heat, the issue may be the high-limit thermostat, cycling thermostat, or (on gas dryers) the igniter — at this point, consider calling a tech.',
        imagePrompt:
          'Dryer reassembled with back panel on, vent reconnected, plugged in, running a test cycle, hand reaching in to check for hot air, successful repair',
        proTip:
          'After replacing a thermal fuse, always clean the dryer vent. The fuse blew because of overheating — if you don\'t fix the root cause (restricted airflow), the new fuse will blow again.',
      },
    ],
    tips: [
      'Order parts by your dryer\'s model number for an exact match. The model sticker is usually inside the door opening or on the back panel.',
      'Keep a multimeter in your toolbox. A basic $15 multimeter is the key to diagnosing most appliance problems without a service call.',
      'Clean the lint trap before every load AND clean the full vent duct once a year. This prevents overheating, saves energy, and prevents fires.',
      'If your dryer is gas-powered and not heating, check the gas supply valve (behind the dryer) first. It may have been turned off accidentally.',
    ],
    warnings: [
      'Always unplug the dryer before removing panels or touching any components. Electric dryers use 240 volts, which is lethal.',
      'For gas dryers, turn off the gas supply valve before working near the burner assembly. If you smell gas, leave the area and call your gas company.',
      'A clogged dryer vent is the #1 cause of home dryer fires. If your vent hasn\'t been cleaned in over a year, clean it before using the dryer again.',
    ],
    affiliateProducts: [
      {
        id: 'prod-holikme-vent-kit',
        name: 'Holikme 30 Feet Dryer Vent Cleaner Kit',
        description:
          'Flexible lint brush with multiple extensions that reach the entire vent run. Attaches to any drill. Removes years of accumulated lint. Works on all vent types.',
        price: 12.99,
        affiliateUrl: 'https://www.amazon.com/dp/B08B37ZM7C',
        retailer: 'amazon',
        imageUrl: '/products/holikme-vent-kit.jpg',
        rating: 4.4,
        reviewCount: 72300,
        badge: 'our-pick',
      },
      {
        id: 'prod-astroai-multimeter',
        name: 'AstroAI Digital Multimeter (TRMS 4000 Count)',
        description:
          'Affordable multimeter with continuity beeper, AC/DC voltage, and resistance testing. Auto-ranging. The essential diagnostic tool for appliance repair.',
        price: 14.99,
        affiliateUrl: 'https://www.amazon.com/dp/B01ISAMUA6',
        retailer: 'amazon',
        imageUrl: '/products/astroai-multimeter.jpg',
        rating: 4.6,
        reviewCount: 53400,
        badge: 'best-value',
      },
      {
        id: 'prod-thermal-fuse-kit',
        name: 'Dryer Thermal Fuse & Thermostat Kit (Whirlpool/Kenmore/Maytag)',
        description:
          'Includes thermal fuse, high-limit thermostat, and cycling thermostat. Compatible with most Whirlpool, Kenmore, and Maytag dryers. Covers the three most common no-heat parts.',
        price: 12.49,
        affiliateUrl: 'https://www.amazon.com/dp/B07QQ4DF8X',
        retailer: 'amazon',
        imageUrl: '/products/thermal-fuse-kit.jpg',
        rating: 4.5,
        reviewCount: 18200,
      },
    ],
    featuredImage: '/guides/fix-dryer-not-heating-hero.jpg',
    publishedAt: '2026-03-15T09:00:00Z',
    updatedAt: '2026-03-21T11:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Fix a Dryer That\'s Not Heating (DIY Diagnosis) | Repair & Refinish',
      description:
        'Diagnose and fix a dryer that won\'t heat. Step-by-step guide for checking the vent, testing the thermal fuse, and replacing the heating element. Save $200+ on a service call.',
      keywords: [
        'dryer not heating',
        'dryer no heat',
        'fix dryer heating',
        'dryer thermal fuse',
        'dryer heating element',
        'dryer vent clogged',
        'dryer repair DIY',
        'clothes dryer no heat',
      ],
      ogImage: '/guides/fix-dryer-not-heating-og.jpg',
    },
    faqs: [
      {
        question: 'Why did my dryer\'s thermal fuse blow?',
        answer:
          'The thermal fuse blows when the dryer overheats, which is almost always caused by restricted airflow from a clogged vent duct. The fuse is a safety device that prevents fires. After replacing the fuse, always clean the entire vent duct to address the root cause.',
      },
      {
        question: 'Can I bypass the thermal fuse to test the dryer?',
        answer:
          'Technically possible but extremely dangerous. The thermal fuse is a safety device that prevents the dryer from overheating and catching fire. Running a dryer without a functioning thermal fuse creates a serious fire hazard. Always replace a blown fuse with a new one — they cost $5-$15.',
      },
      {
        question: 'My dryer heats but takes forever to dry clothes. Why?',
        answer:
          'Slow drying is almost always a vent airflow problem. Even if the vent isn\'t fully clogged, partial restriction forces the dryer to work harder and longer. Clean the vent duct completely. Also check that the vent hose behind the dryer isn\'t kinked or crushed. Replace flexible foil or vinyl vent hose with rigid or semi-rigid metal duct for better airflow.',
      },
    ],
    relatedGuides: ['clean-dishwasher-not-draining', 'change-hvac-filter', 'replace-light-switch'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide: Fix a Refrigerator That's Not Cooling
  // ---------------------------------------------------------------------------
  {
    id: 'guide-fix-refrigerator-not-cooling',
    slug: 'fix-refrigerator-not-cooling',
    title: "How to Fix a Refrigerator That's Not Cooling",
    excerpt:
      "A warm fridge is a food safety emergency. The most common causes — dirty condenser coils, a bad thermostat, or a faulty evaporator fan — are fixable in 30-60 minutes with basic tools.",
    content: `When your refrigerator stops cooling, food starts spoiling within hours. Before calling a $200+ service tech, check the most common causes yourself. In many cases, the fix is as simple as cleaning the condenser coils or replacing a $15 fan — both 30-minute repairs.

## Quick Diagnostics

First, check the obvious: Is the fridge plugged in? Is the thermostat turned up? Is the light on when you open the door (confirming power)? Is the freezer cold but the fridge warm? Each symptom points to a different cause. The freezer being cold means the compressor works — the problem is air circulation.

## The 80/20 Rule of Fridge Repair

80% of no-cooling problems are caused by just three things: dirty condenser coils (free to fix), a failed evaporator fan ($15-$40 part), or a defective thermostat ($10-$25 part). The compressor itself rarely fails.`,
    category: 'appliance-repair',
    difficulty: 'intermediate',
    estimatedTime: '30-60 minutes',
    estimatedCost: { low: 0, mid: 25, high: 60, diyVsPro: 'An appliance repair service call costs $150-$350. Most DIY fixes cost $0-$60 in parts.' },
    tools: ['Vacuum with brush attachment', 'Coil cleaning brush', 'Screwdriver (Phillips and Torx)', 'Multimeter', 'Flashlight', 'Hair dryer (for defrosting)'],
    materials: ['Replacement evaporator fan motor (if needed)', 'Replacement thermostat (if needed)', 'Coil cleaning brush'],
    steps: [
      { stepNumber: 1, title: 'Check Temperature Settings and Airflow', description: 'Verify the thermostat is set to the correct temperature (37°F for fridge, 0°F for freezer). Check if the vents between the freezer and fridge compartments are blocked by food — cold air from the freezer must circulate to the fridge. Rearrange items blocking the vents. If the freezer is cold but the fridge is warm, the problem is likely the evaporator fan or a blocked vent.', imagePrompt: 'Checking refrigerator thermostat setting, looking for blocked air vents between freezer and fridge compartments, rearranging food for airflow', proTip: 'An overpacked fridge blocks airflow. Cold air must circulate freely. Leave at least 1 inch of space between items and the walls/vents.' },
      { stepNumber: 2, title: 'Clean the Condenser Coils', description: 'Unplug the fridge. Locate the condenser coils — they\'re either on the back of the fridge (visible coils) or underneath behind a toe-kick grille. Pull the fridge away from the wall (or remove the toe-kick panel). Use a coil cleaning brush to remove dust and pet hair from the coils. Vacuum up the loosened debris. Dirty coils reduce cooling efficiency by 30% and are the single most common cause of poor cooling.', imagePrompt: 'Refrigerator pulled away from wall, coil cleaning brush removing thick dust from condenser coils, vacuum cleaning debris, dramatic before-and-after of dirty vs. clean coils', proTip: 'Clean condenser coils every 6-12 months. If you have pets, clean them every 3-6 months — pet hair accumulates rapidly on coils.' },
      { stepNumber: 3, title: 'Test the Evaporator Fan', description: 'Open the freezer and locate the evaporator fan (usually behind a panel at the back of the freezer). With the door open, press the door switch to simulate a closed door. You should hear the fan running. If the compressor runs but the fan doesn\'t, the fan motor is likely dead. This fan circulates cold air from the freezer to the fridge — without it, the fridge warms up while the freezer stays cold.', imagePrompt: 'Freezer back panel being opened to reveal the evaporator fan, pressing the door switch to test, listening for fan operation, diagnostic step' },
      { stepNumber: 4, title: 'Replace the Evaporator Fan (If Failed)', description: 'Unplug the fridge. Remove the freezer contents and the back panel inside the freezer (held by screws). Disconnect the fan motor wire connector. Remove the screws holding the fan motor to the bracket. Install the new fan motor, reconnect the wires, and replace the panel. Fan motors cost $15-$40 and are available by model number from appliance parts stores.', imagePrompt: 'Evaporator fan motor being removed from freezer bracket, new motor being installed, wire connector reconnected, panel replaced, straightforward swap' },
      { stepNumber: 5, title: 'Check for Frost Buildup (Defrost Problem)', description: 'If you see heavy frost or ice coating the back wall of the freezer or the evaporator coils behind the panel, the defrost system has failed. The frost blocks airflow and prevents cooling. As a temporary fix, unplug the fridge, open both doors, and let it defrost for 8-12 hours (place towels to catch water). If frost returns within a week, the defrost timer, heater, or thermostat needs replacement.', imagePrompt: 'Heavy frost buildup on the freezer evaporator coils blocking airflow, fridge being manually defrosted with doors open, ice melting into towels', warning: 'Never chip ice off the evaporator coils with a sharp object. You can puncture the refrigerant lines, which is an expensive repair and releases refrigerant gas.' },
      { stepNumber: 6, title: 'Test the Temperature Thermostat', description: 'If cleaning the coils and checking the fan don\'t solve the problem, the thermostat (temperature control) may be faulty. Unplug the fridge. Turn the thermostat from the lowest to the highest setting — you should hear a click. If no click, test with a multimeter for continuity. A failed thermostat doesn\'t tell the compressor to run. Replacement thermostats cost $10-$25 and are model-specific.', imagePrompt: 'Turning the refrigerator thermostat through its range listening for a click, multimeter testing the thermostat for continuity, diagnostic testing' },
      { stepNumber: 7, title: 'Monitor and Verify the Fix', description: 'After making repairs, plug the fridge back in and set the thermostat to its normal position. Give it 24 hours to reach full cooling temperature. Place a thermometer inside to verify it reaches 37°F (fridge) and 0°F (freezer). If the temperature doesn\'t reach these targets after 24 hours, the problem may be the compressor, sealed system, or refrigerant leak — these require professional service.', imagePrompt: 'Thermometer inside the fridge showing temperature dropping, monitoring over 24 hours, correct temperature reached, successful repair confirmed' },
    ],
    tips: ['Clean the condenser coils every 6-12 months. This single maintenance task prevents most cooling problems and reduces energy consumption by up to 30%.', 'A fridge thermometer ($5-$10) lets you monitor temperature continuously and catch problems before food spoils.', 'If the freezer is cold but the fridge is warm, it\'s almost always the evaporator fan or a blocked air vent — not the compressor.', 'Order parts by your fridge\'s model number (on a sticker inside the fridge or behind the toe-kick). Exact model match ensures proper fit.'],
    warnings: ['Unplug the refrigerator before removing any panels or touching internal components.', 'Never chip ice off evaporator coils with anything sharp. Puncturing a refrigerant line is expensive and releases harmful gas.', 'If the compressor runs constantly but the fridge never cools, you may have a refrigerant leak. This requires a licensed technician — refrigerant handling is regulated by the EPA.'],
    affiliateProducts: [
      { id: 'prod-supco-coil-brush', name: 'Supco Condenser Coil Cleaning Brush (28")', description: 'Long, flexible brush designed for cleaning refrigerator condenser coils. Fits under and behind fridges. Removes dust and pet hair that reduces cooling efficiency.', price: 8.99, affiliateUrl: 'https://www.amazon.com/dp/B000BQWQ10', retailer: 'amazon', imageUrl: '/products/supco-coil-brush.jpg', rating: 4.5, reviewCount: 12400, badge: 'Best Value' },
      { id: 'prod-fridge-thermometer', name: 'Taylor 5924 Classic Fridge/Freezer Thermometer', description: 'Easy-read dial thermometer for monitoring fridge (37°F) and freezer (0°F) temperatures. Hangs from shelf or stands upright. Essential for catching cooling problems early.', price: 5.99, affiliateUrl: 'https://www.amazon.com/dp/B000BPE88E', retailer: 'amazon', imageUrl: '/products/taylor-fridge-thermo.jpg', rating: 4.4, reviewCount: 18700 },
      { id: 'prod-astroai-multimeter-fridge', name: 'AstroAI Digital Multimeter (TRMS 4000)', description: 'Essential diagnostic tool for testing appliance components. Continuity beeper, AC/DC voltage, and resistance. Auto-ranging for easy operation. Under $15 and invaluable for DIY repairs.', price: 14.99, affiliateUrl: 'https://www.amazon.com/dp/B01ISAMUA6', retailer: 'amazon', imageUrl: '/products/astroai-multimeter.jpg', rating: 4.6, reviewCount: 53400, badge: 'Our Pick' },
    ],
    featuredImage: '/images/guides/fix-refrigerator-not-cooling.jpg',
    publishedAt: '2025-12-10T09:00:00Z',
    updatedAt: '2026-03-05T14:00:00Z',
    author: defaultAuthor,
    seo: { title: "How to Fix a Refrigerator That's Not Cooling | Repair & Refinish", description: 'Fix a warm refrigerator in 30-60 minutes. Covers condenser coil cleaning, evaporator fan replacement, defrost issues, and thermostat testing.', keywords: ['refrigerator not cooling', 'fridge not cold', 'fix refrigerator', 'fridge warm freezer cold', 'clean condenser coils', 'evaporator fan replacement', 'fridge repair DIY'] },
    faqs: [
      { question: 'My freezer is cold but the fridge is warm. Why?', answer: 'This means the compressor is working fine. The most common cause is a failed evaporator fan that circulates cold air from the freezer to the fridge. Check the fan first. Also check for food blocking the air vents between compartments.' },
      { question: 'How often should I clean refrigerator coils?', answer: 'Every 6-12 months for most households. Every 3-6 months if you have pets (pet hair is the #1 condenser coil clogger). Dirty coils reduce efficiency by 30% and are the most common preventable cause of cooling failure.' },
      { question: 'Is it worth repairing an old refrigerator?', answer: 'If the fridge is less than 10 years old and the repair costs less than 50% of a new one, repair it. If it\'s over 15 years old, a new Energy Star fridge will save $50-$100/year in electricity — often making replacement the better financial choice.' },
    ],
    relatedGuides: ['clean-dishwasher-not-draining', 'fix-dryer-not-heating', 'clean-washing-machine'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide: Clean and Maintain Your Washing Machine
  // ---------------------------------------------------------------------------
  {
    id: 'guide-clean-washing-machine',
    slug: 'clean-washing-machine',
    title: 'How to Clean and Maintain Your Washing Machine',
    excerpt:
      'A smelly washing machine means mold and bacteria are growing inside. Deep-clean your washer in 30-45 minutes and prevent the musty odor from returning with simple monthly maintenance.',
    content: `If your washing machine smells musty or your clothes come out less than fresh, the machine itself is dirty. Detergent residue, fabric softener, and moisture create a breeding ground for mold and bacteria — especially in front-loading washers with their rubber gasket seals.

## Front-Load vs. Top-Load

Front-loaders are more prone to odor problems because water sits in the rubber door gasket. Top-loaders with agitators are less prone but still benefit from regular cleaning. This guide covers both types.

## Prevention Is Key

The #1 cause of washer odor: closing the door after a cycle. Always leave the door/lid open after washing to let the interior dry. This single habit prevents 90% of washer smell problems.`,
    category: 'appliance-repair',
    difficulty: 'beginner',
    estimatedTime: '30-45 minutes',
    estimatedCost: { low: 0, mid: 5, high: 12, diyVsPro: 'A service call for a smelly washer costs $100-$200. DIY cleaning costs $0-$12 in supplies you likely already own.' },
    tools: ['Microfiber cloths', 'Old toothbrush', 'Spray bottle'],
    materials: ['White vinegar (2 cups)', 'Baking soda (1/2 cup)', 'Affresh washer cleaner tablets (optional)', 'Bleach (1/2 cup, for deep cleaning)'],
    steps: [
      { stepNumber: 1, title: 'Clean the Door Gasket (Front-Loaders)', description: 'Pull back the rubber door gasket on a front-loader and inspect for mold, soap scum, and trapped debris. You\'ll likely find a disgusting black film. Spray white vinegar generously on the gasket and inside the folds. Scrub with an old toothbrush and wipe with a microfiber cloth. For heavy mold, use a 1:1 bleach-water solution. Wipe until the cloth comes away clean.', imagePrompt: 'Front-load washer rubber gasket being pulled back revealing mold and residue, vinegar being sprayed, toothbrush scrubbing, before-and-after of clean gasket', proTip: 'Check the gasket drain holes (small holes at the bottom of the gasket). Clear any blockages with a cotton swab — clogged drain holes trap water and breed mold.' },
      { stepNumber: 2, title: 'Run a Hot Cleaning Cycle', description: 'Add 2 cups of white vinegar to the detergent dispenser (or directly into the drum for top-loaders). Run the hottest, longest cycle available with no clothes. The vinegar dissolves mineral deposits, soap scum, and kills bacteria. For an extra boost, pause the cycle halfway through and let the vinegar water soak for 30 minutes before resuming.', imagePrompt: 'White vinegar being poured into the washer detergent dispenser, hot water cycle being selected, empty washing machine running a cleaning cycle' },
      { stepNumber: 3, title: 'Run a Baking Soda Cycle', description: 'After the vinegar cycle completes, sprinkle 1/2 cup of baking soda directly into the drum. Run another hot cycle. The baking soda neutralizes odors, removes remaining residue, and scrubs the interior. Together, vinegar and baking soda create a one-two punch that freshens the entire washing system — drum, pump, and hoses.', imagePrompt: 'Baking soda being sprinkled into the washing machine drum, second hot cleaning cycle running, deodorizing treatment' },
      { stepNumber: 4, title: 'Clean the Detergent Dispenser', description: 'Remove the detergent and fabric softener dispensers (most pull straight out or have a release tab). Soak them in hot soapy water for 15 minutes. Scrub the compartments with a toothbrush to remove built-up detergent and softener residue. Also clean the dispenser housing on the machine with a damp cloth. Residue in the dispenser gets re-deposited on your clothes.', imagePrompt: 'Detergent dispenser tray being removed, soaking in soapy water, toothbrush scrubbing gunk from the compartments, clean dispenser being reinstalled' },
      { stepNumber: 5, title: 'Clean the Filter/Drain Trap', description: 'Most front-loaders have a drain filter or trap behind a small panel at the bottom-front of the machine. Place a shallow pan under it, open the panel, and slowly unscrew the cap. Water will drain out (this is normal). Remove any trapped debris — coins, hair ties, lint, and small items. Clean the filter under running water. Reinstall and close the panel. This filter should be cleaned every 1-3 months.', imagePrompt: 'Drain filter panel being opened on a front-load washer, cap being unscrewed, debris being removed from the filter trap, water draining into a pan', warning: 'Water will flow out when you open the drain filter. Have a shallow pan and towels ready to catch it. Open the cap slowly.' },
      { stepNumber: 6, title: 'Wipe Down the Exterior and Interior', description: 'Wipe the exterior of the machine with a damp cloth and all-purpose cleaner. Clean the control panel and buttons. Wipe the inside of the drum with a vinegar-dampened cloth. For top-loaders, wipe under the rim where detergent splashes and mold can grow. Leave the door/lid open to air-dry the interior completely.', imagePrompt: 'Wiping down the washing machine interior and exterior, cleaning under the top-loader rim, leaving the door open to air dry, sparkling clean result' },
      { stepNumber: 7, title: 'Establish a Maintenance Routine', description: 'To prevent odor from returning: (1) Always leave the door/lid open after washing. (2) Use HE detergent in HE machines — regular detergent creates excess suds and residue. (3) Run a hot cleaning cycle monthly with vinegar or Affresh tablets. (4) Clean the drain filter every 1-3 months. (5) Wipe the gasket dry after every use on front-loaders.', imagePrompt: 'Infographic showing 5 maintenance habits: door left open, HE detergent bottle, monthly cleaning reminder, drain filter access, gasket being wiped dry' },
    ],
    tips: ['Leave the washer door/lid open after every cycle. This single habit prevents 90% of washer odor problems by letting the interior dry.', 'Use only HE (High Efficiency) detergent in HE washers. Regular detergent creates excess suds that leave residue and promote mold growth.', 'Use less detergent than you think — most people use 2-3x more than needed. Excess detergent is the primary cause of residue buildup.', 'Run a monthly hot cleaning cycle with vinegar or an Affresh tablet. Prevention is much easier than remediation.'],
    warnings: ['Never mix vinegar and bleach — the combination creates toxic chlorine gas.', 'Use bleach sparingly and only when needed for heavy mold. Frequent bleach use can damage rubber seals and components.', 'If your washer has a persistent mildew smell despite cleaning, the drain hose or pump housing may need professional cleaning.'],
    affiliateProducts: [
      { id: 'prod-affresh-washer', name: 'Affresh Washing Machine Cleaner Tablets (6-count)', description: 'Drop-in tablets that dissolve residue, mineral buildup, and odor-causing bacteria. Use monthly in any washer. EPA Safer Choice certified. The easiest washer maintenance.', price: 11.98, affiliateUrl: 'https://www.amazon.com/dp/B00C91Q86I', retailer: 'amazon', imageUrl: '/products/affresh-washer.jpg', rating: 4.6, reviewCount: 142000, badge: 'Best Seller' },
      { id: 'prod-tide-he', name: 'Tide HE Liquid Laundry Detergent (92 oz)', description: 'HE-formulated for high-efficiency washers. Low-sudsing formula prevents residue buildup. Cleans in cold water. The #1 detergent recommended by washer manufacturers.', price: 12.97, affiliateUrl: 'https://www.amazon.com/dp/B07GK9Y6RF', retailer: 'amazon', imageUrl: '/products/tide-he.jpg', rating: 4.8, reviewCount: 68400 },
      { id: 'prod-white-vinegar-gallon', name: 'Lucy\'s Distilled White Vinegar (1 gallon)', description: 'Food-grade distilled white vinegar for household cleaning. Natural disinfectant, deodorizer, and mineral deposit remover. One gallon lasts 6+ months of monthly washer cleaning.', price: 5.99, affiliateUrl: 'https://www.amazon.com/dp/B00MBGIAUO', retailer: 'amazon', imageUrl: '/products/lucys-vinegar.jpg', rating: 4.7, reviewCount: 24300, badge: 'Best Value' },
    ],
    featuredImage: '/images/guides/clean-washing-machine.jpg',
    publishedAt: '2025-08-05T09:00:00Z',
    updatedAt: '2026-01-12T14:00:00Z',
    author: defaultAuthor,
    seo: { title: 'How to Clean Your Washing Machine (Stop the Smell) | Repair & Refinish', description: 'Deep-clean a smelly washing machine in 30-45 minutes. Covers gasket cleaning, vinegar cycles, drain filter maintenance, and odor prevention tips.', keywords: ['clean washing machine', 'washer smell', 'smelly washer fix', 'washing machine maintenance', 'clean front loader', 'washer mold', 'washing machine odor'] },
    faqs: [
      { question: 'Why does my front-load washer smell?', answer: 'Mold and bacteria grow in the rubber door gasket where water and detergent residue sit. The sealed design retains moisture. Prevention: always leave the door open after cycles, wipe the gasket dry, and run a monthly cleaning cycle.' },
      { question: 'Can I use bleach to clean my washing machine?', answer: 'Yes, but use it separately from vinegar (never together — toxic gas). Run a hot cycle with 1/2 cup bleach for heavy mold. Use vinegar for regular monthly maintenance. Don\'t use bleach more than once every 3 months to preserve rubber seals.' },
      { question: 'How often should I clean my washing machine?', answer: 'Run a cleaning cycle monthly. Clean the door gasket and detergent dispenser monthly. Clean the drain filter every 1-3 months. These three habits take 10 minutes per month and keep your washer odor-free.' },
    ],
    relatedGuides: ['clean-dishwasher-not-draining', 'fix-dryer-not-heating', 'fix-refrigerator-not-cooling'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide: Replace an Oven Heating Element
  // ---------------------------------------------------------------------------
  {
    id: 'guide-replace-oven-heating-element',
    slug: 'replace-oven-heating-element',
    title: 'How to Replace an Oven Heating Element',
    excerpt:
      'An oven that won\'t heat or heats unevenly usually has a burned-out heating element. Replace it yourself in 30-45 minutes with a screwdriver — it\'s one of the simplest appliance repairs.',
    content: `Electric ovens have two heating elements: the bake element at the bottom and the broil element at the top. When one fails, the oven either won't heat at all or only heats from one direction. The good news: heating elements are cheap ($15-$40), easy to access, and require nothing more than a screwdriver to replace.

## Diagnosing a Bad Element

A working element glows evenly red/orange. A bad element may have visible breaks, blisters, or burn spots. Sometimes it doesn't glow at all. You can also test with a multimeter for continuity — a good element shows continuity; a bad one shows none.

## Gas vs. Electric

This guide covers electric ovens only. Gas ovens use a different heating system (igniter and gas valve). If your gas oven won't heat, the igniter is the most likely culprit — a similar DIY repair but with different parts and procedure.`,
    category: 'appliance-repair',
    difficulty: 'intermediate',
    estimatedTime: '30-45 minutes',
    estimatedCost: { low: 15, mid: 30, high: 50, diyVsPro: 'An appliance tech charges $150-$300 for element replacement. The element itself costs $15-$50.' },
    tools: ['Screwdriver (Phillips)', 'Nut driver (1/4")', 'Multimeter (for testing)', 'Work gloves'],
    materials: ['Replacement heating element (bake or broil, model-specific)', 'High-temperature wire connectors (if needed)'],
    steps: [
      { stepNumber: 1, title: 'Turn Off Power to the Oven', description: 'Turn off the oven breaker at the electrical panel. Electric ovens run on 240V — this is not something to work on with the power on. Verify the oven is off by trying to turn it on. If it has a clock display, it should be blank. For wall ovens, you may need to locate the correct breaker (sometimes labeled "Range" or "Oven" on the panel).', imagePrompt: 'Oven breaker being switched off at the electrical panel, oven display going blank, verifying power is disconnected, safety first', warning: 'Electric ovens use 240 volts — enough to kill. ALWAYS turn off the breaker before touching any element or wiring inside the oven.' },
      { stepNumber: 2, title: 'Access the Heating Element', description: 'For the bake element (bottom), open the oven door and remove the racks. The element is usually held to the back wall of the oven by two mounting screws. For the broil element (top), it\'s mounted similarly at the top of the oven. Unscrew the mounting screws (usually Phillips or 1/4" hex) and gently pull the element forward 4-6 inches. You\'ll see the wire connectors on the back end.', imagePrompt: 'Oven racks removed, screwdriver removing mounting screws from the bake element at the back of the oven, element being pulled forward to reveal wire connectors' },
      { stepNumber: 3, title: 'Disconnect the Wires', description: 'The element has two metal terminals on the back end, each connected to a wire with a slip-on connector (spade connector). Note which wire goes to which terminal — take a photo. Pull each wire connector straight off the terminal (don\'t pull on the wire itself, grip the connector). If the connectors are corroded or damaged, they\'ll need replacement (available at hardware stores).', imagePrompt: 'Wire spade connectors being pulled off the heating element terminals, photo being taken for reference, two wires disconnected, element free to remove' },
      { stepNumber: 4, title: 'Test the Old Element (Optional)', description: 'Set your multimeter to the resistance (ohms) setting. Touch one probe to each terminal on the old element. A working bake element typically reads 20-50 ohms. If the meter reads infinity (OL) or zero, the element is bad. You can also visually inspect for breaks, blisters, or burn marks — any of these confirm failure.', imagePrompt: 'Multimeter probes touching the terminals of the removed heating element, reading showing OL (open circuit = bad element), visual inspection showing a burn spot' },
      { stepNumber: 5, title: 'Install the New Element', description: 'Feed the terminals of the new element through the holes in the back of the oven wall. Push the wire connectors firmly onto the new element\'s terminals. Make sure they\'re fully seated and secure — a loose connection causes arcing and burn damage. Align the element in the mounting bracket holes and install the mounting screws. The element should sit flat in the oven without touching the sides.', imagePrompt: 'New heating element terminals being fed through the oven back wall, wire connectors being pushed onto terminals, mounting screws securing the element' },
      { stepNumber: 6, title: 'Test the New Element', description: 'Replace the oven racks. Restore power at the breaker. Set the oven to 350°F and wait. The new element should begin to glow evenly red/orange within 3-5 minutes. Let the oven fully preheat and verify the temperature with an oven thermometer. Check that the element glows evenly — any cold spots indicate a defective replacement. The repair is complete.', imagePrompt: 'New oven element glowing evenly red, oven thermometer confirming correct temperature, successful heating element replacement', proTip: 'New elements may produce a slight odor or light smoke on their first use as manufacturing oils burn off. This is normal and dissipates in 15-20 minutes.' },
    ],
    tips: ['Order the element by your oven\'s model number for an exact match. Model numbers are on a sticker inside the door frame or on the back of the oven.', 'If both the bake and broil elements fail within a short period, the problem might be the oven control board rather than the elements. A multimeter can help diagnose this.', 'Keep a spare bake element on hand. They\'re cheap ($15-$25) and fail unpredictably — having one means your oven is back in service the same day.', 'If wire connectors are corroded or damaged, replace them with high-temperature connectors rated for oven use.'],
    warnings: ['Always disconnect power at the breaker before working inside an oven. 240V is lethal.', 'Let the oven cool completely before removing an element. Elements retain heat for 30+ minutes after the oven is turned off.', 'Do not force wire connectors onto terminals. If they don\'t slip on easily, the connector size may be wrong. Forcing creates a loose connection that arcs and burns.'],
    affiliateProducts: [
      { id: 'prod-wb44t10011', name: 'GE WB44T10011 Oven Bake Element', description: 'Direct replacement bake element for GE, Hotpoint, and Kenmore ovens. 18.5" x 15.5". 2585W at 240V. The most common oven element in American households.', price: 22.99, affiliateUrl: 'https://www.amazon.com/dp/B005SFTQU0', retailer: 'amazon', imageUrl: '/products/ge-bake-element.jpg', rating: 4.6, reviewCount: 14800, badge: 'Best Seller' },
      { id: 'prod-oven-thermometer', name: 'Taylor Oven Thermometer (Classic Series)', description: 'Stainless steel oven thermometer that hangs from the rack or stands upright. Verify your oven heats to the correct temperature after element replacement. Essential calibration tool.', price: 7.99, affiliateUrl: 'https://www.amazon.com/dp/B000FPC1NC', retailer: 'amazon', imageUrl: '/products/taylor-oven-thermo.jpg', rating: 4.5, reviewCount: 22400, badge: 'Best Value' },
      { id: 'prod-astroai-multi-oven', name: 'AstroAI Digital Multimeter', description: 'Test heating elements for continuity before and after replacement. Also useful for diagnosing other appliance issues. Auto-ranging, affordable, and essential for DIY repairs.', price: 14.99, affiliateUrl: 'https://www.amazon.com/dp/B01ISAMUA6', retailer: 'amazon', imageUrl: '/products/astroai-multimeter.jpg', rating: 4.6, reviewCount: 53400 },
    ],
    featuredImage: '/images/guides/replace-oven-heating-element.jpg',
    publishedAt: '2025-11-25T09:00:00Z',
    updatedAt: '2026-02-28T14:00:00Z',
    author: defaultAuthor,
    seo: { title: 'How to Replace an Oven Heating Element | Repair & Refinish', description: 'Replace a burned-out oven heating element in 30-45 minutes. Simple screwdriver repair. Covers element testing, removal, installation, and temperature verification.', keywords: ['replace oven element', 'oven heating element', 'oven not heating', 'bake element replacement', 'oven element burned out', 'electric oven repair', 'oven element DIY'] },
    faqs: [
      { question: 'How do I know if my oven element is bad?', answer: 'Visual signs: breaks, blisters, burn spots, or bright spots that glow differently from the rest. Functional signs: oven won\'t heat, heats unevenly, or only broils (bake element dead) or only bakes (broil element dead). Test with a multimeter: a good element reads 20-50 ohms; a bad one reads infinity.' },
      { question: 'Can I use my oven with just one working element?', answer: 'Technically yes, but cooking results will suffer. With only the broil element, the top will brown while the bottom stays cold. With only the bake element, the bottom heats but the top stays cool. Replace the failed element for even cooking.' },
      { question: 'How long do oven heating elements last?', answer: 'The average oven element lasts 5-10 years of normal use. Heavy bakers and frequent self-clean cycle users may need replacement sooner. Self-cleaning cycles subject elements to extreme temperatures (900°F) that accelerate wear.' },
    ],
    relatedGuides: ['fix-dryer-not-heating', 'clean-dishwasher-not-draining', 'fix-refrigerator-not-cooling'],
    status: 'published',
  },
];

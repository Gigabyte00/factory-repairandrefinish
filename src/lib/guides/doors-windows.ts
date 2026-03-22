import type { Guide } from '@/types';
import { defaultAuthor } from '../site-config';

export const doorsWindowsGuides: Guide[] = [
  // ---------------------------------------------------------------------------
  // Guide 17: Weather-Strip a Door
  // ---------------------------------------------------------------------------
  {
    id: 'guide-weather-strip-door',
    slug: 'weather-strip-door',
    title: 'How to Weather-Strip a Door',
    excerpt:
      'Stop drafts, cut energy bills, and keep bugs out by replacing worn weatherstripping on your exterior doors. This beginner project takes 30 minutes and costs under $30.',
    content: `Worn weatherstripping is one of the biggest energy wasters in a home. A single exterior door with failing seals can leak as much air as having a 6-inch window open year-round. Replacing it is cheap, quick, and delivers immediate results you can feel.

## Types of Weatherstripping

The most common types for doors are: foam tape (cheapest, shortest lifespan), V-strip (self-adhesive bronze or plastic), felt (economical but wears quickly), and door sweep (for the bottom gap). For the best seal and longevity, use a combination of V-strip or rubber compression strips around the frame and a door sweep on the bottom.

## The Light Test

Close your exterior door on a sunny day and look for daylight around the edges from inside. Any light you see means air is leaking through.`,
    category: 'doors-windows',
    difficulty: 'beginner',
    estimatedTime: '30 minutes',
    estimatedCost: {
      low: 10,
      mid: 20,
      high: 30,
      diyVsPro: 'A handyman charges $75-$150 to replace door weatherstripping. DIY materials cost $10-$30.',
    },
    tools: [
      'Putty knife or flat-head screwdriver',
      'Utility knife',
      'Measuring tape',
      'Scissors',
      'Hammer and small nails (if needed)',
      'Drill/driver (for door sweep)',
    ],
    materials: [
      'Self-adhesive foam or rubber weatherstrip tape',
      'Door sweep (for bottom of door)',
      'Rubbing alcohol or cleaner (for surface prep)',
      'Threshold seal (if needed)',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Inspect and Remove Old Weatherstripping',
        description:
          'Open the door and examine the existing weatherstripping around the door frame (jamb) and the bottom of the door. Peel or pry off the old material. Remove any residual adhesive with rubbing alcohol or adhesive remover. For nailed-on weatherstripping, pry it off with a putty knife. Clean the entire surface where new weatherstripping will be applied — adhesive won\'t stick to dirty or greasy surfaces.',
        imagePrompt:
          'Peeling off old cracked weatherstripping from a door frame, then cleaning residual adhesive with a cloth and rubbing alcohol, clean jamb surface ready for new material',
        proTip:
          'Do the light test first: close the door on a sunny day and look for daylight around all four edges. Focus your weatherstripping on the gaps where light is visible.',
      },
      {
        stepNumber: 2,
        title: 'Measure and Cut New Weatherstripping',
        description:
          'Measure the top and both sides of the door frame where the weatherstripping will go. Cut the self-adhesive weatherstrip to length — cut it slightly longer (1/2 inch) and trim to perfect fit during installation. For V-strip weatherstripping, you\'ll apply it to the door stop (the raised strip the door closes against) so it compresses when the door shuts.',
        imagePrompt:
          'Measuring the door frame with a tape measure, cutting rubber weatherstrip to length with scissors, pieces laid out for top and both sides',
      },
      {
        stepNumber: 3,
        title: 'Apply Weatherstripping to the Frame',
        description:
          'Start with the top of the frame. Peel back a few inches of the adhesive backing and press the weatherstrip into position against the door stop. Close the door periodically to check compression — the weatherstrip should compress slightly when the door is closed, creating a tight seal without making the door hard to close. Continue with both side jambs, working from top to bottom.',
        imagePrompt:
          'Self-adhesive rubber weatherstrip being pressed along the door stop on the frame, door closed to test compression, snug seal visible',
        proTip:
          'Apply weatherstripping on a warm day (or warm the frame with a hair dryer). Adhesive bonds much better to warm surfaces than cold ones.',
      },
      {
        stepNumber: 4,
        title: 'Install the Door Sweep',
        description:
          'Close the door and measure the gap at the bottom between the door and the threshold. Choose a door sweep that bridges this gap. Hold the sweep against the inside face of the door so the rubber flap just touches the threshold. Mark the screw holes, drill pilot holes, and screw the sweep in place. The flap should brush the threshold when the door closes but not drag so hard it prevents closing.',
        imagePrompt:
          'Door sweep being positioned on the inside bottom edge of an exterior door, screws being driven in, rubber flap touching the threshold, gap sealed',
        proTip:
          'An adjustable door sweep lets you fine-tune the height over time. Floors settle and thresholds wear — an adjustable sweep compensates without replacement.',
      },
      {
        stepNumber: 5,
        title: 'Check the Threshold Seal',
        description:
          'Examine the threshold (the metal or wood strip at the bottom of the door frame on the floor). If the rubber insert in the threshold is cracked or compressed flat, water and air can seep under the door even with a new sweep. Most threshold seals are replaceable — slide out the old rubber insert and push in a new one (available at hardware stores in standard widths).',
        imagePrompt:
          'Door threshold with replaceable rubber seal insert, old cracked insert being removed, new insert being pushed into the channel, floor-level view',
      },
      {
        stepNumber: 6,
        title: 'Test the Complete Seal',
        description:
          'Close the door and check for drafts by holding a lit candle or incense stick around all four edges. The flame or smoke should remain steady — any flickering indicates remaining air leaks. Do the light test again and verify no daylight is visible. Check that the door opens and closes smoothly without excessive force. Adjust weatherstrip position or trim excess if the door sticks.',
        imagePrompt:
          'Person testing door seal with incense smoke near edges, steady smoke indicating no draft, then light test showing no daylight gaps, successful seal',
      },
    ],
    tips: [
      'Replace weatherstripping on all exterior doors at the same time — it\'s faster to buy materials in bulk and the sealing benefit is cumulative.',
      'Foam tape is the cheapest option but compresses permanently within 1-2 years. Rubber or silicone weatherstripping lasts 5-8 years and maintains its shape.',
      'Don\'t forget the door from the garage to the house — it\'s an exterior door for insulation purposes.',
      'For sliding glass doors, use a fin-style weatherstrip that fits in the track groove.',
    ],
    warnings: [
      'Do not add so much weatherstripping that the door becomes hard to latch. The lock should engage without forcing the door shut.',
      'If your door has a large gap on one side (more than 1/4 inch), the door or frame may be warped. Weatherstripping alone won\'t fix it — the door may need adjustment or replacement.',
    ],
    affiliateProducts: [
      {
        id: 'prod-md-building-vstrip',
        name: 'M-D Building Products Platinum Collection Door Weatherstrip Kit',
        description:
          'Complete door kit with kerf-in compression weatherstripping for both sides and top, plus adjustable door sweep. Premium EPDM rubber lasts 10+ years.',
        price: 24.98,
        affiliateUrl: 'https://www.homedepot.com/p/M-D-Platinum-Door-Kit/312845963',
        retailer: 'homedepot',
        imageUrl: '/products/md-platinum-door-kit.jpg',
        rating: 4.3,
        reviewCount: 3200,
        badge: 'our-pick',
      },
      {
        id: 'prod-frost-king-foam',
        name: 'Frost King R338 Rubber Foam Weatherstrip Tape (3/8" x 3/16" x 17 ft)',
        description:
          'Self-adhesive closed-cell rubber foam tape. Easy to apply, good compression recovery. Two rolls cover one standard door.',
        price: 5.98,
        affiliateUrl: 'https://www.amazon.com/dp/B000BQMIWU',
        retailer: 'amazon',
        imageUrl: '/products/frost-king-foam.jpg',
        rating: 4.2,
        reviewCount: 9800,
        badge: 'budget',
      },
      {
        id: 'prod-frost-king-sweep',
        name: 'Frost King A62/36 Premium Door Sweep (1-5/8" x 36")',
        description:
          'Heavy-duty aluminum and rubber door sweep. Slotted holes allow height adjustment. Seals gaps up to 1 inch. Fits standard doors.',
        price: 11.97,
        affiliateUrl: 'https://www.homedepot.com/p/Frost-King-Door-Sweep/100170700',
        retailer: 'homedepot',
        imageUrl: '/products/frost-king-sweep.jpg',
        rating: 4.4,
        reviewCount: 5700,
        badge: 'best-value',
      },
    ],
    featuredImage: '/guides/weather-strip-door-hero.jpg',
    publishedAt: '2026-03-07T09:00:00Z',
    updatedAt: '2026-03-20T13:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Weather-Strip a Door (Stop Drafts Fast) | Repair & Refinish',
      description:
        'Install weatherstripping on an exterior door in 30 minutes. Step-by-step guide for sealing drafts with foam tape, compression strips, and door sweeps.',
      keywords: [
        'weatherstrip door',
        'door weatherstripping',
        'stop door drafts',
        'door sweep installation',
        'seal exterior door',
        'energy efficient door seal',
        'door draft stopper',
      ],
      ogImage: '/guides/weather-strip-door-og.jpg',
    },
    faqs: [
      {
        question: 'How much can weatherstripping save on energy bills?',
        answer:
          'The Department of Energy estimates that sealing air leaks (weatherstripping and caulking) can reduce heating and cooling costs by 10-20%. For an average home spending $2,000/year on energy, that\'s $200-$400 in annual savings from a $30-$60 investment.',
      },
      {
        question: 'How often should weatherstripping be replaced?',
        answer:
          'Foam tape lasts 1-2 years. Rubber and silicone weatherstripping lasts 5-8 years. V-strip (bronze or stainless steel) can last 15+ years. Inspect weatherstripping annually and replace when it shows visible wear, compression, or gaps.',
      },
      {
        question: 'Can weatherstripping fix a door that rattles in the wind?',
        answer:
          'Yes. A rattling door means there\'s a gap between the door and the stop. Compression weatherstripping fills this gap, holds the door firmly against the frame, and eliminates rattling. It also blocks wind noise.',
      },
    ],
    relatedGuides: ['fix-sticking-door', 'replace-thermostat', 'change-hvac-filter'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide 18: Fix a Sticking Door
  // ---------------------------------------------------------------------------
  {
    id: 'guide-fix-sticking-door',
    slug: 'fix-sticking-door',
    title: 'How to Fix a Sticking Door',
    excerpt:
      'A door that sticks, drags, or won\'t close properly is usually caused by loose hinges, swollen wood, or a house that has settled. Fix it in 30-60 minutes with these simple adjustments.',
    content: `A sticking door is annoying but almost always fixable without replacing the door. The first step is diagnosing why it sticks. In most cases, it's one of three causes: loose hinge screws, seasonal wood swelling, or a frame that has shifted slightly over time.

## Seasonal Sticking

If your door only sticks during humid summer months and works fine in winter, the wood is absorbing moisture and expanding. The fix is usually a quick plane or sand on the rubbing edge, followed by sealing the bare wood.

## Diagnosing the Rub Point

Close the door slowly and watch where it catches. You can also slide a piece of paper around the edges — where it stops sliding, that's where the door is rubbing against the frame.`,
    category: 'doors-windows',
    difficulty: 'beginner',
    estimatedTime: '30-60 minutes',
    estimatedCost: {
      low: 0,
      mid: 10,
      high: 20,
      diyVsPro: 'A handyman charges $75-$150 for door adjustment. DIY cost is $0-$20 (you may already have everything you need).',
    },
    tools: [
      'Phillips screwdriver',
      'Hand plane or sanding block',
      'Hammer',
      'Utility knife',
      'Carpenter\'s pencil',
      'Chisel (1 inch)',
    ],
    materials: [
      '3-inch wood screws (to replace short hinge screws)',
      'Wood glue and toothpicks (for stripped holes)',
      'Sandpaper (80-grit and 120-grit)',
      'Primer and paint (for exposed wood)',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Identify Where the Door Sticks',
        description:
          'Close the door slowly and observe where it rubs or catches. Check the top corner, latch side, and bottom. Slide a piece of paper between the door and the frame all around the perimeter — where the paper won\'t slide, the door is binding. Look at the gap between the door and frame: it should be 1/8 inch on all sides. Mark the rubbing area with a pencil.',
        imagePrompt:
          'Sliding a piece of paper between a door and its frame to identify the sticking point, pencil marking the rub area on the door edge, diagnostic process',
        proTip:
          'Look at the top of the door from the hinge side. If the door is tilted so the top latch corner hits the frame, the hinge screws are the likely culprit.',
      },
      {
        stepNumber: 2,
        title: 'Tighten the Hinge Screws',
        description:
          'Open the door and tighten all hinge screws on both the door and the frame sides. Loose hinge screws are the #1 cause of sticking doors because the door sags when the top hinge pulls away from the frame. Start with the top hinge — it bears the most weight. If the screws spin freely (the holes are stripped), remove them and try the fix in the next step.',
        imagePrompt:
          'Screwdriver tightening hinge screws on a door frame, showing the top hinge where sagging typically occurs, close-up of hinge and screw',
      },
      {
        stepNumber: 3,
        title: 'Fix Stripped Hinge Screw Holes',
        description:
          'If a screw hole is stripped (the screw turns but won\'t tighten), remove the screw. Dip 2-3 round wooden toothpicks in wood glue and tap them into the hole with a hammer. Break them off flush with a utility knife. Wait 30 minutes for the glue to set, then drill a pilot hole and drive the screw back in. For a stronger fix, replace the short factory screw with a 3-inch screw that reaches the wall stud behind the frame.',
        imagePrompt:
          'Toothpicks with wood glue being tapped into a stripped screw hole in a door frame, then a long 3-inch screw being driven in for a secure hold, two-step repair',
        proTip:
          'Replacing the top hinge\'s center screw with a 3-inch screw is the single most effective fix for a sagging door. The long screw reaches the wall framing and pulls the frame (and door) back into alignment.',
      },
      {
        stepNumber: 4,
        title: 'Plane or Sand the Rubbing Edge',
        description:
          'If the door still sticks after fixing the hinges, you need to remove material from the rubbing edge. Mark the area that needs trimming with a pencil. For minor rubs, use a sanding block with 80-grit sandpaper directly on the edge without removing the door. For more material removal, take the door off its hinges (tap the hinge pins up with a hammer and nail set), lay it on sawhorses, and use a hand plane to shave the marked area.',
        imagePrompt:
          'Hand plane shaving a thin curl of wood from the edge of a door laid across sawhorses, pencil marks showing the area to trim, clean precise work',
      },
      {
        stepNumber: 5,
        title: 'Adjust the Strike Plate (If the Latch Doesn\'t Catch)',
        description:
          'If the door closes but the latch doesn\'t click into the strike plate, the plate needs adjustment. Close the door and observe where the latch hits the plate — it usually misses high or low. Unscrew the strike plate, enlarge the mortise (the recess in the frame) with a chisel in the needed direction, and reattach the plate in its new position. Alternatively, file the strike plate opening larger with a metal file.',
        imagePrompt:
          'Strike plate being repositioned on a door frame, chisel enlarging the mortise, latch aligning with the new plate position, close-up adjustment',
      },
      {
        stepNumber: 6,
        title: 'Rehang, Seal, and Test',
        description:
          'If you removed the door, rehang it by aligning the hinges and tapping the pins back in (insert the bottom pin first, then the top). Test the door through its full swing — it should open, close, and latch smoothly. Apply primer and paint to any exposed bare wood from planing or sanding. Unsealed wood absorbs moisture and will swell again, recreating the original problem.',
        imagePrompt:
          'Door being rehung on its hinges, pin being tapped in with a hammer, then door swinging smoothly closed, clean latch engagement, fixed door',
        proTip:
          'Seal all six edges of an exterior door (including the top and bottom) with primer and paint. Moisture entering through unsealed edges is a primary cause of wood swelling.',
      },
    ],
    tips: [
      'The 3-inch screw fix for the top hinge is the most effective single repair for sticking doors. It works 80% of the time and costs $0.50.',
      'If the door only sticks seasonally (summer humidity), wait for dry weather to plane it, and be conservative — you don\'t want a gap in winter.',
      'Rub candle wax or bar soap on a rubbing edge as a temporary fix. It reduces friction and buys time.',
      'If the door frame is visibly out of square (check with a level), the house has settled. Shimming the hinges can compensate for minor settling.',
    ],
    warnings: [
      'Don\'t remove too much material when planing. It\'s better to make two light passes than one deep pass. You can\'t add wood back.',
      'When removing a heavy solid-wood door, have a helper. Interior doors weigh 25-40 pounds; exterior doors can weigh 60-80 pounds.',
    ],
    affiliateProducts: [
      {
        id: 'prod-stanley-no4-plane',
        name: 'Stanley No. 4 Adjustable Bench Plane',
        description:
          'Classic smoothing plane for trimming door edges. Adjustable blade depth for fine or aggressive cuts. Cast iron body with hardwood handles. A lifetime tool.',
        price: 39.98,
        affiliateUrl: 'https://www.amazon.com/dp/B000CSFB6S',
        retailer: 'amazon',
        imageUrl: '/products/stanley-no4.jpg',
        rating: 4.4,
        reviewCount: 3200,
        badge: 'our-pick',
      },
      {
        id: 'prod-grip-rite-3in-screws',
        name: 'GRK R4 #9 x 3" Structural Screws (100-pack)',
        description:
          'Self-countersinking, self-tapping structural screws. No pre-drilling needed. Perfect for replacing short hinge screws with ones that reach the framing.',
        price: 18.97,
        affiliateUrl: 'https://www.homedepot.com/p/GRK-R4-Screws/202080712',
        retailer: 'homedepot',
        imageUrl: '/products/grk-r4-screws.jpg',
        rating: 4.8,
        reviewCount: 14200,
        badge: 'best-value',
      },
      {
        id: 'prod-3m-sanding-sponge',
        name: '3M Pro-Pad Sanding Sponge (80-grit, 6-pack)',
        description:
          'Flexible foam sanding sponge for contoured surfaces and edges. 80-grit cuts quickly for door edge material removal. Washable and reusable.',
        price: 9.47,
        affiliateUrl: 'https://www.amazon.com/dp/B00BFXL6GI',
        retailer: 'amazon',
        imageUrl: '/products/3m-sanding-sponge.jpg',
        rating: 4.6,
        reviewCount: 7800,
      },
    ],
    featuredImage: '/guides/fix-sticking-door-hero.jpg',
    publishedAt: '2026-03-09T09:00:00Z',
    updatedAt: '2026-03-20T14:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Fix a Sticking Door (5 Easy Fixes) | Repair & Refinish',
      description:
        'Fix a sticking door in 30-60 minutes. Step-by-step guide for tightening hinges, fixing stripped screw holes, planing edges, and adjusting strike plates.',
      keywords: [
        'fix sticking door',
        'door sticks',
        'door won\'t close',
        'sagging door fix',
        'plane a door',
        'door hinge repair',
        'door adjustment',
        'door rubs frame',
      ],
      ogImage: '/guides/fix-sticking-door-og.jpg',
    },
    faqs: [
      {
        question: 'Why does my door stick in summer but not winter?',
        answer:
          'Wood absorbs moisture from humid summer air and expands. In winter, dry heated air causes it to shrink. This is normal and most common with solid wood doors. The fix is to plane the rubbing edge in summer and seal all six edges with primer and paint to minimize moisture absorption.',
      },
      {
        question: 'Can I fix a sticking door without taking it off the hinges?',
        answer:
          'Often yes. Tightening hinge screws and replacing with 3-inch screws doesn\'t require removing the door. For minor rubs, you can sand the edge with the door in place. Only remove the door if you need to plane a significant amount of material.',
      },
      {
        question: 'My interior door latches fine but doesn\'t stay closed. Why?',
        answer:
          'The strike plate is likely misaligned by 1/16 inch or less. File the inside of the strike plate opening with a metal file to give the latch more room, or reposition the plate. Also check that the latch spring mechanism isn\'t worn — grab the knob and see if the latch retracts and springs back firmly.',
      },
    ],
    relatedGuides: ['weather-strip-door', 'paint-room-like-pro', 'replace-light-switch'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide: Install a Deadbolt Lock
  // ---------------------------------------------------------------------------
  {
    id: 'guide-install-deadbolt-lock',
    slug: 'install-deadbolt-lock',
    title: 'How to Install a Deadbolt Lock',
    excerpt:
      'Add a deadbolt to your exterior door for better security, or replace an old one with a modern smart lock. This beginner project takes 30-45 minutes with basic tools.',
    content: `A deadbolt is the most important lock on your exterior door — the knob lock alone provides minimal security. If your door doesn't have a deadbolt, adding one is a critical safety upgrade. If your existing deadbolt is old or you want keyless entry, upgrading to a smart lock is straightforward.

## Replacing vs. New Installation

Replacing an existing deadbolt is easy: remove the old one, insert the new one. The holes are already drilled. Installing a deadbolt on a door that's never had one requires drilling two holes (one through the door face and one through the edge), which is moderately more involved but still very doable.

## Smart Lock Considerations

Smart deadbolts (Schlage Encode, August, Yale) fit standard deadbolt holes. They add keyless entry, remote locking via app, and guest codes. Most run on batteries and require no wiring. If your existing deadbolt is a standard size, a smart lock drops right in.`,
    category: 'doors-windows',
    difficulty: 'beginner',
    estimatedTime: '30-45 minutes',
    estimatedCost: { low: 25, mid: 80, high: 250, diyVsPro: 'A locksmith charges $100-$250 for deadbolt installation. A standard deadbolt costs $25-$50. A smart lock costs $150-$250.' },
    tools: ['Drill with spade bit (2-1/8") and hole saw', 'Chisel (1")', 'Screwdriver', 'Tape measure', 'Pencil', 'Utility knife'],
    materials: ['Deadbolt lock set (or smart lock)', 'Strike plate with screws (included)', '3-inch screws (for strike plate reinforcement)', 'Wood filler (if filling old holes)'],
    steps: [
      { stepNumber: 1, title: 'Choose the Right Deadbolt', description: 'Measure your door thickness — standard is 1-3/8" or 1-3/4". Measure the backset (distance from the door edge to the center of the existing hole) — standard is 2-3/8" or 2-3/4". Buy a deadbolt that matches these measurements. For a new installation on a door without an existing deadbolt, the standard position is 6-12 inches above the existing knob.', imagePrompt: 'Tape measure checking door thickness and backset distance, deadbolt packaging showing specifications, matching measurements' },
      { stepNumber: 2, title: 'Remove the Old Deadbolt (If Replacing)', description: 'Unscrew the two long screws on the interior side of the deadbolt. Pull the interior and exterior halves apart. Slide the bolt mechanism out of the edge bore hole. Remove the strike plate from the door frame. Clean out any debris from the holes.', imagePrompt: 'Interior deadbolt screws being removed, lock halves separating, bolt mechanism being slid out of the door edge, removal process' },
      { stepNumber: 3, title: 'Drill the Holes (New Installation Only)', description: 'Use the paper template included with the deadbolt to mark the hole positions. Drill the face hole with a 2-1/8" hole saw from one side until the pilot bit breaks through, then finish from the other side (this prevents splintering). Drill the edge hole with a 1" spade bit, boring straight into the edge to meet the face hole. Test-fit the bolt mechanism to confirm the holes align.', imagePrompt: 'Hole saw drilling through a door face for a deadbolt, then spade bit drilling the edge bore, bolt mechanism being test-fit in the new holes', warning: 'Drill the face hole from both sides to prevent splintering. If you drill all the way through from one side, the exit side will splinter badly.' },
      { stepNumber: 4, title: 'Install the Bolt Mechanism', description: 'Insert the bolt assembly into the edge bore hole with the bolt faceplate flush against the door edge. Trace the faceplate outline with a pencil, then remove the bolt and chisel a shallow mortise (1/8" deep) so the faceplate sits flush. Reinstall the bolt and secure the faceplate with the provided screws. Extend and retract the bolt by hand to make sure it moves freely.', imagePrompt: 'Bolt mechanism inserted in door edge, faceplate being mortised flush with a chisel, screws securing the faceplate, bolt extending and retracting smoothly' },
      { stepNumber: 5, title: 'Mount the Lock Halves', description: 'Insert the exterior lock cylinder through the face hole, aligning the tailpiece (the flat bar) with the slot in the bolt mechanism. From inside, place the interior thumb-turn or keypad assembly over the mounting posts. Insert and tighten the two long connecting screws evenly — alternating sides to draw the halves together squarely. Don\'t overtighten or the lock will bind.', imagePrompt: 'Exterior deadbolt cylinder going through the door, interior thumb-turn being aligned and screwed in place, two halves coming together, complete lock assembly', proTip: 'For smart locks, insert the batteries and run the setup app before mounting. It\'s easier to troubleshoot connectivity when the lock isn\'t on the door.' },
      { stepNumber: 6, title: 'Install the Strike Plate', description: 'Close the door and mark where the bolt contacts the frame. Drill a 1" deep hole in the frame for the bolt to extend into. Chisel a mortise for the strike plate. Screw the strike plate to the frame using the provided screws PLUS one 3-inch screw that reaches into the wall framing. The short factory screws only grip the door jamb — a determined kick defeats them. A 3-inch screw into the stud makes the deadbolt truly secure.', imagePrompt: 'Strike plate being mortised into door frame, 3-inch screw being driven through the strike plate into the wall stud, reinforced security installation', proTip: 'The single most important step for door security: use at least one 3-inch screw in the strike plate. This anchors it to the structural framing, not just the thin door jamb.' },
      { stepNumber: 7, title: 'Test and Adjust', description: 'Test the deadbolt from both sides. The bolt should extend and retract smoothly with the key and the thumb-turn. The bolt should slide into the strike plate without force when the door is closed. If the bolt doesn\'t align with the strike plate hole, file the plate opening larger or reposition the plate. Test with the door closed and locked — try pushing on the door to verify it\'s secure.', imagePrompt: 'Key turning the deadbolt smoothly, bolt extending into the strike plate, door being tested for security, smooth operation confirmed' },
    ],
    tips: ['Replace the strike plate screws with 3-inch screws on every exterior door in your house. This $2 upgrade makes every door dramatically more kick-resistant.', 'Smart locks with auto-lock features are ideal for families — the door locks itself after 30 seconds so you never wonder if you locked up.', 'For maximum security, choose a deadbolt with an ANSI Grade 1 rating. Grade 1 is the highest residential standard and resists forced entry better than Grade 2 or 3.', 'Keep a spare key in a lockbox or with a trusted neighbor — not under the mat or in a fake rock. Burglars know all the hiding spots.'],
    warnings: ['Never install a deadbolt that requires a key on the inside (double-cylinder) without checking local fire codes. Many jurisdictions prohibit them because they block emergency exit.', 'If your door or frame is rotted or damaged, a new deadbolt won\'t provide security. Repair the structure first.', 'Smart locks require battery replacement every 6-12 months. Set a calendar reminder so you\'re never locked out by dead batteries.'],
    affiliateProducts: [
      { id: 'prod-schlage-b60n', name: 'Schlage B60N Single Cylinder Deadbolt (Satin Nickel)', description: 'ANSI Grade 1 security rating — the highest available for residential locks. Anti-pick shield, reinforced strike plate with 3" screws. Classic style, superior security.', price: 32.98, affiliateUrl: 'https://www.homedepot.com/p/Schlage-B60N/100058129', retailer: 'homedepot', imageUrl: '/products/schlage-b60n.jpg', rating: 4.7, reviewCount: 18400, badge: 'Best Value' },
      { id: 'prod-schlage-encode', name: 'Schlage Encode Plus Smart WiFi Deadbolt', description: 'Built-in WiFi — no hub required. Apple Home Key, Alexa, and Google compatible. Fingerprint-resistant touchscreen. Auto-lock. ANSI Grade 1 security.', price: 299.99, affiliateUrl: 'https://www.amazon.com/dp/B09Y35CM6J', retailer: 'amazon', imageUrl: '/products/schlage-encode-plus.jpg', rating: 4.5, reviewCount: 7200, badge: 'Our Pick' },
      { id: 'prod-dewalt-hole-saw', name: 'DEWALT Door Lock Installation Kit (D180004)', description: 'Complete kit with 2-1/8" and 1" hole saws, mandrel, and guide template for drilling deadbolt and knob holes. Everything you need for a new lock installation.', price: 22.98, affiliateUrl: 'https://www.amazon.com/dp/B00004RGSS', retailer: 'amazon', imageUrl: '/products/dewalt-door-lock-kit.jpg', rating: 4.5, reviewCount: 11200 },
    ],
    featuredImage: '/images/guides/install-deadbolt-lock.jpg',
    publishedAt: '2025-11-05T09:00:00Z',
    updatedAt: '2026-02-10T14:00:00Z',
    author: defaultAuthor,
    seo: { title: 'How to Install a Deadbolt Lock (Security Upgrade) | Repair & Refinish', description: 'Install or replace a deadbolt lock in 30-45 minutes. Covers drilling, mounting, strike plate reinforcement, and smart lock setup for improved home security.', keywords: ['install deadbolt', 'deadbolt installation', 'replace deadbolt', 'door lock install', 'smart lock installation', 'home security lock', 'deadbolt replacement'] },
    faqs: [
      { question: 'Can I install a smart lock myself?', answer: 'Yes. Smart deadbolts fit standard deadbolt holes and install exactly like a regular deadbolt. The only addition is downloading the app and connecting to Wi-Fi. No wiring or special tools needed.' },
      { question: 'What\'s the most secure deadbolt?', answer: 'Look for ANSI Grade 1 certification — it\'s the highest security rating for residential locks. Schlage B60N and Kwikset 980 are the two most popular Grade 1 deadbolts. The strike plate reinforcement (3-inch screws into framing) is equally important.' },
      { question: 'How high should a deadbolt be above the doorknob?', answer: 'The standard position is 6-12 inches above the existing doorknob, typically 44 inches from the floor. This places it at a comfortable height for most adults. Check your local building codes for specific requirements.' },
    ],
    relatedGuides: ['weather-strip-door', 'fix-sticking-door', 'replace-light-switch'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide: Replace a Window Screen
  // ---------------------------------------------------------------------------
  {
    id: 'guide-replace-window-screen',
    slug: 'replace-window-screen',
    title: 'How to Replace a Window Screen',
    excerpt:
      'A torn window screen lets in bugs and looks terrible. Re-screening takes just 20-30 minutes per screen with a $15 tool and a roll of screen material.',
    content: `Window screens tear from pet claws, weather damage, or age. Replacing the screen mesh is simple and costs a fraction of buying a new screen frame. A basic screen roller tool and a roll of replacement screen mesh are all you need.

## Screen Material Options

Fiberglass mesh is the most popular choice — it's affordable, easy to work with, and doesn't dent. Aluminum mesh is more durable and resists pet damage better but costs more and can dent. Pet-resistant screen (like Phifer PetScreen) is 7 times stronger than standard fiberglass and resists claws.

## When to Replace the Frame

If the frame is bent, cracked, or corroded, replace the entire screen (frame and mesh). Replacement frames are available at hardware stores in standard sizes, or you can have custom frames made.`,
    category: 'doors-windows',
    difficulty: 'beginner',
    estimatedTime: '20-30 minutes',
    estimatedCost: { low: 8, mid: 15, high: 25, diyVsPro: 'A hardware store charges $15-$40 to re-screen a window. DIY materials cost $8-$25 (enough for multiple screens).' },
    tools: ['Screen roller tool (convex and concave ends)', 'Utility knife', 'Flathead screwdriver or awl', 'Scissors', 'Clamps (optional)'],
    materials: ['Replacement screen mesh (fiberglass or aluminum)', 'Spline (rubber cord that holds screen in the frame channel)', 'Painter\'s tape (optional, for holding screen in place)'],
    steps: [
      { stepNumber: 1, title: 'Remove the Screen and Old Spline', description: 'Remove the window screen from the window frame. Lay it flat on a work surface. Locate the rubber spline (the cord pressed into the channel around the frame perimeter). Use a flathead screwdriver or awl to pry up one end of the spline and pull it out of the channel around the entire frame. The old screen mesh will lift out. Clean any debris from the frame channel.', imagePrompt: 'Flathead screwdriver prying up the rubber spline from a window screen frame channel, pulling it out in one long piece, old screen being removed' },
      { stepNumber: 2, title: 'Cut New Screen Material', description: 'Lay the new screen mesh over the frame. Cut it 2 inches larger than the frame on all sides — you need the overhang to grip while pressing the spline in. If the screen curls (common with rolled fiberglass), weigh down the corners or tape the edges to the work surface.', imagePrompt: 'New fiberglass screen mesh laid over a window screen frame, cut with scissors 2 inches larger on all sides, smooth flat surface' },
      { stepNumber: 3, title: 'Press the Spline Into One Side', description: 'Starting on one of the long sides, lay the new spline over the screen mesh at the channel. Using the concave (grooved) wheel of the screen roller tool, press the spline into the channel, pushing the screen mesh in with it. Work slowly and keep the screen taut with your free hand. The mesh should be pulled tightly but not distorted. Use new spline if the old one is brittle or damaged — match the diameter.', imagePrompt: 'Screen roller tool pressing rubber spline and screen mesh into the frame channel, concave wheel rolling along, taut screen being formed', proTip: 'Start with a long side, then do the opposite long side (pulling the screen taut across the frame), then the two short sides. This prevents wrinkles and sagging.' },
      { stepNumber: 4, title: 'Continue Around All Four Sides', description: 'Move to the opposite long side. Pull the screen mesh taut across the frame and press the spline in with the roller tool. Then do both short sides. At the corners, use the convex (rounded) end of the roller tool to press the spline into the corner junction. The screen should be drum-tight with no wrinkles or sagging when you finish all four sides.', imagePrompt: 'Screen roller pressing spline into the remaining sides of the frame, corners being pressed with the convex end, taut wrinkle-free screen result' },
      { stepNumber: 5, title: 'Trim the Excess Screen', description: 'Using a sharp utility knife, trim the excess screen mesh along the outside edge of the spline channel. Hold the knife at a slight angle toward the outside of the frame so the cut is clean. A fresh blade is critical — a dull blade tears the mesh instead of cutting it. Check all four sides for any mesh fibers sticking out and trim them.', imagePrompt: 'Utility knife trimming excess screen mesh along the spline channel edge, clean cut, trimmed screen flush with the frame edge', proTip: 'Run the knife in one continuous motion along each side rather than making short strokes. This creates a cleaner edge with no fraying.' },
      { stepNumber: 6, title: 'Reinstall the Screen', description: 'Place the re-screened frame back in the window. Most screens have spring clips or plunger pins that hold them in the window track. Compress the springs, position the screen, and release them into the track grooves. Check that the screen sits flush and doesn\'t bow. Open and close the window to verify the screen doesn\'t interfere with operation.', imagePrompt: 'Rescreened window frame being installed back in the window track, spring clips engaging, screen sitting flush and clean, finished repair' },
    ],
    tips: ['Buy a roll of screen mesh and spline — enough to do all your screens at once. It\'s much cheaper per screen than buying individual kits.', 'If you have pets, invest in PetScreen (Phifer brand). It\'s much more resistant to claws than standard fiberglass and saves you from re-screening every year.', 'A screen roller tool costs $5-$8 and lasts forever. It\'s the only specialized tool you need.', 'Replace spline every time you re-screen. Old spline loses its flexibility and doesn\'t grip the channel properly.'],
    warnings: ['Use a fresh utility knife blade when trimming screen. A dull blade catches and tears the mesh, ruining the clean edge.', 'Don\'t pull the screen so tight that it distorts or bows the frame. It should be taut but not stretched to the point of bending aluminum frames.'],
    affiliateProducts: [
      { id: 'prod-phifer-fiberglass', name: 'Phifer Standard Fiberglass Window Screen (36" x 84")', description: 'Standard charcoal fiberglass screen mesh. Easy to cut and install. Doesn\'t dent or crease like aluminum. One roll re-screens 3-4 standard windows.', price: 8.98, affiliateUrl: 'https://www.homedepot.com/p/Phifer-Fiberglass-Screen/100025097', retailer: 'homedepot', imageUrl: '/products/phifer-fiberglass.jpg', rating: 4.5, reviewCount: 8200, badge: 'Best Value' },
      { id: 'prod-phifer-petscreen', name: 'Phifer PetScreen Heavy-Duty Mesh (36" x 84")', description: 'Seven times stronger than standard screen. Resists pet claws, tearing, and punctures. Vinyl-coated polyester. Charcoal color. Worth every penny if you have dogs or cats.', price: 18.98, affiliateUrl: 'https://www.homedepot.com/p/Phifer-PetScreen/100550267', retailer: 'homedepot', imageUrl: '/products/phifer-petscreen.jpg', rating: 4.6, reviewCount: 12400, badge: 'Our Pick' },
      { id: 'prod-prime-line-roller', name: 'Prime-Line Screen Roller Tool with Spline', description: 'Dual-wheel screen roller with convex and concave ends. Includes 25 feet of 0.140" spline. Everything you need to re-screen a window for under $10.', price: 7.98, affiliateUrl: 'https://www.amazon.com/dp/B000BQRD12', retailer: 'amazon', imageUrl: '/products/prime-line-roller.jpg', rating: 4.4, reviewCount: 6400 },
    ],
    featuredImage: '/images/guides/replace-window-screen.jpg',
    publishedAt: '2025-05-20T09:00:00Z',
    updatedAt: '2025-10-15T14:00:00Z',
    author: defaultAuthor,
    seo: { title: 'How to Replace a Window Screen (Easy DIY Repair) | Repair & Refinish', description: 'Replace a torn window screen in 20-30 minutes. Step-by-step guide for removing spline, installing new mesh, and trimming for a clean professional repair.', keywords: ['replace window screen', 'fix torn screen', 'window screen repair', 're-screen window', 'screen mesh replacement', 'window screen spline', 'screen roller tool'] },
    faqs: [
      { question: 'What size spline do I need?', answer: 'Spline comes in diameters from 0.125" to 0.190". The most common residential size is 0.140". Bring a piece of your old spline to the hardware store to match the diameter. Using the wrong size results in a loose screen (too small) or a bulging frame (too large).' },
      { question: 'Should I use fiberglass or aluminum screen?', answer: 'Fiberglass is easier to work with, less expensive, and doesn\'t dent. Aluminum is more durable and provides slightly better visibility. For most homeowners, fiberglass is the better choice. If you have cats or dogs, use pet-resistant screen instead of either.' },
      { question: 'Can I re-screen a sliding door screen?', answer: 'Yes, the process is identical. Sliding door screens just have larger frames. You\'ll need a wider roll of screen mesh (typically 48" or 72" wide) and more spline. The technique is the same.' },
    ],
    relatedGuides: ['weather-strip-door', 'fix-sticking-door', 'seal-air-leaks-windows'],
    status: 'published',
  },
];

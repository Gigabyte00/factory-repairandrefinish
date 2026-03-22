import type { Guide } from '@/types';
import { defaultAuthor } from '../site-config';

export const outdoorLandscapingGuides: Guide[] = [
  // ---------------------------------------------------------------------------
  // Guide 21: Repair a Deck Board
  // ---------------------------------------------------------------------------
  {
    id: 'guide-repair-deck-board',
    slug: 'repair-deck-board',
    title: 'How to Repair a Deck Board',
    excerpt:
      'A cracked, warped, or rotted deck board is a safety hazard and an eyesore. Learn how to remove and replace individual boards without rebuilding the entire deck.',
    content: `Replacing a damaged deck board is a straightforward project that prevents bigger problems. A single rotted board can spread moisture damage to the joists below, turning a $20 fix into a $2,000 structural repair. Catching and replacing damaged boards early is the key to extending your deck's lifespan.

## Matching Your Decking

If your deck is pressure-treated lumber, matching is easy — just buy the same dimension at any lumber yard. For composite decking, you'll need the exact brand, product line, and color. If it's been discontinued, contact the manufacturer for the closest match. Cedar and redwood may have weathered to a different color than new lumber — you can sand and re-stain the entire deck after the repair for a uniform look.

## When to Call a Pro

If the joists (the structural framing under the boards) are also rotted or damaged, the repair is more complex and may require structural evaluation. This guide covers board replacement only.`,
    category: 'outdoor-landscaping',
    difficulty: 'intermediate',
    estimatedTime: '60-90 minutes',
    estimatedCost: {
      low: 15,
      mid: 40,
      high: 80,
      diyVsPro: 'A deck contractor charges $200-$500 for board replacement. DIY materials cost $15-$80 depending on decking type.',
    },
    tools: [
      'Circular saw or reciprocating saw',
      'Drill/driver',
      'Pry bar or cat\'s paw',
      'Tape measure',
      'Speed square',
      'Hammer',
      'Safety glasses',
    ],
    materials: [
      'Replacement deck board (matching species and dimensions)',
      'Deck screws (exterior grade, #8 x 2-1/2" or 3")',
      'Wood preservative (for cut ends)',
      'Deck stain or sealer (to match existing)',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Assess the Damage and Check the Joists',
        description:
          'Identify all boards that need replacement. Probe suspicious boards with an awl or screwdriver — if the tip sinks in easily, the wood is rotted. Check the joists under the damaged boards by reaching through the deck board gap or looking from below. Joists should be solid. If a joist is soft or rotted, you\'ll need to sister a new joist alongside it (a separate, more involved repair).',
        imagePrompt:
          'Screwdriver probing a rotted deck board, tip sinking into soft wood, then checking the joist below for damage, outdoor deck inspection',
        proTip:
          'Probe both the top surface and the underside of suspect boards. Rot often starts on the bottom (where moisture sits) and isn\'t visible from above.',
      },
      {
        stepNumber: 2,
        title: 'Remove the Damaged Board',
        description:
          'If the damaged board runs the full span from joist to joist, unscrew or pry out the fasteners and remove the entire board. If only a section is damaged, mark cut lines on the board directly over the center of a joist on each side of the damage (so the new piece has joist support at each end). Set your circular saw to the depth of the deck board (typically 1 inch for 5/4 decking) and cut along the lines.',
        imagePrompt:
          'Circular saw cutting through a damaged deck board along a marked line directly over a joist, depth set to board thickness, clean cut',
        warning:
          'Set your circular saw blade depth to ONLY the thickness of the deck board. Cutting into the joist weakens the structural framing. Make a test cut on scrap wood first to verify depth.',
      },
      {
        stepNumber: 3,
        title: 'Pry Out the Cut Section',
        description:
          'Insert a pry bar or cat\'s paw under the cut section and lever it up. Remove any remaining screws or nails from the joists. Clean debris, leaves, and dirt from the joist tops. Inspect the exposed joists for rot, insect damage, or cracks. If the joists are sound, they\'re ready for the new board.',
        imagePrompt:
          'Pry bar levering up a cut section of deck board, exposed joists below visible and being cleaned, outdoor deck repair in progress',
      },
      {
        stepNumber: 4,
        title: 'Cut and Treat the Replacement Board',
        description:
          'Measure the opening and cut the replacement board to fit. Leave a 1/8-inch gap at each end for drainage and expansion. If you\'re replacing a partial section, make sure the board ends land on the center of a joist. Apply wood preservative to all cut ends — pressure treatment doesn\'t fully penetrate the center of the wood, so cut ends are vulnerable to rot.',
        imagePrompt:
          'New deck board being measured and cut to length, wood preservative being brushed onto the cut ends, proper fit-check in the opening',
        proTip:
          'Pre-drill screw holes at the ends of the replacement board to prevent splitting. Drill at a slight angle (about 15 degrees) for a stronger grip.',
      },
      {
        stepNumber: 5,
        title: 'Install the Replacement Board',
        description:
          'Drop the new board into position. If the gap is too tight to drop it straight in (adjacent boards prevent it), angle one end in first and flex the board to snap the other end into place. Drive deck screws through the board into each joist — two screws per joist, positioned to match the fastener pattern on adjacent boards. Drive screws until the head is just flush with the surface (not countersunk deeply).',
        imagePrompt:
          'New deck board being positioned in the opening, then screwed down with two deck screws per joist, matching the pattern of adjacent boards, snug fit',
      },
      {
        stepNumber: 6,
        title: 'Stain or Seal to Match',
        description:
          'The new board will be a different color than the weathered surrounding boards. Apply deck stain or sealer to match the existing deck. For the best color match, you may need to clean (pressure wash) and re-stain the entire deck section. If you\'re replacing pressure-treated lumber, wait 2-4 weeks for the wood to dry before staining. Composite decking doesn\'t need staining.',
        imagePrompt:
          'Brush applying deck stain to a new replacement board on a deck, color blending with the surrounding weathered boards, even application',
        proTip:
          'Test your stain color on the underside of the new board or a scrap piece first. New wood absorbs stain differently than weathered wood, so the color may look different from the can.',
      },
    ],
    tips: [
      'Buy one extra board whenever you\'re doing deck repair. Having a spare saves a trip to the lumber yard for the next inevitable repair.',
      'When cutting on the center of a joist, offset the new butt joint by at least one joist bay from any adjacent board butt joint. This prevents a structural weak line across the deck.',
      'Stainless steel or coated deck screws prevent rust stains. Standard steel screws will leave black streaks on the wood.',
      'If multiple boards need replacement, consider replacing the entire visible section and re-staining for a uniform appearance.',
    ],
    warnings: [
      'Always set your circular saw to the exact depth of the board. Cutting into joists weakens the deck structure.',
      'Wear safety glasses and hearing protection when cutting. Pressure-treated sawdust is an irritant — wear an N95 mask if cutting treated lumber.',
      'Do not reuse deck screws. Old screws have compromised corrosion protection and weakened threads.',
    ],
    affiliateProducts: [
      {
        id: 'prod-grip-rite-deck-screws',
        name: 'GRK RT Composite Deck Screws (#8 x 2-1/2", 525-count)',
        description:
          'Reverse-thread design pulls boards tight to joists without mushrooming. Climatek coating for corrosion resistance. Works with treated lumber and composite decking.',
        price: 39.97,
        affiliateUrl: 'https://www.homedepot.com/p/GRK-Deck-Screws/204842740',
        retailer: 'homedepot',
        imageUrl: '/products/grk-deck-screws.jpg',
        rating: 4.7,
        reviewCount: 8900,
        badge: 'our-pick',
      },
      {
        id: 'prod-copper-green-preservative',
        name: 'Copper Green Brown Wood Preservative (1 quart)',
        description:
          'Brush-on preservative for cut ends and exposed wood. Penetrates and protects against rot, decay, and insect damage. Essential for pressure-treated board cuts.',
        price: 14.98,
        affiliateUrl: 'https://www.homedepot.com/p/Copper-Green/100145271',
        retailer: 'homedepot',
        imageUrl: '/products/copper-green.jpg',
        rating: 4.4,
        reviewCount: 2400,
        badge: 'best-value',
      },
      {
        id: 'prod-ryobi-circular-saw',
        name: 'RYOBI ONE+ 18V 6-1/2" Cordless Circular Saw (tool only)',
        description:
          'Lightweight cordless saw perfect for deck board cuts. 6-1/2" blade handles up to 2-1/8" depth. LED work light for visibility. Part of the RYOBI ONE+ battery system.',
        price: 59.97,
        affiliateUrl: 'https://www.homedepot.com/p/RYOBI-ONE-Circular-Saw/309753978',
        retailer: 'homedepot',
        imageUrl: '/products/ryobi-circular-saw.jpg',
        rating: 4.5,
        reviewCount: 12100,
      },
    ],
    featuredImage: '/guides/repair-deck-board-hero.jpg',
    publishedAt: '2026-03-11T09:00:00Z',
    updatedAt: '2026-03-20T17:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Repair a Deck Board (Replace Damaged Sections) | Repair & Refinish',
      description:
        'Replace a rotted or damaged deck board in 90 minutes. Step-by-step guide for removing, cutting, installing, and staining replacement deck boards.',
      keywords: [
        'repair deck board',
        'replace deck board',
        'rotted deck board',
        'fix deck board',
        'deck board replacement',
        'deck repair DIY',
        'damaged decking fix',
      ],
      ogImage: '/guides/repair-deck-board-og.jpg',
    },
    faqs: [
      {
        question: 'Can I replace just one deck board?',
        answer:
          'Absolutely. Individual board replacement is the standard repair approach. You can replace a full-length board or just a damaged section (cutting on joist centers for support). The new board should match the species and dimensions of the existing decking.',
      },
      {
        question: 'How long does pressure-treated decking last?',
        answer:
          'Properly maintained pressure-treated pine lasts 15-20 years. Cedar lasts 15-25 years. Composite decking lasts 25-30+ years. The #1 factor is whether the deck is regularly sealed/stained — unsealed wood deteriorates 2-3 times faster.',
      },
      {
        question: 'Should I wait to stain new pressure-treated wood?',
        answer:
          'Yes. New pressure-treated lumber contains moisture from the treatment process. Wait 2-4 weeks (or until the wood passes the "sprinkle test" — sprinkle water on the surface; if it soaks in, the wood is ready; if it beads up, wait longer). Then apply a quality exterior wood stain.',
      },
    ],
    relatedGuides: ['fix-leaning-fence-post', 'refinish-wood-table', 'fix-squeaky-floors'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide 22: Fix a Leaning Fence Post
  // ---------------------------------------------------------------------------
  {
    id: 'guide-fix-leaning-fence-post',
    slug: 'fix-leaning-fence-post',
    title: 'How to Fix a Leaning Fence Post',
    excerpt:
      'A leaning fence post makes the whole fence look bad and will eventually pull down adjacent sections. Learn how to straighten it with concrete, bracing, or a steel post repair bracket — depending on the cause.',
    content: `Fence posts lean for three main reasons: the concrete footing has cracked or lifted (frost heave), the wood post has rotted at the ground line, or the original footing was too shallow. Each cause has a different fix.

## Diagnosing the Problem

Push the post back toward vertical and observe what moves. If the post rocks within the concrete, the wood has rotted inside the footing. If the entire concrete footing lifts and tilts with the post, the footing has shifted. If the post is solid and the footing doesn't move, wind or impact has bent the post above the ground line.

## The Right Fix

For a shifted footing, you can add new concrete around it. For a rotted post, you'll brace or replace it. For a broken post above ground, cut and sister a new post. This guide covers all three scenarios.`,
    category: 'outdoor-landscaping',
    difficulty: 'intermediate',
    estimatedTime: '2-3 hours',
    estimatedCost: {
      low: 15,
      mid: 35,
      high: 50,
      diyVsPro: 'A fence contractor charges $200-$400 per post repair. DIY materials cost $15-$50.',
    },
    tools: [
      'Post level',
      'Shovel',
      'Tamping bar',
      'Drill/driver',
      'Carpenter\'s level (4-foot)',
      'Clamps or temporary braces (2x4 lumber)',
      'Saw (circular or hand saw)',
    ],
    materials: [
      'Quick-setting concrete (like Quikrete Fast-Setting)',
      'Gravel (for drainage at bottom of hole)',
      'Steel fence post repair bracket (if post is rotted)',
      'Lag bolts or structural screws',
      'Water (for concrete)',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Diagnose the Cause of the Lean',
        description:
          'Push the post firmly toward vertical. Watch what happens at ground level. If the post wobbles inside the concrete collar, the wood has rotted below grade. If the entire footing tips with the post, the concrete has lost its grip in the soil (common in areas with frost heave or sandy soil). If the post is solid and the footing is firm, the post may be broken or warped above ground. Your diagnosis determines which fix to use.',
        imagePrompt:
          'Person pushing a leaning fence post, examining the base for rot or footing movement, diagnostic inspection at ground level, outdoor fence setting',
        proTip:
          'Probe the post at ground level with an awl or screwdriver. If the wood is soft or crumbles, it\'s rotted and the post needs replacement or a steel bracket repair.',
      },
      {
        stepNumber: 2,
        title: 'Brace the Post Plumb',
        description:
          'Push the post back to vertical using a helper or a come-along strap. Check plumb on two adjacent sides with a 4-foot level. Clamp temporary braces (2x4 lumber) from the post to stakes pounded into the ground at 45-degree angles, one on each side. These braces hold the post perfectly vertical while you make the permanent repair. Don\'t remove the braces until the concrete is fully cured (24 hours).',
        imagePrompt:
          'Leaning fence post being pushed vertical, 4-foot level checking plumb on two sides, 2x4 braces clamped to the post and staked to the ground at 45 degrees',
      },
      {
        stepNumber: 3,
        title: 'Fix a Shifted Footing (Add Concrete)',
        description:
          'If the old concrete footing tilted but the post is still solid, dig out 6-8 inches of soil around the footing on the leaning side. Push the post plumb and brace it. Pour quick-setting concrete into the gap between the old footing and the soil, filling to about 2 inches below ground level. Slope the concrete away from the post so water drains away. Add water per the concrete bag instructions and let it set for 24 hours.',
        imagePrompt:
          'Digging around a tilted fence post footing, then pouring quick-setting concrete around the old footing to stabilize, sloping concrete away from the post for drainage',
        proTip:
          'Quick-setting concrete (Quikrete Fast-Setting) sets in 20-40 minutes, so you don\'t need to hold braces all day. However, leave the braces for 24 hours for full cure strength.',
      },
      {
        stepNumber: 4,
        title: 'Fix a Rotted Post (Steel Bracket Method)',
        description:
          'If the post has rotted at the ground line, a steel post repair bracket is the fastest fix. Dig away the soil and concrete around the rotted base. Cut the rotted portion of the post off at least 2 inches above the rot (into solid wood). Drive a steel post repair bracket (like EZ-Mender or Simpson E-Z Mender) into the ground next to the remaining concrete footing. Bolt the bracket to the post using the provided lag bolts. The steel bracket becomes the new below-grade support.',
        imagePrompt:
          'Steel fence post repair bracket being driven into the ground next to a cut post, then bolted to the solid wood above the rot line, structural repair',
        warning:
          'The steel bracket method works for fence posts but is not suitable for structural posts (deck posts, pergola posts). Those require full post replacement.',
      },
      {
        stepNumber: 5,
        title: 'Replace a Severely Rotted Post (Full Replacement)',
        description:
          'For posts that are rotted beyond the bracket method, disconnect the fence rails from the post (remove screws or nails). Dig out the post and concrete footing (a digging bar helps break up old concrete). Dig the hole 6 inches deeper than the old one and add 4 inches of gravel for drainage. Set a new treated 4x4 post in the hole, check plumb on two sides, brace it, and pour new concrete around it. Reattach the fence rails.',
        imagePrompt:
          'Old rotted fence post and concrete being removed from the ground, new post being set in a deeper hole with gravel base, concrete poured around it, braces holding it plumb',
        proTip:
          'Bury posts at least 1/3 of the total length for stability. For a 6-foot fence with an 8-foot post, bury 2 feet (24 inches) minimum. In areas with deep frost lines, go deeper.',
      },
      {
        stepNumber: 6,
        title: 'Remove Braces and Reattach Fence Rails',
        description:
          'After the concrete has cured for 24 hours, remove the temporary braces. Check plumb one final time. Reattach any fence rails or panels that were disconnected during the repair using galvanized or stainless steel screws or nails. Backfill any remaining soil around the concrete footing and tamp it firm. The repair is complete.',
        imagePrompt:
          'Braces being removed from a now-straight fence post, fence rails being reattached, post level showing perfect plumb, solid repaired fence',
      },
    ],
    tips: [
      'Use quick-setting concrete (Quikrete Fast-Setting) for fence post repairs — it sets in 20-40 minutes versus 24-48 hours for standard concrete.',
      'Always slope the concrete away from the post so rainwater drains away from the wood. Water pooling at the base is the #1 cause of post rot.',
      'When setting a new post, apply wood preservative to the buried portion for extra rot protection, even if it\'s pressure-treated.',
      'Check all fence posts annually. Fixing a slight lean is much easier than replacing a toppled section.',
    ],
    warnings: [
      'Call 811 (the national "Call Before You Dig" line) before digging near a fence line. Utility lines are commonly buried along property boundaries.',
      'Do not lean against or hang heavy items on a repaired post for at least 48 hours while concrete fully cures.',
      'If more than 2-3 adjacent posts are leaning, the fence may have a structural or drainage problem that requires professional evaluation.',
    ],
    affiliateProducts: [
      {
        id: 'prod-quikrete-fast-setting',
        name: 'Quikrete Fast-Setting Concrete Mix (50 lb)',
        description:
          'Sets in 20-40 minutes — no mixing required. Pour dry mix into the hole, add water, done. Ideal for fence posts. One bag sets one 4x4 post in a 10-inch hole.',
        price: 6.97,
        affiliateUrl: 'https://www.homedepot.com/p/Quikrete-Fast-Setting/100318511',
        retailer: 'homedepot',
        imageUrl: '/products/quikrete-fast.jpg',
        rating: 4.6,
        reviewCount: 14200,
        badge: 'best-value',
      },
      {
        id: 'prod-ez-mender',
        name: 'Simpson Strong-Tie E-Z Mender Fence Post Repair Bracket',
        description:
          'Steel bracket for repairing rotted fence posts without digging. Drives into the ground with a sledgehammer. Bolts to the solid portion of the existing post.',
        price: 15.98,
        affiliateUrl: 'https://www.homedepot.com/p/Simpson-E-Z-Mender/100375121',
        retailer: 'homedepot',
        imageUrl: '/products/ez-mender.jpg',
        rating: 4.1,
        reviewCount: 3400,
        badge: 'our-pick',
      },
      {
        id: 'prod-irwin-post-level',
        name: 'IRWIN Tools Magnetic Post Level',
        description:
          'Straps to a fence post and shows plumb on two sides simultaneously. Magnetic back sticks to steel brackets. Frees both hands for bracing and fastening.',
        price: 8.97,
        affiliateUrl: 'https://www.amazon.com/dp/B00002X2HO',
        retailer: 'amazon',
        imageUrl: '/products/irwin-post-level.jpg',
        rating: 4.5,
        reviewCount: 5600,
      },
    ],
    featuredImage: '/guides/fix-leaning-fence-post-hero.jpg',
    publishedAt: '2026-03-13T09:00:00Z',
    updatedAt: '2026-03-20T18:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Fix a Leaning Fence Post (3 Methods) | Repair & Refinish',
      description:
        'Straighten a leaning fence post with concrete reinforcement, a steel repair bracket, or full replacement. Step-by-step guide for all three repair methods.',
      keywords: [
        'fix leaning fence post',
        'fence post repair',
        'straighten fence post',
        'rotted fence post',
        'fence post concrete',
        'fence post bracket',
        'leaning fence fix',
        'DIY fence repair',
      ],
      ogImage: '/guides/fix-leaning-fence-post-og.jpg',
    },
    faqs: [
      {
        question: 'Can I fix a fence post without digging?',
        answer:
          'Yes, using a steel fence post repair bracket (like the Simpson E-Z Mender). You drive the bracket into the ground next to the existing footing, cut the rotted post above the ground line, and bolt the bracket to the solid portion. It\'s faster than digging but only works for fence posts, not structural posts.',
      },
      {
        question: 'How deep should a fence post be buried?',
        answer:
          'The general rule is 1/3 of the total post length. For a 6-foot fence using an 8-foot post, bury at least 24 inches. In areas with deep frost lines, the footing should extend below the frost line to prevent heaving. Check your local building codes for specific requirements.',
      },
      {
        question: 'Should I use concrete or gravel for fence posts?',
        answer:
          'Concrete provides the strongest anchor but can trap moisture against the post, causing rot. Gravel drains better and is easier to replace a post later. A good compromise: pack 4 inches of gravel at the bottom for drainage, then fill with concrete to 2 inches below ground level, sloped away from the post.',
      },
    ],
    relatedGuides: ['repair-deck-board', 'weather-strip-door', 'refinish-wood-table'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide: Build a Simple Raised Garden Bed
  // ---------------------------------------------------------------------------
  {
    id: 'guide-build-raised-garden-bed',
    slug: 'build-raised-garden-bed',
    title: 'How to Build a Simple Raised Garden Bed',
    excerpt:
      'Build a sturdy 4x8 foot raised garden bed in 2-3 hours with basic lumber and screws. No advanced woodworking needed — just straight cuts and simple assembly.',
    content: `A raised garden bed gives you better soil, fewer weeds, improved drainage, and easier access for planting and harvesting. A standard 4x8 foot bed built from 2x6 or 2x10 cedar or pressure-treated lumber lasts 10-20 years and grows enough vegetables for a family of four.

## Choosing Lumber

Cedar and redwood are naturally rot-resistant and chemical-free — ideal if you're growing food. Pressure-treated lumber is cheaper and lasts longer, but modern treatment (ACQ, not CCA) is considered safe for vegetable gardens by the EPA. Avoid railroad ties, pallets, and painted/stained wood.

## Sizing Your Bed

4 feet wide is the maximum recommended width — you can reach the center from either side without stepping in the soil. Length can be whatever you want. Height depends on your needs: 6 inches for shallow-rooted plants, 10-12 inches for most vegetables, 18-24 inches for accessible/raised gardening.`,
    category: 'outdoor-landscaping',
    difficulty: 'beginner',
    estimatedTime: '2-3 hours',
    estimatedCost: { low: 50, mid: 100, high: 175, diyVsPro: 'Pre-made raised bed kits cost $150-$400. Building one from lumber costs $50-$175 and takes 2-3 hours.' },
    tools: ['Drill/driver with bits', 'Circular saw or miter saw', 'Tape measure', 'Speed square', 'Level', 'Shovel', 'Wheelbarrow'],
    materials: ['(4) 2x10x8\' cedar or pressure-treated boards', '(4) 4x4x12" corner posts', '3-inch exterior deck screws', 'Landscape fabric (optional, for weed barrier)', 'Garden soil/compost mix (about 1 cubic yard for a 4x8x10" bed)'],
    steps: [
      { stepNumber: 1, title: 'Choose the Location', description: 'Select a level spot that receives at least 6-8 hours of direct sunlight per day. Avoid low spots where water pools. Place the bed on grass, bare soil, or gravel — not on concrete (you need drainage). Mark the 4x8 foot footprint with stakes and string or spray paint.', imagePrompt: 'Sunny backyard spot being marked with stakes and string for a 4x8 foot raised garden bed, level ground, good sun exposure', proTip: 'Orient the long side east-west so tall plants on the north side don\'t shade shorter plants on the south side.' },
      { stepNumber: 2, title: 'Cut the Lumber', description: 'You need four 8-foot boards for the long sides and four 4-foot boards for the short sides (cut four of your eight-footers in half). Cut four 12-inch pieces of 4x4 for the corner posts. If your lumber yard sells 4-foot boards, you can skip cutting the short sides. Sand any rough edges.', imagePrompt: 'Circular saw cutting 2x10 lumber to length, organized stack of long and short boards plus corner posts, measuring and cutting process' },
      { stepNumber: 3, title: 'Assemble the Frame', description: 'Stand a long board on edge and butt a short board against the end, forming a right angle. Place a 4x4 corner post inside the joint. Drive three 3-inch deck screws through each board into the corner post. Repeat for all four corners. For a 10-inch-tall bed using 2x10 boards, one course is enough. For a taller bed, stack a second course on top and screw through into the course below.', imagePrompt: 'Assembling the raised bed frame: boards being joined at the corner with screws driven into the 4x4 corner post, right angle joint formation, drill in action', proTip: 'Pre-drill all screw holes to prevent the cedar from splitting. Especially important near the ends of the boards.' },
      { stepNumber: 4, title: 'Level the Bed in Position', description: 'Move the assembled frame to your marked location. Set it in place and check for level with a 4-foot level across the top edges. If the ground is uneven, dig out the high spots rather than shimming the low spots — the frame should sit firmly on the ground with no gaps (gaps let soil wash out). If the ground slopes, step the bed into the slope and add soil inside to level the planting surface.', imagePrompt: 'Raised bed frame being leveled on the ground, checking with a level tool, digging slight adjustment on the high side, frame sitting flat and stable' },
      { stepNumber: 5, title: 'Add Weed Barrier (Optional)', description: 'Line the bottom of the bed with landscape fabric to suppress weeds from growing up through the soil. Overlap seams by 6 inches. Staple the fabric to the inside of the boards. The fabric allows water to drain through while blocking weeds. Some gardeners skip this step if building over bare soil and prefer to allow worm access from below.', imagePrompt: 'Landscape fabric being laid inside the raised bed frame, stapled to the sides, overlapping seams, weed barrier before adding soil' },
      { stepNumber: 6, title: 'Fill With Soil Mix', description: 'Fill the bed with a mix of 60% topsoil, 30% compost, and 10% perlite or vermiculite. This blend provides nutrients, drainage, and aeration. A 4x8x10-inch bed needs about 1 cubic yard of soil mix (27 cubic feet). Water the soil thoroughly after filling to settle it, then top off to within 1 inch of the frame top. Let the soil settle for a few days before planting.', imagePrompt: 'Wheelbarrow of soil mix being poured into the raised bed, filling to near the top, watering to settle, rich dark soil ready for planting', proTip: 'Buy soil in bulk from a landscape supply company — it\'s 50-70% cheaper than buying bags from a hardware store. Most suppliers deliver for a small fee.' },
      { stepNumber: 7, title: 'Plant and Mulch', description: 'Plant your vegetables, herbs, or flowers according to the spacing guidelines for each variety. Water immediately after planting. Apply 2-3 inches of mulch (straw, wood chips, or shredded leaves) around the plants to retain moisture, suppress weeds, and regulate soil temperature. The raised bed is now ready to grow.', imagePrompt: 'Seedlings being planted in the finished raised garden bed, mulch applied around plants, watered, lush garden beginning, completed project' },
    ],
    tips: ['Cedar naturally resists rot for 15-20 years without any treatment. It costs more upfront but outlasts treated pine.', 'Don\'t make beds wider than 4 feet. You should be able to reach the center from either side without stepping in the soil — compacted soil kills plant roots.', 'Line the bottom with hardware cloth (1/2" wire mesh) if you have gophers, moles, or voles. Staple it to the inside of the frame.', 'Elevate the bed 12-24 inches on legs or cinder blocks for accessible gardening if bending is difficult.'],
    warnings: ['Do NOT use railroad ties, CCA-treated lumber (pre-2004), or painted/stained wood for food gardens. These contain toxic chemicals that leach into soil.', 'Call 811 before digging if you\'re placing the bed near utility lines.', 'Raised beds dry out faster than in-ground gardens. Plan for regular watering or install a drip irrigation system.'],
    affiliateProducts: [
      { id: 'prod-cedar-boards', name: 'Western Red Cedar 2x10x8\' Board', description: 'Naturally rot-resistant, chemical-free cedar. Ideal for food-safe raised garden beds. Smooth-planed faces. Aromatic cedar scent deters some garden pests.', price: 32.98, affiliateUrl: 'https://www.homedepot.com/p/Cedar-2x10/100043926', retailer: 'homedepot', imageUrl: '/products/cedar-board.jpg', rating: 4.5, reviewCount: 3200, badge: 'Our Pick' },
      { id: 'prod-birdies-raised-bed', name: 'Birdies Raised Garden Bed Kit (4x8x15")', description: 'Modular galvanized steel raised bed. Assembles in 15 minutes with no tools. 15-inch height. Lasts 20+ years. Food-safe zinc-aluminum coating.', price: 159.00, affiliateUrl: 'https://www.amazon.com/dp/B09ZYXY1RH', retailer: 'amazon', imageUrl: '/products/birdies-raised-bed.jpg', rating: 4.7, reviewCount: 8400 },
      { id: 'prod-miracle-gro-soil', name: 'Miracle-Gro Raised Bed Soil (1.5 cu ft)', description: 'Ready-to-use soil blend optimized for raised beds. Contains compost, sphagnum peat, and coconut coir. Feeds plants for up to 3 months. No mixing needed.', price: 12.98, affiliateUrl: 'https://www.homedepot.com/p/Miracle-Gro-Raised-Bed/317521964', retailer: 'homedepot', imageUrl: '/products/miracle-gro-raised.jpg', rating: 4.4, reviewCount: 14200, badge: 'Best Value' },
    ],
    featuredImage: '/images/guides/build-raised-garden-bed.jpg',
    publishedAt: '2025-04-15T09:00:00Z',
    updatedAt: '2025-09-20T14:00:00Z',
    author: defaultAuthor,
    seo: { title: 'How to Build a Raised Garden Bed (Simple DIY Plan) | Repair & Refinish', description: 'Build a 4x8 foot raised garden bed in 2-3 hours. Complete guide with materials list, cutting plan, assembly instructions, and soil filling tips.', keywords: ['raised garden bed', 'build raised bed', 'DIY garden bed', 'raised garden bed plans', 'cedar raised bed', 'vegetable garden bed', 'raised bed construction'] },
    faqs: [
      { question: 'Is pressure-treated wood safe for vegetable gardens?', answer: 'Modern pressure-treated lumber (labeled ACQ or CA) is considered safe for vegetable gardens by the EPA. The old treatment (CCA, containing arsenic) was banned in 2004. If you want extra peace of mind, line the inside of the bed with plastic sheeting.' },
      { question: 'How deep should a raised garden bed be?', answer: '6 inches works for lettuce and herbs. 10-12 inches handles most vegetables including tomatoes, peppers, and root crops. 18-24 inches is ideal for deep root vegetables (carrots, potatoes) and for accessible gardening if bending is difficult.' },
      { question: 'How much soil do I need?', answer: 'Multiply length × width × depth in feet to get cubic feet. A 4x8 bed that\'s 10 inches deep needs about 27 cubic feet (1 cubic yard). Bagged soil from hardware stores is expensive — buy in bulk from a landscape supply company for 50-70% savings.' },
    ],
    relatedGuides: ['repair-deck-board', 'fix-leaning-fence-post', 'install-landscape-lighting'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide: Power Wash Your Home's Exterior
  // ---------------------------------------------------------------------------
  {
    id: 'guide-power-wash-home-exterior',
    slug: 'power-wash-home-exterior',
    title: "How to Power Wash Your Home's Exterior",
    excerpt:
      "Remove years of dirt, mold, and mildew from your home's siding, driveway, and deck in 2-3 hours. This beginner guide covers machine setup, detergent use, and technique for a like-new finish.",
    content: `Power washing (also called pressure washing) removes accumulated dirt, mold, mildew, and algae that make your home look old and neglected. It's one of the fastest ways to boost curb appeal and is essential preparation before painting.

## Pressure Washer Basics

Consumer electric washers produce 1,300-2,000 PSI — enough for siding, decks, and patios. Gas models produce 2,500-4,000 PSI for concrete and heavy-duty cleaning. For vinyl and wood siding, 1,500 PSI is the sweet spot: strong enough to clean effectively but gentle enough not to damage the surface.

## Renting vs. Buying

If you'll use it once a year, rent for $50-$100/day. If you have a large property or plan to clean siding, decks, patios, and fencing regularly, a quality consumer electric washer costs $150-$300 and pays for itself in 2-3 uses.`,
    category: 'outdoor-landscaping',
    difficulty: 'beginner',
    estimatedTime: '2-3 hours',
    estimatedCost: { low: 30, mid: 75, high: 150, diyVsPro: 'Professional power washing costs $200-$600 for a house. DIY detergent and rental cost $30-$100 (or buy a washer for $150-$300).' },
    tools: ['Pressure washer (electric 1,500-2,000 PSI)', 'Garden hose with adequate length', '25-degree and 40-degree spray tips', 'Extension wand (for second story)', 'Safety glasses', 'Rubber boots'],
    materials: ['Pressure washer detergent (house wash formula)', 'Outdoor bleach-based cleaner (for mold/mildew)', 'Plastic sheeting (to cover plants and outlets)'],
    steps: [
      { stepNumber: 1, title: 'Prepare the Area', description: 'Close all windows and doors. Cover electrical outlets, light fixtures, and doorbell with plastic and tape. Move outdoor furniture and grills away from the house. Cover delicate plants with plastic sheeting — pressure washer detergent can burn foliage. Sweep loose debris from the areas you\'ll wash.', imagePrompt: 'Windows closed, outlets covered with plastic, plants covered, furniture moved away from house siding, preparation for power washing' },
      { stepNumber: 2, title: 'Set Up the Pressure Washer', description: 'Connect the garden hose to the washer\'s water inlet. Connect the high-pressure hose to the spray wand. Turn on the water supply fully. Squeeze the trigger to purge air from the system (water will flow weakly until the air is out). Start the washer and let it run for 30 seconds before spraying. Attach the 40-degree (white) tip for applying detergent.', imagePrompt: 'Pressure washer being connected to garden hose, high-pressure hose to spray wand, water being turned on, machine starting up, setup process', warning: 'Never use a 0-degree (red) tip on siding. It concentrates the water stream enough to cut through vinyl, gouge wood, or strip paint. Use 25-degree for rinsing and 40-degree for detergent.' },
      { stepNumber: 3, title: 'Apply Detergent From Bottom to Top', description: 'Switch to the detergent tip or soap nozzle. Apply house-wash detergent starting at the bottom of the wall and working upward. This prevents dirty detergent from running down dry siding and leaving streaks. Work in sections of about 10x10 feet. Let the detergent dwell for 5-10 minutes (don\'t let it dry). The detergent breaks down mold, mildew, and dirt so the rinse can remove them.', imagePrompt: 'Pressure washer spraying detergent on vinyl siding from bottom to top, foamy solution coating the dirty surface, working in sections' },
      { stepNumber: 4, title: 'Rinse From Top to Bottom', description: 'Switch to the 25-degree (green) tip. Starting at the top, rinse the detergent and loosened dirt downward with overlapping passes. Keep the nozzle at least 12 inches from the surface and angle the spray slightly downward to avoid driving water behind the siding. Work in smooth, sweeping horizontal passes. The dirty water cascades down, carrying grime off the wall.', imagePrompt: 'Pressure washer rinsing siding from top to bottom, clean siding emerging, dirty water cascading down, dramatic before-and-after split', proTip: 'Spray at a downward angle (never upward) on lap siding. Spraying upward forces water behind the siding and into the wall cavity.' },
      { stepNumber: 5, title: 'Address Stubborn Mold and Stains', description: 'For areas with heavy mold, mildew, or algae (common on north-facing walls), apply a bleach-based outdoor cleaner directly and let it sit for 15 minutes. Scrub stubborn spots with a soft-bristle brush. Re-rinse with the pressure washer. For rust stains, use an oxalic acid-based cleaner. For oil stains on concrete, use a degreaser and let it soak before pressure washing.', imagePrompt: 'Bleach-based cleaner being sprayed on a moldy section of siding, soft brush scrubbing, re-rinsing with the pressure washer, stubborn stain removal' },
      { stepNumber: 6, title: 'Wash the Driveway and Walkways', description: 'For concrete, switch to the 25-degree or 15-degree (yellow) tip and work about 6 inches from the surface. Use overlapping passes in a consistent pattern to avoid striping (visible clean/dirty lines). A surface cleaner attachment ($30-$60) spins two jets under a housing for faster, more even concrete cleaning. For heavy stains, apply degreaser first and let it dwell before washing.', imagePrompt: 'Pressure washer cleaning a concrete driveway, clean section contrasting with dirty section, even overlapping passes, dramatic curb appeal improvement' },
      { stepNumber: 7, title: 'Clean Up and Maintain', description: 'Disconnect the washer, drain the hoses, and store the equipment. Remove plastic covering from plants and outlets. Check that no water was driven behind siding or into windows. Rinse any plants that were accidentally sprayed with detergent. To maintain the clean look, consider applying a mold-resistant siding wash annually.', imagePrompt: 'Freshly power-washed home exterior gleaming in sunlight, driveway and siding both clean, dramatic curb appeal transformation, finished project' },
    ],
    tips: ['Start with the lowest effective pressure and increase only if needed. You can always add more pressure, but you can\'t undo damage.', 'A surface cleaner attachment for concrete is worth the $30-$60 investment. It cleans 3x faster than a wand and eliminates striping.', 'Schedule power washing in spring — it removes winter grime and prepares surfaces for staining, painting, or sealing.', 'Never power wash your roof. High pressure damages shingles and voids the warranty. Use a low-pressure chemical wash for roofs.'],
    warnings: ['Never aim a pressure washer at a person, pet, or window. The water stream at close range can cause serious injury and break glass.', 'Do not spray upward under lap siding. Water driven behind siding causes rot and mold in the wall cavity.', 'Keep the nozzle at least 6-12 inches from vinyl siding. Too close will leave marks, crack the vinyl, or force water behind the panels.', 'Cover electrical outlets and don\'t spray directly at them. Water and electricity are a deadly combination.'],
    affiliateProducts: [
      { id: 'prod-sun-joe-2030', name: 'Sun Joe SPX3000 2,030 PSI Electric Pressure Washer', description: 'Best-selling consumer electric pressure washer. Dual detergent tanks, 5 quick-connect tips, 14.5-amp motor. Ideal for siding, decks, driveways, and vehicles.', price: 169.00, affiliateUrl: 'https://www.amazon.com/dp/B00CPGMUXW', retailer: 'amazon', imageUrl: '/products/sun-joe-spx3000.jpg', rating: 4.5, reviewCount: 48200, badge: 'Best Seller' },
      { id: 'prod-simple-green-wash', name: 'Simple Green Oxy Solve House + Siding Wash (1 gallon)', description: 'Pressure washer detergent that removes mold, mildew, algae, and dirt. Safe for vinyl, stucco, brick, and wood. One gallon makes 10 gallons of solution.', price: 14.98, affiliateUrl: 'https://www.homedepot.com/p/Simple-Green-House-Wash/312734982', retailer: 'homedepot', imageUrl: '/products/simple-green-house.jpg', rating: 4.4, reviewCount: 7800, badge: 'Best Value' },
      { id: 'prod-surface-cleaner', name: 'SIMPSON 15" Surface Cleaner for Pressure Washers', description: 'Spinning dual-jet surface cleaner for driveways and patios. Eliminates striping. Cleans 3x faster than a wand. Fits any pressure washer with a standard quick-connect tip.', price: 49.98, affiliateUrl: 'https://www.homedepot.com/p/Simpson-Surface-Cleaner/309872314', retailer: 'homedepot', imageUrl: '/products/simpson-surface-cleaner.jpg', rating: 4.5, reviewCount: 5400 },
    ],
    featuredImage: '/images/guides/power-wash-home-exterior.jpg',
    publishedAt: '2025-05-10T09:00:00Z',
    updatedAt: '2025-10-25T14:00:00Z',
    author: defaultAuthor,
    seo: { title: "How to Power Wash Your Home's Exterior | Repair & Refinish", description: 'Power wash your home in 2-3 hours. Covers pressure washer setup, detergent application, rinsing technique, and tips for siding, concrete, and decks.', keywords: ['power wash house', 'pressure wash siding', 'power wash driveway', 'pressure washing tips', 'house wash DIY', 'power washer detergent', 'clean home exterior'] },
    faqs: [
      { question: 'What PSI do I need for house siding?', answer: '1,300-1,600 PSI is ideal for vinyl and wood siding. More than 2,000 PSI can damage vinyl and gouge wood. For concrete, 2,500-3,000 PSI works better. Electric consumer models (1,500-2,000 PSI) handle most residential tasks.' },
      { question: 'Can power washing damage my siding?', answer: 'Yes, if you use too much pressure, too close a distance, or the wrong tip. Keep at least 12 inches away, use the 25° or 40° tip (never 0°), and spray at a downward angle. Test in an inconspicuous area first.' },
      { question: 'Should I power wash before painting?', answer: 'Absolutely. Power washing removes dirt, mold, and loose paint, creating a clean surface for paint adhesion. Let the siding dry for 2-3 days after washing before priming and painting.' },
    ],
    relatedGuides: ['repair-deck-board', 'fix-leaning-fence-post', 'build-raised-garden-bed'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide: Install Landscape Lighting
  // ---------------------------------------------------------------------------
  {
    id: 'guide-install-landscape-lighting',
    slug: 'install-landscape-lighting',
    title: 'How to Install Landscape Lighting',
    excerpt:
      'Add safety, security, and curb appeal with landscape lighting. This intermediate guide covers low-voltage system planning, transformer installation, and fixture placement in 3-4 hours.',
    content: `Landscape lighting transforms your yard after dark — illuminating walkways for safety, highlighting architectural features, and creating ambiance for outdoor living. Modern low-voltage LED systems are safe, energy-efficient, and fully DIY-installable.

## Low-Voltage vs. Line-Voltage

Low-voltage landscape lights (12V) are safe, legal for DIY installation everywhere, and use very little electricity. Line-voltage lights (120V) require an electrician and permits. This guide covers low-voltage systems exclusively — they produce plenty of light for any residential landscape.

## Planning Your Design

The three purposes of landscape lighting: safety (path lights along walkways, step lights on stairs), security (flood lights at entries, motion-activated fixtures), and aesthetics (uplighting trees, spotlighting features, downlighting from structures). A good design addresses all three.`,
    category: 'outdoor-landscaping',
    difficulty: 'intermediate',
    estimatedTime: '3-4 hours',
    estimatedCost: { low: 100, mid: 250, high: 500, diyVsPro: 'Professional landscape lighting installation costs $2,000-$5,000. A DIY low-voltage kit costs $100-$500 for a complete system.' },
    tools: ['Wire strippers', 'Screwdriver', 'Spade or garden trowel', 'Tape measure', 'Timer or smart plug', 'Multimeter (optional)'],
    materials: ['Low-voltage transformer (150-600W)', 'Low-voltage landscape wire (12/2 or 14/2)', 'LED landscape fixtures (path lights, spotlights, etc.)', 'Wire connectors (waterproof gel-filled)', 'Cable stakes'],
    steps: [
      { stepNumber: 1, title: 'Plan the Layout and Calculate Wattage', description: 'Walk your property at dusk and identify where you want light: walkways, entry points, trees or features to uplight, and dark areas that need security lighting. Mark each fixture position with a flag or stake. Count the fixtures and add up their wattage. Your transformer must handle the total wattage with 20% headroom (e.g., 100W of fixtures needs a 120W+ transformer).', imagePrompt: 'Yard at dusk with flags marking future fixture positions along walkway, near trees, at entry, landscape lighting design planning', proTip: 'LED fixtures use 3-8 watts each, so a 300-watt transformer can power 40-60 LED fixtures. Don\'t skimp on transformer capacity — you\'ll want to add lights later.' },
      { stepNumber: 2, title: 'Install the Transformer', description: 'Mount the transformer near an outdoor GFCI outlet, at least 12 inches above the ground. Most transformers have a built-in timer and photocell — set the timer for your desired on/off schedule or use the photocell to turn lights on at dusk and off at dawn. Connect the transformer to the GFCI outlet. Some transformers have multiple output terminals for different zones.', imagePrompt: 'Low-voltage transformer being mounted to a post near an outdoor outlet, timer being set, GFCI outlet connection, organized installation' },
      { stepNumber: 3, title: 'Run the Low-Voltage Cable', description: 'Run 12/2 gauge low-voltage wire from the transformer to the first fixture, then daisy-chain to each subsequent fixture. Bury the wire 3-6 inches deep in a shallow trench (use a spade to cut a slit in the turf — no need to dig a full trench). Secure exposed wire runs along structures with cable clips. Leave 12 inches of extra wire at each fixture location for connection.', imagePrompt: 'Low-voltage wire being laid in a shallow trench cut through grass, wire running from the transformer to fixture positions, spade cutting the turf line', proTip: 'For long runs (over 50 feet), use the hub method: run a main line from the transformer to a central point, then branch out to fixtures. This ensures even voltage to all lights.' },
      { stepNumber: 4, title: 'Position and Assemble the Fixtures', description: 'At each marked position, assemble the landscape fixture per the manufacturer\'s instructions. Path lights usually have a ground stake — push it into the soil. Spotlights mount on a stake or flat base. Position spotlights 12-18 inches from the feature you\'re lighting, aimed at a 30-60 degree upward angle. Path lights should be spaced 8-10 feet apart for even illumination along a walkway.', imagePrompt: 'LED path light being pushed into the ground along a walkway, spotlight being aimed at a tree, proper spacing and angles, fixture assembly and placement' },
      { stepNumber: 5, title: 'Connect the Fixtures to the Wire', description: 'At each fixture location, strip 1/2 inch of insulation from the main wire. Use the waterproof gel-filled wire connectors included with most landscape lighting kits — they pierce through the wire insulation and create a weatherproof connection. Attach the fixture\'s lead wires to the main cable using these connectors. Tuck the connection underground or conceal it under mulch.', imagePrompt: 'Waterproof gel-filled wire connector being clamped onto the main cable and fixture lead wire, weatherproof connection being made, underground concealment' },
      { stepNumber: 6, title: 'Connect the Cable to the Transformer', description: 'Strip the wire ends and connect them to the transformer\'s output terminals. Most transformers have screw terminals or push-in connectors. If your transformer has multiple voltage taps (12V, 13V, 14V, 15V), start with the 12V tap. If lights at the far end of the run appear dim, move the wire to a higher voltage tap to compensate for voltage drop over long runs.', imagePrompt: 'Wire ends being connected to the transformer output terminals, multiple voltage taps visible, secure screw terminal connection' },
      { stepNumber: 7, title: 'Test and Adjust', description: 'Turn on the transformer and verify every fixture lights up. Walk the entire layout at night to evaluate the effect. Adjust spotlight angles to eliminate glare (you should see the light on the feature, not the light source). Reposition path lights that create dark gaps or over-bright pools. Set the timer to your preferred schedule. Bury the wire trench and replace the turf.', imagePrompt: 'Landscape lighting illuminated at night, path lights along walkway, spotlights uplighting trees, warm glow on house facade, beautiful nighttime curb appeal', proTip: 'Less is more with landscape lighting. Subtle, warm white illumination (2700K) creates elegance. Too many lights or too-bright fixtures create a commercial parking lot effect.' },
    ],
    tips: ['Use warm white LEDs (2700K) for a welcoming, residential ambiance. Cool white (4000K+) feels commercial and harsh.', 'Uplight trees by placing a spotlight at the base aimed upward through the canopy — this creates dramatic shadow patterns.', 'Path lights are spaced 8-10 feet apart for even coverage on a standard 3-foot-wide walkway.', 'Use a smart outdoor plug on the transformer for voice control and smartphone scheduling.'],
    warnings: ['Low-voltage landscape wire does not need to be buried in conduit, but bury it at least 3-6 inches to prevent damage from lawn mowers and foot traffic.', 'Do not exceed the transformer\'s wattage rating. Overloaded transformers overheat and fail prematurely.', 'Use only waterproof wire connectors rated for direct burial. Standard wire nuts will corrode underground and lose connection.'],
    affiliateProducts: [
      { id: 'prod-hampton-bay-kit', name: 'Hampton Bay Low-Voltage LED Pathway Light Kit (6-pack)', description: 'Complete kit with 6 LED path lights, 50 feet of wire, transformer with timer, and wire connectors. Warm white 2700K. Everything needed for a walkway installation.', price: 79.98, affiliateUrl: 'https://www.homedepot.com/p/Hampton-Bay-LED-Path-Kit/313876921', retailer: 'homedepot', imageUrl: '/products/hampton-bay-path-kit.jpg', rating: 4.4, reviewCount: 6800, badge: 'Best Value' },
      { id: 'prod-volt-spotlight', name: 'VOLT 12V Brass LED Spotlight (Adjustable)', description: 'Professional-grade solid brass spotlight. 5W LED with 60° beam angle. Adjustable aim. IP68 waterproof. Lifetime warranty. The spotlight landscape professionals use.', price: 49.99, affiliateUrl: 'https://www.amazon.com/dp/B073V1LJF1', retailer: 'amazon', imageUrl: '/products/volt-spotlight.jpg', rating: 4.7, reviewCount: 3200, badge: 'Our Pick' },
      { id: 'prod-malibu-transformer', name: 'Malibu 300W Low-Voltage Landscape Transformer', description: 'Heavy-duty 300W transformer with built-in timer and photocell. Powers up to 40+ LED fixtures. Multiple output terminals for zoning. Weather-resistant metal housing.', price: 69.98, affiliateUrl: 'https://www.amazon.com/dp/B00OXJDHS8', retailer: 'amazon', imageUrl: '/products/malibu-transformer.jpg', rating: 4.3, reviewCount: 5600 },
    ],
    featuredImage: '/images/guides/install-landscape-lighting.jpg',
    publishedAt: '2025-06-05T09:00:00Z',
    updatedAt: '2025-11-10T14:00:00Z',
    author: defaultAuthor,
    seo: { title: 'How to Install Landscape Lighting (Low-Voltage DIY) | Repair & Refinish', description: 'Install low-voltage landscape lighting in 3-4 hours. Covers system planning, transformer setup, wire burial, fixture placement, and nighttime adjustment.', keywords: ['landscape lighting', 'install landscape lights', 'low voltage lighting', 'path light installation', 'outdoor lighting DIY', 'garden lights install', 'landscape lighting design'] },
    faqs: [
      { question: 'How many landscape lights do I need?', answer: 'For walkways, one path light every 8-10 feet. For accent lighting, 1-2 spotlights per tree or feature. For security, one fixture per entry point and dark corner. A typical front yard uses 10-15 fixtures. Add up the wattage and size your transformer with 20% headroom.' },
      { question: 'Is low-voltage landscape lighting safe to install myself?', answer: 'Yes. Low-voltage (12V) systems are completely safe for DIY installation. The voltage is too low to cause electrical shock. No permits or electrician required. The transformer plugs into a standard outdoor GFCI outlet.' },
      { question: 'How long do LED landscape lights last?', answer: 'Quality LED landscape fixtures last 30,000-50,000 hours — roughly 15-25 years at 6 hours per night. The transformer and wire connections are more likely to need attention before the LEDs themselves fail.' },
    ],
    relatedGuides: ['build-raised-garden-bed', 'repair-deck-board', 'power-wash-home-exterior'],
    status: 'published',
  },
];

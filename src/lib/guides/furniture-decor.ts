import type { Guide } from '@/types';
import { defaultAuthor } from '../site-config';

export const furnitureDecorGuides: Guide[] = [
  // ---------------------------------------------------------------------------
  // Guide 25: Refinish a Wood Table
  // ---------------------------------------------------------------------------
  {
    id: 'guide-refinish-wood-table',
    slug: 'refinish-wood-table',
    title: 'How to Refinish a Wood Table',
    excerpt:
      'Bring a worn, scratched, or outdated wood table back to life with sanding, staining, and sealing. This intermediate project takes a weekend and transforms tired furniture into a centerpiece.',
    content: `Refinishing a wood table is one of the most satisfying DIY projects. A table that looks ready for the curb can be transformed into a stunning piece with a few hours of work and $40-$80 in materials. Solid wood tables — whether they're family heirlooms or thrift store finds — are always worth refinishing.

## Is Your Table a Candidate?

Solid wood tables are ideal for refinishing. Veneer tables (a thin wood layer over plywood or particleboard) can be refinished carefully, but you can only sand lightly — go through the veneer and you're in trouble. Laminate tables (like IKEA furniture) cannot be refinished because the surface is plastic, not wood.

## Plan Your Workspace

Work outdoors or in a well-ventilated garage. Stain and polyurethane fumes are harmful in enclosed spaces. If working outdoors, choose a calm day — wind blows dust into wet finishes and ruins the result. Lay down a large drop cloth to protect the ground.`,
    category: 'furniture-decor',
    difficulty: 'intermediate',
    estimatedTime: '6-8 hours (spread over 2 days)',
    estimatedCost: {
      low: 30,
      mid: 55,
      high: 80,
      diyVsPro: 'Professional furniture refinishing costs $200-$600 per table. DIY materials cost $30-$80.',
    },
    tools: [
      'Random orbital sander',
      'Sanding sponges (for detail areas)',
      'Paintbrush (2-inch natural bristle for stain)',
      'Foam brush or synthetic bristle brush (for poly)',
      'Tack cloth',
      'Drop cloth',
      'Dust mask (N95)',
      'Rubber gloves',
    ],
    materials: [
      'Sandpaper (80, 120, 220 grit)',
      'Wood stain (oil-based, your choice of color)',
      'Polyurethane (oil-based or water-based)',
      'Chemical paint stripper (if table has thick existing finish)',
      'Clean cotton rags',
      'Mineral spirits (for cleanup with oil-based products)',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Disassemble (If Possible) and Clean',
        description:
          'Remove the tabletop from the base if possible (most tables connect with clips or bolts underneath). This makes sanding and finishing much easier. Clean the entire table with a mild soap and water solution to remove grease, polish, and grime. Dry thoroughly. If the table has hardware (drawer pulls, decorative elements), remove them and set them aside.',
        imagePrompt:
          'Wood table being turned upside down, clips being removed to separate top from base, then tabletop being cleaned with soapy water, preparation steps',
        proTip:
          'Label each piece if you disassemble multiple parts. Take a photo before disassembly so you remember how everything goes back together.',
      },
      {
        stepNumber: 2,
        title: 'Strip the Old Finish (If Needed)',
        description:
          'If the existing finish is thick, cracked, or has multiple layers, apply chemical paint stripper with a brush per the product directions. Wait the recommended time (usually 15-30 minutes) for the finish to bubble and soften. Scrape off the softened finish with a plastic scraper (not metal — it gouges the wood). For detailed carvings or turned legs, use steel wool and stripper. Wipe the surface with mineral spirits to neutralize the stripper.',
        imagePrompt:
          'Chemical stripper being brushed onto a table surface, old finish bubbling up, plastic scraper removing softened finish, revealing bare wood underneath',
        warning:
          'Chemical strippers are caustic. Wear rubber gloves, safety glasses, and work in a well-ventilated area. Follow the product label exactly. Keep strippers away from skin and eyes.',
      },
      {
        stepNumber: 3,
        title: 'Sand the Surface',
        description:
          'Start with 80-grit sandpaper on a random orbital sander to remove the remaining old finish and level any scratches or water rings. Sand with the grain of the wood, keeping the sander moving to avoid digs. Progress to 120-grit to smooth out the 80-grit scratches, then finish with 220-grit for a silky surface. For turned legs and edges, use sanding sponges by hand. The table should feel glass-smooth after the 220-grit pass.',
        imagePrompt:
          'Random orbital sander working across a tabletop with the grain, showing progression from 80-grit to 120-grit to 220-grit finish, progressively smoother',
        proTip:
          'Between each grit change, wipe the surface with a tack cloth to remove dust. Leftover coarse grit particles under fine sandpaper create scratches that show through the stain.',
      },
      {
        stepNumber: 4,
        title: 'Apply the Wood Conditioner (For Softwoods)',
        description:
          'If your table is pine, maple, cherry, or birch, apply a pre-stain wood conditioner before staining. These woods absorb stain unevenly, creating a blotchy appearance. The conditioner partially seals the wood and promotes even stain absorption. Apply with a brush, wait the time specified on the label (usually 5-15 minutes), then lightly wipe off excess. Stain within 2 hours of conditioning.',
        imagePrompt:
          'Pre-stain wood conditioner being brushed onto a bare pine tabletop, evening out the absorption, brush strokes with the grain',
        proTip:
          'Oak, walnut, and mahogany generally don\'t need conditioner — their grain absorbs stain evenly. Test on the underside or an inconspicuous area if unsure.',
      },
      {
        stepNumber: 5,
        title: 'Apply the Stain',
        description:
          'Stir the stain thoroughly (never shake — shaking creates bubbles). Apply a generous coat with a natural bristle brush or clean rag, working with the grain in 2-3 foot sections. Let the stain sit for 5-15 minutes (longer = darker color), then wipe off the excess with a clean cotton rag. Work quickly at board joints to prevent lap marks. Let the stain dry 24 hours before applying polyurethane.',
        imagePrompt:
          'Brush applying dark walnut stain to a sanded tabletop, rich color penetrating the wood grain, then excess being wiped with a clean rag, dramatic before-and-after',
        proTip:
          'Test the stain color on the underside of the table first. One coat of stain gives the label color; two coats makes it significantly darker. You can control the depth by adjusting how long you let the stain sit before wiping.',
      },
      {
        stepNumber: 6,
        title: 'Apply the First Coat of Polyurethane',
        description:
          'Use a high-quality synthetic bristle brush or foam brush to apply a thin, even coat of polyurethane with the grain. Work in long, smooth strokes from one edge to the other without stopping mid-surface. Apply thin coats — thick poly runs, sags, and takes forever to dry. The first coat will feel rough due to raised wood grain. Let it dry per the label (2 hours for water-based, 8 hours for oil-based).',
        imagePrompt:
          'Foam brush applying polyurethane to a stained tabletop in long even strokes, thin coat, golden protective finish, smooth application technique',
        warning:
          'Work in a dust-free environment. Airborne dust that lands in wet poly is trapped forever. Close garage doors and windows while applying, then ventilate during drying.',
      },
      {
        stepNumber: 7,
        title: 'Sand Between Coats',
        description:
          'After the first coat is fully dry, lightly sand the entire surface with 220-grit sandpaper by hand. This knocks down the raised grain and provides tooth for the next coat to bond to. Sand lightly — you\'re just scuffing the surface, not cutting through to the stain. Wipe off all sanding dust with a tack cloth. The surface should feel smooth and slightly chalky.',
        imagePrompt:
          'Hand sanding a polyurethane-coated tabletop lightly with 220-grit paper, chalky scuff marks visible, then wiping clean with a tack cloth',
      },
      {
        stepNumber: 8,
        title: 'Apply Two More Coats and Final Finish',
        description:
          'Apply the second coat of polyurethane, let it dry, sand lightly with 220-grit, and tack cloth again. Apply the third and final coat with special care — use long, uninterrupted strokes and work from one end to the other. Three coats of poly provides a durable finish suitable for a dining table. Let the final coat cure for 48-72 hours before placing anything on the surface. For a satin sheen on a gloss poly, rub the cured finish with 0000 steel wool.',
        imagePrompt:
          'Third coat of polyurethane being applied to a table, smooth glossy surface, then the finished refinished table in a dining room, stunning before-and-after transformation',
        proTip:
          'For the smoothest possible finish, use a thinned first coat (10% mineral spirits mixed into oil-based poly) to seal the grain, then two full-strength coats on top. This gives a glass-like result.',
      },
    ],
    tips: [
      'Always sand with the grain. Cross-grain scratches are impossible to hide under stain — they catch stain in the scratches and create dark marks.',
      'Oil-based polyurethane adds a warm amber tone. Water-based polyurethane dries crystal clear and won\'t yellow over time. Choose based on the look you want.',
      'For a "natural" or "unstained" look, skip the stain and apply a clear coat of polyurethane directly over the sanded wood. The poly alone will slightly warm the wood tone.',
      'If you get runs or drips in the poly, wait until fully dry, then sand them flat with 220-grit and apply another coat.',
      'Three coats of polyurethane is the minimum for a dining table. High-use surfaces like coffee tables and desks should get 4 coats.',
    ],
    warnings: [
      'Work in a well-ventilated area. Oil-based stain and polyurethane fumes are flammable and cause headaches, dizziness, and respiratory irritation. Wear a respirator for extended work.',
      'Never leave oil-soaked rags in a pile. Linseed oil (in many stains) undergoes an exothermic reaction as it dries and can spontaneously combust. Spread rags flat outdoors to dry, then dispose of them in a sealed metal can.',
      'If refinishing a veneer table, sand very lightly (150-grit only) to avoid cutting through the thin veneer layer. Test in an inconspicuous spot first.',
    ],
    affiliateProducts: [
      {
        id: 'prod-minwax-stain-table',
        name: 'Minwax Wood Finish Oil-Based Stain (1 quart, Provincial 211)',
        description:
          'Classic penetrating oil stain available in 28 colors. Provides a beautiful, rich color in one coat. One quart covers about 75 sq ft (2 average tables). Provincial is the most popular table color.',
        price: 10.98,
        affiliateUrl: 'https://www.homedepot.com/p/Minwax-Wood-Finish/100376098',
        retailer: 'homedepot',
        imageUrl: '/products/minwax-stain-provincial.jpg',
        rating: 4.5,
        reviewCount: 14700,
        badge: 'our-pick',
      },
      {
        id: 'prod-varathane-poly',
        name: 'Varathane Water-Based Polyurethane (1 quart, Semi-Gloss)',
        description:
          'Crystal-clear water-based polyurethane that won\'t yellow. Fast dry (2 hours between coats). Low odor for indoor use. Self-leveling formula minimizes brush marks.',
        price: 14.98,
        affiliateUrl: 'https://www.homedepot.com/p/Varathane-Water-Poly/303632476',
        retailer: 'homedepot',
        imageUrl: '/products/varathane-wb-poly.jpg',
        rating: 4.5,
        reviewCount: 7800,
        badge: 'best-value',
      },
      {
        id: 'prod-dewalt-orbital-sander',
        name: 'DEWALT DWE6423 5" Random Orbital Sander',
        description:
          'Variable speed (8,000-12,000 OPM) orbital sander with dust collection bag. Low-vibration design for comfortable extended sanding. Accepts standard hook-and-loop pads.',
        price: 59.00,
        affiliateUrl: 'https://www.amazon.com/dp/B007VGJOAQ',
        retailer: 'amazon',
        imageUrl: '/products/dewalt-orbital-sander.jpg',
        rating: 4.7,
        reviewCount: 24300,
      },
      {
        id: 'prod-minwax-conditioner',
        name: 'Minwax Pre-Stain Wood Conditioner (1 quart)',
        description:
          'Apply before staining to prevent blotchiness on softwoods like pine, maple, and birch. Promotes even stain absorption for a uniform color. Essential for soft wood furniture.',
        price: 9.98,
        affiliateUrl: 'https://www.lowes.com/pd/Minwax-Pre-Stain/999914309',
        retailer: 'lowes',
        imageUrl: '/products/minwax-conditioner.jpg',
        rating: 4.3,
        reviewCount: 4200,
      },
    ],
    featuredImage: '/guides/refinish-wood-table-hero.jpg',
    publishedAt: '2026-03-16T09:00:00Z',
    updatedAt: '2026-03-21T12:00:00Z',
    author: defaultAuthor,
    seo: {
      title: 'How to Refinish a Wood Table (Complete DIY Guide) | Repair & Refinish',
      description:
        'Refinish a wood table yourself and save $200-$500. Complete guide covering stripping, sanding, staining, and polyurethane finishing for a professional result.',
      keywords: [
        'refinish wood table',
        'refinish table top',
        'sand and stain table',
        'how to refinish furniture',
        'wood table restoration',
        'stain wood table',
        'polyurethane table top',
        'DIY furniture refinishing',
      ],
      ogImage: '/guides/refinish-wood-table-og.jpg',
    },
    faqs: [
      {
        question: 'Can I stain a table darker without stripping the old finish?',
        answer:
          'Generally no. Stain needs to penetrate bare wood to work. However, you can apply a gel stain (like General Finishes Gel Stain) over an existing finish if you scuff-sand it with 220-grit first. Gel stains sit on the surface rather than penetrating, so they work as a coloring topcoat.',
      },
      {
        question: 'How many coats of polyurethane does a table need?',
        answer:
          'Three coats minimum for a dining table. Each coat adds about 1 mil of protective film. A coffee table or desk that gets heavy daily use should get 4 coats. Sand lightly between each coat with 220-grit for proper adhesion.',
      },
      {
        question: 'Should I use oil-based or water-based polyurethane on a table?',
        answer:
          'Oil-based poly is slightly more durable, adds a warm amber tone, and levels better for a smooth finish. Water-based poly dries crystal clear, doesn\'t yellow over time, dries faster, and has lower odor. For most DIY table projects, water-based is easier to work with and gives excellent results.',
      },
      {
        question: 'How long should I wait before using a refinished table?',
        answer:
          'Wait 24 hours for light use (place mats, no hot dishes). Wait 72 hours for normal use. Wait a full week before placing heavy objects, hot dishes directly on the surface, or using harsh cleaners. Polyurethane continues to harden for 30 days — use coasters and trivets during this cure period.',
      },
    ],
    relatedGuides: ['refinish-hardwood-floors', 'repair-deck-board', 'paint-room-like-pro'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide: Build Floating Shelves
  // ---------------------------------------------------------------------------
  {
    id: 'guide-build-floating-shelves',
    slug: 'build-floating-shelves',
    title: 'How to Build Floating Shelves',
    excerpt:
      'Floating shelves add storage and style without visible brackets. Build sturdy, custom-length shelves in 2-3 hours using a hidden French cleat or blind support system.',
    content: `Floating shelves look clean and modern because the mounting hardware is hidden inside the shelf. They appear to "float" against the wall with no visible support. The key to strong floating shelves is securely anchoring to wall studs — shelves mounted only to drywall will sag and eventually fall.

## Two Construction Methods

The most common DIY approaches are: (1) a French cleat system where a beveled wooden strip on the wall fits into a mating strip on the shelf back, and (2) blind support brackets (metal rods that insert into the shelf). Both create a clean, hardware-free look. This guide covers both methods.

## Strength Considerations

Floating shelves are best for displaying books, plants, frames, and decor. For heavy loads (like rows of hardcover books), the shelf must be at least 2 inches thick and anchored into studs. Hollow shelves supported only by drywall anchors can hold about 15-20 pounds maximum.`,
    category: 'furniture-decor',
    difficulty: 'intermediate',
    estimatedTime: '2-3 hours',
    estimatedCost: { low: 25, mid: 60, high: 100, diyVsPro: 'Pre-made floating shelves cost $30-$80 each. Building custom shelves costs $25-$100 in materials for 2-3 shelves and gives you exact sizing.' },
    tools: ['Drill/driver with bits', 'Stud finder', 'Level (4-foot)', 'Table saw or circular saw', 'Tape measure', 'Pencil', 'Clamps', 'Sandpaper (120 and 220 grit)'],
    materials: ['1x10 or 1x12 pine/poplar boards (or plywood)', 'Wood glue', 'French cleat strip or blind shelf supports', '3-inch wood screws (for stud mounting)', 'Wood filler', 'Paint or stain and polyurethane'],
    steps: [
      { stepNumber: 1, title: 'Determine Size and Location', description: 'Decide on shelf length, depth, and height on the wall. Common dimensions: 24-48 inches long, 8-12 inches deep. Mark the shelf position on the wall with a level line using a pencil. Use a stud finder to locate and mark the studs within the shelf span. You need at least two studs for a secure mount. Mark the stud locations on your level line.', imagePrompt: 'Level being held against a wall, pencil drawing a horizontal line, stud finder locating studs, marks on the wall for shelf position and stud locations', proTip: 'For multiple shelves, space them 10-14 inches apart vertically. This gives enough room for books and decor while maintaining visual proportion.' },
      { stepNumber: 2, title: 'Build the Shelf (Hollow Box Method)', description: 'Cut two pieces of 1x10 or 1x12 to your desired shelf length for the top and bottom. Cut a 1x2 strip for the front edge and back cleat. Glue and nail the front edge strip to the front of the bottom board. The back of the shelf is open (this is where it slides over the wall cleat). Glue and nail the top board to the front strip, creating a hollow box. Sand all surfaces smooth.', imagePrompt: 'Two boards being assembled into a hollow box shelf with a front edge strip, wood glue and clamps holding the assembly, hollow interior visible from the back' },
      { stepNumber: 3, title: 'Install the Wall Cleat', description: 'For a French cleat system: rip a 1x3 board at a 45-degree angle to create two interlocking beveled strips. Screw one strip to the wall with the bevel pointing up and away from the wall, driving 3-inch screws into each marked stud. Use a level to ensure it\'s perfectly horizontal. For blind supports: drill holes in the studs and epoxy in the metal support rods per the bracket instructions.', imagePrompt: 'French cleat strip being screwed to wall studs with a level confirming horizontal, beveled edge pointing up, or blind support rods being inserted into stud holes' },
      { stepNumber: 4, title: 'Attach the Mating Cleat to the Shelf', description: 'Screw the second French cleat strip (bevel pointing down and toward the wall) to the inside back of the shelf. Position it so when the shelf slides onto the wall cleat, the shelf sits at the correct height and the joint is hidden. Test-fit the shelf on the wall cleat — the two beveled edges should interlock snugly with the shelf sitting level.', imagePrompt: 'Second cleat strip being screwed inside the back of the hollow shelf, then shelf being test-fitted onto the wall cleat, interlocking beveled edges, level check' },
      { stepNumber: 5, title: 'Fill, Sand, and Finish', description: 'Fill any nail holes, gaps, and imperfections with wood filler. Sand smooth with 120-grit, then 220-grit. Apply your chosen finish: paint (prime first for the smoothest result), stain and polyurethane, or leave natural with a clear coat. Apply finish to all visible surfaces — top, bottom, front edge, and ends. Let dry completely before mounting.', imagePrompt: 'Floating shelf being sanded smooth, then painted white with a brush, clean professional finish, drying on sawhorses before installation' },
      { stepNumber: 6, title: 'Mount the Shelf', description: 'Slide the shelf onto the wall cleat (or over the blind support rods). The shelf should seat firmly and sit perfectly level. If using the French cleat system, the shelf\'s weight locks it onto the cleat — no additional fasteners needed. For extra security, you can drive a small screw up through the bottom of the shelf into the wall cleat from underneath (hidden from view). Step back and check level one final time.', imagePrompt: 'Floating shelf sliding onto the wall-mounted French cleat, shelf seating firmly, stepping back to verify level, clean floating appearance with no visible hardware' },
      { stepNumber: 7, title: 'Style and Load the Shelves', description: 'Arrange your display items on the shelves. A good rule: mix books, plants, frames, and small objects in groups of 3. Leave some empty space — overcrowded shelves look cluttered, not curated. Distribute weight evenly across the shelf span. For heavy items like books, place them closer to the wall (where the support is strongest) rather than at the outer edge.', imagePrompt: 'Styled floating shelves with books, a small plant, framed photo, and decorative objects, balanced arrangement with some empty space, modern room setting', proTip: 'Place heavier items toward the wall mount and lighter items at the outer edge. This prevents the shelf from tilting forward over time.' },
    ],
    tips: ['Always mount into wall studs, not just drywall. A shelf that\'s not anchored to studs will eventually pull out of the wall under load.', 'For a cleaner look, use edge-banded plywood instead of solid wood — it\'s flatter, cheaper, and paints beautifully.', 'Paint the shelf the same color as the wall for a seamless look, or use natural wood for a contrast element.', 'Build shelves 1/16 inch shorter than the wall space to allow for easy installation and removal.'],
    warnings: ['Do not load floating shelves beyond their capacity. Standard hollow shelves on two studs hold 20-35 pounds. Solid wood shelves on three studs hold 40-60 pounds.', 'Ensure the wall cleat is perfectly level. Even a slight tilt becomes very visible once the shelf is loaded.', 'In plaster walls, use toggle bolts in addition to stud screws. Plaster is brittle and can crack if only stud-screwed.'],
    affiliateProducts: [
      { id: 'prod-blind-shelf-supports', name: 'STEALTHMOUNTS Floating Shelf Bracket Kit (2-pack)', description: 'Heavy-duty blind shelf support brackets. Steel rods insert into the shelf and mount to studs. Holds up to 50 lbs per pair. Completely hidden. Works with shelves 1.5"+ thick.', price: 16.99, affiliateUrl: 'https://www.amazon.com/dp/B07KQZLJP5', retailer: 'amazon', imageUrl: '/products/stealthmounts-bracket.jpg', rating: 4.6, reviewCount: 8900, badge: 'Our Pick' },
      { id: 'prod-pine-board', name: 'Common Board Pine 1x10x6\' (Whitewood)', description: 'Smooth, kiln-dried pine board for shelf construction. Easy to cut, sand, and paint. Two 6-foot boards make two 36-inch shelves. Affordable and readily available.', price: 8.98, affiliateUrl: 'https://www.homedepot.com/p/Pine-1x10/100026605', retailer: 'homedepot', imageUrl: '/products/pine-board.jpg', rating: 4.3, reviewCount: 4200, badge: 'Best Value' },
      { id: 'prod-zircon-studfinder', name: 'Zircon StudSensor e50 Electronic Stud Finder', description: 'Detects wood and metal studs, and live AC wiring. WireWarning detection for safety. Center-finding technology. Essential for any wall-mounting project.', price: 24.98, affiliateUrl: 'https://www.amazon.com/dp/B002R5AVHQ', retailer: 'amazon', imageUrl: '/products/zircon-e50.jpg', rating: 4.4, reviewCount: 32400 },
    ],
    featuredImage: '/images/guides/build-floating-shelves.jpg',
    publishedAt: '2025-07-10T09:00:00Z',
    updatedAt: '2025-12-05T14:00:00Z',
    author: defaultAuthor,
    seo: { title: 'How to Build Floating Shelves (Hidden Bracket Guide) | Repair & Refinish', description: 'Build custom floating shelves in 2-3 hours with hidden supports. Covers French cleat and blind bracket methods for a clean, modern wall display.', keywords: ['floating shelves', 'build floating shelves', 'DIY floating shelves', 'hidden shelf brackets', 'French cleat shelf', 'wall shelf installation', 'custom floating shelf'] },
    faqs: [
      { question: 'How much weight can floating shelves hold?', answer: 'Depends on the mounting method and shelf construction. Hollow shelves on two studs: 20-35 lbs. Solid wood shelves on three studs with blind brackets: 40-60 lbs. For heavy loads, use the blind bracket method with rods epoxied into studs.' },
      { question: 'Can I install floating shelves without studs?', answer: 'For light loads only (under 15 lbs). Use heavy-duty drywall anchors like toggle bolts. For anything heavier — especially books — you must hit at least two studs. A shelf full of books can weigh 40+ pounds.' },
      { question: 'What wood is best for floating shelves?', answer: 'Poplar and pine are affordable and paint beautifully. Walnut and oak are gorgeous with a natural stain finish. Edge-banded plywood is the flattest, most stable, and most affordable option for painted shelves. Avoid MDF — it sags under load over time.' },
    ],
    relatedGuides: ['refinish-wood-table', 'paint-room-like-pro', 'create-accent-wall'],
    status: 'published',
  },

  // ---------------------------------------------------------------------------
  // Guide: Reupholster a Dining Chair
  // ---------------------------------------------------------------------------
  {
    id: 'guide-reupholster-dining-chair',
    slug: 'reupholster-dining-chair',
    title: 'How to Reupholster a Dining Chair',
    excerpt:
      'Give tired dining chairs a fresh look with new fabric in 2-3 hours per chair. This intermediate guide covers removing the old fabric, adding padding, and stapling new upholstery for a professional result.',
    content: `Reupholstering dining chair seats is one of the most gratifying furniture projects — old, stained fabric becomes fresh and stylish, and the chairs look brand new for $10-$20 per seat in fabric. Most dining chairs have a removable seat cushion screwed to the frame from below, making this project straightforward.

## Choosing Fabric

For dining chairs, choose a durable upholstery-weight fabric. Cotton canvas, linen blends, and performance fabrics (like Crypton or Sunbrella) handle food spills and frequent use. Avoid delicate fabrics like silk or thin cotton — they stain and wear quickly. You need about 3/4 yard per chair seat.

## Tools You Need

A staple gun is the only specialized tool. An electric or pneumatic staple gun makes the job faster and easier on your hands than a manual one. If you're doing 4+ chairs, invest in the electric version.`,
    category: 'furniture-decor',
    difficulty: 'intermediate',
    estimatedTime: '2-3 hours per chair',
    estimatedCost: { low: 10, mid: 25, high: 50, diyVsPro: 'Professional reupholstery costs $100-$250 per chair. DIY fabric and supplies cost $10-$50 per chair.' },
    tools: ['Electric or manual staple gun', 'Staple remover or flathead screwdriver', 'Scissors', 'Screwdriver', 'Needle-nose pliers'],
    materials: ['Upholstery fabric (3/4 yard per chair)', 'High-density foam padding (1/2" or 1" thick)', 'Batting (polyester quilt batting)', 'Staples (3/8" for staple gun)', 'Spray adhesive (optional, for foam)'],
    steps: [
      { stepNumber: 1, title: 'Remove the Seat From the Chair Frame', description: 'Turn the chair upside down. Most dining chair seats are attached with 4 screws going up through the frame into the seat board. Remove these screws and lift the seat cushion out. If the seat is glued or nailed to the frame (some older chairs), pry it gently with a flathead screwdriver. Set the frame aside.', imagePrompt: 'Dining chair turned upside down, screwdriver removing screws from the seat frame, seat cushion being lifted out, frame set aside' },
      { stepNumber: 2, title: 'Remove the Old Fabric and Staples', description: 'Flip the seat cushion over. Use a staple remover or flathead screwdriver to pry out every staple holding the old fabric. Pull the fabric off. If there\'s batting or foam underneath, inspect it — if the foam is compressed, stained, or crumbling, replace it. If it\'s still springy and clean, you can reuse it. Remove all old staples completely — leftover staples create bumps under the new fabric.', imagePrompt: 'Staple remover prying staples from the bottom of a seat cushion, old fabric being peeled off, inspection of the foam underneath, thorough removal', proTip: 'Use needle-nose pliers for stubborn staples that break when prying. Every staple must come out for a smooth new surface.' },
      { stepNumber: 3, title: 'Replace or Add Padding', description: 'If the old foam is flat or crumbling, cut a new piece of 1/2" or 1" high-density foam to match the seat board shape. Spray the board with adhesive and press the foam on (or just lay it without adhesive — the fabric will hold it). Lay a sheet of polyester batting over the foam, wrapping it around the edges to the underside. The batting softens the foam edge and creates a rounded, professional cushion profile.', imagePrompt: 'New foam being cut to shape and laid on the seat board, batting being wrapped over the foam and around the edges, smooth rounded cushion profile forming' },
      { stepNumber: 4, title: 'Cut and Position the New Fabric', description: 'Cut your upholstery fabric to the size of the seat plus 4 inches on all sides (for wrapping underneath). Center the fabric pattern on the seat — if it has a directional pattern, align it so it faces forward when the chair is in its normal position. Flip the seat over so the fabric is face-down on your work surface with the cushion upside down on top.', imagePrompt: 'Upholstery fabric cut with extra margin, centered on the seat with pattern aligned, seat flipped upside down on the fabric, positioning for stapling' },
      { stepNumber: 5, title: 'Staple the Fabric — Opposite Sides First', description: 'Pull the fabric taut over the back edge and drive 3 staples into the center of the seat board. Move to the opposite (front) edge, pull the fabric tight, and staple the center. Repeat for the left and right sides. Now you have 4 anchor points creating even tension. Fill in between the anchors with staples every 1-2 inches, always pulling the fabric taut and smooth. Check the face side periodically for wrinkles.', imagePrompt: 'Staple gun driving staples through fabric into the seat board, starting with opposite sides for even tension, fabric being pulled taut, checking for wrinkles on the face', proTip: 'The key to professional-looking upholstery: always work opposite sides. Back then front, left then right. This distributes tension evenly and prevents puckering.' },
      { stepNumber: 6, title: 'Handle the Corners', description: 'Corners are the trickiest part. Pull the corner fabric straight down and staple it. Then fold the excess fabric on each side into a neat pleat (like wrapping a gift), pulling tight and stapling each fold flat. The corner should look like a crisp hospital corner on a bed — smooth on the face with a neat fold underneath. Trim excess fabric to reduce bulk.', imagePrompt: 'Corner fabric being folded into a neat pleat, each fold being stapled flat, smooth face side with no puckers, gift-wrapping technique at the corners' },
      { stepNumber: 7, title: 'Trim Excess and Reattach to Chair', description: 'Trim any excess fabric to about 1/2 inch beyond the staples so it doesn\'t hang below the frame. Flip the seat right-side up and inspect the face — the fabric should be smooth, taut, and evenly stretched with no visible wrinkles or staple bumps. Place the seat back on the chair frame and drive the screws back in. Sit in the chair to test comfort and verify the seat sits flat.', imagePrompt: 'Excess fabric being trimmed, finished seat being placed back on the chair frame, screws driven in, person sitting to test, beautiful reupholstered dining chair', proTip: 'If you have 4-6 chairs, do them assembly-line style: remove all seats, strip all fabric, add all padding, then upholster all seats. This is much faster than doing one chair at a time.' },
    ],
    tips: ['Performance fabrics like Crypton and Sunbrella are stain-resistant and perfect for dining chairs used by kids. They cost more but clean easily and last years longer.', 'Buy 10% more fabric than you calculate. Pattern matching and mistakes eat up material quickly.', 'For curved or shaped seats, make small relief cuts in the fabric at the curve before stapling. This allows the fabric to wrap smoothly around the contour.', 'An electric staple gun ($30-$50) is worth buying if you\'re doing 4+ chairs. A manual gun will exhaust your hand after two chairs.'],
    warnings: ['Wear safety glasses when using a staple gun. Staples can ricochet off hard seat boards.', 'Don\'t pull fabric so tight that it distorts the pattern or creates ripples in one direction. Even tension on all sides is the goal.', 'Ensure the foam is food-safe (CertiPUR-US certified) if children will be sitting on the chairs.'],
    affiliateProducts: [
      { id: 'prod-arrow-staple-gun', name: 'Arrow T50 Heavy-Duty Staple Gun', description: 'The industry-standard manual staple gun for upholstery. Chrome steel construction. Adjustable power. Uses T50 staples in multiple lengths. Trusted by professionals for decades.', price: 24.98, affiliateUrl: 'https://www.amazon.com/dp/B00004YNIW', retailer: 'amazon', imageUrl: '/products/arrow-t50.jpg', rating: 4.6, reviewCount: 42300, badge: 'Best Seller' },
      { id: 'prod-foamtouch-padding', name: 'FoamTouch High-Density Upholstery Foam (1" x 24" x 72")', description: 'Firm high-density foam for seat cushions. CertiPUR-US certified. One sheet covers 4-6 dining chair seats. Cut to size with scissors or an electric knife.', price: 24.99, affiliateUrl: 'https://www.amazon.com/dp/B00NOYCR6U', retailer: 'amazon', imageUrl: '/products/foamtouch-hd.jpg', rating: 4.5, reviewCount: 18400, badge: 'Best Value' },
      { id: 'prod-fairfield-batting', name: 'Fairfield Poly-Fil Extra-Loft Batting (45" x 60")', description: 'Polyester quilt batting for wrapping over foam. Creates a smooth, rounded cushion profile. One piece covers 6-8 dining chair seats. Easy to cut with scissors.', price: 9.99, affiliateUrl: 'https://www.amazon.com/dp/B000YZVXB0', retailer: 'amazon', imageUrl: '/products/fairfield-batting.jpg', rating: 4.4, reviewCount: 7800 },
    ],
    featuredImage: '/images/guides/reupholster-dining-chair.jpg',
    publishedAt: '2025-05-30T09:00:00Z',
    updatedAt: '2025-10-20T14:00:00Z',
    author: defaultAuthor,
    seo: { title: 'How to Reupholster a Dining Chair (Step-by-Step) | Repair & Refinish', description: 'Reupholster dining chair seats in 2-3 hours per chair. Covers fabric selection, padding replacement, stapling technique, and corner folding for a professional finish.', keywords: ['reupholster dining chair', 'recover chair seat', 'dining chair fabric', 'chair reupholstery DIY', 'upholster chair seat', 'staple gun upholstery', 'dining chair makeover'] },
    faqs: [
      { question: 'How much fabric do I need per chair?', answer: 'About 3/4 yard (27 inches) per standard dining chair seat, assuming the fabric is 54 inches wide. If matching a pattern, buy 1 yard per chair. For a set of 6 chairs, 5 yards covers all seats with room to spare.' },
      { question: 'What type of fabric is best for dining chairs?', answer: 'Upholstery-weight fabrics rated for 15,000+ double rubs (a durability measure). Cotton canvas, linen-cotton blends, and performance fabrics (Crypton, Sunbrella) are excellent choices. Avoid thin quilting cotton — it stains and wears through quickly on a frequently used chair.' },
      { question: 'Can I reupholster chairs with non-removable seats?', answer: 'Yes, but it\'s harder. You\'ll need to staple the new fabric while the seat is still attached to the frame, working from underneath. Turn the chair upside down and staple the fabric to the underside of the seat board. It\'s doable but less convenient than working with a removed seat.' },
    ],
    relatedGuides: ['refinish-wood-table', 'build-floating-shelves', 'paint-kitchen-cabinets'],
    status: 'published',
  },
];

# IMAGE-GENERATION.md — Repair & Refinish

Complete image generation brief for **repairandrefinish.com**. This document covers every image needed for the site, with production-ready AI generation prompts optimized for Midjourney, DALL-E 3, Stable Diffusion XL, or Flux.

**Total images needed: 61**

| Category | Count |
|---|---|
| Hero banner | 1 |
| Category hero images | 10 |
| Guide featured images | 3 |
| Guide step images | 24 |
| Product placeholder images | 4 |
| UI / decorative images | 6 |
| Social media templates | 3 |
| Author avatar | 1 |
| Logo / favicon assets | 3 |
| OG default image | 1 |
| **Total** | **56 + 5 brand assets = 61** |

---

## 1. Brand Visual Guidelines

### Photography Style
Clean, well-lit, professional tutorial photography. Think **"This Old House" meets modern YouTube content creation** — real environments, real tools, competent people, zero stock-photo artificiality. Images should feel like they came from a well-funded home repair channel, not a corporate image library.

### Color Palette
Incorporate these brand colors where natural (tool handles, clothing accents, painted surfaces, backgrounds):

| Token | Hex | Usage |
|---|---|---|
| Deep Blue (primary) | `#1E3A5F` | Backgrounds, overlays, clothing accents |
| Orange (accent) | `#E8712B` | CTAs, highlights, tool accents |
| Primary Light | `#2A5080` | Subtle tints |
| Success Green | `#059669` | "Before/After" success states |
| Warm Neutrals | `#F5F5F4`, `#E7E5E4` | Walls, countertops, natural wood tones |

### Lighting
- **Tutorial/step photos**: Bright, even, natural-looking workshop or home lighting. Simulate daylight from a nearby window plus fill light. No harsh shadows on the work area.
- **Hero/feature photos**: Warm golden-hour or soft directional light for atmosphere.
- **Product photos**: Clean, diffused studio lighting on neutral backgrounds.

### Perspective & Composition
- **Step images**: Over-the-shoulder POV or close-up hands-at-work shots. The viewer should feel like they are standing next to the person doing the work.
- **Hero/feature images**: Wide or medium shots with shallow depth of field. Subject in the left third, negative space for text overlay on the right.
- **Category images**: Medium-wide establishing shots of the work environment (kitchen, bathroom, workshop, etc.).

### People
- Diverse homeowners: men and women, ages 25-60, various ethnicities.
- Dressed casually but appropriately — t-shirts, jeans, work gloves. No suits, no model-perfect styling.
- Expression: focused, competent, occasionally satisfied (completion shots). Never confused or frustrated.
- Wearing appropriate safety gear when relevant (safety glasses, dust masks, gloves).

### Tools & Materials
- Clean, well-maintained, recognizable tools. Prefer real brand aesthetics (yellow DeWalt, blue Channellock, red Milwaukee) without showing logos.
- Materials should look fresh and new — clean sandpaper, unopened caulk tubes, new flappers.
- Workspaces should be organized but not sterile — a real person's workspace.

### Environments
- Real homes, not showrooms. Slight imperfections are good (a scuff on the wall, normal wear on fixtures).
- Relatable middle-class American homes: standard builder-grade cabinets, common tile patterns, typical bathroom layouts.
- Clean enough to photograph well, but lived-in enough to feel authentic.

### Universal Prompt Suffix
Append to all prompts:
```
Professional tutorial photography, bright natural lighting, sharp focus on the work area, 
clean composition, photorealistic, high resolution, no text or watermarks, no logos
```

---

## 2. Hero Images (Homepage)

### 2.1 Main Hero Banner
**File:** `public/images/hero/homepage-hero.jpg`
**Size:** 1920×800px (landscape, designed for text overlay on right side)

**Prompt:**
```
A confident homeowner in their mid-30s wearing a navy blue t-shirt and work gloves, 
kneeling beside a partially refinished hardwood floor in a bright sunlit living room. 
They are holding a sanding block in one hand and looking at their progress with 
satisfaction. In the background, the left half of the floor is worn and scratched, 
the right half gleams with a fresh golden polyurethane finish — a dramatic before-and-after 
split. Tools are neatly arranged nearby: a sander, paint tray, and stain cans. 
Warm afternoon light streams through a large window. Shot from a low angle, wide 
composition with empty space on the right for text overlay. Cinematic depth of field. 
Professional tutorial photography, bright natural lighting, sharp focus, photorealistic, 
high resolution, no text or watermarks, no logos
```

**Alt text:** "Homeowner refinishing a hardwood floor showing dramatic before and after results"

---

## 3. Category Hero Images

One hero image per category. Consistent style: medium-wide environmental shots, warm lighting, someone actively working or the result of work. All images should feel like they belong to the same photo series.

**Size:** 800×600px
**Directory:** `public/images/categories/`

### 3.1 Plumbing
**File:** `plumbing-hero.jpg`

**Prompt:**
```
Under-sink view of a person replacing a chrome P-trap in a kitchen, hands gripping 
adjustable pliers on a white PVC fitting. A bucket sits below to catch water. Clean 
white cabinet interior visible, bright work light illuminating the space. Over-the-shoulder 
perspective looking up at the plumbing connections. Blue category accent (#3B82F6) 
visible in the person's shirt. Professional tutorial photography, bright natural lighting, 
sharp focus on the work area, photorealistic, high resolution, no text or watermarks
```

**Alt text:** "Hands replacing kitchen plumbing connections under a sink"

### 3.2 Electrical
**File:** `electrical-hero.jpg`

**Prompt:**
```
Close-up of hands using a voltage tester on an open electrical outlet box, wall plate 
removed, colorful wires (black, white, green) visible inside the junction box. The 
voltage tester shows a green safe light. Person wearing safety glasses and rubber-soled 
shoes visible in the background. A new white outlet and wall plate sit on a nearby 
surface ready for installation. Residential hallway setting with warm lighting. 
Professional tutorial photography, bright natural lighting, sharp focus, photorealistic, 
high resolution, no text or watermarks
```

**Alt text:** "Testing an electrical outlet with a voltage tester before replacing it"

### 3.3 Painting & Walls
**File:** `painting-walls-hero.jpg`

**Prompt:**
```
A person using a 9-inch roller to paint a living room wall a soft sage green color, 
creating a clean line against white ceiling trim. Blue painter's tape protects the trim 
and window frame. A paint tray with roller sits on a drop cloth-covered floor. The 
wall is half-painted showing the transformation from the old beige to the fresh green. 
Bright natural window light illuminates the room. Shot from a slight low angle showing 
the full wall height. Professional tutorial photography, bright natural lighting, sharp 
focus, photorealistic, high resolution, no text or watermarks
```

**Alt text:** "Painting a living room wall with a roller, showing fresh color transformation"

### 3.4 Flooring
**File:** `flooring-hero.jpg`

**Prompt:**
```
Person kneeling on a partially installed luxury vinyl plank floor, clicking a new plank 
into place at an angle. The floor transitions from exposed plywood subfloor to beautifully 
installed warm oak-tone planks. Spacers visible along the wall edge. A rubber mallet, 
pull bar, and box of planks sit nearby. Sunlit room with large windows. Shot from a 
low angle at floor level showing the satisfying click-lock joint detail. Professional 
tutorial photography, bright natural lighting, sharp focus, photorealistic, high resolution, 
no text or watermarks
```

**Alt text:** "Installing click-lock vinyl plank flooring in a sunlit room"

### 3.5 Kitchen & Bath
**File:** `kitchen-bath-hero.jpg`

**Prompt:**
```
A person installing a white subway tile backsplash in a kitchen, pressing a tile into 
wet thinset mortar with tile spacers visible between rows. Modern kitchen counter with 
granite countertop, stainless steel appliances blurred in background. Tile cutter and 
bucket of mortar on the counter. Warm kitchen lighting, clean organized workspace. 
Medium shot showing the person's hands and upper body at work. Professional tutorial 
photography, bright natural lighting, sharp focus, photorealistic, high resolution, 
no text or watermarks
```

**Alt text:** "Installing subway tile backsplash in a modern kitchen"

### 3.6 Doors & Windows
**File:** `doors-windows-hero.jpg`

**Prompt:**
```
Person using a drill to install new bronze door hinges on an interior pre-hung door 
frame. The door is propped open with shims visible at the hinge side. A level is taped 
to the door frame showing it is plumb. Wood shims, drill, and hardware packet scattered 
on the hallway floor. Clean residential hallway with hardwood floors. Shot from a 
three-quarter angle showing both the person and the door frame detail. Professional 
tutorial photography, bright natural lighting, sharp focus, photorealistic, high resolution, 
no text or watermarks
```

**Alt text:** "Installing a pre-hung interior door with proper shimming technique"

### 3.7 HVAC & Climate
**File:** `hvac-climate-hero.jpg`

**Prompt:**
```
Person replacing an HVAC air filter in a residential furnace unit, sliding a clean white 
pleated filter into the slot while the dirty grey filter leans against the wall nearby. 
Utility room or basement setting with the furnace clearly visible. Person wearing a 
simple t-shirt, looking confident. The filter size markings are visible on the frame 
edge. Bright overhead lighting in a clean mechanical room. Professional tutorial 
photography, bright natural lighting, sharp focus, photorealistic, high resolution, 
no text or watermarks
```

**Alt text:** "Replacing a furnace air filter with a clean pleated filter"

### 3.8 Outdoor & Landscaping
**File:** `outdoor-landscaping-hero.jpg`

**Prompt:**
```
Person using a cordless drill to screw composite deck boards onto joists on a 
partially-built backyard deck. The deck is about half-complete, showing the joist 
framework on one side and finished deck boards on the other. Green lawn and a fence 
visible in the background. Golden afternoon sunlight casting warm shadows across the 
deck surface. Shot from a slight elevated angle showing the deck structure. Professional 
tutorial photography, bright natural lighting, sharp focus, photorealistic, high resolution, 
no text or watermarks
```

**Alt text:** "Building a composite deck in a backyard, screwing deck boards to joists"

### 3.9 Appliance Repair
**File:** `appliance-repair-hero.jpg`

**Prompt:**
```
Person kneeling in front of an open front-load washing machine, using a multimeter to 
test the door latch assembly. The washer door is open, interior drum visible. A parts 
diagram printout and basic hand tools (screwdriver, pliers, nut driver) are laid out on 
a towel on the laundry room floor. Clean white laundry room with shelving. Bright 
overhead lighting. Shot from a three-quarter low angle. Professional tutorial photography, 
bright natural lighting, sharp focus, photorealistic, high resolution, no text or watermarks
```

**Alt text:** "Diagnosing a front-load washing machine with a multimeter"

### 3.10 Furniture & Decor
**File:** `furniture-decor-hero.jpg`

**Prompt:**
```
Person hand-sanding a vintage wooden dresser in a garage workshop, revealing beautiful 
natural wood grain beneath layers of old paint. One drawer front is fully stripped and 
shows warm golden oak, the rest are still painted white. Sanding block, orbital sander, 
paint stripper, and stain cans arranged on a nearby workbench. Garage door open letting 
in natural light. Satisfying before-and-after contrast on the piece. Professional tutorial 
photography, bright natural lighting, sharp focus, photorealistic, high resolution, 
no text or watermarks
```

**Alt text:** "Stripping and refinishing a vintage wooden dresser revealing natural wood grain"

---

## 4. Guide Featured Images

One featured image per guide, used as the hero image on the guide page and the OG share image. Must work well with text overlay and as a social media preview.

**Size:** 1200×630px (OG-image compatible)
**Directory:** `public/images/guides/`

### 4.1 Fix a Running Toilet
**File:** `fix-running-toilet-hero.jpg`

**Prompt:**
```
Top-down view looking into an open toilet tank with crystal clear water, showing a new 
red rubber flapper, white fill valve, and brass overflow tube. A person's hands are 
visible adjusting the flapper chain with pliers. The porcelain tank lid sits on a towel 
beside the toilet. Clean, modern white bathroom with tile floor. Bright, even lighting 
from above. Shot from directly overhead looking straight down into the tank. Colors are 
vivid — the red flapper pops against the white porcelain. Professional tutorial photography, 
bright natural lighting, sharp focus, photorealistic, high resolution, no text or watermarks
```

**Alt text:** "Inside view of a toilet tank showing flapper, fill valve, and overflow tube"

### 4.2 Patch and Repair Drywall
**File:** `patch-drywall-hero.jpg`

**Prompt:**
```
A person applying joint compound over a mesh drywall patch with a 12-inch taping knife, 
creating a smooth feathered edge on a white wall. The repair is mid-progress — the mesh 
patch is partially visible under the first coat of mud. A bucket of pre-mixed joint 
compound (purple lid) sits on a step stool nearby. Drop cloth on the floor. The wall 
shows the satisfying transformation from damaged to smoothly repaired. Bright room 
lighting from a nearby window. Shot from a slight angle showing the knife technique. 
Professional tutorial photography, bright natural lighting, sharp focus, photorealistic, 
high resolution, no text or watermarks
```

**Alt text:** "Applying joint compound over a drywall patch with a taping knife"

### 4.3 Refinish Hardwood Floors
**File:** `refinish-hardwood-floors-hero.jpg`

**Prompt:**
```
Dramatic before-and-after split view of a hardwood floor: the left half shows worn, 
scratched, dull oak flooring with visible damage; the right half shows the same floor 
freshly sanded, stained in a warm medium walnut, and sealed with glossy polyurethane, 
reflecting the window light beautifully. A drum sander sits at the transition line. 
Bright room with white walls and large windows. The contrast between old and new is 
striking and aspirational. Shot from a low angle at floor level, wide composition. 
Professional tutorial photography, bright natural lighting, sharp focus, photorealistic, 
high resolution, no text or watermarks
```

**Alt text:** "Before and after comparison of hardwood floor refinishing showing dramatic transformation"

---

## 5. Guide Step Images

These are the most critical images on the site — the actual tutorial step photos that walk users through each repair. Each must clearly show the specific action being described in that step.

**Size:** 800×600px
**Directory:** `public/images/guides/{guide-slug}/`
**Naming:** `step-{N}.jpg`

---

### 5.1 Guide: Fix a Running Toilet (6 steps)

#### Step 1 — Diagnose the Problem
**File:** `fix-running-toilet/step-1.jpg`

**Prompt:**
```
Overhead view looking into an open toilet tank with the porcelain lid removed and set 
on a towel beside the toilet. The water is clear and the internal components are clearly 
visible: a red rubber flapper at the bottom center, a white fill valve on the left side 
with a cup-style float, and a brass overflow tube in the middle. Subtle translucent 
arrows or highlights draw attention to each component. The person is pointing at the 
flapper with one hand. Clean white bathroom, bright even lighting from above, 
educational tutorial style. Professional tutorial photography, sharp focus on tank 
internals, photorealistic, high resolution, no text or watermarks
```

**Alt text:** "Open toilet tank showing flapper, fill valve, and overflow tube components"

#### Step 2 — Shut Off the Water Supply
**File:** `fix-running-toilet/step-2.jpg`

**Prompt:**
```
Close-up of a person's hand gripping and turning a chrome oval shut-off valve clockwise, 
located on the wall behind and below a white toilet. The flexible braided stainless steel 
supply line runs from the valve up to the bottom of the toilet tank. The hand is turning 
the valve firmly. White bathroom tile wall and floor visible. Shot from a low angle at 
floor level looking up at the valve and supply line connection. Bright, clear lighting 
with sharp focus on the valve and hand. Professional tutorial photography, photorealistic, 
high resolution, no text or watermarks
```

**Alt text:** "Hand turning the toilet shut-off valve clockwise to stop water supply"

#### Step 3 — Replace the Flapper
**File:** `fix-running-toilet/step-3.jpg`

**Prompt:**
```
Two hands working inside an open toilet tank: the left hand holds a new red rubber 
flapper, the right hand is connecting the thin metal chain from the flapper to the flush 
lever arm at the top of the tank. The old worn-out flapper (discolored and warped) sits 
on a towel beside the tank for comparison. The overflow tube pegs where the flapper clips 
on are clearly visible. About half an inch of slack is visible in the chain. Clean white 
porcelain tank interior, bright even lighting, close-up detail shot showing the chain 
and clip mechanism clearly. Professional tutorial photography, sharp focus, photorealistic, 
high resolution, no text or watermarks
```

**Alt text:** "Hands installing a new toilet flapper and connecting the chain to the flush lever"

#### Step 4 — Adjust the Float Level
**File:** `fix-running-toilet/step-4.jpg`

**Prompt:**
```
Inside a toilet tank, a person's hand is squeezing the spring clip on a cup-style float 
(cylinder float) mounted on the fill valve shaft, sliding it downward to lower the water 
level. The water line is visible about one inch below the top of the overflow tube. A 
subtle reference line on the overflow tube indicates the ideal water level. The fill 
valve is white plastic, the clip is metal. Clear water in the tank. Shot from slightly 
above, looking into the tank at a three-quarter angle. Bright, clean lighting. 
Professional tutorial photography, sharp focus on the float adjustment, photorealistic, 
high resolution, no text or watermarks
```

**Alt text:** "Adjusting the cup-style float on a toilet fill valve to set the correct water level"

#### Step 5 — Replace the Fill Valve
**File:** `fix-running-toilet/step-5.jpg`

**Prompt:**
```
Hands installing a new white Fluidmaster-style fill valve into a toilet tank, viewed 
from a low angle underneath the tank looking upward. One hand holds the fill valve 
body from inside the tank while the other hand tightens the plastic lock nut on the 
outside bottom of the tank. The braided supply line is disconnected and a small bucket 
catches drips below. The rubber gasket seal is visible between the tank porcelain and 
the lock nut. Bright bathroom lighting, clean focus on the connection point. Professional 
tutorial photography, sharp focus, photorealistic, high resolution, no text or watermarks
```

**Alt text:** "Installing a new fill valve in a toilet tank, tightening the lock nut from below"

#### Step 6 — Test and Adjust
**File:** `fix-running-toilet/step-6.jpg`

**Prompt:**
```
A person standing next to a white toilet with the tank lid back in place, hand on the 
flush handle, the toilet is flushing successfully. The shut-off valve behind the toilet 
is open (turned counter-clockwise). The person has a subtle look of satisfaction. Clean 
white bathroom with tile floor, bright natural lighting from a window. The scene conveys 
completion and success — everything is clean, put back together, and working properly. 
Medium shot showing the full toilet and the person from waist down. Professional tutorial 
photography, bright natural lighting, sharp focus, photorealistic, high resolution, 
no text or watermarks
```

**Alt text:** "Testing a repaired toilet by flushing, confirming the fix is successful"

---

### 5.2 Guide: Patch and Repair Drywall (8 steps)

#### Step 1 — Assess the Damage
**File:** `patch-repair-drywall/step-1.jpg`

**Prompt:**
```
A comparison layout showing four types of drywall damage on a white wall surface: a 
tiny nail hole (top-left), a medium 2-inch circular hole from a doorknob impact 
(top-right), a larger 6-inch ragged hole (bottom-left), and a very large 12-inch section 
of damaged drywall with crumbling edges (bottom-right). Each damage type is on a 
separate section of white drywall, arranged in a 2x2 grid composition. Clean, even 
front-lit photography against a neutral background, comparison-guide style. Each damage 
size is progressively more severe. Professional tutorial photography, bright even lighting, 
sharp focus, photorealistic, high resolution, no text or watermarks
```

**Alt text:** "Four types of drywall damage from small nail hole to large hole, showing size comparison"

#### Step 2 — Prep the Area
**File:** `patch-repair-drywall/step-2.jpg`

**Prompt:**
```
Close-up of a person's hand using a sharp utility knife to carefully trim ragged drywall 
edges around a medium-sized hole (about 3 inches) in a white wall. Small fragments of 
torn paper and gypsum are being cut away to create clean borders. A canvas drop cloth 
is visible below on the floor catching debris. The wall area around the hole is otherwise 
clean and undamaged. Shot from a straight-on perspective at arm's reach. Bright, well-lit 
room with no shadows on the work area. Professional tutorial photography, sharp focus on 
the knife and cutting action, photorealistic, high resolution, no text or watermarks
```

**Alt text:** "Trimming ragged drywall edges with a utility knife to prepare for patching"

#### Step 3 — Small Holes: Apply Spackle
**File:** `patch-repair-drywall/step-3.jpg`

**Prompt:**
```
Extreme close-up of a 3-inch putty knife pressing white lightweight spackle into a small 
nail hole in a white drywall surface. The spackle is being applied in a smooth, firm 
stroke — slightly overfilling the hole so it sits slightly proud of the wall surface. 
The putty knife blade reflects the room light. A small container of spackle is visible 
at the bottom edge of the frame. The technique is clean and precise. Shot from about 
12 inches away, straight on, with shallow depth of field focusing on the knife edge and 
spackle. Bright, even lighting. Professional tutorial photography, sharp focus, 
photorealistic, high resolution, no text or watermarks
```

**Alt text:** "Applying spackle to a nail hole with a putty knife, pressing compound into the wall"

#### Step 4 — Medium Holes: Self-Adhesive Mesh Patch
**File:** `patch-repair-drywall/step-4.jpg`

**Prompt:**
```
Two-stage action shot on a white wall. Left side: a person's hands peeling the backing 
off a self-adhesive fiberglass mesh drywall patch and pressing it centered over a 
medium-sized hole. Right side: a 6-inch wide drywall taping knife spreading white joint 
compound over the mesh patch in smooth strokes, the compound extending about 2 inches 
beyond the patch edges. The mesh texture is visible through the thin first coat. A 
purple-lid bucket of joint compound sits on a nearby surface. Split composition showing 
both phases of the repair. Bright even lighting. Professional tutorial photography, sharp 
focus, photorealistic, high resolution, no text or watermarks
```

**Alt text:** "Applying a mesh drywall patch then covering it with joint compound using a taping knife"

#### Step 5 — Large Holes: California Patch Method
**File:** `patch-repair-drywall/step-5.jpg`

**Prompt:**
```
Four-panel tutorial sequence showing the California patch method: Panel 1 — a square 
piece of new drywall face-down on a workbench being scored on the back with a utility 
knife, one inch from the edge. Panel 2 — the scored gypsum core snapped and peeled away, 
leaving the front paper intact as a flange tab extending beyond the gypsum core. Panel 3 — 
the prepared patch being test-fit into a square hole in the wall, paper flange lying flat 
against the surrounding wall surface. Panel 4 — joint compound being spread over the 
paper flange edges with a wide taping knife, creating a seamless blend. Clean progression, 
bright lighting, hands visible in each panel. Professional tutorial photography, sharp 
focus, photorealistic, high resolution, no text or watermarks
```

**Alt text:** "California patch method: scoring drywall, creating paper flange, fitting patch, applying compound"

#### Step 6 — Very Large Holes: Cut and Replace
**File:** `patch-repair-drywall/step-6.jpg`

**Prompt:**
```
Three-panel tutorial sequence of a large drywall section replacement: Panel 1 — a person 
screwing a 1x3 furring strip behind the drywall opening as a backing support, the strip 
extending behind the existing drywall on both sides, a cordless drill driving a drywall 
screw. Panel 2 — a freshly cut piece of new drywall being screwed into the backing strips, 
fitting snugly inside the rectangular opening. Panel 3 — paper drywall tape being applied 
over the seams with a coat of joint compound, a 12-inch taping knife smoothing the mud. 
Clean white wall, bright workshop lighting, clear step progression. Professional tutorial 
photography, sharp focus, photorealistic, high resolution, no text or watermarks
```

**Alt text:** "Large drywall repair: installing backing strips, fitting new drywall, taping seams"

#### Step 7 — Sand to a Smooth Finish
**File:** `patch-repair-drywall/step-7.jpg`

**Prompt:**
```
A person's hand holding a sanding sponge (150-grit), gently sanding a dried drywall 
patch in light circular motions on a white wall. Fine white dust is slightly visible 
in the air and collecting on the drop cloth below. The patched area is being feathered 
to create a perfectly smooth transition between the compound and the existing wall surface. 
The result is nearly invisible — the patch blends seamlessly. Shot from a close distance 
showing the hand, sponge, and wall surface. Soft directional lighting that reveals the 
surface texture. Professional tutorial photography, sharp focus on the sanding technique, 
photorealistic, high resolution, no text or watermarks
```

**Alt text:** "Sanding a dried drywall patch with a sanding sponge for a smooth invisible finish"

#### Step 8 — Prime and Paint
**File:** `patch-repair-drywall/step-8.jpg`

**Prompt:**
```
Split-view composition on a wall: the left side shows a foam roller applying white 
drywall primer over a freshly sanded patch area, the primer slightly whiter than the 
surrounding wall. The right side shows the same wall area after primer has dried, now 
being painted with the matching wall color using a full-size 9-inch paint roller, blending 
perfectly with the surrounding surface. A paint tray with roller sits on a drop cloth 
below. The final result looks seamless — no evidence of the repair. Bright, even room 
lighting. Before-and-after split feel within a single frame. Professional tutorial 
photography, sharp focus, photorealistic, high resolution, no text or watermarks
```

**Alt text:** "Priming and painting over a drywall patch for a seamless invisible repair"

---

### 5.3 Guide: Refinish Hardwood Floors (10 steps)

#### Step 1 — Prepare the Room
**File:** `refinish-hardwood-floors/step-1.jpg`

**Prompt:**
```
An empty room being prepared for floor refinishing. A person is carefully prying off 
baseboards with a flat pry bar, using a putty knife as a shim to protect the wall. The 
removed baseboards lean against the far wall, each labeled with a small piece of blue 
painter's tape numbered "1", "2", "3" for reinstallation order. A doorway in the 
background is sealed with clear plastic sheeting taped at the edges. The worn hardwood 
floor is exposed and bare. Floor vents have been removed. Bright natural light from 
windows. Wide shot showing the full room preparation in progress. Professional tutorial 
photography, bright natural lighting, sharp focus, photorealistic, high resolution, 
no text or watermarks
```

**Alt text:** "Preparing a room for floor refinishing: removing baseboards, sealing doorways with plastic"

#### Step 2 — Sand with Drum Sander (36 Grit)
**File:** `refinish-hardwood-floors/step-2.jpg`

**Prompt:**
```
A person wearing ear protection muffs, safety glasses, and an N95 dust mask operating 
a large drum floor sander on hardwood flooring. They are pushing the sander forward in 
a straight line with the wood grain. The dust collection bag on the sander is partially 
full. Behind the sander, the freshly sanded strip shows clean, pale raw wood; ahead of 
it, the old dark finish remains. The contrast between sanded and unsanded sections is 
dramatic. The person's posture shows controlled, steady movement. Bright room lighting. 
Shot from a three-quarter angle showing the full sander and operator. Professional 
tutorial photography, bright natural lighting, sharp focus, photorealistic, high resolution, 
no text or watermarks
```

**Alt text:** "Operating a drum floor sander on hardwood, showing the contrast between sanded and finished areas"

#### Step 3 — Edge Sand the Perimeter
**File:** `refinish-hardwood-floors/step-3.jpg`

**Prompt:**
```
A person kneeling and using a disc-type edge sander along the baseboard area of a 
hardwood floor, reaching the last 4-6 inches that the drum sander could not touch. They 
are moving the edge sander in a sweeping semi-circular motion along the wall line. The 
area where the drum sander's path ended and the edge sander begins is visible — a narrow 
strip of unsanded finish between the two zones. The person is wearing knee pads, a dust 
mask, and safety glasses. Bright, even room lighting. Close-up showing the technique and 
the overlap zone. Professional tutorial photography, sharp focus on the edge sander and 
floor detail, photorealistic, high resolution, no text or watermarks
```

**Alt text:** "Edge sanding the floor perimeter where the drum sander cannot reach"

#### Step 4 — Second and Third Sanding Passes
**File:** `refinish-hardwood-floors/step-4.jpg`

**Prompt:**
```
An educational flat-lay composition showing three sandpaper grits side by side — 36-grit 
(coarse, dark brown), 60-grit (medium), and 100-grit (fine, light tan) — laid next to 
three corresponding hardwood floor samples showing the progressive smoothness: the 
36-grit sample has visible sanding scratches, the 60-grit sample is smoother but still 
has some texture, and the 100-grit sample is silky smooth with beautiful visible grain 
pattern. The samples are arranged left-to-right showing the progression from rough to 
refined. Clean workbench or floor background. Bright, even overhead lighting. Professional 
tutorial photography, sharp focus, photorealistic, high resolution, no text or watermarks
```

**Alt text:** "Three sandpaper grits with matching floor samples showing progressive smoothness refinement"

#### Step 5 — Fill Gaps and Nail Holes
**File:** `refinish-hardwood-floors/step-5.jpg`

**Prompt:**
```
Close-up detail shot of a person using a flexible putty knife to press wood filler (mixed 
with collected sanding dust to create a color-matched compound) into a gap between two 
hardwood floor boards. The filler is a natural wood tone that closely matches the 
surrounding bare oak floor. A small container of the mixed filler compound sits beside 
the work area. The surrounding sanded floor shows clean, bare wood grain. Shot from 
directly above looking straight down at the floor, very tight framing on the gap, putty 
knife, and hands. Bright, even lighting with no shadows. Professional tutorial photography, 
sharp focus on the gap and filler application, photorealistic, high resolution, no text 
or watermarks
```

**Alt text:** "Pressing color-matched wood filler into gaps between hardwood floor boards"

#### Step 6 — Final Vacuum and Tack Cloth
**File:** `refinish-hardwood-floors/step-6.jpg`

**Prompt:**
```
A person on hands and knees carefully wiping a sanded bare hardwood floor with a tack 
cloth, methodically working in overlapping strokes to pick up every last particle of 
fine dust. The floor shows clean, beautiful raw wood grain — pale golden oak with dark 
grain lines. The room is dust-free and pristine, ready for finishing. A shop vacuum sits 
nearby, already used and set aside. Bright natural light from windows highlights the 
clean wood surface. The person's expression is careful and methodical. Shot from a low 
angle at floor level showing the expansive clean floor. Professional tutorial photography, 
bright natural lighting, sharp focus, photorealistic, high resolution, no text or watermarks
```

**Alt text:** "Wiping a sanded hardwood floor with a tack cloth to remove all dust before finishing"

#### Step 7 — Apply Stain (Optional)
**File:** `refinish-hardwood-floors/step-7.jpg`

**Prompt:**
```
A person wearing nitrile gloves applying dark walnut oil-based wood stain to a sanded 
hardwood floor using a clean cotton rag, working in a 3-foot section with the wood grain. 
The dramatic color transformation is the focal point: the raw pale oak on the unstained 
side transitions to a rich, warm dark walnut on the stained side. The stain is being 
applied generously and the excess is about to be wiped off. An open can of stain and 
additional clean rags sit nearby. Warm lighting that showcases the rich stain color. 
Shot from a medium distance showing the clear before/after split on the floor. 
Professional tutorial photography, bright natural lighting, sharp focus, photorealistic, 
high resolution, no text or watermarks
```

**Alt text:** "Applying wood stain to a hardwood floor showing the dramatic color transformation"

#### Step 8 — Apply First Coat of Polyurethane
**File:** `refinish-hardwood-floors/step-8.jpg`

**Prompt:**
```
A person applying polyurethane finish to a stained hardwood floor using a long-handled 
T-bar applicator with a synthetic pad, making smooth, even strokes along the wood grain. 
The polyurethane creates a glossy, wet sheen on the freshly coated portion of the floor 
while the uncoated section ahead looks matte. They are working from the far corner of 
the room toward the doorway exit, backing up as they apply. The room is empty, doorways 
sealed with plastic. Warm golden light reflects off the wet polyurethane surface. Shot 
from a medium-low angle showing the applicator, the wet vs. dry contrast, and the exit 
strategy. Professional tutorial photography, bright natural lighting, sharp focus, 
photorealistic, high resolution, no text or watermarks
```

**Alt text:** "Applying polyurethane to a hardwood floor with a T-bar applicator, working toward the exit"

#### Step 9 — Screen and Apply Additional Coats
**File:** `refinish-hardwood-floors/step-9.jpg`

**Prompt:**
```
A person lightly screening (sanding) a cured polyurethane coat on a hardwood floor using 
a pole sander fitted with a 120-grit sanding screen, making gentle passes to scuff the 
surface for inter-coat adhesion. The floor has a semi-gloss sheen from the first coat. 
Fine, white dust from the screening is visible on the surface. A second coat of poly in 
a can and a fresh applicator pad wait nearby. The floor is building up a beautiful, 
protective finish. Bright room lighting. Shot from a standing perspective showing the 
full pole sander and the person's technique. Professional tutorial photography, bright 
natural lighting, sharp focus, photorealistic, high resolution, no text or watermarks
```

**Alt text:** "Screening a polyurethane coat with a pole sander before applying the next coat"

#### Step 10 — Let It Cure and Reinstall Trim
**File:** `refinish-hardwood-floors/step-10.jpg`

**Prompt:**
```
A beautifully refinished hardwood floor in a sunlit, empty living room — the final 
result. The floor has a rich warm medium-walnut stain with a satin polyurethane finish 
that reflects the window light in a soft, even sheen. Freshly reinstalled white 
baseboards frame the room. The floor is flawless — smooth, even color, no visible 
scratches or imperfections. Warm afternoon sunlight streams through large windows, 
casting gentle shadows. The room feels clean, renewed, and aspirational — a dramatic 
transformation. Wide-angle shot from a low perspective showing the full expanse of 
the refinished floor. Professional tutorial photography, bright natural lighting, 
sharp focus, photorealistic, high resolution, no text or watermarks
```

**Alt text:** "Beautifully refinished hardwood floor with warm stain and satin finish in a sunlit room"

---

## 6. Product / Tool Placeholder Images

Clean product shots for the affiliate product cards on the homepage and within guides. These serve as placeholders until actual product images are sourced from affiliate programs.

**Size:** 400×400px (square, centered product)
**Directory:** `public/images/products/`

### 6.1 Cordless Drill
**File:** `dewalt-drill.jpg`

**Prompt:**
```
A cordless drill/driver in yellow and black housing on a clean white background, shown 
at a three-quarter angle with the chuck facing the viewer. A battery pack is attached. 
A Phillips driver bit is inserted in the chuck. The drill looks professional and 
well-built. Clean product photography, soft studio lighting with no harsh shadows, 
centered composition with margin around the product, photorealistic, high resolution, 
no text or watermarks, no brand logos
```

**Alt text:** "Cordless drill/driver on white background"

### 6.2 Tongue-and-Groove Pliers
**File:** `channellock-pliers.jpg`

**Prompt:**
```
A pair of 10-inch tongue-and-groove pliers (Channellock-style) in blue steel on a clean 
white background, jaws partially open showing the adjustment channels. The blue dipped 
handles are visible. Shot from a slight overhead three-quarter angle. Clean product 
photography, soft studio lighting, centered composition, photorealistic, high resolution, 
no text or watermarks, no brand logos
```

**Alt text:** "Tongue-and-groove pliers on white background"

### 6.3 Tape Measure
**File:** `stanley-tape-measure.jpg`

**Prompt:**
```
A 25-foot retractable tape measure with a yellow and black housing, the blade extended 
about 12 inches showing the measurement markings. The belt clip is visible on the back. 
Clean white background. Shot from a three-quarter top-down angle. Clean product photography, 
soft studio lighting, centered composition, photorealistic, high resolution, no text or 
watermarks, no brand logos
```

**Alt text:** "25-foot tape measure with extended blade on white background"

### 6.4 Drywall Patch Kit
**File:** `3m-patch-kit.jpg`

**Prompt:**
```
A drywall repair kit contents laid out on a white background in a flat-lay arrangement: 
a self-adhesive mesh patch, a small tub of spackling compound, a plastic putty knife, 
and a small packet of primer. Everything is clean and new, arranged symmetrically. 
Clean product photography, soft overhead studio lighting, centered composition, 
photorealistic, high resolution, no text or watermarks, no brand logos
```

**Alt text:** "Drywall repair kit contents including mesh patch, spackle, and putty knife"

---

## 7. UI / Decorative Images

### 7.1 Newsletter Section Background
**File:** `public/images/ui/newsletter-bg.jpg`
**Size:** 1920×600px

**Prompt:**
```
A beautifully organized workshop pegboard wall with neatly hung hand tools — hammers, 
wrenches, pliers, screwdrivers, levels, saws — arranged by size and type. The pegboard 
is painted deep navy blue (#1E3A5F). Warm incandescent workshop lighting creates a cozy 
glow. The tools have wooden handles and polished steel. Shallow depth of field blurs 
the edges. Shot straight-on. This image will be used as a dark background with text 
overlay, so it should be evenly dark without bright spots. Professional photography, 
warm workshop lighting, sharp focus on center tools, photorealistic, high resolution, 
no text or watermarks
```

### 7.2 About Page Hero
**File:** `public/images/ui/about-hero.jpg`
**Size:** 1200×500px

**Prompt:**
```
A group of three people (diverse ages, genders, ethnicities) standing together in a 
bright home workshop, each holding different tools — one with a drill, one with a paint 
roller, one with pliers. They are smiling warmly at the camera, dressed in casual work 
clothes (jeans, flannel shirts, t-shirts). The workshop behind them has a clean workbench, 
organized tool wall, and natural light from a window. The mood is approachable and 
expert — these are people you'd trust to teach you a repair. Shot at medium distance 
showing them from the waist up. Professional portrait photography, bright warm lighting, 
sharp focus, photorealistic, high resolution, no text or watermarks
```

### 7.3 404 Page Illustration
**File:** `public/images/ui/404-illustration.jpg`
**Size:** 600×600px

**Prompt:**
```
A humorous scene of a confused-looking person standing in front of a wall with a 
comically oversized hole in the drywall, scratching their head and holding a tiny 
putty knife that is clearly inadequate for the job. The hole is enormous, maybe 
4 feet wide. Tools scattered on the floor. The tone is lighthearted and relatable. 
Bright, clean room. Warm, slightly comedic illustration style while still being 
photorealistic. Professional photography, bright natural lighting, sharp focus, 
photorealistic, high resolution, no text or watermarks
```

### 7.4 Loading / Skeleton Placeholder
**File:** `public/images/ui/placeholder-guide.jpg`
**Size:** 800×600px

**Prompt:**
```
A clean, minimal workshop surface with a few tools resting on it — a tape measure, 
a pencil, and a pair of safety glasses — shot with an extremely shallow depth of field 
so everything is soft and blurry. The image is intentionally low-contrast and slightly 
desaturated, suitable as a loading placeholder. Warm neutral color palette, no strong 
focal point. Professional photography, soft lighting, intentionally blurred, photorealistic, 
high resolution, no text or watermarks
```

### 7.5 DIY vs Pro Section Illustration
**File:** `public/images/ui/diy-vs-pro.jpg`
**Size:** 1200×600px

**Prompt:**
```
Split image: Left side shows a homeowner in casual clothes (jeans, t-shirt) confidently 
patching a small wall hole with a putty knife, smiling. Right side shows a licensed 
electrician in uniform working on a main electrical panel with professional tools and 
safety equipment. The left side has a warm, inviting green-tinted tone; the right side 
has a professional amber-tinted tone. Both people look competent in their respective 
domains. Clear visual distinction between DIY-appropriate and professional-appropriate 
work. Professional photography, bright lighting, sharp focus, photorealistic, high 
resolution, no text or watermarks
```

### 7.6 Trust Badge / Social Proof Background
**File:** `public/images/ui/trust-bg.jpg`
**Size:** 1920×200px

**Prompt:**
```
A subtle texture image of a clean light grey wooden workbench surface with fine wood 
grain detail, shot from directly above. The surface is clean and uncluttered, just 
showing natural wood texture. Very light, minimal, and neutral — designed as a subtle 
background strip. Uniform lighting, no strong shadows or highlights. Professional 
photography, bright even lighting, sharp focus, photorealistic, high resolution, 
no text or watermarks
```

---

## 8. Social Media Templates

### 8.1 OG Image Default
**File:** `public/og-default.jpg`
**Size:** 1200×630px

**Prompt:**
```
A clean, professional composition showing a collage of home repair activities: a hammer 
driving a nail, a paint roller mid-stroke, a wrench turning a pipe fitting, and a sander 
on a hardwood floor — arranged in four quadrants. Deep blue (#1E3A5F) background with 
warm lighting on each tool scene. The overall effect is dynamic and competent. Leave 
space in the center or bottom third for a text logo overlay. Professional photography, 
warm lighting, sharp focus, photorealistic, high resolution, no text or watermarks
```

### 8.2 Twitter Card Template
**File:** `public/images/social/twitter-card-template.jpg`
**Size:** 1200×628px

**Prompt:**
```
A workbench surface shot from above with tools arranged along the top edge (tape measure, 
level, drill, pencil) and a large open area of clean butcher-block wood surface below 
for text overlay. The tools create a natural border at the top. Deep blue navy tone in 
the background shadows. Warm workshop lighting. Professional photography, bright warm 
lighting, sharp focus, photorealistic, high resolution, no text or watermarks
```

### 8.3 Pinterest Pin Template
**File:** `public/images/social/pinterest-pin-template.jpg`
**Size:** 1000×1500px (vertical)

**Prompt:**
```
Vertical composition: top third shows a beautifully refinished hardwood floor detail 
shot (warm walnut tone, glossy finish reflecting light). Middle third is a large open 
area with a soft blurred workshop background suitable for text overlay. Bottom third 
shows a person's hands using a paintbrush to apply stain to wood, close-up detail. 
The top and bottom sections frame the text area in the center. Deep blue and warm orange 
accents. Professional photography, bright warm lighting, sharp focus, photorealistic, 
high resolution, no text or watermarks
```

---

## 9. Author & Brand Assets

### 9.1 Team Avatar
**File:** `public/authors/team-avatar.jpg`
**Size:** 200×200px (circular crop)

**Prompt:**
```
A friendly, professional avatar-style portrait of a person in their 40s wearing a navy 
blue work polo and safety glasses pushed up on their forehead. They have a warm, 
approachable smile. Clean workshop background out of focus. Headshot from the chest up. 
The person looks like a knowledgeable, experienced tradesperson who enjoys teaching. 
Professional portrait photography, soft studio lighting, sharp focus on face, 
photorealistic, high resolution, no text or watermarks
```

### 9.2 Logo Mark
**File:** `public/images/brand/logo-mark.svg`
**Size:** 512×512px

**Note:** Best created with a vector design tool (Figma, Illustrator) rather than AI image generation. The logo should combine a wrench/hammer icon with a paint brush stroke, using Deep Blue (#1E3A5F) and Orange (#E8712B).

### 9.3 Favicon
**File:** `public/favicon.ico` (multi-size) and `public/images/brand/favicon-512.png`
**Size:** 16×16, 32×32, 180×180, 512×512

**Note:** Derive from the logo mark. Should be recognizable at 16×16 — likely just the tool icon element in orange on a deep blue background.

### 9.4 Apple Touch Icon
**File:** `public/apple-touch-icon.png`
**Size:** 180×180px

**Note:** Derive from favicon/logo mark with rounded corners and the brand blue background.

---

## 10. Image File Naming Convention

```
public/images/
├── hero/
│   └── homepage-hero.jpg
├── categories/
│   ├── plumbing-hero.jpg
│   ├── electrical-hero.jpg
│   ├── painting-walls-hero.jpg
│   ├── flooring-hero.jpg
│   ├── kitchen-bath-hero.jpg
│   ├── doors-windows-hero.jpg
│   ├── hvac-climate-hero.jpg
│   ├── outdoor-landscaping-hero.jpg
│   ├── appliance-repair-hero.jpg
│   └── furniture-decor-hero.jpg
├── guides/
│   ├── fix-running-toilet-hero.jpg
│   ├── fix-running-toilet-og.jpg
│   ├── fix-running-toilet/
│   │   ├── step-1.jpg
│   │   ├── step-2.jpg
│   │   ├── step-3.jpg
│   │   ├── step-4.jpg
│   │   ├── step-5.jpg
│   │   └── step-6.jpg
│   ├── patch-drywall-hero.jpg
│   ├── patch-drywall-og.jpg
│   ├── patch-repair-drywall/
│   │   ├── step-1.jpg
│   │   ├── step-2.jpg
│   │   ├── step-3.jpg
│   │   ├── step-4.jpg
│   │   ├── step-5.jpg
│   │   ├── step-6.jpg
│   │   ├── step-7.jpg
│   │   └── step-8.jpg
│   ├── refinish-hardwood-floors-hero.jpg
│   ├── refinish-hardwood-floors-og.jpg
│   └── refinish-hardwood-floors/
│       ├── step-1.jpg
│       ├── step-2.jpg
│       ├── step-3.jpg
│       ├── step-4.jpg
│       ├── step-5.jpg
│       ├── step-6.jpg
│       ├── step-7.jpg
│       ├── step-8.jpg
│       ├── step-9.jpg
│       └── step-10.jpg
├── products/
│   ├── dewalt-drill.jpg
│   ├── channellock-pliers.jpg
│   ├── stanley-tape-measure.jpg
│   └── 3m-patch-kit.jpg
├── ui/
│   ├── newsletter-bg.jpg
│   ├── about-hero.jpg
│   ├── 404-illustration.jpg
│   ├── placeholder-guide.jpg
│   ├── diy-vs-pro.jpg
│   └── trust-bg.jpg
├── social/
│   ├── twitter-card-template.jpg
│   └── pinterest-pin-template.jpg
├── brand/
│   ├── logo-mark.svg
│   └── favicon-512.png
├── authors/
│   └── team-avatar.jpg
└── og-default.jpg
```

---

## 11. Image Optimization Notes

### Target File Sizes
| Type | Max File Size | Format |
|---|---|---|
| Hero/banner (1920px wide) | 150-250 KB | WebP (JPEG fallback) |
| Category hero (800×600) | 60-100 KB | WebP (JPEG fallback) |
| Guide featured (1200×630) | 80-120 KB | WebP (JPEG fallback) |
| Guide step (800×600) | 50-80 KB | WebP (JPEG fallback) |
| Product (400×400) | 30-50 KB | WebP (JPEG fallback) |
| Social templates | 100-150 KB | JPEG (for compatibility) |
| Avatar (200×200) | 15-25 KB | WebP (JPEG fallback) |

### Formats
- **Primary:** WebP — smaller file size, excellent quality, supported by all modern browsers
- **Fallback:** JPEG at quality 80 — for older browsers and social media crawlers
- **Use Next.js `<Image>`** component for automatic format negotiation and responsive sizing

### Responsive Image Sizes (srcset)
Generate these widths for hero and featured images:

```
srcSet="
  /images/guides/fix-running-toilet-hero-480w.webp 480w,
  /images/guides/fix-running-toilet-hero-768w.webp 768w,
  /images/guides/fix-running-toilet-hero-1200w.webp 1200w,
  /images/guides/fix-running-toilet-hero-1920w.webp 1920w
"
```

Or let Next.js `<Image>` handle this automatically with the `sizes` prop:

```tsx
<Image
  src="/images/guides/fix-running-toilet-hero.jpg"
  alt="Inside view of a toilet tank showing flapper, fill valve, and overflow tube"
  width={1200}
  height={630}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
  priority // for above-the-fold images
/>
```

### Alt Text Guidelines
- Every image MUST have descriptive alt text (provided above for each image)
- Describe the action and subject, not the file name
- Include relevant keywords naturally (e.g., "toilet flapper" not just "part")
- Keep under 125 characters for screen reader compatibility
- For decorative images (backgrounds, placeholders), use `alt=""`

### Lazy Loading
- Hero images and first-visible guide images: `priority` (no lazy loading)
- All other images: default lazy loading via Next.js `<Image>`

---

## 12. Batch Generation Workflow

### Recommended Generation Order

**Batch 1: Brand Foundation (5 images)**
Generate first to establish the visual style and color palette for all subsequent images.
1. Homepage hero banner
2. OG default image
3. Team avatar
4. Newsletter background
5. About page hero

**Batch 2: Category Heroes (10 images)**
Generate as a cohesive set to ensure consistent style across all categories.
1. Plumbing hero
2. Electrical hero
3. Painting & Walls hero
4. Flooring hero
5. Kitchen & Bath hero
6. Doors & Windows hero
7. HVAC & Climate hero
8. Outdoor & Landscaping hero
9. Appliance Repair hero
10. Furniture & Decor hero

**Batch 3: Guide 1 — Fix a Running Toilet (7 images)**
Generate guide featured image first, then all steps sequentially.
1. Featured/hero image
2. Steps 1-6

**Batch 4: Guide 2 — Patch and Repair Drywall (9 images)**
1. Featured/hero image
2. Steps 1-8

**Batch 5: Guide 3 — Refinish Hardwood Floors (11 images)**
1. Featured/hero image
2. Steps 1-10

**Batch 6: Products (4 images)**
Generate together — same white background, same lighting, same angle.
1. Cordless drill
2. Pliers
3. Tape measure
4. Patch kit

**Batch 7: UI & Social (9 images)**
1. 404 illustration
2. DIY vs Pro section
3. Trust background
4. Placeholder guide
5. Twitter card template
6. Pinterest pin template

### Grouping for Style Consistency

When using AI generation tools, generate these groups in a single session to maintain visual consistency:

| Session | Shared Setting | Images |
|---|---|---|
| Bathroom session | White bathroom, tile, porcelain | Toilet steps 1-6, Plumbing category |
| Wall repair session | White walls, room interior | Drywall steps 1-8, Painting category |
| Floor session | Hardwood floors, empty rooms | Floor steps 1-10, Flooring category |
| Workshop session | Workbench, tools, garage | Products, newsletter bg, furniture category |
| Kitchen session | Kitchen counter, cabinets | Kitchen & Bath category |
| Outdoor session | Yard, deck, exterior | Outdoor category |

### Quality Control Checklist

Before approving each generated image, verify:

- [ ] **Hands look natural** — AI frequently generates extra fingers or distorted hands. Regenerate if hands are wrong.
- [ ] **Tools are accurate** — A wrench should look like a wrench. Pliers should have correct jaw geometry. Reject fantasy tools.
- [ ] **Composition matches specification** — The image should match the described angle, perspective, and framing.
- [ ] **No embedded text** — AI image generators often add gibberish text to signs, labels, and surfaces. Reject or inpaint.
- [ ] **Lighting is consistent** — Within a guide's step images, the lighting should feel like it came from the same room.
- [ ] **No brand logos visible** — If any recognizable logos appear, inpaint them out.
- [ ] **Correct number of fingers** — Always check hands in close-up shots.
- [ ] **Safety gear present** — Where specified (dust masks, safety glasses, gloves), verify they appear in the image.
- [ ] **Colors align with brand** — Deep blue and orange accents should appear naturally where specified.
- [ ] **Resolution meets spec** — Verify the output resolution matches the size specified for each image type.

### Post-Processing Pipeline

After generation, each image should go through:

1. **Crop/resize** to exact specified dimensions
2. **Color correction** — Ensure consistent white balance across the set
3. **Export WebP** at quality 85 (primary format)
4. **Export JPEG** at quality 80 (fallback format)
5. **Generate responsive sizes** (480w, 768w, 1200w, 1920w for heroes)
6. **Compress** through a tool like Squoosh, Sharp, or ImageOptim
7. **Verify** final file sizes meet the targets in Section 11
8. **Add to repository** in the correct directory path

---

## Summary

| Metric | Value |
|---|---|
| **Total unique images** | **61** |
| **Guide step images** | 24 |
| **Category images** | 10 |
| **Guide featured images** | 3 |
| **Product images** | 4 |
| **Hero / banner images** | 1 |
| **UI / decorative images** | 6 |
| **Social media templates** | 3 |
| **Brand assets** | 5 |
| **OG images** | 4 (1 default + 3 guide-specific) |
| **Unique prompts provided** | 51 |
| **Estimated generation time** | 4-6 hours (with review and regeneration) |
| **Estimated post-processing time** | 2-3 hours |

---

*Last updated: March 22, 2026*

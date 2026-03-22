import type { Category } from '@/types';

// =============================================================================
// Repair & Refinish - Category Definitions
// =============================================================================
// 10 core categories covering all major home repair and improvement areas.
// Icons reference Lucide icon component names for use with lucide-react.
// =============================================================================

export const categories: Category[] = [
  {
    id: 'cat-plumbing',
    slug: 'plumbing',
    name: 'Plumbing',
    description:
      'Fix leaky faucets, unclog drains, repair toilets, and tackle water heater issues. Our plumbing guides walk you through common fixes that save hundreds on plumber visits.',
    icon: 'Droplets',
    guideCount: 6,
    color: '#3B82F6',
  },
  {
    id: 'cat-electrical',
    slug: 'electrical',
    name: 'Electrical',
    description:
      'Replace outlets and switches, install light fixtures, troubleshoot wiring issues, and upgrade your electrical panel. Safety-first guides with clear warnings about when to call a licensed electrician.',
    icon: 'Zap',
    guideCount: 5,
    color: '#EAB308',
  },
  {
    id: 'cat-painting-walls',
    slug: 'painting-walls',
    name: 'Painting & Walls',
    description:
      'Master interior and exterior painting, repair drywall damage, apply wallpaper, create accent walls, and achieve professional-quality texture finishes.',
    icon: 'Paintbrush',
    guideCount: 6,
    color: '#22C55E',
  },
  {
    id: 'cat-flooring',
    slug: 'flooring',
    name: 'Flooring',
    description:
      'Install and refinish hardwood, lay tile and vinyl, stretch carpet, and repair laminate. From subfloor prep to the final coat of polyurethane.',
    icon: 'Layers',
    guideCount: 5,
    color: '#92400E',
  },
  {
    id: 'cat-kitchen-bath',
    slug: 'kitchen-bath',
    name: 'Kitchen & Bath',
    description:
      'Update cabinets, install countertops, replace fixtures, tile backsplashes, and give your kitchen or bathroom a fresh look without a full remodel.',
    icon: 'CookingPot',
    guideCount: 6,
    color: '#14B8A6',
  },
  {
    id: 'cat-doors-windows',
    slug: 'doors-windows',
    name: 'Doors & Windows',
    description:
      'Hang new doors, replace window panes, install weatherstripping, fix locks and latches, and repair screens. Keep your home secure and energy-efficient.',
    icon: 'DoorOpen',
    guideCount: 4,
    color: '#6366F1',
  },
  {
    id: 'cat-hvac-climate',
    slug: 'hvac-climate',
    name: 'HVAC & Climate',
    description:
      'Maintain your heating and cooling systems, install smart thermostats, improve insulation, seal air leaks, and keep your home comfortable year-round.',
    icon: 'Thermometer',
    guideCount: 5,
    color: '#EF4444',
  },
  {
    id: 'cat-outdoor-landscaping',
    slug: 'outdoor-landscaping',
    name: 'Outdoor & Landscaping',
    description:
      'Build and repair decks, lay pavers for patios, install fencing, fix drainage problems, and maintain your home\'s exterior siding and trim.',
    icon: 'TreePine',
    guideCount: 5,
    color: '#10B981',
  },
  {
    id: 'cat-appliance-repair',
    slug: 'appliance-repair',
    name: 'Appliance Repair',
    description:
      'Diagnose and fix common issues with washers, dryers, dishwashers, refrigerators, and ovens. Save money on service calls with our troubleshooting guides.',
    icon: 'Wrench',
    guideCount: 5,
    color: '#8B5CF6',
  },
  {
    id: 'cat-furniture-decor',
    slug: 'furniture-decor',
    name: 'Furniture & Decor',
    description:
      'Refinish wood furniture, reupholster chairs, build custom shelving, organize closets, and stage rooms. Transform your space without buying everything new.',
    icon: 'Armchair',
    guideCount: 3,
    color: '#F59E0B',
  },
];

/**
 * Look up a category by its slug.
 */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

/**
 * Look up a category by its id.
 */
export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

/**
 * Get all category slugs (useful for static params generation).
 */
export function getAllCategorySlugs(): string[] {
  return categories.map((c) => c.slug);
}

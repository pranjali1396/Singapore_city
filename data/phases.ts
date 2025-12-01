export type PhaseSection = {
  title: string
  body?: string
  media?: { type: 'image' | 'map' | 'video'; src: string; alt?: string }[]
  action?: { label: string; url: string; type: 'button' | 'link' }
}

export type Phase = {
  id: number
  slug: string
  name: string
  shortLabel: string
  description: string
  meta: { seoTitle: string; seoDescription: string }
  theme: { colorKey: 'phase1' | 'phase2' | 'phase4' }
  sections: PhaseSection[]
}

export const phases: Phase[] = [
  {
    id: 1,
    slug: 'phase-1-2',
    name: 'Phase 1 & 2',
    shortLabel: 'Singapore Life City 1 & 2',
    description:
      'Welcome to Singapore Life City Phase 1, Bhilai - a premium plotting township offering well-planned, sustainable, and affordable living with modern infrastructure.',
    meta: {
      seoTitle: 'Singapore Life City – Phase 1 & 2 | Surya Vihar Bhilai',
      seoDescription:
        'Inspired by Singapore, offering sustainable and affordable modern living with residential plots and future-ready flats in Bhilai.',
    },
    theme: { colorKey: 'phase1' },
    sections: [
      {
        title: 'Welcome to Singapore Life City Phase 1, Bhilai',
        body: 'Singapore Life City Phase 1, located in Surya Vihar, Bhilai, is a premium plotting township by Chouhan\'s & DHL Infrabulls. Inspired by Singapore\'s modern urban design, the project offers well-planned, sustainable, and affordable living with residential plots and provisions for future-ready homes.\n\nThe township features a grand landscaped entrance, wide concrete roads, underground electrification, landscaped gardens, jogging & cycling tracks, children\'s play areas, and a robust water and drainage system—creating a clean, safe, and modern living environment.\n\nDesigned to set a new benchmark in urban development, Singapore Life City brings together smart planning, green spaces, and top-quality infrastructure for a truly elevated lifestyle in Bhilai.',
      },
      {
        title: 'Highlights',
        body: 'Landscaped roads, parks, essential utilities, family-friendly layout, internal roads, play areas.',
      },

      {
        title: 'Amenities',
        body: 'Grand Entrance Gate • Concrete Road • Underground Street Lights • Children\'s Play Area • Landscape Garden • Boundary Wall',
      },

      {
        title: 'Master Layout',
        media: [
          { type: 'image', src: '/media/Phase 1/Layout/singapore_city_1_1.webp', alt: 'Phase 1 & 2 Master Layout' },
        ],
        action: {
          label: 'View Brochure',
          url: '/media/Phase 1/Brochure/Singapor City P1&2 Fold Brochure.pdf',
          type: 'button',
        },
      },
      {
        title: 'Why Choose Us?',
        body: 'Member of CREDAI & RERA Approved • Save Upto ₹2.67L Under PMAY • 20+ Years of Experience • High Standard Detailing in Construction • 1 Year of FREE Maintenance (*T&C Applied) • Loan & EMI Facility Available',
      },
      {
        title: 'Location',
        media: [
          {
            type: 'map',
            src:
              'https://maps.google.com/maps?q=Chouhan+Singapore+City+Phase+1&z=15&output=embed',
            alt: 'Phase 1 & 2 Location Map',
          },
        ],
      },
      {
        title: 'Gallery',
        media: [
          { type: 'image', src: '/media/Phase 1/Photos and Videos_/city1.jpg', alt: 'Phase 1 & 2 Highlight' },
          { type: 'image', src: '/media/Phase 1/Photos and Videos_/singapore_01.webp', alt: 'Street View' },
          { type: 'image', src: '/media/Phase 1/Photos and Videos_/chouhan-singaporecity01.webp', alt: 'Aerial View 2' },
          { type: 'image', src: '/media/Phase 1/Photos and Videos_/DJI_20250715171539_0026_D.JPG', alt: 'Aerial View 2' },
          { type: 'image', src: '/media/Phase 1/Photos and Videos_/DJI_20250715171545_0027_D.JPG', alt: 'Aerial View 3' },
          { type: 'image', src: '/media/Phase 1/Photos and Videos_/singa_gate_half.webp', alt: 'Grand Entrance Gate' },
          { type: 'image', src: '/media/Phase 1/Photos and Videos_/singapore_02.webp', alt: 'Underground Street Lights' },
          { type: 'image', src: '/media/Phase 1/Photos and Videos_/singapore_life_city_phase2_3.webp', alt: 'Landscape Garden' },
          { type: 'image', src: '/media/Phase 1/Photos and Videos_/singapore_life_city_phase2_4.webp', alt: 'Children\'s Play Area' },
          { type: 'image', src: '/media/Phase 1/Photos and Videos_/singapore_life_city_phase2_6.webp', alt: 'Park View' },
          { type: 'image', src: '/media/Phase 1/Photos and Videos_/WhatsApp Image 2025-10-02 at 05.47.16_598dfaa9.jpg', alt: 'Site View' },
        ],
      },
    ],
  },
  {
    id: 4,
    slug: 'phase-4',
    name: 'Phase 4',
    shortLabel: 'Premium Plots & Bungalows',
    description:
      'Signature phase designed for premium lifestyle and smart planning — combining large residential plots and limited bungalows.',
    meta: {
      seoTitle: 'Singapore Life City – Phase 4 | Premium Plots & Bungalows',
      seoDescription:
        'Premium plots near IIT Bhilai with ready and under-construction bungalows. Secure, green surroundings in Phase 4.',
    },
    theme: { colorKey: 'phase4' },
    sections: [

      {
        title: 'Highlights',
        body: 'Huge landscaped entrance gate • Exclusively designed pathways • Jogging track • Landscape garden • Casual sitting area • Concrete road • Street lights underground • Boundary wall • Cycle track • Water tank & sump tank • Children\'s play area • Sewage system • Stormwater drainage • Water pipeline to each plot',
      },

      {
        title: 'Amenities',
        body: 'Grand Entrance Gate • Concrete Road • Underground Street Lights • Children\'s Play Area • Landscape Garden and Sitting Areas • Boundary Wall • Water Pipeline to Each Plot • Modern Sewage and Drainage Systems',
      },

      {
        title: 'Bungalows',
        body: 'Typologies: 3 BHK / 4 BHK Independent Villas. Status: Under Construction / Ready for Possession. Features: Private garden, car parking, modular design.',
      },
      {
        title: 'Why Choose Us?',
        body: 'Member of CREDAI & RERA Approved • Save Upto ₹2.67L Under PMAY • 20+ Years of Experience • High Standard Detailing in Construction • 1 Year of FREE Maintenance (*T&C Applied) • Loan & EMI Facility Available',
      },
      {
        title: 'Location',
        media: [
          {
            type: 'map',
            src:
              'https://maps.google.com/maps?q=IIT+Bhilai&z=15&output=embed',
            alt: 'Phase 4 Location Map',
          },
        ],
      },
      {
        title: 'Gallery',
        media: [
          { type: 'image', src: '/media/Phase 1/Photos and Videos_/singapore_life_city_phase2_3.webp', alt: 'Phase 4 Aerial 1' },
          { type: 'image', src: '/media/Phase 4/Photos and Videos_/singa_phase-4.webp', alt: 'Phase 4 Aerial 2' },
          { type: 'image', src: '/media/Phase 1/Photos and Videos_/singapore_life_city_phase2_3.webp', alt: 'Phase 4 Aerial 3' },
          { type: 'image', src: '/media/Phase 4/Photos and Videos_/bcw44.webp', alt: 'Bungalow View' },
          { type: 'image', src: '/media/Phase 4/Photos and Videos_/singa_phase-4.webp', alt: 'Phase 4 Entrance' },
          { type: 'image', src: '/media/Phase 4/Photos and Videos_/singapore_life_city_p4_1 (1).webp', alt: 'Street View' },
          { type: 'image', src: '/media/Phase 4/Photos and Videos_/singapore_life_city_p4_3.webp', alt: 'Garden View' },
          { type: 'image', src: '/media/Phase 4/Photos and Videos_/singapore_life_city_p4_4.webp', alt: 'Park Area' },
          { type: 'image', src: '/media/Phase 4/Photos and Videos_/singapore_life_city_p4_6.webp', alt: 'Wide Roads' },
          { type: 'image', src: '/media/Phase 4/Photos and Videos_/singapore_life_city_p4_7.webp', alt: 'Greenery' },
          { type: 'image', src: '/media/Phase 4/Photos and Videos_/singapore_life_city_p4_8.webp', alt: 'Modern Living' },
          { type: 'image', src: '/media/Phase 4/Photos and Videos_/singapore_life_city_p4_9.webp', alt: 'Infrastructure' },
          { type: 'image', src: '/media/Phase 4/Photos and Videos_/singapore_life_city_p4_10.webp', alt: 'Community' },
          { type: 'image', src: '/media/Phase 4/Photos and Videos_/singapore_life_city_p4_11.webp', alt: 'Lifestyle' },
          { type: 'image', src: '/media/Phase 4/Photos and Videos_/singapore_life_city_p4_12.webp', alt: 'Amenities' },
          { type: 'image', src: '/media/Phase 4/Photos and Videos_/singapore_life_city_p4_13.webp', alt: 'Peaceful Living' },
          { type: 'image', src: '/media/Phase 4/Photos and Videos_/singapore_life_city_p4_14.webp', alt: 'Future Ready' },
        ],
      },
    ],
  },
]

export function getPhaseIndex(slug: string) {
  return phases.findIndex((p) => p.slug === slug)
}

export function getAdjacentPhaseSlugs(slug: string) {
  const idx = getPhaseIndex(slug)
  return {
    prev: idx > 0 ? phases[idx - 1].slug : null,
    next: idx < phases.length - 1 ? phases[idx + 1].slug : null,
  }
}
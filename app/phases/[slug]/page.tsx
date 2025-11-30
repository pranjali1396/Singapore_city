import type { Metadata } from 'next'
import Link from 'next/link'
import { phases, getPhaseIndex, getAdjacentPhaseSlugs } from '@/data/phases'
import PhaseHeader from '@/components/PhaseHeader'
import PhaseCard from '@/components/PhaseCard'
import PhaseNav from '@/components/PhaseNav'

type Params = { slug: string }

export function generateMetadata({ params }: { params: Params }): Metadata {
  const phase = phases.find((p) => p.slug === params.slug)
  if (!phase) return {}
  return {
    title: phase.meta.seoTitle,
    description: phase.meta.seoDescription,
  }
}

export default function PhasePage({ params }: { params: Params }) {
  const phase = phases.find((p) => p.slug === params.slug)
  if (!phase) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-2xl font-semibold">Phase not found</h1>
        <p className="mt-2 text-gray-600">Please go back to the overview.</p>
        <Link href="/" className="mt-6 inline-block px-4 py-2 bg-gray-900 text-white rounded">Go Home</Link>
      </div>
    )
  }

  const total = phases.length
  const currentIndex = getPhaseIndex(phase.slug)
  const { prev, next } = getAdjacentPhaseSlugs(phase.slug)

  return (
    <div>
      <PhaseHeader
        name={phase.name}
        shortLabel={phase.shortLabel}
        description={phase.description}
        colorKey={phase.theme.colorKey}
      />

      {/* Progress indicator */}
      <div className="mb-8" role="status" aria-label={`Phase ${currentIndex + 1} of ${total}`}>
        <div className="flex items-center justify-center gap-3">
          <span className="text-sm font-medium">Phase {currentIndex + 1} of {total}</span>
          <div className="w-40 h-2 bg-gray-200 rounded overflow-hidden" aria-hidden>
            <div
              className={`h-full bg-${phase.theme.colorKey}`}
              style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-8">
        {phase.sections.map((section) => (
          <PhaseCard key={section.title} title={section.title} body={section.body} media={section.media} />
        ))}
      </div>

      {/* Navigation controls */}
      <PhaseNav prev={prev} next={next} />
    </div>
  )
}
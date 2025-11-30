export default function PhasesLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen bg-white">
      <a href="#phase-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-gray-900 text-white px-3 py-2 rounded">
        Skip to content
      </a>
      <div id="phase-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {children}
      </div>
    </section>
  )
}

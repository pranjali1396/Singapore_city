export default function Loading() {
  return (
    <div className="py-16" role="status" aria-busy="true" aria-live="polite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="motion-safe:animate-pulse space-y-6">
          <div className="h-6 w-40 bg-gray-200 rounded" />
          <div className="h-10 w-3/4 bg-gray-200 rounded" />
          <div className="h-5 w-2/3 bg-gray-200 rounded" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-40 bg-gray-200 rounded" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function ReviewsSkeleton() {
  return (
    <section className="w-full py-16 md:py-20 px-0 lg:px-10">
      <div className="px-6 md:px-0">
        <div className="flex justify-between items-center mb-12">
          <div className="h-10 w-64 bg-gray-200 animate-pulse" />
          <div className="flex gap-4">
            <div className="h-12 w-12 bg-gray-200 animate-pulse rounded" />
            <div className="h-12 w-12 bg-gray-200 animate-pulse rounded" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="p-6 rounded-lg bg-white shadow-md">
              <div className="h-6 w-48 bg-gray-200 animate-pulse mb-4" />
              <div className="h-24 w-full bg-gray-200 animate-pulse mb-6" />
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 animate-pulse" />
                <div className="h-6 w-32 bg-gray-200 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

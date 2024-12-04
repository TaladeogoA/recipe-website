export function LatestRecipesSkeleton() {
  return (
    <section className="w-full py-16 md:py-20 px-0 lg:px-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
          <div className="h-10 w-64 bg-gray-200 animate-pulse" />
          <div className="h-12 w-48 bg-gray-200 animate-pulse rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="aspect-[4/3] bg-gray-200 animate-pulse rounded-lg" />
              <div className="h-6 w-24 bg-gray-200 animate-pulse" />
              <div className="h-8 w-3/4 bg-gray-200 animate-pulse" />
              <div className="h-20 w-full bg-gray-200 animate-pulse" />
              <div className="flex gap-4">
                <div className="h-8 w-20 bg-gray-200 animate-pulse" />
                <div className="h-8 w-20 bg-gray-200 animate-pulse" />
                <div className="h-8 w-20 bg-gray-200 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

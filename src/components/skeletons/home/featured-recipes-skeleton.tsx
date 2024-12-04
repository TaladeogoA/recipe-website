export function FeaturedRecipesSkeleton() {
  return (
    <section className="w-full py-16 md:py-20 px-0 lg:px-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div className="h-10 w-64 bg-gray-200 animate-pulse" />
          <div className="hidden sm:flex gap-4">
            <div className="h-12 w-12 bg-gray-200 animate-pulse rounded" />
            <div className="h-12 w-12 bg-gray-200 animate-pulse rounded" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="aspect-[4/3] bg-gray-200 animate-pulse rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

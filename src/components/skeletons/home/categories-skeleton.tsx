export function CategoriesSkeleton() {
  return (
    <section className="w-full pt-10 pb-20 mt-10 px-0 lg:px-10">
      <div className="container mx-auto px-6">
        <div className="h-10 w-64 mx-auto mb-12 bg-gray-200 animate-pulse" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-40 h-40 bg-gray-200 animate-pulse rounded-lg mb-4" />
              <div className="h-[2px] w-12 bg-gray-200 animate-pulse mt-6 mb-4" />
              <div className="h-6 w-32 bg-gray-200 animate-pulse mb-2" />
              <div className="h-16 w-full bg-gray-200 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

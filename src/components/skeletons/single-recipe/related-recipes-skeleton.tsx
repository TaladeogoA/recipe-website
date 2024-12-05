export function RelatedRecipesSkeleton() {
  return (
    <section className="mt-8 md:mt-10 mb-20 bg-grey-200 px-6 pt-32 xl:px-32">
      <div className="flex justify-between items-center mb-12">
        <div className="h-8 w-48 bg-gray-200 animate-pulse" />
        <div className="h-10 w-32 bg-gray-200 animate-pulse" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="h-[400px] bg-gray-200 animate-pulse rounded-lg"
          />
        ))}
      </div>
    </section>
  );
}

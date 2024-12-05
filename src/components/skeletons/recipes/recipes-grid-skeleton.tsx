export function RecipesGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="flex flex-col gap-4">
          <div className="aspect-[4/3] bg-gray-200 animate-pulse rounded-lg" />
          <div className="h-6 w-3/4 bg-gray-200 animate-pulse" />
          <div className="h-16 w-full bg-gray-200 animate-pulse" />
          <div className="flex gap-4">
            <div className="h-8 w-20 bg-gray-200 animate-pulse" />
            <div className="h-8 w-20 bg-gray-200 animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
}

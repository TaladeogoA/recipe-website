export function RecipeGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="flex flex-col">
          <div className="aspect-[4/3] bg-gray-200 animate-pulse rounded-lg mb-4" />
          <div className="h-5 w-24 bg-gray-200 animate-pulse mb-2" />
          <div className="h-6 w-3/4 bg-gray-200 animate-pulse mb-2" />
          <div className="h-16 w-full bg-gray-200 animate-pulse mb-4" />
          <div className="flex gap-4">
            <div className="h-8 w-16 bg-gray-200 animate-pulse" />
            <div className="h-8 w-16 bg-gray-200 animate-pulse" />
            <div className="h-8 w-16 bg-gray-200 animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
}

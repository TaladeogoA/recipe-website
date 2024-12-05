export function RecipeDetailsSkeleton() {
  return (
    <div className="w-full lg:w-[65%] shadow-md -mt-16 md:-mt-32 bg-white p-6 md:p-12 min-h-max">
      <div className="h-12 w-3/4 bg-gray-200 animate-pulse mb-4" />
      <div className="h-20 w-full bg-gray-200 animate-pulse" />
      <div className="mt-8 space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-6 w-full bg-gray-200 animate-pulse" />
        ))}
      </div>
    </div>
  );
}

export function CategoryHeaderSkeleton() {
  return (
    <div className="flex flex-col gap-8 mb-12">
      <div className="h-10 w-3/4 bg-gray-200 animate-pulse mb-4" />
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/4">
          <div className="h-6 w-full bg-gray-200 animate-pulse mb-2" />
          <div className="h-6 w-3/4 bg-gray-200 animate-pulse mb-2" />
          <div className="h-6 w-1/2 bg-gray-200 animate-pulse" />
        </div>
        <div className="w-full lg:w-3/4">
          <div className="h-10 w-full bg-gray-200 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

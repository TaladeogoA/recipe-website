export function CommunitySkeleton() {
  return (
    <section className="mt-52 flex flex-col lg:flex-row gap-10 lg:items-center px-6 lg:pl-20 bg-brand-light lg:bg-transparent">
      <div className="w-full lg:w-1/2 py-10 lg:py-20 flex flex-col gap-7">
        <div className="h-10 w-3/4 bg-gray-200 animate-pulse mb-6" />
        <div className="h-32 w-full bg-gray-200 animate-pulse mb-4" />
        <div className="h-32 w-full bg-gray-200 animate-pulse" />
      </div>

      <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px]">
        <div className="absolute right-0 top-0 w-full h-full bg-brand-light hidden lg:block lg:w-[80%]" />

        {/* Mobile Skeleton */}
        <div className="block lg:hidden w-full overflow-hidden max-h-full">
          <div className="aspect-square bg-gray-200 animate-pulse w-full" />
        </div>

        {/* Desktop Skeletons */}
        <div className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 w-[70%]">
          <div className="aspect-square bg-gray-200 animate-pulse w-full" />
        </div>
        <div className="hidden lg:block absolute right-48 bottom-28 translate-y-1/4 w-[50%]">
          <div className="aspect-[4/3] bg-gray-200 animate-pulse w-full" />
        </div>
      </div>
    </section>
  );
}

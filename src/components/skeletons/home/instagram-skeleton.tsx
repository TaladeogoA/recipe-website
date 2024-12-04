export function InstagramSkeleton() {
  return (
    <section className="w-full py-16 px-0 lg:px-10 md:py-20">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div className="h-10 w-64 bg-gray-200 animate-pulse" />
          <div className="h-12 w-32 bg-gray-200 animate-pulse rounded" />
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square bg-gray-200 animate-pulse
                w-[calc(50%-8px)] sm:w-40 xl:w-56
                ${i === 4 ? "hidden sm:block" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

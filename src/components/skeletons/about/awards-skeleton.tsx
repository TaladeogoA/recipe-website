export function AwardsSkeleton() {
  return (
    <section className="w-full min-h-screen py-16 md:py-20 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-2/5">
          <div className="h-10 w-64 bg-gray-200 animate-pulse mb-6" />
          <div className="h-24 w-full bg-gray-200 animate-pulse" />
        </div>
        <div className="w-full lg:w-3/5">
          <div className="flex flex-col gap-20">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="h-8 w-16 bg-gray-200 animate-pulse" />
                <div>
                  <div className="h-8 w-3/4 bg-gray-200 animate-pulse mb-2" />
                  <div className="h-16 w-full bg-gray-200 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

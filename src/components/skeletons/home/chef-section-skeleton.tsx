export function ChefSectionSkeleton() {
  return (
    <section className="w-full bg-grey-100 py-20 px-0 lg:px-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-[60%] relative">
            <div className="aspect-[3/4] bg-gray-200 animate-pulse" />
            <div className="md:w-[80%] bg-white p-8 md:p-10 mt-4 md:mt-0">
              <div className="h-8 w-48 bg-gray-200 animate-pulse mb-2" />
              <div className="h-6 w-64 bg-gray-200 animate-pulse mb-6" />
              <div className="flex gap-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

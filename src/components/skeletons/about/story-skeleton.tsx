export function StorySkeleton() {
  return (
    <section className="min-h-screen w-full flex flex-col lg:flex-row gap-6 lg:gap-10 mt-20 lg:mt-36 px-6 lg:px-20">
      <div className="w-full lg:w-[50%] flex flex-col gap-6 lg:gap-10 lg:mt-24">
        <div className="h-[300px] lg:h-[35%] bg-gray-200 animate-pulse rounded" />
        <div className="hidden lg:block h-[300px] lg:flex-grow bg-gray-200 animate-pulse rounded" />
      </div>
      <div className="w-full lg:w-[50%] flex flex-col">
        <div className="h-[300px] lg:flex-grow bg-gray-200 animate-pulse rounded" />
        <div className="w-full py-10 lg:py-20 lg:px-10 flex flex-col gap-7">
          <div className="h-10 w-48 bg-gray-200 animate-pulse" />
          <div className="h-32 w-full bg-gray-200 animate-pulse" />
          <div className="h-32 w-full bg-gray-200 animate-pulse" />
        </div>
      </div>
    </section>
  );
}

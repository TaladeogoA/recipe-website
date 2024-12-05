export function HeroSectionSkeleton() {
  return (
    <section className="w-full py-16 md:py-20 px-10 md:px-14">
      <div className="container px-0">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 mb-12">
          <div className="h-10 w-48 bg-gray-200 animate-pulse" />
          <div className="h-20 w-full md:w-[550px] bg-gray-200 animate-pulse" />
        </div>
      </div>
    </section>
  );
}

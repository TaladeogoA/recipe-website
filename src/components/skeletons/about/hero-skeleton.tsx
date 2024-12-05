export function HeroSkeleton() {
  return (
    <section className="flex flex-col items-center gap-6 justify-center mt-28 max-w-2xl mx-auto text-center px-6">
      <div className="h-16 w-3/4 bg-gray-200 animate-pulse mb-4" />
      <div className="h-24 w-full bg-gray-200 animate-pulse mb-6" />
      <div className="h-12 w-40 bg-gray-200 animate-pulse rounded" />
    </section>
  );
}

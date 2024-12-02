import { Skeleton } from "@/components/ui/skeleton";

export function RecipesPageSkeleton() {
  return (
    <div>
      <section className="w-full py-16 md:py-20 px-10 md:px-14">
        <div className="container px-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 mb-12">
            <Skeleton className="h-12 w-64" />
            <Skeleton className="h-16 w-full max-w-[550px]" />
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-[60%] relative">
              <Skeleton className="aspect-[16/10] w-full" />
            </div>
            <div className="w-full md:w-[40%] p-8 md:p-10">
              <Skeleton className="h-[2px] w-20 mb-4" />
              <Skeleton className="h-8 w-3/4 mb-4" />
              <Skeleton className="h-24 w-full mb-8" />
              <Skeleton className="h-[2px] w-full mb-6" />
              <div className="flex justify-between">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-6 w-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-10 md:px-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 mb-12">
          <Skeleton className="h-12 w-64" />
          <div className="flex flex-row flex-wrap gap-4">
            {[...Array(7)].map((_, i) => (
              <Skeleton key={i} className="h-10 w-24" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="flex flex-col">
              <Skeleton className="aspect-[4/3] w-full mb-4" />
              <Skeleton className="h-[2px] w-12 mb-4" />
              <Skeleton className="h-8 w-3/4 mb-2" />
              <Skeleton className="h-20 w-full mb-4" />
              <div className="flex justify-between">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-6 w-16" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 gap-4">
          <Skeleton className="h-12 w-32" />
          <Skeleton className="h-12 w-32" />
          <Skeleton className="h-12 w-32" />
        </div>
      </section>
    </div>
  );
}

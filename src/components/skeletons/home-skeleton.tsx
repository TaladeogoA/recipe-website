import { Flex } from "@/components/layouts";
import { Skeleton } from "@/components/ui/skeleton";

export function HomeSkeleton() {
  return (
    <div>
      <Flex className="w-full min-h-screen h-full flex-col md:flex-row bg-white">
        <div className="w-full md:w-[45%] px-6 md:px-14 flex flex-col pb-10 md:pb-30 mt-16 md:mt-[18%]">
          <Skeleton className="h-[2px] w-32 mb-8 md:mb-12" />
          <Skeleton className="h-12 w-full max-w-lg mb-4" />
          <Skeleton className="h-20 w-full max-w-lg mb-6 md:mb-10" />
          <div className="flex gap-4">
            <Skeleton className="h-12 w-36" />
            <Skeleton className="h-12 w-36" />
          </div>
        </div>

        <div className="w-full gap-5 overflow-hidden relative left-0 right-0 md:flex hidden">
          <div className="flex flex-col gap-5 flex-1">
            <Skeleton className="aspect-[4/3] w-full" />
            <Skeleton className="aspect-[4/3] w-full" />
          </div>
          <div className="flex flex-col gap-5 flex-1">
            <Skeleton className="aspect-[4/3] w-full" />
            <Skeleton className="aspect-[4/3] w-full" />
          </div>
        </div>
      </Flex>

      <section className="w-full pt-10 pb-20 mt-10 lg:mt-0 px-0 lg:px-10">
        <div className="container mx-auto px-6">
          <Skeleton className="h-10 w-64 mx-auto mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <Skeleton className="w-40 h-40 rounded-lg mb-4" />
                <Skeleton className="h-[2px] w-12 mt-6 mb-4" />
                <Skeleton className="h-6 w-32 mb-2" />
                <Skeleton className="h-4 w-48" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-20 px-0 lg:px-10">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <Skeleton className="h-10 w-64" />
            <div className="flex gap-4">
              <Skeleton className="h-12 w-12" />
              <Skeleton className="h-12 w-12" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[...Array(2)].map((_, i) => (
              <Skeleton key={i} className="aspect-[16/10] w-full" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

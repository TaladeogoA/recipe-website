import { Flex } from "@/components/layouts";

export function HeroSkeleton() {
  return (
    <Flex
      className="w-full min-h-screen h-full flex-col md:flex-row bg-white"
      align="stretch"
    >
      <div className="w-full md:w-[45%] px-6 md:px-14 flex flex-col pb-10 md:pb-30 mt-16 md:mt-[18%]">
        <div className="h-[2px] w-32 mb-8 md:mb-12 bg-gray-200 animate-pulse" />
        <div className="h-16 w-3/4 mb-4 bg-gray-200 animate-pulse" />
        <div className="h-24 w-full mb-6 md:mb-10 bg-gray-200 animate-pulse" />
        <div className="flex gap-4">
          <div className="h-12 w-40 bg-gray-200 animate-pulse rounded" />
          <div className="h-12 w-32 bg-gray-200 animate-pulse rounded" />
        </div>
      </div>

      <div className="w-full gap-5 overflow-hidden relative hidden md:grid md:grid-cols-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="aspect-[4/3] bg-gray-200 animate-pulse" />
        ))}
      </div>
    </Flex>
  );
}

import { Text } from "@/components/custom-ui/text";
import { HeroSectionSkeleton } from "@/components/skeletons/recipes";

interface HeroSectionProps {
  isLoading?: boolean;
}

export function HeroSection({ isLoading }: HeroSectionProps) {
  if (isLoading) return <HeroSectionSkeleton />;

  return (
    <section className="w-full pt-16 md:pt-20 pb-10 px-10 md:px-14">
      <div className="container px-0">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 mb-12">
          <Text variant="h1">Our Recipes</Text>
          <Text className="text-gray-600 max-w-[550px] md:text-center">
            Explore our collection of tried and tested recipes, from quick
            weekday meals to celebratory feasts.
          </Text>
        </div>
      </div>
    </section>
  );
}

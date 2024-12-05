import { Text } from "@/components/custom-ui/text";
import { CategoryTabs } from "@/components/recipes/category-tabs";
import { CategoryHeaderSkeleton } from "@/components/skeletons/category";

interface CategoryHeaderProps {
  slug: string;
  description: string;
  isLoading: boolean;
}

export function CategoryHeader({
  slug,
  description,
  isLoading,
}: CategoryHeaderProps) {
  if (isLoading) {
    return <CategoryHeaderSkeleton />;
  }

  return (
    <div className="flex flex-col gap-8 mb-12">
      <Text variant="h1" className="capitalize">
        {slug.replace(/-/g, " ")}
      </Text>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/4">
          <Text className="text-gray-600">{description}</Text>
        </div>
        <div className="w-full lg:w-3/4">
          <CategoryTabs />
        </div>
      </div>
    </div>
  );
}

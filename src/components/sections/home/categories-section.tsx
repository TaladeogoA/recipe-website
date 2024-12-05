import { Text } from "@/components/custom-ui/text";
import { RecipeCategory } from "@/types/recipe";
import Image from "next/image";
import Link from "next/link";

interface CategoriesSectionProps {
  categories: RecipeCategory[];
  isLoading: boolean;
}

export function CategoriesSection({
  categories,
  isLoading,
}: CategoriesSectionProps) {
  return (
    <section className="w-full pt-10 pb-20 mt-10 px-0 lg:px-10">
      <div className="container mx-auto px-6">
        <Text variant="h2" className="text-center mb-12">
          Browse by Category
        </Text>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {isLoading
            ? Array(4)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-40 h-40 bg-gray-200 rounded-lg mb-4 animate-pulse" />
                    <div className="h-[2px] w-12 bg-gray-200 animate-pulse mt-6 mb-4" />
                    <div className="h-6 w-32 bg-gray-200 animate-pulse mb-2" />
                    <div className="h-16 w-full bg-gray-200 animate-pulse" />
                  </div>
                ))
            : categories?.slice(0, 4).map((category) => (
                <Link
                  href={`/categories/${category.slug}`}
                  key={category._id}
                  className="group hover:scale-95 transition-transform duration-200"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-40 h-40 bg-brand-light rounded-lg mb-4 flex items-center justify-center group-hover:bg-brand-light/80 transition-colors">
                      <Image
                        src={category.icon}
                        alt={category.title}
                        width={96}
                        height={96}
                        className="text-brand-primary"
                        unoptimized={category.icon.endsWith(".svg")}
                        priority={false}
                      />
                    </div>
                    <div className="h-[2px] bg-brand-primary w-12 mt-6 mb-4" />
                    <Text variant="h3" className="mb-2">
                      {category.title}
                    </Text>
                    <Text className="text-gray-600">
                      {category.description}
                    </Text>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </section>
  );
}

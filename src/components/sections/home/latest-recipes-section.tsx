import { SecondaryButton } from "@/components/custom-ui/secondary-button";
import { Text } from "@/components/custom-ui/text";
import { RecipeCard } from "@/components/recipes/recipe-card";
import { Recipe } from "@/types/recipe";
import Link from "next/link";

interface LatestRecipesSectionProps {
  recipes: Recipe[];
  isLoading: boolean;
}

export function LatestRecipesSection({
  recipes,
  isLoading,
}: LatestRecipesSectionProps) {
  return (
    <section className="w-full py-16 md:py-20 px-0 lg:px-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
          <Text variant="h2">Browse our latest recipes</Text>
          <Link href="/recipes">
            <SecondaryButton>Browse All Recipes</SecondaryButton>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {isLoading
            ? [...Array(6)].map((_, index) => (
                <div key={index} className="flex flex-col">
                  <div className="aspect-[4/3] bg-gray-200 animate-pulse rounded-lg mb-4" />
                  <div className="h-5 w-24 bg-gray-200 animate-pulse mb-2" />
                  <div className="h-6 w-3/4 bg-gray-200 animate-pulse mb-2" />
                  <div className="h-16 w-full bg-gray-200 animate-pulse mb-4" />
                  <div className="flex gap-4">
                    <div className="h-8 w-16 bg-gray-200 animate-pulse" />
                    <div className="h-8 w-16 bg-gray-200 animate-pulse" />
                    <div className="h-8 w-16 bg-gray-200 animate-pulse" />
                  </div>
                </div>
              ))
            : recipes?.map((recipe) => (
                <RecipeCard
                  key={recipe._id}
                  slug={recipe.slug}
                  title={recipe.title}
                  description={recipe.description}
                  tag={recipe.categories[0]?.title}
                  serving={recipe.servings}
                  prepTime={recipe.prepTime}
                  difficulty={recipe.difficulty}
                  image={recipe.mainImage.asset.url}
                  imageAlt={recipe.mainImage.alt || recipe.title}
                  priority={false}
                />
              ))}
        </div>
      </div>
    </section>
  );
}

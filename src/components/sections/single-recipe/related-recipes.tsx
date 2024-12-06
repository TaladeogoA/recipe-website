import { SecondaryButton } from "@/components/custom-ui/secondary-button";
import { Text } from "@/components/custom-ui/text";
import { RecipeCard } from "@/components/recipes/recipe-card";
import { RelatedRecipesSkeleton } from "@/components/skeletons/single-recipe";
import { Recipe } from "@/types/recipe";
import Link from "next/link";

interface RelatedRecipesProps {
  currentSlug: string;
  recipes?: Recipe[];
  isLoading?: boolean;
}

const RelatedRecipes = ({
  currentSlug,
  recipes,
  isLoading,
}: RelatedRecipesProps) => {
  if (isLoading) return <RelatedRecipesSkeleton />;

  return (
    <section className="mt-8 md:mt-10 mb-20 px-6 pt-32 xl:px-32">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 md:mb-12">
        <Text variant="h2">Latest recipes</Text>
        <Link href="/recipes">
          <SecondaryButton>Browse All Recipes</SecondaryButton>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
        {recipes
          ?.filter((recipe) => recipe.slug !== currentSlug)
          .slice(0, 3)
          .map((recipe) => (
            <RecipeCard
              key={recipe._id}
              title={recipe.title}
              description={recipe.description}
              tag={recipe.categories[0]?.title}
              serving={recipe.servings}
              prepTime={recipe.prepTime}
              difficulty={recipe.difficulty}
              image={recipe.mainImage.asset.url}
              imageAlt={recipe.mainImage.alt || recipe.title}
              slug={recipe.slug}
            />
          ))}
      </div>
    </section>
  );
};

export default RelatedRecipes;

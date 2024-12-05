import { RecipeCard } from "@/components/recipes/recipe-card";
import { RecipeGridSkeleton } from "@/components/skeletons/category/recipe-grid-skeleton";
import { Recipe } from "@/types/recipe";

interface RecipeGridProps {
  recipes: Recipe[];
  isLoading: boolean;
}

export function RecipeGrid({ recipes, isLoading }: RecipeGridProps) {
  if (isLoading) {
    return <RecipeGridSkeleton />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {recipes.map((recipe, index) => (
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
          priority={index < 3}
        />
      ))}
    </div>
  );
}

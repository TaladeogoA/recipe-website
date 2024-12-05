import { RecipeCard } from "@/components/recipes/recipe-card";
import { RecipesGridSkeleton } from "@/components/skeletons/recipes";
import { Recipe } from "@/types/recipe";

interface RecipesGridProps {
  recipes: Recipe[];
  isLoading?: boolean;
}

export function RecipesGrid({ recipes, isLoading }: RecipesGridProps) {
  if (isLoading) return <RecipesGridSkeleton />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {recipes?.map((recipe) => (
        <RecipeCard
          slug={recipe.slug}
          key={recipe._id}
          title={recipe.title}
          description={recipe.description}
          tag={recipe.categories[0]?.title}
          serving={recipe.servings}
          prepTime={recipe.prepTime}
          difficulty={recipe.difficulty}
          image={recipe.mainImage.asset.url}
          imageAlt={recipe.mainImage.alt || recipe.title}
        />
      ))}
    </div>
  );
}

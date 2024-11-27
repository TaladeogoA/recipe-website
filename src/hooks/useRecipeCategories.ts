import { getRecipeCategories } from "@/lib/queries/recipe";
import { RecipeCategory } from "@/types/recipe";
import { useQuery } from "@tanstack/react-query";

export function useRecipeCategories() {
  return useQuery<RecipeCategory[]>({
    queryKey: ["recipeCategories"],
    queryFn: getRecipeCategories,
  });
}

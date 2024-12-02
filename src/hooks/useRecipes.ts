import {
  getAllRecipes,
  getFeaturedRecipes,
  getLatestRecipes,
  getRecipesByCategory,
} from "@/lib/queries/recipe";
import { Recipe } from "@/types/recipe";
import { useQuery } from "@tanstack/react-query";

export function useFeaturedRecipes() {
  return useQuery<Recipe[]>({
    queryKey: ["featuredRecipes"],
    queryFn: getFeaturedRecipes,
  });
}

export function useLatestRecipes() {
  return useQuery<Recipe[]>({
    queryKey: ["latestRecipes"],
    queryFn: getLatestRecipes,
  });
}

export function useRecipesByCategory(category: string | "all") {
  return useQuery<Recipe[]>({
    queryKey: ["recipes", category],
    queryFn: () =>
      category === "all" ? getAllRecipes() : getRecipesByCategory(category),
    enabled: !!category,
  });
}

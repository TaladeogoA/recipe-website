import {
  getAllRecipes,
  getFeaturedRecipes,
  getLatestRecipes,
  getRecipeBySlug,
  getRecipesByCategory,
} from "@/lib/queries/recipe";
import { PaginatedResponse, Recipe } from "@/types/recipe";
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

export function useRecipesByCategory(
  category: string | "all",
  page: number = 1,
  itemsPerPage: number = 9
) {
  return useQuery<PaginatedResponse<Recipe>>({
    queryKey: ["recipes", category, page],
    queryFn: () =>
      category === "all"
        ? getAllRecipes(page, itemsPerPage)
        : getRecipesByCategory(category, page, itemsPerPage),
    enabled: !!category,
  });
}

export function useRecipe(slug: string) {
  return useQuery({
    queryKey: ["recipe", slug],
    queryFn: () => getRecipeBySlug(slug),
    enabled: !!slug,
  });
}

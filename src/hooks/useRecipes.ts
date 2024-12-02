import { getFeaturedRecipes, getLatestRecipes } from "@/lib/queries/recipe";
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

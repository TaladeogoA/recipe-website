import { useDebounce } from "@/hooks/useDebounce";
import { searchRecipes } from "@/lib/queries/recipe";
import { useQuery } from "@tanstack/react-query";

export function useSearchRecipes(searchTerm: string) {
  const debouncedSearch = useDebounce(searchTerm, 300);

  return useQuery({
    queryKey: ["recipes", "search", debouncedSearch],
    queryFn: () => searchRecipes(debouncedSearch),
    enabled: debouncedSearch.length > 2,
  });
}

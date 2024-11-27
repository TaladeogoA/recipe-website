import { client } from "@/lib/client";
import { RecipeCategory } from "@/types/recipe";

export async function getRecipeCategories(): Promise<RecipeCategory[]> {
  return client.fetch(
    `*[_type == "recipeCategory"] {
      _id,
      title,
      slug,
      description
    }`
  );
}

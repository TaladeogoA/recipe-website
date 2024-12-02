import { client } from "@/lib/client";
import { PaginatedResponse, Recipe, RecipeCategory } from "@/types/recipe";

export async function getRecipeCategories(): Promise<RecipeCategory[]> {
  return client.fetch(
    `*[_type == "recipeCategory"] {
      _id,
      title,
      slug,
      description,
      "icon": icon.asset->url
    }`
  );
}

export async function getFeaturedRecipes(): Promise<Recipe[]> {
  return client.fetch(`
    *[_type == "recipe" && featured == true] {
      _id,
      title,
      slug,
      description,
      "mainImage": {
        "asset": {
          "url": mainImage.asset->url
        },
        "alt": mainImage.alt
      },
      prepTime,
      cookTime,
      servings,
      difficulty,
      "categories": categories[]-> {
        _id,
        title,
        slug
      }
    }
  `);
}

export async function getLatestRecipes(): Promise<Recipe[]> {
  return client.fetch(`
    *[_type == "recipe"] | order(publishedAt desc)[0...6] {
      _id,
      title,
      slug,
      description,
      "mainImage": {
        "asset": {
          "url": mainImage.asset->url
        },
        "alt": mainImage.alt
      },
      prepTime,
      cookTime,
      servings,
      difficulty,
      "categories": categories[]-> {
        _id,
        title,
        slug
      }
    }
  `);
}

export async function getRecipesByCategory(
  category: string,
  page: number = 1,
  itemsPerPage: number = 9
): Promise<PaginatedResponse<Recipe>> {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  return client.fetch(
    `{
    "items": *[_type == "recipe" && $category in categories[]->title] | order(publishedAt desc)[$start...$end] {
      _id,
      title,
      slug,
      description,
      "mainImage": { "asset": { "url": mainImage.asset->url }, "alt": mainImage.alt },
      prepTime,
      servings,
      difficulty,
      "categories": categories[]->{ _id, title, slug }
    },
    "total": count(*[_type == "recipe" && $category in categories[]->title])
  }`,
    { category, start, end }
  );
}

export async function getAllRecipes(
  page: number = 1,
  itemsPerPage: number = 9
): Promise<PaginatedResponse<Recipe>> {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  return client.fetch(
    `{
    "items": *[_type == "recipe"] | order(publishedAt desc)[$start...$end] {
      _id,
      title,
      slug,
      description,
      "mainImage": {
        "asset": { "url": mainImage.asset->url },
        "alt": mainImage.alt
      },
      prepTime,
      servings,
      difficulty,
      "categories": categories[]->{ _id, title, slug }
    },
    "total": count(*[_type == "recipe"])
  }`,
    { start, end }
  );
}

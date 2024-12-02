import { client } from "@/lib/client";
import { Recipe, RecipeCategory } from "@/types/recipe";

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
  category: string
): Promise<Recipe[]> {
  return client.fetch(
    `
    *[_type == "recipe" && $category in categories[]->title] {
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
  `,
    { category }
  );
}

export async function getAllRecipes(): Promise<Recipe[]> {
  return client.fetch(`
    *[_type == "recipe"] | order(publishedAt desc) {
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

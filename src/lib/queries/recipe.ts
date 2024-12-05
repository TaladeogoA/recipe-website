import { client } from "@/lib/client";
import { PaginatedResponse, Recipe, RecipeCategory } from "@/types/recipe";

const THUMBNAIL_SIZE = "?w=400&h=300&fit=crop&auto=format&q=80";
const FEATURED_SIZE = "?w=800&h=600&fit=crop&auto=format&q=85";
const DETAIL_SIZE = "?w=1200&h=800&fit=crop&auto=format&q=90";
const INSTRUCTION_SIZE = "?w=600&h=400&fit=crop&auto=format&q=80";

export async function getRecipeCategories(): Promise<RecipeCategory[]> {
  return client.fetch(`
    *[_type == "recipeCategory"] {
      _id,
      title,
      "slug": slug.current,
      description,
      "icon": icon.asset->url
    }
  `);
}

export async function getFeaturedRecipes(): Promise<Recipe[]> {
  return client.fetch(`
    *[_type == "recipe" && featured == true] {
      _id,
      title,
      "slug": slug.current,
      description,
      "mainImage": {
        "asset": {
          "url": mainImage.asset->url + "${FEATURED_SIZE}"
        },
        "alt": mainImage.alt
      },
      prepTime,
      cookTime,
      servings,
      difficulty,
      "categories": categories[]->{
        _id,
        title,
        "slug": slug.current
      }
    }
  `);
}

export async function getLatestRecipes(): Promise<Recipe[]> {
  return client.fetch(`
    *[_type == "recipe"] | order(publishedAt desc)[0...6] {
      _id,
      title,
      "slug": slug.current,
      description,
      "mainImage": {
        "asset": {
          "url": mainImage.asset->url + "${THUMBNAIL_SIZE}"
        },
        "alt": mainImage.alt
      },
      prepTime,
      cookTime,
      servings,
      difficulty,
      "categories": categories[]->{
        _id,
        title,
        "slug": slug.current
      }
    }
  `);
}

export async function getRecipesByCategory(
  categorySlug: string,
  page: number = 1,
  itemsPerPage: number = 9
): Promise<PaginatedResponse<Recipe>> {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  return client.fetch(
    `{
    "items": *[_type == "recipe" && $categorySlug in categories[]->slug.current][$start...$end] {
      _id,
      title,
      "slug": slug.current,
      description,
      "mainImage": {
        "asset": {
          "url": mainImage.asset->url + "${THUMBNAIL_SIZE}"
        },
        "alt": mainImage.alt
      },
      prepTime,
      servings,
      difficulty,
      "categories": categories[]->{
        _id,
        title,
        "slug": slug.current
      }
    },
    "total": count(*[_type == "recipe" && $categorySlug in categories[]->slug.current])
  }`,
    { categorySlug, start, end }
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
      "slug": slug.current,
      description,
      "mainImage": {
        "asset": {
          "url": mainImage.asset->url + "${THUMBNAIL_SIZE}"
        },
        "alt": mainImage.alt
      },
      prepTime,
      servings,
      difficulty,
      "categories": categories[]->{
        _id,
        title,
        "slug": slug.current
      }
    },
    "total": count(*[_type == "recipe"])
  }`,
    { start, end }
  );
}

export async function getRecipeBySlug(slug: string): Promise<Recipe> {
  return client.fetch(
    `
    *[_type == "recipe" && slug.current == $slug][0] {
      _id,
      title,
      description,
      "mainImage": {
        "asset": {
          "url": mainImage.asset->url + "${DETAIL_SIZE}"
        },
        "alt": mainImage.alt
      },
      prepTime,
      cookTime,
      servings,
      difficulty,
      ingredients[]{
        amount,
        notes,
        "ingredient": ingredient->name
      },
      instructions[]{
        step,
        description,
        "image": image.asset->url + "${INSTRUCTION_SIZE}"
      },
      conclusion,
      "categories": categories[]->{
        _id,
        title,
        "slug": slug.current
      }
    }
  `,
    { slug }
  );
}

export async function searchRecipes(searchTerm: string): Promise<Recipe[]> {
  const sanitizedTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  return client.fetch(
    `
    *[_type == "recipe" && (
      title match "*${sanitizedTerm}*" ||
      description match "*${sanitizedTerm}*" ||
      categories[]->title match "*${sanitizedTerm}*"
    )][0...12] {
      _id,
      title,
      "slug": slug.current,
      description,
      "mainImage": {
        "asset": {
          "url": mainImage.asset->url + "${THUMBNAIL_SIZE}"
        },
        "alt": mainImage.alt
      },
      prepTime,
      servings,
      difficulty,
      "categories": categories[]->{
        _id,
        title,
        "slug": slug.current
      }
    }
  `,
    { searchTerm: sanitizedTerm }
  );
}

export async function getCategoryBySlug(
  slug: string
): Promise<RecipeCategory | null> {
  return client.fetch(
    `
    *[_type == "recipeCategory" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      description,
      "icon": icon.asset->url
    }
  `,
    { slug }
  );
}

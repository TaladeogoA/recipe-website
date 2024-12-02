import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "<YOUR_PROJECT_ID>", // Replace with your Sanity project ID
  dataset: "<YOUR_DATASET>", // Usually "production"
  apiVersion: "2024-01-01",
  token: "<YOUR_API_TOKEN>", // Add write token from Sanity manage dashboard
  useCdn: false,
});

/**
 * Example Data Structures
 * Uncomment and modify these examples when importing data
 */

// Example: Ingredients (requires category reference)
/*
const ingredients = [
  {
    name: "Black Pepper",
    notes: "Freshly ground for best flavor",
  },
];
*/

// Example: Recipe (requires category and ingredient references)
/*
const recipes = [
  {
    title: "Spaghetti Aglio e Olio",
    description: "Classic Italian pasta with garlic and olive oil",
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      {
        ingredient: "Spaghetti",
        amount: "400g",
        notes: "Al dente"
      }
    ],
    instructions: [
      {
        step: 1,
        description: "Cook pasta according to package instructions"
      }
    ],
    categories: ["Italian Cuisine", "Pasta Dishes"],
    conclusion: "Spaghetti Aglio e Olio is a quick and easy dish that brings out the best flavors of garlic and olive oil. Serve with a sprinkle of Parmesan and a side salad for a complete meal."
  }
];
*/

async function importDocuments(documents) {
  try {
    console.log("Attempting to import:", JSON.stringify(documents, null, 2));

    const transaction = client.transaction();

    documents.forEach((doc) => {
      transaction.create(doc);
    });

    const result = await transaction.commit();
    console.log("Successfully imported documents:", result);
    return result;
  } catch (error) {
    console.error("Import failed:", error);
    throw error;
  }
}

async function getIngredientCategories() {
  const query = '*[_type == "ingredientCategory"]{_id, title}';
  const categories = await client.fetch(query);
  console.log("Found categories:", categories);
  return categories;
}

async function getRecipeCategories() {
  const query = '*[_type == "recipeCategory"]{_id, title}';
  return await client.fetch(query);
}

async function getIngredientsByNames(ingredientNames) {
  const query = '*[_type == "ingredient" && name in $names]{_id, name}';
  return await client.fetch(query, { names: ingredientNames });
}

async function importIngredients(ingredientCategory, newIngredients) {
  try {
    const categories = await getIngredientCategories();

    // Find category ID
    const foundCategory = categories.find((cat) =>
      cat.title.toLowerCase().includes(ingredientCategory.toLowerCase())
    );

    if (!foundCategory) {
      throw new Error(`Category '${ingredientCategory}' not found`);
    }

    // Map ingredients with proper structure
    const formattedIngredients = newIngredients.map((ingredient) => ({
      _id: `ingredient-${ingredient.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")}`,
      _type: "ingredient",
      name: ingredient.name,
      category: {
        _type: "reference",
        _ref: foundCategory._id,
      },
      notes: ingredient.notes || "",
    }));

    // Import and return results
    const result = await importDocuments(formattedIngredients);
    console.log(
      `Successfully imported ${formattedIngredients.length} ingredients`
    );
    return result;
  } catch (error) {
    console.error("Failed to import ingredients:", error);
    throw error;
  }
}

async function importRecipes(recipes) {
  try {
    const categories = await getRecipeCategories();
    console.log("Found categories:", categories);
    const allIngredientNames = recipes.flatMap((recipe) =>
      recipe.ingredients.map((i) => i.ingredient)
    );
    const ingredients = await getIngredientsByNames(allIngredientNames);
    console.log("Found ingredients:", ingredients);

    const formattedRecipes = recipes.map((recipe) => ({
      _id: `recipe-${recipe.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")}`,
      _type: "recipe",
      title: recipe.title,
      slug: {
        _type: "slug",
        current: recipe.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, ""),
      },
      description: recipe.description,
      prepTime: recipe.prepTime,
      cookTime: recipe.cookTime,
      servings: recipe.servings,
      difficulty: recipe.difficulty,
      ingredients: recipe.ingredients.map((ing, index) => ({
        _key: `ingredient-${index}`,
        _type: "object",
        ingredient: {
          _type: "reference",
          _ref: ingredients.find((i) => i.name === ing.ingredient)?._id,
        },
        amount: ing.amount,
        notes: ing.notes,
      })),
      instructions: recipe.instructions.map((inst, index) => ({
        _key: `instruction-${index}`,
        _type: "object",
        step: inst.step,
        description: inst.description,
      })),
      conclusion: recipe.conclusion || "",
      categories: recipe.categories.map((cat, index) => ({
        _key: `category-${index}`,
        _type: "reference",
        _ref: categories.find((c) => c.title === cat)?._id,
      })),
      publishedAt: recipe.publishedAt || new Date().toISOString(),
    }));

    formattedRecipes.forEach((recipe) => {
      if (
        !recipe.title ||
        !recipe.description ||
        !recipe.prepTime ||
        !recipe.cookTime ||
        !recipe.servings ||
        !recipe.difficulty
      ) {
        throw new Error(`Missing required fields for recipe: ${recipe.title}`);
      }
    });

    const result = await importDocuments(formattedRecipes);
    console.log(`Successfully imported ${formattedRecipes.length} recipes`);
    return result;
  } catch (error) {
    console.error("Failed to import recipes:", error);
    throw error;
  }
}

export { importIngredients, importRecipes };
// call import function as needed then run the script node src/lib/scripts/import-data.js in the terminal

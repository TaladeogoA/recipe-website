"use client";
import { SecondaryButton } from "@/components/custom-ui/secondary-button";
import { Text } from "@/components/custom-ui/text";
import { Page } from "@/components/layouts";
import MainRecipeCard from "@/components/recipes/main-recipe-card";
import { RecipeCard } from "@/components/recipes/recipe-card";
import { RecipesPageSkeleton } from "@/components/skeletons/recipes-page-skeleton";
import { useRecipeCategories } from "@/hooks/useRecipeCategories";
import { useFeaturedRecipes, useRecipesByCategory } from "@/hooks/useRecipes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const RecipesPage = () => {
  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 9;

  const pathname = usePathname();
  const currentCategory =
    pathname === "/recipes" ? "all" : pathname.split("/").pop() || "all";

  const { data: categories, isLoading: categoriesLoading } =
    useRecipeCategories();
  const { data: featuredRecipes, isLoading: featuredLoading } =
    useFeaturedRecipes();
  const { data: recipesData, isLoading: recipesLoading } = useRecipesByCategory(
    currentCategory,
    page,
    ITEMS_PER_PAGE
  );

  const recipes = recipesData?.items;
  const totalPages = Math.ceil((recipesData?.total || 0) / ITEMS_PER_PAGE);

  if (categoriesLoading || featuredLoading || recipesLoading) {
    return <RecipesPageSkeleton />;
  }

  return (
    <Page>
      <section className="w-full py-16 md:py-20 px-10 md:px-14">
        <div className="container px-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 mb-12">
            <Text variant="h1">Our Recipes</Text>
            <Text className="text-gray-600 max-w-[550px] md:text-center">
              Explore our collection of tried and tested recipes, from quick
              weekday meals to celebratory feasts.
            </Text>
          </div>

          {featuredRecipes?.[0] && (
            <MainRecipeCard
              slug={featuredRecipes[0].slug}
              title={featuredRecipes[0].title}
              description={featuredRecipes[0].description}
              tag={featuredRecipes[0].categories[0]?.title}
              serving={featuredRecipes[0].servings}
              prepTime={featuredRecipes[0].prepTime}
              difficulty={featuredRecipes[0].difficulty}
              image={featuredRecipes[0].mainImage.asset.url}
              imageAlt={
                featuredRecipes[0].mainImage.alt || featuredRecipes[0].title
              }
            />
          )}
        </div>
      </section>

      <section className="py-16 md:py-20 px-10 md:px-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 mb-12">
          <Text variant="h1">Latest recipes</Text>
          <div className="flex flex-row flex-wrap gap-4">
            {[
              "all",
              ...(categories?.map((c) => c.title) || []).slice(0, 6),
            ].map((category) => {
              const href =
                category === "all"
                  ? "/recipes"
                  : `/categories/${category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`;

              const isActive =
                category === "all"
                  ? pathname === "/recipes"
                  : pathname === href;

              return (
                <Link
                  key={category}
                  href={href}
                  className={`px-4 py-2 transition-all duration-200 ${
                    isActive
                      ? "bg-black text-white"
                      : "bg-white text-black shadow-md hover:shadow-lg"
                  }`}
                >
                  <Text className="text-sm">{category}</Text>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {recipes?.map((recipe) => (
            <RecipeCard
              slug={recipe.slug}
              key={recipe._id}
              title={recipe.title}
              description={recipe.description}
              tag={recipe.categories[0]?.title}
              serving={recipe.servings}
              prepTime={recipe.prepTime}
              difficulty={recipe.difficulty}
              image={recipe.mainImage.asset.url}
              imageAlt={recipe.mainImage.alt || recipe.title}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-12 gap-4">
            <SecondaryButton
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              previous
            </SecondaryButton>

            <span className="flex items-center">
              Page {page} of {totalPages}
            </span>

            <SecondaryButton
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              next
            </SecondaryButton>
          </div>
        )}
      </section>
    </Page>
  );
};

export default RecipesPage;

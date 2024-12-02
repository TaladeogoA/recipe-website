"use client";
import { Text } from "@/components/custom-ui/text";
import { Page } from "@/components/layouts";
import { CategoryTabs } from "@/components/recipes/category-tabs";
import { RecipeCard } from "@/components/recipes/recipe-card";
import { RecipesPageSkeleton } from "@/components/skeletons/recipes-page-skeleton";
import { useCategory } from "@/hooks/useRecipeCategories";
import { useRecipesByCategory } from "@/hooks/useRecipes";
import Link from "next/link";
import { use, type Usable } from "react";
import { FaChevronLeft } from "react-icons/fa";

interface CategoryParams {
  params: Usable<{
    slug: string;
  }>;
}

export default function CategoryPage({ params }: CategoryParams) {
  const unwrappedParams = use(params) as { slug: string };
  const slug = unwrappedParams.slug;

  const { data: category, isLoading: categoryLoading } = useCategory(slug);
  const { data: recipesData, isLoading: recipesLoading } = useRecipesByCategory(
    slug,
    1,
    6
  );

  if (categoryLoading || recipesLoading) {
    return <RecipesPageSkeleton />;
  }

  return (
    <Page>
      <section className="py-16 md:py-20 px-10 md:px-14">
        <Link
          href="/recipes"
          className="group flex items-center gap-2 mb-8 text-black hover:text-brand-primary transition-colors"
        >
          <FaChevronLeft className="transition-transform group-hover:-translate-x-1" />
          <span className="transition-all group-hover:ml-1">
            back to recipes
          </span>
        </Link>

        <div className="flex flex-col gap-8 mb-12">
          <Text variant="h1" className="capitalize">
            {slug.replace(/-/g, " ")}
          </Text>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/4">
              <Text className="text-gray-600">{category?.description}</Text>
            </div>
            <div className="w-full lg:w-3/4">
              <CategoryTabs />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {recipesData?.items.map((recipe) => (
            <RecipeCard
              key={recipe._id}
              slug={recipe.slug}
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
      </section>
    </Page>
  );
}

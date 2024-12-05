"use client";
import { Page } from "@/components/layouts";
import { CategoryHeader, RecipeGrid } from "@/components/sections/category";
import {
  CategoryHeaderSkeleton,
  RecipeGridSkeleton,
} from "@/components/skeletons/category";
import { useCategory } from "@/hooks/useRecipeCategories";
import { useRecipesByCategory } from "@/hooks/useRecipes";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Suspense } from "react";
import { FaChevronLeft } from "react-icons/fa";

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;

  const { data: category, isLoading: categoryLoading } = useCategory(slug);
  const { data: recipesData, isLoading: recipesLoading } = useRecipesByCategory(
    slug,
    1,
    6
  );

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

        <Suspense fallback={<CategoryHeaderSkeleton />}>
          <CategoryHeader
            slug={slug}
            description={category?.description || ""}
            isLoading={categoryLoading}
          />
        </Suspense>

        <Suspense fallback={<RecipeGridSkeleton />}>
          <RecipeGrid
            recipes={recipesData?.items || []}
            isLoading={recipesLoading}
          />
        </Suspense>
      </section>
    </Page>
  );
}

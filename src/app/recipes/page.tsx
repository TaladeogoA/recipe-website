"use client";
import { SecondaryButton } from "@/components/custom-ui/secondary-button";
import { Text } from "@/components/custom-ui/text";
import { Page } from "@/components/layouts";
import { CategoryTabs } from "@/components/recipes/category-tabs";
import MainRecipeCard from "@/components/recipes/main-recipe-card";
import { HeroSection } from "@/components/sections/recipes/hero-section";
import {
  FeaturedRecipeSkeleton,
  HeroSectionSkeleton,
  RecipesGridSkeleton,
} from "@/components/skeletons/recipes";
import { useRecipesByCategory } from "@/hooks/useRecipes";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Suspense, useState } from "react";

const RecipesGrid = dynamic(
  () =>
    import("@/components/sections/recipes/recipes-grid").then((mod) => ({
      default: mod.RecipesGrid,
    })),
  {
    loading: () => <RecipesGridSkeleton />,
    ssr: false,
  }
);

export default function RecipesPage() {
  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 9;

  const pathname = usePathname();
  const currentCategory =
    pathname === "/recipes" ? "all" : pathname.split("/").pop() || "all";
  const { data: recipesData, isLoading: recipesLoading } = useRecipesByCategory(
    currentCategory,
    page,
    ITEMS_PER_PAGE
  );
  const totalPages = Math.ceil((recipesData?.total || 0) / ITEMS_PER_PAGE);

  return (
    <Page>
      <Suspense fallback={<HeroSectionSkeleton />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<FeaturedRecipeSkeleton />}>
        <div className="container px-10 md:px-14">
          <MainRecipeCard />
        </div>
      </Suspense>

      <section className="py-16 md:py-20 px-10 md:px-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 mb-12">
          <Text variant="h1">Latest recipes</Text>
          <CategoryTabs />
        </div>

        <Suspense fallback={<RecipesGridSkeleton />}>
          <RecipesGrid
            recipes={recipesData?.items || []}
            isLoading={recipesLoading}
          />
        </Suspense>

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
}

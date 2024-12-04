"use client";
import { Page } from "@/components/layouts";
import { CategoriesSection } from "@/components/sections/home/categories-section";
import { FeaturedRecipesSection } from "@/components/sections/home/featured-recipes-section";
import { HeroSection } from "@/components/sections/home/hero-section";
import {
  CategoriesSkeleton,
  ChefSectionSkeleton,
  FeaturedRecipesSkeleton,
  InstagramSkeleton,
  LatestRecipesSkeleton,
} from "@/components/skeletons/home";
import { HomeSkeleton } from "@/components/skeletons/home-skeleton";
import { useRecipeCategories } from "@/hooks/useRecipeCategories";
import { useFeaturedRecipes, useLatestRecipes } from "@/hooks/useRecipes";
import { useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const LatestRecipesSection = dynamic(
  () =>
    import("@/components/sections/home/latest-recipes-section").then((mod) => ({
      default: mod.LatestRecipesSection,
    })),
  { ssr: false }
);

const ChefSection = dynamic(
  () =>
    import("@/components/sections/home/chef-section").then((mod) => ({
      default: mod.ChefSection,
    })),
  { ssr: false }
);

const InstagramSection = dynamic(
  () =>
    import("@/components/sections/home/instagram-section").then((mod) => ({
      default: mod.InstagramSection,
    })),
  { ssr: false }
);

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["10px", "-70%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["20px", "-45%"]);

  const { data: categories } = useRecipeCategories();
  const { data: featuredRecipes } = useFeaturedRecipes();
  const { data: latestRecipes } = useLatestRecipes();

  const scrollToFeatured = () => {
    document.getElementById("featured-recipes")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Page>
      <Suspense fallback={<HomeSkeleton />}>
        <HeroSection y1={y1} y2={y2} scrollToFeatured={scrollToFeatured} />
      </Suspense>

      <Suspense fallback={<CategoriesSkeleton />}>
        <CategoriesSection categories={categories || []} />
      </Suspense>

      <Suspense fallback={<FeaturedRecipesSkeleton />}>
        <FeaturedRecipesSection recipes={featuredRecipes || []} />
      </Suspense>

      {/* Secondary content with lazy loading */}
      <Suspense fallback={<LatestRecipesSkeleton />}>
        <LatestRecipesSection recipes={latestRecipes || []} />
      </Suspense>

      <Suspense fallback={<ChefSectionSkeleton />}>
        <ChefSection />
      </Suspense>

      <Suspense fallback={<InstagramSkeleton />}>
        <InstagramSection />
      </Suspense>
    </Page>
  );
}

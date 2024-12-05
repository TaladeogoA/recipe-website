"use client";
import { Page } from "@/components/layouts";
import {
  CommunitySection,
  HeroSection,
  StorySection,
} from "@/components/sections/about";
import {
  AwardsSkeleton,
  CommunitySkeleton,
  HeroSkeleton,
  InstagramSkeleton,
  ReviewsSkeleton,
  StorySkeleton,
} from "@/components/skeletons/about";
import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const ReviewsSection = dynamic(
  () =>
    import("@/components/sections/about/reviews-section").then((mod) => ({
      default: mod.ReviewsSection,
    })),
  { ssr: false }
);

const AwardsSection = dynamic(
  () =>
    import("@/components/sections/about/awards-section").then((mod) => ({
      default: mod.AwardsSection,
    })),
  { ssr: false }
);

const InstagramSection = dynamic(
  () =>
    import("@/components/sections/shared/instagram-section").then((mod) => ({
      default: mod.InstagramSection,
    })),
  { ssr: false }
);

const AboutPage = () => {
  const [reviewSlider, setReviewSlider] = useState<Slider | null>(null);

  return (
    <Page>
      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<StorySkeleton />}>
        <StorySection />
      </Suspense>

      <Suspense fallback={<CommunitySkeleton />}>
        <CommunitySection />
      </Suspense>

      <Suspense fallback={<ReviewsSkeleton />}>
        <ReviewsSection
          reviewSlider={reviewSlider}
          setReviewSlider={setReviewSlider}
        />
      </Suspense>

      <Suspense fallback={<AwardsSkeleton />}>
        <AwardsSection />
      </Suspense>

      <Suspense fallback={<InstagramSkeleton />}>
        <InstagramSection />
      </Suspense>
    </Page>
  );
};

export default AboutPage;

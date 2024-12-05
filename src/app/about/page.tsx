"use client";
import { Page } from "@/components/layouts";

import {
  AwardsSection,
  CommunitySection,
  HeroSection,
  ReviewsSection,
  StorySection,
} from "@/components/sections/about";
import { InstagramSection } from "@/components/sections/shared/instagram-section";
import {
  AwardsSkeleton,
  CommunitySkeleton,
  HeroSkeleton,
  InstagramSkeleton,
  ReviewsSkeleton,
  StorySkeleton,
} from "@/components/skeletons/about";
import { Suspense, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

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

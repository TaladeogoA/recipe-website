"use client";
import ChefImg from "@/assets/images/chef.jpg";
import HeroFour from "@/assets/images/hero-four.webp";
import HeroOne from "@/assets/images/hero-one.jpg";
import HeroThree from "@/assets/images/hero-three.jpg";
import HeroTwo from "@/assets/images/hero-two.jpg";
import InstaFive from "@/assets/images/insta-five.jpg";
import InstaFour from "@/assets/images/insta-four.jpg";
import InstaOne from "@/assets/images/insta-one.jpg";
import InstaThree from "@/assets/images/insta-three.jpg";
import InstaTwo from "@/assets/images/insta-two.jpg";
import { PrimaryButton } from "@/components/custom-ui/primary-button";
import { SecondaryButton } from "@/components/custom-ui/secondary-button";
import { Text } from "@/components/custom-ui/text";
import { AspectBox, Flex, Page } from "@/components/layouts";
import { FeaturedRecipeCard } from "@/components/recipes/featured-recipe-card";
import { RecipeCard } from "@/components/recipes/recipe-card";
import { HomeSkeleton } from "@/components/skeletons/home-skeleton";
import { useRecipeCategories } from "@/hooks/useRecipeCategories";
import { useFeaturedRecipes, useLatestRecipes } from "@/hooks/useRecipes";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaAward,
  FaChevronLeft,
  FaChevronRight,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaUser,
  FaYoutube,
} from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Home() {
  const [slider, setSlider] = useState<Slider | null>(null);
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], ["10px", "-30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["20px", "-15%"]);

  const { data: categories, isLoading } = useRecipeCategories();
  const { data: featuredRecipes, isLoading: isFeaturedLoading } =
    useFeaturedRecipes();
  const { data: latestRecipes, isLoading: isLatestLoading } =
    useLatestRecipes();

  if (isLoading || isFeaturedLoading || isLatestLoading) {
    return <HomeSkeleton />;
  }

  const scrollToFeatured = () => {
    document.getElementById("featured-recipes")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Page>
      <Flex
        className="w-full min-h-screen h-full flex-col md:flex-row bg-white"
        align="stretch"
      >
        <div className="w-full md:w-[45%] px-6 md:px-14 flex flex-col pb-10 md:pb-30 mt-16 md:mt-[18%]">
          <div className="h-[2px] bg-brand-primary w-32 mb-8 md:mb-12" />
          <Text variant="h1" className="mb-4">
            A Kitchen Where Stories Come to Life
          </Text>
          <Text className="mb-6 md:mb-10">
            From our kitchen to yours - explore, create and share mouthwatering
            recipes that bring people together.
          </Text>
          <div className="flex gap-4">
            <PrimaryButton onClick={scrollToFeatured}>
              discover recipes
            </PrimaryButton>
            <Link href="/about">
              <SecondaryButton>about me</SecondaryButton>
            </Link>
          </div>
        </div>

        <div className="w-full gap-5 overflow-hidden relative left-0 right-0 md:flex hidden">
          <motion.div className="flex flex-col gap-5 flex-1" style={{ y: y1 }}>
            <AspectBox ratio="landscape" className="relative w-full">
              <Image src={HeroOne} alt="" fill className="object-cover" />
            </AspectBox>
            <AspectBox ratio="landscape" className="relative w-full">
              <Image src={HeroTwo} alt="" fill className="object-cover" />
            </AspectBox>
          </motion.div>

          <motion.div className="flex flex-col gap-5 flex-1" style={{ y: y2 }}>
            <AspectBox ratio="landscape" className="relative w-full">
              <Image src={HeroThree} alt="" fill className="object-cover" />
            </AspectBox>
            <AspectBox ratio="landscape" className="relative w-full">
              <Image src={HeroFour} alt="" fill className="object-cover" />
            </AspectBox>
          </motion.div>
        </div>

        <div className="w-full md:hidden">
          <div className="grid grid-cols-2 gap-5">
            <AspectBox ratio="landscape" className="relative w-full">
              <Image src={HeroOne} alt="" fill className="object-cover" />
            </AspectBox>
            <AspectBox ratio="landscape" className="relative w-full">
              <Image src={HeroTwo} alt="" fill className="object-cover" />
            </AspectBox>
            <AspectBox ratio="landscape" className="relative w-full">
              <Image src={HeroThree} alt="" fill className="object-cover" />
            </AspectBox>
            <AspectBox ratio="landscape" className="relative w-full">
              <Image src={HeroFour} alt="" fill className="object-cover" />
            </AspectBox>
          </div>
        </div>

        <div className="absolute right-0 top-0 w-1/2 h-screen -z-10 bg-brand-light md:block hidden"></div>
      </Flex>

      <section className="w-full pt-10 pb-20 mt-10 px-0 lg:px-10">
        <div className="container mx-auto px-6">
          <Text variant="h2" className="text-center mb-12">
            Browse by Category
          </Text>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories?.slice(0, 4).map((category) => (
              <Link
                href={`/categories/${category.slug.current}`}
                key={category._id}
                className="group hover:scale-95 transition-transform duration-200"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-40 h-40 bg-brand-light rounded-lg mb-4 flex items-center justify-center group-hover:bg-brand-light/80 transition-colors">
                    <Image
                      src={category.icon}
                      alt={category.title}
                      width={96}
                      height={96}
                      className="text-brand-primary"
                    />
                  </div>
                  <div className="h-[2px] bg-brand-primary w-12 mt-6 mb-4" />
                  <Text variant="h3" className="mb-2">
                    {category.title}
                  </Text>
                  <Text className="text-gray-600">{category.description}</Text>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="featured-recipes"
        className="w-full py-16 md:py-20 px-0 lg:px-10"
      >
        <div className="container mx-auto">
          {/* Header - Desktop/Tablet */}
          <div className="hidden sm:flex sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
            <Text variant="h2">Browse our featured recipes</Text>
            <div className="flex gap-4">
              <SecondaryButton onClick={() => slider?.slickPrev()}>
                <FaChevronLeft />
              </SecondaryButton>
              <SecondaryButton onClick={() => slider?.slickNext()}>
                <FaChevronRight />
              </SecondaryButton>
            </div>
          </div>

          {/* Header - Mobile */}
          <div className="sm:hidden text-center mb-8">
            <Text variant="h2" className="mb-6">
              Browse our featured recipes
            </Text>
          </div>

          {/* Slick Carousel */}
          <div className="relative">
            <Slider
              ref={(c) => setSlider(c)}
              infinite={true}
              speed={500}
              slidesToShow={2.1}
              slidesToScroll={1}
              arrows={false}
              responsive={[
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "40px",
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
              ]}
            >
              {featuredRecipes?.map((recipe) => (
                <div key={recipe._id} className="md:px-3">
                  <FeaturedRecipeCard
                    title={recipe.title}
                    description={recipe.description}
                    tag={recipe.categories[0]?.title}
                    prepTime={recipe.prepTime}
                    serving={recipe.servings}
                    difficulty={recipe.difficulty}
                    image={recipe.mainImage.asset.url}
                    imageAlt={recipe.mainImage.alt}
                  />
                </div>
              ))}
            </Slider>

            {/* Mobile Navigation */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[150%] flex gap-56 sm:hidden z-10">
              <button
                onClick={() => slider?.slickPrev()}
                className="p-3 bg-black hover:bg-brand-primary transition-colors duration-200 w-12 h-12 flex items-center justify-center"
              >
                <FaChevronLeft className="w-5 h-5 text-white transition-colors duration-200 hover:text-black" />
              </button>
              <button
                onClick={() => slider?.slickNext()}
                className="p-3 bg-black hover:bg-brand-primary transition-colors duration-200 w-12 h-12 flex items-center justify-center"
              >
                <FaChevronRight className="w-5 h-5 text-white transition-colors duration-200 hover:text-black" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-20 px-0 lg:px-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
            <Text variant="h2">Browse our latest recipes</Text>
            <Link href="/recipes">
              <SecondaryButton>Browse All Recipes</SecondaryButton>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {latestRecipes?.map((recipe) => (
              <RecipeCard
                key={recipe._id}
                title={recipe.title}
                description={recipe.description}
                tag={recipe.categories[0]?.title}
                serving={recipe.servings}
                prepTime={recipe.prepTime}
                difficulty={recipe.difficulty}
                image={recipe.mainImage.asset.url}
                imageAlt={recipe.mainImage.alt}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-grey-100 py-20 px-0 lg:px-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Left Container - Image & Overlay */}
            <div className="w-full md:w-[60%] relative">
              <AspectBox ratio="portrait" className="relative w-full">
                <Image
                  src={ChefImg}
                  alt="Sarah Mitchell"
                  fill
                  className="object-cover"
                />
              </AspectBox>

              <div className="md:w-[80%] bg-white p-8 md:p-10 md:absolute md:bottom-10 md:right-0 md:-translate-x-10">
                <Text variant="h2" className="mb-2">
                  Sarah Mitchell
                </Text>
                <Text className="text-gray-600 mb-6">
                  Chef, Food Vlogger & Entrepreneur
                </Text>

                <Flex className="items-center">
                  <Link
                    href="#"
                    className="w-10 h-10 rounded-full bg-black flex items-center justify-center"
                  >
                    <FaInstagram className="w-5 h-5 text-white" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 rounded-full bg-black flex items-center justify-center"
                  >
                    <FaYoutube className="w-5 h-5 text-white" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 rounded-full bg-black flex items-center justify-center"
                  >
                    <FaTwitter className="w-5 h-5 text-white" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 rounded-full bg-black flex items-center justify-center"
                  >
                    <FaFacebook className="w-5 h-5 text-white" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 rounded-full bg-black flex items-center justify-center"
                  >
                    <FaTwitter className="w-5 h-5 text-white" />
                  </Link>
                </Flex>
              </div>
            </div>

            {/* Right Container - About Info */}
            <div className="w-full md:w-[40%] flex flex-col justify-center">
              <Text variant="h2" className="mb-4">
                About Sarah Mitchell
              </Text>
              <Text className="text-gray-600 mb-8">
                Passionate about making cooking accessible and enjoyable for
                everyone. With over 10 years of culinary experience, I share
                recipes that bring joy to your kitchen.
              </Text>

              <div className="space-y-6 mb-10">
                <Flex gap="medium" className="items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center">
                    <GiOpenBook className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <Text className="font-bold">400+ Recipes</Text>
                    <Text className="text-gray-600">Published Online</Text>
                  </div>
                </Flex>

                <Flex gap="medium" className="items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center">
                    <FaUser className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <Text className="font-bold">1.2M+ Followers</Text>
                    <Text className="text-gray-600">Across Social Media</Text>
                  </div>
                </Flex>

                <Flex gap="medium" className="items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center">
                    <FaAward className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <Text className="font-bold">15+ Awards</Text>
                    <Text className="text-gray-600">
                      For Culinary Excellence
                    </Text>
                  </div>
                </Flex>
              </div>

              <Link href="/about" className="w-full">
                <PrimaryButton>More About Sarah</PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-0 lg:px-10 md:py-20">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
            <Text variant="h2">Follow my journey on Instagram</Text>
            <SecondaryButton>Follow Me</SecondaryButton>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <AspectBox
              ratio="square"
              className="w-[calc(50%-8px)] sm:w-40 xl:w-56"
            >
              <Image
                src={InstaOne}
                alt="Instagram post 1"
                fill
                className="object-cover"
              />
            </AspectBox>
            <AspectBox
              ratio="square"
              className="w-[calc(50%-8px)] sm:w-40 xl:w-56"
            >
              <Image
                src={InstaTwo}
                alt="Instagram post 2"
                fill
                className="object-cover"
              />
            </AspectBox>
            <AspectBox
              ratio="square"
              className="w-[calc(50%-8px)] sm:w-40 xl:w-56"
            >
              <Image
                src={InstaThree}
                alt="Instagram post 3"
                fill
                className="object-cover"
              />
            </AspectBox>
            <AspectBox
              ratio="square"
              className="w-[calc(50%-8px)] sm:w-40 xl:w-56"
            >
              <Image
                src={InstaFour}
                alt="Instagram post 4"
                fill
                className="object-cover"
              />
            </AspectBox>
            <AspectBox
              ratio="square"
              className="w-[calc(50%-8px)] sm:w-40 xl:w-56 hidden sm:block"
            >
              <Image
                src={InstaFive}
                alt="Instagram post 5"
                fill
                className="object-cover"
              />
            </AspectBox>
          </div>
        </div>
      </section>
    </Page>
  );
}

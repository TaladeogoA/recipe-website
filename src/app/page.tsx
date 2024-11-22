"use client";
import ChefImg from "@/assets/images/chef.jpg";
import HeroFour from "@/assets/images/hero-four.webp";
import HeroOne from "@/assets/images/hero-one.jpg";
import HeroThree from "@/assets/images/hero-three.jpg";
import HeroTwo from "@/assets/images/hero-two.jpg";
import { PrimaryButton } from "@/components/custom-ui/primary-button";
import { SecondaryButton } from "@/components/custom-ui/secondary-button";
import { Text } from "@/components/custom-ui/text";
import { AspectBox, Flex, Page } from "@/components/layouts";
import { RecipeCard } from "@/components/recipes/recipe-card";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaAward,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaUser,
  FaYoutube,
} from "react-icons/fa";
import {
  GiCakeSlice,
  GiCook,
  GiHeartPlus,
  GiOpenBook,
  GiStopwatch,
} from "react-icons/gi";

export default function Home() {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], ["10px", "-30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["20px", "-15%"]);

  const categories = [
    {
      Icon: GiCook,
      name: "Main Course",
      description: "Hearty dishes for your dinner table",
    },
    {
      Icon: GiCakeSlice,
      name: "Desserts",
      description: "Sweet treats for any occasion",
    },
    {
      Icon: GiStopwatch,
      name: "Quick & Easy",
      description: "Ready in 30 minutes or less",
    },
    {
      Icon: GiHeartPlus,
      name: "Healthy",
      description: "Nutritious and delicious options",
    },
  ];

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
            <PrimaryButton>discover recipes</PrimaryButton>
            <SecondaryButton>about me</SecondaryButton>
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

      <section className="w-full pt-10 pb-20 mt-20">
        <div className="container mx-auto px-6">
          <Text variant="h2" className="text-center mb-12">
            Browse by Category
          </Text>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div
                key={category.name}
                className="flex flex-col items-center text-center"
              >
                <div className="w-40 h-40 bg-brand-light rounded-lg mb-4 flex items-center justify-center">
                  <category.Icon className="text-7xl text-brand-primary" />
                </div>
                <div className="h-[2px] bg-brand-primary w-12 mt-6 mb-4" />
                <Text variant="h3" className="mb-2">
                  {category.name}
                </Text>
                <Text className="text-gray-600">{category.description}</Text>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
            <Text variant="h2">Browse Our Latest Recipes</Text>
            <SecondaryButton>Browse All Recipes</SecondaryButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <RecipeCard
                key={i}
                title="Creamy Garlic Parmesan Pasta"
                description="A rich and creamy pasta dish made with fresh garlic, parmesan cheese, and herbs."
                tag="main course"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-grey-100 py-20">
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

              <PrimaryButton>More About Sarah</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* follow my journey */}
    </Page>
  );
}

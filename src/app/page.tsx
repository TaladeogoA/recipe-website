"use client";
import HeroFour from "@/assets/images/hero-four.webp";
import HeroOne from "@/assets/images/hero-one.jpg";
import HeroThree from "@/assets/images/hero-three.jpg";
import HeroTwo from "@/assets/images/hero-two.jpg";
import { PrimaryButton } from "@/components/custom-ui/primary-button";
import { SecondaryButton } from "@/components/custom-ui/secondary-button";
import { Text } from "@/components/custom-ui/text";
import { AspectBox, Flex, Page } from "@/components/layouts";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { GiCakeSlice, GiCook, GiHeartPlus, GiStopwatch } from "react-icons/gi";

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
        className="w-full min-h-screen h-full flex-col md:flex-row"
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

      <section className="w-full pt-10 pb-20">
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
    </Page>
  );
}

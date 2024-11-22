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

export default function Home() {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], ["10px", "-30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["20px", "-15%"]);

  return (
    <Page>
      <Flex
        className="w-full min-h-screen h-full flex-col md:flex-row"
        align="stretch"
      >
        <div className="w-full md:w-[45%] px-6 md:px-14 flex flex-col md:justify-end pb-10 md:pb-20 md:mb-20 mt-16 md:mt-0">
          <div className="h-[2px] bg-brand-primary w-32 mb-8 md:mb-12" />
          <Text variant="h1" className="mb-4">
            Discover Amazing Recipes for Every Occasion
          </Text>
          <Text className="mb-6 md:mb-10">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut.
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
    </Page>
  );
}

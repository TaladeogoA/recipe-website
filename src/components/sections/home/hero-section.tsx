import HeroFour from "@/assets/images/hero-four.webp";
import HeroOne from "@/assets/images/hero-one.jpg";
import HeroThree from "@/assets/images/hero-three.jpg";
import HeroTwo from "@/assets/images/hero-two.jpg";
import { OptimizedImage } from "@/components/common/OptimizedImage";
import { PrimaryButton } from "@/components/custom-ui/primary-button";
import { SecondaryButton } from "@/components/custom-ui/secondary-button";
import { Text } from "@/components/custom-ui/text";
import { AspectBox, Flex } from "@/components/layouts";
import { motion, MotionValue } from "framer-motion";
import Link from "next/link";
import posthog from "posthog-js";

export function HeroSection({
  y1,
  y2,
  scrollToFeatured,
}: {
  y1: MotionValue<string>;
  y2: MotionValue<string>;
  scrollToFeatured: () => void;
}) {
  const handleClick = () => {
    posthog.capture('clicked_about_chef', {
      location: 'hero_section',
    });
  }

  return (
    <Flex
      className="w-full min-h-screen h-full flex-col md:flex-row bg-white"
      align="stretch"
    >
      <div className="w-full md:w-[45%] px-6 md:px-14 flex flex-col pb-10 md:pb-30 mt-16 md:mt-[18%]">
        <div className="h-[2px] bg-brand-primary w-32 mb-8 md:mb-12" />
        <Text variant="h1" className="mb-4">
          A Kitchen Where Global Flavors Come to Life
        </Text>
        <Text className="mb-6 md:mb-10">
          From traditional family recipes to modern fusion dishes, explore a
          world of culinary adventures. Join us in celebrating the universal
          language of food.
        </Text>
        <div className="flex gap-4">
          <PrimaryButton onClick={scrollToFeatured}>
            discover recipes
          </PrimaryButton>
          <Link href="/about" onClick={handleClick}>
            <SecondaryButton>about me</SecondaryButton>
          </Link>
        </div>
      </div>

      {/* Desktop Hero Images */}
      <div className="w-full gap-5 overflow-hidden relative left-0 right-0 md:flex hidden">
        <motion.div className="flex flex-col gap-5 flex-1" style={{ y: y1 }}>
          <AspectBox ratio="landscape" className="relative w-full">
            <OptimizedImage
              src={HeroOne}
              alt="Person finely chopping fresh parsley on a wooden cutting board, preparing ingredients for a meal"
              fill
              priority
              className="object-cover"
            />
          </AspectBox>
          <AspectBox ratio="landscape" className="relative w-full">
            <OptimizedImage
              src={HeroTwo}
              alt="Close-up of spicy Indian-style curry garnished with chopped spring onions and coconut flakes, served in a traditional bronze bowl"
              fill
              priority
              className="object-cover"
            />
          </AspectBox>
        </motion.div>

        <motion.div className="flex flex-col gap-5 flex-1" style={{ y: y2 }}>
          <AspectBox ratio="landscape" className="relative w-full">
            <OptimizedImage
              src={HeroThree}
              alt="Nigerian grilled whole fish, chicken skewers, and baked jollof rice with red peppers, plated with lemon wedges and tomatoes"
              fill
              priority
              className="object-cover"
            />
          </AspectBox>
          <AspectBox ratio="landscape" className="relative w-full">
            <OptimizedImage
              src={HeroFour}
              alt="Plate of creamy garlic spaghetti topped with chopped parsley and cheese, surrounded by small dishes of spices and oil"
              fill
              priority
              className="object-cover"
            />
          </AspectBox>
        </motion.div>
      </div>

      {/* Mobile Hero Images */}
      <div className="w-full md:hidden">
        <div className="grid grid-cols-2 gap-5">
          {[HeroOne, HeroTwo, HeroThree, HeroFour].map((image, index) => (
            <AspectBox
              key={index}
              ratio="landscape"
              className="relative w-full"
            >
              <OptimizedImage
                src={image}
                alt={`Hero image ${index + 1}`}
                fill
                priority={index < 2}
                className="object-cover"
              />
            </AspectBox>
          ))}
        </div>
      </div>

      <div className="absolute right-0 top-0 w-1/2 h-screen -z-10 bg-white md:block hidden"></div>
    </Flex>
  );
}

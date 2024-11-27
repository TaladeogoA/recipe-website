import HeroOne from "@/assets/images/about/hero-one.jpg";
import HeroThree from "@/assets/images/about/hero-three.jpg";
import HeroTwo from "@/assets/images/about/hero-two.jpg";
import { SecondaryButton } from "@/components/custom-ui/secondary-button";
import { Text } from "@/components/custom-ui/text";
import { AspectBox, Page } from "@/components/layouts";
import Image from "next/image";

const AboutPage = () => {
  return (
    <Page className="max-w-7xl px-6">
      <section className="flex flex-col items-center gap-6 justify-center mt-28 max-w-2xl mx-auto text-center">
        <Text variant="h1">
          Meet Sarah, a talented vegan chef in Los Angeles, CA
        </Text>
        <Text className="text-grey-800">
          Passionate about making cooking accessible and enjoyable for everyone.
          With over 10 years of culinary experience, I share recipes that bring
          joy to your kitchen.
        </Text>
        <SecondaryButton>more about me</SecondaryButton>
      </section>

      <section className="h-[150vh] w-full flex gap-6 lg:gap-10 mt-36">
        <div className="w-[50%] h-full mt-24 flex flex-col gap-6 lg:gap-10">
          <AspectBox className="h-[35%]">
            <Image src={HeroOne} fill className="object-cover" alt="" />
          </AspectBox>

          <AspectBox className="flex-grow">
            <Image
              src={HeroThree}
              fill
              className="object-cover pl-12 lg:pl-24"
              alt=""
            />
          </AspectBox>
        </div>
        <div className="w-[50%] h-full flex flex-col">
          <AspectBox className="flex-grow">
            <Image src={HeroTwo} fill className="object-cover" alt="" />
          </AspectBox>

          <div className="w-full py-20 px-10 flex flex-col gap-7">
            <Text variant="h2">My Story</Text>
            <Text>
              I started my culinary journey at the age of 16, experimenting with
              different ingredients and flavors. After graduating from culinary
              school, I worked in various restaurants and bakeries across the
              country.
            </Text>

            <Text>
              In 2015, I moved to Los Angeles to pursue my dream of opening a
              vegan restaurant. After years of hard work and dedication, I
              finally opened my restaurant in 2018. Since then, I have been on a
              mission to share my love for plant-based cooking with the world.
            </Text>
          </div>
        </div>
      </section>
    </Page>
  );
};

export default AboutPage;

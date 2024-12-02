"use client";
import HeroOne from "@/assets/images/about/hero-one.jpg";
import HeroThree from "@/assets/images/about/hero-three.jpg";
import HeroTwo from "@/assets/images/about/hero-two.jpg";
import MainImg from "@/assets/images/about/main.jpg";
import OverlapImg from "@/assets/images/about/overlap.jpg";
import InstaFive from "@/assets/images/insta-five.jpg";
import InstaFour from "@/assets/images/insta-four.jpg";
import InstaOne from "@/assets/images/insta-one.jpg";
import InstaThree from "@/assets/images/insta-three.jpg";
import InstaTwo from "@/assets/images/insta-two.jpg";
import EmmaSrc from "@/assets/images/reviews/emma.jpg";
import JamesSrc from "@/assets/images/reviews/james.jpg";
import MarcoSrc from "@/assets/images/reviews/marco.jpg";
import MayaSrc from "@/assets/images/reviews/maya.jpg";
import { SecondaryButton } from "@/components/custom-ui/secondary-button";
import { Text } from "@/components/custom-ui/text";
import { AspectBox, Page } from "@/components/layouts";
import { ReviewCard } from "@/components/reviews/review-card";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const AboutPage = () => {
  const [reviewSlider, setReviewSlider] = useState<Slider | null>(null);

  return (
    <Page>
      <section className="flex flex-col items-center gap-6 justify-center mt-28 max-w-2xl mx-auto text-center px-6">
        <Text variant="h1">
          Meet Sarah, a passionate food explorer bringing global flavors to your
          kitchen
        </Text>
        <Text className="text-grey-800">
          From traditional family recipes to modern fusion dishes, I&apos;m here
          to share the joy of cooking from every corner of the world. With over
          a decade of culinary adventures, let&apos;s make every meal a
          celebration of culture and taste.
        </Text>
        <Link href="#my-story">
          <SecondaryButton>more about me</SecondaryButton>
        </Link>
      </section>
      <section className="min-h-screen w-full flex flex-col lg:flex-row gap-6 lg:gap-10 mt-20 lg:mt-36 px-6 lg:px-20">
        <div className="w-full lg:w-[50%] flex flex-col gap-6 lg:gap-10 lg:mt-24">
          <AspectBox className="h-[300px] lg:h-[35%]">
            <Image src={HeroOne} fill className="object-cover" alt="" />
          </AspectBox>

          <AspectBox className="hidden lg:block h-[300px] lg:flex-grow">
            <Image
              src={HeroThree}
              fill
              className="object-cover pl-0 lg:pl-24"
              alt=""
            />
          </AspectBox>
        </div>

        <div className="w-full lg:w-[50%] flex flex-col">
          <AspectBox className="h-[300px] lg:flex-grow">
            <Image src={HeroTwo} fill className="object-cover" alt="" />
          </AspectBox>

          <div
            className="w-full py-10 lg:py-20 lg:px-10 flex flex-col gap-7"
            id="my-story"
          >
            <Text variant="h2">My Story</Text>
            <Text>
              Growing up in a multicultural household, my earliest memories
              revolve around the kitchen. My Italian mother and Lebanese father
              taught me that food is the universal language of love. From
              mastering pasta-making with my nonna to learning the art of Middle
              Eastern spice blending, every dish tells a story.
            </Text>
            <Text>
              After studying at Le Cordon Bleu and traveling across four
              continents, I discovered that the best recipes are born when
              traditions meet innovation. Today, from my kitchen in California,
              I blend time-honored techniques with modern twists to create
              dishes that are both authentic and accessible.
            </Text>
          </div>
        </div>
      </section>
      <section className="mt-52 flex flex-col lg:flex-row gap-10 lg:items-center px-6 lg:pl-20 bg-brand-light lg:bg-transparent">
        <div className="w-full lg:w-1/2 py-10 lg:py-20 flex flex-col gap-7">
          <Text variant="h2">From Private Tables to Global Community</Text>
          <Text>
            What started as intimate dinner parties for friends turned into a
            passion for teaching. I realized that many home cooks yearned to
            explore global cuisines but felt intimidated by unfamiliar
            ingredients and techniques. This inspired me to start sharing my
            recipes and kitchen wisdom online.
          </Text>
          <Text>
            Today, Gather is more than just a recipe collection—it&apos;s a
            community of food lovers exploring everything from Indian curries to
            Mexican moles, French pastries to Japanese comfort food. Every
            recipe comes with the story of its origin and tips to make it your
            own.
          </Text>
        </div>

        <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px]">
          <div className="absolute right-0 top-0 w-full h-full bg-brand-light hidden lg:block lg:w-[80%]" />

          <div className="block lg:hidden w-full overflow-hidden max-h-full">
            <AspectBox ratio="square" className="relative w-full">
              <Image src={MainImg} alt="" fill className="object-cover" />
            </AspectBox>
          </div>
          <div className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 w-[70%]">
            <AspectBox ratio="square" className="relative">
              <Image src={MainImg} alt="" fill className="object-cover" />
            </AspectBox>
          </div>
          <div className="hidden lg:block absolute right-48 bottom-28 translate-y-1/4 w-[50%]">
            <AspectBox ratio="landscape" className="relative">
              <Image src={OverlapImg} alt="" fill className="object-cover" />
            </AspectBox>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-20 px-0 lg:px-10">
        <div className="px-6 md:px-0">
          <div className="hidden sm:flex sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
            <Text variant="h2">What Our Community Says</Text>
            <div className="flex gap-4">
              <SecondaryButton onClick={() => reviewSlider?.slickPrev()}>
                <FaChevronLeft />
              </SecondaryButton>
              <SecondaryButton onClick={() => reviewSlider?.slickNext()}>
                <FaChevronRight />
              </SecondaryButton>
            </div>
          </div>

          <div className="sm:hidden text-center mb-8">
            <Text variant="h2" className="mb-6">
              What Our Community Says
            </Text>
          </div>

          <div className="relative">
            <Slider
              ref={(c) => setReviewSlider(c)}
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
              <div className="md:px-3">
                <ReviewCard
                  tagline="Perfect Lebanese Recipes"
                  review="Sarah's hummus recipe reminds me of my grandmother's. The detailed tips about tahini quality made all the difference!"
                  author={{
                    name: "Maya Khalil",
                    image: MayaSrc,
                  }}
                />
              </div>
              <div className="md:px-3">
                <ReviewCard
                  tagline="Fusion Done Right"
                  review="The Mediterranean-Asian fusion recipes are innovative yet respectful to both cultures. The miso pasta is now a weekly staple!"
                  author={{
                    name: "James Chen",
                    image: JamesSrc,
                  }}
                />
              </div>
              <div className="md:px-3">
                <ReviewCard
                  tagline="Made Me a Better Cook"
                  review="The detailed instructions and cultural context behind each recipe have transformed my approach to cooking. Thank you Sarah!"
                  author={{
                    name: "Emma Thompson",
                    image: EmmaSrc,
                  }}
                />
              </div>
              <div className="md:px-3">
                <ReviewCard
                  tagline="Authentic Italian Flavors"
                  review="As an Italian, I'm usually skeptical of Italian recipes online, but Sarah's recipes are the real deal. Her tiramisu is perfection!"
                  author={{
                    name: "Marco Rossi",
                    image: MarcoSrc,
                  }}
                />
              </div>
            </Slider>

            {/* Mobile Navigation */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[150%] flex gap-80 sm:hidden z-10">
              <button
                onClick={() => reviewSlider?.slickPrev()}
                className="p-3 bg-black hover:bg-brand-primary transition-colors duration-200 w-12 h-12 flex items-center justify-center"
              >
                <FaChevronLeft className="w-5 h-5 text-white transition-colors duration-200 hover:text-black" />
              </button>
              <button
                onClick={() => reviewSlider?.slickNext()}
                className="p-3 bg-black hover:bg-brand-primary transition-colors duration-200 w-12 h-12 flex items-center justify-center"
              >
                <FaChevronRight className="w-5 h-5 text-white transition-colors duration-200 hover:text-black" />
              </button>
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
};

export default AboutPage;

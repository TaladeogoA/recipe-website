import ChefImg from "@/assets/images/chef.jpg";
import { OptimizedImage } from "@/components/common/OptimizedImage";
import { PrimaryButton } from "@/components/custom-ui/primary-button";
import { Text } from "@/components/custom-ui/text";
import { AspectBox, Flex } from "@/components/layouts";
import Link from "next/link";
import posthog from "posthog-js";
import {
  FaAward,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaUser,
  FaYoutube,
} from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";

export function ChefSection() {
  const handleClick = () => {
    posthog.capture('clicked_about_chef', {
      location: 'chef_section',
    });
  }

  return (
    <section className="w-full bg-grey-100 py-20 px-0 lg:px-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Container - Image & Overlay */}
          <div className="w-full md:w-[60%] relative">
            <AspectBox ratio="portrait" className="relative w-full">
              <OptimizedImage
                src={ChefImg}
                alt="Chef Sarah Mitchell piping frosting onto a cake, wearing a white chef's coat, with a focused expression"
                fill
                priority
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
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5 text-white" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-black flex items-center justify-center"
                  aria-label="YouTube"
                >
                  <FaYoutube className="w-5 h-5 text-white" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-black flex items-center justify-center"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-5 h-5 text-white" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-black flex items-center justify-center"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-5 h-5 text-white" />
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
              Growing up in a multicultural household with an Italian mother and
              Lebanese father, I learned that food transcends borders. After
              training at Le Cordon Bleu and exploring cuisines across four
              continents, I&apos;m here to share authentic recipes that bring
              global flavors to your kitchen.
            </Text>

            <div className="space-y-6 mb-10">
              <Flex gap="medium" className="items-center">
                <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center">
                  <GiOpenBook className="w-6 h-6 text-white" />
                </div>
                <div>
                  <Text className="font-bold">400+ Recipes</Text>
                  <Text className="text-gray-600">From Around the World</Text>
                </div>
              </Flex>

              <Flex gap="medium" className="items-center">
                <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center">
                  <FaUser className="w-6 h-6 text-white" />
                </div>
                <div>
                  <Text className="font-bold">1.2M+ Followers</Text>
                  <Text className="text-gray-600">Global Food Community</Text>
                </div>
              </Flex>

              <Flex gap="medium" className="items-center">
                <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center">
                  <FaAward className="w-6 h-6 text-white" />
                </div>
                <div>
                  <Text className="font-bold">15+ Awards</Text>
                  <Text className="text-gray-600">For Culinary Excellence</Text>
                </div>
              </Flex>
            </div>

            <Link href="/about" className="w-full" onClick={handleClick}>
              <PrimaryButton>More About Sarah</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

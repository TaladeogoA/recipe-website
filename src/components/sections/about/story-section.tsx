import HeroOne from "@/assets/images/about/hero-one.jpg";
import HeroThree from "@/assets/images/about/hero-three.jpg";
import HeroTwo from "@/assets/images/about/hero-two.jpg";
import { OptimizedImage } from "@/components/common/OptimizedImage";
import { Text } from "@/components/custom-ui/text";
import { AspectBox } from "@/components/layouts";
import { StaticImageData } from "next/image";

interface StoryImageProps {
  src: StaticImageData;
  alt: string;
  className?: string;
}

function StoryImage({ src, alt, className }: StoryImageProps) {
  return (
    <AspectBox className={className}>
      <OptimizedImage
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover"
      />
    </AspectBox>
  );
}

export function StorySection() {
  return (
    <section className="min-h-screen w-full flex flex-col lg:flex-row gap-6 lg:gap-10 mt-20 lg:mt-36 px-6 lg:px-20">
      <div className="w-full lg:w-[50%] flex flex-col gap-6 lg:gap-10 lg:mt-24">
        <StoryImage
          src={HeroOne}
          alt="Kitchen preparation scene"
          className="h-[300px] lg:h-[35%]"
        />
        <StoryImage
          src={HeroThree}
          alt="Cooking ingredients display"
          className="hidden lg:block h-[300px] lg:flex-grow"
        />
      </div>

      <div className="w-full lg:w-[50%] flex flex-col">
        <StoryImage
          src={HeroTwo}
          alt="Cooking process shot"
          className="hidden lg:block h-[300px] lg:flex-grow"
        />

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
            traditions meet innovation. Today, from my kitchen in California, I
            blend time-honored techniques with modern twists to create dishes
            that are both authentic and accessible.
          </Text>
        </div>
      </div>
    </section>
  );
}

import MainImg from "@/assets/images/about/main.jpg";
import OverlapImg from "@/assets/images/about/overlap.jpg";
import { OptimizedImage } from "@/components/common/OptimizedImage";
import { Text } from "@/components/custom-ui/text";
import { AspectBox } from "@/components/layouts";

export function CommunitySection() {
  return (
    <section className="mt-52 flex flex-col lg:flex-row gap-10 lg:items-center px-6 lg:pl-20 bg-brand-light lg:bg-transparent">
      <div className="w-full lg:w-1/2 py-10 lg:py-20 flex flex-col gap-7">
        <Text variant="h2">From Private Tables to Global Community</Text>
        <Text>
          What started as intimate dinner parties for friends turned into a
          passion for teaching. I realized that many home cooks yearned to
          explore global cuisines but felt intimidated by unfamiliar ingredients
          and techniques. This inspired me to start sharing my recipes and
          kitchen wisdom online.
        </Text>
        <Text>
          Today, Gather is more than just a recipe collection—it&apos;s a
          community of food lovers exploring everything from Indian curries to
          Mexican moles, French pastries to Japanese comfort food. Every recipe
          comes with the story of its origin and tips to make it your own.
        </Text>
      </div>

      <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px]">
        <div className="absolute right-0 top-0 w-full h-full bg-brand-light hidden lg:block lg:w-[80%]" />

        <div className="block lg:hidden w-full overflow-hidden max-h-full">
          <AspectBox ratio="square" className="relative w-full">
            <OptimizedImage
              src={MainImg}
              alt="Sarah cooking in kitchen"
              fill
              className="object-cover"
            />
          </AspectBox>
        </div>
        <div className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 w-[70%]">
          <AspectBox ratio="square" className="relative">
            <OptimizedImage
              src={MainImg}
              alt="Sarah cooking in kitchen"
              fill
              className="object-cover"
            />
          </AspectBox>
        </div>
        <div className="hidden lg:block absolute right-48 bottom-28 translate-y-1/4 w-[50%]">
          <AspectBox ratio="landscape" className="relative">
            <OptimizedImage
              src={OverlapImg}
              alt="Cooking detail shot"
              fill
              className="object-cover"
            />
          </AspectBox>
        </div>
      </div>
    </section>
  );
}

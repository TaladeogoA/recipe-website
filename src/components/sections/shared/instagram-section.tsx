import InstaFive from "@/assets/images/insta-five.jpg";
import InstaFour from "@/assets/images/insta-four.jpg";
import InstaOne from "@/assets/images/insta-one.jpg";
import InstaThree from "@/assets/images/insta-three.jpg";
import InstaTwo from "@/assets/images/insta-two.jpg";
import { OptimizedImage } from "@/components/common/OptimizedImage";
import { SecondaryButton } from "@/components/custom-ui/secondary-button";
import { Text } from "@/components/custom-ui/text";
import { AspectBox } from "@/components/layouts";

export function InstagramSection() {
  return (
    <section className="w-full py-16 px-0 lg:px-10 md:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
          <Text variant="h2">Follow my journey on Instagram</Text>
          <SecondaryButton>Follow Me</SecondaryButton>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {[InstaOne, InstaTwo, InstaThree, InstaFour, InstaFive].map(
            (image, index) => (
              <AspectBox
                key={index}
                ratio="square"
                className={`w-[calc(50%-8px)] sm:w-40 xl:w-56 ${
                  index === 4 ? "hidden sm:block" : ""
                }`}
              >
                <OptimizedImage
                  src={image}
                  alt={`Instagram post ${index + 1}`}
                  fill
                  priority={false}
                  className="object-cover"
                />
              </AspectBox>
            )
          )}
        </div>
      </div>
    </section>
  );
}

import { SecondaryButton } from "@/components/custom-ui/secondary-button";
import { Text } from "@/components/custom-ui/text";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-6 justify-center mt-28 max-w-2xl mx-auto text-center px-6">
      <Text variant="h1">
        Meet Sarah, a passionate food explorer bringing global flavors to your
        kitchen
      </Text>
      <Text className="text-grey-800">
        From traditional family recipes to modern fusion dishes, I&apos;m here
        to share the joy of cooking from every corner of the world. With over a
        decade of culinary adventures, let&apos;s make every meal a celebration
        of culture and taste.
      </Text>
      <Link href="#my-story">
        <SecondaryButton>more about me</SecondaryButton>
      </Link>
    </section>
  );
}

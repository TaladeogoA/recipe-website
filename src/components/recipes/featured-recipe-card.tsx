import DifficultyIcon from "@/assets/icons/difficulty.svg";
import PrepIcon from "@/assets/icons/prep-time.svg";
import ServingIcon from "@/assets/icons/servings.svg";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";
import { OptimizedImage } from "../common/OptimizedImage";
import { Text } from "../custom-ui/text";
import { AspectBox, Flex } from "../layouts";
import { RecipeTag } from "./recipe-tag";

interface FeaturedRecipeCardProps {
  title: string;
  description: string;
  tag: string;
  serving: number;
  prepTime: number;
  difficulty: "easy" | "medium" | "hard";
  image: string;
  imageAlt?: string;
  slug: string;
  isFocusable?: boolean;
}

export function FeaturedRecipeCard({
  title,
  description,
  tag,
  serving = 6,
  prepTime = 60,
  difficulty = "medium",
  image,
  imageAlt,
  slug,
  isFocusable = true,
}: FeaturedRecipeCardProps) {
  const handleClick = () => {
    posthog.capture('clicked_recipe_card', {
      recipe_id: slug,
      category: tag,
      title: title,
    })
  }

  return (
    <Link
      href={`/recipes/${slug}`}
      tabIndex={isFocusable ? 0 : -1}
      aria-hidden={isFocusable ? undefined : "true"}
      aria-label={`View recipe for ${title}`}
      onClick={handleClick}
    >
      <Card
        className="group/card overflow-hidden rounded-none shadow-recipe border-none
      max-h-max transition-all duration-300 ease-in-out
      hover:scale-95 relative"
      >
        <RecipeTag tag={tag} />

        <AspectBox ratio="wide" className="overflow-hidden">
          <OptimizedImage
            src={image}
            alt={imageAlt ? imageAlt : `${title} image`}
            width={1200}
            height={800}
            priority={true}
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover/card:scale-110"
          />
        </AspectBox>
        <CardContent className="pt-6 md:pt-14">
          <div className="w-[20%] h-[2px] bg-brand-primary mb-2 transition-all duration-300 ease-in-out group-hover/card:w-[45%]" />
          <Text variant="h3" className="mb-2">
            {title}
          </Text>
          <Text variant="body" className="line-clamp-2">
            {description}
          </Text>
          <div className="h-[2px] bg-grey-500 mt-14 md:mt-10 xl:mt-12" />
          <Flex className="mt-6 justify-between">
            <Flex gap="x-small">
              <Image
                src={ServingIcon}
                alt="servings"
                width={20}
                height={20}
                className="w-4 h-4 md:w-5 md:h-5"
              />
              <Text className="font-bold text-sm md:text-base">
                {prepTime} min
              </Text>
            </Flex>
            <Flex gap="x-small">
              <Image
                src={PrepIcon}
                alt="prep time"
                width={20}
                height={20}
                className="w-4 h-4 md:w-5 md:h-5"
              />
              <Text className="text-sm md:text-base">{serving} servings</Text>
            </Flex>
            <Flex gap="x-small">
              <Image
                src={DifficultyIcon}
                alt="difficulty"
                width={20}
                height={20}
                className="w-4 h-4 md:w-5 md:h-5"
              />
              <Text className="capitalize text-sm md:text-base">
                {difficulty}
              </Text>
            </Flex>
          </Flex>
        </CardContent>
      </Card>
    </Link>
  );
}
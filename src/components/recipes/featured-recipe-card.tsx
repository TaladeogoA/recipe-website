import DifficultyIcon from "@/assets/icons/difficulty.svg";
import PrepIcon from "@/assets/icons/prep-time.svg";
import ServingIcon from "@/assets/icons/servings.svg";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
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
  imageAlt: string;
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
}: FeaturedRecipeCardProps) {
  return (
    <Link href="/recipes/1">
      <Card
        className="group/card overflow-hidden rounded-none shadow-recipe border-none h-[80vh]
    transition-all duration-300 ease-in-out
    hover:scale-90 relative"
      >
        <RecipeTag tag={tag} />

        <AspectBox
          ratio="wide"
          className="overflow-hidden h-[57%] md:h-[40%] xl:h-[57%]"
        >
          <Image
            src={image}
            alt={imageAlt ? imageAlt : title}
            width={1200}
            height={800}
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover/card:scale-110"
          />
        </AspectBox>
        <CardContent className="pt-6 md:pt-14 h-[43%] md:h-[60%] xl:h-[43%]">
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
                alt=""
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
                alt=""
                width={20}
                height={20}
                className="w-4 h-4 md:w-5 md:h-5"
              />
              <Text className="text-sm md:text-base">{serving} servings</Text>
            </Flex>
            <Flex gap="x-small">
              <Image
                src={DifficultyIcon}
                alt=""
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

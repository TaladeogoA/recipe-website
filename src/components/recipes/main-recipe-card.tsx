"use client";
import DifficultyIcon from "@/assets/icons/difficulty.svg";
import PrepIcon from "@/assets/icons/prep-time.svg";
import ServingIcon from "@/assets/icons/servings.svg";
import { Card } from "@/components/ui/card";
import { useFeaturedRecipes } from "@/hooks/useRecipes";
import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";
import { OptimizedImage } from "../common/OptimizedImage";
import { Text } from "../custom-ui/text";
import { AspectBox, Flex } from "../layouts";
import { FeaturedRecipeSkeleton } from "../skeletons/recipes";
import { RecipeTag } from "./recipe-tag";

const MainRecipeCard = () => {
  const { data: recipes, isLoading } = useFeaturedRecipes();

  if (isLoading) return <FeaturedRecipeSkeleton />;
  if (!recipes) return null;

  const {
    slug,
    title,
    description,
    categories,
    servings,
    prepTime,
    difficulty,
    mainImage,
  } = recipes[0];

  let categoryTitles = [''];
  if (categories && categories.length > 0) {
    categoryTitles = categories.map((cat) => cat.title);
  }

  const handleClick = () => {
    posthog.capture('clicked_recipe_card', {
      recipe_id: slug,
      category: categoryTitles,
      title: title,
    })
  }

  return (
    <Link href={`/recipes/${slug}`} onClick={handleClick}>
      <Card className="group/card overflow-hidden rounded-none shadow-recipe border-none">
        <div className="flex flex-col md:flex-row">
          {/* Image Container */}
          <div className="w-full md:w-[60%] relative">
            <AspectBox ratio="wide" className="relative w-full h-full">
              <OptimizedImage
                src={mainImage.asset.url}
                alt={mainImage.alt || title}
                fill
                priority
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover/card:scale-105"
              />
            </AspectBox>
            <RecipeTag tag={categories[0]?.title} />
          </div>

          {/* Content Container */}
          <div className="w-full md:w-[40%] p-8 md:p-10">
            <div className="w-[20%] h-[2px] bg-brand-primary mb-4 transition-all duration-300 ease-in-out group-hover/card:w-[45%]" />
            <Text variant="h3" className="mb-4">
              {title}
            </Text>
            <Text variant="body" className="mb-8">
              {description}
            </Text>
            <div className="h-[2px] bg-grey-500 mb-6" />
            <Flex className="items-center md:justify-between">
              <Flex gap="x-small">
                <Image
                  src={PrepIcon}
                  alt="Prep time icon"
                  className="w-4 h-4 md:w-5 md:h-5"
                />
                <Text className="font-bold text-sm md:text-base">
                  {prepTime} min
                </Text>
              </Flex>
              <Flex gap="x-small">
                <Image
                  src={ServingIcon}
                  alt="Serving size icon"
                  className="w-4 h-4 md:w-5 md:h-5"
                />
                <Text className="text-sm md:text-base">
                  {servings} servings
                </Text>
              </Flex>
              <Flex gap="x-small">
                <Image
                  src={DifficultyIcon}
                  alt="Difficulty level icon"
                  className="w-4 h-4 md:w-5 md:h-5"
                />
                <Text className="capitalize text-sm md:text-base">
                  {difficulty}
                </Text>
              </Flex>
            </Flex>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default MainRecipeCard;

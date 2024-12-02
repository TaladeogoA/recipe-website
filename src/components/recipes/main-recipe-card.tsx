import DifficultyIcon from "@/assets/icons/difficulty.svg";
import PrepIcon from "@/assets/icons/prep-time.svg";
import ServingIcon from "@/assets/icons/servings.svg";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Text } from "../custom-ui/text";
import { AspectBox, Flex } from "../layouts";
import { RecipeTag } from "./recipe-tag";

interface MainRecipeCardProps {
  title: string;
  description: string;
  tag: string;
  serving: number;
  prepTime: number;
  difficulty: "easy" | "medium" | "hard";
  image: string;
  imageAlt: string;
  slug: {
    current: string;
  };
}

const MainRecipeCard = ({
  title = "Creamy Garlic Parmesan Pasta",
  description = "A rich and creamy pasta dish made with fresh garlic, parmesan cheese, and herbs.",
  tag = "main course",
  serving = 6,
  prepTime = 60,
  difficulty = "medium",
  image,
  imageAlt,
  slug,
}: MainRecipeCardProps) => {
  return (
    <Link href={`/recipes/${slug.current}`}>
      <Card className="group/card overflow-hidden rounded-none shadow-recipe border-none">
        <div className="flex flex-col md:flex-row">
          {/* Image Container */}
          <div className="w-full md:w-[60%] relative">
            <AspectBox ratio="wide" className="relative w-full h-full">
              <Image
                src={image}
                alt={imageAlt ? imageAlt : title}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover/card:scale-110"
              />
            </AspectBox>
            <RecipeTag tag={tag} />
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
                  alt=""
                  className="w-4 h-4 md:w-5 md:h-5"
                />
                <Text className="font-bold text-sm md:text-base">
                  {prepTime} min
                </Text>
              </Flex>
              <Flex gap="x-small">
                <Image
                  src={ServingIcon}
                  alt=""
                  className="w-4 h-4 md:w-5 md:h-5"
                />
                <Text className="text-sm md:text-base">{serving} servings</Text>
              </Flex>
              <Flex gap="x-small">
                <Image
                  src={DifficultyIcon}
                  alt=""
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

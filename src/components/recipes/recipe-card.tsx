import DifficultyIcon from "@/assets/icons/difficulty.svg";
import PrepIcon from "@/assets/icons/prep-time.svg";
import ServingIcon from "@/assets/icons/servings.svg";
import RiceImg from "@/assets/images/recipes/Designer.jpeg";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Text } from "../custom-ui/text";
import { AspectBox, Flex } from "../layouts";

interface RecipeCardProps {
  title: string;
  description: string;
  tag: string;
  serving: number;
  prepTime: number;
  difficulty: "easy" | "medium" | "hard";
}

export function RecipeCard({
  title,
  description,
  tag,
  serving,
  prepTime,
  difficulty,
}: RecipeCardProps) {
  return (
    <Card
      className="group/card overflow-hidden rounded-none shadow-recipe border-none
        min-h-[600px] lg:min-h-[700px] xl:h-[80vh]
        transition-all duration-300 ease-in-out
        hover:scale-90 relative"
    >
      <div className="absolute top-6 right-6 z-10 bg-black text-white px-4 py-2">
        <Text className="text-sm text-white">{tag}</Text>
      </div>

      <AspectBox
        ratio="wide"
        className="overflow-hidden h-[45%] lg:h-[50%] xl:h-[57%]"
      >
        <Image
          src={RiceImg}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover/card:scale-110"
        />
      </AspectBox>
      <CardContent className="pt-6 lg:pt-8 xl:pt-14 h-[55%] lg:h-[50%] xl:h-[43%]">
        <div className="w-[20%] h-[2px] bg-brand-primary mb-2 transition-all duration-300 ease-in-out group-hover/card:w-[45%]" />
        <Text variant="h3" className="mb-2">
          {title}
        </Text>
        <Text variant="body" className="line-clamp-2">
          {description}
        </Text>
        <div className="h-[2px] bg-grey-500 mt-14 md:mt-6 xl:mt-12" />
        <Flex className="mt-6 md:justify-between">
          <Flex gap="x-small">
            <Image src={ServingIcon} alt="" className="w-4 h-4 md:w-5 md:h-5" />
            <Text className="font-bold text-sm md:text-base">
              {prepTime} mins
            </Text>
          </Flex>
          <Flex gap="x-small">
            <Image src={PrepIcon} alt="" className="w-4 h-4 md:w-5 md:h-5" />
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
      </CardContent>
    </Card>
  );
}

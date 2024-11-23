import PrepSrc from "@/assets/icons/prep-time.svg";
import ServingSrc from "@/assets/icons/servings.svg";
import RiceImg from "@/assets/images/recipes/Designer.jpeg";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Text } from "../custom-ui/text";
import { AspectBox, Flex } from "../layouts";

interface FeaturedRecipeCardProps {
  title: string;
  description: string;
  tag: string;
}

export function FeaturedRecipeCard({
  title,
  description,
  tag,
}: FeaturedRecipeCardProps) {
  return (
    <Card
      className="group/card overflow-hidden rounded-none shadow-recipe border-none h-[80vh]
    transition-all duration-300 ease-in-out
    hover:scale-90 relative"
    >
      <div className="absolute top-6 right-6 z-10 bg-black text-white px-4 py-2">
        <Text className="text-sm text-white">{tag}</Text>
      </div>

      <AspectBox
        ratio="wide"
        className="overflow-hidden h-[57%] md:h-[40%] xl:h-[57%]"
      >
        <Image
          src={RiceImg}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover/card:scale-110"
        />
      </AspectBox>
      <CardContent className="pt-6 md:pt-14 h-[43%] md:h-[60%] xl:h-[43%]">
        <div className="w-[20%] h-[2px] bg-brand-primary mb-2 transition-all duration-300 ease-in-out group-hover/card:w-[45%]" />
        <Text variant="h3" className="mb-2">
          {title}
        </Text>
        <Text variant="body">{description}</Text>
        <div className="h-[2px] bg-grey-500 mt-14 md:mt-10 xl:mt-12" />
        <Flex className="mt-6">
          <Flex gap="small">
            <Image src={ServingSrc} alt="" />
            <Text className="font-bold">60 min</Text>
          </Flex>
          <Flex gap="small">
            <Image src={PrepSrc} alt="" />
            <Text>6 servings</Text>
          </Flex>
        </Flex>
      </CardContent>
    </Card>
  );
}

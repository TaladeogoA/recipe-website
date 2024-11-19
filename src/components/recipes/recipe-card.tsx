import PrepSrc from "@/assets/icons/prep-time.svg";
import ServingSrc from "@/assets/icons/servings.svg";
import RiceImg from "@/assets/images/recipes/Designer.jpeg";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Text } from "../custom-ui/text";
import { AspectBox, Container, Flex } from "../layouts";

interface RecipeCardProps {
  title: string;
  description: string;
}

export function RecipeCard({ title, description }: RecipeCardProps) {
  return (
    <Container className="overflow-hidden h-full p-4">
      <Card
        className="group/card overflow-hidden rounded-none shadow-recipe border-none h-full
    transition-all duration-300 ease-in-out
    hover:scale-90"
      >
        <AspectBox ratio="wide" className="overflow-hidden">
          <Image
            src={RiceImg}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover/card:scale-110"
          />
        </AspectBox>
        <CardContent className="mt-10">
          <div className="w-[20%] h-[2px] bg-brand-primary mb-2 transition-all duration-300 ease-in-out group-hover/card:w-[45%]" />
          <Text variant="h3" className="mb-2">
            {title}
          </Text>
          <Text variant="body">{description}</Text>
          <div className="mx-4 h-[2px] bg-grey-500 mt-14" />
          <Flex>
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
    </Container>
  );
}

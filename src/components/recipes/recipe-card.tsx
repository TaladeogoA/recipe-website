import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RiceImg from "@/assets/images/recipes/Designer.jpeg";
import Image from "next/image";

interface RecipeCardProps {
  title: string;
  description: string;
}

export function RecipeCard({ title, description }: RecipeCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <div className="w-full h-48 md:h-56 lg:h-64 relative">
          <Image
            src={RiceImg}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-lg md:text-xl lg:text-2xl">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm md:text-base line-clamp-2">{description}</p>
      </CardContent>
    </Card>
  );
}

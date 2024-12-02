import { Text } from "@/components/custom-ui/text";
import Image, { StaticImageData } from "next/image";
import { FaStar } from "react-icons/fa";

interface ReviewCardProps {
  tagline: string;
  review: string;
  author: {
    name: string;
    image: StaticImageData;
  };
}

export function ReviewCard({ tagline, review, author }: ReviewCardProps) {
  return (
    <div className="bg-white p-8 shadow-md flex flex-col gap-4 h-[400px]">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-brand-primary w-5 h-5" />
        ))}
      </div>
      <Text variant="h3" className="font-bold text-xl">
        {tagline}
      </Text>

      <Text className="text-gray-600 flex-grow min-h-[120px]">{review}</Text>

      <div className="flex items-center gap-4 mt-auto">
        <div className="w-12 h-12 rounded-full relative overflow-hidden">
          <Image
            src={author.image}
            alt={author.name}
            fill
            className="object-cover"
          />
        </div>
        <Text className="font-medium">{author.name}</Text>
      </div>
    </div>
  );
}

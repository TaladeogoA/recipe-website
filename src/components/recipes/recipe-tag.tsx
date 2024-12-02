import { Text } from "../custom-ui/text";

interface RecipeTagProps {
  tag: string;
}

export function RecipeTag({ tag }: RecipeTagProps) {
  return (
    <div className="absolute top-6 right-6 z-10 bg-black text-white px-4 py-2">
      <Text className="text-sm text-white lowercase">{tag}</Text>
    </div>
  );
}

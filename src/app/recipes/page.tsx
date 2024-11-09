import { Container } from "@/components/layouts/container";
import { RecipeCard } from "@/components/recipes/recipe-card";

const RecipesPage = () => {
  return (
    <Container>
      <h1 className="text-4xl font-bold text-gray-800">Recipes Page</h1>
      <RecipeCard title="Amala" description="food" />
    </Container>
  );
};

export default RecipesPage;

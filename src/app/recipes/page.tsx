import { Text } from "@/components/custom-ui/text";
import { Page } from "@/components/layouts";
import MainRecipeCard from "@/components/recipes/main-recipe-card";

const RecipesPage = () => {
  return (
    <Page>
      <section className="w-full py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 mb-12">
            <Text variant="h1">Our Recipes</Text>
            <Text className="text-gray-600 max-w-[550px] md:text-center">
              Explore our collection of tried and tested recipes, from quick
              weekday meals to celebratory feasts.
            </Text>
          </div>

          <MainRecipeCard
            title="Classic Chocolate Brownies"
            description="Rich and fudgy brownies with a perfect crackly top."
            tag="dessert"
            serving={12}
            prepTime={45}
            difficulty="easy"
          />
        </div>
      </section>
    </Page>
  );
};

export default RecipesPage;

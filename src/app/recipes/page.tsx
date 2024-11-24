"use client";
import { Text } from "@/components/custom-ui/text";
import { Page } from "@/components/layouts";
import MainRecipeCard from "@/components/recipes/main-recipe-card";
import { RecipeCard } from "@/components/recipes/recipe-card";
import Link from "next/link";
import { usePathname } from "next/navigation";

const RecipesPage = () => {
  const pathname = usePathname();

  return (
    <Page>
      <section className="w-full py-16 md:py-20 px-10 md:px-14">
        <div className="container px-0">
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

      <section className="py-16 md:py-20 px-10 md:px-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 mb-12">
          <Text variant="h1">Latest recipes</Text>
          <div className="flex flex-row flex-wrap gap-4">
            {["all", "main course", "desserts", "healthy", "quick & easy"].map(
              (category) => {
                const href =
                  category === "all"
                    ? "/recipes"
                    : `/categories/${category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`;

                const isActive =
                  category === "all"
                    ? pathname === "/recipes"
                    : pathname === href;

                return (
                  <Link
                    key={category}
                    href={href}
                    className={`px-4 py-2 transition-all duration-200 ${
                      isActive
                        ? "bg-black text-white"
                        : "bg-white text-black shadow-md hover:shadow-lg"
                    }`}
                  >
                    <Text className="text-sm">{category}</Text>
                  </Link>
                );
              }
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {[...Array(9)].map((_, i) => (
            <RecipeCard
              key={i}
              title="Creamy Garlic Parmesan Pasta"
              description="A rich and creamy pasta dish made with fresh garlic, parmesan cheese, and herbs."
              tag="main course"
              serving={6}
              prepTime={60}
              difficulty="easy"
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="px-6 py-3 bg-black text-white shadow-md hover:bg-white hover:text-black transition-all duration-200 cursor-pointer">
            next
          </button>
        </div>
      </section>
    </Page>
  );
};

export default RecipesPage;

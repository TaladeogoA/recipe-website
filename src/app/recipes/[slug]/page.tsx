"use client";
import DifficultyIcon from "@/assets/icons/difficulty.svg";
import PrepIcon from "@/assets/icons/prep-time.svg";
import ServingIcon from "@/assets/icons/servings.svg";
import FallbackImg from "@/assets/images/recipes/recipe-placeholder-featured.jpg";
import { OptimizedImage } from "@/components/common/OptimizedImage";
import { SecondaryButton } from "@/components/custom-ui/secondary-button";
import { Text } from "@/components/custom-ui/text";
import { Page } from "@/components/layouts";
import { RecipeCard } from "@/components/recipes/recipe-card";
import { RecipesPageSkeleton } from "@/components/skeletons/recipes-page-skeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLatestRecipes, useRecipe } from "@/hooks/useRecipes";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const SingleRecipePage = () => {
  const params = useParams();
  const slug = params.slug as string;

  const { data: recipe, isLoading } = useRecipe(slug);
  const { data: latestRecipes, isLoading: isLatestLoading } =
    useLatestRecipes();

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  if (isLoading) {
    return <RecipesPageSkeleton />;
  }

  return (
    <Page className="relative">
      <div className="fixed inset-0 w-full h-[50vh] md:h-[70vh] -z-10">
        <OptimizedImage
          src={recipe?.mainImage.asset.url ?? FallbackImg}
          alt={recipe?.mainImage.alt || recipe?.title || "Recipe image"}
          fill
          priority
          className="object-cover"
        />
      </div>

      <motion.div
        className="relative min-h-screen bg-white mt-[45vh] md:mt-[60vh]"
        style={{ y: backgroundY }}
      >
        <div className="py-6 md:py-12 w-full mb-24 md:mb-96">
          <section className="flex flex-col lg:flex-row gap-6 md:gap-8 w-full px-4 md:px-8 xl:px-32">
            <div className="w-full lg:w-[65%] shadow-md -mt-16 md:-mt-32 bg-white p-6 md:p-12 min-h-max">
              <Text variant="h1">{recipe?.title}</Text>
              <Text>{recipe?.description}</Text>

              <Tabs defaultValue="ingredients" className="mt-8 md:mt-12">
                <TabsList className="bg-none w-full flex flex-col sm:flex-row justify-between h-full">
                  {["ingredients", "preparation", "overall"].map((category) => (
                    <TabsTrigger key={category} value={category} className="">
                      <Text>{category}</Text>
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value="ingredients" className="mt-8 md:mt-12">
                  <Text variant="h3">Ingredients</Text>
                  <ol className="text-sm md:text-base space-y-2">
                    {recipe?.ingredients.map((ing, idx) => (
                      <li key={idx}>
                        {ing.amount} {ing?.ingredient}
                        {ing.notes && (
                          <span className="text-gray-600"> ({ing.notes})</span>
                        )}
                      </li>
                    ))}
                  </ol>
                </TabsContent>

                <TabsContent value="preparation" className="mt-8 md:mt-12">
                  <Text variant="h3">Preparation</Text>
                  <ol className="text-sm md:text-base space-y-2">
                    {recipe?.instructions.map((inst, idx) => (
                      <li key={idx}>{inst.description}</li>
                    ))}
                  </ol>
                </TabsContent>

                <TabsContent value="overall" className="mt-8 md:mt-12">
                  <Text variant="h3">Overall</Text>
                  <Text>{recipe?.conclusion}</Text>
                </TabsContent>
              </Tabs>
            </div>

            <div className="w-full lg:w-[35%] shadow-md -mt-16 md:-mt-32 bg-white h-max p-6 md:p-12">
              <Text variant="h3">About the recipe</Text>
              <ul className="flex flex-col gap-4 md:gap-5 mt-6 md:mt-10">
                <li className="flex gap-4 items-center">
                  <Image
                    src={ServingIcon}
                    alt=""
                    className="w-4 h-4 md:w-5 md:h-5"
                  />
                  <div className="flex items-center gap-2">
                    <Text>portions:</Text>
                    <Text>{recipe?.servings} servings</Text>
                  </div>
                </li>
                <li className="flex gap-4 items-center">
                  <Image
                    src={PrepIcon}
                    alt=""
                    className="w-4 h-4 md:w-5 md:h-5"
                  />
                  <div className="flex items-center gap-2">
                    <Text>prep time:</Text>
                    <Text>{recipe?.prepTime} mins</Text>
                  </div>
                </li>
                <li className="flex gap-4 items-center">
                  <Image
                    src={DifficultyIcon}
                    alt=""
                    className="w-4 h-4 md:w-5 md:h-5"
                  />
                  <div className="flex items-center gap-2">
                    <Text>difficulty:</Text>
                    <Text>{recipe?.difficulty}</Text>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="mt-8 md:mt-10 mb-20 bg-grey-200 px-6 pt-32 xl:px-32">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 md:mb-12">
              <Text variant="h2">Latest recipes</Text>
              <Link href="/recipes">
                <SecondaryButton>Browse All Recipes</SecondaryButton>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
              {isLatestLoading
                ? [...Array(3)].map((_, i) => (
                    <Skeleton key={i} className="h-[400px] w-full" />
                  ))
                : latestRecipes
                    ?.filter((recipe) => recipe.slug.current !== slug)
                    .slice(0, 3)
                    .map((recipe) => (
                      <RecipeCard
                        key={recipe._id}
                        title={recipe.title}
                        description={recipe.description}
                        tag={recipe.categories[0]?.title}
                        serving={recipe.servings}
                        prepTime={recipe.prepTime}
                        difficulty={recipe.difficulty}
                        image={recipe.mainImage.asset.url}
                        imageAlt={recipe.mainImage.alt || recipe.title}
                        slug={recipe.slug}
                      />
                    ))}
            </div>
          </section>
        </div>
      </motion.div>
    </Page>
  );
};

export default SingleRecipePage;

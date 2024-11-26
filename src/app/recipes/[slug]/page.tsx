"use client";
import DifficultyIcon from "@/assets/icons/difficulty.svg";
import PrepIcon from "@/assets/icons/prep-time.svg";
import ServingIcon from "@/assets/icons/servings.svg";
import RiceImg from "@/assets/images/recipes/Designer.jpeg";
import { SecondaryButton } from "@/components/custom-ui/secondary-button";
import { Text } from "@/components/custom-ui/text";
import { Page } from "@/components/layouts";
import { RecipeCard } from "@/components/recipes/recipe-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const SingleRecipePage = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <Page className="relative">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 w-full h-[50vh] md:h-[70vh] -z-10">
        <Image
          src={RiceImg}
          alt="Recipe"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Container */}
      <motion.div
        className="relative min-h-screen bg-white mt-[45vh] md:mt-[60vh]"
        style={{
          y: backgroundY,
        }}
      >
        <div className="py-6 md:py-12 w-full mb-24 md:mb-96">
          <section className="flex flex-col lg:flex-row gap-6 md:gap-8 w-full px-4 md:px-8 xl:px-32">
            {/* Recipe Details */}
            <div className="w-full lg:w-[65%] shadow-md -mt-16 md:-mt-32 bg-white p-6 md:p-12 min-h-max">
              <Text variant="h1">Classic Chocolate Brownies</Text>
              <Text>Rich and fudgy brownies with a perfect crackly top.</Text>

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
                  <ul className="text-sm md:text-base space-y-2">
                    <li>1 cup all-purpose flour</li>
                    <li>1/2 cup unsweetened cocoa powder</li>
                    <li>1/2 teaspoon baking powder</li>
                    <li>1/2 teaspoon salt</li>
                    <li>1/2 cup unsalted butter, melted</li>
                    <li>1 cup granulated sugar</li>
                    <li>1 teaspoon vanilla extract</li>
                    <li>2 large eggs</li>
                  </ul>
                </TabsContent>

                <TabsContent value="preparation" className="mt-8 md:mt-12">
                  <Text variant="h3">Preparation</Text>
                  <ol className="text-sm md:text-base space-y-2">
                    <li>
                      Preheat oven to 350°F (180°C). Grease and line an 8-inch
                      square baking pan with parchment paper.
                    </li>
                    <li>
                      In a medium bowl, whisk together flour, cocoa powder,
                      baking powder, and salt.
                    </li>
                    <li>
                      In a large bowl, combine melted butter, sugar, and vanilla
                      extract. Add eggs one at a time, mixing well after each
                      addition.
                    </li>
                    <li>
                      Add the dry ingredients to the wet ingredients and mix
                      until just combined.
                    </li>
                    <li>
                      Pour the batter into the prepared baking pan and smooth
                      the top with a spatula.
                    </li>
                    <li>
                      Bake for 25-30 minutes, or until a toothpick inserted into
                      the center comes out with a few moist crumbs.
                    </li>
                    <li>
                      Let the brownies cool completely in the pan before slicing
                      and serving.
                    </li>
                  </ol>
                </TabsContent>

                <TabsContent value="overall" className="mt-8 md:mt-12">
                  <Text variant="h3">Overall</Text>
                  <Text>
                    These classic chocolate brownies are rich, fudgy, and have a
                    perfect crackly top. They&apos;re easy to make and perfect
                    for any occasion.
                  </Text>
                </TabsContent>
              </Tabs>
            </div>

            {/* About the Recipe */}
            <div className="w-full lg:w-[35%] shadow-md -mt-16 md:-mt-32 bg-white h-max p-6 md:p-12">
              <Text variant="h3">About the recipe</Text>

              <ul className="flex flex-col gap-4 md:gap-5 mt-6 md:mt-10">
                <li className="flex gap-4 items-center">
                  <Image
                    src={PrepIcon}
                    alt=""
                    className="w-4 h-4 md:w-5 md:h-5"
                  />
                  <div className="flex items-center gap-2">
                    <Text>portions:</Text>
                    <Text>6 servings</Text>
                  </div>
                </li>

                <li className="flex gap-4 items-center">
                  <Image
                    src={ServingIcon}
                    alt=""
                    className="w-4 h-4 md:w-5 md:h-5"
                  />
                  <div className="flex items-center gap-2">
                    <Text>prep time:</Text>
                    <Text>45 mins</Text>
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
                    <Text>easy</Text>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="mt-8 md:mt-10 bg-grey-200 px-6 pt-32 xl:px-32">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 md:mb-12">
              <Text variant="h2">Latest recipes</Text>
              <Link href="/recipes">
                <SecondaryButton>Browse All Recipes</SecondaryButton>
              </Link>
            </div>

            {/* Latest Recipes */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
              {[...Array(3)].map((_, i) => (
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
          </section>
        </div>
      </motion.div>
    </Page>
  );
};

export default SingleRecipePage;

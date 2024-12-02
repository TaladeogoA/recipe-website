"use client";
import { Text } from "@/components/custom-ui/text";
import { Page } from "@/components/layouts";
import { RecipeCard } from "@/components/recipes/recipe-card";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearchRecipes } from "@/hooks/useSearchRecipes";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const { data: recipes, isLoading } = useSearchRecipes(query);

  return (
    <Page>
      <section className="py-16 md:py-20 px-10 md:px-14">
        <div className="container mx-auto">
          <h1 className="text-3xl mb-8">
            Search Results for &quot;{query}&quot;
          </h1>

          {!isLoading && recipes?.length === 0 ? (
            <div className="text-center py-16">
              <Text variant="h3" className="mb-4">
                No recipes found
              </Text>
              <Text className="text-gray-600 max-w-md mx-auto">
                We couldn&apos;t find any recipes matching your search. Try
                using different keywords or browse our categories.
              </Text>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {isLoading
                ? [...Array(6)].map((_, i) => (
                    <div key={i} className="flex flex-col">
                      <Skeleton className="aspect-[4/3] w-full mb-4" />
                      <Skeleton className="h-[2px] w-12 mb-4" />
                      <Skeleton className="h-8 w-3/4 mb-2" />
                      <Skeleton className="h-20 w-full mb-4" />
                      <div className="flex justify-between">
                        <Skeleton className="h-6 w-16" />
                        <Skeleton className="h-6 w-16" />
                        <Skeleton className="h-6 w-16" />
                      </div>
                    </div>
                  ))
                : recipes?.map((recipe) => (
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
          )}
        </div>
      </section>
    </Page>
  );
}

import { SecondaryButton } from "@/components/custom-ui/secondary-button";
import { Text } from "@/components/custom-ui/text";
import { FeaturedRecipeCard } from "@/components/recipes/featured-recipe-card";
import { useSlider } from "@/hooks/useSlider";
import { Recipe } from "@/types/recipe";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";

interface FeaturedRecipesSectionProps {
  recipes: Recipe[];
}

export function FeaturedRecipesSection({
  recipes,
}: FeaturedRecipesSectionProps) {
  const { setSlider, next, prev } = useSlider();

  return (
    <section
      id="featured-recipes"
      className="w-full py-16 md:py-20 px-0 lg:px-10"
    >
      <div className="container mx-auto">
        {/* Header - Desktop/Tablet */}
        <div className="hidden sm:flex sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
          <Text variant="h2">Browse our featured recipes</Text>
          <div className="flex gap-4">
            <SecondaryButton onClick={prev}>
              <FaChevronLeft />
            </SecondaryButton>
            <SecondaryButton onClick={next}>
              <FaChevronRight />
            </SecondaryButton>
          </div>
        </div>

        {/* Header - Mobile */}
        <div className="sm:hidden text-center mb-8">
          <Text variant="h2" className="mb-6">
            Browse our featured recipes
          </Text>
        </div>

        {/* Slick Carousel */}
        <div className="relative" dir="rtl">
          <Slider
            ref={(c) => setSlider(c)}
            infinite={true}
            speed={500}
            slidesToShow={2.5}
            slidesToScroll={1}
            arrows={false}
            rtl={true}
            responsive={[
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1.5,
                  slidesToScroll: 1,
                  centerMode: true,
                  centerPadding: "40px",
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
          >
            {recipes?.map((recipe) => (
              <div key={recipe._id} className="md:px-3" dir="ltr">
                <FeaturedRecipeCard
                  slug={recipe.slug}
                  title={recipe.title}
                  description={recipe.description}
                  tag={recipe.categories[0]?.title}
                  prepTime={recipe.prepTime}
                  serving={recipe.servings}
                  difficulty={recipe.difficulty}
                  image={recipe.mainImage.asset.url}
                  imageAlt={recipe.mainImage.alt}
                />
              </div>
            ))}
          </Slider>

          {/* Mobile Navigation */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[150%] flex gap-56 sm:hidden z-10">
            <button
              onClick={prev}
              className="p-3 bg-black hover:bg-brand-primary transition-colors duration-200 w-12 h-12 flex items-center justify-center"
            >
              <FaChevronLeft className="w-5 h-5 text-white transition-colors duration-200 hover:text-black" />
            </button>
            <button
              onClick={next}
              className="p-3 bg-black hover:bg-brand-primary transition-colors duration-200 w-12 h-12 flex items-center justify-center"
            >
              <FaChevronRight className="w-5 h-5 text-white transition-colors duration-200 hover:text-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

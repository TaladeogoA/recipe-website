import EmmaSrc from "@/assets/images/reviews/emma.jpg";
import JamesSrc from "@/assets/images/reviews/james.jpg";
import MarcoSrc from "@/assets/images/reviews/marco.jpg";
import MayaSrc from "@/assets/images/reviews/maya.jpg";
import { SecondaryButton } from "@/components/custom-ui/secondary-button";
import { Text } from "@/components/custom-ui/text";
import { ReviewCard } from "@/components/reviews/review-card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";

interface ReviewsSectionProps {
  reviewSlider: Slider | null;
  setReviewSlider: (slider: Slider | null) => void;
}

export function ReviewsSection({
  reviewSlider,
  setReviewSlider,
}: ReviewsSectionProps) {
  return (
    <section className="w-full py-16 md:py-20 px-0 lg:px-10">
      <div className="px-6 md:px-0">
        <div className="hidden sm:flex sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
          <Text variant="h2">What Our Community Says</Text>
          <div className="flex gap-4">
            <SecondaryButton onClick={() => reviewSlider?.slickPrev()}>
              <FaChevronLeft />
            </SecondaryButton>
            <SecondaryButton onClick={() => reviewSlider?.slickNext()}>
              <FaChevronRight />
            </SecondaryButton>
          </div>
        </div>

        <div className="sm:hidden text-center mb-8">
          <Text variant="h2" className="mb-6">
            What Our Community Says
          </Text>
        </div>

        <div className="relative" dir="rtl">
          <Slider
            ref={(c) => setReviewSlider(c)}
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
            <div className="md:px-3" dir="ltr">
              <ReviewCard
                tagline="Perfect Lebanese Recipes"
                review="Sarah's hummus recipe reminds me of my grandmother's. The detailed tips about tahini quality made all the difference!"
                author={{
                  name: "Maya Khalil",
                  image: MayaSrc,
                }}
              />
            </div>
            <div className="md:px-3" dir="ltr">
              <ReviewCard
                tagline="Fusion Done Right"
                review="The fusion recipes are innovative yet respectful to both cultures. The way traditional ingredients are combined creates exciting new flavors I can't get enough of!"
                author={{
                  name: "James Chen",
                  image: JamesSrc,
                }}
              />
            </div>
            <div className="md:px-3" dir="ltr">
              <ReviewCard
                tagline="Made Me a Better Cook"
                review="The detailed instructions and cultural context behind each recipe have transformed my approach to cooking. Thank you Sarah!"
                author={{
                  name: "Emma Thompson",
                  image: EmmaSrc,
                }}
              />
            </div>
            <div className="md:px-3" dir="ltr">
              <ReviewCard
                tagline="Authentic Italian Flavors"
                review="As an Italian, I'm usually skeptical of Italian recipes online, but Sarah's recipes are the real deal. Her tiramisu is perfection!"
                author={{
                  name: "Marco Rossi",
                  image: MarcoSrc,
                }}
              />
            </div>
          </Slider>

          {/* Mobile Navigation */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[150%] flex gap-80 sm:hidden z-10">
            <button
              onClick={() => reviewSlider?.slickPrev()}
              className="p-3 bg-black hover:bg-brand-primary transition-colors duration-200 w-12 h-12 flex items-center justify-center"
              aria-label="Previous Review"
            >
              <FaChevronLeft className="w-5 h-5 text-white transition-colors duration-200 hover:text-black" />
            </button>
            <button
              onClick={() => reviewSlider?.slickNext()}
              className="p-3 bg-black hover:bg-brand-primary transition-colors duration-200 w-12 h-12 flex items-center justify-center"
              aria-label="Next Review"
            >
              <FaChevronRight className="w-5 h-5 text-white transition-colors duration-200 hover:text-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

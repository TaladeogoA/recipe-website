import { Text } from "@/components/custom-ui/text";

export function AwardsSection() {
  return (
    <section className="w-full min-h-screen py-16 md:py-20 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-2/5 lg:sticky lg:top-32 lg:h-fit">
          <Text variant="h2" className="mb-6">
            My Awards and Recognitions
          </Text>
          <Text className="text-gray-600">
            Each recognition represents not just personal achievement, but the
            joy of bringing diverse culinary traditions to home kitchens
            worldwide. These awards celebrate our growing community of food
            lovers and cultural explorers.
          </Text>
        </div>

        <div className="w-full lg:w-3/5">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-4">
              <Text className="text-brand-primary text-lg">01</Text>
              <div>
                <Text variant="h3" className="text-2xl font-bold mb-2">
                  James Beard Digital Media Award - 2023
                </Text>
                <Text className="text-gray-600">
                  Recognized for outstanding content that bridges cultural gaps
                  through culinary storytelling and recipe preservation.
                </Text>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Text className="text-brand-primary text-lg">02</Text>
              <div>
                <Text variant="h3" className="text-2xl font-bold mb-2">
                  International Association of Culinary Professionals - 2022
                </Text>
                <Text className="text-gray-600">
                  Excellence in Digital Media for innovative approach to
                  teaching global cooking techniques.
                </Text>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Text className="text-brand-primary text-lg">03</Text>
              <div>
                <Text variant="h3" className="text-2xl font-bold mb-2">
                  Saveur Blog Awards: Best Cultural Cooking Blog - 2021
                </Text>
                <Text className="text-gray-600">
                  Celebrated for authentic representation of diverse culinary
                  traditions and fusion recipes.
                </Text>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Text className="text-brand-primary text-lg">04</Text>
              <div>
                <Text variant="h3" className="text-2xl font-bold mb-2">
                  Food & Wine Digital Innovation Award - 2020
                </Text>
                <Text className="text-gray-600">
                  Recognized for revolutionizing online recipe presentation and
                  cultural context integration.
                </Text>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Text className="text-brand-primary text-lg">05</Text>
              <div>
                <Text variant="h3" className="text-2xl font-bold mb-2">
                  Le Cordon Bleu Excellence in Cultural Preservation - 2019
                </Text>
                <Text className="text-gray-600">
                  Awarded for outstanding contribution to preserving and
                  modernizing traditional recipes.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

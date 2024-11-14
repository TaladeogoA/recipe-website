import { PrimaryButton } from "@/components/custom-ui/primary-button";
import { SecondaryButton } from "@/components/custom-ui/secondary-button";
import { Text } from "@/components/custom-ui/text";
import { Container, Grid, Page, Section, Stack } from "@/components/layouts";

export default function Home() {
  return (
    <Page>
      {/* example layout */}
      <Section className="pt-24 pb-16">
        <Container>
          <Text variant="h1" className="max-w-[600px]">
            Discover Amazing Recipes for Every Occasion
          </Text>
          <Text className="max-w-[500px] text-gray-600">
            Explore our curated collection of delicious recipes, from quick
            weekday meals to special occasion dishes that will impress your
            guests.
          </Text>
        </Container>
        <Container>
          <PrimaryButton>Browse Recipes</PrimaryButton>
          <SecondaryButton>Learn More</SecondaryButton>
        </Container>
      </Section>

      <Section className="pt-24 pb-16">
        <Stack gap="large" className="items-center text-center">
          <div className="space-y-4 max-w-[600px]">
            <Text variant="h2">Why Choose Our Recipes</Text>
            <Text className="text-gray-600">
              From beginner-friendly to advanced culinary creations, we have
              something for every skill level.
            </Text>
          </div>
          <Grid columns={{ default: 1, sm: 2, lg: 3 }} gap="medium">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-lg space-y-4">
                <Text variant="h3">{feature.title}</Text>
                <Text className="text-gray-600">{feature.description}</Text>
              </div>
            ))}
          </Grid>
        </Stack>
      </Section>
    </Page>
  );
}

const features = [
  {
    title: "Easy to Follow",
    description:
      "Step-by-step instructions that make cooking simple and enjoyable.",
  },
  {
    title: "Seasonal Ingredients",
    description:
      "Recipes that highlight the best ingredients for every season.",
  },
  {
    title: "Community Tested",
    description: "Tried and tested recipes from our cooking community.",
  },
];

import { Text } from "@/components/custom-ui/text";
import { Page } from "@/components/layouts";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  return (
    <Page>
      <section className="py-16 md:py-20 px-10 md:px-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 mb-12">
          <Text variant="h1">Category: {params.slug.replace(/-/g, " ")}</Text>
          {/* Category filters */}
        </div>

        {/* Grid of RecipeCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Recipe cards will go here */}
        </div>
      </section>
    </Page>
  );
}

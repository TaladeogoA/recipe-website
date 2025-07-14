import { getRecipeBySlug } from "@/lib/queries/recipe";
import { Metadata } from "next";
import SingleRecipePage from "./SingleRecipePage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const recipe = await getRecipeBySlug(resolvedParams.slug);

  if (!recipe) {
    return {
      title: "Recipe Not Found | Gather",
      description: "This recipe doesn't exist.",
    };
  }

  const imageUrl = recipe.mainImage?.asset?.url || "https://yourdomain.com/fallback.jpg";
  const fullUrl = `https://yourdomain.com/recipes/${resolvedParams.slug}`;

  return {
    title: `${recipe.title} | Gather`,
    description: recipe.description,
    openGraph: {
      title: recipe.title,
      description: recipe.description,
      type: "article",
      url: fullUrl,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: recipe.mainImage?.alt || recipe.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: recipe.title,
      description: recipe.description,
      images: [imageUrl],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const recipe = await getRecipeBySlug(resolvedParams.slug);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return <SingleRecipePage recipe={recipe} slug={resolvedParams.slug} />;
}

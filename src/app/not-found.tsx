"use client";
import { SecondaryButton } from "@/components/custom-ui/secondary-button";
import { Text } from "@/components/custom-ui/text";
import { Page } from "@/components/layouts";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function NotFoundContent() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "";

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <Text variant="h1" className="mb-6">
        404 - Page Not Found
      </Text>
      <Text className="text-gray-600 max-w-md mx-auto mb-8">
        {from
          ? `We couldn't find the page "${from}".`
          : "The page you're looking for doesn't exist."}{" "}
        Try going back to our homepage or browse our recipes.
      </Text>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/">
          <SecondaryButton>Go to Homepage</SecondaryButton>
        </Link>
        <Link href="/recipes">
          <SecondaryButton>Browse Recipes</SecondaryButton>
        </Link>
      </div>
    </div>
  );
}

export default function NotFound() {
  return (
    <Page>
      <Suspense fallback={<div>Loading...</div>}>
        <NotFoundContent />
      </Suspense>
    </Page>
  );
}

"use client";
import { SecondaryButton } from "@/components/custom-ui/secondary-button";
import { Text } from "@/components/custom-ui/text";
import Link from "next/link";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <Text variant="h1" className="mb-6">
        404 - Page Not Found
      </Text>
      <Text className="text-gray-600 max-w-md mx-auto mb-8">
        The page you&apos;re looking for doesn&apos;t exist. Try going back to
        our homepage or browse our recipes.
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

export default NotFound;

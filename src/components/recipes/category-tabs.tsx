import { useRecipeCategories } from "@/hooks/useRecipeCategories";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Text } from "../custom-ui/text";
import { CategoryTabsSkeleton } from "../skeletons/category";

export function CategoryTabs() {
  const pathname = usePathname();
  const { data: categories, isLoading } = useRecipeCategories();

  if (isLoading) {
    return <CategoryTabsSkeleton />;
  }

  return (
    <div className="flex flex-row flex-wrap gap-4 justify-end">
      {["all", ...(categories?.map((c) => c.title) || [])].map((category) => {
        const href =
          category === "all"
            ? "/recipes"
            : `/categories/${category
                .toLowerCase()
                .replace(/ & /g, "-")
                .replace(/ /g, "-")}`;

        const isActive =
          category === "all" ? pathname === "/recipes" : pathname === href;

        return (
          <Link
            key={category}
            href={href}
            className={`
              px-4 py-2
              transition-all duration-200
              lowercase
              rounded-sm
              focus:outline-none
              focus:ring-2
              focus:ring-brand-primary
              focus:ring-offset-2
              ${
                isActive
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-white text-black shadow-md hover:shadow-lg hover:bg-gray-50  hover:transform hover:-translate-y-0.5"
              }
            `}
          >
            <Text className="text-sm">{category}</Text>
          </Link>
        );
      })}
    </div>
  );
}

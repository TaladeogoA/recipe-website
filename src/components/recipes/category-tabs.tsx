import { useRecipeCategories } from "@/hooks/useRecipeCategories";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Text } from "../custom-ui/text";

export function CategoryTabs() {
  const pathname = usePathname();
  const { data: categories } = useRecipeCategories();

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
            className={`px-4 py-2 transition-all lowercase duration-200 ${
              isActive
                ? "bg-black text-white"
                : "bg-white text-black shadow-md hover:shadow-lg"
            }`}
          >
            <Text className="text-sm">{category}</Text>
          </Link>
        );
      })}
    </div>
  );
}

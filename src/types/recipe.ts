export interface RecipeCategory {
  _id: string;
  title: string;
  slug: {
    current: string;
    _type: string;
  };
  description: string;
  icon: string;
}

export interface Recipe {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  mainImage: {
    asset: {
      url: string;
    };
    alt: string;
  };
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: "easy" | "medium" | "hard";
  featured: boolean;
  publishedAt: string;
  categories: ResolvedCategory[];
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
}

interface ResolvedCategory {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
}

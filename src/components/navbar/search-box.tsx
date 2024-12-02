"use client";
import { useSearchRecipes } from "@/hooks/useSearchRecipes";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function SearchBox() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { data: suggestions, isLoading } = useSearchRecipes(query);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative" ref={wrapperRef}>
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          placeholder="Search for recipes"
          className="w-full px-8 py-4 pl-10 pr-10 text-gray-800 bg-gray-100 rounded-none focus:outline-none hover:bg-gray-200"
        />
        {/* Search Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-900 absolute left-3 top-1/2 -translate-y-1/2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        {/* Loading Spinner */}
        {isLoading && query.length > 2 && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <div className="animate-spin h-5 w-5 border-2 border-brand-primary border-t-transparent rounded-full" />
          </div>
        )}
      </form>

      {isOpen && query.length > 2 && (
        <div className="absolute w-full bg-white shadow-lg mt-2 max-h-96 overflow-y-auto z-50">
          {suggestions?.slice(0, 5).map((recipe) => (
            <button
              key={recipe._id}
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
              onClick={() => {
                router.push(`/recipes/${recipe.slug.current}`);
                setIsOpen(false);
                setQuery("");
              }}
            >
              {recipe.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

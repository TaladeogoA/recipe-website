"use client";
import LogoImg from "@/assets/images/brand/logo.jpg";
import { usePageLoadingIndicator } from "@/hooks/usePageLoadingIndicator";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Text } from "../custom-ui/text";
import { SearchBox } from "../navbar/search-box";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  usePageLoadingIndicator();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full bg-white shadow-lg max-w-7xl px-4 py-8 mx-auto relative z-50">
      <div className="flex items-center justify-between">
        {/* Left group - Logo and Desktop Menu */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-800 flex items-center gap-2"
          >
            <Image
              src={LogoImg}
              height={50}
              width={50}
              alt="Gather Logo"
              className="object-cover"
            />
            Gather
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8">
            <li>
              <NavLink href="/">
                <Text>home</Text>
              </NavLink>
            </li>
            <li>
              <NavLink href="/about">
                <Text>about</Text>
              </NavLink>
            </li>
            <li>
              <NavLink href="/recipes">
                <Text>recipes</Text>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right group - Search and Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Desktop Search */}
          <div className="hidden md:flex items-center relative">
            <SearchBox />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 bg-black hover:bg-brand-primary transition-colors duration-200 w-12 h-12 flex items-center justify-center"
            aria-label="Toggle Menu"
            onClick={toggleMenu}
          >
            <div className="relative w-6 h-6">
              {/* Menu Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 text-white absolute inset-0 transition-all duration-300 ${isMenuOpen
                  ? "opacity-0 rotate-180 scale-0"
                  : "opacity-100 rotate-0 scale-100"
                  }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>

              {/* Close Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 text-white absolute inset-0 transition-all duration-300 ${isMenuOpen
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 rotate-180 scale-0"
                  }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute left-0 right-0 top-full bg-white shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Mobile Search */}
          <div className="relative mb-6">
            <SearchBox />
          </div>
          {/* Mobile menu items */}
          <ul className="flex flex-col gap-4 pb-4">
            <li>
              <NavLink
                href="/"
                className="block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                home
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/about"
                className="block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                about
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/recipes"
                className="block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                recipes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

function NavLink({ href, children, onClick, className = "" }: NavLinkProps) {
  const pathname = usePathname();
  const isActive =
    (href === "/" && pathname === "/") ||
    (href !== "/" && pathname === href) ||
    (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <Link
      href={href}
      className={`
        ${isActive ? "text-brand-primary" : "text-gray-800"}
        hover:text-brand-primary
        transition-colors
        duration-200
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

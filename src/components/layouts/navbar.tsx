"use client";
import LogoImg from "@/assets/images/brand/logo.jpg";
import Image from "next/image";
import { useState } from "react";
import { Text } from "../custom-ui/text";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full bg-white shadow-lg max-w-7xl px-4 py-8 mx-auto relative z-50">
      <div className="flex items-center justify-between">
        {/* Left group - Logo and Desktop Menu */}
        <div className="flex items-center gap-8">
          <a
            href="#"
            className="text-2xl font-bold text-gray-800 flex items-center gap-2"
          >
            <Image
              src={LogoImg}
              height={50}
              width={50}
              alt="TastyQ"
              className="object-cover"
            />
            TastyQ
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8">
            <li>
              <a href="#" className="text-gray-800 hover:text-primary">
                <Text>home</Text>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-primary">
                <Text>about</Text>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-primary">
                <Text>recipes</Text>
              </a>
            </li>
          </ul>
        </div>

        {/* Right group - Search and Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Desktop Search */}
          <div className="hidden md:flex items-center relative">
            <input
              type="text"
              placeholder="Search for recipes"
              className="w-full px-8 py-4 pl-10 text-gray-800 bg-gray-100 rounded-none focus:outline-none hover:bg-gray-200"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-900 absolute left-3"
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
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 bg-black hover:bg-brand-primary transition-colors duration-200 w-12 h-12 flex items-center justify-center"
            onClick={toggleMenu}
          >
            <div className="relative w-6 h-6">
              {/* Menu Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 text-white absolute inset-0 transition-all duration-300 ${
                  isMenuOpen
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
                className={`h-6 w-6 text-white absolute inset-0 transition-all duration-300 ${
                  isMenuOpen
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
        className={`md:hidden absolute left-0 right-0 top-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Mobile Search */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search for recipes"
              className="w-full px-8 py-4 pl-10 text-gray-800 bg-gray-100 rounded-none focus:outline-none hover:bg-gray-200"
            />
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
          </div>

          {/* Mobile menu items */}
          <ul className="flex flex-col gap-4 pb-4">
            <li>
              <a
                href="#"
                className="text-gray-800 hover:text-primary block py-2"
              >
                home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-800 hover:text-primary block py-2"
              >
                about
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-800 hover:text-primary block py-2"
              >
                recipes
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import LogoImg from "@/assets/images/brand/logo.jpg";
import Image from "next/image";
import { Text } from "../custom-ui/text";

const Footer = () => {
  return (
    <footer className="w-[calc(100%-2rem)] bg-white border-t border-grey-600 mx-4">
      <div className="max-w-7xl mx-auto pt-6 pb-12 md:pt-16 md:pb-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image
                src={LogoImg}
                height={50}
                width={50}
                alt="Gather"
                className="object-cover"
              />
              <span className="text-2xl font-bold text-gray-800">Gather</span>
            </div>
            <Text variant="body" className="text-gray-600">
              Discover, create and share delicious recipes from around the
              world!
            </Text>
          </div>

          {/* Right Column - Subscribe */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <input
                  type="email"
                  placeholder="Enter your email"
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <button className="bg-black hover:bg-brand-primary text-white py-4 px-8 transition-colors duration-200">
                Subscribe
              </button>
            </div>
            <Text variant="body" className="text-gray-600">
              Join our community of 5,000+ food lovers receiving weekly recipes
              and cooking tips!
            </Text>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

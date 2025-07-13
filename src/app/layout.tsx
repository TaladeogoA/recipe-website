import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "nprogress/nprogress.css";
import "./globals.css";
import { Providers } from "./providers";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gather | Simple & Delicious Recipe Collection",
  description:
    "Discover a curated collection of simple yet delicious recipes. From quick weeknight dinners to special occasion dishes, find your next culinary inspiration.",
  openGraph: {
    title: "Gather | Simple & Delicious Recipe Collection",
    description:
      "Discover a curated collection of simple yet delicious recipes. From quick weeknight dinners to special occasion dishes, find your next culinary inspiration.",
    type: "website",
    locale: "en_US",
    siteName: "Gather",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gather | Simple & Delicious Recipe Collection",
    description:
      "Discover a curated collection of simple yet delicious recipes. From quick weeknight dinners to special occasion dishes, find your next culinary inspiration.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.className}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#81d489" />
        <style>{`
          #nprogress .bar {
            background: rgb(129, 212, 137) !important;
            height: 3px;
          }
          #nprogress .peg {
            box-shadow: 0 0 10px rgb(129, 212, 137), 0 0 5px rgb(129, 212, 137);
          }
        `}</style>
      </head>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

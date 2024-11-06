import type { Metadata } from "next";
import "./globals.css";
import { Recursive } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const recursive = Recursive({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Content Creator Application",
  description:
    "AI Content Creator is a powerful web application that helps users generate engaging content for various platforms, including YouTube descriptions, Twitter posts, LinkedIn updates, and Instagram captions. Designed for creators looking to streamline their content creation process, this tool leverages AI to produce high-quality, tailored outputs quickly and efficiently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={recursive.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}

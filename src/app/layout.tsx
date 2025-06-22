import type { Metadata } from "next";
import { Langar } from "next/font/google";
import "./globals.css";
import "reveal.js/dist/reveal.css";
import "@/styles/elegant-charm.css";

const langar = Langar({
  variable: "--font-langar",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "HKBU Presentation",
  description: "Interactive presentation built with Next.js and Reveal.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${langar.className} ${langar.variable} antialiased w-full h-screen`}
      >
        {children}
      </body>
    </html>
  );
}

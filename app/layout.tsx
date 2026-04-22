import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import CursorWrapper from "@/components/ui/CursorWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Waliha Idrees — Product Designer & SE Student",
  description: "Senior Product Designer at Sobria Marketing — bridging the gap between aesthetics and engineering, one pixel at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-black text-white font-body overflow-x-hidden cursor-none">
        <CursorWrapper />
        {children}
      </body>
    </html>
  );
}

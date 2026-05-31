import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "isatish.in | Satish Kumar Sharma",
  description: "Full-Stack & Mobile App Developer specializing in React, Next.js, and Laravel.",
  keywords: ["isatish", "isatish.in", "Satish Kumar Sharma", "skwebs", "Full Stack Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yuvaraj M — Full Stack & AI/ML Developer",
  description:
    "Portfolio of Yuvaraj M, a full-stack and AI/ML developer building production-ready MERN and machine learning systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-ink text-text">
        {children}
      </body>
    </html>
  );
}

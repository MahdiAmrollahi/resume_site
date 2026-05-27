import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahdi Amrollahi Biouki | Backend Developer & AI Researcher",
  description:
    "A modern resume portfolio for Mahdi Amrollahi Biouki, focused on backend systems, AI agents, RAG, NLP, and applied machine learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://resume-site-1.vercel.app";
const title = "Mahdi Amrollahi Biouki | Backend Developer & AI Researcher";
const description =
  "Backend developer and AI researcher building Django systems, production-minded APIs, RAG agents, NLP projects, and applied machine learning experiments.";
const alternateNames = [
  "Mahdi Amrollahi",
  "Mahdi Amrollahi Biuki",
  "Mehdi Amrollahi",
  "Mehdi Amrollahi Biouki",
  "Mehdi Amrollahi Biuki",
  "Mahdi Biouki",
  "Mahdi Biuki",
  "Mahdi A. Biouki",
  "M. Amrollahi Biouki",
  "M. Amrollahi",
];
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mahdi Amrollahi Biouki",
  alternateName: alternateNames,
  url: siteUrl,
  image: `${siteUrl}/mahdi-avatar.jpg`,
  jobTitle: ["Backend Developer", "AI Researcher"],
  knowsAbout: [
    "Backend Development",
    "Django",
    "Python",
    "REST APIs",
    "RAG",
    "NLP",
    "Machine Learning",
    "Docker",
    "PostgreSQL",
  ],
  sameAs: ["https://github.com/MahdiAmrollahi"],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Mahdi Amrollahi Biouki Resume",
  authors: [{ name: "Mahdi Amrollahi Biouki", url: "https://github.com/MahdiAmrollahi" }],
  creator: "Mahdi Amrollahi Biouki",
  publisher: "Mahdi Amrollahi Biouki",
  keywords: [
    "Mahdi Amrollahi Biouki",
    "Mahdi Amrollahi",
    "Mahdi Amrollahi Biuki",
    "Mehdi Amrollahi",
    "Mehdi Amrollahi Biouki",
    "Mehdi Amrollahi Biuki",
    "Mahdi Biouki",
    "Mahdi Biuki",
    "Mahdi A. Biouki",
    "M Amrollahi Biouki",
    "MahdiAmrollahi",
    "Backend Developer",
    "AI Researcher",
    "Django Developer",
    "Python Developer",
    "RAG",
    "LangChain",
    "LlamaIndex",
    "NLP",
    "PostgreSQL",
    "Docker",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Mahdi Amrollahi Biouki Resume",
    type: "profile",
    images: [
      {
        url: "/mahdi-avatar.jpg",
        width: 460,
        height: 460,
        alt: "Mahdi Amrollahi Biouki",
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/mahdi-avatar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "qo7ibIgrN20ITXP7yU0z2kcUTSTGDQGOCE7U9Zt8mAk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}

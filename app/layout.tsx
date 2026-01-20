import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "Hendra Siswanto | Frontend Developer",
    template: "%s | Hendra Siswanto",
  },
  description:
    "Frontend developer focused on building clean, responsive, and user-friendly web applications using React and Next.js.",
  metadataBase: new URL("https://your-domain.vercel.app"),
  openGraph: {
    title: "Hendra Siswanto | Frontend Developer",
    description:
      "Frontend developer portfolio showcasing projects built with React, Next.js, and modern web technologies.",
    url: "https://your-domain.vercel.app",
    siteName: "Hendra Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hendra Siswanto Portfolio",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

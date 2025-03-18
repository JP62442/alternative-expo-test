import type { Metadata } from "next";
import { Poppins, Anton } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Testimonials from "@/components/layout/Testimonials";
import SubscribeForm from "@/components/layout/SubscribeForm";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: "Alt Pro Expo - test",
  description: "Created By Juan Pablo Cardona Duque",
  openGraph: {
    title: "Alt Pro Expo - test",
    description: "Created By Juan Pablo Cardona Duque",
    url: "https://alternative-expo-test.vercel.app",
    type: "website",
    images: ["icons/general/favicon-150x150.png"],
  },
  icons: {
    icon: "icons/general/favicon-150x150.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${anton.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:title" content="Alt Pro Expo - test" />
        <meta
          property="og:description"
          content="Created By Juan Pablo Cardona Duque"
        />
        <meta property="og:image" content="icons/general/favicon-150x150.png" />
        <meta
          property="og:url"
          content="https://alternative-expo-test.vercel.app"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href="https://alternative-expo-test.vercel.app" />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Analytics />
        <Testimonials />
        <SubscribeForm />
        <Footer />
      </body>
    </html>
  );
}

import Nav from "@/components/Nav";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, PT_Mono, Bowlby_One, Roboto } from "next/font/google";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const ptMono = PT_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pt",
});

const bowbly = Bowlby_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bowlby",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "300", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Generic portfolio platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ptMono.variable} ${bowbly.variable} ${roboto.variable} bg-green-1 min-h-screen`}
      >
        <NextTopLoader
          color="#FFF"
          initialPosition={0.08}
          crawlSpeed={200}
          height={4}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #FFF,0 0 5px #FFF"
        />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

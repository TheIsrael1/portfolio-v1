import Nav from "@/components/Nav";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, PT_Mono, Bowlby_One, Roboto, Handlee } from "next/font/google";
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

const handlee = Handlee({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-handlee",
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
      <title>Ehindero Israel</title>
      <body
        className={`${inter.variable} ${ptMono.variable} ${bowbly.variable} ${roboto.variable} ${handlee.variable} bg-gray-900  min-h-screen overflow-auto h-full bg-shader`}
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
        <div className="w-full h-full min-h-full bg-green-2/80">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

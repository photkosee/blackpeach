import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const kanit = Kanit({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "BLACKPEACH | SHOP",
  description: "E-Commerce platform by Phot Koseekrainiramon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="An E-Commerce platform showcasing music and accessories of a famous K-Pop group."
        />
        <link rel="author" href="https://github.com/photkosee" />
        <meta name="author" content="Phot Koseekrainiramon" />
        <meta name="creator" content="Phot Koseekrainiramon" />
      </head>
      <body className={kanit.className}>
        <Providers>
          <NavBar />
          <div className="bg-white min-h-screen flex flex-col justify-between">
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

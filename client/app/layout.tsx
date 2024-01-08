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
      <body className={kanit.className}>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MUSIC - BLACKPEACH | SHOP",
  description: "E-Commerce platform by Phot Koseekrainiramon",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

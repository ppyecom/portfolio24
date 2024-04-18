import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/menu/Menu.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PYECOM PORTFOLIO",
  description: "Creado con React, NextJs, ThreeJs y GSAP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        {children}</body>
    </html>
  );
}

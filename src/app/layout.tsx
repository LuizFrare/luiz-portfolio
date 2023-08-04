"use client";
import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./Components/Header";

const inter = Inter({ subsets: ["latin"] });

const headerLinks = [
  { href: "/", children: "Home" },
  { href: "/about", children: "Projetos" },
  { href: "/about", children: "Sobre" },
  { href: "/contact", children: "Contato" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledComponentsRegistry>
      <html lang="pt-BR">
        <Header links={headerLinks} />
        {children}
      </html>
    </StyledComponentsRegistry>
  );
}

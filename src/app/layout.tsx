import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soluções de IA e Tecnologia | Transforme seu Negócio",
  description: "Desenvolvemos agentes de IA, sites profissionais e sistemas internos. Soluções tecnológicas que impulsionam o crescimento da sua empresa.",
  keywords: ["IA", "Inteligência Artificial", "Agentes de IA", "Desenvolvimento Web", "SaaS", "Tecnologia"],
  authors: [{ name: "Business IA" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#6366f1",
  openGraph: {
    title: "Soluções de IA e Tecnologia | Business IA",
    description: "Transforme seu negócio com inteligência artificial e tecnologia de ponta",
    type: "website",
    siteName: "Business IA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soluções de IA e Tecnologia | Business IA",
    description: "Transforme seu negócio com inteligência artificial e tecnologia de ponta",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

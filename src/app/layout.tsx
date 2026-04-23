import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sites, Landing Pages e SaaS | ZeroToApp",
  description: "Desenvolvemos landing pages, sites profissionais e plataformas SaaS. Soluções que convertem visitantes em clientes e escalam seu negócio.",
  keywords: ["Landing Page", "Sites", "SaaS", "Desenvolvimento Web", "Tecnologia", "ZeroToApp"],
  authors: [{ name: "ZeroToApp" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#22d3ee",
  openGraph: {
    title: "Sites, Landing Pages e SaaS | ZeroToApp",
    description: "Do zero ao ar em 7 dias. Landing pages, sites e sistemas que vendem.",
    type: "website",
    siteName: "ZeroToApp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sites, Landing Pages e SaaS | ZeroToApp",
    description: "Do zero ao ar em 7 dias. Landing pages, sites e sistemas que vendem.",
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

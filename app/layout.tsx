import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const siteUrl = "https://portifolio-delta-rust.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ana Luísa Reis Nascente — Portfólio",
  description:
    "Portfólio de Ana Luísa Reis Nascente, estudante de Engenharia de Computação na UnB. Experiência com JavaScript, React, Node.js e Python.",
  keywords: [
    "Ana Luísa Reis Nascente",
    "Engenharia de Computação",
    "UnB",
    "React",
    "Node.js",
    "Python",
    "portfólio",
    "desenvolvedora",
  ],
  authors: [{ name: "Ana Luísa Reis Nascente" }],
  openGraph: {
    title: "Ana Luísa Reis Nascente — Portfólio",
    description:
      "Estudante de Engenharia de Computação na UnB com experiência em JavaScript, React, Node.js e Python.",
    url: siteUrl,
    siteName: "Ana Luísa Reis Nascente — Portfólio",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ana Luísa Reis Nascente — Engenheira de Computação",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ana Luísa Reis Nascente — Portfólio",
    description:
      "Estudante de Engenharia de Computação na UnB com experiência em JavaScript, React, Node.js e Python.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={geist.variable}>
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}

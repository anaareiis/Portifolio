import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
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
    type: "website",
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

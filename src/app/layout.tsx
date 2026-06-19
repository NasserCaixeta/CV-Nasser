import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nasser Caixeta | Software Engineer",
  description:
    "Desenvolvedor Full Stack especializado em automação, proteção de dados e soluções web escaláveis. Python, Node.js, React, TypeScript.",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/icon.svg",
  },
  keywords: [
    "Desenvolvedor Full Stack",
    "Software Engineer",
    "Python",
    "Node.js",
    "React",
    "TypeScript",
    "Brasília",
  ],
  authors: [{ name: "Nasser Caixeta" }],
  openGraph: {
    title: "Nasser Caixeta | Software Engineer",
    description:
      "Desenvolvedor Full Stack especializado em automação, proteção de dados e soluções web escaláveis.",
    url: "https://nassercaixeta.vercel.app",
    siteName: "Nasser Caixeta Portfolio",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nasser Caixeta | Software Engineer",
    description:
      "Desenvolvedor Full Stack especializado em automação, proteção de dados e soluções web escaláveis.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

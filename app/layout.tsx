import type { Metadata } from "next";
import { Archivo_Black, Montserrat } from "next/font/google";
import { SiteChrome } from "@/components/site-chrome";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Strictly Dental Clone",
  description:
    "Next.js and Tailwind clone of Strictly Dental using the original structure, colors, and assets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${archivoBlack.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-slate-900">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}

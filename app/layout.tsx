import type { Metadata } from "next";
import {
  DM_Serif_Display,
  IBM_Plex_Mono,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-tera-display",
  subsets: ["latin"],
  weight: "400",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-tera-body",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-tera-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Tera Gillen-Petrozzi x NEXUS by Taurus Ai",
  description:
    "A standalone rebuild of the TERA package hero section for NEXUS by Taurus Ai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${jakarta.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rami Kamel Portfolio Website",
  description:
    "Showcase a professional portfolio with a sleek dark mode design, personalized branding, and engaging dental-themed visuals to highlight creative projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} antialiased`}>
      <body className="min-h-screen font-[family-name:var(--font-space-grotesk)]">
        {children}
      </body>
    </html>
  );
}

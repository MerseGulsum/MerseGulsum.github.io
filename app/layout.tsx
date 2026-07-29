import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";
import { Navigation } from "@/components/Navigation";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope"
});

export const metadata: Metadata = {
  title: {
    default: "Merse Gülsüm — Product Designer",
    template: "%s | Merse Gülsüm"
  },
  description:
    "Portfolio of Merse Gülsüm, a Product Designer and HMI Designer focused on thoughtful digital products, HMI, UX and AI-assisted workflows."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <LenisProvider>
          <Navigation />
          <main id="main" className="page-shell">
            {children}
          </main>
        </LenisProvider>
      </body>
    </html>
  );
}

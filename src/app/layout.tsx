import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://securepipeline.example.com"),
  title: {
    default: "Secure Pipeline | LPG Gas Pipeline Installation Chennai",
    template: "%s | Secure Pipeline",
  },
  description:
    "Secure Pipeline delivers safe, reliable LPG gas pipeline installation, maintenance, and inspections for homes, villas, apartments, hotels, restaurants, commercial buildings, and industrial facilities across Chennai.",
  keywords: [
    "LPG Gas Pipeline Installation Chennai",
    "Gas Pipeline Installation Kelambakkam",
    "Commercial Gas Pipeline Services Chennai",
    "Residential LPG Pipeline Installation",
    "Industrial Gas Pipeline Contractors Chennai",
  ],
  openGraph: {
    title: "Secure Pipeline | LPG Gas Pipeline Installation Chennai",
    description:
      "Safe, reliable, and conversion-focused LPG gas pipeline installation services across Chennai, OMR, ECR, and surrounding areas.",
    type: "website",
  },
  icons: {
    icon: "/website_images/logo_v2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

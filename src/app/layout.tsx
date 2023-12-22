import type { Metadata } from "next";
import { Josefin_Sans, Montserrat } from "next/font/google";
import "./globals.css";

const sans = Josefin_Sans({ subsets: ["latin"] });
const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Peek Weather",
  description: "A weather app for the curious.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sans.className} ${mont.className}`}>{children}</body>
    </html>
  );
}

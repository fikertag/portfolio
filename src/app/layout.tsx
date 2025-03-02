import type { Metadata } from "next";
import "./globals.css";
import { Lexend } from "next/font/google";

export const metadata: Metadata = {
  title: "Fikir's Portfolio",
  description: "Fikir's Portfolio",
};

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  weight: ["100", "200", "300", "400", "500", "600", "700"], // Add necessary weights
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.className} bg-[#edede9] dark:bg-black transition-all`}
      >
        {children}
      </body>
    </html>
  );
}

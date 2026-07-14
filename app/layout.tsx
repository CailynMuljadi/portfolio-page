import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Configure the Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter", // Optional CSS variable token hook
});

export const metadata: Metadata = {
  title: "Cailyn Muljadi | Portfolio",
  description: "Front-End Engineering Applicant Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-brand-bg text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
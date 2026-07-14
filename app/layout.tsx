import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import "./globals.css"; // Ensure this import path matches your folder structure

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

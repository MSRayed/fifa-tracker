import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: ["400"],
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: "Fifa Tracker",
  description: "Record fifa game scores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.className} antialiased dark`}>{children}</body>
    </html>
  );
}

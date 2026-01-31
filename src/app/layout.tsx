import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import PerformanceWrapper from "@/components/performance-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanket Shinde - Portfolio",
  description:
    "Software Engineering Student | Full-Stack Developer | DevOps Enthusiast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      data-theme="aurora"
      data-mode="dark"
    >
      <body className={inter.className}>
        <PerformanceWrapper>
          <Navbar />
          <main>{children}</main>
        </PerformanceWrapper>
      </body>
    </html>
  );
}

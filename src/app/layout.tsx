import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import PerformanceWrapper from "@/components/performance-wrapper";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'aurora';
                const mode = localStorage.getItem('mode') || 'dark';
                document.documentElement.setAttribute('data-theme', theme);
                document.documentElement.setAttribute('data-mode', mode);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <PerformanceWrapper>
            <Navbar />
            <Sidebar />
            <main>{children}</main>
          </PerformanceWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

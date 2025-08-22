import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Montserrat, Poppins, } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import Chatbot from "@/components/Chatbot";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "800", // Extra Bold
  variable: "--font-montserrat",
});

// Load Poppins with Regular weight (400)
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400", // Regular
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Evolve Media",
  description: "Full-service marketing agency helping you grow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
      </head>
      <body className={`${montserrat.className} ${poppins.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={navItems} />
          {children}
          <Footer />
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}

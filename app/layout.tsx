import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bheeni Agarwal - Data Analyst & Software Engineer",
  description:
    "Portfolio of Bheeni Agarwal - Aspiring Data Analyst and Software Engineer specializing in Data Science, Machine Learning, and Software Development",
  keywords: "Data Science, Machine Learning, Software Engineer, Python, Java, Data Analysis, AKGEC, Portfolio",
  authors: [{ name: "Bheeni Agarwal" }],
  openGraph: {
    title: "Bheeni Agarwal - Data Analyst & Software Engineer",
    description: "Passionate about turning real-world problems into data-driven solutions",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

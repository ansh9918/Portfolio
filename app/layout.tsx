import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Ansh Maurya | macOS Portfolio",
  description:
    "Personal portfolio of Ansh Maurya, showcasing web development projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased scroll-smooth">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

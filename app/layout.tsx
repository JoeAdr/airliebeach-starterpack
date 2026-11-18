import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Airlie Beach Backpacker Starter Pack | Laurine Travel Tips",
  description: "A practical guide to finding work, accommodation, saving money and making the most of backpacker life in Airlie Beach, Australia.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body className="antialiased">{children}</body>
    </html>
  );
}

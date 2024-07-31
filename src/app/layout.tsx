import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Le Festival de la Balise",
  description: "Learn how to build a personal website using Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

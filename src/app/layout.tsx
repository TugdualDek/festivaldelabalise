import { Metadata } from "next";
import React from "react";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Le Festival de la Balise",
  description: "Site de présentation du Festival de la Balise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-custom">
        <main className="flex-grow mt-[var(--navbar-height)]">{children}</main>
      </body>
    </html>
  );
}

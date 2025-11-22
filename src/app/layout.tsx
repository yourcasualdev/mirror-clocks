import type React from "react";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mirror Clock - Spiritual Time Tracker",
  description:
    "Discover the mystical meanings behind mirror hours and their spiritual significance",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

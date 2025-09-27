"use client";
import { CardProvider } from "@/context/CardModalContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CardProvider>{children}</CardProvider>;
}

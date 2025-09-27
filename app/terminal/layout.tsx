"use client";
import { CardProvider } from "@/context/CardModalContext";
import PhoneLayout from "../components/PhoneLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CardProvider>{children}</CardProvider>;
}

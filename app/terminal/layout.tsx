"use client";
import { CardProvider } from "@/context/CardModalContext";
import BackButton from "../components/Buttons/BackButton";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CardProvider>{children}</CardProvider>;
}

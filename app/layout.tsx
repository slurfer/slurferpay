"use client";
import "./globals.css";
import { ReactNode, useState } from "react";
import PhoneLayout from "./components/PhoneLayout";
import { CardProvider } from "@/context/CardModalContext";
import CardModal from "./components/CardModal/CardModal";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PhoneLayout>
          <CardProvider>{children}</CardProvider>
        </PhoneLayout>
      </body>
    </html>
  );
}

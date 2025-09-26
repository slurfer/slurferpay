"use client";
import "./globals.css";
import { ReactNode, useState } from "react";
import PhoneLayout from "./components/PhoneLayout";
import { CardProvider } from "@/context/CardContext";
import CardReader from "./components/CardReader/CardReader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CardProvider>
          <PhoneLayout>{children}</PhoneLayout>
        </CardProvider>
      </body>
    </html>
  );
}

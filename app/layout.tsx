"use client";
import "./globals.css";
import PhoneLayout from "@/app/components/PhoneLayout";
import BackButton from "./components/Buttons/BackButton";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PhoneLayout>{children}</PhoneLayout>
      </body>
    </html>
  );
}

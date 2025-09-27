"use client";
import "./globals.css";
import PhoneLayout from "@/app/components/PhoneLayout";
import BackButton from "./components/Buttons/BackButton";
import { ShopDataProvider } from "@/context/ShopDataContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="bg-white">
          <ShopDataProvider>{children}</ShopDataProvider>
        </div>
      </body>
    </html>
  );
}

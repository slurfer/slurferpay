"use client";
import { readNfc } from "@/util/nfc";
import { useEffect } from "react";
import { decodeNfcRecord } from "@/util/nfc";

export default function Home() {
  useEffect(() => {
    readNfc(
      (message) => {
        const msgText = decodeNfcRecord(message.records[0]);
        if (msgText.indexOf(";") < 0) alert("Malformed card data: " + msgText);
        else {
          // TODO layout success
          alert("Card data: " + msgText);
        }
      },
      () => alert("Error while reading card.")
    );
  }, []);
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl font-bold text-center">
        Welcome to <span className="text-blue-600">Next.js!</span>
      </h1>
      <div className="bg-blue-100 w-full">ahoj</div>
    </div>
  );
}

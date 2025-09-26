"use client";
import { decodeNfcRecord } from "@/util/nfc";
import { useCard } from "@/context/CardContext";

export default function Home() {
  const { setIsOpen } = useCard();
  function read() {
    setIsOpen(true);
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl font-bold text-center">
        Welcome to <span className="text-blue-600">Next.js!</span>
      </h1>
      <div className="bg-blue-100 w-full">ahoj</div>
      <button onClick={read}>Read</button>
    </div>
  );
}

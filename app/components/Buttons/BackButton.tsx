"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  const onClick = () =>
    window.history.length > 1 ? router.back() : router.push("/");

  return (
    <button
      onClick={onClick}
      className="absolute top-2 right-2 z-10 px-3 py-1 rounded bg-black/30 text-white hover:bg-black/50 transition"
    >
      Zpět
    </button>
  );
}

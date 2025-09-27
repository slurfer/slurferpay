"use client";
import { decodeNfcRecord } from "@/util/nfc";
import { useCard } from "@/context/CardModalContext";
import { useEffect } from "react";
import ItemButton from "@/app/components/Buttons/Button";
import LinkButton from "@/app/components/Buttons/LinkButton";

export default function Home() {
  const { cardData, setModalState } = useCard();

  function read() {
    setModalState("reading");
  }

  function write() {
    setModalState("writing");
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center">
        <span className="text-blue-600">Terminal</span>
      </h1>
      <div className="w-full m-15"></div>
      <LinkButton type="tool" link="/terminal/read">
        Read
      </LinkButton>
      <LinkButton type="tool" link="/terminal/write">
        Write
      </LinkButton>
    </div>
  );
}

"use client";

import Button from "@/app/components/Buttons/Button";
import { useCard } from "@/context/CardModalContext";
import { useEffect } from "react";

export default function Read() {
  const { cardData, setModalState, setCardData } = useCard();

  const onClick = () => {
    setCardData(null);
    setModalState("reading");
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center">
        <span className="text-blue-600">Read</span>
      </h1>
      <div className="w-full m-15 text-center"></div>
      <pre>{JSON.stringify(cardData, null, 2)}</pre>
      <Button type="tool" onClick={onClick}>
        Read
      </Button>
    </div>
  );
}

"use client";

import Button from "@/app/components/Buttons/Button";
import Header from "@/app/components/Header";
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
      <Header blueText="Read" />
      <pre>{JSON.stringify(cardData, null, 2)}</pre>
      <Button type="tool" onClick={onClick}>
        Read
      </Button>
    </div>
  );
}

"use client";

import { useCard } from "@/context/CardModalContext";
import { ItemType } from "@/types/ItemType";
import { useEffect } from "react";

export default function Item({
  name,
  price,
  normalPrice,
}: {
  name: string;
  price: number;
  normalPrice: number;
}) {
  const { setModalState, setCardData, setBuyItem } = useCard();

  const onClick = () => {
    setBuyItem({ name, price });
    setCardData(null);
    setModalState("reading");
  };

  return (
    <div
      className="border rounded w-[90%] p-4 m-4 bg-yellow-500 text-black"
      onClick={onClick}
    >
      {name}
      <br />
      {price} Kč
      <br />
      <del>{normalPrice} Kč</del>
    </div>
  );
}

"use client";

import Item from "@/app/components/Item";
import { useParams } from "next/navigation";
import config from "@/config/shops.json";
import { ItemType } from "@/types/ItemType";
import { useCard } from "@/context/CardModalContext";
import { useEffect, useRef, useState } from "react";

export default function ShopPage() {
  const { cardData, buyItem, setBuyItem } = useCard();
  const { shopName } = useParams();
  const booths: ItemType[] = config.items;

  const paymentInProgress = useRef(false);

  useEffect(() => {
    if (cardData === null || buyItem === null || paymentInProgress.current)
      return;
    paymentInProgress.current = true;
    const { name, price } = buyItem;
    setBuyItem(null);

    async function handlePayment() {
      const res = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, price: Number(price), card: cardData }),
      });
      paymentInProgress.current = false;
    }

    handlePayment();
  }, [cardData, buyItem]);

  return (
    <div>
      Shop Page: {shopName}
      <br />
      <div className="grid grid-cols-2">
        {booths.map((item) => (
          <Item
            key={item.name}
            name={item.name}
            price={item.prices[0]}
            normalPrice={item.prices[1]}
          />
        ))}
      </div>
    </div>
  );
}

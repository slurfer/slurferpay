"use client";

import Item from "@/app/components/Item";
import { notFound, useParams } from "next/navigation";
import config from "@/config/shops.json";
import { ItemType } from "@/types/ItemType";
import { useCard } from "@/context/CardModalContext";
import { useEffect, useRef, useState } from "react";
import Header from "@/app/components/Header";

export default function ShopPage() {
  const { cardData, buyItem, setBuyItem, setModalState } = useCard();
  const { shopName }: { shopName: string } = useParams();
  const items: ItemType[] = config.items;
  const shops: string[] = config.shops;
  if (!shops.includes(shopName)) notFound();

  const paymentInProgress = useRef(false);

  useEffect(() => {
    if (cardData === null || buyItem === null || paymentInProgress.current)
      return;
    paymentInProgress.current = true;
    setModalState("loading");
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
      setModalState(res.ok ? "closed" : "error");
    }

    handlePayment();
  }, [cardData, buyItem]);

  return (
    <div>
      <Header
        blueText={shopName}
        showBackButton={true}
        backButtonLink="/terminal"
      />
      <br />
      <div className="grid grid-cols-2">
        {items.map((item) => (
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

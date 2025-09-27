"use client";
import Item from "@/app/components/Item";
import { notFound, useParams } from "next/navigation";
import { useCard } from "@/context/CardModalContext";
import { useEffect, useRef, useState } from "react";
import Header from "@/app/components/Header";
import { ApiPrices } from "@/types/api/prices";
import RefreshCounter from "@/app/components/RefreshCounter";

export default function ShopPage() {
  const { cardData, buyItem, setBuyItem, setModalState } = useCard();
  const { shopName }: { shopName: string } = useParams();

  const [items, setItems] = useState<ApiPrices["items"]>([]);
  const [shops, setShops] = useState<string[]>([]);
  const paymentInProgress = useRef(false);

  useEffect(() => {
    async function loadData() {
      const res = await fetch("/api/prices");
      if (!res.ok) return;
      const data: ApiPrices = await res.json();
      setItems(data.items);
      setShops(data.shops);
    }

    loadData();

    function msUntilNextInterval() {
      const now = new Date();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const ms = now.getMilliseconds();

      // kolik minut zbývá do nejbližšího násobku 5
      const next = 5 - (minutes % 5);
      return next * 60_000 - seconds * 1000 - ms;
    }

    // první timeout – dorovnáme na nejbližší 5. minutu
    const firstTimeout = setTimeout(() => {
      loadData();

      // pak už nastavíme klasický interval každých 5 minut
      const interval = setInterval(loadData, 5 * 60_000);
      // ulož interval do ref, pokud chceš clearovat při unmountu
      (window as any).pricesInterval = interval;
    }, msUntilNextInterval());

    return () => {
      clearTimeout(firstTimeout);
      clearInterval((window as any).pricesInterval);
    };
  }, []);

  if (shops.length > 0 && !shops.includes(shopName)) {
    notFound();
  }

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
        headers: { "Content-Type": "application/json" },
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
            price={item.prices[shopName]} // cena pro aktuální shop
            normalPrice={item.normalPrice} // třeba "běžná cena"
          />
        ))}
      </div>
      <RefreshCounter />
    </div>
  );
}

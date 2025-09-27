import { NextResponse } from "next/server";
import config from "@/config/shops.json";
import { ItemType } from "@/types/ItemType";
import { ApiPrices } from "@/types/api/prices";

function getRandomItem<T>(list: T[]): T {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

function getPricesForItem(
  item: ItemType,
  shops: string[]
): { [shop: string]: number } {
  const prices: { [shop: string]: number } = {};
  shops.forEach((shop) => {
    prices[shop] = getRandomItem(item.prices);
  });
  return prices;
}

export async function GET() {
  const items: ItemType[] = config.items;
  const shops: string[] = config.shops;

  const response: ApiPrices = {
    items: items.map((item) => ({
      name: item.name,
      prices: getPricesForItem(item, shops),
      normalPrice: Math.max(...item.prices),
    })),
    shops,
  };

  return NextResponse.json(response);
}

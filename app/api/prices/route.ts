import { NextResponse } from "next/server";
import config from "@/config/shops.json";
import { ItemType, ShopType } from "@/types/ItemType";
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
  const shops: ShopType[] = config.shops;
  const shopNames = shops.map((shop) => shop.name);

  const response: ApiPrices = {
    items: items.map((item) => ({
      name: item.name,
      prices: getPricesForItem(item, shopNames),
      normalPrice: Math.max(...item.prices),
    })),
    shops: shopNames,
  };

  return NextResponse.json(response);
}

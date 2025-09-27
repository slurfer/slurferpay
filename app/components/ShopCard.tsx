'use client";';
import { useParams } from "next/navigation";

export default function ShopCard() {
  const { shopName } = useParams();

  return <div>Shop Card: {shopName}</div>;
}

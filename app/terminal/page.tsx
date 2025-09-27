"use client";

import { useCard } from "@/context/CardModalContext";
import Header from "../components/Header";
import PhoneLayout from "../components/PhoneLayout";
import LinkButton from "@/app/components/Buttons/LinkButton";
import config from "@/config/shops.json"; // static import
import { ShopType } from "@/types/ItemType";

export default function Home() {
  // Extract shops from JSON
  const shops: ShopType[] = config.shops;

  return (
    <PhoneLayout>
      <Header blueText="Terminal" showBackButton={true} backButtonLink="/" />

      <div className="my-4"></div>

      {/* Shops buttons */}
      {shops.map((shop) => (
        <LinkButton
          key={shop.name}
          bgColor={shop.color}
          link={`/terminal/shops/${shop.name}`}
        >
          {shop.name}
        </LinkButton>
      ))}

      <div className="my-4"></div>

      {/* Other terminal actions */}
      <LinkButton bgColor="gray" link="/terminal/read">
        Read
      </LinkButton>
      <LinkButton bgColor="gray" link="/terminal/write">
        Write
      </LinkButton>
    </PhoneLayout>
  );
}

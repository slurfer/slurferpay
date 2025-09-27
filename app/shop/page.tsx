"use client";
import { decodeNfcRecord } from "@/util/nfc";
import { useCard } from "@/context/CardModalContext";
import { useEffect } from "react";
import ItemButton from "@/app/components/Buttons/Button";
import LinkButton from "@/app/components/Buttons/LinkButton";
import Header from "../components/Header";
import config from "@/config/shops.json";
import PhoneLayout from "../components/PhoneLayout";

export default function () {
  const shops: string[] = config.shops;

  return (
    <PhoneLayout>
      <Header blueText="Obchody" showBackButton={true} backButtonLink="/" />
      <div className="w-full m-15"></div>

      {shops.map((shop) => (
        <LinkButton key={shop} type="subs" link={`/shop/${shop}`}>
          {shop}
        </LinkButton>
      ))}
    </PhoneLayout>
  );
}

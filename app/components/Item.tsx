"use client";

import React from "react";

export default function Item({
  name,
  price,
  normalPrice,
}: {
  name: string;
  price: number;
  normalPrice: number;
}) {
  const showNormalPrice = price !== normalPrice;

  return (
    <div className="rounded-xl m-2 overflow-hidden flex flex-col justify-start items-center w-45 h-30 shadow-lg hover:shadow-2xl cursor-pointer bg-white">
      <div className="text-2xl font-semibold bg-yellow-400 p-3 text-black mb-1 text-center w-full text-left">
        {name}
      </div>
      <div className="text-3xl p-3 font-bold text-red-600 flex items-stretch text-left w-full">
        {price} Kč
        {showNormalPrice && (
          <span className="text-xs text-black ml-2 line-through">
            {normalPrice} Kč
          </span>
        )}
      </div>
    </div>
  );
}

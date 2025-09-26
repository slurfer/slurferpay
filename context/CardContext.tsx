"use client";

import CardReader from "@/app/components/CardReader/CardReader";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  ComponentType,
} from "react";

type CardContextType = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  cardData: string | null;
  setCardData: (data: string | null) => void;
};

const CardContext = createContext<CardContextType | undefined>(undefined);

export function CardProvider({ children }: { children: ReactNode }) {
  const [cardData, setCardData] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CardContext.Provider value={{ cardData, setCardData, isOpen, setIsOpen }}>
      {isOpen ? <CardReader /> : children}
    </CardContext.Provider>
  );
}

export function useCard() {
  const ctx = useContext(CardContext);
  if (!ctx) {
    throw new Error("useCard must be used within a CardProvider");
  }
  return ctx;
}

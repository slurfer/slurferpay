"use client";

import CardModal from "@/app/components/CardModal/CardModal";
import CardError from "@/app/components/CardModal/CardError";
import CardSuccess from "@/app/components/CardModal/CardSuccess";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  ComponentType,
} from "react";

type ModalState = "closed" | "reading" | "error" | "success";

type CardContextType = {
  modalState: ModalState;
  setModalState: (open: ModalState) => void;
  cardData: string | null;
  setCardData: (data: string | null) => void;
};

const CardContext = createContext<CardContextType | undefined>(undefined);

export function CardProvider({ children }: { children: ReactNode }) {
  const [cardData, setCardData] = useState<string | null>(null);
  const [modalState, setModalState] = useState("closed" as ModalState);

  let content;

  if (modalState === "error") {
    content = <CardError />;
  } else if (modalState === "reading") {
    content = <CardModal />;
  } else if (modalState === "success") {
    content = <CardSuccess />;
  } else {
    content = children;
  }

  return (
    <CardContext.Provider
      value={{ cardData, setCardData, modalState, setModalState }}
    >
      {content}
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

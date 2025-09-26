"use client";

import CardReading from "@/app/components/CardModal/CardReading";
import CardError from "@/app/components/CardModal/CardError";
import CardSuccess from "@/app/components/CardModal/CardSuccess";
import CardWriting from "@/app/components/CardModal/CardWriting";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  ComponentType,
} from "react";

type ModalState = "closed" | "reading" | "writing" | "error" | "success";

type CardContextType = {
  modalState: ModalState;
  setModalState: (open: ModalState) => void;
  cardData: string;
  setCardData: (data: string) => void;
};

const CardContext = createContext<CardContextType | undefined>(undefined);

export function CardProvider({ children }: { children: ReactNode }) {
  const [cardData, setCardData] = useState<string>("");
  const [modalState, setModalState] = useState("closed" as ModalState);

  let content;

  if (modalState === "error") {
    content = <CardError />;
  } else if (modalState === "reading") {
    content = <CardReading />;
  } else if (modalState === "writing") {
    content = <CardWriting />;
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

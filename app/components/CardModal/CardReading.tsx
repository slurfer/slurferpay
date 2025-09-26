"use client";
import React, { useEffect, useState } from "react";
import { decodeNfcRecord, readNfc } from "@/util/nfc";
import { Avatar, Button, Container, Typography } from "@mui/material";
import { Sensors } from "@mui/icons-material";
import { blue } from "@mui/material/colors";
import { useCard } from "@/context/CardModalContext";
import CardInteracting from "./CardInteracting";

export default function CardReading() {
  const { modalState, setModalState, setCardData } = useCard();

  useEffect(() => {
    readNfc(
      (message) => {
        setCardData(decodeNfcRecord(message.records[0]));
        alert(decodeNfcRecord(message.records[0]));
        setModalState("closed");
      },
      () => setModalState("error")
    );
  }, [modalState]);

  return <CardInteracting />;
}

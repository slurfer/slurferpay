"use client";
import React, { useEffect, useState } from "react";
import { decodeNfcRecord, readNfc } from "@/util/nfc";
import { Avatar, Button, Container, Typography } from "@mui/material";
import { Sensors } from "@mui/icons-material";
import { blue } from "@mui/material/colors";
import { useCard } from "@/context/CardContext";

export default function CardReader() {
  const { modalState, setModalState, setCardData } = useCard();

  useEffect(() => {
    readNfc(
      (message) => {
        setCardData(decodeNfcRecord(message.records[0]));
        setModalState("closed");
      },
      () => setModalState("error")
    );
  }, [modalState]);

  return (
    <Container maxWidth="sm">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Avatar
          sx={{
            bgcolor: blue[500],
            width: 156,
            height: 156,
          }}
        >
          <Sensors style={{ fontSize: "5rem" }} />
        </Avatar>

        <div className="w-full m-[1.8rem]"></div>

        <Typography variant="h6">Hold the card near the reader</Typography>

        <div className="w-full m-[4.2rem]"></div>

        <Button
          variant="contained"
          fullWidth
          onClick={() => setModalState("closed")}
        >
          RETURN
        </Button>
      </div>
    </Container>
  );
}

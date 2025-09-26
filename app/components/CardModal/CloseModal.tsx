'use client";';

import { useCard } from "@/context/CardModalContext";
import { Button } from "@mui/material";

export default function CloseModal() {
  const { setModalState } = useCard();
  return (
    <Button
      variant="contained"
      fullWidth
      onClick={() => setModalState("closed")}
    >
      RETURN
    </Button>
  );
}

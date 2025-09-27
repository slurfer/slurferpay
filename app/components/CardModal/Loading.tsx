"use client";
import React from "react";
import { Avatar, Container, Typography, CircularProgress } from "@mui/material";
import { blue } from "@mui/material/colors";
import CloseModal from "./CloseModal";

export default function Loading() {
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
          <CircularProgress size={80} thickness={4} sx={{ color: "white" }} />
        </Avatar>

        <div className="w-full m-[1.8rem]"></div>

        <Typography variant="h6">Processing your request...</Typography>

        <div className="w-full m-[4.2rem]"></div>

        <CloseModal />
      </div>
    </Container>
  );
}

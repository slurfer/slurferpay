import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  console.log("Payment received:", body);
  return NextResponse.json({
    received: body,
    status: "ok",
  });
}

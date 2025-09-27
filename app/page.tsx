"use client";
import ItemButton from "@/app/components/Buttons/Button";
import LinkButton from "./components/Buttons/LinkButton";
import Header from "@/app/components/Header";
import PhoneLayout from "./components/PhoneLayout";

export default function Home() {
  return (
    <PhoneLayout>
      <Header
        blackText="Welcome to"
        blueText="EconGame!"
        showBackButton={false}
      />
      <LinkButton type="tool" link="/terminal">
        Terminal
      </LinkButton>
      <ItemButton type="tool" onClick={() => alert("Clicked!")}>
        Click me
      </ItemButton>
    </PhoneLayout>
  );
}

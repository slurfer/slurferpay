"use client";
import ItemButton from "@/app/components/Buttons/Button";
import LinkButton from "./components/Buttons/LinkButton";
import Header from "@/app/components/Header";

export default function Home() {
  return (
    <div>
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
    </div>
  );
}

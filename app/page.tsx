"use client";
import ItemButton from "@/app/components/Buttons/Button";
import LinkButton from "./components/Buttons/LinkButton";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">
        Welcome to <span className="text-blue-600">EconGame!</span>
      </h1>
      <div className="w-full m-15"></div>
      <LinkButton type="tool" link="/terminal">
        Terminal
      </LinkButton>
      <ItemButton type="tool" onClick={() => alert("Clicked!")}>
        Click me
      </ItemButton>
    </div>
  );
}

import Link from "next/link";
import ButtonWrapper from "./ButtonWrapper";

export default function LinkButton({
  children,
  link,
  type,
}: {
  children: React.ReactNode;
  link: string;
  type: "tool" | "subs" | "add";
}) {
  return (
    <Link href={link}>
      <ButtonWrapper type={type}>{children}</ButtonWrapper>
    </Link>
  );
}

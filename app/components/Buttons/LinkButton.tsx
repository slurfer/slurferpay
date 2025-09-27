import Link from "next/link";
import ButtonWrapper from "./ButtonWrapper";

export default function LinkButton({
  children,
  link,
  bgColor,
}: {
  children: React.ReactNode;
  link: string;
  bgColor: string;
}) {
  return (
    <Link href={link}>
      <ButtonWrapper bgColor={bgColor}>{children}</ButtonWrapper>
    </Link>
  );
}

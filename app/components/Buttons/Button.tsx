import ButtonWrapper from "./ButtonWrapper";

export default function Button({
  children,
  bgColor,
  onClick,
}: {
  children: React.ReactNode;
  bgColor: string;
  onClick: () => void;
}) {
  return (
    <div onClick={onClick}>
      <ButtonWrapper bgColor={bgColor}>{children}</ButtonWrapper>
    </div>
  );
}

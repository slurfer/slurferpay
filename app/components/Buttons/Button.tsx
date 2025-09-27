import ButtonWrapper from "./ButtonWrapper";

export default function Button({
  children,
  type,
  onClick,
}: {
  children: React.ReactNode;
  type: "tool" | "subs" | "add";
  onClick: () => void;
}) {
  const bgColor =
    type === "tool" ? "gray" : type === "subs" ? "orange" : "green";

  return (
    <div onClick={onClick}>
      <ButtonWrapper type={type}>{children}</ButtonWrapper>
    </div>
  );
}

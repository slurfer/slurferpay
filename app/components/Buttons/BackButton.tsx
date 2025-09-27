import ButtonWrapper from "./ButtonWrapper";
import { useRouter } from "next/navigation";

export default function Button() {
  const router = useRouter();
  const onClick = () =>
    window.history.length > 1 ? router.back() : router.push("/");
  return (
    <div className="absolute bottom-1 w-[80%]" onClick={onClick}>
      <ButtonWrapper type={"tool"}>Zpět</ButtonWrapper>
    </div>
  );
}

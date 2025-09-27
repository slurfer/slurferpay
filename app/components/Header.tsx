import BackButton from "./Buttons/BackButton";

export default function Header({
  blackText,
  blueText,
  showBackButton = true,
  backButtonLink = undefined,
}: {
  blackText?: string;
  blueText?: string;
  showBackButton?: boolean;
  backButtonLink?: string;
}) {
  return (
    <div className="relative">
      <h1 className="text-4xl font-bold text-center">
        {blackText ? `${blackText} ` : null}
        <span className="text-blue-600">
          {blueText ? `${blueText} ` : null}
        </span>
      </h1>
      <div className="w-full m-15"></div>
      {showBackButton && <BackButton link={backButtonLink} />}
    </div>
  );
}

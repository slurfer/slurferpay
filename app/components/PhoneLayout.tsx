import { ReactNode } from "react";

export default function PhoneLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-2xl max-w-full min-h-screen">{children}</div>
    </div>
  );
}

import "./globals.css";
import PhoneLayout from "./components/PhoneLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PhoneLayout>{children}</PhoneLayout>
      </body>
    </html>
  );
}

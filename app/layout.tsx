import "./globals.css";
import { AI } from "./actions";
import { nanoid } from "ai";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AI initialAIState={{ id: nanoid(), messages: [] }}>{children}</AI>
      </body>
    </html>
  );
}

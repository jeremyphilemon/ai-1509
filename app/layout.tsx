import "./globals.css";
import { AI } from "./actions";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AI initialAIState={{ messages: [] }}>{children}</AI>
      </body>
    </html>
  );
}

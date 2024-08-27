"use client"
import "./globals.css";
import { GlobalProvider } from "@/context/GlobalContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GlobalProvider>
        <body>{children}</body>
      </GlobalProvider>
    </html>
  );
}

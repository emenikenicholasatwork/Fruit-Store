import { Metadata } from "next";
import "./globals.css";
import { GlobalProvider } from "@/components/provider/GlobalProvider";

export const metadata: Metadata = {
  title: "Fruit Store",
  description: "E-commerce store for Fruits",
};

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

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Balneário Camboriú",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className='font-outfit min-h-screen dark:bg-zinc-800 bg-zinc-200'>{children}</body>
    </html>
  );
}

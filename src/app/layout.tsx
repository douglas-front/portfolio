import type { Metadata } from "next";
import "./globals.css";
import { lato, inria } from "@/app/fonts";
import Providers from "@/app/common/Contexts/Providers";


export const metadata: Metadata = {
  title: "Douglas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${lato.variable} ${inria.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

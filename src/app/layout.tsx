import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OrganizaDaí",
  description: "OrganizaDai é um sistema web de gestão para prestadores de serviço, criado para centralizar clientes, serviços, agendamentos e pagamentos em um único lugar. O objetivo é simplificar a rotina e dar clareza financeira para profissionais autônomos, com uma interface moderna, rápida e fácil de usar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/png"  href="/icon.png" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

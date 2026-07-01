import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";

const Roboto = localFont({
  src: "./fonts/Roboto-VariableFont_wdth,wght.ttf",
});


export const metadata: Metadata = {
  title: "Next Lab",
  description: "ITI Lab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Roboto.className} bg-gray-100 min-h-screen`} >

        <Navbar />

        {children}

      </body>
    </html>
  );
}
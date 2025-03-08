import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eric Risher - PS3 XMB ",
  description: "A website designed to mimic the PS3 XMB interface.",
  icons: {
    icon: "/icon.ico",
    apple: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

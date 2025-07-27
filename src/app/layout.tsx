import { Montserrat } from "next/font/google";

import "@/styles/globals.css";
import "@/styles/layout.css";

const sans = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} antialiased`}>{children}</body>
    </html>
  );
}

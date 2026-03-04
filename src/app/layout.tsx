import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const urbanist = localFont({
  src: [
    {
      path: "./fonts/Urbanist-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Urbanist-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Urbanist-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Urbanist-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "ZingBizz - Tech-Driven Creativity",
  description: "ZingBizz agency landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}


import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./lib/registry";
import localfont from 'next/font/local'
import { Provider } from "react-redux";
import storee from "./Redux/store";

const inter = Inter({ subsets: ["latin"] });

//Fonts Style
const iransans = localfont({
  src: "./Fonts/IRANSansXMedium.ttf",
  variable:"--medium"
})
const lalezar = localfont({
  src: "./Fonts/DigiLalezarPlus.ttf",
  variable:"--regular"
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
// Test extension
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${iransans.variable} ${lalezar.variable}`}>
        <Provider store={storee}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Provider>
      </body>
    </html>
  );
}

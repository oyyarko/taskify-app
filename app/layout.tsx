import type { Metadata } from "next";
import "./globals.css";
import { rubik } from "@/ui/fonts";
import RecoilRootWrapper from "./recoil";
export const metadata: Metadata = {
  title: "Taskify",
  description: "Manage tasks with ease!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <RecoilRootWrapper>{children}</RecoilRootWrapper>
      </body>
    </html>
  );
}

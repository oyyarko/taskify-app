import type { Metadata } from "next";
import "./globals.css";
import { rubik } from "@/ui/fonts";
import RecoilRootWrapper from "./recoil";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";
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
    <ClerkProvider>
      <html lang="en" className="dark">
        <body className={rubik.className}>
          <RecoilRootWrapper>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              
              {children}
            </SignedIn>
          </RecoilRootWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}

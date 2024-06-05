import { Inter, Lusitana, Rubik } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const rubik = Rubik({ subsets: ["latin"],  weight: ["400", "500", "600", "700"], display: "swap",});

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

import { Poppins, Comfortaa, Lobster, Satisfy } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const lobster = Lobster({
  subsets: ["latin"],
  weight: ["400"],
});

export const satisfy = Satisfy({
  subsets: ["latin"],
  weight: ["400"],
});

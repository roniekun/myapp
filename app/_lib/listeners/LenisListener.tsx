"use client";

import { ReactLenis, useLenis } from "lenis/react";
const LenisListener = ({ children }: { children: React.ReactNode }) => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  return <ReactLenis root>{children}</ReactLenis>;
};
export default LenisListener;

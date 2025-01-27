"use client";

import { ReactLenis } from "lenis/react";
const LenisListener = ({ children }: { children: React.ReactNode }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};
export default LenisListener;

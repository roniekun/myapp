"use client";

import { ReactLenis } from "lenis/react";
const LenisListener = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactLenis
      root
      options={{
        smoothWheel: true,
        lerp: 0.1,
        duration: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
};
export default LenisListener;

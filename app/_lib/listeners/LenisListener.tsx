"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
const LenisListener = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
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

"use client";

import { useLenis } from "lenis/react";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalCarousel() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    // Sync ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    const update = (time: number) => {
      lenis.raf(time * 1000);
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
    };
  }, [lenis]);

  useEffect(() => {
    // Horizontal scroll animation
    const sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".carousel",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + (window.innerWidth * sections.length),
      },
    });
  }, []);

  return (
    <section className="carousel w-[400vw] flex h-screen">
      <div className="panel w-screen h-full bg-red-400 flex items-center justify-center">Panel 1</div>
      <div className="panel w-screen h-full bg-green-400 flex items-center justify-center">Panel 2</div>
      <div className="panel w-screen h-full bg-blue-400 flex items-center justify-center">Panel 3</div>
      <div className="panel w-screen h-full bg-yellow-400 flex items-center justify-center">Panel 4</div>
    </section>
  );
}
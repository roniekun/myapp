"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import CustomEase from "gsap/CustomEase";

const ScrollGallery = () => {
  const slider1Ref = useRef<HTMLDivElement>(null);
  const slider2Ref = useRef<HTMLDivElement>(null);

  const items = [
    { id: 1, title: "Item 1", color: "#F4A261" },
    { id: 2, title: "Item 2", color: "#E76F51" },
    { id: 3, title: "Item 3", color: "#2A9D8F" },
    { id: 4, title: "Item 4", color: "#264653" },
    { id: 5, title: "Item 5", color: "#A8DADC" },
    { id: 6, title: "Item 6", color: "#E9C46A" },
    { id: 7, title: "Item 7", color: "#F5F5F5" },
    { id: 8, title: "Item 8", color: "#D4A373" },
    { id: 9, title: "Item 9", color: "#8D99AE" },
    { id: 10, title: "Item 10", color: "#6D6875" },
  ];

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(CustomEase);
  CustomEase.create("ease1", "0.76, 0, 0.24, 1"); //https://easings.net/#easeInOutQuart

  useLayoutEffect(() => {
    const slider1 = slider1Ref.current;
    const slider2 = slider2Ref.current;

    if (slider1 && slider2) {
      gsap.set(slider1, { x: "-25%" });
      gsap.set(slider2, { x: "-100%" });

      gsap.to(slider1, {
        scrollTrigger: {
          trigger: "#container",
          start: "top top",
          end: "bottom-=20% center",
          scrub: 1,
          //   snap: 1 / (items.length - 1),
          invalidateOnRefresh: true,
        },
        x: "-75%",
        ease: "ease1",
      });

      gsap.to(slider2, {
        scrollTrigger: {
          trigger: "#container",
          start: "top top",
          end: "bottom-=20% center",
          scrub: 1,
          //   snap: 1 / (items.length - 1),
          invalidateOnRefresh: true,
        },
        x: 0,
        ease: "ease1",
      });
    }
  }, [slider1Ref, slider2Ref]);

  return (
    <div id="container" className="h-[1200px] w-full relative">
      <div
        id="sticky-container"
        className="sticky overflow-hidden lg:top-[12vh] top-[25vh] h-[45vw] w-full flex flex-col"
      >
        <div
          id="slider-container "
          className=" relative h-1/2 flex-1"
        >
          <div
            ref={slider1Ref}
            id="slider-1"
            className="scroll-smooth flex-none h-full relative whitespace-nowrap"
          >
            {items.map((item) => (
              <div
                key={item.id}
                // style={{ background: item.color }}
                className="inline-block w-[30vw] rounded-sm border h-full  relative"
              >
                <h1 className="w-fit top-[50%] absolute left-[50%] -translate-x-[50%]">
                  {item.title}
                </h1>
              </div>
            ))}
          </div>
        </div>

        <div
          id="slider-container"
          className="relative h-1/2 flex-1"
        >
          <div
            id="slider-2"
            ref={slider2Ref}
            className="relative whitespace-nowrap h-full"
          >
            {items.map((item) => (
              <div
                // style={{ background: item.color }}
                key={item.id}
                className="w-[30vw] border rounded-sm inline-block h-full relative"
              >
                <h1 className="w-fit top-[50%] absolute left-[50%] -translate-x-[50%]">
                  {item.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ScrollGallery;

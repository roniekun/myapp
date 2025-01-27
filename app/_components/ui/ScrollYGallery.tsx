"use client";
// import Image from "next/image";
import data from "./definitons/data";
import { GrImage } from "react-icons/gr";
import { useRef } from "react";
import { useAppSelector } from "@/app/redux/hooks/hooks";
import { DataProps } from "./definitons/types";
import BarLoader from "react-spinners/ClipLoader";
import { Suspense } from "react";

interface Props {
  data?: DataProps[];
  className?: {
    img?: string;
    imgContainer?: string;
    slider?: string;
  };
}
const ScrollYGallery: React.FC<Props> = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const deviceType = useAppSelector((state) => state.device.deviceType);

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    if (targetRef.current) {
      // Prevent default vertical scrolling
      if (deviceType !== "smartphone") {
        // Scroll horizontally instead
        targetRef.current.scrollLeft += event.deltaY;
      }
    }
  };

  return (
    <div
      id="container"
      className={`h-fit
         lg:h-screen lg:w-full lg:overflow-hidden flex items-center justify-center
  `}
    >
      {/* Outer container with horizontal scrolling */}
      <div
        id="image-slider"
        onWheel={handleScroll}
        ref={targetRef}
        className={`h-screen flex flex-col md:flex-row justify-start items-center item-center md:items-start md:gap-5 scrollbar-hide overflow-x-hidden  w-screen sm:flex-nowrap sm:whitespace-nowrap sm:overflow-x-scroll`}
      >
        {data?.map((i, idx) => (
          <div
            id="image-container"
            key={idx}
            style={{ backgroundColor: i.color }}
            className="flex justify-center items-center relative lg:w-[600px] w-full lg:aspect-[4/5] aspect-[5/7] flex-shrink-0 m-0 flex-col sm:w-[92vw] "
          >
            <Suspense
              fallback={
                <BarLoader
                  size={150}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              }
            >
              <GrImage size={160} />
              <p className="text-base">No image</p>
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollYGallery;

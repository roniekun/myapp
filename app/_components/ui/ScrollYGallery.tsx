"use client";
// import Image from "next/image";
import data from "./definitons/data";
import { GrImage } from "react-icons/gr";
import { useRef } from "react";
import { useAppSelector } from "@/redux/hooks/hooks";
import { twMerge } from "tailwind-merge";
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
const ScrollYGallery: React.FC<Props> = ({ className }) => {
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

  const containerStyle = `${
    deviceType === "smartphone"
      ? " overflow-x-hidden  w-screen"
      : "relative flex-nowrap whitespace-nowrap overflow-x-scroll"
  }`;

  return (
    <div
      id="container"
      className={`${
        deviceType === "smartphone" 
          ? "h-fit relative"
          : "h-screen relative w-full overflow-hidden"
      } `}
    >
      {/* Outer container with horizontal scrolling */}
      <div
        id="image-slider"
        onWheel={handleScroll}
        ref={targetRef}
        className={twMerge(
          containerStyle,
          " h-screen flex flex-col md:flex-row justify-start items-start md:gap-5 scrollbar-hide "
        )}
      >
        {data?.map((i, idx) => (
          <div
            id="image-container"
            key={idx}
            style={{ backgroundColor: i.color }}
            className="flex justify-center items-center relative lg:w-[500px] w-full h-full flex-shrink-0 m-0 flex-col md:w-[92vw]"
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

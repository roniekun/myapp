"use client";
// import Image from "next/image";
import data from "./definitons/data";
import { GrImage } from "react-icons/gr";
import { useRef } from "react";
import { useAppSelector } from "@/redux/hooks/hooks";
import { twMerge } from "tailwind-merge";
import { DataProps } from "./definitons/types";

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
        event.preventDefault();

        // Scroll horizontally instead
        targetRef.current.scrollLeft += event.deltaY;
      }
    }
  };

  const containerStyle = `${
    deviceType === "smartphone"
      ? " overflow-x-hidden scrollbar-hide w-screen"
      : "relative flex-nowrap whitespace-nowrap overflow-x-scroll"
  }`;

  return (
    <div
      id="container"
      className={`${
        deviceType === "smartphone"
          ? "h-fit relative"
          : "h-screen relative w-full overflow-hidden pt-[--header-height]"
      } `}
    >
      {/* Outer container with horizontal scrolling */}
      <div
        id="image-slider"
        onWheel={handleScroll}
        ref={targetRef}
        className={twMerge(
          containerStyle,
          " h-screen flex flex-col md:flex-row justify-start items-start md:gap-5"
        )}
      >
        {data?.map((i, idx) => (
          <div
            id="image-container"
            key={idx}
            style={{ backgroundColor: i.color }}
            className="flex justify-center items-center relative md:w-[500px] w-full h-[90vh] flex-shrink-0 m-0 flex-col"
          >
            <GrImage size={160} />
            <p className="text-base">No image</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollYGallery;

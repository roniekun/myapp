"use client";
import Image from "next/image";
// import { GrImage } from "react-icons/gr";
import { useRef, useEffect, useState } from "react";
import { useAppSelector } from "@/app/redux/hooks/hooks";
import BarLoader from "react-spinners/ClipLoader";
import { Suspense } from "react";
import { DataProps } from "./definitons/types";

interface Props {
  id?: number;
  data?: DataProps[];
  className?: {
    img?: string;
    imgContainer?: string;
    slider?: string;
  };
}
const ScrollYGallery: React.FC<Props> = ({ id = 0, data }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const deviceType = useAppSelector((state) => state.device.deviceType);

  const [random, setRandom] = useState<number[]>([]);
  useEffect(() => {
    const generatedRandoms = data?.map(() => Math.random()) || [];
    setRandom(generatedRandoms);
  }, [data]);

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
        className={`h-screen flex flex-col md:flex-row justify-start items-center item-center md:items-start gap-1 scrollbar-hide overflow-x-hidden  w-screen sm:flex-nowrap sm:whitespace-nowrap sm:overflow-x-scroll`}
      >
        {data?.map((i, idx) => (
          <div
            id="image-container"
            key={idx}
            // style={{ backgroundColor: i.color }}
            className="flex  relative flex-col w-full h-screen object-cover aspect-[2/3] items-center"
          >
            <Suspense
              fallback={
                <BarLoader
                  size={20}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              }
            >
              <Image
                style={{ background: i.color, objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                alt={i.alt}
                src={`https://picsum.photos/200/300?random=${random}${i.id}`}
              />
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollYGallery;

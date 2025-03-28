"use client";
import React from "react";
import Image from "next/image";
// import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Mansonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { DataProps } from "./definitons/types";

const Cards = ({ data }: { data: DataProps[] }) => {
  // const router = useRouter();
  const handleClick = (id: number) => {
    // router.push(`features/${id}`);
    window.location.href = `/features/${id}`;
  };
  return (
    <>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 18300: 4 }}
        // gutterBreakpoints={{ 350: "12px", 750: "16px", 900: "24px" }}
      >
        <Mansonry>
          {data.map((i) => (
            <motion.div
              id="cards"
              key={i.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="cursor-pointer w-full flex relative h-fit m-auto items-center object-contain  justify-center overflow-hidden "
              onClick={() => handleClick(i.id)}
            >
              <div
                id="card"
                className="flex flex-col relative object-contain overflow-hidden"
              >
                <Image
                  style={{ background: i.color }}
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  width={500}
                  height={500}
                  alt={i.alt}
                  src={i.path}
                />
                <div className="bg-[--background] w-auto h-fit flex flex-col px-1 flex-1 ">
                  <p className="relative text-lg w-fit font-semibold ">
                    {i.id}
                  </p>
                  <p className="relative text-[--text-color-secondary] text-sm w-fit">
                    <small>Color id:</small>
                    {i.color}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </Mansonry>
      </ResponsiveMasonry>
    </>
  );
};

export default Cards;

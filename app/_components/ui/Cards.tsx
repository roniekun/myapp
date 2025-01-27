"use client";
import React from "react";
import Image from "next/image";
import data from "./definitons/data";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Container from "../layout/Container";
import Mansonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Cards = () => {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`features/${id}`);
  };
  return (
    <>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        // gutterBreakpoints={{ 350: "12px", 750: "16px", 900: "24px" }}
      >
        <Mansonry>
          {data.map((i) => (
            <motion.div
              id="cards"
              key={i.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="cursor-pointer flex relative h-fit overflow-hidden m-auto items-center  justify-center "
              onClick={() => handleClick(i.id)}
            >
              <div id="card" className="flex flex-col relative">
                <Image
                  style={{ background: i.color, objectFit: "cover" }}
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  width={500} // Portrait width
                  height={550} // Portrait height
                  alt={i.alt}
                  src={i.path}
                />
                <Container className="bg-[--background] w-full h-fit flex flex-col p-1">
                  <p className="relative text-lg font-semibold">{i.id}</p>
                  <p className="relative text-sm">
                    {" "}
                    <small>Color id:</small>
                    {i.color}
                  </p>
                </Container>
              </div>
            </motion.div>
          ))}
        </Mansonry>
      </ResponsiveMasonry>
    </>
  );
};

export default Cards;

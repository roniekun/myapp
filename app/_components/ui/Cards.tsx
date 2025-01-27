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
              key={i.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="cursor-pointer relative  w-auto h-auto  overflow-hidden m-auto"
              onClick={() => handleClick(i.id)}
            >
              <Image
                style={{ background: i.color, objectFit: "contain" }}
                width={600}
                height={900}
                alt={i.alt}
                src={i.path}
              />
              <Container className="bg-[--background] w-full h-fit absolute bottom-0 flex flex-col p-1">
                <p className="relative text-lg">{i.id}</p>
                <p className="relative text-sm">{i.color}</p>
              </Container>
            </motion.div>
          ))}
        </Mansonry>
      </ResponsiveMasonry>
    </>
  );
};

export default Cards;

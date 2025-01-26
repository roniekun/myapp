"use client";
import React from "react";
import Image from "next/image";
import data from "./definitons/data";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Cards = () => {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`features/${id}`);
  };
  return (
    <>
      {data.map((i) => (
        <motion.div
          key={i.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="cursor-pointer relative h-auto w-full aspect-[4/5] overflow-hidden m-auto"
          onClick={() => handleClick(i.id)}
        >
          <Image
            style={{ background: i.color }}
            objectFit="contain"
            alt={i.alt}
            fill
            src={i.path}
          />
          <div className="bg-[--background] w-full h-fit absolute bottom-0 flex flex-col">
            <p className="relative text-lg">{i.id}</p>
            <p className="relative text-sm">{i.color}</p>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default Cards;

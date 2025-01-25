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
    console.log(id);
  };
  return (
    <>
      {data.map((item) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="cursor-pointer relative flex gap-4  w-full bg-neutral-100 h-[50vh] rounded-md overflow-hidden"
          key={item.id}
          onClick={() => handleClick(item.id)}
        >
          <Image
            key={item.id}
            alt={item.alt}
            objectFit="cover"
            layout="fill"
            src={item.path}
          />
          <p className="cursor-pointer z-10">{item.id}</p>
        </motion.div>
      ))}
    </>
  );
};

export default Cards;

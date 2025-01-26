"use client";
import React from "react";
import LinkItems from "../lib/LinkItems";

const Footer = () => {
  const listStyle = "flex gap-3 w-fit h-fit p-4 ";
  return (
    <footer className="flex relative w-screen max-w-[1400px] h-[--footer-height] p-4 flex-wrap whitespace-nowrap text-zinc-700 justify-center items-center">
      <div className={listStyle}>
        <LinkItems displayIcon={true} />
      </div>
    </footer>
  );
};

export default Footer;

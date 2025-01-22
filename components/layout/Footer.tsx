"use client";
import React from "react";
import MenuItems from "../lib/MenuItems";
import LinkItems from "../lib/LinkItems";

const Footer = () => {
  const date = new Date();
  const listStyle = "flex gap-1 flex-col mr-auto w-fit h-fit p-4 ";
  return (
    <footer className="min-h-[40vh] text-gray-100 flex relative w-screen max-w-[1400px]  p-4 flex-wrap whitespace-nowrap">
      {" "}
      <div className={listStyle}>
        <p className="uppercase my-4">Explore</p>
        <MenuItems />
      </div>
      <div className={listStyle}>
        <p className="uppercase my-4">Social Media</p>
        <div className="flex gap-1">
          <LinkItems displayIcon={true} />
        </div>
      </div>
      <p className="p-4 my-4 capitalize self-end">
        &copy; {date.getFullYear()} <br />
        All rights reserved{" "}
      </p>
    </footer>
  );
};

export default Footer;

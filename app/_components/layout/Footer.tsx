"use client";
import MenuItems from "../lib/MenuItems";

const Footer = () => {
  const date = new Date();
  return (
      <footer className="flex relative w-screen max-w-[1400px] h- p-4 flex-wrap whitespace-nowrap justify-center items-center">
        <div className="md:grid md:grid-cols-3 place-items-center w-full flex flex-col font-semibold gap-y-5 text-base md:text-lg py-10">
          <div>
            <p className="font-semibold">www.ronstdio.com</p>
          </div>
          <div className="gap-x-2 flex">
            <MenuItems />
          </div>
          <div>
            <p>All rights reserverd.{date.getFullYear()}</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;

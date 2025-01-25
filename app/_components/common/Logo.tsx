"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Logo = () => {
  const route = useRouter();

  const handleClick = () => {
    route.replace("/");
  };
  return (
    <div>
      <a className="font-black  text-lg" onClick={handleClick} href="/">
        MyApp
      </a>
    </div>
  );
};

export default Logo;

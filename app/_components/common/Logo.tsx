"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Logo = () => {
  const route = useRouter();

  const handleClick = () => {
    route.replace("/");
  };
  return (
    <div>
      <Link className="font-black  text-lg" onClick={handleClick} href="/">
        MyApp
      </Link>
    </div>
  );
};

export default Logo;

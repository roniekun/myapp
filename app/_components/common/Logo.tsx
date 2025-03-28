"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { user } from "@/app/_lib/constants";

const Logo = () => {
  const route = useRouter();

  const handleClick = () => {
    route.replace("/");
  };
  return (
    <div>
      <Link className="text-2xl font-semibold bg-blend-difference uppercase" onClick={handleClick} href="/">
        {user.website}
      </Link>
    </div>
  );
};

export default Logo;

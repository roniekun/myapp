"use client";
import React, { useEffect, useState } from "react";
import Logo from "../common/Logo";
import { useAppSelector, useAppDispatch } from "@/app/redux/hooks/hooks";
import { setToggleMenu } from "@/app/redux/slices/MenuSlice";
import SearchButton from "../common/buttons/SearchButton";
import { twMerge } from "tailwind-merge";
import { motion, cubicBezier } from "framer-motion";
import MenuIcon from "../common/buttons/MenuIcon";
import { MdOutlineSearch } from "react-icons/md";
import Link from "next/link";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const deviceType = useAppSelector((state) => state.device.deviceType);
  const scrollPosition = useAppSelector((state) => state.scroll.scrollPosition);
  const dispatch = useAppDispatch();
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    dispatch(setToggleMenu(false));
  }, [deviceType]);

  useEffect(() => {
    if (scrollPosition > 0) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }, [scrollPosition]);

  return (
    <motion.header
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ ease: cubicBezier(0, 0.55, 0.45, 1), duration: 1 }} //https://easings.net/#easeOutCubic
      className={twMerge(
        className,
        `left-0 w-full z-10 overflow-visible transition-colors duration-300  top-0 p-4 justify-between flex items-center h-20 lg:px-8  transform -translate-y-full`
      )}
    >
      <Logo />
      <div className="absolute md:relative md:right-0 right-16">
        <SearchButton />
      </div>

      <motion.div
        key={deviceType}
        className="lg:absolute relative lg:left-1/2 lg:-translate-x-1/2 transform flex gap-2 justify-center items-center"
        animate={{ rotate: deviceType === "desktop" ? 360 : 0 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <MenuIcon />
      </motion.div>
    </motion.header>
  );
};

export default Header;

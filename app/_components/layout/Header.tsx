"use client";
import React, { useEffect } from "react";
import Logo from "../common/Logo";
import MenuItems from "../lib/MenuItems";
import { Rotate as Hamburger } from "hamburger-react";
import { useAppSelector, useAppDispatch } from "@/app/redux/hooks/hooks";
import { toggleMenu, setToggleMenu } from "@/app/redux/slices/MenuSlice";
import { motion } from "framer-motion";
import Container from "./Container";
import Navbar from "./Navbar";
import { twMerge } from "tailwind-merge";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const deviceType = useAppSelector((state) => state.device.deviceType);
  const isOpen = useAppSelector((state) => state.menu.isMenuOpen);
  // const { scrollPosition } = useAppSelector((state) => state.scroll);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setToggleMenu(false));
  }, [deviceType]);

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <header
      className={twMerge(
        className,
        `left-0 w-full z-10 overflow-visible  top-0 p-4 justify-between flex items-center md:h-[--header-height]  h-20 bg-opacity-5 `
      )}
    >
      <Logo />
      <motion.nav
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        className="flex gap-4 max-w-full relative  items-center  overflow-visible"
      >
        {/* md:absolute md:left-1/2 md:-translate-x-1/2 */}
        <div
          className={`md:hidden z-50 ${
            isOpen && " text-[--text-color-primary]"
          }`}
        >
          <Hamburger
            duration={0.3}
            onToggle={handleToggle}
            size={18}
            toggled={isOpen}
          />
        </div>

        <div className="md:flex justify-evenly  hidden  w-full relative items-center overflow-hidden">
          <Container className="flex gap-x-10 w-full flex-1">
            <MenuItems className="text-lg font-medium" />
          </Container>
        </div>
      </motion.nav>
      {/* <div className="hidden md:flex relative justify-center items-center gap-4">
        {pathname !== "/search" && <SearchComponent />}
        <AdminLogin />
      </div> */}
      <Navbar />
    </header>
  );
};

export default Header;

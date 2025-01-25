"use client";
import React, { useEffect, useState } from "react";
import Logo from "../common/Logo";
import MenuItems from "../lib/MenuItems";
import { Cross as Hamburger } from "hamburger-react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks/hooks";
import { toggleMenu, setToggleMenu } from "@/redux/slices/MenuSlice";
import { motion } from "framer-motion";
import Container from "./Container";
import SearchComponent from "@/app/_components/features/search/SearchComponent";
import AdminLogin from "../features/auth/AdminLogin";
import { usePathname } from "next/navigation";

const Header = () => {
  const deviceType = useAppSelector((state) => state.device.deviceType);
  const isOpen = useAppSelector((state) => state.menu.isMenuOpen);
  const { scrollPosition } = useAppSelector((state) => state.scroll);
  const dispatch = useAppDispatch();
  const [animate, setAnimate] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    dispatch(setToggleMenu(false));
  }, [deviceType]);

  const handleToggle = () => {
    dispatch(toggleMenu());
  };
  const handleMouseEnter = () => {
    setAnimate(true);
  };
  useEffect(() => {
    if (scrollPosition > 0) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [scrollPosition]);

  const handleMouseLeave = () => {
    if (scrollPosition === 0) {
      setAnimate(false);
    }
  };

  return (
    <header
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`left-0 w-full  shadow-md backdrop-blur-lg overflow-visible  h-16 top-0 z-50 p-4 justify-between flex  items-center md:h-[--hearder-height] fixed transition-colors  ${
        animate && "bg-zinc-900 text-zinc-200 duration-100"
      } `}
    >
      <Logo />
      <motion.nav
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        className="flex gap-4 max-w-full relative md:absolute md:left-1/2 md:-translate-x-1/2 items-center overflow-visible "
      >
        <div className="md:hidden">
          <Hamburger onToggle={handleToggle} size={18} toggled={isOpen} />
        </div>

        <div className="md:flex justify-evenly  hidden  w-full relative items-center overflow-hidden">
          <Container classNames="flex gap-x-10 w-full flex-1">
            <MenuItems className="text-lg font-black" />
          </Container>
        </div>
      </motion.nav>
      <div className="hidden md:flex relative justify-center items-center gap-4">
        {pathname !== "/search" && <SearchComponent />}
        <AdminLogin />
      </div>
    </header>
  );
};

export default Header;

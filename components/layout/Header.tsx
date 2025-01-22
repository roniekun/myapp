"use client";
import React from "react";
import Logo from "../common/Logo";
import MenuItems from "../lib/MenuItems";
import LinkItems from "../lib/LinkItems";
import { Cross as Hamburger } from "hamburger-react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks/hooks";
import { useEffect } from "react";
import { toggleMenu, setToggleMenu } from "@/redux/slices/MenuSlice";
import { motion } from "framer-motion";
import Container from "./Container";
import SearchComponent from "@/redux/features/search/SearchComponent";

const Header = () => {
  const deviceType = useAppSelector((state) => state.device.deviceType);
  const isOpen = useAppSelector((state) => state.menu.isMenuOpen);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setToggleMenu(false));
  }, [deviceType]);

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <header className="h-16 left-0 w-full  shadow-md backdrop-blur-sm overflow-hidden bg-opacity-60  relative top-0 z-50 p-4 justify-evenly flex  items-center">
      <Logo />
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex gap-4 max-w-full relative ml-auto items-center overflow-hidden"
      >
        {deviceType == "smartphone" ? (
          <Hamburger onToggle={handleToggle} size={18} toggled={isOpen} />
        ) : (
          <div className="flex justify-evenly w-full relative items-center overflow-hidden">
            <Container classNames="flex gap-x-10 w-full  flex-1">
              <MenuItems className="font-semibold text-sm mr-10" />
            </Container>

            <Container>
              <LinkItems displayIcon />
            </Container>
          </div>
        )}
      </motion.nav>
    </header>
  );
};

export default Header;

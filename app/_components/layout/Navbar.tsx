"use client";
import React from "react";
import MenuItems from "../lib/MenuItems";
import Container from "./Container";
import { useAppSelector, useAppDispatch } from "@/redux/hooks/hooks";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { setToggleMenu } from "@/redux/slices/MenuSlice";
import ToggleThemeButton from "../common/buttons/ToggleThemeButton";
import LinkItems from "../lib/LinkItems";

const Navbar = () => {
  const isOpen = useAppSelector((state) => state.menu.isMenuOpen);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handleClick = () => {
    dispatch(setToggleMenu(false));
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="fixed backdrop-blur-md h-full z-10  top-0 bg-blue-700 right-0 w-full p-4"
          >
            <Container classNames="bg-opacity-60 shadow-md rounded-sm gap-4 flex flex-col ml-auto my-[--header-height]">
              <MenuItems
                className="font-semibold text-lg hover:text-opacity-80"
                onClick={handleClick}
              />
            </Container>
            <Container classNames="bg-opacity-60 shadow-md rounded-sm gap-4 flex flex-col ml-auto">
              <ToggleThemeButton />
            </Container>
            <Container classNames="gap-1 flex w-fit">
              <LinkItems displayIcon />
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

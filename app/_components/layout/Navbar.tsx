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
            className="fixed h-screen bg-[--background] top-0 right-0 w-full p-4 justify-center items-center"
          >
            <Container classNames="bg-opacity-60 items-center rounded-sm gap-4 w-full relative w-fit flex flex-col my-[--header-height]">
              <MenuItems
                className="font-medium text-center text-xl w-fit hover:text-opacity-80"
                onClick={handleClick}
              />
            </Container>
            <Container classNames="gap-1 flex w-fit flex items-center  justify-center">
              <LinkItems
                className="w-fit bg-black flex justify-center"
                displayIcon
              />
            </Container>{" "}
            <div className=" w-screen mt-20 flex justify-center items-center">
              <ToggleThemeButton />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

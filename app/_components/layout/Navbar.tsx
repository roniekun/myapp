"use client";
import React from "react";
import MenuItems from "../lib/MenuItems";
import Container from "./Container";
import { useAppSelector, useAppDispatch } from "@/app/redux/hooks/hooks";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { setToggleMenu } from "@/app/redux/slices/MenuSlice";
import LinkItems from "../lib/LinkItems";
import ExitMenuButton from "../common/buttons/ExitMenuButton";

const Navbar = () => {
  const isOpen = useAppSelector((state) => state.menu.isMenuOpen);
  const theme = useAppSelector((state) => state.theme.theme);
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ background: theme === "light" ? "#E8E8E8" : "#171819" }}
            className="fixed z-50 h-screen   text-[--text-color-primary] top-0 right-0 w-full p-4 justify-center items-center"
          >
            <ExitMenuButton />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-opacity-60 items-center justify-center w-full rounded-sm gap-4 relative flex flex-col mt-[5vh]"
            >
              <Container className="flex-col w-full justify-center items-center py-10 gap-3">
                <MenuItems
                  className="font-medium text-center text-3xl w-fit hover:text-opacity-80 transform duration-300 uppercase"
                  onClick={handleClick}
                />
              </Container>
              <Container className="gap-3 flex w-fit items-center  justify-center">
                <LinkItems
                  className="w-fit bg-black flex justify-center"
                  displayIcon
                />
              </Container>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

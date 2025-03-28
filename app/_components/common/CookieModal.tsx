"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Cookies from "js-cookie";
import Container from "../layout/Container";

const CookieModal = () => {
  const [confirm, setConfirm] = useState(false);
  Cookies.set("myCookie", "", { expires: 1 }); // 1 day

  const handleClick = () => {
    setConfirm(true);
  };
  return (
    <>
      <AnimatePresence>
        {!confirm && (
          <motion.div
            transition={{ duration: 0.3 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0  bg-black w-full left-0 flex"
          >
            <Container>
              <p className="text-zinc-100">
                this website uses cookies to ensure you get the best experience
                on our website.{" "}
                <Link className="whitespace-nowrap underline" href="/cookie&privacy">
                  learn more
                </Link>{" "}
              </p>{" "}
              <button
                className="rounded-md border px-3 whitespace-nowrap py-2 text-zinc-100 ml-auto"
                onClick={handleClick}
              >
                Got it.
              </button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default CookieModal;

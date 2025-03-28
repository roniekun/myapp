"use client";
import { AnimatePresence, motion } from "framer-motion";

const OpacityTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="opacity-0 pt-20 relative w-screen h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
export default OpacityTransition;

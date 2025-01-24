"use client";

import { twMerge } from "tailwind-merge";
import SearchForm from "./ui/SearchForm";
import { useEffect, useRef } from "react";
import SearchSuggestionModal from "./ui/SearchSuggestions";
import { useAppSelector, useAppDispatch } from "@/redux/hooks/hooks";
import { setInfocus } from "@/redux/slices/SearchSlice";
import { AnimatePresence, motion } from "framer-motion";
import { div } from "framer-motion/client";

const SearchComponent: React.FC = () => {
  const { isInfocus, searchSuggestions } = useAppSelector(
    (state) => state.search
  );
  const dispatch = useAppDispatch();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        dispatch(setInfocus(false));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  return (
    <div
      ref={searchRef}
      className={twMerge(
        `flex relative flex-col h-fit top-0 px-4 py-1 rounded-md overflow-visible bg-zinc-200 hover:outline outline-1`
      )}
    >
      <SearchForm />
      <AnimatePresence>
        {isInfocus && searchSuggestions.length !== 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="opacity-0"
          >
            <SearchSuggestionModal />{" "}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchComponent;

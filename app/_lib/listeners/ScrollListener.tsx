"use client;";
import { useEffect } from "react";
import { useAppDispatch } from "@/app/redux/hooks/hooks";
import { setScrollPosition } from "@/app/redux/slices/ScrollSlice";

const ScrollListener = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleScroll = () => {
      dispatch(setScrollPosition(window.scrollY));
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
};

export default ScrollListener;

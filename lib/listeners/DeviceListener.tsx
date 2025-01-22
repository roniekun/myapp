"use client";
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { setDeviceType } from "@/redux/slices/DeviceSlice";

const DeviceListener = () => {
  const dispatch = useAppDispatch();
  // const isOpen = useAppSelector((state) => state.menu.isMenuOpen);

  const updateDeviceType = () => {
    const width = window.innerWidth;
    if (width < 768) {
      dispatch(setDeviceType("smartphone"));
    } else if (width < 1024) {
      dispatch(setDeviceType("tablet"));
    } else {
      dispatch(setDeviceType("desktop"));
    }
  };

  useEffect(() => {
    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);
    return () => {
      window.removeEventListener("resize", updateDeviceType);
    };
  }, []);

  return null;
};
export default DeviceListener;

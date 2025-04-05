"use client";
import React from "react";
import { useAppDispatch } from "@/app/redux/hooks/hooks";
import { setGlobalTheme } from "@/app/redux/slices/ThemeSlice";
import { useAppSelector } from "@/app/redux/hooks/hooks";

const ThemeButton = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);

  const handleLightTheme = (e: any) => {
    const value = e.target.value;
    dispatch(setGlobalTheme(value));
  };
  const handleDarkTheme = (e: any) => {
    const value = e.target.value;
    dispatch(setGlobalTheme(value));
  };
  return (
    <div
      style={{ fontFamily: "DMMono" }}
      className="flex justify-center font-normal relative flex-col items-center gap-3 w-fit "
    >
      <div className="flex relative text-xs ">
        <div className="relative group ">
          <button
            className={`${
              theme === "light" && "text-green-600"
            } duration-300 border uppercase p-2 relative z-10  group-hover:text-black rounded-l-md `}
            value="light"
            onClick={(e) => handleLightTheme(e)}
          >
            Light
          </button>
          <div className="bg-green-500 h-full duration-300  group-hover:w-full z-0 absolute top-0 left-0 w-0 rounded-l-md" />
        </div>
        <div className="relative group ">
          <div className="bg-green-500 z-0 duration-300 absolute top-0 left-0 h-full  w-0 group-hover:w-full rounded-r-md" />
          <button
            className={`${
              theme === "dark" && "text-green-600"
            } duration-300 border uppercase p-2 relative z-10 group-hover:text-black rounded-r-md`}
            value="dark"
            onClick={(e) => handleDarkTheme(e)}
          >
            Dark
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeButton;

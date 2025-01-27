"use client";
import React from "react";
import { useAppDispatch } from "@/app/redux/hooks/hooks";
import { setGlobalTheme } from "@/app/redux/slices/ThemeSlice";
import { useAppSelector } from "@/app/redux/hooks/hooks";
import { MdNightsStay } from "react-icons/md";
import { WiDaySunnyOvercast } from "react-icons/wi";

const ToggleThemeButton = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as "light" | "dark";
    dispatch(setGlobalTheme(value));
  };
  return (
    <div className="flex justify-center flex-col items-center gap-3 w-fit">
      {theme === "dark" && <MdNightsStay scale={26} />}
      {theme === "light" && <WiDaySunnyOvercast size={26} />}
      <div className="flex">
        <p className="text-sm ">Themes:</p>
        <select
          value={theme}
          className="bg-transparent text-sm rounded-sm bg-blue-500 cursor-pointer "
          onChange={handleChange}
          name="themes"
          id="themes"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          {/* <option value="system">System</option> */}
        </select>
      </div>
    </div>
  );
};

export default ToggleThemeButton;

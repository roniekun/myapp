"use client";
import React from "react";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { setGlobalTheme } from "@/redux/slices/ThemeSlice";
import { useAppSelector } from "@/redux/hooks/hooks";

const ToggleThemeButton = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as "light" | "dark" | "system";
    dispatch(setGlobalTheme(value));
  };
  return (
    <div className="flex gap-1items-center justify-center w-fit">
      <p className="text-sm ">Themes:</p>
      <select
        value={theme}
        className="bg-transparent text-sm rounded-sm bg-blue-500"
        onChange={handleChange}
        name="themes"
        id="themes"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        {/* <option value="system">System</option> */}
      </select>
    </div>
  );
};

export default ToggleThemeButton;

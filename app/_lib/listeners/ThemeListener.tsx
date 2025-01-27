"use client";

import { useAppSelector } from "@/app/redux/hooks/hooks";
import { useEffect } from "react";
// import { setGlobalTheme } from "@/store/slices/ThemeSlice";

const ThemeListener = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  // const dispatch = useAppDispatch();

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    // dispatch(setGlobalTheme(theme));
  }, [theme]);

  return null;
};

export default ThemeListener;

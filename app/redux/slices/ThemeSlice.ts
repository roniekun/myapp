import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';

export interface initialStateProps {
  theme: "light" | "dark" | "system";
}
const getInitialTheme = (): "light" | "dark" | "system" => {
  if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("theme");

    // Explicitly check if the saved theme is one of the valid values
    if (
      savedTheme === "light" ||
      savedTheme === "dark" ||
      savedTheme === "system"
    ) {
      return savedTheme;
    }
  }

  return "light";
};

const initialState: initialStateProps = {
  theme: getInitialTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setGlobalTheme: (
      state,
      action: PayloadAction<"light" | "dark" | "system">
    ) => {
      state.theme = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", action.payload);
      }
      Cookies.set('theme', action.payload, {expires: 1})
    },
  },
});

export const { setGlobalTheme } = themeSlice.actions;
export default themeSlice.reducer;

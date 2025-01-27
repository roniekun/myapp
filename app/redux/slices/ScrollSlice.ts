import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const scrollSlice = createSlice({
  name: "scroll",
  initialState: {
    scrollPosition: 0,
  },
  reducers: {
    setScrollPosition: (state, action: PayloadAction<number>) => {
      state.scrollPosition = action.payload;
    },
    // isScrolled: (state) => {
    //   state.isScrolled = !state.isScrolled;
    // },
  },
});

export const { setScrollPosition } = scrollSlice.actions; //isScrolled
export default scrollSlice.reducer;

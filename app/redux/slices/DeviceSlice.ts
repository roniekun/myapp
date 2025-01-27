import { createSlice, PayloadAction, } from "@reduxjs/toolkit";

interface initialStateProps {
  deviceType: "smartphone" | "tablet" | "desktop";
}

const initialState: initialStateProps = {
  deviceType: "desktop", // default to desktop
};

const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    setDeviceType: (state, action: PayloadAction<"smartphone" | "tablet" | "desktop"> ) => {
      state.deviceType = action.payload;
    },
  },
});

export const { setDeviceType } = deviceSlice.actions;

export default deviceSlice.reducer;

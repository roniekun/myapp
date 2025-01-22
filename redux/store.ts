import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/MenuSlice";
import deviceReducer from "./slices/DeviceSlice";
import scrollReducer from "./slices/ScrollSlice";
import themeReducer from "./slices/ThemeSlice";
import searchReducer from "./slices/SearchSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    device: deviceReducer,
    scroll: scrollReducer,
    theme: themeReducer,
    search: searchReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

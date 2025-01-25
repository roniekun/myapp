"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "@/redux/store";
import DeviceListener from "@/app/_lib/listeners/DeviceListener";
import ScrollListener from "@/app/_lib/listeners/ScrollListener";
import ThemeListener from "@/app/_lib/listeners/ThemeListener";

interface StateProviderProps {
  children: React.ReactNode;
}

const StateProvider = ({ children }: StateProviderProps) => {
  return (
    <Provider store={store}>
      <ScrollListener />
      <DeviceListener />
      <ThemeListener />
      {children}
    </Provider>
  );
};

export default StateProvider;

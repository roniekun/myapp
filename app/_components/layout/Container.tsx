import React from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return <div className={twMerge(className,"flex flex-wrap px-[5vw] w-full gap-4")}>{children}</div>;
};

export default Container;

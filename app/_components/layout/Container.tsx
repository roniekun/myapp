import React from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: React.ReactNode;
  classNames?: string;
}

const Container = ({ children, classNames }: ContainerProps) => {
  return <div className={twMerge(classNames,"flex flex-wrap p-[5vw] w-full gap-4")}>{children}</div>;
};

export default Container;

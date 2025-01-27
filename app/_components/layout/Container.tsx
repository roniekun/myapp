import React from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return <div className={twMerge(className,"flex flex-wrap  w-full")}>{children}</div>;
};

export default Container;

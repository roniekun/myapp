import React from "react";
import Link from "next/link";

interface LinkButtonProps {
  text: string;
  link: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ text, link }) => {
  return <Link href={link}>{text}</Link>;
};

export default LinkButton;

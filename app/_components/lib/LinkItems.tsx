import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { FaSquareFacebook } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { RxGithubLogo } from "react-icons/rx";
import { BsLinkedin } from "react-icons/bs";

interface LinkItemsProps {
  className?: string;
  displayIcon?: boolean;
}

const size = 15;

export const links = [
  {
    name: "Facebook",
    path: "https://www.facebook.com",
    icon: <FaSquareFacebook size={size} />,
  },
  {
    name: "Instagram",
    path: "https://www.instagram.com",
    icon: <FiInstagram size={size} />,
  },
  {
    name: "Github",
    path: "https://www.github.com",
    icon: <RxGithubLogo size={size} />,
  },
  {
    name: "LinkedIn",
    path: "https://www.linkedin.com",
    icon: <BsLinkedin size={size} />,
  },
];

const LinkItems: React.FC<LinkItemsProps> = ({ className, displayIcon }) => {
  return (
    <>
      {links.map((link, idx) => (
        <Link
          className={twMerge(className,"bg-transparent")}
          target="blank"
          key={idx}
          rel="noopener noreferrer"
          href={link.path}
        >
          {displayIcon ? link.icon : link.name}
        </Link>
      ))}
    </>
  );
};

export default LinkItems;

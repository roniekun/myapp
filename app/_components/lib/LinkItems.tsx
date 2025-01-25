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

export const links = [
  {
    name: "Facebook",
    path: "https://www.facebook.com",
    icon: <FaSquareFacebook />,
  },
  {
    name: "Instagram",
    path: "https://www.instagram.com",
    icon: <FiInstagram />,
  },
  { name: "Github", path: "https://www.github.com", icon: <RxGithubLogo /> },
  {
    name: "LinkedIn",
    path: "https://www.linkedin.com",
    icon: <BsLinkedin />,
  },
];

const LinkItems: React.FC<LinkItemsProps> = ({ className, displayIcon }) => {


  return (
    <>
      {links.map((link, idx) => (
        <Link
          className={twMerge(className, "flex-1")}
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

import React from "react";
import Link from "next/link";
import { user } from "@/app/_lib/constants";
import { twMerge } from "tailwind-merge";
import { FaFacebookF } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { RxGithubLogo } from "react-icons/rx";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

interface LinkItemsProps {
  className?: string;
  displayIcon?: boolean;
  size?: number;
}

const size = 18;
export const links = [
  {
    name: "LinkedIn",
    path: "https://www.linkedin.com",
    icon: <FaLinkedinIn size={size} />,
  },
  {
    name: "Github",
    path: "https://www.github.com",
    icon: <RxGithubLogo size={size} />,
  },
  {
    name: "Facebook",
    path: "https://www.facebook.com",
    icon: <FaFacebookF size={size} />,
  },
  {
    name: "Instagram",
    path: "https://www.instagram.com",
    icon: <FiInstagram size={size} />,
  },
  {
    name: "LinkedIn",
    path: `mailto:${user.email}?subject=Website Development&body=Your message here...`,
    icon: <IoMdMail size={size} />,
  },
];

const LinkItems: React.FC<LinkItemsProps> = ({ className, displayIcon }) => {
  return (
    <>
      {links.map((link, idx) => (
        <Link
          className={twMerge(className, "bg-transparent")}
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

"use client;";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

interface MenuItemsProps {
  className?: string;
  onClick?: () => void;
}

const MenuItems: React.FC<MenuItemsProps> = ({ className, onClick }) => {
  const pathname = usePathname();
  const links = [
    { name: "Home", path: "/" },
    { name: "Works", path: "/collections" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {links.map((link, idx) => (
          <Link
            onClick={onClick}
            className={twMerge(
              className,
              `${
                pathname === link.path && "text-green-500"
              } flex-1  hover:text-green-500 hover:scale-105 font-semibold`
            )}
            key={idx}
            href={link.path}
          >
            {link.name}
          </Link>
      ))}
    </>
  );
};

export default MenuItems;

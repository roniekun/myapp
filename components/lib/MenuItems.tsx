import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface MenuItemsProps {
  className?: string;
  onClick?: () => void;
}

const MenuItems: React.FC<MenuItemsProps> = ({ className, onClick }) => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {links.map((link, idx) => (
        <Link
          onClick={onClick}
          className={twMerge(className, "flex-1")}
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

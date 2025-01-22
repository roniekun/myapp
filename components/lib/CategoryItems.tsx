import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const categories = [
  { name: "All", category: "all" },
  { name: "Portrais", category: "portraits" },
  { name: "Events", category: "events" },
  { name: "Products", category: "products" },
];

interface CategoryItemsProps {
  className?: string;
}

const CategoryItems: React.FC<CategoryItemsProps> = ({ className }) => {
  return (
    <>
      {categories.map((item, idx) => (
        <Link
          className={twMerge(className, "flex-1")}
          key={idx}
          href={`/collections?category=${item.category}`}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};

export default CategoryItems

import { motion } from "framer-motion";
import { toggleMenu } from "@/app/redux/slices/MenuSlice";
import { useAppDispatch } from "@/app/redux/hooks/hooks";

const MenuIcon = () => {
  const dispatch = useAppDispatch();

  return (
      <motion.div
        onClick={() => dispatch(toggleMenu())}
        className="grid grid-cols-2 gap-[2px] cursor-pointer p-2 rounded-full  w-fit group"
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className="w-[6px] h-[6px] group  group-hover:rounded-none bg-[--text-color-primary] shadow-md rounded-sm"
          ></span>
        ))}
      </motion.div>
  );
};

export default MenuIcon;

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Sticky({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return; // Ensure ref is not null

    const { clientX, clientY } = e;
    const rect = ref.current.getBoundingClientRect();

    const middleX = clientX - (rect.left + rect.width / 2);
    const middleY = clientY - (rect.top + rect.height / 2);

    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className="z-50 cursor-pointer"
      ref={ref}
      onMouseMove={handleMouse} // ✅ Automatically passes the event
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 5, mass: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

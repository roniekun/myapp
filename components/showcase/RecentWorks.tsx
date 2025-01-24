import React from "react";
import Cards from "../ui/Cards";
import { div } from "framer-motion/client";

const RecentWorks = () => {
  return (
    <div className="flex  relative flex-col max-w-[1400px] w-full rounded-md">
      <h2 className="text-center self-center uppercase w-fit font-semibold p-4 lg:text-3xl">Recent Works </h2>
      <div className="m-4 relative md:grid lg:grid-cols-2 gap-5">
        <Cards />
      </div>
    </div>
  );
};

export default RecentWorks;

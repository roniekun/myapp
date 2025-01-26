import React from "react";
import OpacityTransition from "@/app/_components/transition/OpacityTransition";
import ScrollYGallery from "@/app/_components/ui/ScrollYGallery";
import Header from "@/app/_components/layout/Header";

const Features = async () => {
  // const { id } = await params;
  return (
    <OpacityTransition>
      <Header className="fixed bg-white md:text-white text-zinc-900 md:bg-transparent" />

      <div className="min-h-screen h-auto flex justify-center items-center flex-col">
        <ScrollYGallery />
      </div>
    </OpacityTransition>
  );
};

export default Features;

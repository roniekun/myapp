import React from "react";
import LinkButton from "@/components/common/buttons/LinkButton";

const Features = async ({ params }: { params: { id: number } }) => {
  const { id } = await params;
  return (
    <div className="min-h-screen flex justify-center items-center">
      {id}
      <LinkButton text="See Portfolio" link={`/collections?category=all`} />
    </div>
  );
};

export default Features;

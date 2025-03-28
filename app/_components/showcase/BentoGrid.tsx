const BentoGrid = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 md:gap-5 gap-3 p-4 md:h-[400px] h-[250px] max-w-[800px] w-full">
      <div className="row-span-2 bg-zinc-100 rounded-lg border-none"></div>
      <div className="border-none rounded-lg  bg-zinc-500"></div>
      <div className="b-none rounded-lg bg-blue-600"></div>
    </div>
  );
};
export default BentoGrid;

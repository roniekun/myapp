import { twMerge } from "tailwind-merge";
import { pricing } from "@/app/_lib/pricing";
import Container from "../layout/Container";

const PricingLayout1 = () => {
  const itemStyle = `rounded-md aspect-[4/5] md:w-[500px] lg:w-full relative transform transition-transform duration-300 w-full justify-start p-8 flex item-center  flex-col bg-black bg-opacity-5 backdrop-blur-lg hover:shadow-lg  transform`;

  return (
    <div
      id="parent"
      className="md:p-16 sm:p-24 p-8  flex w-full justify-center items-center flex-col relative"
    >
      <h1 className="text-4xl md:mb-20 mb-10 text-center p-4 font-bold">
        Pricing Table Template
      </h1>
      <div className="relative h-auto w-full grid lg:grid-cols-3 gap-4 place-items-center">
        {pricing.map((i, idx) => (
          <div
            key={idx}
            className={twMerge(
              itemStyle,
              `${idx == 1 ? "lg:scale-105 " : "lg:scale-90"}`
            )}
          >
            <Container className=" flex flex-col place-content-center my-6">
              <h1 className="self-center w-fit text-3xl uppercase">
                {i.header}
              </h1>
              <h3 className="text-5xl self-center font-bold text-blue-500">
                ${i.price}
              </h3>
            </Container>

            <ul className="flex  flex-col gap-3 justify-center items-center w-full relative">
              {i.features.map((item) => (
                <li className="text-xl text-zinc-700 relative font-medium self-center">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingLayout1;

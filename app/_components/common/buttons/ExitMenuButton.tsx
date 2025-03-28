import { setToggleMenu } from "@/app/redux/slices/MenuSlice";
import { useAppDispatch } from "@/app/redux/hooks/hooks";
const ExitMenuButton = () => {
  const dispatch = useAppDispatch();
  return (
    <div
      onClick={() => dispatch(setToggleMenu(false))}
      className="flex flex-col gap-2  w-fit cursor-pointer ml-auto m-5 hover:scale-110 duration-300 rounded-full p-4 justify-center items-center"
    >
      <span className="h-[3px] absolute w-4 bg-[--text-color-primary] -rotate-45 rounded-full" />
      <span className="rounded-full absolute h-[3px] w-4 bg-[--text-color-primary] rotate-45" />
    </div>
  );
};
export default ExitMenuButton;

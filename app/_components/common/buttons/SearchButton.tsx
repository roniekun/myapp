import { MdOutlineSearch } from "react-icons/md";
import { useAppDispatch } from "@/app/redux/hooks/hooks";
import { toggleOpenSearch } from "@/app/redux/slices/SearchSlice";

const SearchButton = () => {
  const dispatch = useAppDispatch();

  const handleOpenSearch = () => {
    dispatch(toggleOpenSearch());
  };

  return (
    <div className="rounded-full bg-opacity-5 bg-zinc-950 p-2">
      <MdOutlineSearch size={20} onClick={handleOpenSearch} />
    </div>
  );
};

export default SearchButton;

"use client";
import SearchComponent from "../features/search/SearchComponent";
import { useAppSelector } from "@/app/redux/hooks/hooks";

const SearchBar = () => {
  const isOpen = useAppSelector((state) => state.search.isOpenSearch);

  return (
    <div className="fixed top-[50px] left-0 right-0 z-50 p-4">
      {isOpen && <SearchComponent />}
    </div>
  );
};

export default SearchBar;

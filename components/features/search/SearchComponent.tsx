"use client";

import { twMerge } from "tailwind-merge";
import SearchForm from "./ui/SearchForm";
import SearchSuggestionModal from "./ui/SearchSuggestions";
import { useAppSelector } from "@/redux/hooks/hooks";

const SearchComponent: React.FC = () => {
  const { isInfocus,query,searchSuggestions } = useAppSelector((state) => state.search);

  return (
    <div
      className={twMerge(
        `flex relative flex-col h-fit top-0 px-4 py-1 rounded-md overflow-visible bg-zinc-200 hover:outline outline-1`
      )}
    >
      <SearchForm />
      {isInfocus && query && searchSuggestions.length > 0 && (
          <SearchSuggestionModal />
      )}
    </div>
  );
};

export default SearchComponent;

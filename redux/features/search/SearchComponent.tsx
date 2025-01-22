"use client";

import { twMerge } from "tailwind-merge";
import SearchForm from "./ui/SearchForm";
import SearchSuggestionModal from "./ui/SearchSuggestions";
import { useAppSelector } from "@/redux/hooks/hooks";

const SearchComponent: React.FC = () => {
  const query = useAppSelector((state) => state.search.query);

  return (
    <div className={twMerge(`flex relative flex-col top-0 border rouunded-md`)}>
      <SearchForm />
      {query && <SearchSuggestionModal />}
    </div>
  );
};

export default SearchComponent;

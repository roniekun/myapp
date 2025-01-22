import { ContentDataProps } from "@/redux/definitions/search-types";
import { contentData } from "@/constants/search-data";
import { MdOutlineSearch } from "react-icons/md";
import { IoIosClose } from "react-icons/io";

import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import {
  setOpenSearch,
  setInfocus,
  setQuery,
  addSearchItem,
  setSelectedIndex,
  setSearchSuggestions,
} from "@/redux/slices/SearchSlice";
import { useRef, useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import debounce from "lodash/debounce";
import { SearchHistoryProps } from "@/redux/definitions/search-types";

export type SearchProps = {
  placeholder?: string;
  className?: string;
};

const SearchForm = () => {
  const dispatch = useAppDispatch();
  const { isInfocus, searchItems, query, selectedIndex, searchSuggestions } =
    useAppSelector((state) => state.search);
  const placeholder = "search";
  const [filteredSearchItems, setFilteredSearchItems] = useState<
    SearchHistoryProps[]
  >([]);
  const [filteredResult, setFilteredResult] = useState<ContentDataProps[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  // filtering the result every 300 miliseconds as value of the query changes using
  // useCallback and debounce/lodash
  const debounceHandleInputChange = useCallback(
    debounce((enteredKey: string) => {
      if (enteredKey === "") {
        setFilteredSearchItems([...searchItems]);
        setFilteredResult([]);
      } else {
        dispatch(setQuery(enteredKey));
        const formattedQuery = enteredKey.trim().toLowerCase();

        const filteredData = contentData?.filter((data) =>
          data.title.toLowerCase().trim().includes(formattedQuery)
        );
        const newFilteredSearchItem = searchItems.filter((item) =>
          item.search.toLowerCase().trim().includes(formattedQuery)
        );
        setFilteredSearchItems(newFilteredSearchItem);

        setFilteredResult(filteredData);
      }
    }, 300),
    [contentData, searchItems, isInfocus]
  );

  //realtime changes of inputs value
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | null) => {
    if (e) {
      const enteredKey = e.target.value;
      dispatch(setQuery(enteredKey));
      //calling the debounced search result
      debounceHandleInputChange(enteredKey);
    }
  };

  //execute search
  const handleSearch = async (formData: FormData) => {
    const searchQuery = formData.get("query")?.toString().trim();
    if (!searchQuery) return;
    const newSearch: SearchHistoryProps = {
      search: query,
      id: searchItems.length + 1,
      date: Date.now(),
    };
    //   dispatch(setQuery(enteredQuery));
    dispatch(addSearchItem(newSearch));
    dispatch(setInfocus(false));
    dispatch(setOpenSearch(false));
    router.push(`/search_result?query=${encodeURIComponent(searchQuery)}`);
  };
  //for keyboard functions
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const items = query ? searchSuggestions : searchItems;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        dispatch(
          setSelectedIndex(
            selectedIndex < items.length - 1
              ? selectedIndex + 1
              : items.length - 1
          )
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        dispatch(setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : -1));
        break;
    }
    if (!items.length) return;
  };

  //clears the input field
  const handleClear = () => {
    dispatch(setInfocus(false));
    dispatch(setQuery(""));
  };

  //realtime updates for suggestions
  useEffect(() => {
    dispatch(setSearchSuggestions([...filteredSearchItems, ...filteredResult]));
  }, [filteredSearchItems, filteredResult]); //merging suggestions

  useEffect(() => {
    console.log(searchSuggestions);
  }, [searchSuggestions]);

  //updates for suggestions when user focus to the input
  useEffect(() => {
    dispatch(
      setSearchSuggestions(
        query.length > 0 ? [...searchSuggestions] : [...searchItems]
      )
    );
  }, [isInfocus]);

  //click event for input field
  const handleClick = (e: React.MouseEvent<HTMLInputElement> | null) => {
    dispatch(setInfocus(true));
    setSelectedIndex(-1);
  };

  return (
    <form
      action={handleSearch}
      className="flex relative  flex-row items-center"
    >
      <input
        value={query ?? ""}
        onKeyDown={handleKeyDown}
        name="query"
        autoComplete="off"
        ref={inputRef}
        onClick={(e) => {
          handleClick(e);
        }}
        onChange={(e) => handleInputChange(e)}
        placeholder={placeholder}
        style={{ padding: 4 }}
        className="relative border-b rounded-md w-[200px] h-auto p-2"
      />
      <div className="flex justify-center h-full items-center rounded-r-full cursor-pointer">
        {isInfocus ? <IoIosClose onClick={handleClear} /> : <MdOutlineSearch />}
      </div>
    </form>
  );
};
export default SearchForm;

import { MdOutlineSearch } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/hooks";
import {
  setOpenSearch,
  setInfocus,
  setQuery,
  addSearchItem,
  setSelectedIndex,
  setSearchSuggestions,
} from "@/app/redux/slices/SearchSlice";
import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SearchHistoryProps } from "@/app/redux/definitions/search-types";
import { useDebouncedHandleInputChange } from "../hooks/debounce";

const SearchForm = () => {
  const dispatch = useAppDispatch();
  const {
    isInfocus,
    searchItems,
    query,
    selectedIndex,
    searchSuggestions,
    filteredResults,
    filteredSearchItems,
  } = useAppSelector((state) => state.search);
  const placeholder = "Search";

  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  // filtering the result every 300 miliseconds as value of the query changes using
  const debounceHandleInputChange = useDebouncedHandleInputChange();

  //realtime changes of inputs value
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | null) => {
    if (e) {
      //calling the debounced search result
      dispatch(setQuery(e.target.value));
      debounceHandleInputChange(e.target.value);
    }
  };

  const handleClickIcon = () => {
    const searchQuery = inputRef.current?.value;
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
    dispatch(setQuery(""));
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
    dispatch(setQuery(""));
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

  //realtime updates for suggestions
  useEffect(() => {
    dispatch(
      setSearchSuggestions([...filteredSearchItems, ...filteredResults])
    );
  }, [filteredSearchItems, filteredResults]); //merging suggestions

  //updates for suggestions when user focus to the input
  useEffect(() => {
    if (isInfocus) {
      dispatch(
        setSearchSuggestions(
          query.length > 0 ? [...searchSuggestions] : [...searchItems]
        )
      );
    }
    console.log(isInfocus);
  }, [isInfocus]);

  //click event for input field
  const handleClick = () => {
    dispatch(setInfocus(true));
    dispatch(setSearchSuggestions([...searchItems]));
    dispatch(setSelectedIndex(-1));
  };

  return (
    <form
      action={handleSearch}
      className="flex relative  flex-row items-center "
    >
      <input
        value={query ?? ""}
        onKeyDown={(e) => handleKeyDown(e)}
        name="query"
        autoComplete="off"
        ref={inputRef}
        onClick={handleClick}
        onChange={(e) => handleInputChange(e)}
        placeholder={placeholder}
        style={{ padding: 4 }}
        // onBlur={(e) => handleBlur(e)}
        className={`relative rounded-md w-full bg-transparent  h-auto focus:outline-none text-base]`}
      />
      <div className="flex w-7 justify-center h-full items-center  rounded-r-full cursor-pointer">
        <div onClick={handleClickIcon}>
          <MdOutlineSearch className="text-zinc-600" size={22} />
        </div>
      </div>
    </form>
  );
};
export default SearchForm;

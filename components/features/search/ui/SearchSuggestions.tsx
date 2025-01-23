"use client";

import { useEffect, useRef, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useRouter } from "next/navigation";

import {
  addSearchItem,
  setInfocus,
  toggleOpenSearch,
  setQuery,
  setSearchItems,
  setSearchSuggestions,
} from "@/redux/slices/SearchSlice";

import { SearchHistoryProps } from "@/redux/definitions/search-types";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";

const SearchSuggestionModal: React.FC = () => {
  const router = useRouter();
  const { searchItems, selectedIndex } = useAppSelector(
    (state) => state.search
  );
  const [deletedItem, setDeletedItem] = useState<SearchHistoryProps | null>(
    null
  );

  const { searchSuggestions } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  const suggestionRefs = useRef<(HTMLLIElement | null)[]>([]);

  const setRef = (el: HTMLLIElement | null, idx: number) => {
    if (el) {
      suggestionRefs.current[idx] = el;
    }
  };

  const handleClickHistory = (idx: number) => {
    const textContent = suggestionRefs.current[idx]?.textContent ?? "";
    dispatch(setQuery(textContent));
    dispatch(toggleOpenSearch());
    dispatch(setInfocus(false));
    router.replace(`/search_result?query=${encodeURIComponent(textContent)}`);
  };

  const handleMouseDown = (idx: number) => {
    if (suggestionRefs.current) {
      const searchQuery = suggestionRefs.current[idx]?.textContent
        ?.toLowerCase()
        .trim();

      dispatch(setQuery(searchQuery ?? ""));
    }
  };

  const handleClickSearch = (idx: number) => {
    if (suggestionRefs.current) {
      const newQuery = suggestionRefs.current[idx]?.textContent
        ?.toLowerCase()
        .trim();
      const newSearch: SearchHistoryProps = {
        search: newQuery ?? "",
        id: searchItems.length + 1,
        date: Date.now(),
      };
      dispatch(addSearchItem(newSearch));
      router.replace(
        `/search_result?query=${encodeURIComponent(newQuery ?? "")}`
      );
      dispatch(toggleOpenSearch());
      dispatch(setInfocus(false));
    }
  };

  //deleting items in history
  const handleDelete = (i: number) => {
    // Find the item with "search" in its properties and a matching ID
    const foundItem = searchSuggestions.find(
      (item): item is SearchHistoryProps => {
        return "search" in item && item.id === i;
      }
    );

    if (foundItem) {
      const updatedItems = searchSuggestions.filter(
        (item): item is SearchHistoryProps => {
          return "search" in item && item.date !== foundItem.date;
        }
      ); // Updating the original array by removing the deleted item
      setDeletedItem(foundItem); // Store the deleted item
      dispatch(setSearchItems(updatedItems)); // Update the state with filtered items
    }
  };

  useEffect(() => {
    if (deletedItem) {
      const updatedSearchSuggestions = searchSuggestions.filter(
        (item): item is SearchHistoryProps => {
          return "date" in item && item.date !== deletedItem.date;
        }
      );

      dispatch(setSearchSuggestions(updatedSearchSuggestions));
    }
  }, [deletedItem]); //filteredSearchItems, setFilteredSearchItems

  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const handleMouseHover = (idx: number) => {
    setHoveredItem(idx);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  //selecting result to highlight (for user experience)
  useEffect(() => {
    const filteredSuggestion = searchSuggestions.find(
      (_, index) => index === selectedIndex
    );
    if (filteredSuggestion && "search" in filteredSuggestion) {
      filteredSuggestion;
      dispatch(setQuery(filteredSuggestion.search));
    } else if (filteredSuggestion && "title" in filteredSuggestion) {
      dispatch(setQuery(filteredSuggestion.title));
    } else return;
  }, [selectedIndex]);

  const handleClear = () => {
    dispatch(setSearchSuggestions([]));
    dispatch(setSearchItems([]));
  };

  return (
    <div className="flex flex-col absolute z-50 top-full justify-center items-center mt-1 w-full p-4 left-0 rounded-md bg-zinc-200">
      <ul className="relative flex flex-col w-full justify-center items-center rounded-b-md h-auto gap-y-1 ">
        {searchSuggestions.map((item, idx) => (
          <li
            key={idx}
            ref={(el) => setRef(el, idx)}
            onMouseEnter={() => handleMouseHover(idx)}
            onMouseLeave={handleMouseLeave}
            className={` flex w-full relative justify-between items-center gap-x-1 rounded-md overflow-hidden`}
          >
            {"search" in item ? (
              <>
                <a
                  onClick={() => handleClickHistory(idx)}
                  className={`${
                    (selectedIndex === idx || hoveredItem === idx) &&
                    "bg-neutral-900 bg-opacity-20 text-zinc-600"
                  } cursor-pointer flex text-left relative`}
                >
                  {item.search}
                </a>

                <IoIosClose
                  className="cursor-pointer relative"
                  onClick={() => handleDelete(item.id)}
                />
              </>
            ) : "title" in item ? (
              <>
                <a
                  onClick={() => handleClickSearch(idx)}
                  onMouseDown={() => {
                    handleMouseDown(idx);
                  }}
                  className="cursor-pointer flex text-left flex-1 relative gap-x-1"
                >
                  {item.title}
                </a>
                <span className="read-only" />
              </>
            ) : null}
            
          </li>
        ))}
        
      </ul>
      
      {searchSuggestions.length > 0 && (
        <button
          onClick={handleClear}
          className="text-xs p-2 relative justify-end flex ml-auto   w-fit"
        >
          delete history
        </button>
      )}
    </div>
  );
};

export default SearchSuggestionModal;

import debounce from "lodash/debounce";
import {
  setFilteredResults,
  setFilteredSearchItems,
} from "@/redux/slices/SearchSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useCallback } from "react";
import { contentData } from "@/app/constants/search-data";

export const useDebouncedHandleInputChange = () => {
  const dispatch = useAppDispatch();
  const { searchItems, isInfocus } = useAppSelector((state) => state.search);

  const debounceHandleInputChange = useCallback(
    debounce((enteredKey: string) => {
      if (enteredKey === "") {
        dispatch(setFilteredSearchItems([...searchItems]));
        dispatch(setFilteredResults([]));
      } else {
        const formattedQuery = enteredKey.trim().toLowerCase();

        const filteredData = contentData?.filter((data) =>
          data.title.toLowerCase().trim().startsWith(formattedQuery)
        );
        const newFilteredSearchItem = searchItems.filter((item) =>
          item.search.toLowerCase().trim().includes(formattedQuery)
        );
        dispatch(setFilteredSearchItems(newFilteredSearchItem));
        dispatch(setFilteredResults(filteredData));
      }
    }, 300),
    [dispatch, contentData, searchItems, isInfocus]
  );

  return debounceHandleInputChange;
};

export interface ContentDataProps {
  id: number;
  title: string;
  content: string;
  link?: string;
}

export interface SearchHistoryProps {
  id: number;
  search: string;
  date: number;
}

export interface SearchState {
  isOpenSearch: boolean;
  isInfocus: boolean;
  searchItems: SearchHistoryProps[];
  selectedIndex: number;
  searchSuggestions: (SearchHistoryProps | IContentData)[];
  query: string;
}

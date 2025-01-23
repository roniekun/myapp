import SearchComponent from "@/components/features/search/SearchComponent";
import Container from "@/components/layout/Container";
const Search = () => {
  return (
    <div className="flex min-h-screen w-full relative">
      <Container classNames="p-4 relative">
        <SearchComponent />
      </Container>
    </div>
  );
};
export default Search;

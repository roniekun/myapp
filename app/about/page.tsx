import SearchComponent from "@/redux/features/search/SearchComponent";

export default function Page() {
  return (
    <div className="flex justify-center items-center w-full relative flex-col min-h-screen">
      <SearchComponent />
    </div>
  );
}

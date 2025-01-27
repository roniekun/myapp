import { Metadata } from "next";
import Link from "next/link";
import Container from "@/app/_components/layout/Container";
import { contentData } from "@/app/constants/search-data";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Search",
};

interface Props {
  searchParams: {
    query?: string;
  };
}

const SearchResultPage = ({ searchParams }: Props) => {
  const query = searchParams.query?.toString() || "";
  const formattedQuery = query.trim().toLowerCase().split(/\s+/); // Split by spaces into words

  // Filtering data to display as a result
  const filteredData = contentData.filter((data) => {
    const title = data.title.trim().toLowerCase();
    const content = data.content.trim().toLowerCase();

    // Check if any word in formattedQuery is included in the title or content
    return formattedQuery.some(
      (word) => title.includes(word) || content.includes(word)
    );
  });

  return (
    <div className="flex flex-col min-h-screen w-full relative pt-[--header-height]">
      <Suspense fallback={<h2>Loading results...</h2>}>
        {filteredData.length > 0 ? (
          <Container className="flex flex-col gap-1 w-full">
            {filteredData.map((data, idx) => (
              <div key={idx}>
                <Link href={`/search_result/${data.id}`}>
                  <h1>{data.title}</h1>
                </Link>
                <p>{data.content}</p>
              </div>
            ))}
          </Container>
        ) : (
          <Container>
            <h1>No Result Found.</h1>
          </Container>
        )}
      </Suspense>
    </div>
  );
};

export default SearchResultPage;

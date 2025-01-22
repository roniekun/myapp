import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { contentData } from "@/constants/search-data";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Search",
};

const SearchResultPage = async ({
  searchParams,
}: {
  searchParams: { query?: string };
}) => {
  const query = (await searchParams.query) || "";
  const formattedQuery = query.trim().toLowerCase();

  // Filtering data to display as a result
  const filteredData = contentData.filter((data) => {
    const title = data.title.trim().toLowerCase();
    const content = data.content.trim().toLowerCase();
    return title.includes(formattedQuery) || content.includes(formattedQuery);
  });

  return (
    <div className="flex flex-col min-h-screen w-full items-center relative justify-center">
      <Suspense fallback={<h2>Loading results...</h2>}>
        {filteredData.length > 0 ? (
          <Container>
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

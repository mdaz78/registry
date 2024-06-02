import PackageListItem from "../../components/PackageListItem";
import type { SearchLoaderResult } from "./searchLoader";

import { useLoaderData } from "react-router-dom";

const SearchPage = () => {
  const { searchResults } = useLoaderData() as SearchLoaderResult;

  return (
    <div>
      <h1 className="text-2xl font-bold">Search Results</h1>
      <div className="mt-4 space-y-4">
        {searchResults.map((pack) => (
          <PackageListItem key={pack.name} pack={pack} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;

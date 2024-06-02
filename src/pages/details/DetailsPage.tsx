import { useLoaderData } from "react-router-dom";
import type { DetailsLoaderResult } from "./detailsLoader";

const DetailsPage = () => {
  const {
    details: { name, description, author, license },
  } = useLoaderData() as DetailsLoaderResult;

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold my-4">{name}</h1>

      <div>
        <h3 className="text-lg font-bold">Description</h3>
        <div className="p-3 bg-gray-200 rounded">{description}</div>
      </div>

      <div>
        <h3 className="text-lg font-bold">License</h3>
        <div className="p-3 bg-gray-200 rounded">{license}</div>
      </div>

      {author?.name && (
        <div>
          <h3 className="text-lg font-bold">Author</h3>
          <div className="p-3 bg-gray-200 rounded">{author?.name}</div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;

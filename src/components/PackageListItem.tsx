import { Link } from "react-router-dom";
import type { PackageSummary } from "../api/types/packageSummary";

interface PackageListItemProps {
  pack: PackageSummary;
}

const PackageListItem = ({ pack }: PackageListItemProps) => {
  return (
    <div className="flex items-center justify-between p-4 border rounded">
      <div className="flex flex-col gap-2">
        <Link to={`/packages/${pack.name}`} className="text-xl font-bold">
          {pack.name}
        </Link>
        <p className="text-sm text-gray-500">{pack.description}</p>
        <div className="flex flex-wrap gap-1">
          {pack?.keywords?.map((keyword) => (
            <span
              key={keyword}
              className="border py-0.5 px-1 text-xs bg-slate-200 rounded"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
      <div className="mr-6">
        <Link
          to={`/packages/${pack.name}`}
          className="px-3 py-2 text-lg text-white bg-black rounded"
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default PackageListItem;

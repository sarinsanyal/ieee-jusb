import { BiError } from "react-icons/bi";
import { HiRefresh } from "react-icons/hi";

function NoResults({
  clearFilters,
  message = {
    title: "No results found",
    description:
      "Try adjusting your search criteria or clear filters to see all events.",
  },
  showClearButton = true,
}) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center max-w-md mx-auto">
      <div className="mb-6 p-4 rounded-full bg-red-50 dark:bg-red-900/20">
        <BiError className="text-5xl text-red-500 dark:text-red-400" />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        {message.title}
      </h3>

      <p className="text-gray-600 dark:text-gray-400 mb-6">
        {message.description}
      </p>

      {showClearButton && clearFilters && (
        <button
          onClick={clearFilters}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 
                     text-white rounded-lg transition-colors duration-200 font-medium
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                     dark:focus:ring-offset-slate-900"
          aria-label="Clear all applied filters"
        >
          <HiRefresh className="w-4 h-4" />
          Clear all filters
        </button>
      )}
    </div>
  );
}

export default NoResults;

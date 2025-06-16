import { BiError } from "react-icons/bi";

function NoResults({ clearFilters, message }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <BiError className="text-6xl text-red-500 mb-4" />
      <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
        {message.title}
      </h3>
      <p className="text-gray-500 dark:text-gray-500 mb-4">
        {message.description}
      </p>
      <button
        onClick={clearFilters}
        className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg 
                         transition-colors duration-200 font-medium"
      >
        Clear all filters
      </button>
    </div>
  );
}

export default NoResults;
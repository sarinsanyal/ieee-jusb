import { useMemo, useEffect } from "react";
import { BiX } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";

export default function SearchAndFilter({
  items,
  searchTerm,
  setSearchTerm,
  dateFilter = "all",
  setDateFilter,
  filteredItems,
  setFilteredItems,
  clearFilters,
  placeholder = "Search...",
  showDateFilter = true,
  dateOptions = [
    { value: "all", label: "All Years" },
    { value: "2025", label: "2025" },
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "older", label: "2022 & Earlier" },
  ],
}) {
  const getFilteredItems = useMemo(() => {
    const filtered = items.filter((item) => {
      const matchesSearch =
        !searchTerm ||
        item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDateFilter = () => {
        if (dateFilter === "all") return true;

        const itemYear = /\d{4}/.exec(item.date)?.[0];
        if (!itemYear) return false;

        switch (dateFilter) {
          case "2025":
            return itemYear === "2025";
          case "2024":
            return itemYear === "2024";
          case "2023":
            return itemYear === "2023";
          case "older":
            return parseInt(itemYear) < 2023;
          default:
            return true;
        }
      };

      return matchesSearch && matchesDateFilter();
    });

    if (searchTerm) {
      return filtered.sort((a, b) => {
        const searchLower = searchTerm.toLowerCase();
        const aTitle = a.name?.toLowerCase() || "";
        const bTitle = b.name?.toLowerCase() || "";

        const aExactTitle = aTitle === searchLower;
        const bExactTitle = bTitle === searchLower;
        if (aExactTitle && !bExactTitle) return -1;
        if (bExactTitle && !aExactTitle) return 1;

        const aTitleStarts = aTitle.startsWith(searchLower);
        const bTitleStarts = bTitle.startsWith(searchLower);
        if (aTitleStarts && !bTitleStarts) return -1;
        if (bTitleStarts && !aTitleStarts) return 1;

        const aTitleContains = aTitle.includes(searchLower);
        const bTitleContains = bTitle.includes(searchLower);
        if (aTitleContains && !bTitleContains) return -1;
        if (bTitleContains && !aTitleContains) return 1;

        return aTitle.localeCompare(bTitle);
      });
    }

    return filtered;
  }, [items, searchTerm, dateFilter]);

  useEffect(() => {
    setFilteredItems(getFilteredItems);
  }, [searchTerm, dateFilter]);

  const hasActiveFilters = searchTerm || dateFilter !== "all";

  return (
    <div className="w-full md:w-4/5 mx-auto px-4 pt-8 pb-4">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
        <div className="relative flex-1 max-w-md group">
          <input
            type="text"
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-fit px-4 py-3 pl-12 pr-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
                     placeholder-gray-500 dark:placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent
                     transition-all duration-200"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <BsSearch className="w-5 h-5 text-gray-400" />
          </div>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute ml-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full 
                       hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <BiX className="w-5 h-5 text-gray-500 dark:text-gray-300" />
            </button>
          )}
        </div>

        <div className="flex gap-3 items-center pr-1">
          {showDateFilter && (
            <div className="relative">
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="appearance-none px-4 py-3 pr-8 border-2 border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-white cursor-pointer
                         focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent
                         transition-all duration-200"
              >
                {dateOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <FaChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          )}

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="px-4 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg 
                       transition-colors duration-200 font-medium flex items-center gap-2"
            >
              <BiX className="w-4 h-4" />
              Clear
            </button>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between text-gray-600 dark:text-gray-400 text-sm mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
          <span>
            {filteredItems.length === items.length
              ? `Showing all ${items.length} items`
              : `Found ${filteredItems.length} of ${items.length} items`}
          </span>
        </div>
        {hasActiveFilters && (
          <span className="text-xs bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 px-2 py-1 rounded-full">
            Filtered
          </span>
        )}
      </div>
    </div>
  );
}

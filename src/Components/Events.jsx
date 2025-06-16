import { useEffect, useState } from "react";
import items from "../assets/data/events.json";
import PageWrapper from "./PageWrapper";
import ReactPaginate from "react-paginate";
import SearchAndFilter from "./event/SearchAndFilter";
import EventCard from "./event/EventCard";
import NoResults from "./event/NoResult";

const itemsPerPage = 6;

export default function Events() {
  const [itemOffset, setItemOffset] = useState(0);
  const [filteredItems, setFilteredItems] = useState(items);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("all");

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredItems.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);

    const eventsSection = document.querySelector(".events-container");

    if (eventsSection) {
      eventsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const clearFilters = () => {
    setSearchTerm("");
    setDateFilter("all");
    setFilteredItems(items);
    setItemOffset(0);
  };

  useEffect(() => {
    setItemOffset(0);
  }, [searchTerm, dateFilter]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageWrapper>
      <div className="flex flex-col justify-center w-full dark:bg-[#002238] events-container pb-6">
        <SearchAndFilter
          items={items}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          dateFilter={dateFilter}
          setDateFilter={setDateFilter}
          filteredItems={filteredItems}
          setFilteredItems={setFilteredItems}
          clearFilters={clearFilters}
          placeholder="Search events..."
        />
        {filteredItems.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:w-4/5 px-4 pb-12 mx-auto min-h-[800px]">
              {currentItems.map((item) => (
                <EventCard
                  key={item.id}
                  item={item}
                  className="w-full h-full"
                  style={{ minHeight: "48rem" }}
                />
              ))}
            </div>
            {pageCount > 1 && (
              <div className="pagination-container">
                <ReactPaginate
                  breakLabel="..."
                  nextLabel="Next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  previousLabel="< Previous"
                  renderOnZeroPageCount={null}
                  containerClassName="pagination"
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="previous"
                  nextClassName="next"
                  breakClassName="break"
                  activeClassName="selected"
                  disabledClassName="disabled"
                />
              </div>
            )}
          </>
        ) : (
          <NoResults
            clearFilters={clearFilters}
            message={{
              title: "No events found",
              description: "Try adjusting your search terms or filters",
            }}
          />
        )}
      </div>
    </PageWrapper>
  );
}

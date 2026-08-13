import { useEffect, useState } from "react";
import items from "../assets/data/events.json";
import PageWrapper from "./PageWrapper";
import ReactPaginate from "react-paginate";
import SearchAndFilter from "./event/SearchAndFilter";
import EventCard from "./event/EventCard";
import NoResults from "./event/NoResult";
import { HiCalendar, HiExternalLink } from "react-icons/hi";

const itemsPerPage = 6;

const upcomingEvents = items.filter((e) => e.upcoming);
const pastEvents = items.filter((e) => !e.upcoming);

export default function Events() {
  const [itemOffset, setItemOffset] = useState(0);
  const [filteredItems, setFilteredItems] = useState(pastEvents);
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
      eventsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const clearFilters = () => {
    setSearchTerm("");
    setDateFilter("all");
    setFilteredItems(pastEvents);
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
      <div className="flex flex-col justify-center w-full dark:bg-[#002238] pb-6">

        {/* ── Upcoming Events Section ───────────────────────── */}
        {upcomingEvents.length > 0 && (
          <section className="upcoming-section">
            <div className="upcoming-section-inner">
              <div className="upcoming-section-header">
                <span className="upcoming-section-pill">UPCOMING</span>
                <h2 className="upcoming-section-title">Upcoming Events</h2>
              </div>

              <div className="upcoming-cards-list">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="upcoming-card">
                    {/* Graphic */}
                    <div className="upcoming-card-graphic">
                      <img
                        src={event.img}
                        alt={event.name}
                        className="upcoming-card-img"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.nextSibling.style.display = "flex";
                        }}
                      />
                      <div className="upcoming-card-img-fallback" style={{ display: "none" }}>
                        <span>MLAS</span>
                        <span className="upcoming-fallback-version">4.0</span>
                      </div>
                      <div className="upcoming-card-badge">
                        UPCOMING
                      </div>
                    </div>

                    {/* Info */}
                    <div className="upcoming-card-info">
                      <h3 className="upcoming-card-title">{event.name}</h3>
                      <p className="upcoming-card-subtitle">Machine Learning Accelerator Summit</p>
                      <div className="upcoming-card-date">
                        <HiCalendar className="upcoming-date-icon" />
                        {event.date}
                      </div>
                      <p className="upcoming-card-desc">{event.description}</p>
                      <a
                        href={event.link !== "#" ? event.link : undefined}
                        className="upcoming-card-cta"
                        onClick={event.link === "#" ? (e) => e.preventDefault() : undefined}
                      >
                        <HiExternalLink />
                        {event.link !== "#" ? "More Info" : "Stay Tuned →"}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Divider ──────────────────────────────────────── */}
        {upcomingEvents.length > 0 && (
          <div className="events-divider">
            <span className="events-divider-label">ALL EVENTS</span>
          </div>
        )}

        {/* ── Past Events (Search + Grid) ───────────────────── */}
        <div className="events-container">
          <SearchAndFilter
            items={pastEvents}
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
      </div>
    </PageWrapper>
  );
}


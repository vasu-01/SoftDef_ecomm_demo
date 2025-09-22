import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map((n) => n + 1);

  const getVisiblePages = () => {
    if (window.innerWidth < 640) {
      // mobile → only show current page ±1
      const start = Math.max(1, currentPage - 1);
      const end = Math.min(totalPages, currentPage + 1);
      return pages.slice(start - 1, end);
    }
    return pages; // desktop → show all
  };

  const visiblePages = getVisiblePages();
  return (
    <div className="absolute right-0 -bottom-15 md:bottom-0 left-0 md:right-4.5 z-10 flex justify-center  bg-gray-100 p-[11px] rounded-md mb-2 mt-6.5 md:h-[56px]  ">
      {/* Previous button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 cursor-pointer border rounded disabled:opacity-50 "
      >
        Prev
      </button>

      {/* page numbers */}
      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded border cursor-pointer ${
            page === currentPage
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700"
          }`}
        >
          {page}
        </button>
      ))}

      {window.innerWidth < 640 && currentPage < totalPages - 1 && (
        <span className="px-1 text-gray-500">...</span>
      )}

      {/* Next button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 cursor-pointer border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

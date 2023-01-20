import React from "react";

function Paginate({
  decisionPerPage,
  totalDecisions,
  currentPage,
  paginate,
  previousPage,
  nextPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDecisions / decisionPerPage); i += 1) {
    pageNumbers.push(i);
  }
  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm">
        <button
          type="button"
          onClick={previousPage}
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-200"
        >
          Prev
        </button>
        {pageNumbers.map((number) => (
          <button
            type="button"
            key={number}
            onClick={() => paginate(number)}
            className={
              number === currentPage
                ? "bg-light-green w-10 rounded-full"
                : "bg-gray-50 hover:bg-gray-200 w-10 rounded-full duration-300"
            }
          >
            {number}
          </button>
        ))}
        <button
          type="button"
          onClick={nextPage}
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Paginate;

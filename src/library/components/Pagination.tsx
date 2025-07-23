import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { PaginationProps } from "../types";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages: (number | string)[] = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (currentPage > 4) pages.push("...");
    for (
      let i = Math.max(2, currentPage - 2);
      i <= Math.min(totalPages - 1, currentPage + 2);
      i++
    ) {
      pages.push(i);
    }
    if (currentPage < totalPages - 3) pages.push("...");
    pages.push(totalPages);
  }
  return (
    <div className="flex items-center justify-center space-x-2 sm:gap-2">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage <= 1}
        className="h-[34px] rounded bg-primary px-2 py-1 text-white disabled:opacity-50"
      >
        <IoIosArrowBack className="block sm:hidden" />
        <span className="hidden sm:block">Prev</span>
      </button>
      <div className="flex items-center space-x-2">
        {pages.map((p, idx) =>
          typeof p === "number" ? (
            <button
              key={p}
              onClick={() => onPageChange(p)}
              className={`rounded border border-primary px-2 py-1 duration-300 hover:bg-primary hover:text-white ${
                currentPage === p ? "bg-primary text-white" : ""
              }`}
            >
              {p}
            </button>
          ) : (
            <span key={"ellipsis-" + idx} style={{ margin: "0 4px" }}>
              ...
            </span>
          ),
        )}
      </div>
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage >= totalPages}
        className="h-[34px] rounded bg-primary px-3 py-1 text-white disabled:opacity-50"
      >
        <IoIosArrowForward className="block sm:hidden" />
        <span className="hidden sm:block">Next</span>
      </button>
    </div>
  );
}

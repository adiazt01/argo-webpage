interface PaginationProps {
  length: number;
  currentPage: number;
  changePage: (page: number) => void;
}

export const Pagination = ({
  length,
  currentPage,
  changePage,
}: PaginationProps) => {
  return (
    <ul className="flex flex-row flex-wrap justify-center gap-2">
      {Array.from({ length }).map((_, index) => {
        return (
          <button
            key={index}
            className={`rounded ${
              currentPage === index + 1
                ? "border-2 border-transparent bg-red-500 text-white transition"
                : "border-2 bg-transparent text-gray-700 hover:scale-105 hover:bg-neutral-100"
            } px-4 py-2 font-medium shadow transition `}
            disabled={currentPage === index + 1}
            onClick={() => {
              changePage(index);
            }}
          >
            {index + 1}
          </button>
        );
      })}
    </ul>
  );
};

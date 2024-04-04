import { useMemo, useState, useEffect, useRef } from "react";
import { Post } from "../types/Blog";

export const usePagination = (data: Post[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const totalPages = useMemo(
    () => Math.ceil(data.length / itemsPerPage),
    [data, itemsPerPage],
  );

  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [currentPage]);

  const changePage = (index: number) => {
    setCurrentPage(index + 1);
  };

  return {
    currentItems,
    totalPages,
    currentPage,
    changePage,
    sectionRef,
  };
};

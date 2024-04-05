import { useMemo, useState, useEffect, useRef, useCallback } from "react";
import { Post } from "../types/Blog";

export const usePagination = (data: Post[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [firstVisit, setFirstVisit] = useState(true); // New state
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const totalPages = useMemo(
    () => Math.ceil(data.length / itemsPerPage),
    [data, itemsPerPage],
  );

  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const sectionRef = useRef<HTMLElement>(null);

  const changePage = useCallback((index: number) => {
    setCurrentPage(index + 1);
    if (firstVisit) setFirstVisit(false); // Set firstVisit to false after first page change
  }, [firstVisit]); // Add firstVisit to dependencies

  useEffect(() => {
    if (!sectionRef.current || firstVisit) return; // Check if firstVisit is true
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: "smooth",
    });
  }, [currentPage, firstVisit]); // Add firstVisit to the dependencies

  return {
    currentItems,
    totalPages,
    currentPage,
    changePage,
    sectionRef,
  };
};
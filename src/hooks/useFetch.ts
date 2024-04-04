import { useEffect, useState } from "react";
import { FetchResponse } from "../types/useFetch";

export const useFetch = <T>(
  fetchFunction: () => Promise<T>,
): FetchResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchFunction();
        setData(data);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
          setLoading(false);
        } else {
          setError(new Error("An unknown error occurred."));
          setLoading(false);
        }
      }
    };

    void fetchData();
  }, [fetchFunction]);

  return {
    data,
    error,
    loading,
  };
};

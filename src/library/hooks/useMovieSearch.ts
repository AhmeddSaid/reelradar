import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import api from "../lib/api";
import { MovieItem, SearchParams } from "../types";

export default function useMovieSearch({
  query,
  year,
  type,
  page,
}: SearchParams) {
  const [data, setData] = useState<MovieItem[]>([]);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      const isUserSearching = query && query.length >= 3;
      const searchTerm = isUserSearching
        ? query
        : process.env.NEXT_PUBLIC_INITIAL_QUERY || "avengers";

      const params = new URLSearchParams();
      if (isUserSearching) params.set("s", query);
      if (year) params.set("y", year);
      if (type) params.set("type", type);
      if (page) params.set("page", page);

      router.replace(`?${params.toString()}`, { scroll: false });

      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await api.get("", {
            params: { s: searchTerm, y: year, type, page },
          });

          if (!response.data.Search) {
            setData([]);
            setTotalResults(0);
          } else {
            setData(response.data.Search);
            setTotalResults(Number(response.data.totalResults) || 0);
          }
        } catch (err) {
          console.error("Search error:", err);
          setData([]);
          setTotalResults(0);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, 800);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query, year, type, page, router]);

  return { data, totalResults, loading };
}

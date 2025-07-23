"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import ResultGrid from "../components/ResultGrid";
import SearchInput from "../components/SearchInput";
import TypeDropdown from "../components/TypeDropdown";
import YearDropdown from "../components/YearDropdown";
import useMovieSearch from "../hooks/useMovieSearch";

export default function ClientHome() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [query, setQuery] = useState(searchParams.get("s") || "");
  const [year, setYear] = useState(searchParams.get("y") || "");
  const [type, setType] = useState(searchParams.get("type") || "");
  const [page, setPage] = useState(searchParams.get("page") || "1");

  const { data, totalResults, loading } = useMovieSearch({
    query,
    year,
    type,
    page,
  });

  useEffect(() => {
    setPage("1");
  }, [query]);

  useEffect(() => {
    if (loading) window.scrollTo({ top: 0 });
  }, [page, query, year, type, loading]);

  const handleReset = () => {
    setQuery("");
    setYear("");
    setType("");
    setPage("1");
    router.replace("/", { scroll: false });
  };

  return (
    <div>
      <div className="my-8 overflow-hidden text-center">
        <h1 className="text-center font-[michroma] text-2xl font-bold sm:text-3xl lg:text-6xl">
          Welcome to <span className="text-primary">Reel</span>
          Radar
        </h1>
        <p className="shine-text px-1 py-2 text-center font-[michroma] text-xs font-semibold text-secondary no-underline sm:mt-2 sm:px-3 sm:py-12 sm:text-lg">
          Your go-to place for movie information
        </p>
      </div>

      <div className="mx-auto flex w-full flex-col px-5 sm:w-fit sm:px-0">
        <div className="mx-auto flex w-full justify-center gap-4">
          <SearchInput query={query} setQuery={setQuery} />
        </div>
        <div className="mt-4 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
          <div className="flex w-full items-center justify-center gap-4">
            <YearDropdown year={year} setYear={setYear} />
            <TypeDropdown type={type} setType={setType} />
          </div>
          <button
            className="rounded border border-hover px-3 py-1 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>

      <ResultGrid data={data} loading={loading} />

      <div className="mx-auto mt-4 w-full text-center">
        <Pagination
          currentPage={Number(page) || 1}
          totalPages={Math.ceil(totalResults / 10) || 1}
          onPageChange={(p) => setPage(String(p))}
        />
      </div>
    </div>
  );
}

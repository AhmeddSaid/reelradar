import Link from "next/link";
import { MovieItem } from "../types";
import Loader from "./Loader";
import MovieCard from "./MovieCard";

export default function ResultGrid({
  data,
  loading,
}: {
  data: MovieItem[];
  loading: boolean;
}) {
  return (
    <div className="my-20 flex justify-center">
      {loading ? (
        <div className="flex h-64 items-center justify-center">
          <Loader />
        </div>
      ) : data.length > 0 && !loading ? (
        <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((item, index) => (
            <Link href={`/movie/${item.imdbID}`} key={index}>
              <MovieCard {...item} />
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center h-64 text-5xl">No results found.</p>
      )}
    </div>
  );
}

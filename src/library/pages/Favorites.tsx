"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { MovieItem } from "../types";
import { getFavorites } from "../utils/favorites";

export default function Favorites() {
  const [favorites, setFavorites] = useState<MovieItem[]>([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  return (
    <div className="px-4 py-8">
      <h1 className="mb-6 font-[michroma] text-center text-2xl sm:text-3xl font-bold text-primary">
        Your Favorite List
      </h1>

      <div className="my-20 flex justify-center">
        {favorites.length === 0 ? (
          <p className="text-center text-gray-400">No favorites added yet.</p>
        ) : (
          <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {favorites.map((item, index) => (
              <Link href={`/movie/${item.imdbID}`} key={index}>
                <MovieCard {...item} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

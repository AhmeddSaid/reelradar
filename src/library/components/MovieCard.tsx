import { useEffect, useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { MovieItem } from "../types";
import { isFavorite, toggleFavorite } from "../utils/favorites";

export default function MovieCard(movie: MovieItem) {
  const { Type, Year, Title, Poster } = movie;
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(isFavorite(movie.imdbID));
  }, [movie.imdbID]);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleFavorite(movie);
    setIsFav((prev) => !prev);
  };

  return (
    <div className="card group relative flex h-[400px] w-[300px] items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/10 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105">
      <button
        onClick={handleFavoriteClick}
        className="absolute right-3 top-3 z-20 flex items-center justify-center rounded-full bg-black/50 p-2 text-white transition hover:bg-red-600"
      >
        {isFav ? <MdFavorite className="text-red-500" /> : <MdFavoriteBorder />}
      </button>

      <div className="relative h-[394px] w-[294px] overflow-hidden rounded-lg shadow-lg">
        <img
          className="h-full w-full object-fill transition-all duration-300 group-hover:scale-105"
          src={
            Poster !== "N/A"
              ? Poster
              : "/assets/images/reelradar-placeholder.png"
          }
          alt={Title}
          width={300}
          height={400}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.src !== "/assets/images/reelradar-placeholder.png") {
              target.src = "/assets/images/reelradar-placeholder.png";
            }
          }}
        />

        <div className="absolute bottom-0 left-0 right-0 z-10 flex h-[100%] flex-col justify-end bg-gradient-to-t from-black to-transparent px-3 py-2 text-white transition-all duration-300 group-hover:h-[40%]">
          <h2 className="line-clamp-2 text-xl font-semibold" title={Title}>
            {Title}
          </h2>
          <div className="mt-1 flex justify-between text-sm opacity-80">
            <p>{Year}</p>
            <p className="capitalize">{Type}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

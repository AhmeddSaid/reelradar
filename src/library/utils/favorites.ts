import toast from "react-hot-toast";
import { MovieItem } from "../types";

const FAVORITES_KEY = "favorites";

export function getFavorites(): MovieItem[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(FAVORITES_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function saveFavorites(movies: MovieItem[]) {
  toast.remove();
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(movies));
  toast.success("Movie added to favorites!");
}

export function isFavorite(id: string): boolean {
  return getFavorites().some((m) => m.imdbID === id);
}

export function toggleFavorite(movie: MovieItem) {
  const current = getFavorites();
  const exists = current.find((m) => m.imdbID === movie.imdbID);
  const updated = exists
    ? current.filter((m) => m.imdbID !== movie.imdbID)
    : [...current, movie];

  saveFavorites(updated);

  toast.remove();
  toast.success(
    exists ? "Movie removed from favorites!" : "Movie added to favorites!",
  );
}

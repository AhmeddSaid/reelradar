import { Dispatch, SetStateAction } from "react";

export type Params = {
  params: Promise<{ id: string }>;
};

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export type MovieItem = {
  imdbID: string;
  Type: string;
  Year: string;
  Title: string;
  Poster: string;
};

export type SearchParams = {
  query: string;
  year: string;
  type: string;
  page: string;
};

export type TypeDropdownProps = {
  type: string;
  setType: Dispatch<SetStateAction<string>>;
};

export type YearDropdownProps = {
  year: string;
  setYear: Dispatch<SetStateAction<string>>;
};

export type DropdownProps = {
  value: string;
  setValue: (val: string) => void;
  options: string[];
  placeholder?: string;
};

export type RatingSource =
  | "Internet Movie Database"
  | "Rotten Tomatoes"
  | "Metacritic";

export interface Rating {
  Source: RatingSource;
  Value: string;
}

export interface MovieResponse {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: "movie" | "series" | "episode";
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: "True" | "False";
}

export type MovieProps = {
  data: MovieResponse;
};

export type InfoRowProps = {
  label: string;
  value: string;
};

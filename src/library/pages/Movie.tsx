"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaImdb } from "react-icons/fa";
import { InfoRowProps, MovieProps } from "../types";
import { isFavorite, toggleFavorite } from "../utils/favorites";

export default function Movie({ data }: MovieProps) {
  const commonFields = [
    { label: "Year", value: data.Year },
    { label: "Type", value: data.Type },
    { label: "IMDb", value: data.imdbRating },
    { label: "IMDb Votes", value: data.imdbVotes },
    { label: "IMDb ID", value: data.imdbID },
    { label: "Metascore", value: data.Metascore },
    { label: "Genre", value: data.Genre },
    { label: "Rated", value: data.Rated },
    { label: "Language", value: data.Language },
    { label: "Country", value: data.Country },
    { label: "Released", value: data.Released },
    { label: "Awards", value: data.Awards },
    { label: "Plot", value: data.Plot },
    { label: "Director", value: data.Director },
    { label: "Writer", value: data.Writer },
    { label: "Actors", value: data.Actors },
  ];

  function InfoRow({ label, value }: InfoRowProps) {
    if (!value || value === "N/A") return null;

    const imdbSearchUrl = (name: string) =>
      `https://www.imdb.com/find?q=${encodeURIComponent(name)}&s=nm`;

    const renderNamesWithLinks = (names: string) => {
      return names.split(",").map((name, idx) => (
        <span key={idx}>
          <Link
            href={imdbSearchUrl(name.trim())}
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            {name.trim()}
          </Link>
          {idx < names.split(",").length - 1 && ", "}
        </span>
      ));
    };

    return (
      <div>
        <span className="font-bold text-primary">{label}:</span>{" "}
        {label === "Plot" ? (
          <div className="my-2 rounded-lg bg-secondary p-4 font-semibold leading-relaxed text-white">
            {value}
          </div>
        ) : label === "Director" || label === "Writer" || label === "Actors" ? (
          <div>{renderNamesWithLinks(value)}</div>
        ) : label === "IMDb" ? (
          <Link
            href={`https://www.imdb.com/title/${data.imdbID}`}
            target="_blank"
          >
            <span className="rounded-md bg-[#b18d0d] p-1 font-bold text-white">
              {value}
            </span>
          </Link>
        ) : (
          <span className="capitalize">{value}</span>
        )}
      </div>
    );
  }

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(isFavorite(data.imdbID));
  }, [data.imdbID]);

  const handleToggle = () => {
    toggleFavorite(data);
    setIsFav((prev) => !prev);
  };

  return (
    <div className="flex flex-col px-5">
      <div className="mx-auto my-20 flex flex-col gap-6 rounded-xl border p-6 shadow-md xl:flex-row">
        <div className="flex justify-center">
          <img
            src={
              data.Poster !== "N/A"
                ? data.Poster
                : "/assets/images/reelradar-placeholder.png"
            }
            alt={data.Title}
            className="w-[400px] rounded-md object-cover shadow sm:h-[600px]"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src !== "/assets/images/reelradar-placeholder.png") {
                target.src = "/assets/images/reelradar-placeholder.png";
              }
            }}
          />
        </div>

        <div className="flex max-w-3xl flex-col gap-3 text-base">
          <div className="flex flex-col justify-between sm:flex-row sm:items-center">
            <h2 className="mb-4 text-center text-3xl font-bold text-primary sm:text-start sm:text-5xl">
              {data.Title}
            </h2>
            <Link
              href={`https://www.imdb.com/title/${data.imdbID}`}
              target="_blank"
            >
              <FaImdb size={60} color="#e2b616" />
            </Link>
          </div>

          {commonFields.map((field) => (
            <InfoRow
              key={field.label}
              label={field.label}
              value={field.value}
            />
          ))}

          {data.Type === "movie" && (
            <>
              <InfoRow label="Runtime" value={data.Runtime} />
              <InfoRow label="BoxOffice" value={data.BoxOffice} />
            </>
          )}

          {data.Ratings?.length > 0 && (
            <div>
              <span className="font-bold text-primary">Ratings:</span>
              <ul className="ml-4 list-inside list-disc">
                {data.Ratings.map((rating, index) => (
                  <li key={index}>
                    {rating.Source}: {rating.Value}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="mt-12 flex flex-col-reverse justify-center gap-8 sm:flex-row">
        <Link
          href="/"
          className="rounded-md bg-primary px-4 py-4 text-center font-bold text-white transition-all duration-300 hover:bg-hover"
        >
          Back to Home
        </Link>
        <button
          onClick={handleToggle}
          className="rounded-md bg-primary px-4 py-4 font-bold text-white transition-all duration-300 hover:bg-hover"
        >
          {isFav ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
}

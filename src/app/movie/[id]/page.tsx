import api from "@/library/lib/api";
import Movie from "@/library/pages/Movie";
import { Params } from "@/library/types";
import { notFound } from "next/navigation";

export default async function Page({ params }: Params) {
  const { id } = await params;

  try {
    const res = await api.get("", { params: { i: id, plot: "full" } });
    const movie = res.data;

    if (movie.Response !== "True") {
      return notFound();
    }

    return <Movie data={movie} />;
  } catch (error) {
    console.error("Error fetching movie:", error);
    return notFound();
  }
}

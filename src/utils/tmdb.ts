const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

type MediaType = "series" | "movie" | "cartoon" | "animated" | "anime";

export async function searchMedia(query: string, tmdbType: "movie" | "tv") {
    const endpoint = tmdbType === "movie" ? "movie" : "tv";

    const response = await fetch(
        `${BASE_URL}/search/${endpoint}?api_key=${API_KEY}&query=${encodeURIComponent(
            query
        )}&language=en-US`
    );
    const data = await response.json();

    return data.results[0] ?? null;
}
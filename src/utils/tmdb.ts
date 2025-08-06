const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export async function searchSeries(title: string) {
    const response = await fetch(
        `${BASE_URL}/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(title)}&language=en-US`
    );
    const data = await response.json();
    return data.results[0];
}
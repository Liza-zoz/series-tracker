import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import type { MediaItem, MediaType, WatchStatus } from '../types/media';
import { searchMedia } from "../utils/tmdb";
import { useMedia } from "../context/MediaContext";

const AddMediaForm: React.FC = () => {
    const { addItem } = useMedia();

    const [title, setTitle] = useState("");
    const [type, setType] = useState<MediaType>("series");
    const [totalSeasons, setTotalSeasons] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [status, setStatus] = useState<WatchStatus>("Listed");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const q = title.trim();
        if (!q) return;


        setError(null);
        setLoading(true);

        try {
            let found: any = null;
            if (type !== "book") {
                // cartoons/animated/anime теж TV у TMDB
                const tmdbType = type === "movie" ? "movie" : "tv";
                found = await searchMedia(q, tmdbType);
            }

        const newItem: MediaItem = {
            id: uuidv4(),
            tmdbId: found?.id,  
            title: q,
            type,
            status,
            totalSeasons: type !== "book" ? totalSeasons : undefined,
            watchedSeasons: type !== "book" ? 0 : undefined,
            totalPages: type === "book" ? totalPages : undefined,
            readPages: type === "book" ? 0 : undefined,
            posterPath: found?.poster_path
                ? `https://image.tmdb.org/t/p/w500${found.poster_path}`
                : undefined,
            overview: found?.overview || undefined,
        };

            addItem(newItem);
            
        setTitle("");
        setType("series");
        setTotalSeasons(1);
        setTotalPages(0);
        setStatus("Listed")
        } catch (e) {
            setError("Щось пішло не так. Спробуй ще раз.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />

            <select value={type} onChange={(e) => setType(e.target.value as MediaType)}>
                <option value="series">Series</option>
                <option value="movie">Movie</option>
                <option value="cartoon">Cartoon</option>
                <option value="animated">Animated Series</option>
                <option value="anime">Anime</option>
                <option value="book">Book</option>
            </select>

            {type !== 'book' && (
                <input
                    type="number"
                    placeholder="Total season"
                    value={totalSeasons}
                    onChange={(e) => setTotalSeasons(Number(e.target.value))}
                    min={1}
                    required
                />
            )}

            {type === 'book' && (
                <input
                    type="number"
                    placeholder="Total pages"
                    value={totalPages}
                    onChange={(e) => setTotalPages(Number(e.target.value))}
                    min={1}
                    required
                />
            )}

            <select
                value={status} onChange={(e) => setStatus(e.target.value as WatchStatus)}
            >
                <option value="Listed">Listed</option>
                <option value="Watching">Watching</option>
                <option value="Viewed">Viewed</option>
                <option value="Abandoned">Abandoned</option>
            </select>

            <button type="submit" disabled={loading}>
                {loading ? "Adding..." : "Add"}
            </button>

            {error && <p style={{ color: "tomato" }}>{error}</p>}
        </form>

    )
};



export default AddMediaForm;
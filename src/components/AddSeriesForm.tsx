import React, { useState } from "react";
import type { Series, WatchStatus } from "../types/series";
import { v4 as uuidv4 } from 'uuid';
import { searchSeries } from "../utils/tmdb";

interface AddSeriesFormProps {
    onAdd: (newSeries: Series) => void;
}

const AddSeriesForm: React.FC<AddSeriesFormProps> = ({ onAdd }) => {
    const [title, setTitle] = useState("");
    const [totalSeasons, setTotalSeasons] = useState(1);
    const [status, setStatus] = useState<WatchStatus>('Listed');

    const handleSabmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const found = await searchSeries(title);

        const newSeries: Series = {
            id: uuidv4(),
            title: title.trim(),
            totalSeasons,
            watchedSeasons: 0,
            status,
            posterPath: found?.poster_path ? `https://image.tmdb.org/t/p/w500${found.poster_path}` : undefined,
            overview: found?.overview || undefined,
        };

        onAdd(newSeries);
        setTitle('');
        setTotalSeasons(1);
        setStatus('Listed');
    };

    return (
        <form onSubmit={handleSabmit}>
            <input
                type="text"
                placeholder="Series name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />

            <input
                type="number"
                placeholder="Number of seasons"
                value={totalSeasons}
                onChange={(e) => setTotalSeasons(Number(e.target.value))}
                min={1}
                required
            />

            <select value={status} onChange={(e) => setStatus(e.target.value as WatchStatus)}>
                <option>Listed</option>
                <option>Wathing</option>
                <option>Viewed</option>
                <option>Abandoned</option>
            </select>

            <button type="submit">Add</button>
        </form>
    );
};

export default AddSeriesForm;
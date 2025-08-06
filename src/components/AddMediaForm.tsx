import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import type { MediaItem, MediaType, WatchStatus } from '../types/media';
import { searchSeries } from "../utils/tmdb";

interface AddMediaFormProps {
    onAdd: (newSeries: MediaItem) => void;
}

const AddMediaForm: React.FC<AddMediaFormProps> = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [type, setType] = useState<MediaType>('series');
    const [totalSeasons, setTotalSeasons] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [status, setStatus] = useState<WatchStatus>('Listed');

    const handleSabmit = async (e: React.FormEvent) => {
        e.preventDefault();

        let found: any = null;
        if (type !== 'book') {
            found = await searchSeries(title);
        }

        const newItem: MediaItem = {
            id: uuidv4(),
            title: title.trim(),
            type,
            status,
            totalSeasons: type !== 'book' ? totalSeasons : undefined,
            watchedSeasons: type !== 'book' ? 0 : undefined,
            totalPages: type === 'book' ? totalPages : undefined,
            readPages: type === 'book' ? 0 : undefined,
            posterPath: found?.poster_path ? `https://image.tmdb.org/t/p/w500${found.poster_path}` : undefined,
            overview: found?.overview || undefined,
        };

        onAdd(newItem);
        setTitle('');
        setType('series');
        setTotalSeasons(1);
        setTotalPages(0);
        setStatus('Listed');
    };

    return (
        <form onSubmit={handleSabmit}>
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
            
            <button type="submit">Add</button>

        </form>
    );
};

export default AddMediaForm;
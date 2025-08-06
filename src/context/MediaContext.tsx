import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { MediaItem } from '../types/media';

interface MediaContextType {
    mediaList: MediaItem[];
    setMediaList: React.Dispatch<React.SetStateAction<MediaItem[]>>;
}

const MediaContext = createContext<MediaContextType | undefined>(undefined);

export const MediaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [mediaList, setMediaList] = useState<MediaItem[]>([
        {
            id: uuidv4(),
            title: 'Attack on Titan',
            type: 'anime',
            totalSeasons: 4,
            watchedSeasons: 4,
            status: 'Watching',
            posterPath: './src/assets/photo_2023-04-05_15-15-12.jpg',
            overview: 'Humanity fights titans...',
        },
    ]);
    return (
        <MediaContext.Provider value={{ mediaList, setMediaList }}>
            {children}
        </MediaContext.Provider>
    );
};

export const useMedia = () => {
    const context = useContext(MediaContext);
    if (!context) throw new Error('useMedia must be used within a MediaProvider');
    return context;
};
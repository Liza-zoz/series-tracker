import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { MediaItem } from '../types/media';

type Action =
    | { type: "ADD_ITEM"; payload: MediaItem }
    | { type: "UPDATE_ITEM"; payload: MediaItem }
    | { type: "REMOVE_ITEM"; payload: { id: string } }
    | { type: "SET_ALL"; payload: MediaItem[] };

type State = {
    items: MediaItem[];
};
    
const MediaContext = createContext<{
    state: State;
    addItem: (item: MediaItem) => void;
    updateItem: (item: MediaItem) => void;
    removeItem: (id: string) => void;
} | null>(null);

const STORAGE_KEY = "mediaList";

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "SET_ALL":
            return { items: action.payload };
        case "ADD_ITEM":
            const exists = state.items.some(
                x =>
                    (x.tmdbId && x.tmdbId === action.payload.tmdbId) ||
                    (x.title.toLowerCase() === action.payload.title.toLowerCase() &&
                        x.type === action.payload.type)
            );
            if (exists) return state;
            return { items: [action.payload, ...state.items] };
        case "REMOVE_ITEM":
            return { items: state.items.filter(x => x.id !== action.payload.id) };
        default:
            return state;
    }
}

export const MediaProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { items: [] });

    useEffect(() => {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            try {
                dispatch({ type: "SET_ALL", payload: JSON.parse(raw) });
            } catch { }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    }, [state.items]);

    const value = {
        state,
        addItem: (item: MediaItem) => dispatch({ type: "ADD_ITEM", payload: item }),
        updateItem: (item: MediaItem) => dispatch({ type: "UPDATE_ITEM", payload: item }),
        removeItem: (id: string) => dispatch({ type: "REMOVE_ITEM", payload: { id } }),
    };

    return <MediaContext.Provider value={value}>{children}</MediaContext.Provider>;
};

export function useMedia() {
    const ctx = useContext(MediaContext);
    if (!ctx) throw new Error("useMedia must be used within MediaProvider");
    return ctx;
}

// interface MediaContextType {
//     mediaList: MediaItem[];
//     setMediaList: React.Dispatch<React.SetStateAction<MediaItem[]>>;
// }

// const MediaContext = createContext<MediaContextType | undefined>(undefined);

// export const MediaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//     const [mediaList, setMediaList] = useState<MediaItem[]>([
//         {
//             id: uuidv4(),
//             title: 'Attack on Titan',
//             type: 'anime',
//             totalSeasons: 4,
//             watchedSeasons: 4,
//             status: 'Watching',
//             posterPath: './src/assets/photo_2023-04-05_15-15-12.jpg',
//             overview: 'Humanity fights titans...',
//         },
//     ]);
//     return (
//         <MediaContext.Provider value={{ mediaList, setMediaList }}>
//             {children}
//         </MediaContext.Provider>
//     );
// };

// export const useMedia = () => {
//     const context = useContext(MediaContext);
//     if (!context) throw new Error('useMedia must be used within a MediaProvider');
//     return context;
// };
export type MediaType =
    | 'series'
    | 'movie'
    | 'cartoon'
    | 'animated'
    | 'anime'
    | 'book';

export type WatchStatus = "Listed" | "Watching" | "Viewed" | "Abandoned";

export interface MediaItem {
    id: string;
    title: string;
    type: MediaType;
    totalSeasons?: number;
    watchedSeasons?: number;
    totalPages?: number;
    readPages?: number;
    status: WatchStatus;
    posterPath?: string;
    overview?: string;
    comment?: string;
    rating?: number;
    tmdbId?: number;
}
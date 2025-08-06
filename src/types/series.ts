export type WatchStatus = "Listed" | "Watching" | "Viewed" | "Abandoned";

export interface Series {
    id: string;
    title: string;
    totalSeasons: number;
    watchedSeasons: number;
    status: WatchStatus;
}  
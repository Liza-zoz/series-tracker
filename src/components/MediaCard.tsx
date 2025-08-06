import React from 'react';
import type { MediaItem } from '../types/media';
import styles from '../styles/components/MediaCard.module.css';

interface MediaCardProps {
    media: MediaItem;
}

const MediaCard: React.FC<MediaCardProps> = ({ media }) => {
    return (
        <div className={styles.card}>
            {media.posterPath && (
                <img src={media.posterPath}
                    alt={media.title}
                    className={styles.poster}
                />
            )}
            
            <div className={styles.content}>
                <h2 className={styles.title}>
                    {media.title}
                </h2>

                <p className={styles.status}>
                    Status: <strong>{media.status}</strong>
                </p>

                {media.overview && 
                    <p className={styles.overview}>
                        {media.overview}
                    </p>}

                {media.type === 'series' || media.type === 'anime' ? (
                    <p className={styles.details}>
                        Seasons watched: {media.watchedSeasons}/{media.totalSeasons}
                    </p>
                ) : null}

                {media.type === 'book' && media.totalPages && (
                    <p className={styles.details}>
                        Pages read: {media.readPages}/{media.totalPages}
                    </p>
                )}
                
            </div>
        </div>
    );
};

export default MediaCard;
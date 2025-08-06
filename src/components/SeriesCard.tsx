import React from 'react';
import type { Series } from '../types/series';

interface SeriesCardProps {
    series: Series;
}

const SeriesCard: React.FC<SeriesCardProps> = ({ series }) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '1rem',
            marginBottom: '1rem',
            display: 'flex',
            gap: '1rem',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        }}>
            {series.posterPath && (
                <img src={series.posterPath}
                    alt={series.title}
                    style={{ width: '120px', borderRadius: '4px', objectFit: 'cover' }}
                />
            )}
            
            <div>
                <h2 style={{ margin: 0 }}>
                    {series.title}
                </h2>
                <p style={{ fontSize: '0.9rem', margin: '0.3rem 0' }}>
                    Status: <strong>{series.status}</strong>
                </p>
                {series.overview && (
                    <p style={{ fontSize: '0.85rem', lineHeight: 1.4 }}>
                        {series.overview}
                    </p>
                )}
                <p>
                    Seasons watched: {series.watchedSeasons}/{series.totalSeasons}
                </p>
            </div>
        </div>
    );
};

export default SeriesCard;
import React from 'react';
import type { MediaItem } from '../types/media';

interface MediaCardProps {
    media: MediaItem;
}

const MediaCard: React.FC<MediaCardProps> = ({ media }) => {
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
            {media.posterPath && (
                <img src={media.posterPath}
                    alt={media.title}
                    style={{ width: '120px', borderRadius: '4px', objectFit: 'cover' }}
                />
            )}
            
            <div>
                <h2 style={{ margin: 0 }}>
                    {media.title}
                </h2>
                <p style={{ fontSize: '0.9rem', margin: '0.3rem 0' }}>
                    Status: {media.status}
                </p>
                {media.overview && 
                    <p style={{ fontSize: '0.85rem', lineHeight: 1.4 }}>
                        {media.overview}
                    </p>
                }
                {media.type === 'book' && media.totalPages && (
                    <p>
                        Pages read: {media.readPages}/{media.totalPages}
                    </p>
                )}
                
            </div>
        </div>
    );
};

export default MediaCard;
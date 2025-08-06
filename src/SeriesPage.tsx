import { useContext } from 'react';
import type { MediaItem } from '../types/media';
import SeriesCard from '../components/SeriesCard';

interface Props {
    list: MediaItem[];
}

const SeriesPage: React.FC<Props> = ({ list }) => {
    const seriesOnly = list.filter(item => item.type === 'series');

    return (
        <div>
            <h1>
                Series
            </h1>
            {seriesOnly.map(item => (
                <SeriesCard key={item.id} series={item} />
            ))}
        </div>
    );
};

export default SeriesPage;
import MediaCard from '../components/MediaCard';
import { useMedia } from '../context/MediaContext';

const SeriesPage: React.FC = () => {
    const { state } = useMedia();
    const seriesOnly = state.items.filter(item => item.type === 'series');

    return (
        <div>
            <h1>Series</h1>
            {seriesOnly.map(item => (
                <MediaCard key={item.id} media={item} />
            ))}
        </div>
    );
};

export default SeriesPage;

import { useMedia } from "../context/MediaContext";
import MediaCard from "../components/MediaCard";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
    const { mediaList } = useMedia();

    const recentlyAdded = [...mediaList].reverse().slice(0, 5);

    return (
        <div>
            <h1>
                Recently Added
            </h1>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <Link to="/series">All Series</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/books">Books</Link>
            </div>

            {recentlyAdded.length > 0 ? (
                recentlyAdded.map((item) => (
                    <MediaCard key={item.id} media={item} />
                ))
            ) : (
                <p>
                    No media items added yet
                </p>
            )}
        </div>
    );
};

export default HomePage;
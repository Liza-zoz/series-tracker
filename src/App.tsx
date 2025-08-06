import { Routes, Route, Link } from 'react-router-dom';
import HomePage from "./HomePage";
import SeriesPage from "./SeriesPage";
import MoviesPage from "./MoviesPage";
import CartoonsPage from "./CartoonsPage";
import AnimatedSeriesPage from "./AnimatedSeriesPage";
import AnimePage from "./AnimePage";
import BooksPage from "./BooksPage";

function App() {

  return (
    <div>
      <nav>
        <Link to="/">
          Home
        </Link>

        <Link to="/series">
          Series
        </Link>

        <Link to="/movies">
          Movies
        </Link>

        <Link to="/cartoons">
          Cartoon
        </Link>

        <Link to="/animated">
          Animated Series
        </Link>

        <Link to="/anime">
          Anime
        </Link>

        <Link to="/books">
          Books
        </Link>

      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/cartoons" element={<CartoonsPage />} />
        <Route path="/animated" element={<AnimatedSeriesPage />} />
        <Route path="/anime" element={<AnimePage />} />
      </Routes>

    </div>
  );
};

export default App;

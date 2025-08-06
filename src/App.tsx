import React, { useState } from "react";
import type { Series, WatchStatus } from "./types/series";
import { v4 as uuidv4 } from 'uuid';

import AddSeriesForm from "./components/AddSeriesForm";
import SeriesCard from "./components/SeriesCard";

import { Routes, Route, Link } from 'react-router-dom';
import HomePage from "./HomePage";
import SeriesPage from "./SeriesPage";
import MoviesPage from "./MoviesPage";
import CartoonsPage from "./CartoonsPage";
import AnimatedSeriesPage from "./AnimatedSeriesPage";
import AnimePage from "./AnimePage";
import BooksPage from "./BooksPage";

function App() {

  const [mediaList, setMediaList] = useState<MediaItem[]>([
    {
      id: uuidv4(),
      title: 'Attack on Titan',
      type: 'anime',
      totalSeasons: 4,
      watchedSeasons: 4,
      status: 'Watching',
      posterPath: 'https://image.tmdb.org/t/p/w500/your-image.jpg',
      overview: 'Humanity fights titans...',
    },
  ]);

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

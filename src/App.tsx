import { Routes, Route, Link } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import SeriesPage from "./pages/SeriesPage";
import MoviesPage from "./pages/MoviesPage";
import CartoonsPage from "./pages/CartoonsPage";
import AnimatedSeriesPage from "./pages/AnimatedSeriesPage";
import AnimePage from "./pages/AnimePage";
import BooksPage from "./pages/BooksPage";

import Navbar from './components/layout/Navbar';

function App() {

  return (
    <div>

      <Navbar />

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

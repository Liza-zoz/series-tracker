import React, { useState } from "react";
import type { Series, WatchStatus } from "./types/series";
import { v4 as uuidv4 } from 'uuid';
import AddSeriesForm from "./components/AddSeriesForm";


function App() {
  const [seriesList, setSeriesList] = useState<Series[]>([
    {
      id: uuidv4(),
      title: 'Stranger Things',
      totalSeasons: 4,
      watchedSeasons: 2,
      status: 'Watching',
    },
    {
      id: uuidv4(),
      title: 'Breaking Bad',
      totalSeasons: 5,
      watchedSeasons: 5,
      status: 'Viewed',
    },
  ]);

  return (
    <div>
      <h1>Series tracker </h1>

      <AddSeriesForm 
        onAdd={(newSeries) => setSeriesList([...seriesList, newSeries])}
      />
      
      <ul>
        {seriesList.map((series) => (
          <li key={series.id}>
            <strong>{series.title}</strong> - {series.status}
            {series.posterPath && <img src={series.posterPath} alt={series.title} width="150" />}
            {series.overview && <p>{series.overview}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App

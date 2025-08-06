import React, { useState } from "react";
import { Series, WatchStatus } from "./types/series";
import { v4 vs uuidv4 } from 'uuid';


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

      <ul>
        {seriesList.map((series) => (
          <li key={series.id}>
            <strong>{series.title}</strong> - {series.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App

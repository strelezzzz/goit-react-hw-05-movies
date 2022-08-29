import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import api from 'services/API-service';

const TrandingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    api.getTrendingMovies().then(setTrendingMovies);
  }, []);

  //   console.log(trendingMovies);

  return (
    <>
      <h2>Tranding today</h2>

      <ul>
        {trendingMovies.length > 0 &&
          trendingMovies.map(({ title, id }) => <li key={id}>{title}</li>)}
      </ul>
    </>
  );
};

export default TrandingMovies;

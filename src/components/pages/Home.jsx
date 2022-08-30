import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from 'services/API-service';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    api.getTrendingMovies().then(setTrendingMovies);
  }, []);

  //   console.log(trendingMovies);

  return (
    <>
      <h2>Tranding today</h2>
      {trendingMovies.length > 0 && (
        <ul>
          {trendingMovies.map(({ title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;

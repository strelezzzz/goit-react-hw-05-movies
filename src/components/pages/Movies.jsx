import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import api from 'services/API-service';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');

  const location = useLocation();
  console.log('location:', location);

  const searchQuery = searchParams.get('query') ?? '';
  console.log('searchQuery:', searchQuery);

  useEffect(() => {
    if (searchQuery.trim() === '') return;
    searchQuery && api.getSearchMovies(searchQuery).then(setMovies);
  }, [searchQuery]);

  const handleChangeInput = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return alert('Incorrect input');
    }
    api.getSearchMovies(query).then(setMovies);

    setSearchParams({ query });

    setQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">Search</button>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder=""
          onChange={handleChangeInput}
          value={query}
        ></input>
      </form>
      <ul>
        {movies.length > 0 &&
          movies.map(({ title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Movies;

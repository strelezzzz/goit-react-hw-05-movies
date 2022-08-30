import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from 'services/API-service';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  // const location = useLocation();
  // console.log('location:', location);

  const searchQuery = searchParams.get('query') ?? '';
  console.log('searchQuery:', searchQuery);

  useEffect(() => {
    searchQuery && api.getSearchMovies(searchQuery).then(setMovies);
  }, [searchQuery]);

  const handleChangeInput = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim === '') {
      return alert('Input query');
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
        {movies.length &&
          movies.map(({ title, id }) => <li key={id}>{title}</li>)}
      </ul>
    </>
  );
};

export default Movies;

import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import api from 'services/API-service';

const Movies = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log('location:', location);
  const searchQuery = searchParams.get('search') ?? '';

  useEffect(() => {
    searchQuery && api.getSearchMovies(searchQuery).then(setMovies);
    console.log('searchQuery_onUseEffect:', searchQuery);
  }, [searchQuery]);

  const handleChangeInput = e => {
    setSearch(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (search.trim === '') {
      return alert('Input query');
    }
    api.getSearchMovies(search).then(setMovies);
    setSearchParams(search);
    console.log('searchQuery_onSubmit:', searchQuery);
    setSearch('');
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
          value={search}
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

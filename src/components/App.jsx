import { Routes, Route, NavLink } from 'react-router-dom';
// import SharedLayout from './pages/SharedLayout';
import Movies from './pages/Movies';
import Home from './pages/Home';

export const App = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="movies/:movieId/cast" element={<Cast />} />
          <Route path="movies/:movieId/reviews" element={<Reviews />} />
        </Route> */}
      </Routes>
    </>
  );
};

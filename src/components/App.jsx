import { Routes, Route } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import Movies from './pages/Movies';
import Home from './pages/Home';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="movies/:movieId/cast" element={<Cast />} />
            {/* <Route path="movies/:movieId/reviews" element={<Reviews />} /> */}
          </Route>
        </Route>
      </Routes>
    </>
  );
};

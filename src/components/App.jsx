import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
// import Movies from './pages/Movies';
// import Home from './pages/Home';
// import MovieDetails from './MovieDetails/MovieDetails';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';

const Movies = lazy(() => import('./pages/Movies'));
const Home = lazy(() => import('./pages/Home'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

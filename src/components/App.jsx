import TrandingMovies from './TrandingMovies/TrandingMovies';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import Movies from './pages/Movies';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<TrandingMovies />} />
          {/* <Route path="/" element={<TrandingMovies />} /> */}
          <Route path="movies" element={<Movies />} />
        </Route>
      </Routes>
    </>
  );
};

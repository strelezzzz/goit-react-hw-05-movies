import api from 'services/API-service';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cast from 'components/Cast/Cast';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams('movieId');

  // console.log('movieId:', movieId);
  // const location = useLocation();
  // const navigate = useNavigate();

  useEffect(() => {
    api.getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const handleGoBack = () => {
    window.location.href = '/';
  };

  const { title, genres, overview, poster_path, release_date, vote_average } =
    movie ?? {};

  const imageURL = 'https://image.tmdb.org/t/p/w300';

  return (
    <>
      <button type="button" onClick={handleGoBack}>
        Go back
      </button>
      <h2>
        {title}
        {release_date}
      </h2>
      {poster_path && <img src={imageURL + poster_path} alt={title} />}
      <p>User Score:{vote_average}</p>

      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>
        {genres &&
          genres
            .map(item => {
              return item.name;
            })
            .join(' ')}
      </p>
      <Cast />
    </>
  );
};
export default MovieDetails;

// const ParsedDetail = {
//   adult: false,
//   backdrop_path: '/hYZ4a0JvPETdfgJJ9ZzyFufq8KQ.jpg',
//   belongs_to_collection: null,
//   budget: 0,
//   genres: [
//     { id: 28, name: 'Action' },
//     { id: 18, name: 'Drama' },
//     { id: 878, name: 'Science Fiction' },
//     { id: 14, name: 'Fantasy' },
//   ],
//   homepage: 'https://www.unitedartistsreleasing.com/samaritan/',
//   id: 629176,
//   imdb_id: 'tt5500218',
//   original_language: 'en',
//   original_title: 'Samaritan',
//   overview:
//     'Thirteen year old Sam Cleary  suspects that his mysteriously reclusive neighbor Mr. Smith is actually the legendary vigilante Samaritan, who was reported dead 20 years ago. With crime on the rise and the city on the brink of chaos, Sam makes it his mission to coax his neighbor out of hiding to save the city from ruin.',
//   popularity: 961.292,
//   poster_path: '/zgH8Ej50n2cvJCMJrxd4twEwSqz.jpg',
//   production_companies: [
//     {
//       id: 21,
//       logo_path: '/aOWKh4gkNrfFZ3Ep7n0ckPhoGb5.png',
//       name: 'Metro-Goldwyn-Mayer',
//       origin_country: 'US',
//     },
//     {
//       id: 166120,
//       logo_path: '/fRuHQF9DB4Zl3ha62D5Bpu1a5TL.png',
//       name: 'Balboa Productions',
//       origin_country: 'US',
//     },
//   ],
//   production_countries: [
//     { iso_3166_1: 'US', name: 'United States of America' },
//   ],
//   release_date: '2022-08-25',
//   revenue: 0,
//   runtime: 102,
//   spoken_languages: [
//     { english_name: 'English', iso_639_1: 'en', name: 'English' },
//     { english_name: 'German', iso_639_1: 'de', name: 'Deutsch' },
//   ],
//   status: 'Released',
//   tagline: "25 years ago the world's greatest hero vanished.",
//   title: 'Samaritan',
//   video: false,
//   vote_average: 6.799,
//   vote_count: 359,
// };

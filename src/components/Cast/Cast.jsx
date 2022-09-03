import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import testCast from 'services/oneCast';
import api from 'services/API-service';
const imageURL = 'https://image.tmdb.org/t/p/w200';

const Cast = () => {
  const [movieCast, setMovieCast] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    api.getMovieCast(Number(movieId)).then(setMovieCast);
  }, [movieId]);

  return (
    <>
      {/* <h2>Cast</h2> */}
      <ul>
        {movieCast &&
          movieCast.map(({ id, original_name, profile_path, character }) => (
            <div key={id}>
              <img src={imageURL + profile_path} alt={original_name} />
              <li>
                <p>{original_name}</p>
                <p>{character}</p>
              </li>
            </div>
          ))}
        {/* <div>This is Test CAST</div> */}
      </ul>
    </>
  );
};

export default Cast;

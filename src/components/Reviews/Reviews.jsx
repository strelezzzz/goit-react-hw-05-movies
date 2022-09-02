import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from 'services/API-service';

const Reviews = () => {
  const movieId = useSearchParams('movieId');
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    api.getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <ul>
      {reviews &&
        reviews.map(({ athor, content, id }) => (
          <li key={id}>
            {
              <>
                <h3>Athor:{athor}</h3>
                <p>{content}</p>
              </>
            }
          </li>
        ))}
    </ul>
  );
};

export default Reviews;

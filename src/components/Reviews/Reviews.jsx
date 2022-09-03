import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'services/API-service';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  console.log(typeof movieId);
  useEffect(() => {
    api.getMovieReviews(Number(movieId)).then(setReviews);
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

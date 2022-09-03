import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'services/API-service';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  console.log(typeof movieId);
  useEffect(() => {
    api.getMovieReviews(Number(movieId)).then(setReviews);
  }, [movieId]);

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(({ author, content, id }) => (
          <li key={id}>
            {
              <>
                <h3>Author:{author}</h3>
                <p>{content}</p>
              </>
            }
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </ul>
  );
};

export default Reviews;

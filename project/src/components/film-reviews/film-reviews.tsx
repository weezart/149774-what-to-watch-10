import {Reviews} from '../../types/review';
import Review from '../review/review';

type FilmReviewsProps = {
  reviews: Reviews;
};

function FilmReviews({reviews}: FilmReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}

export default FilmReviews;

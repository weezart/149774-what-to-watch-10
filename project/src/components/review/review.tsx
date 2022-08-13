import {Review} from '../../types/review';
import {MONTHS} from '../../const';

type ReviewProps = {
  review: Review;
}

function ReviewCard({review}: ReviewProps): JSX.Element {
  const date = new Date(review.date);
  const humanizeDate = `${MONTHS[date.getMonth()]} ${date.getDate()}, ${new Date(review.date).getFullYear()}`;
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime={`${date.getFullYear()}-0${date.getDate()}-0${date.getMonth()}`}>{humanizeDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating.toFixed(1)}</div>
    </div>
  );
}

export default ReviewCard;


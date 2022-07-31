import { Film } from '../../types/film';
import React from 'react';

type FilmOverviewProps = {
  film: Film;
};

const RATING_AWESOME = 10;
const RATING_VERY_GOOD = 8;
const RATING_GOOD = 5;
const RATING_NORMAL = 5;

function FilmOverview({film} : FilmOverviewProps): JSX.Element {
  const getRatingLevel = (rating: number) => {
    if (rating === RATING_AWESOME) {
      return 'Awesome';
    } else if (rating >= RATING_VERY_GOOD && rating < RATING_AWESOME) {
      return 'Very good';
    } else if (rating >= RATING_GOOD && rating < RATING_VERY_GOOD) {
      return 'Good';
    } else if (rating >= RATING_NORMAL && rating < RATING_GOOD) {
      return 'Normal';
    } else {
      return 'Bad';
    }
  };
  return (
    <React.Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingLevel(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring">
          <strong>
            Starring: {film.starring.join(', ')}
          </strong>
        </p>
      </div>
    </React.Fragment>
  );
}

export default FilmOverview;

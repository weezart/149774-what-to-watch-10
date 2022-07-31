import { Film } from '../../types/film';
import React from 'react';

type FilmOverviewProps = {
  film: Film;
};

function FilmOverview({film} : FilmOverviewProps): JSX.Element {
  const getRatingLevel = (rating: number) => {
    if (rating === 10) {
      return 'Awesome';
    } else if (rating >= 8 && rating < 10) {
      return 'Very good';
    } else if (rating >= 5 && rating < 8) {
      return 'Good';
    } else if (rating >= 3 && rating < 5) {
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

import { FilmInfo } from '../../types/film';
import React from 'react';

type TabsProps = {
  film: FilmInfo;
};

function Tabs({film} : TabsProps): JSX.Element {
  return (
    <React.Fragment>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item film-nav__item--active">
            <a href="/" className="film-nav__link">Overview</a>
          </li>
          <li className="film-nav__item">
            <a href="/" className="film-nav__link">Details</a>
          </li>
          <li className="film-nav__item">
            <a href="/" className="film-nav__link">Reviews</a>
          </li>
        </ul>
      </nav>
      <div className="film-rating">
        <div className="film-rating__score">{film.score}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{film.ratingLevel}</span>
          <span className="film-rating__count">{film.ratingCount} ratings</span>
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

export default Tabs;

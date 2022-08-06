import React from 'react';
import {useAppSelector} from '../../hooks';
import FilmsList from '../../components/films-list/films-list';
import GenresList from '../../components/genres-list/genres-list';
import Logo from '../../components/logo/logo';
import Header from '../../components/header/header';

function MainScreen(): JSX.Element {
  const promo = useAppSelector((state) => state.promo);
  const filmsList = useAppSelector((state) => state.films);
  const filteredFilmsList = useAppSelector((state) => state.filteredFilms);
  const filteredFilmsCount = filteredFilmsList.length;
  const filmsCount = useAppSelector((state) => state.filmsCount);
  const correctFilmsCount = Math.min(filteredFilmsCount, filmsCount);
  const renderedFilms = filteredFilmsList.slice(0, correctFilmsCount);
  const getShowMoreBtn = () => {
    if (filteredFilmsCount > filmsCount) {
      return (
        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      );
    }
    return null;
  };

  return (
    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promo?.backgroundImage} alt={promo?.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promo?.posterImage} alt={promo?.name && ' poster'} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promo?.name}  {correctFilmsCount}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promo?.genre}</span>
                <span className="film-card__year">{promo?.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList films={filmsList}/>
          <FilmsList films={renderedFilms}/>

          {getShowMoreBtn()}
        </section>
        <footer className="page-footer">
          <Logo linkClass={'logo__link logo__link--light'} />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default MainScreen;

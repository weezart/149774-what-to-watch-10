import React, { useEffect } from 'react';
import Logo from '../../components/logo/logo';
import Header from '../../components/header/header';
import FilmsList from '../../components/films-list/films-list';
import Tabs from '../../components/tabs/tabs';
import {useParams, Link} from 'react-router-dom';
import {useAppSelector, useAppDispatch} from '../../hooks';
import { fetchFilmAction } from '../../store/api-actions';

function MoviePageScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const params = useParams();
  const film = useAppSelector((state) => state.film);
  const films = useAppSelector((state) => state.films);
  const similarFilms = films.filter((filmA) => (filmA.genre === film?.genre) && filmA.id !== film?.id).slice(0, 4);

  useEffect(() => {
    dispatch(fetchFilmAction(params?.id));
  }, [params?.id, dispatch]);

  return (
    <React.Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film?.backgroundImage} alt={film?.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link to={`/films/:${film?.id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film?.posterImage} alt={film?.name && ' poster'} width="218"
                height="327"
              />
            </div>
            <div className="film-card__desc">
              <Tabs film={film || null} />
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={similarFilms}/>
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

export default MoviePageScreen;

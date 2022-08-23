import React, {useEffect} from 'react';
import Logo from '../../components/logo/logo';
import Header from '../../components/header/header';
import FilmsList from '../../components/films-list/films-list';
import MyListButton from '../../components/my-list-button/my-list-button';
import Tabs from '../../components/tabs/tabs';
import {Link, useParams, useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchFilmAction, fetchReviewsAction, fetchSimilarFilmsAction} from '../../store/api-actions';
import { getFilm, getReviews, getSimilarFilms } from '../../store/film-data/selectors';
import { getFilms } from '../../store/films-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import {APIRoute, AppRoute, AuthorizationStatus} from '../../const';
import {redirectToRoute} from '../../store/action';

function MoviePageScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const film = useAppSelector(getFilm);
  const films = useAppSelector(getFilms);
  const reviews = useAppSelector(getReviews);
  const similarFilms = useAppSelector(getSimilarFilms);
  const authStatus = useAppSelector(getAuthorizationStatus);
  const filmsIdData: Set<number> = new Set();

  for (const filmsItem of films) {
    filmsIdData.add(filmsItem.id);
  }

  useEffect(() => {
    const id = `${(params.id ? params.id.slice(1) : '0')}`;
    if (filmsIdData.has(Number(id))) {
      dispatch(fetchFilmAction(id));
      dispatch(fetchSimilarFilmsAction(id));
      dispatch(fetchReviewsAction(id));
    } else {
      dispatch(redirectToRoute(AppRoute.Error));
    }
  }, [params?.id, dispatch]);

  const onVideoButtonClickHandler = () => {
    const path = `${APIRoute.Player}/:${film?.id}`;
    navigate(path);
  };

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
                <button className="btn btn--play film-card__button" type="button" onClick={onVideoButtonClickHandler}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <MyListButton />
                {authStatus === AuthorizationStatus.Auth ? <Link to={`/films/:${film?.id}/review`} className="btn film-card__button">Add review</Link> : null}
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
              <Tabs film={film || null} reviews={reviews} />
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

import AddReviewForm from '../../components/add-review-form/add-review-form';
import Logo from '../../components/logo/logo';
import React from 'react';
import {useParams, Link} from 'react-router-dom';
import {useAppSelector} from '../../hooks';

function AddReviewScreen(): JSX.Element {
  const params = useParams();
  const id = `${(params.id ? params.id.slice(1) : '0')}`;
  const films = useAppSelector((state) => state.films);
  const film = films.find((item) => item.id === Number.parseInt(id, 10)) || films[0];

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo linkClass={'logo__link'} />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/:${film.id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href="/">Add review</a>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link" href="/">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name && ' poster'} width="218"
            height="327"
          />
        </div>
      </div>

      <AddReviewForm />
    </section>
  );
}

export default AddReviewScreen;

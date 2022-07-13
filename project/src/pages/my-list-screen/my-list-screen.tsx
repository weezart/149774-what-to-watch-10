import FilmCard from '../../components/film-card';
import Logo from '../../components/logo/logo';
import React from 'react';

function MyListScreen(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo linkClass={'logo__link'} />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
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

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {[Array.from({length: 9}, FilmCard)].map((filmCard) => filmCard)}
        </div>
      </section>

      <footer className="page-footer">
        <Logo linkClass={'logo__link logo__link--light'} />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyListScreen;

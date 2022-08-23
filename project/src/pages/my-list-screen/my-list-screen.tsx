import FilmsList from '../../components/films-list/films-list';
import Logo from '../../components/logo/logo';
import Header from '../../components/header/header';
import {useAppSelector} from '../../hooks';
import { getFavoriteFilms, getLoadingStatus } from '../../store/favorite-films-data/selectors';
import Spinner from '../../components/spinner/spinner';
import React from 'react';

function MyListScreen(): JSX.Element {
  const films = useAppSelector(getFavoriteFilms);
  const isShowLoader = useAppSelector(getLoadingStatus);

  return (
    <div className="user-page">
      { isShowLoader ? <Spinner /> : '' }
      <Header />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={films}/>
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

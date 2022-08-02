import FilmsList from '../../components/films-list/films-list';
import Logo from '../../components/logo/logo';
import Header from '../../components/header/header';
import {useAppSelector} from '../../hooks';

function MyListScreen(): JSX.Element {
  const films = useAppSelector((state) => state.films);

  return (
    <div className="user-page">
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

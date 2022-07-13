import {Link} from 'react-router-dom';
import Logo from '../../components/logo/logo';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo linkClass={'logo__link'} />

        <h1 className="page-title user-page__title">Error</h1>
      </header>

      <div className="sign-in user-page__content">
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </div>

      <footer className="page-footer">
        <Logo linkClass={'logo__link logo__link--light'} />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default NotFoundScreen;

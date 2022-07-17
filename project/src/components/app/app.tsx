import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import MoviePageScreen from '../../pages/movie-page-screen/movie-page-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PrivateRoute from '../private-route/private-route';
import {Film, FilmInfo} from '../../types/film';


type AppScreenProps = {
  name: string;
  genre: string;
  release: number;
  films: Film[],
  filmsInfo: FilmInfo[],
}

function App({name, genre, release, films, filmsInfo}: AppScreenProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen name={name} genre={genre} release={release} films={films} />}
        />
        <Route
          path={AppRoute.Login}
          element={<SignInScreen />}
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePageScreen films={films} filmsInfo={filmsInfo} />}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReviewScreen />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyListScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

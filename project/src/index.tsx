import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {promoFilm, films, filmsInfo} from './mocks/films';
import ErrorMessage from './components/error-message/error-message';
import {store} from './store';
import {checkAuthAction} from './store/api-actions';

store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const { name, genre, release } = promoFilm;

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorMessage />
      <App
        name = {name}
        genre = {genre}
        release={release}
        films = {films}
        filmsInfo = {filmsInfo}
      />
    </Provider>
  </React.StrictMode>,
);

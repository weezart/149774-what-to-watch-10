import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {promoFilm, films} from './mocks/films';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const { name, genre, release } = promoFilm;

root.render(
  <React.StrictMode>
    <App
      name = {name}
      genre = {genre}
      release={release}
      films = {films}
    />
  </React.StrictMode>,
);

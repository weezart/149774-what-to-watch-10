import {store} from '../store';
import {AuthorizationStatus} from '../const';
import {Film, Films} from './film';
import {Reviews} from './review';

export type FilmData = {
  film: Film | null;
  reviews: Reviews | [];
  similarFilms: Films | [];
  isDataLoading: boolean;
};

export type FilmsData = {
  films: Films | [];
  isDataLoading: boolean;
};

export type PromoFilmData = {
  promoFilm: Film | null;
  isDataLoading: boolean;
};

export type AddReviewProcess = {
  isDataLoading: boolean;
};

export type FilterProcess = {
  genre: string;
  filmsCount: number;
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

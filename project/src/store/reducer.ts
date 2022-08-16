import { createReducer } from '@reduxjs/toolkit';
import {
  changeGenre,
  setFilter,
  resetFilters,
  loadPromo,
  loadFilm,
  loadReviews,
  loadFilms,
  loadSimilarFilms,
  setDataLoadedStatus,
  increaseFilmsCount
} from './action';
import { DEFAULT_GENRE, AuthorizationStatus, FILM_COUNT_PER_STEP } from '../const';
import {Film, Films} from '../types/film';
import {Reviews} from '../types/review';

type InitialState = {
  genre: string,
  promo: Film | null,
  film: Film | null,
  films: Films,
  filteredFilms: Films,
  similarFilms: Films,
  reviews: Reviews,
  filmsCount: number,
  isDataLoaded: boolean,
}

const initialState: InitialState = {
  genre: DEFAULT_GENRE,
  promo: null,
  film: null,
  films: [],
  filteredFilms: [],
  similarFilms: [],
  reviews: [],
  filmsCount: FILM_COUNT_PER_STEP,
  isDataLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const {genre} = action.payload;
      state.genre = genre;
    })
    .addCase(setFilter, (state, action) => {
      state.filmsCount = FILM_COUNT_PER_STEP;
      state.filteredFilms = [...state.films].filter((film) => film.genre === state.genre);
    })
    .addCase(resetFilters, (state, action) => {
      state.filmsCount = FILM_COUNT_PER_STEP;
      state.filteredFilms = [...state.films];
    })
    .addCase(loadPromo, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(increaseFilmsCount, (state) => {
      state.filmsCount += FILM_COUNT_PER_STEP;
    })
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.filteredFilms = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    });
});

export {reducer};

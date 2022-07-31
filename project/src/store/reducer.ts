import { createReducer } from '@reduxjs/toolkit';
import {changeGenre, setFilter, resetFilters, loadPromo, loadFilms, setDataLoadedStatus, requireAuthorization, setError} from './action';
import { DEFAULT_GENRE, AuthorizationStatus } from '../const';
import {Film, Films} from '../types/film';

type InitialState = {
  genre: string,
  promo: Film | null,
  films: Films,
  filteredFilms: Films,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  error: string | null,
}

const initialState: InitialState = {
  genre: DEFAULT_GENRE,
  promo: null,
  films: [],
  filteredFilms: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const {genre} = action.payload;
      state.genre = genre;
    })
    .addCase(setFilter, (state, action) => {
      state.filteredFilms = [...state.films].filter((film) => film.genre === state.genre);
    })
    .addCase(resetFilters, (state, action) => {
      state.filteredFilms = [...state.films];
    })
    .addCase(loadPromo, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.filteredFilms = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};

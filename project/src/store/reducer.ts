import { createReducer } from '@reduxjs/toolkit';
import {changeGenre, getFilms, resetFilters, loadFilms, requireAuthorization, setError} from './action';
import { DEFAULT_GENRE, AuthorizationStatus } from '../const';
import {Films} from '../types/film';

type InitalState = {
  genre: string,
  films: Films,
  authorizationStatus: string
  error: string | null,
}

const initialState: InitalState = {
  genre: DEFAULT_GENRE,
  films: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const {genre} = action.payload;
      state.genre = genre;
    })
    .addCase(getFilms, (state, action) => {
      state.films = [];
    })
    .addCase(resetFilters, (state, action) => {
      state.films = [];
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};

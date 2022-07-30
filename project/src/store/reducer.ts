import { createReducer } from '@reduxjs/toolkit';
import {changeGenre, getFilms, resetFilters, loadFilms, requireAuthorization} from './action';
import { DEFAULT_GENRE, AuthorizationStatus } from '../const';
import {Films} from '../types/film';

type InitalState = {
  genre: string,
  films: Films,
  authorizationStatus: string
}

const initialState: InitalState = {
  genre: DEFAULT_GENRE,
  films: [],
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const {genre} = action.payload;
      state.genre = genre;
    })
    .addCase(getFilms, (state, action) => {
      state.films = films.filter((film) => film.genre === state.genre);
    })
    .addCase(resetFilters, (state, action) => {
      state.films = films;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};

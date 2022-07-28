import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, getFilms, resetFilters } from './action';
import { DEFAULT_GENRE } from '../const';
import { films } from '../mocks/films';

const initialState = {
  genre: DEFAULT_GENRE,
  films: films,
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
    });
});

export {reducer};

import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, getFilms } from './action';
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
      if (state.genre === DEFAULT_GENRE) {
        state.films = films;
        return;
      }

      state.films = films.filter((film) => film.genre === state.genre);
    });
});

export {reducer};

import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, FILM_COUNT_PER_STEP, DEFAULT_GENRE } from '../../const';
import { FilterProcess } from '../../types/state';

const initialState: FilterProcess = {
  genre: DEFAULT_GENRE,
  filmsCount: FILM_COUNT_PER_STEP,
};

export const filterProcess = createSlice({
  name: NameSpace.FilterProcess,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.genre = action.payload;
    },
    setFilter: (state) => {
      state.filmsCount = FILM_COUNT_PER_STEP;
    },
    increaseFilmsCount: (state) => {
      state.filmsCount += FILM_COUNT_PER_STEP;
    },
    resetFilters: (state) => {
      state.filmsCount = FILM_COUNT_PER_STEP;
    },
  },
});

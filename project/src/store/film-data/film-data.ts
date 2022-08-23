import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {FilmData} from '../../types/state';
import { setFilm } from '../action';
import {fetchFilmAction, fetchSimilarFilmsAction, fetchReviewsAction} from '../api-actions';

const initialState: FilmData = {
  film: null,
  reviews: [],
  similarFilms: [],
  isDataLoading: false,
};

export const filmData = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchSimilarFilmsAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isDataLoading = false;
      })
      .addCase(setFilm, (state, action) => {
        state.film = action.payload;
      });
  }
});

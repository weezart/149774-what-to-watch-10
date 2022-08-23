import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FavoriteFilmsData } from '../../types/state';
import {fetchFilmsFavoriteAction, postFilmFavoriteStatusAction} from '../api-actions';

const initialState: FavoriteFilmsData = {
  favoriteFilms: [],
  isDataLoading: false,
};

export const favoriteFilmsData = createSlice({
  name: NameSpace.FavoriteFilms,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsFavoriteAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchFilmsFavoriteAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.isDataLoading = false;
      })
      .addCase(postFilmFavoriteStatusAction.pending, (state, action) => {
        state.isDataLoading = true;
      })
      .addCase(postFilmFavoriteStatusAction.fulfilled, (state, action) => {
        state.isDataLoading = false;
      });
  }
});

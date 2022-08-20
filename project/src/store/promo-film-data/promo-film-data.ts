import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { PromoFilmData } from '../../types/state';
import { fetchPromoFilmAction } from '../api-actions';


const initialState: PromoFilmData = {
  promoFilm: null,
  isDataLoading: false,
};

export const promoFilmData = createSlice({
  name: NameSpace.PromoFilm,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isDataLoading = false;
      });
  }
});

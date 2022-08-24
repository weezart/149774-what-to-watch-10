import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { addReviewProcess } from './add-review-process/add-review-process';
import { filmData } from './film-data/film-data';
import { filmsData } from './films-data/films-data';
import { filtersProcess } from './filter-process/filter-process';
import { promoFilmData } from './promo-film-data/promo-film-data';
import { userProcess } from './user-process/user-process';
import { favoriteFilmsData } from './favorite-films-data/favorite-films-data';

export const rootReducer = combineReducers({
  [NameSpace.Film]: filmData.reducer,
  [NameSpace.Films]: filmsData.reducer,
  [NameSpace.Filters]: filtersProcess.reducer,
  [NameSpace.PromoFilm]: promoFilmData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.AddReview]: addReviewProcess.reducer,
  [NameSpace.FavoriteFilms]: favoriteFilmsData.reducer,
});

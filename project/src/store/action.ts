import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../const';
import {Film, Films} from '../types/film';
import {Reviews} from '../types/review';

export const changeGenre = createAction<{genre: string}>('changeGenre');

export const setFilter = createAction('films/setFilter');

export const resetFilters = createAction('films/resetFilters');

export const increaseFilmsCount = createAction('films/increaseFilmsCount');

export const loadFilms = createAction<Films>('data/loadFilms');

export const loadPromo = createAction<Film>('data/loadPromo');

export const loadFilm = createAction<Film>('data/loadFilm');

export const loadSimilarFilms = createAction<Films>('data/loadSimilarFilms');

export const loadReviews = createAction<Reviews>('data/loadReviews');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const setError = createAction<string | null | unknown>('user/setError');

export const redirectToRoute = createAction<AppRoute>('films/redirectToRoute');

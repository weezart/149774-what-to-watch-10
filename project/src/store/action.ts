import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../const';

export const setFilter = createAction<string>('films/setFilter');

export const setFilm = createAction('film/setFilm',(value) => ({
  payload: value,
}));

export const setError = createAction<string | null | unknown>('user/setError');

export const redirectToRoute = createAction<AppRoute>('films/redirectToRoute');

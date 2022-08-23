import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../const';
import {Film} from '../types/film';

export const setFilter = createAction<string>('films/setFilter');

export const setFilm = createAction<Film>('film/setFilm');

export const setError = createAction<string | null | unknown>('user/setError');

export const redirectToRoute = createAction<AppRoute>('films/redirectToRoute');

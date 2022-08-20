import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../const';

export const setFilter = createAction<string>('films/setFilter');

export const resetFilters = createAction('films/resetFilters');

export const setError = createAction<string | null | unknown>('user/setError');

export const redirectToRoute = createAction<AppRoute>('films/redirectToRoute');

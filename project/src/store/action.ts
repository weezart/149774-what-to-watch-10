import {createAction} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../const';
import {Films} from '../types/film';

export const changeGenre = createAction<{genre: string}>('changeGenre');

export const setFilter = createAction('films/getFilms');

export const resetFilters = createAction('films/resetFilters');

export const loadFilms = createAction<Films>('data/loadFilms');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('data/setError');

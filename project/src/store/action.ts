import {createAction} from '@reduxjs/toolkit';
import {Films} from '../types/film';

export const changeGenre = createAction<{genre: string}>('changeGenre');

export const getFilms = createAction('films/getFilms');

export const resetFilters = createAction('films/resetFilters');

export const loadFilms = createAction<Films>('data/loadFilms');

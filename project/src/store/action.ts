import {createAction} from '@reduxjs/toolkit';

export const changeGenre = createAction<{genre: string}>('changeGenre');

export const getFilms = createAction('films/getFilms');

export const resetFilters = createAction('films/resetFilters');

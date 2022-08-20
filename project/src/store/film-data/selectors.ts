import { NameSpace} from '../../const';
import { State } from '../../types/state';
import { Film, Films } from '../../types/film';
import { Reviews } from '../../types/review';

export const getFilm = (state: State): Film | null => state[NameSpace.Film].film;
export const getReviews = (state: State): Reviews => state[NameSpace.Film].reviews;
export const getSimilarFilms = (state: State): Films => state[NameSpace.Film].similarFilms;
export const getLoadingDataStatus = (state: State): boolean => state[NameSpace.Film].isDataLoading;

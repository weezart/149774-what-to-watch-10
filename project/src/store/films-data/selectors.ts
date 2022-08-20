import { NameSpace} from '../../const';
import { State } from '../../types/state';
import { Films } from '../../types/film';

export const getFilms = (state: State): Films | [] => state[NameSpace.Film].films;
export const getLoadingDataStatus = (state: State): boolean => state[NameSpace.Film].isDataLoading;

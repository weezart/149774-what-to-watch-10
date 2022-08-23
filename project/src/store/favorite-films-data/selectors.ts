import { NameSpace} from '../../const';
import { State } from '../../types/state';
import { Films } from '../../types/film';

export const getFavoriteFilms = (state: State): Films | [] => state[NameSpace.FavoriteFilms].favoriteFilms;
export const getLoadingStatus = (state: State) => state[NameSpace.FavoriteFilms].isDataLoading;
export const getFavoriteFilmsLength = (state: State) => state[NameSpace.FavoriteFilms].favoriteFilms.length;

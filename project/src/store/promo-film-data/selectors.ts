import { NameSpace} from '../../const';
import { State } from '../../types/state';
import { Film } from '../../types/film';

export const getPromoFilm = (state: State): Film | null => state[NameSpace.PromoFilm].promoFilm;

export const DEFAULT_GENRE = 'All genres';
export const FILM_COUNT_PER_STEP = 8;
export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export enum AppRoute {
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  Error = '/error404',
  Root = '/',
}

export enum APIRoute {
  Films = '/films',
  Reviews = '/comments',
  Promo = '/promo',
  Login = '/login',
  Logout = '/logout',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  FilterProcess = 'FILTER_PROCESS',
  Film = 'FILM',
  Films = 'FILMS',
  PromoFilm = 'PROMO_FILM',
  AddReview = 'ADD_REVIEW',
  User = 'USER',
}

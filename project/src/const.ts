export const ADDED_FILM_IN_LIST = true;
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
  Player = '/player',
  Reviews = '/comments',
  Promo = '/promo',
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  Filters = 'FILTERS',
  Film = 'FILM',
  Films = 'FILMS',
  PromoFilm = 'PROMO_FILM',
  AddReview = 'ADD_REVIEW',
  FavoriteFilms = 'FAVORITE_FILMS',
  User = 'USER',
}

export enum ErrorMessage {
  SignInValidate = 'We can’t recognize this email and password combination. Please try again.',
  IncorrectEmail = 'Please enter a valid email address',
}

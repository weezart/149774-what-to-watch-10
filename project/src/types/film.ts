export type Film = {
  id: string;
  name: string;
  image: string;
  video: string;
  genre: string;
};

export type FilmInfo = {
  id: string;
  name: string;
  poster: string;
  imageBg: string;
  description: string;
  ratingCount: number;
  ratingLevel: string;
  score: number;
  genre: string;
  director: string;
  starring: string[];
  runTime: number;
  release: number;
  isFavorite: boolean;
};

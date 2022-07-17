export type Film = {
  id: string;
  name: string;
  image: string;
};

export type FilmInfo = {
  id: string;
  name: string;
  poster: string;
  imageBg: string;
  video: string;
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

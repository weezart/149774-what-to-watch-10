export type Film = {
  id: number;
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  previewVideoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: [string];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
}

export type Films = Film[];

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

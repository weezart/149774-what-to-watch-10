import {Films, FilmInfo} from '../types/film';

export const promoFilm = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  release: 2014
};

export const films: Films = [
  {
    id: 1,
    name: 'The Grand Budapest Hotel',
    posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
    previewImage: 'img/the-grand-budapest-hotel-poster.jpg',
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description:
      'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: ['Bill Murray'],
    runTime: 99,
    genre: 'Comedy',
    released: 2014,
    isFavorite: false
  },
  {
    id: 2,
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
    previewImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '',
    description:
      'In an effort to thwart Grindelwald&apos;s plans of raising pure-blood wizards to rule over all ' +
      'non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, ' +
      'though he&apos;s unaware of the dangers that lie ahead.',
    rating: 6.5,
    scoresCount: 252,
    director: 'Wes Anderson',
    starring: ['Eddie Redmayne, Katherine Waterston, Katherine Waterston'],
    runTime: 99,
    genre: 'Fantastic',
    released: 2014,
    isFavorite: false
  },
];

export const filmsInfo: FilmInfo[] = [
  {
    id: 'film1',
    name: 'The Grand Budapest Hotel',
    poster: 'img/the-grand-budapest-hotel-poster.jpg',
    imageBg: 'img/bg-the-grand-budapest-hotel.jpg',
    description:
      'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.',
    score: 8.9,
    ratingLevel: 'Very good',
    ratingCount: 240,
    director: 'Wes Anderson',
    starring: ['Bill Murray'],
    runTime: 99,
    genre: 'Comedy',
    release: 2014,
    isFavorite: false,
  },
  {
    id: 'film2',
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    poster: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    imageBg: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    description:
      'In an effort to thwart Grindelwald&apos;s plans of raising pure-blood wizards to rule over all ' +
      'non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, ' +
      'though he&apos;s unaware of the dangers that lie ahead.',
    score: 6.5,
    ratingLevel: 'Good',
    ratingCount: 252,
    director: 'David Yates',
    starring: ['Eddie Redmayne', 'Katherine Waterston', 'Katherine Waterston'],
    runTime: 99,
    genre: 'Fantastic',
    release: 2018,
    isFavorite: false,
  },
];

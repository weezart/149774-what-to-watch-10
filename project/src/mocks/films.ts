import {Film, FilmInfo} from '../types/film';

export const promoFilm = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  release: 2014
};

export const films: Film[] = [
  {
    id: 'film1',
    name: 'The Grand Budapest Hotel',
    image: 'img/the-grand-budapest-hotel-poster.jpg',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id: 'film2',
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    image: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id: 'film3',
    name: 'Bohemian Rhapsody',
    image: 'img/bohemian-rhapsody.jpg',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id: 'film4',
    name: 'Macbeth',
    image: 'img/macbeth.jpg',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id: 'film5',
    name: 'Aviator',
    image: 'img/aviator.jpg',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id: 'film6',
    name: 'We need to talk about Kevin',
    image: 'img/we-need-to-talk-about-kevin.jpg',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id: 'film7',
    name: 'What We Do in the Shadows',
    image: 'img/what-we-do-in-the-shadows.jpg',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id: 'film8',
    name: 'Revenant',
    image: 'img/revenant.jpg',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
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
  {
    id: 'film3',
    name: 'Bohemian Rhapsody',
    poster: 'img/bohemian-rhapsody.jpg',
    imageBg: 'img/bohemian-rhapsody.jpg',
    description:
      'The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up ' +
      'to their famous performance at Live Aid ',
    score: 7.9,
    ratingLevel: 'Good',
    ratingCount: 508,
    director: 'Bryan Singer',
    starring: ['Rami Malek', 'Lucy Boynton', 'Gwilym Lee'],
    runTime: 99,
    genre: 'Drama',
    release: 2018,
    isFavorite: true,
  },
  {
    id: 'film4',
    name: 'Macbeth',
    poster: 'img/macbeth.jpg',
    imageBg: 'img/macbeth.jpg',
    description:
      'Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of ' +
      'Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes ' +
      'the throne for himself.',
    score: 6.6,
    ratingLevel: 'Good',
    ratingCount: 106,
    director: 'Justin Kurzel',
    starring: ['Michael Fassbender', 'Jack Madigan', 'Frank Madigan'],
    runTime: 99,
    genre: 'History',
    release: 2015,
    isFavorite: false,
  },
  {
    id: 'film5',
    name: 'Aviator',
    poster: 'img/aviator.jpg',
    imageBg: 'img/aviator.jpg',
    description:
      'A biopic depicting the early years of legendary director and aviator Howard Hughes&apos; ' +
      'career from the late 1920s to the mid 1940s',
    score: 7.5,
    ratingLevel: 'Good',
    ratingCount: 353,
    director: 'Martin Scorsese',
    starring: ['Leonardo DiCaprio', 'Cate Blanchett', 'Kate Beckinsale', 'Alec Baldwin'],
    runTime: 99,
    genre: 'Biography',
    release: 2004,
    isFavorite: false,
  },
  {
    id: 'film6',
    name: 'We need to talk about Kevin',
    poster: 'img/we-need-to-talk-about-kevin.jpg',
    imageBg: 'img/we-need-to-talk-about-kevin.jpg',
    description:
      'Kevin&apos;s mother struggles to love her strange child, despite the increasingly dangerous things he ' +
      'says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.',
    score: 7.5,
    ratingLevel: 'Good',
    ratingCount: 893,
    director: 'Lynne Ramsay',
    starring: ['Tilda Swinton', 'John C. Reilly', 'Ezra Miller'],
    runTime: 99,
    genre: 'Thriller',
    release: 2011,
    isFavorite: true,
  },
  {
    id: 'film7',
    name: 'What We Do in the Shadows',
    poster: 'img/what-we-do-in-the-shadows.jpg',
    imageBg: 'img/what-we-do-in-the-shadows.jpg',
    description:
      'A look into the daily (or rather, nightly) lives of three vampires, who&apos;ve lived together ' +
      'for over 100 years, on Staten Island.',
    score: 8.6,
    ratingLevel: 'Very good',
    ratingCount: 353,
    director: 'Jemaine Clement',
    starring: ['Kayvan Novak', 'Natasia Demetriou', 'Matt Berry'],
    runTime: 99,
    genre: 'Horror',
    release: 2019,
    isFavorite: false,
  },
  {
    id: 'film8',
    name: 'Revenant',
    poster: 'img/revenant.jpg',
    imageBg: 'img/revenant.jpg',
    description:
      'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by ' +
      'a bear and left for dead by members of his own hunting team.',
    score: 8.0,
    ratingLevel: 'Very good',
    ratingCount: 768,
    director: 'Alejandro G. Iñárritu',
    starring: ['Leonardo DiCaprio', 'Will Poulter', 'Forrest Goodluck'],
    runTime: 99,
    genre: 'Western',
    release: 2015,
    isFavorite: true,
  },
];

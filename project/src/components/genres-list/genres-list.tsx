import {DEFAULT_GENRE} from '../../const';
import {Film} from '../../types/film';

type GenresListProps = {
  films: Film[];
}

function GenresList({films}: GenresListProps): JSX.Element {
  const genres: Set<string> = new Set();
  const genreListItems = [];

  genres.add(DEFAULT_GENRE);

  for (const film of films) {
    genres.add(film.genre);
  }

  for (const genre of genres) {
    genreListItems.push(
      <li
        key={genre}
        className="catalog__genres-item"
      >
        <a href="/" className="catalog__genres-link">{genre}</a>
      </li>
    );
  }

  return (
    <ul className="catalog__genres-list">
      {genreListItems}
    </ul>
  );
}

export default GenresList;

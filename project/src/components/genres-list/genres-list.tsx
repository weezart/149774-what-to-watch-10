import {SyntheticEvent} from 'react';
import {DEFAULT_GENRE} from '../../const';
import {Films} from '../../types/film';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getGenre} from '../../store/filter-process/selectors';
import {changeGenre, setFilter, resetFilters} from '../../store/filter-process/filter-process';
type GenresListProps = {
  films: Films;
}

function GenresList({films}: GenresListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector(getGenre);
  const genres: Set<string> = new Set();
  const genreListItems = [];

  genres.add(DEFAULT_GENRE);

  for (const film of films) {
    genres.add(film.genre);
  }

  for (const genre of genres) {
    const clickHandler = (evt: SyntheticEvent) => {
      evt.preventDefault();
      dispatch(changeGenre(genre));
      if (genre === DEFAULT_GENRE) {
        dispatch(resetFilters());
      } else {
        dispatch(setFilter());
      }
    };

    genreListItems.push(
      <li
        onClick={clickHandler}
        key={genre}
        className={`catalog__genres-item ${currentGenre} ${genre === currentGenre
          ? 'catalog__genres-item--active'
          : ''}`}
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

import FilmCard from '../film-card/film-card';
import {Film} from '../../types/film';

type FilmsListProps = {
  films: Film[],
}

function FilmsList ({films}: FilmsListProps): JSX.Element {

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard key={film.id} id={film.id} image={film.image} name={film.name} video={film.video} />
      ))}
    </div>
  );
}

export default FilmsList;

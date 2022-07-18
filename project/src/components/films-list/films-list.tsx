import FilmCard from '../film-card/film-card';
import {Film} from '../../types/film';
import {useState} from 'react';

type FilmsListProps = {
  films: Film[],
}

function FilmsList ({films}: FilmsListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState('');

  const makeCardActive = (id: string) => {
    setActiveCardId(id);
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          id={film.id}
          image={film.image}
          name={film.name}
          isActive={(activeCardId === film.id)}
          makeCardActive={makeCardActive}
        />
      ))}
    </div>
  );
}

export default FilmsList;

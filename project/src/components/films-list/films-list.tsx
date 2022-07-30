import FilmCard from '../film-card/film-card';
import {Films} from '../../types/film';
import {useState} from 'react';

type FilmsListProps = {
  films: Films;
}

function FilmsList ({films}: FilmsListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState(0);

  const makeCardActive = (id: number) => {
    setActiveCardId(id);
  };

  const makeCardInactive = () => {
    setActiveCardId(0);
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          id={film.id}
          image={film.previewImage}
          name={film.name}
          video={film.previewVideoLink}
          isActive={(activeCardId === film.id)}
          makeCardActive={makeCardActive}
          makeCardInactive={makeCardInactive}
        />
      ))}
    </div>
  );
}

export default FilmsList;

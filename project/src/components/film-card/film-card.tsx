import {Link} from 'react-router-dom';

type FilmCardProps = {
  id: string;
  name: string;
  image: string;
  isActive: boolean,
  makeCardActive: (id: string) => void
};


function FilmCard({id, name, image, isActive, makeCardActive} : FilmCardProps): JSX.Element {
  return (
    <article className={`small-film-card catalog__films-card ${ isActive ? 'active' : ''}` } onMouseOver={() => makeCardActive(id)}>
      <div className="small-film-card__image">
        <img
          src={image}
          alt={name}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/:${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;

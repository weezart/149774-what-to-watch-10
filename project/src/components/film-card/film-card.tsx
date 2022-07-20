import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  id: string;
  name: string;
  image: string;
  video: string;
  isActive: boolean;
  makeCardActive: (id: string) => void;
  makeCardInactive: () => void;
};


function FilmCard({id, name, image, video, isActive, makeCardActive, makeCardInactive} : FilmCardProps): JSX.Element {
  return (
    <article
      className={`small-film-card catalog__films-card ${ isActive ? 'active' : ''}` }
      onMouseEnter={() => makeCardActive(id)}
      onMouseLeave={() => makeCardInactive()}
    >
      <div className="small-film-card__image">
        {isActive ? (
          <VideoPlayer image={image} video={video} />
        ) : (
          <img
            src={image}
            alt={name}
            width="280"
            height="175"
          />
        )}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/:${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;

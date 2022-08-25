import {Link, useNavigate} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import {APIRoute} from '../../const';

type FilmCardProps = {
  id: number;
  name: string;
  image: string;
  video: string;
  isActive: boolean;
  makeCardActive: (id: number) => void;
  makeCardInactive: () => void;
};


function FilmCard({id, name, image, video, isActive, makeCardActive, makeCardInactive} : FilmCardProps): JSX.Element {
  const navigate = useNavigate();

  const onImageClickHandler = () => {
    const path = `${APIRoute.Films}/:${id}`;
    navigate(path);
  };

  return (
    <article
      className={`small-film-card catalog__films-card ${ isActive ? 'active' : ''}` }
      onMouseEnter={() => makeCardActive(id)}
      onMouseLeave={() => makeCardInactive()}
    >
      <div className="small-film-card__image" onClick={onImageClickHandler} style={{cursor: 'pointer'}}>
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
        <Link className="small-film-card__link" to={`${APIRoute.Films}/:${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;

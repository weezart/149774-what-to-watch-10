import { FilmInfo } from '../../types/film';


type FilmDetailsProps = {
  film: FilmInfo;
};

function FilmDetails({film} : FilmDetailsProps): JSX.Element {
  const getDuration = (minutes: number) => {
    const textHours = minutes / 60 > 0 ? `${Math.floor((minutes / 60))}h` : '';
    const textMinutes = minutes % 60 !== 0 ? `${minutes % 60}m` : '';
    return `${textHours} ${textMinutes}`;
  };

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{film.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {film.starring.join(', ')}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{getDuration(film.runTime)}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{film.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{film.release}</span>
        </p>
      </div>
    </div>
  );
}

export default FilmDetails;

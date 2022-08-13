import { Film } from '../../types/film';


type FilmDetailsProps = {
  film: Film | null;
};

function FilmDetails({film} : FilmDetailsProps): JSX.Element {
  const getDuration = (minutes: number): string | null => {
    const MINUTES_IN_HOUR = 60;
    const textHours = minutes / MINUTES_IN_HOUR > 0 ? `${Math.floor((minutes / MINUTES_IN_HOUR))}h` : '';
    const textMinutes = minutes % MINUTES_IN_HOUR !== 0 ? `${minutes % MINUTES_IN_HOUR}m` : '';
    return `${textHours} ${textMinutes}`;
  };

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{film?.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {film?.starring.join(', ')}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{film?.runTime !== undefined ? getDuration(film.runTime) : null}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{film?.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{film?.released}</span>
        </p>
      </div>
    </div>
  );
}

export default FilmDetails;

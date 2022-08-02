import AddReviewForm from '../../components/add-review-form/add-review-form';
import Header from '../../components/header/header';
import {useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks';

function AddReviewScreen(): JSX.Element {
  const params = useParams();
  const id = `${(params.id ? params.id.slice(1) : '0')}`;
  const films = useAppSelector((state) => state.films);
  const film = films.find((item) => item.id === Number.parseInt(id, 10)) || films[0];

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name && ' poster'} width="218"
            height="327"
          />
        </div>
      </div>

      <AddReviewForm />
    </section>
  );
}

export default AddReviewScreen;

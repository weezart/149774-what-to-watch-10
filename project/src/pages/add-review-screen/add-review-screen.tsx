import AddReviewForm from '../../components/add-review-form/add-review-form';
import Header from '../../components/header/header';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {fetchFilmAction} from '../../store/api-actions';
import { getFilm } from '../../store/film-data/selectors';

function AddReviewScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const params = useParams();
  const film = useAppSelector(getFilm);

  useEffect(() => {
    const id = `${(params.id ? params.id.slice(1) : '0')}`;
    dispatch(fetchFilmAction(id));
  }, [params?.id, dispatch]);

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film?.backgroundImage} alt={film?.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__poster film-card__poster--small">
          <img src={film?.posterImage} alt={film?.name && ' poster'} width="218"
            height="327"
          />
        </div>
      </div>

      <AddReviewForm />
    </section>
  );
}

export default AddReviewScreen;

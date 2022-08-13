import React, {ChangeEvent, useState, FormEvent} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { APIRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { addReviewAction } from '../../store/api-actions';

const ratingValues: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function AddReviewForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [formData, setFormData] = useState({
    rating: '',
    'review-text': '',
  });

  const fieldChangeHandler = (evt: ChangeEvent<(HTMLInputElement | HTMLTextAreaElement)>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const onAddReviewFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const sendingFormData = {
      rating: Number(formData.rating),
      comment: formData['review-text'],
    };

    if (formData.rating && formData['review-text']) {
      const id = `${(params.id ? params.id.slice(1) : '0')}`;
      dispatch(addReviewAction([id, sendingFormData]));
      navigate(`${APIRoute.Films}/:${id}`);
    }
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={onAddReviewFormSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {
              ratingValues.map((score) => (
                <React.Fragment key={score}>
                  <input
                    className="rating__input"
                    id={`star-${score}`}
                    type="radio"
                    name="rating"
                    value={score}
                    checked={score === Number(formData.rating)}
                    onChange = {fieldChangeHandler}
                  />
                  <label className="rating__label" htmlFor={`star-${score}`}>Rating {score}</label>
                </React.Fragment>
              ))
            }
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            value={formData['review-text']}
            onChange={fieldChangeHandler}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;

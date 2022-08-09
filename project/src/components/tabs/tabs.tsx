import { Film } from '../../types/film';
import React, {useState} from 'react';
import FilmOverview from '../film-overview/film-overview';
import FilmDetails from '../film-details/film-details';
import FilmReviews from '../film-reviews/film-reviews';

type TabsProps = {
  film: Film | null;
};

function Tabs({film} : TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState('Overview');

  const onTabClickHandler = (e: React.MouseEvent) => {
    e.preventDefault();

    if (e.currentTarget.textContent !== null) {
      setActiveTab(e.currentTarget.textContent);
    }
  };

  const renderFilmData = (tab: string) => {
    switch(tab) {
      case 'Overview':
        return <FilmOverview film={film} />;
      case 'Details':
        return <FilmDetails film={film} />;
      case 'Reviews':
        return <FilmReviews />;
    }
  };

  return (
    <React.Fragment>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={activeTab === 'Overview' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <a href="/" className="film-nav__link" onClick={onTabClickHandler}>Overview</a>
          </li>
          <li className={activeTab === 'Details' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <a href="/" className="film-nav__link" onClick={onTabClickHandler}>Details</a>
          </li>
          <li className={activeTab === 'Reviews' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <a href="/" className="film-nav__link" onClick={onTabClickHandler}>Reviews</a>
          </li>
        </ul>
      </nav>
      {renderFilmData(activeTab)}
    </React.Fragment>
  );
}

export default Tabs;

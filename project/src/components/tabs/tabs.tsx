import { FilmInfo } from '../../types/film';
import React, {useState} from 'react';

type TabsProps = {
  film: FilmInfo;
};

function Tabs({film} : TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState('Overview');

  const onTabClickHandler = (e: React.MouseEvent) => {
    e.preventDefault();

    if (e.currentTarget.textContent !== null) {
      setActiveTab(e.currentTarget.textContent);
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
      <div></div>
    </React.Fragment>
  );
}

export default Tabs;

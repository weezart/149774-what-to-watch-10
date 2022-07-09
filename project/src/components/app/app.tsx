import MainScreen from '../../pages/main-screen/main-screen';

const promoFilm = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  release: 2014,
};

function App(): JSX.Element {
  const { name, genre, release } = promoFilm;

  return (
    <MainScreen name={name} genre={genre} release={release} />
  );
}

export default App;

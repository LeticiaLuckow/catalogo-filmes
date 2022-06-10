import Featured from './components/Featured/index';
import Header from './components/Header/index';
import NewMovies from './components/NewMovies';

const App = () => {
  return (
    <div style={{ backgroundColor: '#000' }}>
      <Header />
      <Featured />
      <NewMovies />
    </div>
  );
};

export default App;

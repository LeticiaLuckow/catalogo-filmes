import Featured from './components/Featured/index';
import Footer from './components/Footer';
import Header from './components/Header/index';
import NewMovies from './components/NewMovies';

const App = () => {
  return (
    <div style={{ backgroundColor: '#000' }}>
      <Header />
      <Featured />
      <NewMovies />
      <Footer />
    </div>
  );
};

export default App;

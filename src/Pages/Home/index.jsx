import Featured from '../../components/Featured';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import NewMovies from '../../components/NewMovies';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#000' }}>
      <Header />
      <Featured />
      <NewMovies />
      <Footer />
    </div>
  );
};

export default Home;

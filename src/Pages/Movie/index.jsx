import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ImgMovie from '../../components/ImgMovie';

const Movie = () => {
  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh' }}>
      <Header />
      <ImgMovie />
      <Footer />
    </div>
  );
};

export default Movie;

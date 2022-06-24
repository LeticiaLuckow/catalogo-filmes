import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ImgMovie from '../../components/ImgMovie';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Movie = () => {
  let { id } = useParams();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=c390b288e9beb4c611edc921516ea70f&language=en-US`,
    )
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data);
        setMovie(data);
      });
  }, []);

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh' }}>
      <Header />
      <ImgMovie movieInfo={movie} />
      <Footer />
    </div>
  );
};

export default Movie;

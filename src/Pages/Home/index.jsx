import { useEffect } from 'react';
import { useState } from 'react';
import Featured from '../../components/Featured';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import NewMovies from '../../components/NewMovies';

const Home = () => {
  const [newMovies, setNewMovies] = useState();
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=c390b288e9beb4c611edc921516ea70f&language=en-US&page=1',
    )
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data.results);
        setNewMovies(data.results);
      });
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=c390b288e9beb4c611edc921516ea70f&language=en-US&page=1',
    )
      .then((Response) => Response.json())
      .then((data) => {
        setFeatured(data.results);
      });
  }, []);

  return (
    <div style={{ backgroundColor: '#000' }}>
      <Header />
      <Featured featured={featured} />
      <NewMovies newMovies={newMovies} />
      <Footer />
    </div>
  );
};

export default Home;

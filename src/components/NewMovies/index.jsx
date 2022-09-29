import CardComponent from '../CardComponent';
import Container from '../Container';
import { CardList, H1Title } from './styles';

const NewMovies = ({ newMovies }) => {
  return (
    <Container>
      <div style={{ width: '100%', marginTop: '30px' }}>
        <H1Title>Lançamentos</H1Title>
        <CardList>
          {newMovies &&
            newMovies
              .slice(0, 6)
              .map((movie) => (
                <CardComponent
                  key={movie.id}
                  linkImg={
                    'https://image.tmdb.org/t/p/w400' + movie.poster_path
                  }
                  name={movie.original_title}
                  rating={movie.vote_average}
                  id={movie.id}
                />
              ))}
        </CardList>
      </div>
    </Container>
  );
};

export default NewMovies;

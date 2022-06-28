import Container from '../Container';
import { ButtonG } from './styles';

const Genres = ({ genreArray }) => {
  return (
    <Container>
      {genreArray && genreArray.map((genre) => <ButtonG>{genre.name}</ButtonG>)}
    </Container>
  );
};

export default Genres;

import CardComponent from '../CardComponent';
import Container from '../Container';
import { CardList, TitleP } from './styles';

const NewMovies = () => {
  return (
    <Container>
      <div>
        <TitleP>Lançamentos</TitleP>
        <CardList>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </CardList>
      </div>
    </Container>
  );
};

export default NewMovies;

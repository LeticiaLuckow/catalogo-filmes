import CardComponent from '../CardComponent';
import Container from '../Container';
import { CardList, TitleP } from './styles';

const NewMovies = () => {
  const newMv = [
    {
      linkImg:
        'https://br.web.img3.acsta.net/pictures/16/09/29/21/15/495786.jpg',
      name: 'Doutor Estranho',
      rating: '8.9',
    },
    {
      linkImg:
        'https://br.web.img3.acsta.net/pictures/16/09/29/21/15/495786.jpg',
      name: 'Doutor Estranho2',
      rating: '8.9',
    },
    {
      linkImg:
        'https://br.web.img3.acsta.net/pictures/16/09/29/21/15/495786.jpg',
      name: 'Doutor Estranho',
      rating: '8.94',
    },
    {
      linkImg:
        'https://br.web.img3.acsta.net/pictures/16/09/29/21/15/495786.jpg',
      name: 'Doutor Estranho',
      rating: '8.9',
    },
    {
      linkImg:
        'https://br.web.img3.acsta.net/pictures/16/09/29/21/15/495786.jpg',
      name: 'Doutor Estranho',
      rating: '8.9',
    },
    {
      linkImg:
        'https://br.web.img3.acsta.net/pictures/16/09/29/21/15/495786.jpg',
      name: 'Doutor Estranho',
      rating: '8.9',
    },
  ];
  return (
    <Container>
      <div>
        <TitleP>Lançamentos</TitleP>
        <CardList>
          {newMv.map((movie) => (
            <CardComponent
              key={movie.name}
              linkImg={movie.linkImg}
              name={movie.name}
              rating={movie.rating}
            />
          ))}
        </CardList>
      </div>
    </Container>
  );
};

export default NewMovies;

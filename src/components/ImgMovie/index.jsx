import Container from '../Container';
import { Banner, DivInfo, Info, Release } from './styles';

const ImgMovie = ({ movieInfo }) => {
  return (
    <Container>
      <div>
        <DivInfo>
          <p>{movieInfo.original_title}</p>
          <Release>{movieInfo.release_date} </Release>
        </DivInfo>
        <Info>
          <Banner
            src={'https://image.tmdb.org/t/p/w400' + movieInfo.poster_path}
          />
          <p>{movieInfo.overview}</p>
        </Info>
      </div>
    </Container>
  );
};

export default ImgMovie;

import Container from '../Container';
import { Banner, DivInfo, Release } from './styles';

const ImgMovie = () => {
  return (
    <Container>
      <div>
        <DivInfo>
          <p>Doutor Estranho</p>
          <Release>2022 ‧ Ação/Aventura ‧ 2h 6m </Release>
        </DivInfo>
        <Banner src="https://br.web.img3.acsta.net/pictures/16/09/29/21/15/495786.jpg" />
      </div>
    </Container>
  );
};

export default ImgMovie;

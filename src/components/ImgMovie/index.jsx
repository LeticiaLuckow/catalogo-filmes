import Container from '../Container';
import { Banner, DivInfo, Info, Release } from './styles';

const ImgMovie = () => {
  return (
    <Container>
      <div>
        <DivInfo>
          <p>Doutor Estranho</p>
          <Release>2022 ‧ Ação/Aventura ‧ 2h 6m </Release>
        </DivInfo>
        <Info>
          <Banner src="https://br.web.img3.acsta.net/pictures/16/09/29/21/15/495786.jpg" />
          <p>
            Stephen Strange (Benedict Cumberbatch) leva uma vida bem sucedida
            como neurocirurgião. Sua vida muda completamente quando sofre um
            acidente de carro e fica com as mãos debilitadas. Devido a falhas da
            medicina tradicional, ele parte para um lugar inesperado em busca de
            cura e esperança, um misterioso enclave chamado Kamar-Taj,
            localizado em Katmandu. Lá descobre que o local não é apenas um
            centro medicinal, mas também a linha de frente contra forças
            malignas místicas que desejam destruir nossa realidade. Ele passa a
            treinar e adquire poderes mágicos, mas precisa decidir se vai voltar
            para sua vida comum ou defender o mundo.
          </p>
        </Info>
      </div>
    </Container>
  );
};

export default ImgMovie;

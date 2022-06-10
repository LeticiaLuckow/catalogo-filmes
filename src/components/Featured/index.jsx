import { ArrowLeftCircle, ArrowRightCircle } from '@styled-icons/bootstrap';
import { useState } from 'react';
import Container from '../Container';
import { ArrowButton, FeaturedTitle, ImgDiv } from './styles';

const Featured = () => {
  const imgLink = [
    'https://br.web.img3.acsta.net/pictures/16/09/29/21/15/495786.jpg',
    'https://ingresso-a.akamaihd.net/img/cinema/cartaz/22968-cartaz.jpg',
    'https://br.web.img3.acsta.net/pictures/22/01/05/09/48/4964345.jpg',
  ];
  // imgPos = imgPosicao
  const [imgPos, setImgPos] = useState(0);

  // ultima posicao do array
  const lastPosition = imgLink.length - 1;
  const nextImg = () => {
    if (imgPos === lastPosition) {
      setImgPos(0);
    } else {
      setImgPos(imgPos + 1);
    }
  };
  const prevImg = () => {
    if (imgPos === 0) {
      setImgPos(lastPosition);
    } else {
      setImgPos(imgPos - 1);
    }
  };
  // requisição para a api de filmes
  fetch(
    'https://api.themoviedb.org/3/movie/popular?api_key=c390b288e9beb4c611edc921516ea70f&language=en-US&page=1',
  )
    .then((Response) => Response.json())
    .then((data) => {
      console.log('data', data);
    });

  //styled-icons

  return (
    <Container>
      <div style={{ width: '100%' }}>
        <FeaturedTitle>Destaques</FeaturedTitle>

        <ImgDiv>
          <ArrowButton onClick={prevImg}>
            <ArrowLeftCircle width={40} color="#fff" />
          </ArrowButton>
          <img src={imgLink[imgPos]} style={{ width: '400px' }} />
          <ArrowButton onClick={nextImg}>
            <ArrowRightCircle width={40} color="#fff" />
          </ArrowButton>
        </ImgDiv>
      </div>
    </Container>
  );
};

export default Featured;

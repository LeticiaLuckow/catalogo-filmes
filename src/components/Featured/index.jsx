import { ArrowLeftCircle, ArrowRightCircle } from '@styled-icons/bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container';
import { ArrowButton, FeaturedTitle, ImgDiv } from './styles';

const Featured = ({ featured }) => {
  // imgPos = imgPosicao
  const [imgPos, setImgPos] = useState(0);

  // ultima posicao do array
  const lastPosition = featured.length - 1;
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

  //styled-icons
  //https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
  console.log('featured', featured);
  return (
    <Container>
      <div style={{ width: '100%' }}>
        <FeaturedTitle>Destaques</FeaturedTitle>

        <ImgDiv>
          <ArrowButton onClick={prevImg}>
            <ArrowLeftCircle width={40} color="#fff" />
          </ArrowButton>
          <Link to={'/movie/' + featured[imgPos]?.id}>
            <img
              src={
                'https://image.tmdb.org/t/p/w400' +
                featured[imgPos]?.poster_path
              }
              style={{ width: '400px' }}
            />
          </Link>
          <ArrowButton onClick={nextImg}>
            <ArrowRightCircle width={40} color="#fff" />
          </ArrowButton>
        </ImgDiv>
      </div>
    </Container>
  );
};

export default Featured;

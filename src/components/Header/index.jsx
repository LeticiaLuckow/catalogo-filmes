import Container from '../Container';
import { HeaderDiv, HeaderTitle, ImgLogo } from './styles';

const Header = () => {
  const headerLogo =
    'https://www.freeiconspng.com/thumbs/movie-icon/movie-icon-3.png';
  return (
    <HeaderDiv>
      <Container>
        <ImgLogo src={headerLogo} alt="LOGO" />
        <HeaderTitle>MovieLu</HeaderTitle>
      </Container>
    </HeaderDiv>
  );
};

export default Header;

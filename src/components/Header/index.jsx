import { Link } from 'react-router-dom';
import Container from '../Container';
import { HeaderDiv, HeaderTitle, ImgLogo, LogoDiv } from './styles';

const Header = () => {
  const headerLogo =
    'https://www.freeiconspng.com/thumbs/movie-icon/movie-icon-3.png';
  return (
    <HeaderDiv>
      <Container>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <LogoDiv>
            <ImgLogo src={headerLogo} alt="LOGO" />
            <HeaderTitle>MovieLu</HeaderTitle>
          </LogoDiv>
        </Link>
      </Container>
    </HeaderDiv>
  );
};

export default Header;

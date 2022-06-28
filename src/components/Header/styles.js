import styled from 'styled-components';

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderDiv = styled.div`
  background: #ff0047;
  display: flex;
  align-items: center;
`;
const HeaderTitle = styled.h1`
  margin: 0;
  color: white;
  font-size: 24px;
  text-decoration: none;
`;
const ImgLogo = styled.img`
  width: 30px;
  heigth: 30px;
  color: white;
  margin: 8px;
`;

export { HeaderDiv, HeaderTitle, ImgLogo, LogoDiv };

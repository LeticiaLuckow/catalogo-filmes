import styled from 'styled-components';

const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;
const FeaturedTitle = styled.h1`
  margin: 12;
  font-size: 32px;
  color: white;
  font-family: sans-serif;
`;

const ArrowButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  margin: 100px;
`;

export { ImgDiv, FeaturedTitle, ArrowButton };

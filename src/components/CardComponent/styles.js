import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  width: 150px;
  border: 1px solid white;
  flex-direction: column;
  margin: 15px;
  color: white;
  background: #383838;
  font-family: sans-serif;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const CardImg = styled.img`
  max-width: 200px;
  width: auto;
  height: auto;
  color: white;
  @media only screen and (max-width: 600px) {
    max-width: 100%;
  }
`;

const ContentDiv = styled.div`
  padding: 8px;
  display: flex;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;
`;
const CardButton = styled.button`
  background: transparent;
  width: 100%;
  color: #fff;
  padding: 4px;
  border: 0.5px solid #000;
  cursor: pointer;
`;
export { Card, CardImg, CardButton, ContentDiv };

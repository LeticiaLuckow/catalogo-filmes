import styled from 'styled-components';

const DivInfo = styled.div`
  font-size: 36px;
  color: white;
  font-family: sans-serif;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 24px 0px 12px 0px;
`;
const Info = styled.div`
  display: flex;
  color: white;
  font-family: sans-serif;
  flex-direction: row;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
  align-items: center;
`;

const Release = styled.span`
  font-size: 12px;
  color: white;
`;
const Banner = styled.img`
  max-width: 200px;
  color: white;
  margin-right: 12px;
`;

export { Banner, DivInfo, Release, Info };

import { StarFill } from '@styled-icons/bootstrap';
import { Card, CardImg, CardButton, ContentDiv } from './styles';
import { Link } from 'react-router-dom';

const CardComponent = ({ linkImg, rating, name, id }) => {
  return (
    <Card>
      <CardImg src={linkImg} />

      <ContentDiv>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <StarFill width={13} color="yellow" style={{ marginRight: 4 }} />
          <span>{rating}</span>
        </div>
        <p>{name}</p>
        <Link to={'/movie/' + id}>
          <CardButton>Ver mais</CardButton>
        </Link>
      </ContentDiv>
    </Card>
  );
};

export default CardComponent;

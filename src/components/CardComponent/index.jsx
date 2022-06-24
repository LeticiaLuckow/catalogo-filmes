import { StarFill } from '@styled-icons/bootstrap';
import { Card, CardImg, CardButton } from './styles';
import { Link } from 'react-router-dom';

const CardComponent = ({ linkImg, rating, name, id }) => {
  return (
    <Card>
      <CardImg src={linkImg} />

      <div style={{ padding: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <StarFill width={13} color="yellow" style={{ marginRight: 4 }} />
          <span>{rating}</span>
        </div>
        <p>{name}</p>
        <Link to={'/movie/' + id}>
          <CardButton>Ver mais</CardButton>
        </Link>
      </div>
    </Card>
  );
};

export default CardComponent;

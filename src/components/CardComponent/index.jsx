import { StarFill } from '@styled-icons/bootstrap';
import { Card, CardImg, CardButton } from './styles';

const CardComponent = ({ linkImg, rating, name }) => {
  return (
    <Card>
      <CardImg src={linkImg} />

      <div style={{ padding: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <StarFill width={13} color="yellow" style={{ marginRight: 4 }} />
          <span>{rating}</span>
        </div>
        <p>{name}</p>
        <CardButton>Ver mais</CardButton>
      </div>
    </Card>
  );
};

export default CardComponent;

import { StarFill } from '@styled-icons/bootstrap';
import { Card, CardImg, CardButton } from './styles';

const CardComponent = () => {
  return (
    <Card>
      <CardImg src="https://br.web.img3.acsta.net/pictures/16/09/29/21/15/495786.jpg" />

      <div style={{ padding: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <StarFill width={13} color="yellow" style={{ marginRight: 4 }} />
          <span>8.9</span>
        </div>
        <p>Doutor estranho</p>
        <CardButton>Ver mais</CardButton>
      </div>
    </Card>
  );
};

export default CardComponent;

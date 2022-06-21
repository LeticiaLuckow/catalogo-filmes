import { Github, Linkedin } from '@styled-icons/bootstrap';
import { DivIcons, FooterP } from './styles';

const Footer = () => {
  return (
    <div>
      <DivIcons>
        <a
          href="https://www.linkedin.com/in/let%C3%ADcia-luckow-355b64168/"
          target="blank"
        >
          <Linkedin width={25} color="#fff" style={{ margin: '30px' }} />{' '}
        </a>
        <a href="https://github.com/LeticiaLuckow" target="blank">
          <Github width={25} color="#fff" style={{ margin: '30px' }} />{' '}
        </a>
      </DivIcons>

      <FooterP>Feito por Letícia Villas 2022 </FooterP>
    </div>
  );
};

export default Footer;

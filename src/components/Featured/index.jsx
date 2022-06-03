const Featured = () => {
  const imgLink = [
    'https://br.web.img3.acsta.net/pictures/16/09/29/21/15/495786.jpg',
    'https://ingresso-a.akamaihd.net/img/cinema/cartaz/22968-cartaz.jpg',
    'https://br.web.img3.acsta.net/pictures/22/01/05/09/48/4964345.jpg',
  ];
  return (
    <div>
      <h1>Olá Mundo! Destaque</h1>
      <img src={imgLink[1]} />
    </div>
  );
};

export default Featured;

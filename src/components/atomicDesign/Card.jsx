import fondo from "../atomicDesign/fondo.png";
import style from '../atomicDesign/card.css'

function Card(props) {
  return (
    <>
      <section className="card">
        <h2>{props.tittle}</h2>
        <h4>{props.subtittle}</h4>
        <button>Comprar</button>
      </section>
    </>
  );
}

export default Card;

Card.defaultProps = {
  tittle: "Páginas web personales",
  subtittle: "Desde 100 USD",
};
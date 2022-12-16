import style from "./section1.css"
import image1 from '../Images/Image1.png'

export function Section1(props){
    return(
        <section className="section1"> 
        <article className="section1-text">
            <h1>{props.tittle}</h1>
            <h3>{props.subtittle}</h3>
            <button type="button" className="text-white section1-button">Ver servicios</button>
        </article>
        
        <article className="section1-image">
        <img src={image1} alt="" className="image1"/>
        </article>
        
        </section>
    )
}

Section1.defaultProps = {
    tittle: "Creamos tu pagina web a la medida de tus clientes y tu bolsillo",
    subtittle: "Contamos con una gran experiencia, somos especialistas en las tecnologías que están a la vanguardia, y lo mejor, a precios que se acomodan a ti y con la mejor experiencia a tus clientes para que potencies tu marca o negocio",
};
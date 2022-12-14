import style from "./section1.css"
import image1 from '../Images/Image1.png'

export function Section1(){
    return(
        <section className="section1"> 
        <article className="section1-text">
            <h1>Creamos tu pagina <br></br> web a la medida de<br></br> tus clientes y tu<br></br> bolsillo</h1>
            <h3>Contamos con una gran experiencia, somos especialistas en las<br></br> tecnologías que están a la vanguardia, y lo mejor, a precios que<br></br> se acomodan a ti y con la mejor experiencia a tus clientes para<br></br> que potencies tu marca o negocio</h3>
            <button type="button" className="text-white section1-button">Ver servicios</button>
        </article>
        
        <article className="section1-image">
        <img src={image1} alt="" className="image1"/>
        </article>
        
        </section>
    )
}
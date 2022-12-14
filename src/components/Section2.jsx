import { Fragment } from 'react'
import style from '../components/section2.css'
import image3 from '../Images/Image3.png'
import image4 from '../Images/Image4.png'

export default function Section2(){
    return(
        
        <section className='section2'>
        <h1>Como lo hacemos</h1>
        <section className='row'>
        <article  className='col-sm'>
        <img src={image3} className="mb-4"></img>
        <h4 className="mb-4 tittle">Entrega</h4>
        <h5 className="mb-5 text">Entrega del proyecto finalizado con opción de mantenimiento a la misma</h5>
        </article>

        <article className='col-sm'>
        <img src={image4} className="mb-4"></img>
        <h4 className="mb-4 tittle">Avances</h4>
        <h5 className="mb-5 text">Presentación progresiva del proyecto solicitado en fechas estipuladas</h5>
        </article>

        <article className='col-sm'>
        <img src={image3} className="mb-4"></img>
        <h4 className="mb-4 tittle">Diseño</h4>
        <h5 className="mb-5 text">Presentación de wireframes, mockups y prototipos de diseño</h5>
        </article>

        </section>

        </section>
    )
}
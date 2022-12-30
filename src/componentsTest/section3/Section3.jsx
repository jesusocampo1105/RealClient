import style from '../section3/section3.css'
import HTML from '../section3/HTML.png'
import CSS from '../section3/CSS.png'
import ReactJS from '../section3/ReactJS.png'
import Angular from '../section3/AngularJS.png'
import JavaScript from '../section3/JavaScript.png'
import NodeJS from '../section3/NodeJS.png'
import MongoDB from '../section3/MongoDB.png'
import Bootstrap from '../section3/Bootstrap.png'
import Typescript from '../section3/Typescript.png'
import Wordpress from '../section3/Wordpress.png'
import AdobeXD from '../section3/AdobeXD.png'

export default function Section3(){
    return(
        <>
        <div className='section3'>
            <div className='section3-span'>
                <span>Experiencia con más de 15 tecnologías en desarrollo de paginas web</span>
            </div>
        <section className="section3-containers row">
            <article className="section3-container1 col">
                <img src={HTML} alt="" className='section3-image'/>
                <span className='d-flex align-content-center flex-wrap'>HTML</span>
            </article>

            <article className="section3-container1 col">
                <img src={CSS} alt=""  className='section3-image'/>
                <span className='d-flex align-content-center flex-wrap'>CSS</span>
                </article>

            <article className="section3-container1 col">
                <img src={ReactJS} alt=""  className='section3-image'/>
                <span className='d-flex align-content-center flex-wrap'>ReactJS</span>
            </article>

            <article className="section3-container1 col">
                <img src={Angular} alt="" />
                <span className='d-flex align-content-center flex-wrap'>AngularJS</span>
            </article>

            </section>
            <section className="section3-containers row">
            <article className="section3-container1 col">
                <img src={JavaScript} alt="" />
                <span className='d-flex align-content-center flex-wrap'>JavaScript</span>
            </article>

            <article className="section3-container1  col">
                <img src={NodeJS} alt="" />
                <span className='d-flex align-content-center flex-wrap'>NodeJS</span>
            </article>

            <article className="section3-container1 col">
                <img src={MongoDB} alt="" />
                <span className='d-flex align-content-center flex-wrap'>MongoDB</span>
            </article>

            <article className="section3-container1 col">
                <img src={Bootstrap} alt="" />
                <span className='d-flex align-content-center flex-wrap'>Bootstrap</span>
            </article>

            </section>
            <section className="section3-containers row">
            <article className="section3-container1 col">
                <img src={Typescript} alt="" />
                <span className='d-flex align-content-center flex-wrap'>Typescript</span>
            </article>
 
            <article className="section3-container1 col">
                <img src={Wordpress} alt="" />
                <span className='d-flex align-content-center flex-wrap'>Wordpress</span>
            </article>

            <article className="section3-container1 col">
                <img src={AdobeXD} alt="" />
                <span className='d-flex align-content-center flex-wrap'>AdobeXD</span>
            </article>
            </section>
        
        </div>
        </>
        )
}
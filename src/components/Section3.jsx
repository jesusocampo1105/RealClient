import style from '../components/section3.css'
import HTML from '../Images/HTML.png'
import CSS from '../Images/CSS.png'
import ReactJS from '../Images/ReactJS.png'
import Angular from '../Images/AngularJS.png'
import JavaScript from '../Images/JavaScript.png'
import NodeJS from '../Images/NodeJS.png'
import MongoDB from '../Images/MongoDB.png'
import Bootstrap from '../Images/Bootstrap.png'
import Typescript from '../Images/Typescript.png'
import Wordpress from '../Images/Wordpress.png'
import AdobeXD from '../Images/AdobeXD.png'

export default function Section3(){
    return(
        <>
        <div className='section3'>
            <div className='section3-span'>
                <span>Experiencia con más de 15 tecnologías en desarrollo de paginas web</span>
            </div>
        <section className="row">
            <article className="section3-article col-sm d-flex flex-row">
                <img src={HTML} alt="" className='section3-image'/>
                <span className='d-flex align-content-center flex-wrap'>HTML</span>
            </article>

            <article className="section3-article col-sm d-flex flex-row">
                <img src={CSS} alt=""  className='section3-image'/>
                <span className='d-flex align-content-center flex-wrap'>CSS</span>
                </article>

            <article className="section3-article col-sm d-flex flex-row">
                <img src={ReactJS} alt=""  className='section3-image'/>
                <span className='d-flex align-content-center flex-wrap'>ReactJS</span>
            </article>

            <article className="section3-article col-sm d-flex flex-row">
                <img src={Angular} alt="" />
                <span className='d-flex align-content-center flex-wrap'>AngularJS</span>
            </article>

            <article className="section3-article col-sm d-flex flex-row">
                <img src={JavaScript} alt="" />
                <span className='d-flex align-content-center flex-wrap'>JavaScript</span>
            </article>

            <article className="section3-article col-sm d-flex flex-row">
                <img src={NodeJS} alt="" />
                <span className='d-flex align-content-center flex-wrap'>NodeJS</span>
            </article>

            <article className="section3-article col-sm d-flex flex-row">
                <img src={MongoDB} alt="" />
                <span className='d-flex align-content-center flex-wrap'>MongoDB</span>
            </article>

            <article className="section3-article col-sm d-flex flex-row">
                <img src={Bootstrap} alt="" />
                <span className='d-flex align-content-center flex-wrap'>Bootstrap</span>
            </article>

            <article className="section3-article col-sm d-flex flex-row">
                <img src={Typescript} alt="" />
                <span className='d-flex align-content-center flex-wrap'>Typescript</span>
            </article>
 
            <article className="section3-article col-sm d-flex flex-row">
                <img src={Wordpress} alt="" />
                <span className='d-flex align-content-center flex-wrap'>Wordpress</span>
            </article>

            <article className="section3-article col-sm d-flex flex-row">
                <img src={AdobeXD} alt="" />
                <span className='d-flex align-content-center flex-wrap'>AdobeXD</span>
            </article>

        </section>
        </div>
        </>
        )
}
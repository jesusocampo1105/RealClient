import style from '../components/footer.css'
import imageTwitter from '../Images/Twitter.png'
import imageFacebook from '../Images/Facebook.png'
import imageInstagram from '../Images/Instagram.png'
import imageGitHub from '../Images/GitHub.png'
import imageLogoBlanco from '../Images/LogoBlanco.png'

export default function Footer(){
    return(
        <div className='footer'>

        <section className='footer-sections row'>

            <article className='footer-section1 col-sm'>
                <p className='text-white'>Redes sociales</p>
                <div>
                    <img src={imageTwitter} className="footer-section1-image"/>
                    <img src={imageFacebook} className="footer-section1-image"/>
                    <img src={imageInstagram} className="footer-section1-image"/>
                    <img src={imageGitHub} className="footer-section1-image"/>
                </div>
            </article>

            <article className='footer-section2 col-sm'>
                <img src={imageLogoBlanco}/>
            </article>

            <article className='footer-section3 col-sm'>
                <p>Contacto</p>
                <p>+57 3186077243</p>
                <p>dvargash0210@gmail.com</p>
            </article>

        </section>

        </div>
    )
}
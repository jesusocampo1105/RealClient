import ShoppingCar from './ShoppingCar.png';
import LogoSinFondo from './LogoSinFondo.png';
import style from '../header/header.css';

function Header(){
    return(
    <form className='d-flex justify-content-between navbar'>
        <img src={LogoSinFondo} alt="ShoppingCar" className='imageDaniCode'/>
        <ul className='navbarText'>
            <li>Inicio</li>
            <li className='navOption'>Como lo hacemos</li>
            <li className='navOption'>Testimonios</li>
            <li className='navOption'>Contacto</li>
            <li>Productos</li>
        </ul>
        <img src={ShoppingCar} alt="" className='imageShoppingCar'/>
    </form>
    )
}

export default Header;
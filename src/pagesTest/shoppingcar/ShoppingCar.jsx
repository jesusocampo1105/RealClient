//Component
import Card from "../../components/atomicDesign/Card";
import Header from "../../components/header/Header";
//Style
import '../shoppingcar/shoppingcar.css';

const ShoppingCar = () => {
  return (
    <>
    <Header/>
    <div className='Products'>
      <section className='Products-section1'>
        <article><Card/></article>

        <div className='Products-section2'>
        <article>Tienda online</article>
        <article>Desde $100 USD</article>
        </div>

        <div className='Products-section3'>
        <article> - </article>
        <article> 2 </article>
        <article> + </article>
        </div>
      </section>
    </div>
    <div className='Products-button'>
    <button>Total aproximado = $ {}</button>
    </div>
    </>
  )
}

export default ShoppingCar
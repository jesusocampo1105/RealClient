import './App.css';
import CounterHooks from './components/CounterHooks';
import Footer from './components/footer/Footer';

import Header from './components/header/Header';
import { Section1 } from './components/section1/Section1';
import Section2 from './components/section2/Section2';
import Section3 from './components/section3/Section3';
import Section4 from './components/section4/Section4';
import Section5 from './components/section5/Section5';



function App() {
  return (
    <>
    <Header/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section1
    tittle="Escoge uno de los servicios que tenemos para ti"
    subtittle="Dale clic al botón y escoge uno de los servicios que te ayudaran a crecer en el mundo digital"/>
    <Section4/>
    <Section5/>
    <Footer/>
    </>
  );
}

export default App;

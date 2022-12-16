import './App.css';
import CounterHooks from './components/CounterHooks';
import Footer from './components/Footer';
import Header from './components/Header';
import { Section1 } from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';


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

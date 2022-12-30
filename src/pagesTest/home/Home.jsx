//Style
import '../home/home.css'

//Component
import React from 'react'
import { Section1 } from '../../componentsTest/section1/Section1'
import Section2 from '../../componentsTest/section2/Section2'
import Section3 from '../../componentsTest/section3/Section3'
import Section4 from '../../componentsTest/section4/Section4'
import Section5 from '../../componentsTest/section5/Section5'
import Footer from '../../componentsTest/footer/Footer'
import Header from '../../components/Header/Header'




const Home = () => {
  return (
    <>
    <Section1/>
      <Section2/>
      <Section3/>
      <Section1
        tittle="Escoge uno de los servicios que tenemos para ti"
        subtittle="Dale clic al botón y escoge uno de los servicios que te ayudaran a crecer en el mundo digital"
      />
      <Section4/>
      <Section5/>
      <Footer/>
    </>
  )
}

export default Home
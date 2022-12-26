// Import dependencies
import React from "react";
import Slider from "react-slick";

// Import styles
import "../../../styles/TestimonialSlider.css";

// Import images
import Perfil from "../../../assets/img/perfil.png";

const TestimonialSlider = () => {
  // Settings to slider
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <p className="testimonial__text">
          "Que gran variedad de juguetes eróticos en{" "}
          <span>Fantasy Sex Shop</span> y muy buenos precios, fui con mi pareja
          y jamás pensé encontrar tan buena asesoría, sobre todo porque no
          teníamos experiencia. Sigan así felicitaciones."
        </p>

        <div className="slider__content d-flex align-items-center gap-3">
          <img src={Perfil} alt="Perfil" />

          <h6>Arturo Salazar</h6>
        </div>
      </div>

      <div>
        <p className="testimonial__text">
          "Amo sus productos, me han llevado a experimentar nuevas cosas con mi
          pareja, el taboo ya no es una opción."
        </p>

        <div className="slider__content d-flex align-items-center gap-3">
          <img src={Perfil} alt="Perfil" />

          <h6>Daniela Torres</h6>
        </div>
      </div>

      <div>
        <p className="testimonial__text">
          "Es muy emocionante poder adquirir productos para cumplir fantasías, y
          lo mejor es poder adquirirlos en un lugar donde te brindan toda la
          asesoría y la discreción que uno quiere. ¡Súper recomendados!"
        </p>

        <div className="slider__content d-flex align-items-center gap-3">
          <img src={Perfil} alt="Perfil" />

          <h6>Alex Pinto</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;

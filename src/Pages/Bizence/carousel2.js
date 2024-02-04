
import { useState } from "react";
import Slider from "react-slick";
import image1 from "../../Assets/Events/Bizenceimg/IMG_9998.jpg"

import image2 from "../../Assets/Events/Bizenceimg/IMG_9720.jpg"

import image3 from "../../Assets/Events/Bizenceimg/IMG_9924.jpg"

import image4 from "../../Assets/Events/Bizenceimg/IMG_9989.jpg"

import image5 from "../../Assets/Events/Bizenceimg/IMG_9998.jpg"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [image1, image2, image4, image3];

function MovieSlider() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MovieSlider;
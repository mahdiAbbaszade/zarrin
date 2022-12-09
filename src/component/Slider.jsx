import React from "react";
import ReactSlick from "react-slick";
import P1 from "./../assest/p1.jpg";
import P2 from "./../assest/p2.png";
import P3 from "./../assest/p3.png";
import P4 from "./../assest/p4.jpeg";
import P5 from "./../assest/p5.jpeg";
import P6 from "./../assest/p6.jpeg";
import "./Slider.css";
const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };
  return (
    <div className="container_slider">
      <ReactSlick className="slider" {...settings}>
        <div>
          <img src={P1} alt="P1" />
        </div>
        <div>
          <img src={P2} alt="P1" />
        </div>
        <div>
          <img src={P3} alt="P1" />
        </div>
        <div>
          <img src={P4} alt="P1" />
        </div>
        <div>
          <img src={P5} alt="P1" />
        </div>
        <div>
          <img src={P6} alt="P1" />
        </div>
      </ReactSlick>
    </div>
  );
};

export default Slider;

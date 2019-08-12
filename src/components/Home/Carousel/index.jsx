import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image1 from "./network_1.png";
import Image2 from "./network_2.png";

const HomeCarousel = () => (
  <Carousel>
    <Carousel.Item>
      <img src={Image1} alt="Core Technologies" />
    </Carousel.Item>
    <Carousel.Item>
      <img src={Image2} alt="uwave" />
    </Carousel.Item>
  </Carousel>
);

export default HomeCarousel;

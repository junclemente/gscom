import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

import Carousel1 from "./network_1.png";
import Carousel2 from "./network_2.png";
import styles from "./Carousel.module.scss";

const HomeCarousel = () => (
  <Container className={styles.root}>
    <Carousel interval={6000}>
      <Carousel.Item>
        <img className={styles.image} src={Carousel1} alt="Core Technologies" />
      </Carousel.Item>
      <Carousel.Item>
        <img className={styles.image} src={Carousel2} alt="uwave" />
      </Carousel.Item>
    </Carousel>
  </Container>
);

export default HomeCarousel;

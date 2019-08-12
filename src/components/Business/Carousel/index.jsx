import React from "react";
import { Carousel, Container } from "react-bootstrap";

import Carousel1 from "./backhaul_1.png";
import Carousel2 from "./backhaul_2.png";
import Carousel3 from "./backhaul_3.png";
import styles from "./Carousel.module.scss";

const BusinessCarousel = () => (
  <Container className={styles.root}>
    <Carousel interval="6000">
      <Carousel.Item className={styles.height}>
        <img
          className={styles.image}
          src={Carousel1}
          height={330}
          width={506}
          alt="Backhaul 1"
        />
      </Carousel.Item>
      <Carousel.Item className={styles.height}>
        <img
          className={styles.image}
          src={Carousel2}
          height={145}
          width={593}
          alt="Backhaul 2"
        />
      </Carousel.Item>
      <Carousel.Item className={styles.height}>
        <img
          className={styles.image}
          src={Carousel3}
          height={163}
          width={732}
          alt="Backhaul 3"
        />
      </Carousel.Item>
    </Carousel>
  </Container>
);

export default BusinessCarousel;

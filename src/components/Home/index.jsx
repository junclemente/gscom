import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";

import Carousel from "./Carousel";
import Logo from "./gscom_logo.jpg";
import styles from "./Home.module.scss";

const Home = () => (
  <div>
    <Jumbotron className={styles.root}>
      <Container>
        <Row>
          <Col md={3}>
            <img src={Logo} height={150} alt="GScom" />
          </Col>
          <Col>
            <p>
              GScom is at the forefront of wireless communication technology
              development, providing our customers with system solutions and
              consulting services for leading-edge communication systems that
              are the basis of our daily life.
            </p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
    <Container>
      <p>
        GScom’s innovative technology leadership combined with our innovative
        design services experience enables our customers the ability to rapidly
        and effectively innovate, differentiate and win in their markets.
      </p>
      <p>
        GScom has available a broadband wireless 4096-QAM modem for Gigabit data
        communication providing a broad spectrum of wireless communication core
        technologies and intellectual properties.
      </p>
    </Container>
    <Container>
      <Carousel />
      <p className={styles.smallText}>
        GScom’s wireless communication core technologies and 4096-QAM modem
        address a wide variety of system-level challenges in wireless
        communications, including performance with very high speed (up to Giga
        bit speed) data communication in a broadband spectrum ranging from
        cellular band frequencies up to microwave or millimeter wave band
        frequencies.
      </p>
      <p className={styles.smallText}>
        GScom’s wireless 4096-QAM modem yields the most reliable and the best
        performance in a broadband wireless backhaul communication channel in
        the small cell or macro cell communication network systems.
      </p>
    </Container>
  </div>
);

export default Home;

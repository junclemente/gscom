import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Carousel from "./Carousel";
import Logo from "./gscom_logo.jpg";
import styles from "./Home.module.scss";

const Home = () => (
  <div>
    <Jumbotron className={styles.root}>
      <Container>
        <Row>
          <Col>
            <img className={styles.image} src={Logo} height={150} alt="GScom" />
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
    <div>
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
    </div>
    <Carousel />
  </div>
);

export default Home;

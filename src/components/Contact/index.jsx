import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Map from "./gscom_map.png";
import styles from "./Contact.module.scss";

const ContactUs = () => (
  <Container className={styles.root}>
    <Row>
      <Col>
        <a
          href="https://www.google.com/maps/place/5670+Wilshire+Blvd+%231800,+Los+Angeles,+CA+90036/@34.0619489,-118.3543651,17z/data=!3m1!4b1!4m2!3m1!1s0x80c2b92203c483bd:0x246d4fc627599e84"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="img-responsive" src={Map} alt="Map" />
        </a>
      </Col>
      <Col>
        <address>
          <strong>GScom, Corp.</strong>
          <br />
          5670 Wilshire Blvd., Suite 1800
          <br />
          Los Angeles, CA 90036
          <br />
          <div className="hidden_mobile">
            <abbr title="Phone">P: </abbr>858-776-0290
          </div>
        </address>

        <address>
          <strong>Email</strong>
          <br />
          <a href="mailto:#">schung@gs-communication.com</a>
        </address>
      </Col>
    </Row>
  </Container>
);

export default ContactUs;

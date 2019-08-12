import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import Logo from "../../Home/gscom_logo.jpg";
import styles from "./Navigation.module.scss";

const Navigation = () => (
  <Container>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="#home">
        <img src={Logo} height={25} alt="GScom" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className={styles.link} href="#home">
            Home
          </Nav.Link>
          <Nav.Link href="#business">Business</Nav.Link>
          <Nav.Link href="#products">Products</Nav.Link>
          <Nav.Link href="#white_papers">White Papers</Nav.Link>
          <Nav.Link href="#contact_us">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Container>
);

export default Navigation;

import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import {
  HOME_URL,
  BUSINESS_URL,
  PRODUCTS_URL,
  CONTACTUS_URL,
  WHITEPAPER_URL
} from "../../../constants/urls";
import {
  AGC_DESIGN,
  BROADBAND_WIRELESS,
  BUSINESS_DEVELOPMENT,
  BUSINESS_PROPOSAL,
  DFE_CARRIER_RECOVERY,
  LDPC_DESIGN,
  MAPPER,
  PROJECT_BUDGET,
  REED_SOLOMON_CODEC
} from "../../WhitePapers/paper_urls";
import Logo from "../../Home/gscom_logo.jpg";
import styles from "./Navigation.module.scss";

const Navigation = () => (
  <Container>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <LinkContainer to={HOME_URL}>
        <Navbar.Brand href="#home">
          <img src={Logo} height={25} alt="GScom" />
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to={HOME_URL} activeclassname="active">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to={BUSINESS_URL}>
            Business
          </Nav.Link>
          <Nav.Link as={Link} to={PRODUCTS_URL}>
            Products
          </Nav.Link>
          <Dropdown as={Nav.Item}>
            <Dropdown.Toggle as={Nav.Link}>White Papers</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                as={Link}
                to={{ pathname: WHITEPAPER_URL, state: { paper: "AGC" } }}
              >
                AGC Design
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to={{
                  pathname: WHITEPAPER_URL,
                  state: { paper: "WIRELESS" }
                }}
              >
                Broadband Wireless Modem
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to={{
                  pathname: WHITEPAPER_URL,
                  state: { paper: "DFE" }
                }}
              >
                DFE and Carrier Recovery
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to={{
                  pathname: WHITEPAPER_URL,
                  state: { paper: "LDPC" }
                }}
              >
                LDPC System Design
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to={{
                  pathname: WHITEPAPER_URL,
                  state: { paper: "MAPPER" }
                }}
              >
                Mapper
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to={{
                  pathname: WHITEPAPER_URL,
                  state: { paper: "BUDGET" }
                }}
              >
                Project Budget
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to={{
                  pathname: WHITEPAPER_URL,
                  state: { paper: "PROPOSAL" }
                }}
              >
                Business Proposal
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to={{
                  pathname: WHITEPAPER_URL,
                  state: { paper: "DEVELOPMENT" }
                }}
              >
                Business Development
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to={{
                  pathname: WHITEPAPER_URL,
                  state: { paper: "CODEC" }
                }}
              >
                Reed-Solomon Codec
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link as={Link} to={CONTACTUS_URL}>
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Container>
);

export default Navigation;

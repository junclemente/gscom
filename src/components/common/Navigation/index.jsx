import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import PdfLink from "../PDFLink";
import {
  HOME_URL,
  BUSINESS_URL,
  PRODUCTS_URL,
  CONTACTUS_URL,
  WHITEPAPER_URL
} from "../../../constants/urls";

import AGC from "../../../files/AGC_Design.pdf";
import WIRELESS from "../../../files/Broadband_wireless_4096-QAM_Modem.pdf";
import DEVELOPMENT from "../../../files/Business_Development.pdf";
import PROPOSAL from "../../../files/Business_Proposal.pdf";
import DFE from "../../../files/DFE_and_Carrier_Recovery.pdf";
import LDPC from "../../../files/LDPC_System_Design.pdf";
import MAPPER from "../../../files/Mapper.pdf";
import BUDGET from "../../../files/Project_Budget.pdf";
import CODEC from "../../../files/Reed-Solomon_Codec.pdf";

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
              <PdfLink href={AGC} title="AGC Design" />
              <PdfLink href={WIRELESS} title="Broadband Wireless Modem" />
              <PdfLink href={DFE} title="DFE and Carrier Recovery" />
              <PdfLink href={LDPC} title="LDPC System Design" />
              <PdfLink href={MAPPER} title="Mapper" />
              <PdfLink href={BUDGET} title="Project Budget" />
              <PdfLink href={PROPOSAL} title="Business Proposal" />
              <PdfLink href={DEVELOPMENT} title="Business Development" />
              <PdfLink href={CODEC} title="Reed-Solomon Codec" />
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

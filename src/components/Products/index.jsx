import React, { useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import styles from "./Products.module.scss";

import Modem from "./Modem";
import Core from "./Core";

const Products = () => {
  const [key, setKey] = useState("modem");
  return (
    <Container className={styles.root}>
      <Tabs id="products" activeKey={key} onSelect={k => setKey(k)}>
        <Tab eventKey="modem" title="Broadband Access Technology Modem">
          <Modem />
        </Tab>
        <Tab eventKey="core" title="Core Component Technology">
          <Core />
        </Tab>
      </Tabs>
      <Tabs />
    </Container>
  );
};

export default Products;

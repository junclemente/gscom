import React from "react";
import { Helmet } from "react-helmet";
import "./styles/main.scss";

import Business from "./components/Business";
import ContactUs from "./components/Contact";
import Home from "./components/Home";
import Navigation from "./components/common/Navigation";
import Products from "./components/Products";
import TopPadding from "./components/common/TopPadding";

const Root = () => (
  <div>
    <Helmet>
      <title>GS Communication</title>
      <meta name="description" content="Engineering Consulting Website" />
      <meta name="author" content="Jun Clemente https://codeandlight.com" />
    </Helmet>
    <Navigation />
    <TopPadding />
    <Home />
    <Business />
    <Products />
    <ContactUs />
  </div>
);

export default Root;

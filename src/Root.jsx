import React from "react";
import { Route, Switch } from "react-router-dom";

import { Helmet } from "react-helmet";
import {
  HOME_URL,
  BUSINESS_URL,
  PRODUCTS_URL,
  CONTACTUS_URL,
  WHITEPAPER_URL
} from "./constants/urls";

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
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path={HOME_URL} component={Home} />
      <Route path={BUSINESS_URL} component={Business} />
      <Route path={PRODUCTS_URL} component={Products} />
      <Route path={CONTACTUS_URL} component={ContactUs} />
    </Switch>
  </div>
);

export default Root;

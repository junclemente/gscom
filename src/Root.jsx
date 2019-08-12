import React from "react";
import { Helmet } from "react-helmet";
import "./styles/main.scss";

import Home from "./components/Home";

const Root = () => (
  <div>
    <Helmet>
      <title>GS Communication</title>
      <meta name="description" content="Engineering Consulting Website" />
      <meta name="author" content="Jun Clemente https://codeandlight.com" />
    </Helmet>
    <Home />
  </div>
);

export default Root;

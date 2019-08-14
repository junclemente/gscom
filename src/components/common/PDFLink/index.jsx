import React from "react";
import { Dropdown } from "react-bootstrap";
import styles from "./PDFLink.module.scss";

export const LinkPdf = ({ href, title }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {title}{" "}
  </a>
);

const PDF = ({ href, title }) => (
  //   <Dropdown as={Nav.Item}>
  <Dropdown.Item
    className={styles.root}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {title}
  </Dropdown.Item>
  //   </Dropdown>
);

export default PDF;

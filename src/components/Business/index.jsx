import React from "react";
import { Container } from "react-bootstrap";

import BusinessCarousel from "./Carousel";
import styles from "./Business.module.scss";

const Business = () => (
  <Container className={styles.root}>
    <BusinessCarousel />
    <div>
      <p>
        GScom has developed a broadband wireless 4096-QAM modem for Gigabit data
        communication systems to provide wireless backhaul communication between
        small cell sites and the core network. This modem supports both variable
        data rates and coding rates dependent upon channel conditions. The modem
        provides very reliable, stable, and excellent performance in any channel
        impairment conditions including tough phase noise environments.
      </p>
      <p>
        GScom has also developed a broad spectrum of wireless core component
        technologies and intellectual properties which could be the essence of a
        Gigabit data communication system operating in a harsh wireless
        communication environment.
      </p>
    </div>
    <div>
      <h1>GScom is working in the following business areas:</h1>
      <ul>
        <li>
          <div className="h4">
            Wireless communication technology and device development
          </div>
          <p>
            Each GScom team member has more than twenty five years of wireless
            technology development and implementation experience, especially in
            the handset and/or backhaul modem development areas. GScom has
            strong development experience and expertise in wireless access
            technologies (HSPA, LTE, 802.11n, and 802.11ac, etc.) and broadband
            access technologies.
          </p>
          <p>
            GScom has developed a broadband wireless 4096-QAM modem and a
            variety of wireless communication core component technologies. GScom
            is working on development of the wireless 4096-QAM modem product
            using custom designed Field-Programmable-Gate-Arrays (FPGAs).
          </p>
          <p>
            Please refer to the <a href="#link">Business Proposal link</a> for a
            detailed product development activity and milestone of the modem.
          </p>
        </li>
        <li>
          <div className="h4">
            Wireless communication technology sales and licensing
          </div>
          <p>
            GScom has strong background and development experience not only in
            handset access technologies such as mentioned above but also in
            channel coding and channel effect mitigation. GScom also provides
            strong background and development experience in Gigabit class
            backhaul communication technology using high order QAM modulation
            technology in the environment of millimeter wave carrier frequency
            channel.
          </p>
          <p>
            GScom has developed a broadband wireless 4096-QAM modem, along with
            a variety of wireless communication core components, or intellectual
            properties (IP), which are available for purchase and/or licensing.
          </p>
        </li>
        <li>
          <div className="h4">
            Wireless communication technology consulting services
          </div>
          <p>
            GScom has been working on a wireless backhaul modem and its core
            technology development over the past three years and has developed a
            complete wireless backhaul 4096-QAM modem for Gigabit communication
            which can be used in a wide range of carrier frequencies from
            cellular band to millimeter wave frequency band.
          </p>
          <p>
            Each of the founding members of GScom have a minimum of twenty five
            years of experience working in the wireless communications area for
            tier-1 wireless communication companies including Nokia, Sony,
            Samsung, Via Telecom, Infineon, Broadcom and Xilinx.{" "}
          </p>
          <p>
            GScom has a broad background, experience, and expertise in wireless
            communication system analysis, system design, algorithm design,
            system partitioning and hardware optimization. The GScom team has a
            broad spectrum of development experience in the development of a
            variety of wireless communication baseband system, such as IS-54,
            HSDPA, HSUPA, LTE, 802.11n, 802.11ac, along with broadband backhaul
            communication systems. GScom provides consulting services for
            technology development not only at the systems level but also at the
            hardware implementation level.
          </p>
          <p>
            GScom provides technical development and consulting services in the
            following areas:
          </p>
          <ol>
            <li>
              Product development of wireless communication baseband modems for
              handset and/or backhaul communication systems.
            </li>
            <li>
              Core component wireless technology development for handset and/or
              backhaul communication systems.
            </li>
            <li>
              Hardware system development and optimization of the wireless
              communication technology for handset and/or backhaul communication
              system
            </li>
          </ol>
        </li>
      </ul>
    </div>
  </Container>
);

export default Business;

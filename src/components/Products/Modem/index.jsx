import React from "react";
import { Container, Table } from "react-bootstrap";
import styles from "./Modem.module.scss";

const Modem = () => (
  <Container>
    <h1>Broadband Access Technology and Modem</h1>
    <h2>Broadband Wireless 4096-QAM Modem</h2>
    <p>
      The broadband wireless 4096-QAM modem is equipped with a powerful LDPC
      codec and advanced Decision Feedback Equalizer (DFE) which is combined
      with a Carrier Tracking Circuit. The modem supports 4-QAM, 16-QAM, 64-QAM,
      256-QAM, 1024-QAM, 4096-QAM modulation-rates, and Reed-Solomon code
      combined with LDPC code rates of 0.5 and 0.75, according to channel
      conditions. The modem also supports large dynamic range (100dB)
      Automatic-Gain-Control (AGC), power control, and Adaptive Coding and
      Modulation (ACM).
    </p>
    <p>
      The modem is designed to perform high speed (gigabit per second) data
      communication with reliable quality in any harsh communication channel
      environment and to support the usage of any carrier frequency from the
      cellular band carrier frequency up to the millimeter-wave band carrier
      frequency (80 GHz).{" "}
    </p>
    <p>
      Performance testing of the modem shows the modem to be within 1~2 dB away
      from the theoretical BER curve in the AWGN environment, dependent upon the
      modulation technology (or modulation format) used.{" "}
    </p>
    <p>
      GScom’s wireless 4096-QAM modem yields the most reliable and the best
      performance in a broadband wireless backhaul communication channel as seen
      in the following the performance table below.
    </p>
    <div>
      <theader>
        <h4>RCVR Sensitivity (Using R-S(255,235,20) format)</h4>
      </theader>
      <Table bordered>
        <tr>
          <th>Modulation Format</th>
          <th colspan="2">AWGN</th>
          <th colspan="2">Flat Fading</th>
          <th colspan="2">Selective Fading</th>
        </tr>
        <tr>
          <td>QPSK</td>
          <td colspan="2">6 dB</td>
          <td colspan="2">6 dB</td>
          <td colspan="2">7.5 dB</td>
        </tr>
        <tr>
          <td>16-QAM</td>
          <td colspan="2">13 dB</td>
          <td colspan="2">13 dB</td>
          <td colspan="2">13 dB</td>
        </tr>
        <tr>
          <td>64-QAM</td>
          <td colspan="2">20 dB</td>
          <td colspan="2">20 dB</td>
          <td colspan="2">20 dB</td>
        </tr>
        <tr>
          <td>256-QAM</td>
          <td colspan="2">25 dB</td>
          <td colspan="2">25 dB</td>
          <td colspan="2">26 dB</td>
        </tr>
        <tr>
          <td>Usage of R-S</td>
          <td>w/o R-S</td>
          <td>w/ R-S</td>
          <td>w/o R-S</td>
          <td>w/ R-S</td>
          <td>w/o R-S</td>
          <td>w/ R-S</td>
        </tr>
        <tr>
          <td>1024-QAM</td>
          <td>30 dB</td>
          <td>28 dB</td>
          <td>31 dB</td>
          <td>28 dB</td>
          <td>31 dB</td>
          <td>29 dB</td>
        </tr>
        <tr>
          <td>4096-QAM</td>
          <td>36 dB</td>
          <td>32 dB</td>
          <td>36 dB</td>
          <td>32 dB</td>
          <td>37 dB</td>
          <td>33 dB</td>
        </tr>
      </Table>
    </div>
    <p className={styles.note}>
      <span className={styles.bold}>Note:</span> Please refer to the white paper
      link for a detailed system description and performance simulation results
      of the modem.
    </p>
    <a href="#link">White Paper: Broadband wireless 4096-QAM Modem</a>
  </Container>
);

export default Modem;

import React, { Component } from "react";
import { PDFReader } from "reactjs-pdf-reader";

import AGC from "./AGC_Design.pdf";
import WIRELESS from "./Broadband_wireless_4096-QAM_Modem.pdf";
import DFE from "./DFE_and_Carrier_Recovery.pdf";
import LDPC from "./LDPC_System_Design.pdf";
import MAPPER from "./Mapper.pdf";
import BUDGET from "./Project_Budget.pdf";
import PROPOSAL from "./Business_Proposal.pdf";
import DEVELOPMENT from "./Business_Development.pdf";
import CODEC from "./Reed-Solomon_Codec.pdf";

class WhitePaper extends Component {
  state = {
    paper: "",
    whitepaper: this.props.location.state.paper
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    console.log(this.state.whitepaper);
    return this.state.value != nextState.value;
  }

  render() {
    this.setState({ whitepaper: this.props.location.state.paper });
    // console.log(this.state.whitepaper);
    switch (this.state.whitepaper) {
      case "AGC":
        this.state.paper = AGC;
        break;
      case "WIRELESS":
        this.state.paper = WIRELESS;
        break;
      case "DFE":
        this.state.paper = DFE;
        break;
      case "LDPC":
        this.state.paper = LDPC;
        break;
      case "MAPPER":
        this.state.paper = MAPPER;
        break;
      case "BUDGET":
        this.state.paper = BUDGET;
        break;
      case "PROPOSAL":
        this.state.paper = PROPOSAL;
        break;
      case "DEVELOPMENT":
        this.state.paper = DEVELOPMENT;
        break;
      case "CODEC":
        this.state.paper = CODEC;
        break;
      default:
        this.state.paper = false;
    }

    return this.state.paper ? (
      <div style={{ overflow: "scroll", height: 600 }}>
        <PDFReader url={this.state.paper} showAllPage={true} />
      </div>
    ) : (
      <div>
        <h1>Paper not found.</h1>
      </div>
    );
  }
}

export default WhitePaper;

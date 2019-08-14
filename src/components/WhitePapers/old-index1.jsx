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
    whitepaper: ""
  };

  updateWhitepaper = whitePaper => {
    this.setState({ whitepaper: whitePaper });
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    // console.log(this.state.whitepaper);
    console.log(nextProps.location.state.paper);
    // if (this.state.value !== nextState.value) {
    //   this.updateWhitepaper();
    // }
    // return this.state.value != nextState.value;
    return this.state.paper != nextProps.location.state.paper;
};
this.setState({ whitepaper: this.props.location.state.paper });

  render() {
    let paperValue = "";
    switch (this.state.whitepaper) {
      case "AGC":
        paperValue = AGC;
        break;
      case "WIRELESS":
        paperValue = WIRELESS;
        break;
      case "DFE":
        paperValue = DFE;
        break;
      case "LDPC":
        paperValue = LDPC;
        break;
      case "MAPPER":
        paperValue = MAPPER;
        break;
      case "BUDGET":
        paperValue = BUDGET;
        break;
      case "PROPOSAL":
        paperValue = PROPOSAL;
        break;
      case "DEVELOPMENT":
        paperValue = DEVELOPMENT;
        break;
      case "CODEC":
        paperValue = CODEC;
        break;
      default:
        paperValue = false;
    }

    this.setState({ paper: paperValue });

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

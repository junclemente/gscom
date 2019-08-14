import React from "react";

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

const WhitePaper = props => {
  let paperValue = "";
  const whitepaper = props.location.state.paper;

  switch (whitepaper) {
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

  const paper = paperValue;
  return paper ? (
    <div style={{ overflow: "scroll", height: 800 }}>
      <PDFReader url={paper} showAllPage={true} />
    </div>
  ) : (
    <div>
      <h1>Paper not found.</h1>
    </div>
  );
};

export default WhitePaper;

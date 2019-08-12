import React from "react";
import { Container } from "react-bootstrap";

const Core = () => (
  <Container>
    <h1>Core Component Technology</h1>
    <p>
      Technology used in wideband communication systems require high
      coding/modulation gain, very short latency, and real time processing as
      much as possible. GScom has developed these core component technologies
      for application in Gigabit-class wireless communication systems.
    </p>
    <p>
      Following are some of the typical core component technologies developed by
      GScom.
    </p>
    <p>
      (Please refer to the attached white papers for further information on the
      corresponding core component technology and performance simulation
      results).
    </p>
    <ul>
      <li>
        <h3>Reed-Solomon (R-S) codec</h3>
      </li>
      <p>
        Reed-Solomon (R-S) code is a systematic and a linear block code. Each
        block has parity protection information added to it to form a
        self-contained code word. R-S codes are non-binary cyclic codes with
        symbols made up of m-bit sequences. This characteristic make the code
        particularly good at dealing with burst error.
      </p>
      <p>
        GScom has developed a custom R-S codec (encoder/decoder) using the
        following R-S architecture and technologies:
      </p>
      <ul>
        <li>
          Parallel pipeline structure for parity check bit calculation for fast
          encoding.
        </li>
        <li>
          Parallel pipeline structure for syndrome calculation for fast
          decoding.
        </li>
        <li>
          Parallel pipeline structure for error location search for fast
          decoding.
        </li>
        <li>
          Achieved an additional 2-4dB coding gain above the achieved LDPC
          coding gain by using Reed-Solomon (R-S) FEC with RS(255,235,20) format
          (when used in a cascaded form of the R-S and LDPC codes)
        </li>
      </ul>
      <h4>
        <a
          href="{{ url_for('whitepaper', whitepaper = 'Reed-Solomon Codec.pdf') }}"
          target="_blank"
        >
          White Paper: Reed-Solomon Codec
        </a>
      </h4>
      <li>
        <h3>LDPC (Low Density Parity Check) codec</h3>
      </li>
      <p>
        LDPC is the one of the most powerful linear block codes in terms of
        performance (coding gain). LDPC decoding algorithm is inherently
        parallel which is attractive for high-speed applications.
      </p>
      <p>
        GScom has developed a custom LDPC codec (encoder/decoder) using the
        following LDPC architecture and technologies:
      </p>
      <ul>
        <li>Architecture aware LDPC for low complexity and fast encoding.</li>
        <li>
          Horizontal and vertical partitioning LDPC for low complexity and fast
          decoding.
        </li>
        <li>
          Optimal node degree distribution LDPC for best performance with
          optimum complexity.
        </li>
        <li>
          Architecture aware parallel TDMP for low complexity and fast decoding.
        </li>
        <li>Mother code rates of 0.5 and 0.75.</li>
        <li>
          Achievement of 8~10 dB coding gain with a code length of 8640 and a
          code rate of 0.5 in the reasonable SNR ranges for data communication.
        </li>
      </ul>
      <h4>
        <a
          href="{{ url_for('whitepaper', whitepaper = 'LDPC System Design.pdf') }}"
          target="_blank"
        >
          White Paper: LDPC Algorithm &amp; System Design
        </a>
      </h4>
      <li>
        <h3>Mapper / De-mapper (Slicer)</h3>
      </li>
      <p>
        The Mapper takes the coded bit stream at the output of the (LDPC)
        encoder and maps each group of m bits into one of the M( ={" "}
        <sup>2m2m</sup> ) signal constellations. The De-mapper receives the
        demodulated symbols from the demodulator and converts the received
        symbols into the soft decision values of the corresponding bit stream
        through a soft decision decoding process.
      </p>
      <ul>
        <li>256-QAM Mapper/De-mapper (Slicer)</li>
        <p>GScom has developed a real-time 256-QAM mapper/de-mapper.</p>
        <li>1024-QAM Mapper/De-mapper (Slicer)</li>
        <p>GScom has developed a real-time 1024-QAM mapper/de-mapper.</p>
        <li>4096-QAM De-mapper (Slicer)</li>
        <p>GScom has developed a real-time 4096-QAM mapper/de-mapper.</p>
      </ul>
      <h4>
        <a
          href="{{ url_for('whitepaper', whitepaper = 'Mapper.pdf') }}"
          target="_blank"
        >
          White Paper: Mapper &amp; De-Mapper System Document
        </a>
      </h4>
      <li>
        <h3>Equalizer combined with carrier recovery</h3>
      </li>
      <p>
        Fading, inter-symbol interference, time varying channel characteristics,
        large dynamic range of signal to noise ratio (SNR), etc., are major
        signal impairment factors in the broadband wireless communication
        systems. Phase noise is also one of the most critical signal impairment
        factors in wireless communication systems which use high carrier
        frequencies with high-order M-QAM such as 256-QAM, 1024-QAM or 4096-QAM
        modulation technologies.
      </p>
      <p>
        GScom has developed an advanced fractionally spaced Decision Feedback
        Equalizer (DFE) which is combined with a carrier recovery circuit. The
        carrier recovery combined with the DFE is a powerful solution to fight
        against phase noise through the latency reduction between phase noise
        estimation and correction.
      </p>
      <h4>
        <a
          href="{{ url_for('whitepaper', whitepaper = 'DFE and Carrier Recovery.pdf') }}"
          target="_blank"
        >
          White Paper: Decision Feedback Equalizer (DFE) combined with Carrier
          Recovery
        </a>
      </h4>

      <li>
        <h3>Time tracking (symbol tracking and frame tracking)</h3>
      </li>
      <p>
        GScom has developed the symbol synchronization and frame synchronization
        technologies using a preamble sequence in the acquisition frame, and
        symbol tracking and frame time tracking using a time Delay Locked Loop
        (DLL) with the 2<sup>nd</sup> 2<sup>nd</sup> order Phase Locked Loop
        (PLL).
      </p>

      <li>
        <h3>AGC (Automatic Gain Control)</h3>
      </li>
      <p>
        The signal in a wireless communication channel experiences a large
        dynamic range of signal variations due to channel conditions, weather
        conditions, flat fading, and shading effect of the communication
        environment.
      </p>
      <p>
        GScom has developed several types of AGC in terms of accuracy, HW
        simplicity, and reliability based on the following common AGC
        specification:
      </p>
      <ul>
        <li>Input signal dynamic range of 100 dB</li>
        <li>Flat fading rate of 100 dB / sec</li>
        <li>Output signal level of 20 dBm +/- 3dB.</li>
      </ul>
      <h4>
        <a
          href="{{ url_for('whitepaper', whitepaper = 'AGC Design.pdf') }}"
          target="_blank"
        >
          White Paper: Automatic Gain Control Systems Document
        </a>
      </h4>

      <li>
        <h3>ACM (Adaptive Coding and Modulation)</h3>
      </li>
      <p>
        ACM is a communication technology which is used to maximize the
        communication system efficiency with a given channel condition.
      </p>
      <p>
        GScom has developed the ACM technology using real-time channel
        information of the SNR from the equalizer, RSSI from the AGC, and
        desired range of SNR in the modulation and coding technology. The ACM
        supports 4-QAM, 16-QAM, 64-QAM, 256-QAM, 1024-QAM, 4096-QAM modulation
        rates, and Reed-Solomon code combined with LDPC code rates of 0.5 and
        0.75, according to channel conditions.
      </p>
    </ul>
  </Container>
);

export default Core;

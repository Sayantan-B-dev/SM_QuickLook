import React from "react";
import "../../../../CSS/CN.css";

function PhysicalLayer() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h2 className="cn-title">Physical Layer</h2>

        <div className="cn-section">
          <h3 className="cn-subtitle">What is the Physical Layer?</h3>
          <p className="cn-example">
            The Physical Layer is the first and lowest layer of the OSI model. It is responsible for the physical connection between devices, transmitting raw bits over a physical medium such as cables or radio frequencies. This layer defines hardware elements such as cables, cards, and physical aspects.
          </p>
        </div>
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20250128104535679905/functions_of_physical_layer.webp" alt="" />
        <div className="cn-section">
          <h3 className="cn-subtitle">How the Physical Layer Works</h3>
          <p className="cn-example">
            The Physical Layer converts digital bits into electrical, optical, or radio signals. It does not interpret the meaning of these bits, just the transmission. It also defines the data rate, transmission mode (simplex, half-duplex, full-duplex), and topology.
          </p>
        </div>

        <div className="cn-section">
          <h3 className="cn-subtitle">Common Transmission Media</h3>
          <table className="example-table">
            <thead>
              <tr>
                <th>Medium</th>
                <th>Description</th>
                <th>Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Twisted Pair Cable</td>
                <td>Copper wires twisted together to reduce interference.</td>
                <td>Ethernet LANs</td>
              </tr>
              <tr>
                <td>Coaxial Cable</td>
                <td>Single copper core with shielding. Higher bandwidth than twisted pair.</td>
                <td>Cable TV, early LANs</td>
              </tr>
              <tr>
                <td>Fiber Optic Cable</td>
                <td>Transmits data as light. Very high speed and long distance.</td>
                <td>Backbone networks, long-distance transmission</td>
              </tr>
              <tr>
                <td>Wireless (Radio, Infrared)</td>
                <td>Uses electromagnetic waves for data transmission.</td>
                <td>Wi-Fi, Bluetooth, IR remotes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="cn-section">
          <h3 className="cn-subtitle">Hardware Components</h3>
          <p className="cn-example">
            Common hardware includes Network Interface Cards (NIC), switches, hubs, repeaters, and transmission media like cables and connectors. Each of these contributes to signal transmission and reception.
          </p>
        </div>

        <div className="cn-section">
          <h3 className="cn-subtitle">Encoding Techniques</h3>
          <p className="cn-example">
            Encoding translates digital data into signals. Common techniques:
            <br /><strong>NRZ (Non-Return to Zero)</strong>: Simple, high-speed encoding.
            <br /><strong>Manchester Encoding</strong>: Synchronizes data and clock.
            <br /><strong>4B/5B Encoding</strong>: Converts 4-bit to 5-bit groups to maintain signal integrity.
          </p>
        </div>

        <div className="cn-section">
          <h3 className="cn-subtitle">Multiplexing Techniques</h3>
          <p className="cn-example">
            Multiplexing allows multiple signals to travel over a single channel:
            <br /><strong>FDM (Frequency Division Multiplexing)</strong>: Different frequencies for each signal.
            <br /><strong>TDM (Time Division Multiplexing)</strong>: Each signal gets a time slot.
            <br /><strong>WDM (Wavelength Division Multiplexing)</strong>: Optical multiplexing in fiber optics.
          </p>
        </div>

        <div className="cn-section">
          <h3 className="cn-subtitle">Transmission Modes</h3>
          <p className="cn-example">
            <strong>Simplex:</strong> One-way communication.<br />
            <strong>Half-Duplex:</strong> Two-way communication, one at a time.<br />
            <strong>Full-Duplex:</strong> Two-way communication simultaneously.
          </p>
        </div>

      </div>
    </div>
  );
};

export default PhysicalLayer;
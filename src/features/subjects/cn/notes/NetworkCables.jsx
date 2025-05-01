import React from 'react';
import '../../../../CSS/CN.css';

function NetworkCables() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Cables in Computer Networks</h1>

        {/* Cable Definition */}
        <div className="cn-section">
          <h2 className="cn-subtitle">What are Network Cables?</h2>
          <p className="cn-example">
            Network cables are physical transmission mediums used to connect and transfer data between computers, routers, switches, and storage area networks. They carry electrical or optical signals and are essential for wired communication.
          </p>
        </div>

        {/* Types of Cables */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Types of Network Cables</h2>
          <div className="cn-grid">

            {/* Twisted Pair Cable */}
            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">1. Twisted Pair Cable</h3>
              <p>Most commonly used in LANs. Composed of pairs of copper wires twisted to reduce electromagnetic interference (EMI).</p>
              <p><strong>Subtypes:</strong></p>
              <ul>
                <li><strong>UTP (Unshielded Twisted Pair):</strong> No shielding, cheap, easy to install. Common in homes and offices.</li>
                <li><strong>STP (Shielded Twisted Pair):</strong> Includes foil/braided shielding to reduce noise. Better performance in noisy environments like factories.</li>
              </ul>
              <p><strong>Categories of UTP/STP:</strong></p>
              <ul>
                <li><strong>Cat5e:</strong> Up to 1 Gbps, 100 MHz bandwidth.</li>
                <li><strong>Cat6:</strong> Up to 10 Gbps (short distances), 250 MHz bandwidth.</li>
                <li><strong>Cat7:</strong> Better shielding, 600 MHz+, suitable for high-speed networks.</li>
              </ul>
              <img className='smallImg' src="https://www.computernetworkingnotes.com/wp-content/uploads/networking-tutorials/images/nt12-03-stp-utp-cables.png" alt="" />
            </div>

            {/* Coaxial Cable */}
            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">2. Coaxial Cable</h3>
              <p>Has a central copper conductor, insulating layer, metal shielding, and outer plastic jacket. Better EMI protection than twisted pair.</p>
              <p><strong>Subtypes:</strong></p>
              <ul>
                <li><strong>RG-59:</strong> Low frequency (short range), commonly used for CCTV.</li>
                <li><strong>RG-6:</strong> Thicker core and shielding, suitable for broadband Internet and cable TV.</li>
                <li><strong>RG-11:</strong> Supports long-distance signals, used in main lines rather than home connections.</li>
              </ul>
              <p><strong>Applications:</strong> Cable modems, TV signals, older Ethernet standards (10Base2, 10Base5).</p>
              <img className='smallImg' src="https://www.computernetworkingnotes.com/wp-content/uploads/networking-tutorials/images/nt12-01-coaixal-cable.png" alt="" />
            </div>

            {/* Fiber Optic Cable */}
            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">3. Fiber Optic Cable</h3>
              <p>Uses light signals for data transmission. Immune to EMI, offers high bandwidth and speed over long distances.</p>
              <p><strong>Subtypes:</strong></p>
              <ul>
                <li><strong>Single Mode Fiber (SMF):</strong> Very thin core (~9µm). Uses laser light, supports long-distance, high-bandwidth transmission. Used in WANs and long-haul telecommunication.</li>
                <li><strong>Multi Mode Fiber (MMF):</strong> Thicker core (~50-62.5µm). Uses LED light, supports short-distance transmission due to modal dispersion. Used in LANs and data centers.</li>
              </ul>
              <p><strong>Advantages:</strong> Faster data rate, high security, lightweight, low signal loss.</p>
              <img className='smallImg' src="https://www.computernetworkingnotes.com/wp-content/uploads/networking-tutorials/images/nt12-04-smf-mmf-fiber-optical.png" alt="" />
            </div>

          </div>
        </div>

        {/* Technical Concepts */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Important Technical Concepts</h2>
          <div className="cn-grid">

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">What is Attenuation?</h3>
              <p>Attenuation is the gradual reduction in signal strength as it travels through a cable. It is measured in decibels (dB).</p>
              <ul>
                <li>Caused by resistance, absorption, and scattering.</li>
                <li>More pronounced in copper cables than fiber.</li>
                <li>Can be mitigated using repeaters or amplifiers.</li>
              </ul>
            </div>

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">Can Cables Filter Signals?</h3>
              <p>No, cables do not actively filter signals. However:</p>
              <ul>
                <li>Shielded cables can <strong>reduce noise</strong> and EMI.</li>
                <li>Filtering is typically handled by network devices (routers, firewalls).</li>
              </ul>
            </div>

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">Collisions of N Devices</h3>
              <p>In a shared medium, like a hub-based Ethernet:</p>
              <ul>
                <li>When multiple devices transmit at once, <strong>collisions</strong> occur.</li>
                <li>Number of collisions increases with the square of connected devices (<em>N²</em>).</li>
                <li>Switches isolate devices to prevent collisions (each port = separate collision domain).</li>
                <li>Full-duplex mode allows simultaneous send/receive, eliminating collisions.</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Summary Table */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Cable Comparison Table</h2>
          <table className="example-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Speed</th>
                <th>Distance</th>
                <th>EMI Resistance</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>UTP</td><td>Up to 1 Gbps</td><td>100m</td><td>Low</td><td>Low</td></tr>
              <tr><td>STP</td><td>Up to 10 Gbps</td><td>100m</td><td>Medium</td><td>Medium</td></tr>
              <tr><td>Coaxial</td><td>Up to 10 Mbps</td><td>500m</td><td>High</td><td>Medium</td></tr>
              <tr><td>SMF</td><td>100 Gbps+</td><td>80km+</td><td>Very High</td><td>High</td></tr>
              <tr><td>MMF</td><td>10–100 Gbps</td><td>2km</td><td>Very High</td><td>Medium</td></tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default NetworkCables;

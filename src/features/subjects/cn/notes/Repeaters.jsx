import React from 'react';
import '../../../../CSS/CN.css';

function Repeaters() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Repeaters in Computer Networks</h1>

        {/* Introduction */}
        <div className="cn-section">
          <h2 className="cn-subtitle">What is a Repeater?</h2>
          <p className="cn-example">
            A <strong>repeater</strong> is a network device used to regenerate and amplify signals in a communication channel. Over long distances, signals traveling through cables weaken due to attenuation. Repeaters restore these signals to their original strength and shape, allowing data to travel further without corruption or loss.
          </p>
        </div>
        {/* Functionality */}
        <div className="cn-section">
          <h2 className="cn-subtitle">How Does a Repeater Work?</h2>
          <p className="cn-example">
            Repeaters operate at the <strong>Physical Layer (Layer 1)</strong> of the OSI model. They receive a degraded signal, clean it, amplify it (if electrical), or regenerate the digital waveform (if optical), and then retransmit the signal to the next segment of the network.
          </p>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">Key Functions:</h3>
              <ul className="cn-example list-disc list-inside">
                <li>Boost weak signals to extend cable range</li>
                <li>Reduce signal distortion caused by attenuation</li>
                <li>Ensure integrity of the signal between segments</li>
                <li>Used in both wired (Ethernet, fiber) and wireless setups</li>
              </ul>
            </div>
            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">Where They're Used:</h3>
              <ul className="cn-example list-disc list-inside">
                <li>Long-distance Ethernet networks (beyond 100m UTP limit)</li>
                <li>Fiber optic backbones (between buildings or cities)</li>
                <li>Wireless networks (Wi-Fi range extenders use repeaters)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Types of Repeaters */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Types of Repeaters</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">1. Analog Repeater</h3>
              <p className="cn-example">
                Used in analog communication (older systems). These repeaters amplify the entire signal including any noise, which can degrade quality over time.
              </p>
            </div>

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">2. Digital Repeater</h3>
              <p className="cn-example">
                Common in modern digital networks. These devices regenerate a clean digital signal, filtering out noise and interference before retransmission. Often used in Ethernet and optical fiber networks.
              </p>
            </div>

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">3. Optical Repeater</h3>
              <p className="cn-example">
                Specialized repeaters for <strong>fiber optic cables</strong>. These use photodetectors and lasers to convert light to electrical signals and back again, boosting light signals across vast distances (e.g., 80km+).
              </p>
            </div>

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">4. Wireless Repeater</h3>
              <p className="cn-example">
                Used in Wi-Fi and cellular networks. These devices receive and retransmit wireless signals to improve coverage and reduce dead zones.
              </p>
            </div>
          </div>
        </div>

        {/* Limitations */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Limitations of Repeaters</h2>
          <ul className="cn-example list-disc list-inside">
            <li>Cannot filter traffic or manage network collisions (Layer 1 only)</li>
            <li>Amplifies all signals, including noise (in analog systems)</li>
            <li>Distance between repeaters must be carefully calculated</li>
            <li>Cannot join different network types (e.g., Ethernet to Wi-Fi)</li>
          </ul>
        </div>

        {/* Comparison Table */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Comparison: Repeater vs Other Devices</h2>
          <table className="example-table">
            <thead>
              <tr>
                <th>Device</th>
                <th>OSI Layer</th>
                <th>Function</th>
                <th>Signal Filtering</th>
                <th>Collision Management</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Repeater</td>
                <td>Physical (Layer 1)</td>
                <td>Signal regeneration</td>
                <td>No</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Hub</td>
                <td>Physical (Layer 1)</td>
                <td>Broadcast to all ports</td>
                <td>No</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Switch</td>
                <td>Data Link (Layer 2)</td>
                <td>Forward frames based on MAC</td>
                <td>Yes</td>
                <td>Yes (separates domains)</td>
              </tr>
              <tr>
                <td>Router</td>
                <td>Network (Layer 3)</td>
                <td>Forward packets based on IP</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
            </tbody>
          </table>
        </div>

          <img className='smallImg' src="https://media.geeksforgeeks.org/wp-content/uploads/20230828190552/IMG-20230828-WA0013.jpg" alt="Repeater example" />
      </div>
    </div>
  );
}

export default Repeaters;

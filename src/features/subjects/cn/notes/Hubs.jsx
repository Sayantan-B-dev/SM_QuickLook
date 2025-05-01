import React from 'react';
import '../../../../CSS/CN.css';

function Hubs() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Hubs in Computer Networks</h1>
        <div className="cn-section">
          <h2 className="cn-subtitle">What is a Hub?</h2>
          <p className="cn-example">
            A <strong>hub</strong> is a basic networking device that connects multiple computers or network devices in a LAN. It operates at the <strong>Physical Layer (Layer 1)</strong> of the OSI model and is often used to broadcast data packets to all connected devices, regardless of the intended recipient.
          </p>
        </div>

        {/* Working */}
        <div className="cn-section">
          <h2 className="cn-subtitle">How Does a Hub Work?</h2>
          <p className="cn-example">
            A hub receives an incoming signal (frame) on one of its ports and immediately broadcasts it to all other ports. The device for whom the data is intended accepts the frame, and all others ignore it. This is known as **frame flooding** and is inefficient for large or busy networks.
          </p>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">Key Characteristics:</h3>
              <ul className="cn-example list-disc list-inside">
                <li>Broadcasts data to all ports</li>
                <li>Does not filter or forward data intelligently</li>
                <li>Cannot differentiate between devices</li>
                <li>Creates a single collision domain</li>
              </ul>
            </div>
            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">Network Impact:</h3>
              <ul className="cn-example list-disc list-inside">
                <li>High chance of packet collisions</li>
                <li>Low security and efficiency</li>
                <li>Limited scalability (not suitable for large networks)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Types of Hubs */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Types of Hubs</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">1. Passive Hub</h3>
              <p className="cn-example">
                Acts as a simple connection point. It does not amplify or regenerate signals. It only passes the electrical signal to connected devices. Mainly used in older or small-scale networks.
              </p>
            </div>

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">2. Active Hub</h3>
              <p className="cn-example">
                Amplifies the incoming signals before broadcasting them to the network. It regenerates weak signals, much like a repeater, and helps in extending the distance over which the data can travel.
              </p>
            </div>

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">3. Intelligent Hub</h3>
              <p className="cn-example">
                Includes additional management features such as traffic monitoring and network diagnostics. These are smarter than passive and active hubs but still less efficient than switches.
              </p>
            </div>
          </div>
        </div>

        {/* Limitations */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Limitations of Hubs</h2>
          <ul className="cn-example list-disc list-inside">
            <li>Cannot identify destination addresses</li>
            <li>Causes unnecessary traffic and congestion</li>
            <li>Not secure—data is sent to all devices</li>
            <li>All ports share bandwidth and collision domain</li>
            <li>No traffic management or filtering</li>
          </ul>
        </div>

        {/* Applications */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Applications of Hubs</h2>
          <ul className="cn-example list-disc list-inside">
            <li>Small home or lab networks</li>
            <li>Temporary network setups</li>
            <li>Environments where cost is more important than performance</li>
            <li>Networks where monitoring all data traffic is needed</li>
          </ul>
        </div>

        {/* Comparison Table */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Comparison: Hub vs Other Devices</h2>
          <table className="example-table">
            <thead>
              <tr>
                <th>Device</th>
                <th>OSI Layer</th>
                <th>Function</th>
                <th>Collision Domain</th>
                <th>Broadcast Domain</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hub</td>
                <td>Layer 1</td>
                <td>Broadcasts all data</td>
                <td>One</td>
                <td>One</td>
              </tr>
              <tr>
                <td>Switch</td>
                <td>Layer 2</td>
                <td>Forwards data using MAC addresses</td>
                <td>One per port</td>
                <td>One</td>
              </tr>
              <tr>
                <td>Router</td>
                <td>Layer 3</td>
                <td>Routes data using IP addresses</td>
                <td>One per port</td>
                <td>Multiple</td>
              </tr>
              <tr>
                <td>Repeater</td>
                <td>Layer 1</td>
                <td>Regenerates signal</td>
                <td>One</td>
                <td>One</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Diagram */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Illustration: Hub in a Network</h2>
          <img
            src="https://www.techtarget.com/rms/onlineimages/networking-hub_vs_switch.png"
            alt="Hub diagram"
          />
        </div>
      </div>
    </div>
  );
}

export default Hubs;

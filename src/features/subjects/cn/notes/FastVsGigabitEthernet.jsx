import React from "react";
import "../../../../CSS/CN.css";

function FastVsGigabitEthernet() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Fast Ethernet vs Gigabit Ethernet</h1>

        {/* Fast Ethernet */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Fast Ethernet (100 Mbps)</h2>
          <p className="cn-example">
            Fast Ethernet is a version of Ethernet that supports 100 Mbps speed (megabits per second). It's also known as 100BASE-T and was widely adopted in the 1990s and early 2000s.
          </p>
          <p className="cn-example">
            Fast Ethernet uses <strong>Cat5 UTP (Unshielded Twisted Pair)</strong> cables and works in a star topology with hubs or switches.
          </p>
          <p className="cn-example">
            Standards include:
            <ul className="list-disc pl-6">
              <li>100BASE-TX (twisted pair)</li>
              <li>100BASE-FX (fiber optics)</li>
              <li>100BASE-T4 (obsoleted)</li>
            </ul>
          </p>
        </div>

        {/* Gigabit Ethernet */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Gigabit Ethernet (1000 Mbps or 1 Gbps)</h2>
          <p className="cn-example">
            Gigabit Ethernet offers a data rate of 1 Gbps (1000 Mbps), introduced in 1999 under the IEEE 802.3ab and 802.3z standards. It is commonly used in backbone networks, servers, and modern LANs.
          </p>
          <p className="cn-example">
            It uses <strong>Cat5e/Cat6 UTP</strong> cables for copper and <strong>fiber optics</strong> for long-distance connections.
          </p>
          <p className="cn-example">
            It operates in full-duplex mode and supports auto-negotiation with backward compatibility to Fast Ethernet.
          </p>
        </div>

        {/* Technical Details */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Transmission & Encoding</h2>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Fast Ethernet (100BASE-TX):
  - Uses 4B/5B encoding
  - NRZI (Non-Return to Zero Inverted) signaling
  - Max cable length: 100 meters

Gigabit Ethernet (1000BASE-T):
  - Uses 8B/10B or PAM-5 encoding
  - Uses all 4 pairs in Cat5e cable
  - Supports up to 100 meters (copper) or several kilometers (fiber)
`}
          </pre>
        </div>

        {/* Comparison Table */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Comparison Table</h2>
          <table className="cn-table">
            <thead>
              <tr>
                <th>Criteria</th>
                <th>Fast Ethernet</th>
                <th>Gigabit Ethernet</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Speed</td>
                <td>100 Mbps</td>
                <td>1000 Mbps (1 Gbps)</td>
              </tr>
              <tr>
                <td>Standard</td>
                <td>IEEE 802.3u</td>
                <td>IEEE 802.3z (fiber), 802.3ab (copper)</td>
              </tr>
              <tr>
                <td>Cabling</td>
                <td>Cat5 UTP</td>
                <td>Cat5e/Cat6 UTP or Fiber</td>
              </tr>
              <tr>
                <td>Encoding</td>
                <td>4B/5B</td>
                <td>PAM-5 or 8B/10B</td>
              </tr>
              <tr>
                <td>Max Distance</td>
                <td>100 meters (copper)</td>
                <td>100m (copper), &gt;550m to 10km (fiber)</td>
              </tr>
              <tr>
                <td>Duplex Mode</td>
                <td>Half or Full Duplex</td>
                <td>Full Duplex</td>
              </tr>
              <tr>
                <td>Usage</td>
                <td>Legacy LANs</td>
                <td>Modern LANs, servers, backbones</td>
              </tr>
              <tr>
                <td>Cost</td>
                <td>Lower</td>
                <td>Moderate (affordable in 2020s)</td>
              </tr>
              <tr>
                <td>Backward Compatibility</td>
                <td>Not compatible with Gigabit</td>
                <td>Yes, with Fast Ethernet</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Diagram */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: Ethernet Speeds Over Time</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20190521105123/Untitled-Diagram-241.png"
            alt="Ethernet Standards Comparison"
          />
        </div>

        {/* Know More */}
        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/difference-between-fast-ethernet-and-gigabit-ethernet/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default FastVsGigabitEthernet;

import React from 'react';
import '../../../../CSS/CN.css';

function NetworkDevices() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Network Devices: Classification and Detailed Overview</h1>

        {/* Categorization Grid */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Categorization Based on Role</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <pre>
{`1. Pure Hardware Devices:
   - Cable (Twisted Pair, Coaxial, Fiber)
   - Repeater
   - Hub
   - Bridge
   - Switch

2. Hardware/Software Hybrid Devices:
   - Router
   - Gateway
   - Firewall (can be hardware or software)
   - Intrusion Detection System (IDS)

3. Entry/Access Devices:
   - Modem
   - Gateway
   - Router

4. Security Devices:
   - Firewall
   - IDS (Intrusion Detection System)

5. Signal Conversion Devices:
   - Modem (Modulator-Demodulator)
   - Media Converters`}
              </pre>
            </div>

          </div>
        </div>
        <img className='' src="https://media.geeksforgeeks.org/wp-content/uploads/20241014175346235579/Common-Types-of-Network-Devices-1.png" alt="Device Classification Diagram" />

        {/* Device Details */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Detailed Information on Devices</h2>
          <div className="cn-grid">

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">Cables</h3>
              <pre>
{`• Twisted Pair: Used in LAN, cost-effective, prone to interference.
• Coaxial: Used in TV and old Ethernet, better shielding.
• Fiber Optic: Uses light, high-speed, immune to EMI, expensive.`}
              </pre>
            </div>

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">Repeater</h3>
              <pre>
{`• Pure hardware.
• Boosts signal strength over long distances.
• Works at Physical Layer (Layer 1).
• No filtering or addressing.`}
              </pre>
            </div>

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">Hub</h3>
              <pre>
{`• Multiport repeater.
• Broadcasts data to all ports.
• No intelligence; creates traffic.
• Layer 1 device.`}
              </pre>
            </div>

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">Bridge</h3>
              <pre>
{`• Connects two LAN segments.
• Filters traffic based on MAC addresses.
• Layer 2 device (Data Link Layer).`}
              </pre>
            </div>

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">Switch</h3>
              <pre>
{`• Smarter than a hub.
• Uses MAC table to forward frames.
• Supports full-duplex.
• Layer 2, sometimes Layer 3 (with routing).`}
              </pre>
            </div>

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">Router</h3>
              <pre>
{`• Forwards packets across networks.
• Uses IP addresses.
• Can perform NAT, DHCP.
• Works at Network Layer (Layer 3).
• Has firmware + software interface.`}
              </pre>
            </div>

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">Gateway</h3>
              <pre>
{`• Acts as entry/exit point between networks.
• Translates between different protocols.
• Works across all 7 OSI layers.
• Used in enterprise communication, VoIP, etc.`}
              </pre>
            </div>

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">Firewall</h3>
              <pre>
{`• Controls incoming/outgoing network traffic.
• Based on rules (ports, IPs, protocols).
• Works at Layers 3/4/7.
• Available as hardware or software.`}
              </pre>
            </div>

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">Intrusion Detection System (IDS)</h3>
              <pre>
{`• Monitors traffic for malicious behavior.
• Alerts admins; doesn’t block by default.
• Signature-based or anomaly-based.
• Layer 7 functionality.
• Can be host-based or network-based.`}
              </pre>
            </div>

            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">Modem</h3>
              <pre>
{`• Stands for Modulator-Demodulator.
• Converts digital signal to analog (modulation).
• Converts analog back to digital (demodulation).
• Used in DSL, telephone lines, cable internet.`}
              </pre>
            </div>

          </div>
        </div>

        {/* Summary */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Quick Summary Table</h2>
          <table className="example-table">
            <thead>
              <tr>
                <th>Device</th>
                <th>OSI Layer</th>
                <th>Purpose</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Repeater</td><td>1</td><td>Boost signal</td><td>Hardware</td></tr>
              <tr><td>Hub</td><td>1</td><td>Broadcast signal</td><td>Hardware</td></tr>
              <tr><td>Bridge</td><td>2</td><td>Segment LAN</td><td>Hardware</td></tr>
              <tr><td>Switch</td><td>2</td><td>MAC-based forwarding</td><td>Hardware</td></tr>
              <tr><td>Router</td><td>3</td><td>IP-based routing</td><td>Hybrid</td></tr>
              <tr><td>Gateway</td><td>All</td><td>Protocol translation</td><td>Hybrid</td></tr>
              <tr><td>Firewall</td><td>3/4/7</td><td>Security filtering</td><td>Hybrid</td></tr>
              <tr><td>IDS</td><td>7</td><td>Intrusion monitoring</td><td>Hybrid</td></tr>
              <tr><td>Modem</td><td>1</td><td>Analog-Digital conversion</td><td>Hardware</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default NetworkDevices;

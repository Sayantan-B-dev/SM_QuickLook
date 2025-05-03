import React from "react";
import "../../../../CSS/CN.css";

function NetworkCategories() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Categories of Network</h1>

        {/* Section: Based on Scope */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Based on Scope</h2>
          <p className="cn-example">
            Networks can be categorized based on their geographical scope or range. The key categories based on scope are:
          </p>
          <table className="cn-table">
            <thead>
              <tr>
                <th>Network Type</th>
                <th>Scope</th>
                <th>Typical Examples</th>
                <th>Distance Covered</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LAN (Local Area Network)</td>
                <td>Limited geographical area, like a single building or a campus.</td>
                <td>Home network, Office network, School network</td>
                <td>Up to a few kilometers</td>
              </tr>
              <tr>
                <td>MAN (Metropolitan Area Network)</td>
                <td>Covers a larger area than LAN, like a city or a town.</td>
                <td>City-wide network, Campus-wide networks</td>
                <td>Up to 50 kilometers</td>
              </tr>
              <tr>
                <td>WAN (Wide Area Network)</td>
                <td>Large geographical area, potentially covering entire countries or continents.</td>
                <td>The Internet, National and international enterprise networks</td>
                <td>Hundreds or thousands of kilometers</td>
              </tr>
              <tr>
                <td>GAN (Global Area Network)</td>
                <td>A network that spans across the globe, typically consisting of inter-networking WANs.</td>
                <td>Global satellite communication networks</td>
                <td>Global reach</td>
              </tr>
            </tbody>
          </table>
          <p className="cn-example">
            - **LAN (Local Area Network)**: It is typically limited to a building or campus, connecting computers and devices in close proximity to each other.
            - **MAN (Metropolitan Area Network)**: Spans across a city, offering high-speed internet and services over a larger area compared to LAN.
            - **WAN (Wide Area Network)**: Used for larger areas like national or international scale. The Internet is the most well-known WAN.
            - **GAN (Global Area Network)**: Connects networks over the entire globe, often involving satellite communications or global fiber-optic networks.
          </p>
        </div>

        {/* Section: Based on Connection */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Based on Connection</h2>
          <p className="cn-example">
            Networks can also be categorized based on the connection method used to establish the network. These categories include:
          </p>
          <table className="cn-table">
            <thead>
              <tr>
                <th>Network Type</th>
                <th>Connection Type</th>
                <th>Example</th>
                <th>Advantages</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Wired Network</td>
                <td>Utilizes physical cables to connect devices (Ethernet, fiber optics, coaxial).</td>
                <td>LAN using Ethernet cables</td>
                <td>Stable, high-speed connection, less interference</td>
              </tr>
              <tr>
                <td>Wireless Network</td>
                <td>Uses radio waves or infrared signals to transmit data between devices.</td>
                <td>Wi-Fi, Bluetooth, LTE</td>
                <td>Mobile, easy to set up, flexible</td>
              </tr>
              <tr>
                <td>Hybrid Network</td>
                <td>A combination of both wired and wireless connections.</td>
                <td>Home network with wired connections for desktops and wireless for mobile devices</td>
                <td>Flexible, can combine the strengths of both wired and wireless</td>
              </tr>
            </tbody>
          </table>
          <p className="cn-example">
            - **Wired Network**: This type of network uses physical cables such as Ethernet or fiber-optic to connect devices. It is generally more stable and offers higher speeds compared to wireless connections.
            - **Wireless Network**: Uses radio waves or other wireless communication methods such as Wi-Fi and Bluetooth to connect devices. These networks offer flexibility but may have lower speeds and are more susceptible to interference.
            - **Hybrid Network**: A combination of both wired and wireless networks, commonly used in modern homes and offices where desktop computers might use Ethernet while laptops and smartphones connect over Wi-Fi.
          </p>
        </div>

        {/* Diagram */}
        <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Network Types Based on Scope:

  LAN -> Small area (office or home)
  MAN -> Larger area (city or large campus)
  WAN -> Spans across large geographical areas (country or continent)
  GAN -> Global area (global networks or satellite links)

Diagram illustrating these scopes might show LAN within a building, MAN covering a city, WAN spanning multiple cities or countries, and GAN reaching worldwide.
`}
        </pre>
      </div>
    </div>
  );
}

export default NetworkCategories;

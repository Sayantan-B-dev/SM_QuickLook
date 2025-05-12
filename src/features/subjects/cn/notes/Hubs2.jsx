import React from "react";

function Hubs2() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <div className="cn-section">
          <h2 className="cn-subtitle">Hubs: Comprehensive Explanation</h2>

          <p className="cn-example">
            A <strong>Hub</strong> is a basic networking device that operates at
            the <strong>Physical Layer (Layer 1)</strong> of the OSI model. Its
            primary function is to connect multiple devices in a LAN (Local Area
            Network) and transmit data between them. Unlike intelligent devices
            such as switches or routers, hubs do not manage traffic or inspect
            data; they simply repeat incoming signals to all ports except the
            one it arrived on.
          </p>

          <h2 className="cn-subtitle">Key Functions</h2>
          <ul className="cn-example">
            <li>
              <strong>Broadcasting:</strong> A hub receives a signal from one
              device and broadcasts it to all other connected devices.
            </li>
            <li>
              <strong>Central Connection Point:</strong> Acts as a common
              connection point in a star topology network.
            </li>
            <li>
              <strong>No Filtering or Processing:</strong> Does not examine
              packets or address information.
            </li>
          </ul>

          <h2 className="cn-subtitle">How a Hub Works</h2>
          <p className="cn-example">
            When a data packet arrives at one of the hub’s ports, the hub copies
            the data and sends it out to all other ports. Every device receives
            the packet, but only the intended recipient processes it. Since hubs
            lack intelligence, they do not know the source or destination MAC
            address of the packet.
          </p>

          <h2 className="cn-subtitle">Types of Hubs</h2>
          <ul className="cn-example">
            <li>
              <strong>Passive Hub:</strong> Simply connects devices and relays
              signals without amplification.
            </li>
            <li>
              <strong>Active Hub:</strong> Amplifies or regenerates signals
              before sending them to other devices (like a repeater).
            </li>
            <li>
              <strong>Smart Hub:</strong> Includes some management features like
              monitoring and basic configuration.
            </li>
          </ul>

          <h2 className="cn-subtitle">Characteristics of a Hub</h2>
          <ul className="cn-example">
            <li>
              <strong>Operates in Half-Duplex Mode:</strong> Devices can either
              send or receive data, not both at the same time.
            </li>
            <li>
              <strong>No MAC Address Table:</strong> Cannot track MAC addresses
              like switches do.
            </li>
            <li>
              <strong>Shared Bandwidth:</strong> All connected devices share the
              same collision domain and bandwidth.
            </li>
            <li>
              <strong>Susceptible to Collisions:</strong> High potential for
              data collisions in networks with heavy traffic.
            </li>
          </ul>

          <h2 className="cn-subtitle">Advantages</h2>
          <ul className="cn-example">
            <li>Cheap and simple to use.</li>
            <li>Provides basic LAN connectivity.</li>
            <li>Good for small, low-traffic networks.</li>
            <li>
              Works well in test environments or troubleshooting scenarios.
            </li>
          </ul>

          <h2 className="cn-subtitle">Disadvantages</h2>
          <ul className="cn-example">
            <li>No traffic management; inefficient use of bandwidth.</li>
            <li>Causes network congestion due to broadcasting.</li>
            <li>Insecure — all devices receive all data.</li>
            <li>Limited scalability and performance.</li>
          </ul>

          <h2 className="cn-subtitle">Use Cases</h2>
          <p className="cn-example">
            - Small home or lab networks with minimal traffic.
            <br />
            - Legacy systems or legacy infrastructure.
            <br />- Education or experimental environments.
          </p>

          <h2 className="cn-subtitle">Hub vs Switch vs Router</h2>
          <ul className="cn-example">
            <li>
              <strong>Hub:</strong> Physical layer device, no packet filtering,
              broadcasts everything.
            </li>
            <li>
              <strong>Switch:</strong> Data link layer device, uses MAC
              addresses to send packets only to intended recipients.
            </li>
            <li>
              <strong>Router:</strong> Network layer device, routes data between
              different networks using IP addresses.
            </li>
          </ul>

          <h2 className="cn-subtitle">Diagram: Hub in a Network</h2>
          <pre>{`
     +--------+       +--------+       +--------+
     | Device |       | Device |       | Device |
     +--------+       +--------+       +--------+
          \\               |               //
           \\              |              //
            \\             |             //
              +------------------------+
              |         HUB           |
              +------------------------+
                   |      |      |
                   |      |      |
               +-----+ +-----+ +-----+
               | PC1 | | PC2 | | PC3 |
               +-----+ +-----+ +-----+

- All devices connected to the hub receive the same signal.
- Only the intended device processes the signal; others ignore it.
`}</pre>
        </div>{" "}
      </div>
    </div>
  );
}

export default Hubs2;

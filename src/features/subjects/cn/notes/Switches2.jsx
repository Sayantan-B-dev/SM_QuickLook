import React from 'react'

function Switches() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
    <div className="cn-section">
    <h2 className="cn-subtitle">Switches: Comprehensive Explanation</h2>

    <p className="cn-example">
      A <strong>Network Switch</strong> is a high-performance device used
      in computer networks to connect multiple devices and intelligently
      forward data to the intended recipient. Unlike a hub, which blindly
      broadcasts data to all ports, a switch uses the{" "}
      <strong>MAC (Media Access Control) address</strong> of devices to
      forward data only to the correct destination.
    </p>

    <h2 className="cn-subtitle">Layer of Operation</h2>
    <ul className="cn-example">
      <li>
        <strong>Layer 2 - Data Link Layer:</strong> Most traditional
        switches operate at this layer and use MAC addresses to make
        forwarding decisions.
      </li>
      <li>
        <strong>Layer 3 - Network Layer:</strong> Also known as multilayer
        switches, these can route data based on IP addresses.
      </li>
    </ul>

    <h2 className="cn-subtitle">How a Switch Works</h2>
    <p className="cn-example">
      When a switch receives a data frame, it reads the destination MAC
      address and checks its internal <strong>MAC address table</strong>{" "}
      to find which port the destination device is connected to. If it
      finds a match, it forwards the frame to that port only. If it does
      not find a match, it broadcasts the frame (similar to a hub) and
      learns from the reply.
    </p>

    <h2 className="cn-subtitle">MAC Address Table (CAM Table)</h2>
    <ul className="cn-example">
      <li>
        Each switch maintains a table mapping MAC addresses to specific
        ports.
      </li>
      <li>This table is dynamically updated as frames are received.</li>
      <li>
        Improves network efficiency by reducing unnecessary traffic.
      </li>
    </ul>

    <h2 className="cn-subtitle">Types of Switches</h2>
    <ul className="cn-example">
      <li>
        <strong>Unmanaged Switch:</strong> Plug-and-play switch without
        configuration options; suitable for small networks.
      </li>
      <li>
        <strong>Managed Switch:</strong> Allows configuration, monitoring,
        VLAN setup, and supports SNMP for enterprise use.
      </li>
      <li>
        <strong>Smart Switch:</strong> Limited configuration capabilities,
        sits between unmanaged and managed switches.
      </li>
      <li>
        <strong>PoE Switch (Power over Ethernet):</strong> Provides power
        to connected devices like IP cameras, VoIP phones.
      </li>
      <li>
        <strong>Stackable Switch:</strong> Can be grouped with other
        switches to function as one large switch.
      </li>
    </ul>

    <h2 className="cn-subtitle">Features of a Network Switch</h2>
    <ul className="cn-example">
      <li>Full-duplex communication.</li>
      <li>MAC address learning and forwarding logic.</li>
      <li>Traffic isolation using VLANs (in managed switches).</li>
      <li>Bandwidth control and port mirroring.</li>
      <li>
        Loop prevention with protocols like STP (Spanning Tree Protocol).
      </li>
    </ul>

    <h2 className="cn-subtitle">Advantages of Switches</h2>
    <ul className="cn-example">
      <li>Efficient traffic handling due to unicast forwarding.</li>
      <li>Reduced collisions; each port has its own collision domain.</li>
      <li>
        Supports full-duplex communication (send & receive
        simultaneously).
      </li>
      <li>Better security and performance than hubs.</li>
    </ul>

    <h2 className="cn-subtitle">Disadvantages</h2>
    <ul className="cn-example">
      <li>More expensive than hubs.</li>
      <li>Configuration can be complex in managed switches.</li>
      <li>
        Broadcast storms still possible if loop protection is not
        configured.
      </li>
    </ul>

    <h2 className="cn-subtitle">Use Cases</h2>
    <ul className="cn-example">
      <li>Enterprise LANs with multiple computers and departments.</li>
      <li>Small office networks requiring efficient traffic routing.</li>
      <li>Backbone devices connecting multiple hubs or access points.</li>
      <li>IP surveillance systems using PoE switches.</li>
    </ul>

    <h2 className="cn-subtitle">Switch vs Hub</h2>
    <ul className="cn-example">
      <li>
        <strong>Switch:</strong> Learns MAC addresses, forwards data
        intelligently, operates at Layer 2/3.
      </li>
      <li>
        <strong>Hub:</strong> Broadcasts to all devices, no intelligence,
        operates at Layer 1.
      </li>
    </ul>

    <h2 className="cn-subtitle">Diagram: Switch in a Network</h2>
    <pre>{`
            +--------+        +--------+        +--------+
            | PC A   |        | PC B   |        | PC C   |
            +--------+        +--------+        +--------+
                 \\               |               //
                  \\              |              //
                   \\             |             //
                    +--------------------------+
                    |         SWITCH           |
                    +--------------------------+
                         |      |       |
                         |      |       |
                     +-----+ +-----+ +-----+
                     | PC1 | | PC2 | | PC3 |
                     +-----+ +-----+ +-----+

- Data sent from PC A to PC1 will ONLY go to PC1, not all devices.
- MAC address table maps PC1's MAC to a specific switch port.
`}</pre>
  </div>
    </div>
    </div>
  )
}

export default Switches

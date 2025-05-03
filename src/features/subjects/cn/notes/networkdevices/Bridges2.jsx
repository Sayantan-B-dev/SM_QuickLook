import React from 'react'

function Bridges2() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
    <div className="cn-section">
    <h2 className="cn-subtitle">Bridges: Comprehensive Explanation</h2>

    <p className="cn-example">
      A <strong>Bridge</strong> is a network device used to connect and
      filter traffic between two or more network segments within a Local
      Area Network (LAN). Bridges operate at the Data Link Layer (Layer 2)
      of the OSI model, making decisions based on MAC addresses to forward
      or filter data. They help reduce network collisions and improve
      overall network performance by segmenting traffic. Bridges can
      connect networks that use the same protocol and can filter traffic,
      preventing unnecessary data from flowing between segments.
    </p>

    <h2 className="cn-subtitle">Functionality of Bridges</h2>
    <ul className="cn-example">
      <li>
        <strong>Network Segmentation:</strong> A bridge can divide a large
        network into smaller segments, reducing network congestion and
        collisions. By segmenting traffic, bridges enhance network
        performance.
      </li>
      <li>
        <strong>Traffic Filtering:</strong> A bridge filters network
        traffic by examining the destination MAC addresses of incoming
        frames. If a frame is meant for a different segment, the bridge
        forwards it. If not, it is discarded.
      </li>
      <li>
        <strong>Forwarding Decisions:</strong> Bridges learn the MAC
        addresses of devices on each connected network segment and build a
        forwarding table. They forward frames to the appropriate segment
        based on the destination MAC address.
      </li>
      <li>
        <strong>Reducing Collisions:</strong> By dividing a network into
        smaller segments, bridges reduce the chances of collision domains.
        This allows more devices to communicate without interfering with
        one another.
      </li>
      <li>
        <strong>Loop Prevention:</strong> Bridges use the Spanning Tree
        Protocol (STP) to prevent loops in the network topology. This
        ensures that frames don't circulate endlessly and cause network
        outages.
      </li>
    </ul>

    <h2 className="cn-subtitle">Types of Bridges</h2>
    <ul className="cn-example">
      <li>
        <strong>Transparent Bridge:</strong> The most commonly used type,
        transparent bridges operate invisibly to the network and don't
        require any changes to the devices on the network. They simply
        forward frames based on MAC addresses and learn the layout of the
        network automatically.
      </li>
      <li>
        <strong>Source Routing Bridge:</strong> Source routing bridges are
        used in Token Ring networks, where the source node includes
        routing information in the frame. These bridges use the
        information to forward frames to the correct destination segment.
      </li>
      <li>
        <strong>Bridge with Routing Function:</strong> Some advanced
        bridges incorporate routing capabilities, allowing them to operate
        both as a bridge and a router. These bridges can also make
        decisions based on network layer (Layer 3) information, such as IP
        addresses.
      </li>
      <li>
        <strong>Learning Bridge:</strong> These bridges dynamically learn
        the MAC addresses on each segment and update their forwarding
        table accordingly. As the network topology changes, the bridge
        adapts and continues to forward traffic efficiently.
      </li>
    </ul>

    <h2 className="cn-subtitle">How Bridges Work</h2>
    <ul className="cn-example">
      <li>
        <strong>Learning Process:</strong> When a frame arrives at the
        bridge, it examines the source MAC address to learn which segment
        the frame originated from. This information is stored in the
        bridge's forwarding table.
      </li>
      <li>
        <strong>Forwarding Process:</strong> When a frame arrives at the
        bridge, it checks the destination MAC address and looks up the
        address in the forwarding table. If the destination is in a
        different segment, the bridge forwards the frame to that segment.
        If the destination is on the same segment, the frame is dropped.
      </li>
      <li>
        <strong>Broadcast Traffic:</strong> Broadcast frames (frames with
        a destination address of all 1s) are forwarded to all connected
        segments, as bridges cannot filter broadcast traffic.
      </li>
      <li>
        <strong>Loop Prevention with STP:</strong> To avoid network loops,
        bridges implement the Spanning Tree Protocol (STP). STP ensures
        that there is only one active path between segments, preventing
        broadcast storms and infinite loops in the network.
      </li>
    </ul>

    <h2 className="cn-subtitle">Use Cases of Bridges</h2>
    <ul className="cn-example">
      <li>
        <strong>Expanding Network Coverage:</strong> Bridges can be used
        to extend a network by connecting two physical network segments,
        allowing more devices to communicate without the need for
        additional switches or routers.
      </li>
      <li>
        <strong>Reducing Network Congestion:</strong> By segmenting a
        large network, bridges help reduce traffic collisions, which
        improves network efficiency and reduces congestion.
      </li>
      <li>
        <strong>Connecting Different Network Media:</strong> Bridges can
        connect different types of network media, such as connecting an
        Ethernet segment to a Wi-Fi segment, enabling seamless
        communication between devices using different technologies.
      </li>
      <li>
        <strong>Legacy Systems Integration:</strong> Bridges can help
        integrate older network technologies (e.g., Token Ring) with
        modern Ethernet networks, allowing the legacy systems to remain
        functional in newer environments.
      </li>
    </ul>

    <h2 className="cn-subtitle">Advantages of Bridges</h2>
    <ul className="cn-example">
      <li>
        They reduce network congestion by dividing large networks into
        smaller segments, which improves overall performance.
      </li>
      <li>
        Bridges help maintain collision-free communication in each
        segment, allowing for higher throughput.
      </li>
      <li>
        They are relatively simple devices that can improve the efficiency
        of a network without the complexity of more advanced routers.
      </li>
      <li>
        Bridges can interconnect different types of networks, facilitating
        communication between various technologies and protocols.
      </li>
    </ul>

    <h2 className="cn-subtitle">Disadvantages of Bridges</h2>
    <ul className="cn-example">
      <li>
        Bridges do not perform routing, meaning they cannot make decisions
        based on IP addresses, which limits their functionality in large
        networks.
      </li>
      <li>
        They cannot filter broadcast traffic, which can lead to
        unnecessary traffic in the network if broadcast frames are sent
        across segments.
      </li>
      <li>
        Bridges are limited by their MAC address table size and may face
        issues with scalability as the network grows larger.
      </li>
    </ul>

    <h2 className="cn-subtitle">Diagram: Bridge in a Network</h2>
    <pre>{`
                  +---------------------+                    
                  |   Device A (Segment 1)|    
                  +---------------------+
                           |                         
          +----------------------------------+
          |            Bridge               |
          |   (Learning and Forwarding)     |
          +----------------------------------+   
                           |      
                  +---------------------+ 
                  |   Device B (Segment 2)|
                  +---------------------+
- The bridge divides two network segments and forwards data between them based on MAC addresses.
- It prevents collisions within each segment and reduces traffic on the network.
- If the destination device is on a different segment, the bridge forwards the frame to the appropriate segment.
`}</pre>
  </div>
  </div>
  </div>
  )
}

export default Bridges2

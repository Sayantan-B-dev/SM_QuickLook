import React from 'react';
import '../../../../CSS/CN.css';

function PacketSwitching() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Packet Switching: Datagram Switching vs Virtual Circuit</h1>

        {/* Definition of Packet Switching */}
        <div className="cn-section">
          <h2 className="cn-subtitle">What is Packet Switching?</h2>
          <p className="cn-example">
            <strong>Packet Switching</strong> is a method of communication in which data is divided into small packets. Each packet is transmitted independently over the network, potentially taking different routes to reach the destination. Once all packets arrive, they are reassembled in the correct order.
          </p>
          <p className="cn-example">
            Packet switching is more efficient than circuit switching in most scenarios, especially for bursty data traffic. It is the underlying technology for most modern communication systems, including the internet.
          </p>
        </div>

        {/* Datagram Switching */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Datagram Switching</h2>
          <p className="cn-example">
            In <strong>Datagram Switching</strong>, each packet (datagram) is routed independently. This means that each packet may take a different path to reach its destination. Datagram switching is used in networks like the Internet, where each router makes an independent forwarding decision based on the packet's destination address.
          </p>
          <p className="cn-example">
            The major advantage of this method is flexibility, as it allows dynamic routing based on network conditions. However, it can lead to issues like out-of-order packets and varying delays for different packets.
          </p>
        </div>

        {/* Virtual Circuit */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Virtual Circuit Switching</h2>
          <p className="cn-example">
            In <strong>Virtual Circuit Switching</strong>, a logical path is established between the source and destination before the communication starts. All packets follow this predetermined path, similar to circuit switching, but without dedicating a physical path. It is often used in ATM (Asynchronous Transfer Mode) networks.
          </p>
          <p className="cn-example">
            Virtual circuits provide more reliable and predictable communication than datagram switching since all packets follow the same route, ensuring they arrive in order. However, they require more setup time than datagram switching, which can introduce delays.
          </p>
        </div>

        {/* Layers Involved */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Datalink and Network Layers in Packet Switching</h2>
          <p className="cn-example">
            Packet switching operates across two main OSI layers:
          </p>
          <ul className="cn-example">
            <li><strong>Data Link Layer (Layer 2)</strong>: Responsible for creating and managing the communication link between adjacent network nodes. It handles physical addressing and error detection/correction in packet transmission.</li>
            <li><strong>Network Layer (Layer 3)</strong>: Handles routing, forwarding, and addressing of packets across different networks. In datagram switching, routers independently make forwarding decisions, while in virtual circuit switching, the path is pre-established at the network layer.</li>
          </ul>
        </div>

        {/* Store and Forward */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Store and Forward</h2>
          <p className="cn-example">
            <strong>Store and Forward</strong> is a method used in packet switching where intermediate routers store packets temporarily before forwarding them. This ensures reliable transmission even if the next hop is temporarily unavailable.
          </p>
          <p className="cn-example">
            This technique adds some delay but helps ensure data integrity by preventing packet loss and ensuring that packets are forwarded only when the next node is ready.
          </p>
        </div>

        {/* Pipeline Usage */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Pipeline Used in Packet Switching</h2>
          <p className="cn-example">
            In packet switching, <strong>pipelining</strong> allows multiple packets to be in transit at the same time. This reduces idle time on the communication links, improving throughput. 
          </p>
          <p className="cn-example">
            For example, while one packet is being transmitted, other packets can be in transit in the network, reducing the time spent waiting for packets to be transmitted sequentially.
          </p>
        </div>

        {/* Efficiency */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Efficiency in Packet Switching</h2>
          <p className="cn-example">
            Packet switching is highly efficient for bursty traffic, as it uses available bandwidth on demand. Since packets are routed independently, it can take the most efficient path depending on the current network conditions, unlike circuit switching where the bandwidth is reserved for the entire session.
          </p>
          <p className="cn-example">
            However, the efficiency can decrease when the network is congested or when there are high error rates, as packets may need to be retransmitted.
          </p>
        </div>

        {/* Delay */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Delay in Packet Switching</h2>
          <p className="cn-example">
            The delay in packet switching can be influenced by various factors:
          </p>
          <ul className="cn-example">
            <li><strong>Queuing Delay</strong>: Occurs when packets wait in queue at routers before they can be forwarded.</li>
            <li><strong>Propagation Delay</strong>: The time it takes for the packet to travel from the source to the destination.</li>
            <li><strong>Transmission Delay</strong>: The time required to push the packet onto the network link.</li>
            <li><strong>Processing Delay</strong>: The time spent by routers processing and forwarding packets.</li>
          </ul>
          <p className="cn-example">
            Overall, packet switching can have variable delays since each packet might take a different route and experience different delays based on network congestion and routing decisions.
          </p>
        </div>

        {/* Diagram */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: Packet Switching (Datagram and Virtual Circuit)</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20240109160206/4514-660.png"
            alt="Packet Switching Diagram"
          />
        </div>

        <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/packet-switching-and-delays-in-computer-network/")}>Know more</button>
      </div>
    </div>
  );
}

export default PacketSwitching;

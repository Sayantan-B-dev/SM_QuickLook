import React from "react";
import "../../../../CSS/CN.css";

function DatagramVsVirtualCircuitAndMessageSwitching() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">
          Datagram vs Virtual Circuit, Message Switching, and Types of Casting
        </h1>

        {/* Datagram vs Virtual Circuit */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Datagram vs Virtual Circuit</h2>
          <p className="cn-example">
            The primary difference between <strong>Datagram Switching</strong>{" "}
            and <strong>Virtual Circuit Switching</strong> lies in how packets
            are routed through the network:
          </p>
          <ul className="cn-example">
            <li>
              <strong>Datagram Switching</strong>: Each packet is routed
              independently, and each router makes an individual forwarding
              decision based on the packet's destination address. This method is
              commonly used in the internet, where routers dynamically route
              packets based on real-time network conditions.
            </li>
            <li>
              <strong>Virtual Circuit Switching</strong>: A logical path is
              established before communication begins. All packets follow this
              predefined path, ensuring they arrive in order. Unlike datagram
              switching, virtual circuits provide more predictable routing, but
              they take longer to set up.
            </li>
          </ul>
          <p className="cn-example">
            <strong>Advantages of Datagram Switching</strong>:
            <ul>
              <li>
                More flexible, as packets can take different paths based on
                network conditions.
              </li>
              <li>Less overhead since no need to set up a route beforehand.</li>
            </ul>
          </p>
          <p className="cn-example">
            <strong>Disadvantages of Datagram Switching</strong>:
            <ul>
              <li>Packets may arrive out of order.</li>
              <li>
                Potential for higher delay due to independent routing decisions
                at each hop.
              </li>
            </ul>
          </p>
          <p className="cn-example">
            <strong>Advantages of Virtual Circuit Switching</strong>:
            <ul>
              <li>Guaranteed in-order packet delivery.</li>
              <li>
                More reliable and predictable for applications requiring a
                consistent connection.
              </li>
            </ul>
          </p>
          <p className="cn-example">
            <strong>Disadvantages of Virtual Circuit Switching</strong>:
            <ul>
              <li>More overhead due to the need for route establishment.</li>
              <li>Less flexibility compared to datagram switching.</li>
            </ul>
          </p>
        </div>

        {/* Message Switching */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Message Switching</h2>
          <p className="cn-example">
            <strong>Message Switching</strong> is a type of communication where
            entire messages are sent from one station to the next, with each
            message being stored and forwarded by intermediate nodes. Unlike
            packet switching, which breaks messages into smaller packets,
            message switching involves sending the entire message as a single
            unit.
          </p>
          <p className="cn-example">
            <strong>How it Works</strong>: In message switching, the message is
            stored at an intermediate node until the next node is available to
            forward it. The message will be sent in its entirety once the
            forwarding node has enough resources.
          </p>
          <p className="cn-example">
            <strong>Advantages of Message Switching</strong>:
            <ul>
              <li>
                No need for a dedicated path; messages can be forwarded when the
                network is available.
              </li>
              <li>
                Better handling of network congestion since nodes can store
                messages before forwarding them.
              </li>
            </ul>
          </p>
          <p className="cn-example">
            <strong>Disadvantages of Message Switching</strong>:
            <ul>
              <li>
                Higher delay compared to packet switching because the entire
                message has to be received and stored before forwarding.
              </li>
              <li>Not efficient for real-time or interactive communication.</li>
            </ul>
          </p>
        </div>

        {/* Types of Casting in Networking */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Types of Casting in Networking</h2>
          <p className="cn-example">
            <strong>Casting</strong> refers to how data is transmitted over the
            network from one source to one or multiple destinations. In
            networking, there are three main types of casting:
          </p>
          <ul className="cn-example">
            <li>
              <strong>Unicast</strong>: Unicast is the transmission of data from
              one source to one destination. It is the most common type of
              communication, where a single sender transmits data to a single
              receiver. Examples include point-to-point communication over the
              internet or a local network.
            </li>
            <li>
              <strong>Broadcast</strong>: Broadcast is the transmission of data
              from one source to all devices in the network. It is typically
              used in scenarios where information needs to be sent to all nodes
              in a network simultaneously. Examples include DHCP requests or ARP
              requests in a local network.
            </li>
            <li>
              <strong>Multicast</strong>: Multicast is the transmission of data
              from one source to multiple specified receivers. It is more
              efficient than broadcasting because only the specified recipients
              will receive the data, reducing unnecessary load on the network.
              Examples include video conferencing or streaming protocols like IP
              multicast.
            </li>
          </ul>
          <p className="cn-example">
            <strong>Advantages and Disadvantages</strong>:
          </p>
          <ul className="cn-example">
            <li>
              <strong>Unicast</strong>:
              <ul>
                <li>Advantages: Efficient for one-to-one communication.</li>
                <li>
                  Disadvantages: Not scalable for large numbers of recipients.
                </li>
              </ul>
            </li>
            <li>
              <strong>Broadcast</strong>:
              <ul>
                <li>Advantages: Reaches all devices in the network at once.</li>
                <li>
                  Disadvantages: Inefficient for large networks and can create
                  congestion.
                </li>
              </ul>
            </li>
            <li>
              <strong>Multicast</strong>:
              <ul>
                <li>
                  Advantages: Efficient for one-to-many or many-to-many
                  communication.
                </li>
                <li>
                  Disadvantages: Not all networks support multicast, and it may
                  require more complex setup.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Diagram */}
        <div className="cn-section">
          <h2 className="cn-subtitle">
            Diagram: Datagram vs Virtual Circuit, Message Switching, and Types
            of Casting
          </h2>
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20241009165109259904/Datagram-Switching.gif" />
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20241009165213093441/Virtual-Circuit-Switching.gif" />
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20240425133145/Message-swithcing.webp"
            alt=""
          />
        </div>

        <div className="cn-section flex flex-col gap-2">
          <button
            className="infoBtn"
            onClick={() =>
              window.open(
                "https://www.geeksforgeeks.org/difference-between-datagram-switching-virtual-circuit/"
              )
            }
          >
            Know more about Virtual Circuit
          </button>
          <button
            className="infoBtn"
            onClick={() =>
              window.open(
                "https://www.geeksforgeeks.org/message-switching-techniques/"
              )
            }
          >
            Know more about Message Switching
          </button>
          <button
            className="infoBtn"
            onClick={() =>
              window.open(
                "https://www.geeksforgeeks.org/difference-between-unicast-broadcast-and-multicast-in-computer-network/"
              )
            }
          >
            Know more about Casting Types
          </button>
        </div>
      </div>
    </div>
  );
}

export default DatagramVsVirtualCircuitAndMessageSwitching;

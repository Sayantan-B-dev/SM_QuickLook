import React from "react";
import "../../../../CSS/CN.css";

function ARP() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Address Resolution Protocol (ARP)</h1>

        {/* Overview of ARP */}
        <div className="cn-section">
          <h2 className="cn-subtitle">What is ARP?</h2>
          <p className="cn-example">
            **ARP (Address Resolution Protocol)** is a protocol used to map a known **IP address** to a corresponding **MAC address**. It works at the **Data Link Layer** of the OSI model, enabling devices in a local network to communicate with each other using Ethernet frames.
            <br />
            ARP is crucial for devices to be able to send frames to each other in an IP-based network since it provides the necessary translation from Layer 3 (IP address) to Layer 2 (MAC address).
          </p>
        </div>

        {/* ARP Operation */}
        <div className="cn-section">
          <h2 className="cn-subtitle">How Does ARP Work?</h2>
          <pre>
{`1. When a device wants to communicate with another device in the same network, it knows the IP address of the destination but not the MAC address.
2. The device sends an **ARP request** to the local network (broadcast). 
3. All devices on the local network receive the ARP request, but only the device with the matching IP address responds.
4. The destination device sends an **ARP reply** containing its MAC address.
5. The sending device can now store the IP-MAC mapping in its **ARP cache** for future communications.`}
          </pre>
        </div>

        {/* ARP Request & Reply */}
        <div className="cn-section">
          <h2 className="cn-subtitle">ARP Request and ARP Reply</h2>
          <pre>
{`ARP Request:
✔ A broadcast message asking, "Who has IP address 192.168.1.5?"
✔ All devices on the network receive the request.
✔ The device with IP 192.168.1.5 responds with its MAC address.

ARP Reply:
✔ The device with the requested IP address sends back a unicast reply.
✔ The reply includes its MAC address.
✔ The sender updates its ARP cache to store the IP-MAC mapping.`}
          </pre>
        </div>

        {/* ARP Cache */}
        <div className="cn-section">
          <h2 className="cn-subtitle">What is an ARP Cache?</h2>
          <p className="cn-example">
            The **ARP cache** is a table where devices store recently resolved IP-MAC mappings. This cache is used to reduce the need for sending ARP requests frequently. Each entry typically includes:
            <ul>
              <li>**IP Address**</li>
              <li>**MAC Address**</li>
              <li>**TTL (Time to Live)**</li>
            </ul>
            Entries in the ARP cache are **time-limited** and are removed once the TTL expires.
          </p>
        </div>

        {/* ARP Header Format */}
        <div className="cn-section">
          <h2 className="cn-subtitle">ARP Packet Structure</h2>
          <pre>
{`The ARP header has the following format:

| Hardware Type (2 bytes) | Protocol Type (2 bytes) | Hardware Address Length (1 byte) | Protocol Address Length (1 byte) | Operation (2 bytes) | Sender Hardware Address (6 bytes) | Sender Protocol Address (4 bytes) | Target Hardware Address (6 bytes) | Target Protocol Address (4 bytes) |

Hardware Type:
✔ 1: Ethernet (most common)

Protocol Type:
✔ 0x0800: IPv4 (ARP is typically used with IPv4)

Operation:
✔ 1: ARP Request
✔ 2: ARP Reply

Example ARP Request:
Sender Hardware Address (MAC): 00:0A:95:9D:68:16
Sender Protocol Address (IP): 192.168.1.1
Target Hardware Address: 00:00:00:00:00:00 (empty in request)
Target Protocol Address: 192.168.1.5`}
          </pre>
        </div>

        {/* ARP Cache Example */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Example of ARP Cache</h2>
          <pre>
{`ARP Cache Entry Example:
IP Address       | MAC Address         | TTL
192.168.1.5      | 00:1A:2B:3C:4D:5E  | 120s
192.168.1.10     | 00:1A:2B:3C:4D:6F  | 180s`}
          </pre>
        </div>

        {/* ARP Spoofing */}
        <div className="cn-section">
          <h2 className="cn-subtitle">ARP Spoofing and Security</h2>
          <p className="cn-example">
            **ARP Spoofing (or ARP Poisoning)** is a type of attack where a malicious device sends false ARP replies. This can lead to attacks such as **Man-in-the-Middle** (MITM), where the attacker intercepts and manipulates traffic between two devices.
            <br />
            To defend against ARP spoofing, techniques like **static ARP entries** and **ARP monitoring tools** can be used.
          </p>
        </div>

        {/* ARP vs NDP */}
        <div className="cn-section">
          <h2 className="cn-subtitle">ARP vs Neighbor Discovery Protocol (NDP)</h2>
          <p className="cn-example">
            In IPv6, ARP is replaced by the **Neighbor Discovery Protocol (NDP)**, which operates in a similar manner but offers improvements, such as:
            <ul>
              <li>**Neighbor Solicitation** (ARP Request in IPv4)</li>
              <li>**Neighbor Advertisement** (ARP Reply in IPv4)</li>
              <li>**Duplicate Address Detection** (prevents IP conflicts)</li>
            </ul>
          </p>
        </div>

        {/* Diagram */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: ARP Process</h2>
          <img
          className="smallImg"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20240212121108/How-Address-Resolution-Protocol-ARP-works---gif-opt-(1).gif"
            alt="ARP Process Diagram"
          />
        </div>

        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/how-address-resolution-protocol-arp-works/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default ARP;

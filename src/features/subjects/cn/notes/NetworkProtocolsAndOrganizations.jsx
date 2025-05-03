import React from "react";
import "../../../../CSS/CN.css";

function NetworkProtocolsAndOrganizations() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Standard Organizations and Protocols</h1>

        {/* Introduction Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Introduction to Standard Organizations and Protocols</h2>
          <p className="cn-example">
            In the field of computer networks, several organizations and protocols ensure that network systems can communicate with each other efficiently and securely. Standard organizations develop networking standards, while protocols define the rules for communication between devices. Together, they ensure interoperability, security, and performance across global networks, like the internet.
          </p>
        </div>

        {/* Standard Organizations */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Standard Organizations</h2>
          <p className="cn-example">
            Several prominent standard organizations develop and maintain protocols and standards for networking. These organizations ensure that various systems and technologies can interact smoothly and that new innovations are adopted and standardized across industries. Here are some of the key standard organizations in the networking world:
          </p>

          <h3 className="cn-subtitle">1. Internet Engineering Task Force (IETF)</h3>
          <p className="cn-example">
            The IETF is an open international community of network designers, operators, and researchers. It develops and promotes voluntary internet standards, primarily in the form of RFCs (Request for Comments). The IETF focuses on standards for internet protocols, such as TCP/IP, DNS, HTTP, and more.
          </p>

          <h3 className="cn-subtitle">2. Institute of Electrical and Electronics Engineers (IEEE)</h3>
          <p className="cn-example">
            The IEEE is one of the largest standards organizations, focusing on electrical, electronic, and computing technologies. In networking, IEEE is best known for its work on Ethernet standards (IEEE 802.3) and wireless networking standards (IEEE 802.11 for Wi-Fi).
          </p>

          <h3 className="cn-subtitle">3. International Telecommunication Union (ITU)</h3>
          <p className="cn-example">
            The ITU is a specialized agency of the United Nations that focuses on the global regulation and standardization of telecommunications. It is involved in developing standards for various aspects of telecommunications, including radio communication, broadband networks, and telecommunication protocols.
          </p>

          <h3 className="cn-subtitle">4. World Wide Web Consortium (W3C)</h3>
          <p className="cn-example">
            The W3C is responsible for defining standards and guidelines for the web. It develops protocols and recommendations that ensure the long-term growth of the web. Examples of W3C standards include HTML, CSS, XML, and HTTP/2.
          </p>

          <h3 className="cn-subtitle">5. International Organization for Standardization (ISO)</h3>
          <p className="cn-example">
            ISO is an independent, non-governmental international organization that develops standards for a wide range of technologies, including networking. One of the most notable networking standards developed by ISO is the OSI (Open Systems Interconnection) model, which defines how different network protocols should interact in a standardized manner.
          </p>

          <h3 className="cn-subtitle">6. European Telecommunications Standards Institute (ETSI)</h3>
          <p className="cn-example">
            ETSI is responsible for standardizing telecommunications, broadcasting, and other electronic communication networks in Europe. It works closely with organizations like ITU and ISO to align global and regional standards for network communication.
          </p>
        </div>

        {/* Network Protocols Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Network Protocols</h2>
          <p className="cn-example">
            Network protocols are sets of rules that define how data is transmitted and received across networks. They ensure that devices and systems can communicate with each other efficiently and securely. Below are some key protocols and their roles in networking:
          </p>

          <h3 className="cn-subtitle">1. Transmission Control Protocol (TCP)</h3>
          <p className="cn-example">
            TCP is a fundamental protocol in the transport layer of the OSI model. It ensures reliable data transfer between devices by establishing a connection, managing data packets, and guaranteeing that packets are delivered in the correct order. It is widely used in applications like web browsing and file transfer.
          </p>

          <h3 className="cn-subtitle">2. Internet Protocol (IP)</h3>
          <p className="cn-example">
            IP is a network layer protocol that defines addressing schemes (IP addresses) and routing rules. It is responsible for directing data packets to their destination across the internet or other networks. IPv4 and IPv6 are the two versions of IP in use today.
          </p>

          <h3 className="cn-subtitle">3. Hypertext Transfer Protocol (HTTP)</h3>
          <p className="cn-example">
            HTTP is an application layer protocol used for transferring web pages over the internet. It defines the rules for requesting and serving web resources. HTTPS is the secure version of HTTP, which uses encryption (via SSL/TLS) to protect data integrity and privacy.
          </p>

          <h3 className="cn-subtitle">4. Simple Mail Transfer Protocol (SMTP)</h3>
          <p className="cn-example">
            SMTP is an application layer protocol used to send and route email messages across networks. It is designed to handle outgoing email communication between mail servers.
          </p>

          <h3 className="cn-subtitle">5. File Transfer Protocol (FTP)</h3>
          <p className="cn-example">
            FTP is a protocol used for transferring files between a client and a server over a network. It supports both anonymous and authenticated access for file management and retrieval.
          </p>

          <h3 className="cn-subtitle">6. Dynamic Host Configuration Protocol (DHCP)</h3>
          <p className="cn-example">
            DHCP is used to dynamically assign IP addresses to devices on a network. It helps automate the assignment process and ensures that devices can communicate properly within a network by providing them with an IP address, subnet mask, and default gateway.
          </p>

          <h3 className="cn-subtitle">7. Simple Network Management Protocol (SNMP)</h3>
          <p className="cn-example">
            SNMP is a protocol used for monitoring and managing network devices such as routers, switches, and servers. It allows administrators to gather data on network performance, detect faults, and make necessary adjustments.
          </p>

        </div>

        {/* Protocols Table */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Comparison of Common Network Protocols</h2>
          <table className="cn-table">
            <thead>
              <tr>
                <th>Protocol</th>
                <th>Layer</th>
                <th>Purpose</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TCP</td>
                <td>Transport</td>
                <td>Ensures reliable data transmission</td>
                <td>Web Browsing (HTTP), File Transfers (FTP)</td>
              </tr>
              <tr>
                <td>IP</td>
                <td>Network</td>
                <td>Routing data packets between devices</td>
                <td>Routing in the internet</td>
              </tr>
              <tr>
                <td>HTTP</td>
                <td>Application</td>
                <td>Transfer web page resources</td>
                <td>Accessing websites</td>
              </tr>
              <tr>
                <td>SMTP</td>
                <td>Application</td>
                <td>Sending emails</td>
                <td>Sending mail through email clients</td>
              </tr>
              <tr>
                <td>FTP</td>
                <td>Application</td>
                <td>Transferring files between client and server</td>
                <td>Uploading/downloading files from servers</td>
              </tr>
              <tr>
                <td>DHCP</td>
                <td>Application</td>
                <td>Assigning dynamic IP addresses</td>
                <td>Device IP assignment on a network</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Diagram Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: Network Protocols Overview</h2>

        </div>


      </div>
    </div>
  );
}

export default NetworkProtocolsAndOrganizations;

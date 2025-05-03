import React from "react";
import "../../../../CSS/CN.css";

function CNDemoFirewall() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Firewall in Network Security</h1>

        {/* What is a Firewall */}
        <div className="cn-section">
          <h2 className="cn-subtitle">What is a Firewall?</h2>
          <p className="cn-example">
            A firewall is a network security system—either hardware, software, or both—that monitors and controls incoming and outgoing network traffic based on predetermined security rules. It establishes a barrier between a trusted internal network and untrusted external networks (like the internet).
          </p>
        </div>

        {/* Purpose of Firewall */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Purpose and Role of a Firewall</h2>
          <p className="cn-example">
            - Prevents unauthorized access to or from a private network.<br />
            - Enforces security policies and protects sensitive information.<br />
            - Logs activity and alerts administrators of suspicious behavior.<br />
            - Acts as the first line of defense in securing digital assets.
          </p>
        </div>

        {/* How Firewall Works */}
        <div className="cn-section">
          <h2 className="cn-subtitle">How Firewall Works</h2>
          <p className="cn-example">
            Firewalls examine packets of data before they enter or leave the network. Based on pre-defined rules (ACLs), they either allow or block the packets. Firewalls can inspect packet headers (source/destination IP, port, protocol) and even payloads (in application layer firewalls).
          </p>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
INTERNET
   |
   |   [Unauthorized Traffic]
   V
+-----------+
|  FIREWALL | -----> Blocks or Allows
+-----------+
   |
   V
INTERNAL NETWORK
`}
          </pre>
        </div>

        {/* Packet Filtering Firewall */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Packet Filtering Firewall (Network Layer)</h2>
          <p className="cn-example">
            This firewall filters traffic at the network layer. It examines packets based on source/destination IP address, port number, and protocol. It follows a rule-based approach using ACL (Access Control Lists).
          </p>
          <p className="cn-example">
            - Works at Layer 3 (Network) and Layer 4 (Transport).<br />
            - Stateless (does not track connection state).<br />
            - Simple and fast, but less secure.<br />
            - Cannot inspect payload (application content).
          </p>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Rules:
ALLOW TCP FROM 192.168.1.0/24 TO ANY PORT 80
DENY UDP FROM ANY TO 10.0.0.0/8 PORT 53

Packet:
SRC IP: 192.168.1.10, DEST IP: 8.8.8.8, PORT: 80
--> ALLOWED
`}
          </pre>
        </div>

        {/* Proxy Firewall */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Application-Level Firewall (Proxy Firewall)</h2>
          <p className="cn-example">
            A proxy firewall (or application-level gateway) operates at Layer 7 (Application layer). Instead of allowing direct connections between client and server, it acts as an intermediary that forwards requests on behalf of the client.
          </p>
          <p className="cn-example">
            - Performs deep packet inspection.<br />
            - Hides internal network details.<br />
            - Can enforce user authentication and content filtering.<br />
            - Slower but highly secure.
          </p>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Client --> Proxy --> Server
           |
           --> Filters HTTP request, inspects URL/content
`}
          </pre>
          <p className="cn-example">
            <strong>Example:</strong> When a user tries to visit a malicious site, the proxy firewall checks the request and blocks it based on URL filtering rules or virus scanning.
          </p>
        </div>

        {/* Table: Packet Filtering vs Proxy Firewall */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Comparison Table</h2>
          <table className="example-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Packet Filtering Firewall</th>
                <th>Proxy Firewall (Application Firewall)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>OSI Layer</td>
                <td>Network/Transport (3/4)</td>
                <td>Application (7)</td>
              </tr>
              <tr>
                <td>Inspection Level</td>
                <td>Header only</td>
                <td>Header + Payload</td>
              </tr>
              <tr>
                <td>Connection Tracking</td>
                <td>Stateless</td>
                <td>Stateful</td>
              </tr>
              <tr>
                <td>Security</td>
                <td>Basic</td>
                <td>Advanced (Content-level)</td>
              </tr>
              <tr>
                <td>Performance</td>
                <td>Fast</td>
                <td>Slower</td>
              </tr>
              <tr>
                <td>Example Use Case</td>
                <td>Block ports or IP ranges</td>
                <td>Block malicious URLs, scan downloads</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Grid Example */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Firewall Types (Structured View)</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">Network-based Firewall</h3>
              <div className="cn-grid-item unstructured">
                Deployed on the perimeter of networks. Protects multiple systems within a LAN. Uses packet filtering or proxy logic.
              </div>
            </div>
            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">Host-based Firewall</h3>
              <div className="cn-grid-item unstructured">
                Installed on individual devices. Controls traffic to and from that particular host. Examples include Windows Defender Firewall.
              </div>
            </div>
            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">Next-Gen Firewall (NGFW)</h3>
              <div className="cn-grid-item unstructured">
                Combines packet filtering, deep packet inspection, intrusion detection, and app-layer filtering. Advanced threat protection.
              </div>
            </div>
          </div>
        </div>

        {/* Diagram Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: Firewall in a Network</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/introduction-to-firewall-1.png"
            alt="Firewall Diagram"
          />
        </div>

        {/* Button */}
        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/introduction-of-firewall-in-computer-network/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default CNDemoFirewall;

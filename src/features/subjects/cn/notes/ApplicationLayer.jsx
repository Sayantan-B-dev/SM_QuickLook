import React from "react";
import "../../../../CSS/CN.css";

function ApplicationLayer() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Application Layer</h1>

        <div className="cn-section">
          <h2 className="cn-subtitle">Overview</h2>
          <p className="cn-example">
            The Application Layer is the topmost layer (Layer 7) of the OSI
            model. It provides an interface for the end-user to communicate with
            network services. This layer is responsible for presenting data to
            the user and enabling services like file transfers, emails, remote
            access, and more. It interacts directly with software applications
            and handles protocols like HTTP, FTP, SMTP, DNS, and many others.
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Common Application Layer Protocols</h2>
          <table className="cn-table">
            <thead>
              <tr>
                <th>Protocol Name</th>
                <th>Explanation</th>
                <th>Port Number</th>
                <th>Transport Protocol</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ECHO</td>
                <td>
                  Used to test round-trip time by echoing data back to sender
                </td>
                <td>7</td>
                <td>TCP/UDP</td>
              </tr>
              <tr>
                <td>FTP (File Transfer Protocol)</td>
                <td>
                  Transfers files between client and server (Port 20 for data,
                  21 for control)
                </td>
                <td>20, 21</td>
                <td>TCP</td>
              </tr>
              <tr>
                <td>SSH (Secure Shell)</td>
                <td>
                  Provides encrypted remote login and secure data communication
                </td>
                <td>22</td>
                <td>TCP</td>
              </tr>
              <tr>
                <td>Telnet</td>
                <td>
                  Unencrypted remote access to network devices (mostly replaced
                  by SSH)
                </td>
                <td>23</td>
                <td>TCP</td>
              </tr>
              <tr>
                <td>SMTP (Simple Mail Transfer Protocol)</td>
                <td>Sends emails between mail servers</td>
                <td>25</td>
                <td>TCP</td>
              </tr>
              <tr>
                <td>DNS (Domain Name System)</td>
                <td>Resolves domain names to IP addresses</td>
                <td>53</td>
                <td>TCP/UDP</td>
              </tr>
              <tr>
                <td>DHCP (Dynamic Host Configuration Protocol)</td>
                <td>
                  Assigns IP addresses dynamically to devices (67 Server, 68
                  Client)
                </td>
                <td>67, 68</td>
                <td>UDP</td>
              </tr>
              <tr>
                <td>TFTP (Trivial File Transfer Protocol)</td>
                <td>Basic file transfer with no authentication</td>
                <td>69</td>
                <td>UDP</td>
              </tr>
              <tr>
                <td>HTTP (Hypertext Transfer Protocol)</td>
                <td>Accesses websites and web resources in plaintext</td>
                <td>80</td>
                <td>TCP</td>
              </tr>
              <tr>
                <td>POP3 (Post Office Protocol v3)</td>
                <td>Retrieves emails and downloads to client system</td>
                <td>110</td>
                <td>TCP</td>
              </tr>
              <tr>
                <td>IMAP (Internet Message Access Protocol)</td>
                <td>Access and manage emails directly on the server</td>
                <td>143</td>
                <td>TCP</td>
              </tr>
              <tr>
                <td>SNMP (Simple Network Management Protocol)</td>
                <td>Used for network monitoring and device management</td>
                <td>161</td>
                <td>UDP</td>
              </tr>
              <tr>
                <td>LDAP (Lightweight Directory Access Protocol)</td>
                <td>
                  Accesses distributed directory services (like user data)
                </td>
                <td>389</td>
                <td>TCP/UDP</td>
              </tr>
              <tr>
                <td>HTTPS (HTTP Secure)</td>
                <td>Secure version of HTTP using TLS/SSL encryption</td>
                <td>443</td>
                <td>TCP</td>
              </tr>
              <tr>
                <td>RIP (Routing Information Protocol)</td>
                <td>Used for sharing routing information within a network</td>
                <td>520</td>
                <td>UDP</td>
              </tr>
              <tr>
                <td>RDP (Remote Desktop Protocol)</td>
                <td>Provides GUI-based remote access to another computer</td>
                <td>3389</td>
                <td>TCP</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Structured & Unstructured Services</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <p>
                Structured: Services like HTTP, FTP, SMTP provide clearly
                defined protocols and data formats, supporting specific
                client-server communication.
              </p>
            </div>
            <div className="cn-grid-item unstructured">
              <p>
                Unstructured: Services such as raw data streaming or
                peer-to-peer file sharing without strict formatting or protocol
                enforcement.
              </p>
            </div>
          </div>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: Application Layer Functions</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20250127103912860245/1.webp"
            alt="Application Layer Diagram"
          />
        </div>
        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/application-layer-in-osi-model/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default ApplicationLayer;

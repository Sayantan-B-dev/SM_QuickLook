import React from "react";
import "../../../../CSS/CN.css";

function ApplicationLayerProtocols() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Application Layer Protocols</h1>

        <div className="cn-section">
          <h2 className="cn-subtitle">What is the Application Layer?</h2>
          <p className="cn-example">
            The Application Layer is the top layer in the OSI and TCP/IP models. It provides an interface for end-user processes and applications to communicate over a network. Examples include web browsing, file transfer, email, etc. It is **closest to the user** and interacts with lower layers to send/receive data.
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Popular Application Layer Protocols</h2>
          <table className="cn-table">
            <thead>
              <tr>
                <th>Protocol</th>
                <th>Port</th>
                <th>Transport</th>
                <th>Purpose</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HTTP</td>
                <td>80</td>
                <td>TCP</td>
                <td>Web communication. Used to transfer web pages and resources.</td>
                <td>Accessing `http://example.com`</td>
              </tr>
              <tr>
                <td>HTTPS</td>
                <td>443</td>
                <td>TCP</td>
                <td>Secure version of HTTP using SSL/TLS encryption.</td>
                <td>`https://bank.com`</td>
              </tr>
              <tr>
                <td>FTP</td>
                <td>20 (data), 21 (control)</td>
                <td>TCP</td>
                <td>Transfers files between systems.</td>
                <td>`ftp://ftp.gnu.org`</td>
              </tr>
              <tr>
                <td>SMTP</td>
                <td>25</td>
                <td>TCP</td>
                <td>Used to send emails between servers.</td>
                <td>Used by Gmail backend to route messages</td>
              </tr>
              <tr>
                <td>POP3</td>
                <td>110</td>
                <td>TCP</td>
                <td>Downloads emails from a server to local device and deletes from server.</td>
                <td>Accessing mailbox via Outlook (POP mode)</td>
              </tr>
              <tr>
                <td>IMAP</td>
                <td>143</td>
                <td>TCP</td>
                <td>Accesses emails directly on the mail server without deleting them.</td>
                <td>Reading Gmail on phone (IMAP mode)</td>
              </tr>
              <tr>
                <td>DNS</td>
                <td>53</td>
                <td>UDP/TCP</td>
                <td>Resolves domain names to IP addresses.</td>
                <td>Resolving `www.google.com` to IP</td>
              </tr>
              <tr>
                <td>Telnet</td>
                <td>23</td>
                <td>TCP</td>
                <td>Remote login protocol (insecure)</td>
                <td>`telnet hostname` from terminal</td>
              </tr>
              <tr>
                <td>SSH</td>
                <td>22</td>
                <td>TCP</td>
                <td>Secure shell for remote login with encryption</td>
                <td>`ssh user@host.com`</td>
              </tr>
              <tr>
                <td>TFTP</td>
                <td>69</td>
                <td>UDP</td>
                <td>Simple file transfer protocol (no authentication)</td>
                <td>Used in router firmware updates</td>
              </tr>
              <tr>
                <td>DHCP</td>
                <td>67/68</td>
                <td>UDP</td>
                <td>Assigns IPs to hosts dynamically</td>
                <td>PC auto-gets IP in a network</td>
              </tr>
              <tr>
                <td>ECHO</td>
                <td>7</td>
                <td>TCP/UDP</td>
                <td>Used for ping test to echo back messages</td>
                <td>`ping` command uses echo request/reply</td>
              </tr>
              <tr>
                <td>RIP</td>
                <td>520</td>
                <td>UDP</td>
                <td>Routing protocol used to manage router tables</td>
                <td>Legacy networks</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Common HTTP Methods</h2>
          <table className="cn-table">
            <thead>
              <tr>
                <th>Method</th>
                <th>Description</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>GET</td>
                <td>Retrieves data from server without changing it.</td>
                <td>`GET /products/123`</td>
              </tr>
              <tr>
                <td>POST</td>
                <td>Sends data to server to create new resource.</td>
                <td>`POST /users` with user form data</td>
              </tr>
              <tr>
                <td>PUT</td>
                <td>Replaces current representation of resource with new one.</td>
                <td>`PUT /users/123` to update user info</td>
              </tr>
              <tr>
                <td>DELETE</td>
                <td>Deletes a resource on the server.</td>
                <td>`DELETE /products/5`</td>
              </tr>
              <tr>
                <td>HEAD</td>
                <td>Same as GET but only header (no body) is returned.</td>
                <td>`HEAD /about.html`</td>
              </tr>
              <tr>
                <td>OPTIONS</td>
                <td>Returns HTTP methods the server supports.</td>
                <td>`OPTIONS *`</td>
              </tr>
              <tr>
                <td>CONNECT</td>
                <td>Establishes a tunnel (usually for HTTPS).</td>
                <td>Used by proxy servers</td>
              </tr>
              <tr>
                <td>TRACE</td>
                <td>Returns the received request (used for debugging).</td>
                <td>Diagnostic requests</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: Client Requests to Site A and Site B</h2>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
+--------+         +-----------+         +----------------+
| Client | -----> | DNS Server| ----->  | IP of Site A   |
+--------+         +-----------+         +----------------+
      |                  |
      | GET http://siteA.com/page1
      v
+-------------------+
| Web Server (A)    |
| Serves HTML Page  |
+-------------------+

--------------------------

+--------+         +-----------+         +----------------+
| Client | -----> | DNS Server| ----->  | IP of Site B   |
+--------+         +-----------+         +----------------+
      |                  |
      | POST http://siteB.com/form
      v
+-------------------+
| Web Server (B)    |
| Stores form data  |
+-------------------+
`}
          </pre>
        </div>

        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/protocols-application-layer/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default ApplicationLayerProtocols;

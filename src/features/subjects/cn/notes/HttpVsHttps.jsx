import React from "react";
import "../../../../CSS/CN.css";

function HttpVsHttps() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">HTTP vs HTTPS</h1>

        {/* HTTP Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">What is HTTP?</h2>
          <p className="cn-example">
            <strong>HTTP (HyperText Transfer Protocol)</strong> is an application-layer protocol used to transfer hypermedia documents such as HTML between web browsers and servers.
          </p>
          <p className="cn-example">
            It works on a client-server model and uses TCP port 80 by default. It is **stateless**, **non-secure**, and vulnerable to man-in-the-middle attacks as the data is transferred in **plain text**.
          </p>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Example:
URL: http://example.com

Request (GET):
GET / HTTP/1.1
Host: example.com

Response:
HTTP/1.1 200 OK
Content-Type: text/html
<html>...</html>
`}
          </pre>
        </div>

        {/* HTTPS Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">What is HTTPS?</h2>
          <p className="cn-example">
            <strong>HTTPS (HyperText Transfer Protocol Secure)</strong> is the secure version of HTTP. It uses **SSL/TLS** encryption to protect the data sent between the client and server.
          </p>
          <p className="cn-example">
            It operates over TCP port 443 and ensures confidentiality, integrity, and authentication of data using digital certificates issued by Certificate Authorities (CAs).
          </p>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Example:
URL: https://example.com

Before communication:
- SSL handshake occurs
- Public key exchange
- Session key generated

After that:
All communication is encrypted
`}
          </pre>
        </div>

        {/* Comparison Table */}
        <div className="cn-section">
          <h2 className="cn-subtitle">HTTP vs HTTPS: Comparison Table</h2>
          <table className="cn-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>HTTP</th>
                <th>HTTPS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Full Form</td>
                <td>HyperText Transfer Protocol</td>
                <td>HyperText Transfer Protocol Secure</td>
              </tr>
              <tr>
                <td>Security</td>
                <td>Not secure</td>
                <td>Secure with SSL/TLS encryption</td>
              </tr>
              <tr>
                <td>Port</td>
                <td>80</td>
                <td>443</td>
              </tr>
              <tr>
                <td>Data Transmission</td>
                <td>Plain text (can be intercepted)</td>
                <td>Encrypted (cannot be read easily)</td>
              </tr>
              <tr>
                <td>SSL Certificate</td>
                <td>Not required</td>
                <td>Required (issued by CA)</td>
              </tr>
              <tr>
                <td>Website Trust</td>
                <td>No padlock icon in browser</td>
                <td>Displays padlock icon</td>
              </tr>
              <tr>
                <td>Used In</td>
                <td>Informational or test sites</td>
                <td>Banking, e-commerce, login systems</td>
              </tr>
              <tr>
                <td>Authentication</td>
                <td>No identity verification</td>
                <td>Verified via certificate</td>
              </tr>
              <tr>
                <td>Performance</td>
                <td>Slightly faster (no encryption overhead)</td>
                <td>Slightly slower (due to encryption handshake)</td>
              </tr>
              <tr>
                <td>SEO</td>
                <td>Not prioritized by search engines</td>
                <td>Favored by search engines (Google)</td>
              </tr>
            </tbody>
          </table>
        </div>


        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/difference-between-http-and-https-2/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default HttpVsHttps;

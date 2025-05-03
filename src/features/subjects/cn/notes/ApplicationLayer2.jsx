import React from "react";
import "../../../../CSS/CN.css";

import Ftp from "./applicationlayer/Ftp"

function ApplicationLayer2() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Application Layer:</h1>
        <div className="cn-section">
          <h2 className="cn-subtitle">Principles of Network Applications</h2>

          <p className="cn-example">
            Network applications are programs that run on different devices
            across a network and communicate with each other. They are essential
            for enabling distributed services such as email, file sharing,
            messaging, video streaming, and web browsing. The design and
            operation of these applications are governed by fundamental
            principles to ensure seamless communication, efficiency, and
            scalability.
          </p>

          <h2 className="cn-subtitle">
            1. Client-Server vs. Peer-to-Peer Models
          </h2>
          <ul className="cn-example">
            <li>
              <strong>Client-Server Model:</strong> A centralized model where
              the server provides services and clients make requests. Example:
              Web servers, email servers.
            </li>
            <li>
              <strong>Peer-to-Peer (P2P) Model:</strong> A decentralized model
              where each node can act as both client and server. Example:
              BitTorrent, Skype.
            </li>
          </ul>

          <h2 className="cn-subtitle">2. Application Layer Protocols</h2>
          <p className="cn-example">
            Applications communicate using specific **application-layer
            protocols** that define:
            <ul className="cn-example">
              <li>Message formats (syntax)</li>
              <li>Rules for message exchange (semantics)</li>
              <li>Transport mechanism (usually TCP or UDP)</li>
            </ul>
            Examples: HTTP, FTP, SMTP, DNS.
          </p>

          <h2 className="cn-subtitle">
            3. Transport Layer Services Used by Applications
          </h2>
          <ul className="cn-example">
            <li>
              <strong>Reliable Data Transfer:</strong> Ensures data is delivered
              error-free and in order (e.g., TCP).
            </li>
            <li>
              <strong>Unreliable Data Transfer:</strong> Faster, but with no
              guarantee of delivery or order (e.g., UDP).
            </li>
            <li>
              <strong>Throughput:</strong> Amount of data transferred per
              second. Applications like video streaming require high throughput.
            </li>
            <li>
              <strong>Latency:</strong> Time delay in data delivery. Important
              for real-time applications like gaming and VoIP.
            </li>
          </ul>

          <h2 className="cn-subtitle">4. Application Development Approaches</h2>
          <ul className="cn-example">
            <li>
              <strong>Socket Programming:</strong> A way to build custom network
              applications using APIs provided by the OS (e.g., BSD sockets).
            </li>
            <li>
              <strong>Web-Based Applications:</strong> Applications that use
              HTTP/HTTPS and run over web browsers (e.g., Gmail, YouTube).
            </li>
            <li>
              <strong>Cloud-Based Applications:</strong> Hosted in data centers,
              accessible via the internet, offering scalability and reliability
              (e.g., Google Docs, Dropbox).
            </li>
          </ul>

          <h2 className="cn-subtitle">5. Scalability and Concurrency</h2>
          <ul className="cn-example">
            <li>
              <strong>Scalability:</strong> Ability to handle increasing number
              of users or devices. Techniques include load balancing, CDN,
              caching.
            </li>
            <li>
              <strong>Concurrency:</strong> Handling multiple simultaneous
              client requests efficiently, often using threads, asynchronous
              processing, or event loops.
            </li>
          </ul>

          <h2 className="cn-subtitle">6. Naming and Addressing</h2>
          <p className="cn-example">
            Every network application needs a mechanism to identify and locate
            other devices and services:
            <ul className="cn-example">
              <li>
                <strong>Domain Name System (DNS):</strong> Maps human-readable
                domain names to IP addresses.
              </li>
              <li>
                <strong>IP Address:</strong> Uniquely identifies a host in the
                network.
              </li>
              <li>
                <strong>Port Numbers:</strong> Distinguish between multiple
                applications running on the same host.
              </li>
            </ul>
          </p>

          <h2 className="cn-subtitle">7. Security in Network Applications</h2>
          <ul className="cn-example">
            <li>
              <strong>Authentication:</strong> Ensures the identity of the user
              (e.g., username-password, OAuth).
            </li>
            <li>
              <strong>Confidentiality:</strong> Data encryption to prevent
              unauthorized access (e.g., TLS/SSL).
            </li>
            <li>
              <strong>Data Integrity:</strong> Ensures data is not tampered with
              during transmission (e.g., checksums, hashing).
            </li>
          </ul>

          <h2 className="cn-subtitle">
            Diagram: Client-Server vs Peer-to-Peer
          </h2>
          <pre>{`
     CLIENT-SERVER MODEL              PEER-TO-PEER MODEL

       Client                          Peer A <--> Peer B
         |                                 ^       |
         v                                 |       v
       Server <--> Database           Peer C <--> Peer D
  `}</pre>

          <h2 className="cn-subtitle">Conclusion</h2>
          <p className="cn-example">
            Designing network applications involves careful consideration of
            architecture, protocol, performance requirements, scalability, and
            security. Understanding these foundational principles allows
            developers and network engineers to build efficient and robust
            applications for a wide variety of use cases.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              className="allBtn"
              onClick={() =>
                window.open(
                  "https://www.geeksforgeeks.org/client-server-model/"
                )
              }
            >
              Client-Server
            </button>
            <button
              className="allBtn"
              onClick={() =>
                window.open(
                  "https://www.geeksforgeeks.org/socket-programming-in-java/"
                )
              }
            >
              Socket Programming
            </button>
            <button
              className="allBtn"
              onClick={() =>
                window.open(
                  "https://www.cloudflare.com/learning/dns/what-is-dns/"
                )
              }
            >
              DNS
            </button>
            <button
              className="allBtn"
              onClick={() =>
                window.open("https://developer.mozilla.org/en-US/docs/Web/HTTP")
              }
            >
              HTTP Protocol
            </button>
            <button
              className="allBtn"
              onClick={() =>
                window.open(
                  "https://www.geeksforgeeks.org/transport-layer-in-osi-model/"
                )
              }
            >
              Transport Layer
            </button>
          </div>
        </div>
        <div className="cn-section">
          <h2 className="cn-subtitle">
            The Web and HTTP (Hypertext Transfer Protocol)
          </h2>

          <p className="cn-example">
            The World Wide Web (WWW), often simply referred to as "the Web," is
            a vast collection of interconnected documents and other resources,
            linked by hyperlinks and URLs, and accessible via the Internet. At
            the heart of the Web is HTTP – the protocol used for transferring
            web pages and other content between web servers and clients (usually
            browsers).
          </p>

          <h2 className="cn-subtitle">1. Components of the Web</h2>
          <ul className="cn-example">
            <li>
              <strong>Web Browser:</strong> A client application that sends HTTP
              requests and displays web content (e.g., Chrome, Firefox).
            </li>
            <li>
              <strong>Web Server:</strong> A server application that processes
              HTTP requests and serves HTML, CSS, JS, or other content (e.g.,
              Apache, Nginx).
            </li>
            <li>
              <strong>URL (Uniform Resource Locator):</strong> The address of a
              web resource (e.g., https://example.com).
            </li>
            <li>
              <strong>Web Page:</strong> The actual content retrieved from a
              URL, typically written in HTML.
            </li>
          </ul>

          <h2 className="cn-subtitle">2. Introduction to HTTP</h2>
          <p className="cn-example">
            HTTP is a **stateless**, **application-layer protocol** that
            operates over TCP. It defines how messages are formatted and
            transmitted, and how web servers and browsers should respond to
            various commands.
          </p>

          <h2 className="cn-subtitle">3. HTTP Request/Response Model</h2>
          <ul className="cn-example">
            <li>
              <strong>Request:</strong> Sent from client to server, includes
              method (GET, POST, PUT, DELETE), headers, and optional body.
            </li>
            <li>
              <strong>Response:</strong> Sent from server to client, includes
              status code (e.g., 200 OK, 404 Not Found), headers, and body (the
              content).
            </li>
          </ul>

          <h2 className="cn-subtitle">4. HTTP Methods</h2>
          <ul className="cn-example">
            <li>
              <strong>GET:</strong> Requests data from a resource (read).
            </li>
            <li>
              <strong>POST:</strong> Sends data to the server (create).
            </li>
            <li>
              <strong>PUT:</strong> Updates a resource.
            </li>
            <li>
              <strong>DELETE:</strong> Deletes a resource.
            </li>
            <li>
              <strong>HEAD:</strong> Same as GET but without body, used for
              metadata.
            </li>
          </ul>

          <h2 className="cn-subtitle">5. HTTP Status Codes</h2>
          <ul className="cn-example">
            <li>
              <strong>1xx:</strong> allrmational (e.g., 100 Continue)
            </li>
            <li>
              <strong>2xx:</strong> Success (e.g., 200 OK, 201 Created)
            </li>
            <li>
              <strong>3xx:</strong> Redirection (e.g., 301 Moved Permanently)
            </li>
            <li>
              <strong>4xx:</strong> Client Error (e.g., 404 Not Found, 403
              Forbidden)
            </li>
            <li>
              <strong>5xx:</strong> Server Error (e.g., 500 Internal Server
              Error)
            </li>
          </ul>

          <h2 className="cn-subtitle">6. Statelessness in HTTP</h2>
          <p className="cn-example">
            HTTP is inherently stateless – it does not retain allrmation between
            requests. To maintain sessions (e.g., login state), technologies
            like **cookies**, **sessions**, and **tokens** are used.
          </p>

          <h2 className="cn-subtitle">7. HTTPS – Secure HTTP</h2>
          <p className="cn-example">
            HTTPS (Hypertext Transfer Protocol Secure) is HTTP layered over
            SSL/TLS to provide secure communication. It ensures:
            <ul className="cn-example">
              <li>
                <strong>Encryption:</strong> Protects data from eavesdropping.
              </li>
              <li>
                <strong>Authentication:</strong> Confirms server identity via
                certificates.
              </li>
              <li>
                <strong>Data Integrity:</strong> Prevents modification in
                transit.
              </li>
            </ul>
          </p>

          <h2 className="cn-subtitle">
            8. Web Architecture: Client-Server Interaction
          </h2>
          <p className="cn-example">
            The Web follows a **client-server architecture**, where:
            <ul className="cn-example">
              <li>
                The client initiates communication and requests services/data.
              </li>
              <li>The server responds with the requested resources.</li>
            </ul>
          </p>

          <h2 className="cn-subtitle">9. Cookies, Sessions, and Caching</h2>
          <ul className="cn-example">
            <li>
              <strong>Cookies:</strong> Small pieces of data stored in the
              client’s browser for state tracking.
            </li>
            <li>
              <strong>Sessions:</strong> Server-side storage of user state data
              (often linked via cookie ID).
            </li>
            <li>
              <strong>Caching:</strong> Storing data locally to reduce server
              load and speed up response (uses HTTP headers like ETag,
              Cache-Control).
            </li>
          </ul>

          <h2 className="cn-subtitle">10. Modern Enhancements to HTTP</h2>
          <ul className="cn-example">
            <li>
              <strong>HTTP/2:</strong> Supports multiplexing, header
              compression, better performance.
            </li>
            <li>
              <strong>HTTP/3:</strong> Uses QUIC (UDP-based) for faster
              connection establishment and improved speed.
            </li>
          </ul>

          <h2 className="cn-subtitle">Diagram: Web Communication using HTTP</h2>
          <pre>{`
   [Web Browser] --HTTP Request--> [Web Server]
        |                               |
        <--HTTP Response--            |
     (HTML, CSS, JS)                [Database]
  `}</pre>

          <div className=" flex flex-wrap gap-3" style={{ marginTop: "10px" }}>
            <button
              className="allBtn"
              onClick={() =>
                window.open(
                  "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"
                )
              }
            >
              MDN - HTTP
            </button>
            <button
              className="allBtn"
              onClick={() =>
                window.open(
                  "https://www.cloudflare.com/learning/ddos/glossary/hypertext-transfer-protocol-http/"
                )
              }
            >
              Cloudflare - HTTP Explained
            </button>
            <button
              className="allBtn"
              onClick={() =>
                window.open(
                  "https://www.geeksforgeeks.org/http-vs-https-difference/"
                )
              }
            >
              HTTP vs HTTPS
            </button>
            <button
              className="allBtn"
              onClick={() =>
                window.open(
                  "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
                )
              }
            >
              HTTP Status Codes
            </button>
            <button
              className="allBtn"
              onClick={() =>
                window.open(
                  "https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"
                )
              }
            >
              Cookies in HTTP
            </button>
          </div>
        </div>
              <Ftp/>
      </div>
    </div>
  );
}

export default ApplicationLayer2;

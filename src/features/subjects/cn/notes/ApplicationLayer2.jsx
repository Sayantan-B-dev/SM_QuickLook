import React from "react";
import "../../../../CSS/CN.css";

function ApplicationLayer2() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Application Layer:</h1>
        <div className="cn-section">
  <h2 className="cn-subtitle">Principles of Network Applications</h2>

  <p className="cn-example">
    Network applications are programs that run on different devices across a network and communicate with each other. They are essential for enabling distributed services such as email, file sharing, messaging, video streaming, and web browsing. The design and operation of these applications are governed by fundamental principles to ensure seamless communication, efficiency, and scalability.
  </p>

  <h2 className="cn-subtitle">1. Client-Server vs. Peer-to-Peer Models</h2>
  <ul className="cn-example">
    <li><strong>Client-Server Model:</strong> A centralized model where the server provides services and clients make requests. Example: Web servers, email servers.</li>
    <li><strong>Peer-to-Peer (P2P) Model:</strong> A decentralized model where each node can act as both client and server. Example: BitTorrent, Skype.</li>
  </ul>

  <h2 className="cn-subtitle">2. Application Layer Protocols</h2>
  <p className="cn-example">
    Applications communicate using specific **application-layer protocols** that define:
    <ul className="cn-example">
      <li>Message formats (syntax)</li>
      <li>Rules for message exchange (semantics)</li>
      <li>Transport mechanism (usually TCP or UDP)</li>
    </ul>
    Examples: HTTP, FTP, SMTP, DNS.
  </p>

  <h2 className="cn-subtitle">3. Transport Layer Services Used by Applications</h2>
  <ul className="cn-example">
    <li><strong>Reliable Data Transfer:</strong> Ensures data is delivered error-free and in order (e.g., TCP).</li>
    <li><strong>Unreliable Data Transfer:</strong> Faster, but with no guarantee of delivery or order (e.g., UDP).</li>
    <li><strong>Throughput:</strong> Amount of data transferred per second. Applications like video streaming require high throughput.</li>
    <li><strong>Latency:</strong> Time delay in data delivery. Important for real-time applications like gaming and VoIP.</li>
  </ul>

  <h2 className="cn-subtitle">4. Application Development Approaches</h2>
  <ul className="cn-example">
    <li><strong>Socket Programming:</strong> A way to build custom network applications using APIs provided by the OS (e.g., BSD sockets).</li>
    <li><strong>Web-Based Applications:</strong> Applications that use HTTP/HTTPS and run over web browsers (e.g., Gmail, YouTube).</li>
    <li><strong>Cloud-Based Applications:</strong> Hosted in data centers, accessible via the internet, offering scalability and reliability (e.g., Google Docs, Dropbox).</li>
  </ul>

  <h2 className="cn-subtitle">5. Scalability and Concurrency</h2>
  <ul className="cn-example">
    <li><strong>Scalability:</strong> Ability to handle increasing number of users or devices. Techniques include load balancing, CDN, caching.</li>
    <li><strong>Concurrency:</strong> Handling multiple simultaneous client requests efficiently, often using threads, asynchronous processing, or event loops.</li>
  </ul>

  <h2 className="cn-subtitle">6. Naming and Addressing</h2>
  <p className="cn-example">
    Every network application needs a mechanism to identify and locate other devices and services:
    <ul className="cn-example">
      <li><strong>Domain Name System (DNS):</strong> Maps human-readable domain names to IP addresses.</li>
      <li><strong>IP Address:</strong> Uniquely identifies a host in the network.</li>
      <li><strong>Port Numbers:</strong> Distinguish between multiple applications running on the same host.</li>
    </ul>
  </p>

  <h2 className="cn-subtitle">7. Security in Network Applications</h2>
  <ul className="cn-example">
    <li><strong>Authentication:</strong> Ensures the identity of the user (e.g., username-password, OAuth).</li>
    <li><strong>Confidentiality:</strong> Data encryption to prevent unauthorized access (e.g., TLS/SSL).</li>
    <li><strong>Data Integrity:</strong> Ensures data is not tampered with during transmission (e.g., checksums, hashing).</li>
  </ul>

  <h2 className="cn-subtitle">Diagram: Client-Server vs Peer-to-Peer</h2>
  <pre>{`
     CLIENT-SERVER MODEL              PEER-TO-PEER MODEL

       Client                          Peer A <--> Peer B
         |                                 ^       |
         v                                 |       v
       Server <--> Database           Peer C <--> Peer D
  `}</pre>

  <h2 className="cn-subtitle">Conclusion</h2>
  <p className="cn-example">
    Designing network applications involves careful consideration of architecture, protocol, performance requirements, scalability, and security. Understanding these foundational principles allows developers and network engineers to build efficient and robust applications for a wide variety of use cases.
  </p>

  <div className="mt-4 flex flex-wrap gap-3">
    <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/client-server-model/")}>Client-Server</button>
    <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/socket-programming-in-java/")}>Socket Programming</button>
    <button className="infoBtn" onClick={() => window.open("https://www.cloudflare.com/learning/dns/what-is-dns/")}>DNS</button>
    <button className="infoBtn" onClick={() => window.open("https://developer.mozilla.org/en-US/docs/Web/HTTP")}>HTTP Protocol</button>
    <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/transport-layer-in-computer-network/")}>Transport Layer</button>
  </div>
</div>


      </div>
    </div>
  );
}

export default ApplicationLayer2;

import React from "react";
import "../../../../CSS/CN.css";


function ApplicationLayer2() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Application Layer:</h1>
        <div className="cn-section">
          <h2 className="cn-subtitle">Principles of Network Applications</h2>

          <div className="cn-example">
            Network applications are programs that run on different devices
            across a network and communicate with each other. They are essential
            for enabling distributed services such as email, file sharing,
            messaging, video streaming, and web browsing. The design and
            operation of these applications are governed by fundamental
            principles to ensure seamless communication, efficiency, and
            scalability.
          </div>

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
          <div className="cn-example">
            Applications communicate using specific **application-layer
            protocols** that define:</div>
            <ul className="cn-example">
              <li>Message formats (syntax)</li>
              <li>Rules for message exchange (semantics)</li>
              <li>Transport mechanism (usually TCP or UDP)</li>
            </ul><div className="cn-example">
            Examples: HTTP, FTP, SMTP, DNS.
          </div>

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
          <div className="cn-example">
            Every network application needs a mechanism to identify and locate
            other devices and services:</div>
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
          <divre>{`
     CLIENT-SERVER MODEL              PEER-TO-PEER MODEL

       Client                          Peer A <--> Peer B
         |                                 ^       |
         v                                 |       v
       Server <--> Database           Peer C <--> Peer D
  `}</divre>

          <h2 className="cn-subtitle">Conclusion</h2>
          <div className="cn-example">
            Designing network applications involves careful consideration of
            architecture, protocol, performance requirements, scalability, and
            security. Understanding these foundational principles allows
            developers and network engineers to build efficient and robust
            applications for a wide variety of use cases.
          </div>

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

          <div className="cn-example">
            The World Wide Web (WWW), often simply referred to as "the Web," is
            a vast collection of interconnected documents and other resources,
            linked by hyperlinks and URLs, and accessible via the Internet. At
            the heart of the Web is HTTP – the protocol used for transferring
            web pages and other content between web servers and clients (usually
            browsers).
          </div>

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
          <div className="cn-example">
            HTTP is a **stateless**, **application-layer protocol** that
            operates over TCP. It defines how messages are formatted and
            transmitted, and how web servers and browsers should respond to
            various commands.
          </div>

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
          <div className="cn-example">
            HTTP is inherently stateless – it does not retain allrmation between
            requests. To maintain sessions (e.g., login state), technologies
            like **cookies**, **sessions**, and **tokens** are used.
          </div>

          <h2 className="cn-subtitle">7. HTTPS – Secure HTTP</h2>
          <div className="cn-example">
            HTTPS (Hypertext Transfer Protocol Secure) is HTTP layered over
            SSL/TLS to provide secure communication. It ensures:</div>
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
          

          <h2 className="cn-subtitle">
            8. Web Architecture: Client-Server Interaction
          </h2>
          <div className="cn-example">
            The Web follows a **client-server architecture**, where: </div>
            <ul className="cn-example">
              <li>
                The client initiates communication and requests services/data.
              </li>
              <li>The server responds with the requested resources.</li>
            </ul>
         

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
          <divre>{`
   [Web Browser] --HTTP Request--> [Web Server]
        |                               |
        <--HTTP Response--            |
     (HTML, CSS, JS)                [Database]
  `}</divre>

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

        <div className="cn-section">
  <h2 className="cn-subtitle">File Transfer Protocol (FTP)</h2>

  <div className="cn-example">
    FTP (File Transfer Protocol) is a standard network protocol used to transfer files between a client and a server over a TCP-based network such as the Internet. It enables the uploading, downloading, renaming, deleting, and organizing of files on a remote server.
  </div>

  <h2 className="cn-subtitle">1. Working Principle of FTP</h2>
  <div className="cn-example">
    FTP follows the client-server model and operates using two separate channels:</div>
    <ul className="cn-example">
      <li><strong>Control Connection (Port 21):</strong> Used for sending commands and responses.</li>
      <li><strong>Data Connection (Port 20 or passive port):</strong> Used for actual data transfer (files, directories).</li>
    </ul><div className="cn-example">
    The client initiates the control connection and sends FTP commands, while the server responds accordingly. A separate data connection is then established for file transfers.
  </div>

  <h2 className="cn-subtitle">2. Modes of FTP</h2>
  <ul className="cn-example">
    <li><strong>Active Mode:</strong> The client opens a port and waits for the server to connect for data transfer. The server initiates the connection to the client.</li>
    <li><strong>Passive Mode:</strong> The server opens a random port and informs the client to initiate the data connection. This mode is firewall/NAT friendly.</li>
  </ul>

  <h2 className="cn-subtitle">3. Common FTP Commands</h2>
  <ul className="cn-example">
    <li><strong>USER:</strong> Sends the username.</li>
    <li><strong>PASS:</strong> Sends the password.</li>
    <li><strong>LIST:</strong> Lists files/directories.</li>
    <li><strong>RETR:</strong> Retrieves a file.</li>
    <li><strong>STOR:</strong> Uploads a file to the server.</li>
    <li><strong>DELE:</strong> Deletes a file.</li>
    <li><strong>QUIT:</strong> Ends the session.</li>
  </ul>

  <h2 className="cn-subtitle">4. Authentication</h2>
  <div className="cn-example">
    FTP supports both anonymous and authenticated access:</div>
    <ul className="cn-example">
      <li><strong>Anonymous FTP:</strong> Allows access to public files without a username or password.</li>
      <li><strong>Authenticated FTP:</strong> Requires a valid username and password for access.</li>
    </ul>
  

  <h2 className="cn-subtitle">5. Security Concerns</h2>
  <div className="cn-example">
    FTP is not secure by default. Data and credentials are transmitted in plain text, making it vulnerable to packet sniffing and man-in-the-middle attacks. Secure alternatives include:</div>
    <ul className="cn-example">
      <li><strong>FTPS:</strong> FTP over SSL/TLS for encryption.</li>
      <li><strong>SFTP:</strong> SSH File Transfer Protocol (a completely different protocol based on SSH).</li>
    </ul>
  

  <h2 className="cn-subtitle">6. Use Cases of FTP</h2>
  <ul className="cn-example">
    <li>Website file management and deployment.</li>
    <li>Backup and archival of documents on remote servers.</li>
    <li>Bulk file transfers between enterprise systems.</li>
  </ul>

  <h2 className="cn-subtitle">7. Diagram: FTP Architecture</h2>
  <divre>{`
        +---------------------+            +----------------------+
        |      FTP Client     |            |      FTP Server      |
        +---------------------+            +----------------------+
        |                     |            |                      |
        | Control Connection  | <--------> |     Port 21 (Ctrl)   |
        |     (TCP)           |            |                      |
        |                     |            |                      |
        | Data Connection     | <--------> |     Port 20 or PASV  |
        |     (TCP)           |            |                      |
        +---------------------+            +----------------------+
  `}</divre>

  <h2 className="cn-subtitle">8. Advantages of FTP</h2>
  <ul className="cn-example">
    <li>Efficient for large file transfers.</li>
    <li>Supports batch transfers and resume functionality.</li>
    <li>Widely supported and simple to use with GUI/CLI tools.</li>
  </ul>

  <h2 className="cn-subtitle">9. Disadvantages of FTP</h2>
  <ul className="cn-example">
    <li>Lacks encryption by default – insecure for sensitive data.</li>
    <li>Complicated firewall configurations for active mode.</li>
    <li>Requires dedicated server setup and user management.</li>
  </ul>

  <div className="mt-4 flex flex-wrap gap-3">
    <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/file-transfer-protocol-ftp/")}>FTP - GFG</button>
    <button className="infoBtn" onClick={() => window.open("https://developer.mozilla.org/en-US/docs/Glossary/FTP")}>MDN - FTP Glossary</button>
    <button className="infoBtn" onClick={() => window.open("https://www.cloudflare.com/learning/ddos/glossary/file-transfer-protocol-ftp/")}>Cloudflare - FTP</button>
    <button className="infoBtn" onClick={() => window.open("https://www.ibm.com/docs/en/i/7.4?topic=overview-ftp-file-transfer-protocol")}>IBM - FTP Overview</button>
    <button className="infoBtn" onClick={() => window.open("https://www.ssh.com/academy/ftp")}>Secure FTP (SFTP/FTPS)</button>
  </div>
</div>
<div className="cn-section">
  <h2 className="cn-subtitle">Electronic Mail in the Internet</h2>

  <h3 className="cn-subtitle">SMTP (Simple Mail Transfer Protocol)</h3>
  <div className="cn-example">
    SMTP is the standard protocol used for sending emails over the internet. It operates on the application layer of the OSI model and is responsible for the transmission of email messages between servers.
    <br />
    Key features of SMTP:
    <ul>
      <li>Works with the TCP protocol, typically using port 25.</li>
      <li>SMTP is a push protocol, meaning the sending server pushes the message to the receiving server.</li>
      <li>Only handles sending emails, not retrieving them.</li>
    </ul>
  </div>

  <h3 className="cn-subtitle">Comparison with HTTP</h3>
  <div className="cn-example">
    SMTP and HTTP are both application layer protocols, but they serve different purposes:
    <br />
    <table className="cn-table">
      <thead>
        <tr>
          <th>Protocol</th>
          <th>Purpose</th>
          <th>Port</th>
          <th>Request/Response Model</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>SMTP</td>
          <td>Sending email</td>
          <td>25 (or 587 for secure connections)</td>
          <td>Push model (sending server pushes to receiving server)</td>
        </tr>
        <tr>
          <td>HTTP</td>
          <td>Web browsing (retrieving web pages)</td>
          <td>80 (or 443 for secure connections)</td>
          <td>Request/Response model (client requests, server responds)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 className="cn-subtitle">Mail Message Format</h3>
  <div className="cn-example">
    An email message typically consists of the following parts:
    <ul>
      <li><strong>Header:</strong> Contains metadata such as the sender, recipient, subject, and timestamps.</li>
      <li><strong>Body:</strong> Contains the content of the email message, which can include text, HTML, or even rich media.</li>
      <li><strong>Attachments:</strong> Files or media that are sent along with the email.</li>
    </ul>
    Example of a basic email header:
    <pre>
      From: sender@example.com
      To: recipient@example.com
      Subject: Meeting Reminder
      Date: Mon, 25 May 2025 12:30:00 GMT
    </pre>
  </div>

  <h3 className="cn-subtitle">Mail Access Protocols</h3>
  <div className="cn-example">
    Mail access protocols are used to retrieve emails from a server. The most commonly used mail access protocols are:
    <ul>
      <li><strong>POP3 (Post Office Protocol v3):</strong> Retrieves email messages from a mail server and typically deletes them from the server after download.</li>
      <li><strong>IMAP (Internet Message Access Protocol):</strong> Allows for email messages to be viewed and stored on the server, allowing for easier access from multiple devices.</li>
      <li><strong>Exchange ActiveSync:</strong> A protocol that enables synchronization of email, calendar, and contacts with mobile devices.</li>
    </ul>
    <table className="cn-table">
      <thead>
        <tr>
          <th>Protocol</th>
          <th>Port</th>
          <th>Key Feature</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>POP3</td>
          <td>110 (or 995 for secure connections)</td>
          <td>Downloads emails and typically removes them from the server.</td>
        </tr>
        <tr>
          <td>IMAP</td>
          <td>143 (or 993 for secure connections)</td>
          <td>Allows multiple devices to access and sync emails without removing them from the server.</td>
        </tr>
        <tr>
          <td>Exchange ActiveSync</td>
          <td>443</td>
          <td>Syncs emails, calendar, and contacts across mobile devices.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
<div className="cn-section">
  <h2 className="cn-subtitle">DNS (Domain Name System)</h2>

  <h3 className="cn-subtitle">Overview of DNS</h3>
  <div className="cn-example">
    DNS is a hierarchical and decentralized naming system used to translate human-readable domain names (such as www.example.com) into IP addresses (like 192.168.1.1) that computers use to communicate over the internet. It acts like a phonebook for the internet, mapping domain names to their corresponding IP addresses.
    <br />
    DNS allows users to access websites and services without needing to memorize IP addresses.
  </div>

  <h3 className="cn-subtitle">How DNS Works</h3>
  <div className="cn-example">
    The process of DNS resolution involves several steps:
    <ol>
      <li>The user enters a domain name (e.g., www.example.com) into a browser.</li>
      <li>The browser checks if the domain name is already cached locally or in the operating system’s DNS cache.</li>
      <li>If not cached, the browser sends a query to the DNS resolver (usually provided by the ISP) to resolve the domain name.</li>
      <li>The DNS resolver queries a root DNS server to determine which Top-Level Domain (TLD) server is responsible for the domain.</li>
      <li>The query is passed down to the relevant TLD server (for example, .com or .org), which directs it to the authoritative DNS server for the domain.</li>
      <li>The authoritative DNS server responds with the IP address of the requested domain, and the resolver sends it back to the browser.</li>
      <li>The browser uses the IP address to connect to the website and display the requested content.</li>
    </ol>
  </div>

  <h3 className="cn-subtitle">Types of DNS Records</h3>
  <div className="cn-example">
    DNS records contain various types of information. Common DNS record types include:
    <ul>
      <li><strong>A Record (Address Record):</strong> Maps a domain name to an IPv4 address.</li>
      <li><strong>AAAA Record:</strong> Maps a domain name to an IPv6 address.</li>
      <li><strong>CNAME Record (Canonical Name Record):</strong> Maps an alias domain name to the canonical (true) domain name.</li>
      <li><strong>MX Record (Mail Exchange Record):</strong> Specifies the mail servers for the domain and their priorities.</li>
      <li><strong>NS Record (Name Server Record):</strong> Defines the DNS servers for the domain.</li>
      <li><strong>PTR Record (Pointer Record):</strong> Maps an IP address to a domain name (reverse DNS lookup).</li>
    </ul>
    Example of an A Record:
    <pre>
      example.com.    IN    A    192.168.1.1
    </pre>
  </div>

  <h3 className="cn-subtitle">DNS Caching</h3>
  <div className="cn-example">
    DNS caching is used to store DNS query results locally to speed up subsequent requests for the same domain. This reduces the need for repeated DNS lookups and decreases overall internet latency.
    <br />
    <strong>Cache Time-to-Live (TTL):</strong> Each DNS record has a TTL value, which specifies how long it should be cached before the cache expires and a new query is made to the authoritative DNS server.
    <br />
    Example:
    <pre>
      example.com.    IN    A    192.168.1.1    TTL=3600
    </pre>
    This means the A record for example.com should be cached for 1 hour (3600 seconds).
  </div>

  <h3 className="cn-subtitle">DNS Security</h3>
  <div className="cn-example">
    DNS is vulnerable to attacks such as DNS spoofing, where attackers provide false DNS responses to redirect traffic to malicious sites.
    <br />
    To mitigate these risks, DNSSEC (DNS Security Extensions) is used to add a layer of security to DNS responses by digitally signing them to verify their authenticity.
    <br />
    DNSSEC helps prevent:
    <ul>
      <li>Cache poisoning</li>
      <li>Man-in-the-middle attacks</li>
      <li>Domain hijacking</li>
    </ul>
  </div>

  <h3 className="cn-subtitle">DNS Query Types</h3>
  <div className="cn-example">
    There are several types of DNS queries:
    <ul>
      <li><strong>Recursive Query:</strong> The DNS resolver performs all the steps necessary to resolve the domain name and returns the final result to the client.</li>
      <li><strong>Iterative Query:</strong> The DNS resolver may return a referral to the next DNS server if it doesn’t have the answer, leaving the client to continue the query.</li>
      <li><strong>Non-Recursive Query:</strong> The client queries a DNS server that can return an answer without needing further lookups.</li>
    </ul>
  </div>

  <h3 className="cn-subtitle">DNS Diagram</h3>
  <pre>{`
    Root DNS Server
         |
    TLD DNS Server (e.g., .com, .org)
         |
    Authoritative DNS Server (e.g., example.com)
         |
    User's DNS Resolver
         |
    User's Browser (e.g., Google Chrome)`}
  </pre>
</div>
<div className="cn-section">
  <h2 className="cn-subtitle">Peer-to-Peer Applications</h2>

  <h3 className="cn-subtitle">Overview of Peer-to-Peer (P2P) Applications</h3>
  <div className="cn-example">
    Peer-to-Peer (P2P) applications involve the direct exchange of data between two or more devices (or peers) without the need for a central server. In a P2P network, each device acts as both a client and a server, allowing for efficient resource sharing.
    <br />
    P2P applications can be used for file sharing, communication, and distributed computing, among other uses. Some well-known examples of P2P applications include torrenting applications like BitTorrent, decentralized messaging apps like WhatsApp, and cryptocurrencies like Bitcoin.
  </div>

  <h3 className="cn-subtitle">P2P File Distribution</h3>
  <div className="cn-example">
    P2P file distribution is one of the most common and well-known uses of P2P technology. In this process, files are distributed across a network of peers rather than relying on a central server. This method is used in applications like file-sharing platforms (e.g., BitTorrent).
    <br />
    Key characteristics of P2P file distribution include:
    <ul>
      <li><strong>Decentralized Sharing:</strong> Files are distributed among peers who share their local copies with others.</li>
      <li><strong>Scalability:</strong> P2P systems can scale easily as more peers join the network, making it ideal for large-scale file distribution.</li>
      <li><strong>Redundancy:</strong> Since files are replicated across many peers, even if some peers leave the network, the file remains available from other peers.</li>
      <li><strong>Efficiency:</strong> The network becomes more efficient as more peers join, with each additional peer contributing bandwidth to the system.</li>
    </ul>
  </div>

  <h3 className="cn-subtitle">How P2P File Distribution Works</h3>
  <div className="cn-example">
    In a P2P file distribution system, the process typically works as follows:
    <ol>
      <li><strong>File Segmentation:</strong> Large files are split into smaller segments or pieces. Each peer only needs to download a part of the file, reducing the load on any single peer.</li>
      <li><strong>Peer Discovery:</strong> Peers use a tracker or a Distributed Hash Table (DHT) to find other peers who have parts of the file they want. The tracker helps peers discover each other and organize the sharing process.</li>
      <li><strong>Download and Upload:</strong> Peers download pieces of the file from other peers and, at the same time, upload pieces they already have to others. This increases the overall download speed and ensures redundancy.</li>
      <li><strong>File Reassembly:</strong> As a peer downloads all the pieces of the file, it can reassemble the file into its original form.</li>
    </ol>
    This process is what makes P2P file distribution so efficient and scalable.
  </div>

  <h3 className="cn-subtitle">Advantages of P2P File Distribution</h3>
  <div className="cn-example">
    Some of the key advantages of using P2P for file distribution include:
    <ul>
      <li><strong>Improved Speed:</strong> P2P file sharing allows peers to download parts of a file from multiple sources simultaneously, increasing overall speed.</li>
      <li><strong>Reduced Server Load:</strong> Since files are distributed across peers, there is less reliance on a central server, reducing the risk of server overload or failure.</li>
      <li><strong>Fault Tolerance:</strong> As files are distributed across many peers, the network is more resistant to failures. If a peer drops out, the file is still available from other peers.</li>
      <li><strong>Scalability:</strong> The P2P network can grow as more peers join, improving the overall efficiency of file distribution.</li>
    </ul>
  </div>

  <h3 className="cn-subtitle">Challenges in P2P File Distribution</h3>
  <div className="cn-example">
    While P2P file distribution has many advantages, there are also some challenges:
    <ul>
      <li><strong>Security:</strong> Since peers directly exchange files with each other, there are risks related to malware, virus infections, and malicious file sharing. Ensuring secure transfers is critical.</li>
      <li><strong>Legal Issues:</strong> P2P networks are often associated with piracy and illegal file sharing, as they can be used to distribute copyrighted material without permission.</li>
      <li><strong>Bandwidth Consumption:</strong> P2P networks require significant bandwidth, as each peer both downloads and uploads files. This can be a challenge for peers with limited bandwidth.</li>
      <li><strong>Peer Availability:</strong> The effectiveness of P2P file distribution depends on the number of peers available to share parts of the file. If few peers are online, download speeds can be slow.</li>
    </ul>
  </div>

  <h3 className="cn-subtitle">Popular P2P File Distribution Applications</h3>
  <div className="cn-example">
    Some well-known P2P file distribution applications include:
    <ul>
      <li><strong>BitTorrent:</strong> One of the most popular P2P file-sharing protocols. BitTorrent allows users to share large files efficiently by splitting them into smaller pieces and distributing them across multiple peers.</li>
      <li><strong>uTorrent:</strong> A lightweight BitTorrent client that is often used for downloading and sharing files using the BitTorrent protocol.</li>
      <li><strong>eMule:</strong> A P2P file-sharing application that uses the eDonkey and Kad networks for distributing files. It is known for its community-driven approach.</li>
    </ul>
  </div>

  <h3 className="cn-subtitle">P2P File Distribution Diagram</h3>
  <pre>{`
    Peer 1   Peer 2   Peer 3
     |         |         |
    [File 1]  [File 2]  [File 3]
      |         |         |
    Download from Peer 1
    Download from Peer 2
    Upload to Peer 3`}
  </pre>
</div>

      </div>
    </div>
  );
}

export default ApplicationLayer2;

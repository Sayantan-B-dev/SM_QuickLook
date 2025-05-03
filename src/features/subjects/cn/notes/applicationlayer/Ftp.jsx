import React from 'react'

function ftp() {
  return (
    <div className="cn-section">
  <h2 className="cn-subtitle">File Transfer Protocol (FTP)</h2>

  <p className="cn-example">
    FTP (File Transfer Protocol) is a standard network protocol used to transfer files between a client and a server over a TCP-based network such as the Internet. It enables the uploading, downloading, renaming, deleting, and organizing of files on a remote server.
  </p>

  <h2 className="cn-subtitle">1. Working Principle of FTP</h2>
  <p className="cn-example">
    FTP follows the client-server model and operates using two separate channels:
    <ul className="cn-example">
      <li><strong>Control Connection (Port 21):</strong> Used for sending commands and responses.</li>
      <li><strong>Data Connection (Port 20 or passive port):</strong> Used for actual data transfer (files, directories).</li>
    </ul>
    The client initiates the control connection and sends FTP commands, while the server responds accordingly. A separate data connection is then established for file transfers.
  </p>

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
  <p className="cn-example">
    FTP supports both anonymous and authenticated access:
    <ul className="cn-example">
      <li><strong>Anonymous FTP:</strong> Allows access to public files without a username or password.</li>
      <li><strong>Authenticated FTP:</strong> Requires a valid username and password for access.</li>
    </ul>
  </p>

  <h2 className="cn-subtitle">5. Security Concerns</h2>
  <p className="cn-example">
    FTP is not secure by default. Data and credentials are transmitted in plain text, making it vulnerable to packet sniffing and man-in-the-middle attacks. Secure alternatives include:
    <ul className="cn-example">
      <li><strong>FTPS:</strong> FTP over SSL/TLS for encryption.</li>
      <li><strong>SFTP:</strong> SSH File Transfer Protocol (a completely different protocol based on SSH).</li>
    </ul>
  </p>

  <h2 className="cn-subtitle">6. Use Cases of FTP</h2>
  <ul className="cn-example">
    <li>Website file management and deployment.</li>
    <li>Backup and archival of documents on remote servers.</li>
    <li>Bulk file transfers between enterprise systems.</li>
  </ul>

  <h2 className="cn-subtitle">7. Diagram: FTP Architecture</h2>
  <pre>{`
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
  `}</pre>

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

  )
}

export default ftp

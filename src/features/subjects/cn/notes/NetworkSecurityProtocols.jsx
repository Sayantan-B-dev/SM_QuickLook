import React from "react";
import "../../../../CSS/CN.css";

function NetworkSecurityProtocols() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Security Protocols: IPsec, SSH, SSL/TLS, AES, DES, RSA, DSA</h1>

        {/* IPsec Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">IPsec (Internet Protocol Security)</h2>
          <p className="cn-example">
            IPsec is a suite of protocols used to secure IP communications by authenticating and encrypting each IP packet. It operates at the network layer and is used in VPNs.
          </p>
          <ul className="cn-example">
            <li><strong>Use Case:</strong> Secure communication over public networks (VPNs)</li>
            <li><strong>Implementation:</strong> Transport and Tunnel modes</li>
            <li><strong>Protocols:</strong> AH (Authentication Header), ESP (Encapsulating Security Payload)</li>
            <li><strong>Features:</strong> Confidentiality, Integrity, Authentication</li>
          </ul>
        </div>

        {/* SSH Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">SSH (Secure Shell)</h2>
          <p className="cn-example">
            SSH is a protocol for securely accessing and managing remote systems over a network.
          </p>
          <ul className="cn-example">
            <li><strong>Use Case:</strong> Remote server access, file transfers (SCP, SFTP)</li>
            <li><strong>Implementation:</strong> Uses public-key cryptography and strong authentication</li>
            <li><strong>Port:</strong> 22</li>
            <li><strong>Features:</strong> Encrypted communication, secure login</li>
          </ul>
        </div>

        {/* SSL/TLS Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">SSL/TLS (Secure Sockets Layer / Transport Layer Security)</h2>
          <p className="cn-example">
            SSL (deprecated) and TLS are cryptographic protocols that provide secure communication over a computer network, widely used in HTTPS.
          </p>
          <ul className="cn-example">
            <li><strong>Use Case:</strong> Secure web browsing, email, VoIP</li>
            <li><strong>Implementation:</strong> Digital certificates, handshake protocols</li>
            <li><strong>Features:</strong> Encryption, Authentication, Integrity</li>
          </ul>
        </div>

        {/* AES Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">AES (Advanced Encryption Standard)</h2>
          <p className="cn-example">
            AES is a symmetric encryption algorithm used globally for securing data. It uses key sizes of 128, 192, or 256 bits.
          </p>
          <ul className="cn-example">
            <li><strong>Use Case:</strong> Encrypting files, communications, databases</li>
            <li><strong>Type:</strong> Symmetric block cipher</li>
            <li><strong>Features:</strong> Fast, secure, widely adopted</li>
          </ul>
        </div>

        {/* DES Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">DES (Data Encryption Standard)</h2>
          <p className="cn-example">
            DES is an older symmetric key algorithm using 56-bit keys, now considered insecure.
          </p>
          <ul className="cn-example">
            <li><strong>Use Case:</strong> Historical encryption applications</li>
            <li><strong>Features:</strong> Symmetric block cipher, easily breakable by brute-force today</li>
          </ul>
        </div>

        {/* RSA Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">RSA (Rivest–Shamir–Adleman)</h2>
          <p className="cn-example">
            RSA is a widely used asymmetric encryption algorithm for secure data transmission.
          </p>
          <ul className="cn-example">
            <li><strong>Use Case:</strong> Secure key exchange, digital signatures</li>
            <li><strong>Type:</strong> Asymmetric (public/private key pair)</li>
            <li><strong>Features:</strong> Strong encryption, used in SSL/TLS, digital certificates</li>
          </ul>
        </div>

        {/* DSA Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">DSA (Digital Signature Algorithm)</h2>
          <p className="cn-example">
            DSA is used for generating digital signatures to verify data authenticity.
          </p>
          <ul className="cn-example">
            <li><strong>Use Case:</strong> Verifying identity, digital signatures</li>
            <li><strong>Type:</strong> Asymmetric algorithm (used only for signatures, not encryption)</li>
            <li><strong>Features:</strong> Integrity, authenticity, faster than RSA for signing</li>
          </ul>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: Cryptographic Protocol Usage</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20241025162048581132/IPSec.png"
            alt="Cryptographic Usage Diagram"
          />
        </div>

        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/ip-security-ipsec/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default NetworkSecurityProtocols;

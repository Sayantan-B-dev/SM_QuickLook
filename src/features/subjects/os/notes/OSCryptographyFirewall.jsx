import React from "react";
import "../../../../CSS/OS.css";

function OSCryptographyFirewall() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Cryptography & Firewall in Operating System</h1>

        {/* Cryptography */}
        <div className="os-section">
          <h2 className="os-subtitle">1. What is Cryptography?</h2>
          <p className="os-example">
            <strong>Cryptography</strong> is the practice of securing communication and data from unauthorized access using encryption and decryption techniques. It's used in OS for secure login, data storage, and transmission.
          </p>
          <pre>{`
Key Terms:
- Plaintext: Original message
- Ciphertext: Encrypted message
- Encryption: Converting plaintext to ciphertext
- Decryption: Converting ciphertext back to plaintext
          `}</pre>
          <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/cryptography-and-its-types/")}>Know more</button>
        </div>

        {/* Symmetric Key */}
        <div className="os-section">
          <h2 className="os-subtitle">2. Symmetric Key Cryptography</h2>
          <p className="os-example">
            <strong>Symmetric Key Cryptography</strong> uses the **same key** for both encryption and decryption. It's fast but less secure if the key is intercepted.
          </p>
          <pre>{`
Example:
AES, DES, RC4
Usage:
Secure local file encryption, VPN
          `}</pre>
          <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/symmetric-key-cryptography/")}>Know more</button>
        </div>

        {/* Asymmetric Key */}
        <div className="os-section">
          <h2 className="os-subtitle">3. Asymmetric Key Cryptography</h2>
          <p className="os-example">
            <strong>Asymmetric Key Cryptography</strong> uses a pair of keys: **public key** (for encryption) and **private key** (for decryption). It's slower but secure.
          </p>
          <pre>{`
Example:
RSA, ECC
Usage:
Digital signatures, secure email, HTTPS
          `}</pre>
          <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/asymmetric-key-cryptography/")}>Know more</button>
        </div>

        {/* Firewall Overview */}
        <div className="os-section">
          <h2 className="os-subtitle">4. What is a Firewall?</h2>
          <p className="os-example">
            A <strong>Firewall</strong> is a network security device or software that monitors and filters incoming and outgoing traffic based on predefined rules.
          </p>
          <pre>{`
Purpose:
Block unauthorized access while allowing legitimate communication.
Firewall acts as a barrier between trusted (internal) and untrusted (external) networks.
          `}</pre>
          <button className="infoBtn" onClick={() => window.open("https://www.cisco.com/site/in/en/learn/topics/security/what-is-a-firewall.html#:~:text=A%20firewall%20is%20a%20network,based%20on%20preset%20security%20rules.")}>Know more</button>
        </div>

        {/* How Firewalls Work */}
        <div className="os-section">
          <h2 className="os-subtitle">5. How Firewalls Work</h2>
          <p className="os-example">
            Firewalls work by analyzing data packets based on IP address, port number, protocol, and content. They can allow, deny, or log traffic.
          </p>
          <pre>{`
Packet Filtering:
Block traffic from suspicious IPs or ports

Stateful Inspection:
Keeps track of active connections and decides what traffic to allow based on the state of the connection.
          `}</pre>
        </div>

        {/* Personal Firewall */}
        <div className="os-section">
          <h2 className="os-subtitle">6. Personal Firewall</h2>
          <p className="os-example">
            A <strong>Personal Firewall</strong> is a software installed on individual devices to protect against unauthorized access or malware. Common in antivirus packages.
          </p>
          <pre>{`
Monitors:
- Applications trying to access the internet
- Incoming unsolicited connections
          `}</pre>
          <button className="infoBtn" onClick={() => window.open("https://en.wikipedia.org/wiki/Personal_firewall")}>Know more</button>
        </div>

        {/* Application Proxy Firewall */}
        <div className="os-section">
          <h2 className="os-subtitle">7. Application Proxy Firewall</h2>
          <p className="os-example">
            An <strong>Application Proxy Firewall</strong> acts as a gateway and inspects traffic at the application layer. It hides the internal network structure and provides deep packet inspection.
          </p>
          <pre>{`
Use Case:
- Email, FTP, HTTP proxying
- Prevents direct connections between internal and external users
          `}</pre>
          <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/what-is-a-proxy-firewall/")}>Know more</button>
        </div>

        {/* System Calls for Firewall */}
        <div className="os-section">
          <h2 className="os-subtitle">8. System Calls and Firewall Configuration</h2>
          <p className="os-example">
            While firewalls are primarily configured using OS tools and commands (not directly system calls), they still interact closely with the OS kernel and IP stack.
          </p>
          <pre>{`
Linux Firewall Commands:
iptables -A INPUT -p tcp --dport 22 -j ACCEPT
ufw enable
ufw allow 80/tcp

Netfilter:
Kernel module in Linux responsible for packet filtering.
          `}</pre>
          <button className="infoBtn" onClick={() => window.open("https://eng.libretexts.org/Bookshelves/Computer_Science/Operating_Systems/Linux_-_The_Penguin_Marches_On_(McClanahan)/12%3A_Linux_Systems_Security/4.12%3A_Firewall_Configuration_in_Linux")}>Know more</button>
        </div>
      </div>
    </div>
  );
}

export default OSCryptographyFirewall;

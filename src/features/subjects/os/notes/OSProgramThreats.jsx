import React from "react";
import "../../../../CSS/OS.css";

function OSProgramThreats() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Program Threats in Operating System</h1>

        {/* Trojan Horse */}
        <div className="os-section">
          <h2 className="os-subtitle">1. Trojan Horse</h2>
          <p className="os-example">
            A <strong>Trojan Horse</strong> is a type of malicious program that misleads users about its true intent. It appears to be useful software but contains harmful code that can give unauthorized access, steal data, or damage the system.
          </p>
          <pre>{`
Example:
Fake "free game" that installs backdoor access for hackers.
          `}</pre>
          <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/trojan-horse-in-information-security/")}>
            Know more
          </button>
        </div>

        {/* Spyware */}
        <div className="os-section">
          <h2 className="os-subtitle">2. Spyware</h2>
          <p className="os-example">
            <strong>Spyware</strong> secretly monitors user behavior and collects personal data (like passwords, browsing history, etc.) without consent. It often comes bundled with freeware.
          </p>
          <pre>{`
Purpose:
Keylogging, screen capturing, advertising profiles
          `}</pre>
          <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/what-is-spyware-in-cyber-security/")}>
            Know more
          </button>
        </div>

        {/* Trapdoor */}
        <div className="os-section">
          <h2 className="os-subtitle">3. Trapdoor (Backdoor)</h2>
          <p className="os-example">
            A <strong>Trapdoor</strong> or <strong>Backdoor</strong> is a hidden access point in a program that bypasses normal authentication. Developers might insert it for testing, but hackers use it to gain control.
          </p>
          <pre>{`
Example:
Hidden admin login in an application code
          `}</pre>
          <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/trojan-horse-and-trap-door/")}>
            Know more
          </button>
        </div>

        {/* Virus */}
        <div className="os-section">
          <h2 className="os-subtitle">4. Virus</h2>
          <p className="os-example">
            A <strong>Virus</strong> is a self-replicating program that attaches itself to executable files and spreads when those programs run. It can corrupt or delete data, consume memory, or crash systems.
          </p>
          <pre>{`
Key Property:
Needs human action (like opening a file) to spread
          `}</pre>
          <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/what-is-a-computer-virus/")}>
            Know more
          </button>
        </div>

        {/* Worm */}
        <div className="os-section">
          <h2 className="os-subtitle">5. Worm</h2>
          <p className="os-example">
            A <strong>Worm</strong> is similar to a virus but it spreads automatically across networks without user interaction. It consumes bandwidth and system resources.
          </p>
          <pre>{`
Key Difference:
Worms do NOT need a host file to attach
          `}</pre>
          <button className="infoBtn" onClick={() => window.open("https://en.wikipedia.org/wiki/Computer_worm")}>
            Know more
          </button>
        </div>

        {/* Port Scanning */}
        <div className="os-section">
          <h2 className="os-subtitle">6. Port Scanning</h2>
          <p className="os-example">
            <strong>Port Scanning</strong> is a method used by attackers to find open and vulnerable ports on a host. It’s often a precursor to an attack.
          </p>
          <pre>{`
Tool Example:
nmap -sS 192.168.1.1
          `}</pre>
          <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/port-scanning-attack/")}>
            Know more
          </button>
        </div>

        {/* DoS */}
        <div className="os-section">
          <h2 className="os-subtitle">7. Denial of Service (DoS)</h2>
          <p className="os-example">
            A <strong>DoS attack</strong> floods a system with requests, making it unavailable to legitimate users. The goal is to crash or slow down the server.
          </p>
          <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/deniel-service-prevention/")}>
            Know more
          </button>
        </div>

        {/* DDoS */}
        <div className="os-section">
          <h2 className="os-subtitle">8. Distributed Denial of Service (DDoS)</h2>
          <p className="os-example">
            A <strong>DDoS attack</strong> is like DoS but launched from multiple systems simultaneously, usually via a botnet. It overwhelms targets with traffic from many sources.
          </p>
          <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/what-is-ddosdistributed-denial-of-service/")}>
            Know more
          </button>
        </div>

        {/* SYN Flooding */}
        <div className="os-section">
          <h2 className="os-subtitle">9. SYN Flooding</h2>
          <p className="os-example">
            <strong>SYN Flood</strong> is a form of DoS attack where the attacker sends a rapid succession of SYN requests but never completes the handshake, leaving the server overwhelmed with half-open connections.
          </p>
          <pre>{`
TCP 3-Way Handshake:
SYN → SYN-ACK → [Missing ACK]
          `}</pre>
          <button className="infoBtn" onClick={() => window.open("https://www.cloudflare.com/learning/ddos/syn-flood-ddos-attack/")}>
            Know more
          </button>
        </div>

        {/* Accidental Threats */}
        <div className="os-section">
          <h2 className="os-subtitle">10. Accidental Threats</h2>
          <p className="os-example">
            These are unintentional threats caused by users or software bugs. Examples include deleting system files by mistake or crashing applications due to coding errors.
          </p>
          <button className="infoBtn" onClick={() => window.open("https://www.teramind.co/blog/unintentional-insider-threat/")}>
            Know more
          </button>
        </div>

        {/* Purposeful (Malicious) Threats */}
        <div className="os-section">
          <h2 className="os-subtitle">11. Purposeful (Malicious) Threats</h2>
          <p className="os-example">
            These are intentional attacks by hackers or insiders. They aim to steal data, damage systems, or disrupt services using viruses, worms, ransomware, and phishing.
          </p>
          <button className="infoBtn" onClick={() => window.open("https://www.sciencedirect.com/topics/computer-science/malicious-threat")}>
            Know more
          </button>
        </div>
      </div>
    </div>
  );
}

export default OSProgramThreats;

import React from "react";
import "../../../../CSS/OS.css";

function OSDomainSecurityMatrix() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Domain Structure, Access Matrix & Security in OS</h1>

        {/* Domain Structure */}
        <div className="os-section">
          <h2 className="os-subtitle">1. Domain Structure in Operating System</h2>
          <p className="os-example">
            In an OS, a <strong>domain</strong> defines a set of objects and the types of operations that may be performed on them. A domain can be a user, a process, or a program. 
            <br />
            The OS ensures that only operations allowed within a domain are permitted, forming the basis for implementing protection mechanisms.
            <br /><br />
            Domains can be:
            <ul>
              <li><strong>User-level Domain:</strong> A user can access their files only</li>
              <li><strong>Process-level Domain:</strong> Each process has limited access</li>
              <li><strong>Hardware-level Domain:</strong> Kernel mode vs User mode</li>
            </ul>
          </p>
          <img className="smallImg" src="https://media.geeksforgeeks.org/wp-content/uploads/20210226225112/DomainofProtection.jpg" alt="" />
          <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/protection-in-os-domain-of-protection-association-authentication/")}>
            Know more
          </button>
        </div>

        {/* Access Matrix */}
        <div className="os-section">
          <h2 className="os-subtitle">2. Access Matrix</h2>
          <p className="os-example">
            The <strong>Access Matrix</strong> is a model used by OS to define rights of each domain over every object in the system.
            <br />
            Rows represent domains (users/processes), columns represent objects (files/devices), and each cell lists allowed operations.
          </p>
          <pre>{`
Example Access Matrix:

            | File1 | File2 | Printer |
Domain A    |  R,W  |   -   |   -     |
Domain B    |   R   |   R   |   W     |
          `}</pre>
          <p className="os-example">
            R = Read, W = Write, - = No access<br />
            The matrix helps enforce the principle of least privilege.
          </p>
          <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/access-matrix-in-operating-system/")}>
            Know more
          </button>
        </div>

        {/* Security Problems */}
        <div className="os-section">
          <h2 className="os-subtitle">3. Security Problems in OS</h2>
          <p className="os-example">
            <strong>Intruders/Crackers:</strong> External users who break into the system using illegal means.<br />
            <strong>Threat:</strong> Any potential cause of harm to a system (e.g., hacker, software bug).<br />
            <strong>Attack:</strong> Actual attempt to harm the system—can be passive (eavesdropping) or active (data modification).<br />
            <strong>Accidental Threats:</strong> Caused by human errors or software faults.<br />
            <strong>Malicious Threats:</strong> Intentional harm using malware, phishing, etc.
          </p>
          <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/system-security/")}>
            Know more
          </button>
        </div>

        {/* Security Violation Methods */}
        <div className="os-section">
          <h2 className="os-subtitle">4. Security Violation Methods</h2>
          <p className="os-example">
            <strong>Masquerading:</strong> Pretending to be another user or process. For example, logging in as another user without permission.<br />
            <strong>Replay Attack:</strong> Reusing previously captured valid data (e.g., passwords) to gain access.<br />
            <strong>Man-in-the-Middle (MITM):</strong> Attacker intercepts communication between two parties and may alter it.<br />
            <strong>Session Hijacking:</strong> Taking control of an active session after authentication.
          </p>
          <pre>{`
Example: 
User A logs into a bank.
Attacker intercepts token and impersonates A in real-time.
          `}</pre>
          <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/system-security/")}>
            Know more
          </button>
        </div>

        {/* Security Measure Levels */}
        <div className="os-section">
          <h2 className="os-subtitle">5. Security Measures at Different Levels</h2>
          <div className="os-grid">
            <div className="os-grid-item structured">
              <ul className="os-example">
                <li><strong>Physical Security:</strong> Protection from physical damage or theft. Includes locks, CCTV, fire suppression.</li>
                <li><strong>Human Security:</strong> Awareness and training to prevent social engineering attacks and human error.</li>
                <li><strong>Operating System Security:</strong> Passwords, access control, file permissions, audit trails, encryption.</li>
                <li><strong>Network Security:</strong> Firewalls, VPNs, secure protocols (SSL/TLS), intrusion detection systems (IDS).</li>
              </ul>
              <div className="os-grid-item unstructured">
                <pre>{`
Example:
- Use fingerprint locks (physical)
- Avoid phishing scams (human)
- Set file permissions (OS)
- Encrypt web traffic (network)
                `}</pre>
              </div>
            </div>
          </div>
          <button className="infoBtn" onClick={() => window.open("https://secureguardservices.com/blog/what-are-the-4-levels-of-security/")}>
            Know more
          </button>
        </div>

      </div>
    </div>
  );
}

export default OSDomainSecurityMatrix;

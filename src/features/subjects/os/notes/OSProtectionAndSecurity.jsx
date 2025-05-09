import React from "react";
import "../../../../CSS/OS.css";

function OSProtectionAndSecurity() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">
          Protection and Security in Operating Systems
        </h1>

        <div className="os-section">
          <h2 className="os-subtitle">What is Protection vs Security?</h2>
          <p className="os-example">
            <strong>Protection</strong> refers to mechanisms for **controlling
            access** to resources (files, memory, CPU). It ensures **legitimate
            access** and prevents processes from interfering with each other.
            <br />
            <strong>Security</strong> is about **defending the system** from
            external threats such as malware, unauthorized access, and
            cyberattacks. It includes **authentication, encryption, firewalls**,
            etc.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Goals of Protection</h2>
          <div className="os-grid">
            <div className="os-grid-item structured">
              <ul className="os-example">
                <li>Prevent unauthorized access to system resources</li>
                <li>Ensure correct usage by authorized users</li>
                <li>Support sharing without interference</li>
                <li>Isolate different users and processes</li>
              </ul>
              <div className="os-grid-item unstructured">
                <pre>{`
Example: A user shouldn't access other users' private files unless permission is granted.
If a process tries to write to another process’s memory, protection prevents it.
                `}</pre>
              </div>
            </div>
          </div>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Security Violation Categories</h2>
          <div className="os-grid">
            <div className="os-grid-item structured">
              <ul className="os-example">
                <li>
                  <strong>Unauthorized access:</strong> Login without permission
                </li>
                <li>
                  <strong>Data breach:</strong> Stealing or leaking confidential
                  info
                </li>
                <li>
                  <strong>Resource misuse:</strong> Using services or data
                  illegally
                </li>
                <li>
                  <strong>Denial of Service (DoS):</strong> Crashing or freezing
                  the system
                </li>
              </ul>
              <div className="os-grid-item unstructured">
                <pre>{`
Real-world:
- Hacker logs into admin panel (unauthorized access)
- Employee copies database to USB (data breach)
- Bot floods server with requests (DoS)
                `}</pre>
              </div>
            </div>
          </div>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">CIA Triad of Security</h2>
          <div className="os-grid">
            <div className="os-grid-item structured">
              <ul className="os-example">
                <li>
                  <strong>Confidentiality:</strong> Protect data from
                  unauthorized access (e.g., encryption)
                </li>
                <li>
                  <strong>Integrity:</strong> Ensure data is not modified
                  without detection (e.g., checksum, hashing)
                </li>
                <li>
                  <strong>Availability:</strong> Ensure system and data are
                  accessible to authorized users when needed
                </li>
              </ul>
              <div className="os-grid-item unstructured">
                <pre>{`
Example:
- HTTPS ensures confidentiality
- Digital signatures verify integrity
- Redundant systems maintain availability
                `}</pre>
              </div>
            </div>
          </div>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Theft of Service</h2>
          <p className="os-example">
            Occurs when a user gains unauthorized use of system resources (CPU
            time, memory, bandwidth, etc.).
            <br />
            <strong>Example:</strong> A student bypasses authentication to
            access premium cloud storage on a university network.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">DoS vs DDoS Attacks</h2>
          <div className="os-grid">
            <div className="os-grid-item structured">
              <p className="os-example">
                <strong>Denial of Service (DoS):</strong> A single source
                overloads the system making it unavailable to others.
                <br />
                <strong>Distributed Denial of Service (DDoS):</strong> Multiple
                systems (often botnets) launch an attack together.
              </p>
              <div className="os-grid-item unstructured">
                <pre>{`
DoS: Hacker sends 10,000 requests/sec from 1 device to crash website
DDoS: Hacker controls 1,000 devices to flood a target with 1 million requests/sec
                `}</pre>
              </div>
            </div>
          </div>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Principles of Protection</h2>
          <div className="os-grid">
            <div className="os-grid-item structured">
              <ul className="os-example">
                <li>
                  <strong>Least Privilege:</strong> Users get minimum rights
                  needed for tasks
                </li>
                <li>
                  <strong>Complete Mediation:</strong> Every access must be
                  checked
                </li>
                <li>
                  <strong>Separation of Privilege:</strong> Require multiple
                  conditions for access
                </li>
                <li>
                  <strong>Open Design:</strong> Security should not depend on
                  secrecy of design
                </li>
                <li>
                  <strong>Fail-Safe Defaults:</strong> Deny access unless
                  explicitly granted
                </li>
              </ul>
              <div className="os-grid-item unstructured">
                <pre>{`
Example:
- A bank app should allow users to view their balance, not all accounts (least privilege)
- Admin panel access needs password + OTP (separation of privilege)
                `}</pre>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() =>
            window.open(
              "https://www.geeksforgeeks.org/the-cia-triad-in-cryptography/"
            )
          }
        >
          <img
          className="smallImg2"
            src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210623231627/384.png"
            alt="CIA Triad Diagram"
          />Click the image
        </button>

        <button
          className="infoBtn"
          onClick={() =>
            window.open(
              "https://www.geeksforgeeks.org/security-in-operating-system/"
            )
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default OSProtectionAndSecurity;

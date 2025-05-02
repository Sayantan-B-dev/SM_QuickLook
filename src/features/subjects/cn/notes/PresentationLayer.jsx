import React from "react";
import "../../../../CSS/CN.css";

function PresentationLayer() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Presentation Layer in OSI Model</h1>

        <div className="cn-section">
          <h2 className="cn-subtitle">Overview</h2>
          <p className="cn-example wrap-break-word">
            The <strong>Presentation Layer</strong> is the 6th layer of the OSI
            Model. It acts as the translator between the{" "}
            <strong>Application Layer (Layer 7)</strong> and the{" "}
            <strong>Session Layer (Layer 5)</strong>. Its primary job is to
            ensure that data from one system's application layer is readable by
            another system's application layer.
            <br />
            <br />
            In simple terms, this layer formats or translates data for
            compatibility across different platforms and applications.
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Core Functions of Presentation Layer</h2>
          <div className="cn-example">
            <ul className="list-none pl-5 space-y-2">
              <li>
                <strong>Data Translation / Code Conversion:</strong>
                <br />
                Converts data formats between different systems.
                <br />
                <em>Example:</em> EBCDIC to ASCII.
              </li>
              <li>
                <strong>Encryption:</strong>
                <br />
                Converts plaintext into ciphertext to ensure confidentiality.
                <br />
                <em>Example:</em> HTTPS using SSL/TLS.
              </li>
              <li>
                <strong>Decryption:</strong>
                <br />
                Converts ciphertext back into readable plaintext at the receiver
                end.
                <br />
                <em>Example:</em> Browser decrypting TLS data.
              </li>
              <li>
                <strong>Compression:</strong>
                <br />
                Reduces data size for efficient transmission.
                <br />
                <em>Example:</em> Streaming video (H.264), ZIP files.
              </li>
              <li>
                <strong>Serialization:</strong>
                <br />
                Converts complex objects into a flat, transferable format.
                <br />
                <em>Example:</em> JSON or XML.
              </li>
              <li>
                <strong>Deserialization:</strong>
                <br />
                Reconstructs the original data from serialized format.
                <br />
                <em>Example:</em> Parsing JSON to JavaScript object.
              </li>
              <li>
                <strong>Syntax and Semantics:</strong>
                <br />
                Ensures consistent interpretation of data's structure and
                meaning across systems.
              </li>
            </ul>
          </div>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Real-Life Examples</h2>
          <div className="cn-example space-y-4">
            <p>
              <strong>🎬 Video Streaming:</strong>
              <br />
              Compression (e.g., H.264) is applied, then encrypted before
              transmission. The receiver decrypts and decompresses the data.
            </p>
            <p>
              <strong>📧 Email Services:</strong>
              <br />
              Attachments are encoded using MIME (serialization + encoding) and
              decoded on the receiver’s end.
            </p>
            <p>
              <strong>🔐 Secure Web Browsing:</strong>
              <br />
              HTTPS encrypts browser-server communication at the presentation
              layer using TLS/SSL.
            </p>
          </div>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Relation to Other Layers</h2>
          <div className="cn-example space-y-3">
            <p>
              <strong>🔽 Works Below Application Layer:</strong>
              <br />
              Takes user data and prepares it by encoding/encrypting before
              transmission.
            </p>
            <p>
              <strong>🔼 Works Above Session Layer:</strong>
              <br />
              Receives data from the session layer and
              formats/decrypts/decompresses it before passing it to the
              application.
            </p>
          </div>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Advanced Concepts in Session Layer</h2>
          <div className="cn-example">
            The Session Layer isn't just about initiating and terminating
            conversations — it also incorporates deeper control and management
            mechanisms vital for secure and efficient communication. Below are
            some critical features and concepts:
            <ul className="list-none pl-5 mt-4">
              <li>
                <strong>Authentication:</strong>
                This process confirms the identity of the user or system before
                a session begins. Common techniques include username/password
                verification, digital certificates, and biometric checks. It
                ensures that only **legitimate entities** initiate a session.
                Example: Logging into Gmail with a two-step verification system.
              </li>

              <li>
                <strong>Authorization:</strong>
                After authentication, authorization determines what the
                authenticated user is **allowed to access or do**. It enforces
                access control policies, ensuring users only get the privileges
                they've been granted (e.g., read-only, admin). For instance, a
                student account can view results, but only a teacher account can
                upload marks.
              </li>

              <li>
                <strong>Session Restoration:</strong>
                If a session is interrupted due to network failure or crashes,
                the Session Layer can attempt to **restore the session** to its
                prior state using stored context information or cached session
                data. This helps in maintaining user continuity and reduces
                re-authentication.
              </li>

              <li>
                <strong>Checkpoints:</strong>
                These are **markers placed during a session** to record a state.
                If a failure occurs, the session can resume from the last
                checkpoint instead of starting over. It's commonly used in large
                data transfers or complex computations — like resuming a large
                file download or database backup.
              </li>

              <li>
                <strong>Session Beans (in Enterprise Java):</strong>
                Although not part of the OSI model itself, **Session Beans** are
                components in **Enterprise JavaBeans (EJB)** architecture that
                manage session interactions in enterprise applications. They are
                used to handle business logic for each client session. Types
                include:
                <ul className="list-none pl-5 mt-2">
                  <li>
                    <strong>Stateless Session Beans:</strong> Do not maintain
                    any client state between method calls. Fast and scalable.
                  </li>
                  <li>
                    <strong>Stateful Session Beans:</strong> Retain information
                    (session state) about the client across multiple calls.
                    Useful for workflows like online shopping carts.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="cn-section">
          <h2 className="cn-subtitle">Role and Responsibilities</h2>
          <p className="cn-example">
            The Session Layer (Layer 5 of the OSI model) plays a vital role in
            managing and controlling the dialog between two communicating
            devices or applications. It ensures that communication is properly
            initiated, maintained, and terminated. Below are its key
            responsibilities:
            <ul className="list-none pl-5 mt-2">
              <li>
                <strong>Session Establishment:</strong>
                This function is responsible for initiating and negotiating a
                connection (session) between two applications. It sets
                parameters such as service type, transfer modes, and
                authentication. Example: when you log into a remote server via
                SSH or FTP, a session is established.
              </li>
              <li>
                <strong>Session Maintenance:</strong>
                Once a session is established, this layer keeps the session
                alive and manages the data exchange. It ensures that both
                devices are synchronized and data flows correctly, without loss
                or duplication.
              </li>
              <li>
                <strong>Session Termination:</strong>
                When communication ends, the session layer properly terminates
                the session, ensuring that all data is sent and acknowledged. It
                also frees up system and network resources to avoid memory leaks
                or locked ports.
              </li>
              <li>
                <strong>Dialog Control:</strong>
                This refers to managing the direction of communication—whether
                it’s **half-duplex** (one at a time, like walkie-talkies) or
                **full-duplex** (both at the same time, like a phone call). The
                session layer coordinates these dialog rules.
              </li>
              <li>
                <strong>Synchronization:</strong>
                Long messages can be broken into manageable chunks called
                **checkpoints**. If the session fails during transmission, the
                transfer can resume from the last checkpoint instead of starting
                over. This is especially useful for large file transfers or
                database synchronization.
              </li>
              <li>
                <strong>Authorization:</strong>
                In some protocols, session-level authentication is performed to
                verify user credentials and permissions. This step can involve
                token validation, credential checks, or session tokens. It's
                crucial for secure access in client-server models.
              </li>
              <li>
                <strong>Token Management:</strong>
                In situations where multiple systems might try to send data
                simultaneously, token management ensures controlled access. Only
                the party holding the "token" is allowed to transmit, preventing
                data collisions and maintaining session order.
              </li>
            </ul>
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: Presentation Layer in OSI</h2>
          <img
            src="https://i.imgur.com/LRYXAnb.png"
            alt="Presentation Layer Diagram"
          />
        </div>
        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://en.wikipedia.org/wiki/Presentation_layer")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default PresentationLayer;

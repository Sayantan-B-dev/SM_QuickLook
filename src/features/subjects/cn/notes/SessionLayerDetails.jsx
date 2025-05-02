import React from "react";
import "../../../../CSS/CN.css";

function SessionLayerDetails() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Session Layer (Layer 5 of OSI Model)</h1>

        <div className="cn-section">
          <h2 className="cn-subtitle">Overview</h2>
          <p className="cn-example">
            The Session Layer is the 5th layer in the OSI (Open Systems
            Interconnection) model. It acts as a dialog controller that manages,
            establishes, maintains, and terminates communication sessions
            between two computers or applications. It's positioned above the
            Transport Layer and below the Presentation Layer.
          </p>
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
          <h2 className="cn-subtitle">Relation with Adjacent Layers</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">Interaction with Transport Layer</h3>
              <p className="cn-example">
                The Transport Layer (Layer 4) ensures reliable end-to-end
                delivery of data. The Session Layer builds on this reliability
                to coordinate and manage sessions, offering more granularity
                such as dialog control and recovery.
              </p>
            </div>
            <div className="cn-grid-item unstructured">
              <h3 className="cn-subtitle">
                Interaction with Presentation Layer
              </h3>
              <p className="cn-example">
                The Presentation Layer (Layer 6) is responsible for data
                translation, encryption, and compression. The Session Layer
                provides this layer with a managed, stable session during which
                these tasks are performed.
              </p>
            </div>
          </div>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Session Layer Protocols</h2>
          <p className="cn-example">
            While most modern protocols have merged Session Layer
            responsibilities into other layers (especially the Application
            Layer), the following are examples:
            <ul className="list-none pl-5 mt-2">
              <li>
                <strong>RPC (Remote Procedure Call)</strong> – RPC allows a
                program to request a service from a program located on another
                computer in a network, as if it were a local procedure. It
                abstracts the network communication, making it seamless to
                developers. It plays a crucial role in **client-server
                architecture**, where the client invokes operations on the
                server. RPC is widely used in **distributed systems**, including
                **NFS (Network File System)** and **Microsoft DCOM**.
              </li>

              <li>
                <strong>NetBIOS (Network Basic Input/Output System)</strong> –
                NetBIOS provides session layer services such as **naming,
                connection establishment, and data transfer** between devices on
                a local area network (LAN), particularly in Windows
                environments. It allows applications on separate computers to
                communicate over a LAN. Though largely replaced by **DNS and
                TCP/IP**, NetBIOS is still supported for **legacy applications
                and file/printer sharing** on Windows networks.
              </li>

              <li>
                <strong>SMB (Server Message Block)</strong> – SMB is a protocol
                used for **network file and printer sharing**, mainly in
                Windows-based systems. It allows applications to read and write
                to files and request services from server programs. SMB operates
                over the **Session Layer** but is often implemented over
                **TCP/IP using ports like 445 and 139**. Modern versions include
                **SMBv2 and SMBv3**, which provide better security, performance,
                and scalability.
              </li>

              <li>
                <strong>ASP (AppleTalk Session Protocol)</strong> – ASP is part
                of the **AppleTalk protocol suite**, which was used in Macintosh
                networking. It provides session layer services such as
                **establishing, maintaining, and terminating communication
                sessions** between Apple devices. ASP ensures data integrity
                during long-running network operations, like file transfers. It
                has mostly been replaced by **TCP/IP-based protocols** in modern
                macOS systems.
              </li>
            </ul>
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Session Layer Example</h2>
          <pre className="cn-example">
            <strong>Example:</strong> Consider a video call between two users
            using Skype. 1. <strong>Session Establishment:</strong> When the
            call starts, a session is established. 2.{" "}
            <strong>Session Maintenance:</strong> If the network drops, the
            session layer may try to reconnect or resume. 3.{" "}
            <strong>Dialog Control:</strong> Full-duplex communication allows
            both parties to speak simultaneously. 4.{" "}
            <strong>Session Termination:</strong> When the call ends, the
            session is terminated and resources are freed.
          </pre>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: Session Layer in OSI Model</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20250127104159934898/27.webp"
            alt="Session Layer in OSI Model"
          />
        </div>

        <button
          className="infoBtn"
          onClick={() =>
            window.open(
              "https://www.geeksforgeeks.org/session-layer-in-osi-model/"
            )
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default SessionLayerDetails;

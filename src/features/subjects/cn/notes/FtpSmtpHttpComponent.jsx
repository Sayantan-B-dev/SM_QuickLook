import React from "react";
import "../../../../CSS/CN.css";

function FtpSmtpHttpComponent() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">
          Deep Dive: FTP, SMTP, MTA & HTTP Persistence
        </h1>

        {/* FTP Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">FTP (File Transfer Protocol)</h2>
          <p className="cn-example">
            FTP is used to transfer files between client and server on a
            network. It uses two separate connections:
          </p>
          <ul className="cn-example list-disc pl-6">
            <li>
              <strong>Control Connection (Port 21):</strong> For commands and
              responses.
            </li>
            <li>
              <strong>Data Connection (Port 20):</strong> For transferring
              files.
            </li>
          </ul>
          <p className="cn-example">FTP operates in two modes:</p>
          <ul className="cn-example list-disc pl-6">
            <li>
              <strong>Active Mode:</strong> Client opens a random port, server
              connects to it for data transfer.
            </li>
            <li>
              <strong>Passive Mode:</strong> Server opens a random port, client
              connects to it (firewall-friendly).
            </li>
          </ul>
          <p className="cn-example">
            FTP does not encrypt data. Use SFTP or FTPS for secure transfers.
          </p>
        </div>

        {/* SMTP & MTA Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">SMTP (Simple Mail Transfer Protocol)</h2>
          <p className="cn-example">
            SMTP is used to send emails from client to server and between
            servers. It uses TCP port 25 and works closely with MTA.
          </p>

          <h3 className="cn-subtitle">Mail Transfer Agent (MTA)</h3>
          <p className="cn-example">
            MTA is a mail server that transfers messages between computers. It
            receives emails from MUA (Mail User Agent) or another MTA, and
            forwards to another MTA or MDA (Mail Delivery Agent).
          </p>

          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
            {`
+---------+     +------+     +------+     +------+     +--------+
|  MUA    | --> | SMTP | --> | MTA1 | --> | MTA2 | --> |  MDA   |
+---------+     +------+     +------+     +------+     +--------+
     |                                                   |
     +------------> Recipient's Mailbox ------------------+
`}
          </pre>
          <ul className="cn-example list-disc pl-6">
            <li>
              <strong>MUA:</strong> Mail client (e.g., Outlook, Gmail)
            </li>
            <li>
              <strong>MTA:</strong> Transfers email across networks
            </li>
            <li>
              <strong>MDA:</strong> Delivers to final destination (inbox)
            </li>
          </ul>
        </div>

        {/* HTTP Persistence Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Persistent vs Non-Persistent HTTP</h2>
          <table className="cn-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Persistent HTTP</th>
                <th>Non-Persistent HTTP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Connection Usage</td>
                <td>One connection for multiple requests/responses</td>
                <td>New connection for each request/response</td>
              </tr>
              <tr>
                <td>Speed</td>
                <td>Faster due to fewer connections</td>
                <td>Slower due to TCP handshake per object</td>
              </tr>
              <tr>
                <td>Overhead</td>
                <td>Lower</td>
                <td>Higher</td>
              </tr>
              <tr>
                <td>Used In</td>
                <td>HTTP/1.1 and above (default)</td>
                <td>HTTP/1.0</td>
              </tr>
            </tbody>
          </table>

          <h2 className="cn-subtitle">
            Diagram: Persistent vs Non-Persistent HTTP
          </h2>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
            {`
Non-Persistent:
Client -> Server: Request 1 (New TCP)
Client -> Server: Request 2 (New TCP)
Client -> Server: Request 3 (New TCP)

Persistent:
Client -> Server: TCP Open
Client -> Server: Request 1
Client -> Server: Request 2
Client -> Server: Request 3
Client -> Server: TCP Close
`}
          </pre>
          <div className="bg-gradient-to-br   p-6 rounded-lg shadow-md  max-w-4xl mx-auto">
            <h1 className="cn-subtitle">
              Email Journey: From Sender to Receiver
            </h1>
            <div className=" p-4 rounded-lg shadow-inner overflow-x-auto">
              <pre className="text-sm text-gray-800">
                {`
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                                 │
│                                    EMAIL TRANSMISSION PROCESS                                    │
│                                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────────────────────┘

  SENDER SIDE                                                                      RECEIVER SIDE
  ──────────────────────────────────────────────────────────────────────────────────────────────────

  ┌──────────────┐            ┌──────────────┐            ┌──────────────┐            ┌──────────────┐
  │              │            │              │            │              │            │              │
  │     MUA      │            │     MSA      │            │     MTA      │            │     MTA      │
  │  Mail User   │──SMTP─────>│  Mail Submit │──SMTP─────>│Mail Transfer │──SMTP─────>│Mail Transfer │
  │   Agent      │   (25/587) │    Agent     │   (25)     │  Agent      │   (25)     │  Agent      │
  │(Email Client)│            │              │            │(Outgoing Mail│            │(Incoming Mail│
  │              │            │              │            │   Server)    │            │   Server)    │
  └──────────────┘            └──────────────┘            └──────────────┘            └──────────────┘
                                                                                             │
                                                                                             │
                                                                                             ▼
┌───────────────────────────────────────────────────────────────┐                    ┌──────────────┐
│                                                               │                    │              │
│  NOTES:                                                       │                    │     MDA      │
│                                                               │                    │  Mail Delivery│
│  • MUA: Mail User Agent (e.g., Outlook, Gmail, Thunderbird)   │                    │    Agent     │
│  • MSA: Mail Submission Agent (accepts mail from MUAs)        │                    │(Stores mail in│
│  • MTA: Mail Transfer Agent (routes mail between servers)     │                    │  mailbox)     │
│  • MDA: Mail Delivery Agent (delivers to user's mailbox)      │                    │              │
│  • POP3: Post Office Protocol (retrieves & usually deletes)   │                    └──────┬───────┘
│  • IMAP: Internet Message Access Protocol (syncs across devices)│                         │
│                                                               │                           │
└───────────────────────────────────────────────────────────────┘                           │
                                                                                            │
                                                                                            ▼
                                                             ┌─────────────────────────────────────┐
                                                             │                                     │
                                                             │       User's Mailbox Storage        │
                                                             │                                     │
                                                             └─────────────┬───────────────────────┘
                                                                           │
                                    ┌─────────────────────────────────────┐ │ ┌─────────────────────────────────────┐
                                    │                                     │ │ │                                     │
                                    │     POP3 (Post Office Protocol)     │◄┴─┤     IMAP (Internet Message Access)  │
                                    │     Port 110 (995 for SSL/TLS)      │   │     Port 143 (993 for SSL/TLS)      │
                                    │                                     │   │                                     │
                                    └─────────────────┬───────────────────┘   └────────────────┬────────────────────┘
                                                      │                                         │
                                                      │                                         │
                                                      ▼                                         ▼
                                        ┌───────────────────────────┐             ┌───────────────────────────┐
                                        │                           │             │                           │
                                        │      POP3 Behavior        │             │        IMAP Behavior      │
                                        │   - Downloads all mail    │             │   - Syncs with server     │
                                        │   - Typically deletes     │             │   - Keeps mail on server  │
                                        │     mail from server      │             │   - Supports folders      │
                                        │   - Single-device model   │             │   - Multi-device model    │
                                        │                           │             │                           │
                                        └─────────────┬─────────────┘             └─────────────┬─────────────┘
                                                      │                                         │
                                                      │                                         │
                                                      ▼                                         ▼
                                                ┌──────────────────────────────────────────────────┐
                                                │                                                  │
                                                │                Recipient's MUA                   │
                                                │            (Email Client/Application)            │
                                                │                                                  │
                                                └──────────────────────────────────────────────────┘
`}
              </pre>
            </div>
            <div className="cn-section">
              <p className="font-semibold mb-2">Protocol Explanation:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>SMTP (Simple Mail Transfer Protocol):</strong> Used to
                  send and route emails between servers
                </li>
                <li>
                  <strong>MSA (Mail Submission Agent):</strong> Accepts emails
                  from authenticated users and prepares them for routing
                </li>
                <li>
                  <strong>MTA (Mail Transfer Agent):</strong> Handles email
                  routing between different mail servers
                </li>
                <li>
                  <strong>MDA (Mail Delivery Agent):</strong> Delivers messages
                  to recipient mailboxes
                </li>
                <li>
                  <strong>POP3 (Post Office Protocol):</strong> Downloads emails
                  from server to client, typically removing them from server
                </li>
                <li>
                  <strong>IMAP (Internet Message Access Protocol):</strong>{" "}
                  Synchronizes email across multiple devices, keeping messages
                  on server
                </li>
                <li>
                  <strong>MUA (Mail User Agent):</strong> Email client software
                  used to compose, send, and read emails
                </li>
              </ul>
            </div>
          </div>
          <div className="cn-section">
            <h2 className="cn-subtitle">
              Difference Between SMTP, POP, and IMAP
            </h2>
            <p className="cn-example">
              SMTP, POP, and IMAP are protocols used in email communication.
              SMTP is used for sending emails, while POP and IMAP are used for
              retrieving them from the mail server. These protocols work
              together to enable a complete email flow: SMTP sends the message,
              and either POP or IMAP is used by the receiver to fetch the
              message from their mailbox.
            </p>

            <table className="cn-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>SMTP</th>
                  <th>POP (Post Office Protocol)</th>
                  <th>IMAP (Internet Message Access Protocol)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Purpose</td>
                  <td>Sending emails</td>
                  <td>Retrieving and deleting emails from server</td>
                  <td>Managing and synchronizing emails across devices</td>
                </tr>
                <tr>
                  <td>Usage</td>
                  <td>
                    Used to send mail from client to server or between servers
                  </td>
                  <td>
                    Used by clients to download emails and remove from server
                  </td>
                  <td>
                    Used to view and manage emails on the server without
                    deleting
                  </td>
                </tr>
                <tr>
                  <td>Port Numbers</td>
                  <td>25, 465 (SSL), 587 (TLS)</td>
                  <td>110 (default), 995 (SSL)</td>
                  <td>143 (default), 993 (SSL)</td>
                </tr>
                <tr>
                  <td>Storage</td>
                  <td>N/A – sends only</td>
                  <td>Downloads and usually deletes from server</td>
                  <td>Keeps email on server, supports folder organization</td>
                </tr>
                <tr>
                  <td>Synchronization</td>
                  <td>Not applicable</td>
                  <td>No synchronization across devices</td>
                  <td>Yes – syncs across all connected devices</td>
                </tr>
                <tr>
                  <td>Offline Access</td>
                  <td>Not applicable</td>
                  <td>Emails can be read offline after download</td>
                  <td>
                    Depends on email client – supports partial offline access
                  </td>
                </tr>
                <tr>
                  <td>Best Used For</td>
                  <td>Sending emails</td>
                  <td>Single device access and storage</td>
                  <td>Multiple device access and real-time syncing</td>
                </tr>
              </tbody>
            </table>

            <p className="cn-example mt-4">
              <strong>How They Work Together:</strong> When a user sends an
              email, the MUA (Mail User Agent) uses SMTP to transmit it to the
              mail server or directly to the recipient's mail server. The
              recipient then uses either POP or IMAP to retrieve or manage the
              email. POP downloads and may delete the email, while IMAP allows
              viewing and organizing it directly on the server with
              synchronization across devices.
            </p>
          </div>
        </div>

        <button
          className="infoBtn"
          onClick={() =>
            window.open(
              "https://www.geeksforgeeks.org/protocols-application-layer/"
            )
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default FtpSmtpHttpComponent;

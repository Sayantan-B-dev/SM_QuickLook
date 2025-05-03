import React from "react";
import "../../../../CSS/CN.css";

function DNSLayer() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Domain Name System (DNS)</h1>

        <div className="cn-section">
          <h2 className="cn-subtitle">What is DNS?</h2>
          <p className="cn-example">
            The Domain Name System (DNS) is a hierarchical, distributed naming
            system used to resolve human-readable domain names (like
            `www.google.com`) into IP addresses (like `142.250.190.78`).
            Computers use IP addresses to communicate, but humans prefer
            readable names — DNS bridges that gap.
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">How DNS Works</h2>
          <p className="cn-example">
            When a user types a website URL into a browser:
            <ol className="list-decimal ml-4 mt-2 space-y-1 text-grey-400">
              <li>The browser checks its DNS cache.</li>
              <li>
                If not found, it sends a query to a **recursive resolver**
                (usually provided by ISP).
              </li>
              <li>
                The resolver queries a **Root Server**, which responds with the
                address of a **TLD server** (like `.com`).
              </li>
              <li>
                The resolver then queries the TLD server, which responds with
                the address of the **authoritative name server** for the domain.
              </li>
              <li>
                The resolver queries the authoritative server to get the IP
                address of the domain.
              </li>
              <li>
                That IP is sent back to the client, which connects to the web
                server.
              </li>
            </ol>
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">DNS Hierarchy</h2>
          <p className="cn-example">
            DNS is structured in levels:
            <ul className="list-disc ml-5 mt-2 text-grey-400">
              <li>
                <strong>Root Servers</strong> – Directs queries to Top-Level
                Domains (TLD).
              </li>
              <li>
                <strong>TLD Servers</strong> – Handle domains like `.com`,
                `.org`, `.net`, etc.
              </li>
              <li>
                <strong>Authoritative Servers</strong> – Store actual domain
                records (like A, MX, etc.).
              </li>
              <li>
                <strong>Recursive Resolver</strong> – Acts on behalf of the
                client to query servers.
              </li>
            </ul>
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">DNS Record Types</h2>
          <table className="cn-table">
            <thead>
              <tr>
                <th>Record Type</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A</td>
                <td>Maps a domain to an IPv4 address</td>
              </tr>
              <tr>
                <td>AAAA</td>
                <td>Maps a domain to an IPv6 address</td>
              </tr>
              <tr>
                <td>CNAME</td>
                <td>Canonical name record (alias of another domain)</td>
              </tr>
              <tr>
                <td>MX</td>
                <td>Mail Exchange – used to route emails</td>
              </tr>
              <tr>
                <td>NS</td>
                <td>Name Server – indicates the authoritative server</td>
              </tr>
              <tr>
                <td>TXT</td>
                <td>
                  Text information – often used for SPF, DKIM, verification
                </td>
              </tr>
              <tr>
                <td>PTR</td>
                <td>Pointer record – used in reverse DNS lookup</td>
              </tr>
              <tr>
                <td>SOA</td>
                <td>Start of Authority – contains zone information</td>
              </tr>
              <tr>
                <td>SRV</td>
                <td>Service locator record</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Recursive vs Iterative Queries</h2>
          <p className="cn-example">
            <strong>Recursive Query:</strong> The DNS resolver takes full
            responsibility to obtain the IP address. The client only makes one
            request and waits until it gets the answer or an error.
            <br />
            <strong>Iterative Query:</strong> The resolver responds with a
            referral to another server (not the final answer), and the client
            continues the query process step by step.
          </p>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
            {`Recursive Query Example:
Client → Resolver → Root → TLD → Authoritative → Resolver → Client

Iterative Query Example:
Client → Root (refers TLD)
Client → TLD (refers Auth)
Client → Authoritative (gives IP)`}
          </pre>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Structured & Unstructured</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <p>
                Structured: DNS hierarchy is a tree-based structure with root,
                TLD, and authoritative servers, and follows strict formats like
                A, MX, NS, etc.
              </p>
            </div>
            <div className="cn-grid-item unstructured">
              <p>
                Unstructured: Custom or rogue DNS configurations, dynamic or
                client-side local overrides that do not follow standard
                resolution paths.
              </p>
            </div>
          </div>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: DNS Resolution Path</h2>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
            {`
+--------+       +-----------+       +----------+       +-------------------+       +------------------+
| Client | <---> | Resolver  | <---> | Root DNS | <---> | TLD DNS (.com)    | <---> | Authoritative DNS|
+--------+       +-----------+       +----------+       +-------------------+       +------------------+
     |                |                    |                     |                          |
     |  Request www.example.com            |                     |                          |
     | ----------------------------------> |                     |                          |
     |                |      "Ask .com"    |                     |                          |
     |                | <----------------- |                     |                          |
     |                | -----------------> |   "Ask example.com"                            |
     |                |                    | ---------------------------------------------> |
     |                |                    |                        "It's 93.184.216.34"     |
     | <---------------------------------- | <--------------------------------------------- |
     |         Final Answer: 93.184.216.34                                                   |
`}
          </pre>
          <h3 className="cn-subtitle">
            DNS Architecture Diagram
          </h3>
          <div className=" rounded shadow overflow-x-auto">
            <pre className="text-xs">
              {`
                                        ┌───────────────┐
                                        │  Root Servers │
                                        └───────┬───────┘
                                                │
                            ┌───────────────────┼───────────────────┐
                            │                   │                   │
                     ┌──────┴──────┐     ┌──────┴──────┐     ┌──────┴──────┐
                     │ .com Servers│     │ .org Servers│     │ .net Servers│
                     └──────┬──────┘     └─────────────┘     └─────────────┘
                            │
                ┌───────────┴───────────┐
                │                       │
         ┌──────┴──────┐        ┌──────┴──────┐
         │example.com  │        │google.com   │
         │Nameservers  │        │Nameservers  │
         └──────┬──────┘        └─────────────┘
                │
    ┌───────────┴───────────┐
    │                       │
┌───┴───┐             ┌─────┴────┐
│ www   │             │  mail    │
│records│             │ records  │
└───────┘             └──────────┘

                     ┌─────────────┐
                     │ DNS Resolver│◄───────┐
                     └──────┬──────┘        │
                            │               │
                            ▼               │
                     ┌─────────────┐        │
                     │  End User   │────────┘
                     └─────────────┘
`}
            </pre>
          </div>
          <h3 className="cn-subtitle">DNS Resolution Diagram</h3>
          <div className="">
            <pre className="text-xs">
{`
      Client               DNS Resolver              Root Server            TLD Server         Auth. Nameserver
        │                      │                         │                      │                    │
        │  1. Query            │                         │                      │                    │
        │  example.com         │                         │                      │                    │
        │─────────────────────>│                         │                      │                    │
        │                      │                         │                      │                    │
        │                      │  2. Query root          │                      │                    │
        │                      │  for example.com        │                      │                    │
        │                      │────────────────────────>│                      │                    │
        │                      │                         │                      │                    │
        │                      │  3. Refer to            │                      │                    │
        │                      │  .com servers           │                      │                    │
        │                      │<────────────────────────│                      │                    │
        │                      │                         │                      │                    │
        │                      │  4. Query .com          │                      │                    │
        │                      │  for example.com        │                      │                    │
        │                      │─────────────────────────────────────────────-->│                    │
        │                      │                         │                      │                    │
        │                      │  5. Refer to            │                      │                    │
        │                      │  example.com servers    │                      │                    │
        │                      │<─────────────────────────────────────────────────────────────────>  │
        │                      │                         │                      │                    │
        │                      │  6. Query for           │                      │                    │
        │                      │  example.com            │                      │                    │
        │                      │───────────────────────────────────────────────────────────────────>│
        │                      │                         │                      │                    │
        │                      │  7. Return              │                      │                    │
        │                      │  IP: 192.0.2.1          │                      │                    │
        │                      │<──────────────────────────────────────────────────────────────────-│
        │                      │                         │                      │                    │
        │  8. Return           │                         │                      │                    │
        │  IP: 192.0.2.1       │                         │                      │                    │
        │<─────────────────────│                         │                      │                    │
        │                      │                         │                      │                    │
`}
            </pre>
          </div>
          <img
            className="smallImg"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20250215163425712359/How-DNS-Works-gif-ezgifcom-optimize-1.gif"
            alt="DNS Resolution Diagram"
          />
        </div>
        <button
          className="infoBtn"
          onClick={() =>
            window.open(
              "https://www.geeksforgeeks.org/domain-name-system-dns-in-application-layer/"
            )
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default DNSLayer;

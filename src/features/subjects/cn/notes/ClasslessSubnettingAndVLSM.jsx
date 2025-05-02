import React from "react";
import "../../../../CSS/CN.css";

function ClasslessSubnettingAndVLSM() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Subnetting & VLSM in Classless Addressing (CIDR)</h1>

        {/* CLASSLESS INTRO */}
        <div className="cn-section">
          <h2 className="cn-subtitle">What is Classless Addressing (CIDR)?</h2>
          <p className="cn-example">
            Classless addressing (CIDR - Classless Inter-Domain Routing) discards fixed IP classes (A, B, C) and allows flexible subnetting using variable-length prefixes (e.g., /13, /22). This provides efficient IP address allocation and avoids waste of addresses.
          </p>
        </div>

        {/* CIDR NOTATION */}
        <div className="cn-section">
          <h2 className="cn-subtitle">CIDR Notation Explained</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <pre>
{`CIDR Format: IP/prefix
Example: 192.168.0.0/20

- IP: 192.168.0.0
- /20 means: First 20 bits are network bits
- Subnet Mask: 255.255.240.0
- Hosts = 2^(32-20) - 2 = 4094

CIDR aggregates multiple IP blocks into a single route:
Example:
192.168.0.0/24
192.168.1.0/24
192.168.2.0/24
→ Can be aggregated as: 192.168.0.0/22`}
              </pre>
            </div>
          </div>
        </div>

        {/* CLASSLESS SUBNETTING */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Subnetting in CIDR (Classless)</h2>
          <p className="cn-example">
            In classless subnetting, any prefix length can be used. You don’t have to stick to /8, /16, or /24. You can create subnets like /29, /30 based on exact host requirements.
          </p>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <pre>
{`Subnetting Example:
Network: 10.0.0.0/24

Split into:
- /25 → 10.0.0.0 – 10.0.0.127 (128 IPs)
- /26 → 10.0.0.128 – 10.0.0.191 (64 IPs)
- /27 → 10.0.0.192 – 10.0.0.223 (32 IPs)
- /28 → 10.0.0.224 – 10.0.0.239 (16 IPs)
- /29 → 10.0.0.240 – 10.0.0.247 (8 IPs)
- /30 → 10.0.0.248 – 10.0.0.251 (4 IPs)

Each subnet uses only what it needs.`}
              </pre>
            </div>
          </div>
        </div>

        {/* CLASSLESS VLSM */}
        <div className="cn-section">
          <h2 className="cn-subtitle">VLSM in Classless IP Addressing</h2>
          <p className="cn-example">
            VLSM works naturally with CIDR. It allows breaking subnets into even smaller subnets as needed. Every subnet can have a unique prefix length depending on host requirement.
          </p>
        </div>

        {/* CLASSLESS VLSM EXAMPLE */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Classless VLSM: Step-by-Step Allocation</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <pre>
{`Given Network: 192.168.10.0/24
Requirements:
- Subnet A: 100 hosts
- Subnet B: 50 hosts
- Subnet C: 25 hosts
- Subnet D: 10 hosts

Step 1: Subnet A: Needs 2^7 = 128 → /25
        → 192.168.10.0/25

Step 2: Subnet B: Needs 2^6 = 64 → /26
        → 192.168.10.128/26

Step 3: Subnet C: Needs 2^5 = 32 → /27
        → 192.168.10.192/27

Step 4: Subnet D: Needs 2^4 = 16 → /28
        → 192.168.10.224/28

Remaining: 192.168.10.240/28 free`}
              </pre>
            </div>
          </div>
        </div>

        {/* VLSM RULES CLASSLESS */}
        <div className="cn-section">
          <h2 className="cn-subtitle">VLSM Rules in CIDR</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <pre>
{`✔ Always start from the lowest unused address
✔ Allocate larger subnets first
✔ Subnet boundaries must align on power-of-2
✔ Track used blocks carefully to avoid overlap
✔ Use CIDR calculators for large networks`}
              </pre>
            </div>
          </div>
        </div>

        {/* DIAGRAM SECTION */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: CIDR & VLSM Allocation</h2>
          <img
            src="https://media.licdn.com/dms/image/v2/D4D12AQFrllE3OyJcaA/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1694547245916?e=1750291200&v=beta&t=3Hp0KNX_r3mQpRhAKOn0L-ZO_OSP-b0nxBm1inVxOYU"
            alt="CIDR Subnetting Diagram"
          />
        </div>
        <div className="flex gap-10">
        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/ipv4-classless-subnet-equation/")
          }
        >
          IPv4 Classless Subnet equation
        </button>
        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.practicalnetworking.net/stand-alone/classful-cidr-flsm-vlsm/")
          }
        >
          Classful vs Classless vs CIDR vs FLSM vs VLSM

        </button>
        </div>

      </div>
    </div>
  );
}

export default ClasslessSubnettingAndVLSM;

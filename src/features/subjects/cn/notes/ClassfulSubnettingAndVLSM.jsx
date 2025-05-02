import React from "react";
import "../../../../CSS/CN.css";

function ClassfulSubnettingAndVLSM() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Subnetting in Classful Addressing & VLSM</h1>

        {/* INTRO TO SUBNETTING */}
        <div className="cn-section">
          <h2 className="cn-subtitle">What is Subnetting?</h2>
          <p className="cn-example">
            Subnetting is the process of dividing a larger network (IP block) into smaller logical subnetworks (subnets). It improves IP utilization, enhances security, and reduces broadcast traffic.
          </p>
        </div>

        {/* CLASSFUL SUBNETTING */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Subnetting in Classful Networks</h2>
          <p className="cn-example">
            In classful addressing, subnetting uses the fixed default subnet masks and borrows bits from the **host portion** to create new **subnet IDs**.
          </p>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <pre>
{`Subnetting a Class B IP: 172.16.0.0
Default Mask: 255.255.0.0 (/16)
Borrow 4 bits → New Mask: 255.255.240.0 (/20)

# Subnet Calculation:
- Borrowed bits: 4 → 2^4 = 16 subnets
- Host bits left: 12 → 2^12 - 2 = 4094 hosts/subnet

Subnet Ranges:
1. 172.16.0.0     - 172.16.15.255
2. 172.16.16.0    - 172.16.31.255
...
16. 172.16.240.0  - 172.16.255.255`}
              </pre>
            </div>
          </div>
        </div>

        {/* CLASS A/C EXAMPLES */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Subnetting in Class A and Class C</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <pre>
{`Class A Example:
IP: 10.0.0.0
Default Mask: /8
Borrow 8 bits → /16 (Subnet Mask: 255.255.0.0)
- Subnets: 256
- Hosts per subnet: 2^16 - 2 = 65,534

Class C Example:
IP: 192.168.1.0
Default: /24
Borrow 3 bits → /27 (Mask: 255.255.255.224)
- Subnets: 2^3 = 8
- Hosts per subnet: 2^5 - 2 = 30`}
              </pre>
            </div>
          </div>
        </div>

        {/* VLSM SECTION */}
        <div className="cn-section">
          <h2 className="cn-subtitle">What is VLSM (Variable Length Subnet Masking)?</h2>
          <p className="cn-example">
            VLSM allows a network to use **subnets of different sizes**, depending on the actual number of required hosts. It improves IP efficiency and flexibility, especially in hierarchical network designs.
          </p>
        </div>

        {/* VLSM EXAMPLE */}
        <div className="cn-section">
          <h2 className="cn-subtitle">VLSM Example Breakdown</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <pre>
{`Given Network: 192.168.1.0/24
Requirement:
- Subnet A: 100 hosts
- Subnet B: 50 hosts
- Subnet C: 25 hosts
- Subnet D: 10 hosts

Step 1: Sort by size descending

Subnet A: needs 2^7 = 128 → /25 → 192.168.1.0/25
Subnet B: 2^6 = 64 → /26 → 192.168.1.128/26
Subnet C: 2^5 = 32 → /27 → 192.168.1.192/27
Subnet D: 2^4 = 16 → /28 → 192.168.1.224/28

Leftover IPs: 192.168.1.240 → 192.168.1.255`}
              </pre>
            </div>
          </div>
        </div>

        {/* VLSM RULES */}
        <div className="cn-section">
          <h2 className="cn-subtitle">VLSM Rules (Must Follow)</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <pre>
{`✔ Rule 1: Always assign larger subnets first
✔ Rule 2: Align subnet boundaries (block sizes must match)
✔ Rule 3: Avoid overlapping subnet ranges
✔ Rule 4: Each subnet must reserve 2 addresses (network + broadcast)
✔ Rule 5: Track remaining IPs and allocate accordingly`}
              </pre>
            </div>
          </div>
        </div>

        {/* DIAGRAM SECTION */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: VLSM Subnet Allocation</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20250107215830240237/hostandnetid-660x413.png"
          />
        </div>
        <div className="flex gap-10">
        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/introduction-to-subnetting/")
          }
        >
          Subnetting
        </button>
        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/introduction-of-variable-length-subnet-mask-vlsm/")
          }
        >
          VLSM
        </button>
        </div>
      </div>
    </div>
  );
}

export default ClassfulSubnettingAndVLSM;

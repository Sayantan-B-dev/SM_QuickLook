import React from "react";
import "../../../../CSS/CN.css";

function ClassfulVsClasslessIP() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Classful and Classless IP Addressing</h1>

        {/* CLASSFUL */}
        <div className="cn-section">
          <h2 className="cn-subtitle">What is Classful IP Addressing?</h2>
          <p className="cn-example">
            Classful addressing is the original system for allocating IP addresses. It divides the 32-bit IPv4 address space into 5 classes: A, B, C, D, and E. Each class has a fixed default subnet mask and range.
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Classful Address Ranges and Examples</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <pre>
{`Class A:
- Starts from: 0.0.0.0 to 127.255.255.255
- Default Subnet Mask: 255.0.0.0 (/8)
- N = Network bits: 8, H = Host bits: 24
- Example: 10.0.0.1

Class B:
- Range: 128.0.0.0 to 191.255.255.255
- Subnet Mask: 255.255.0.0 (/16)
- N = 16 bits, H = 16 bits
- Example: 172.16.5.4

Class C:
- Range: 192.0.0.0 to 223.255.255.255
- Subnet Mask: 255.255.255.0 (/24)
- N = 24 bits, H = 8 bits
- Example: 192.168.1.1

Class D:
- 224.0.0.0 to 239.255.255.255 (Multicast)

Class E:
- 240.0.0.0 to 255.255.255.255 (Experimental)`}
              </pre>
            </div>
          </div>
        </div>

        {/* PROBLEM WITH CLASSFUL */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Limitations of Classful Addressing</h2>
          <p className="cn-example">
            Classful addressing led to wastage of IPs. For example, Class A provided over 16 million IPs even if an organization needed only a few. This caused rapid IP exhaustion.
          </p>
        </div>

        {/* CLASSLESS */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Classless Addressing (CIDR)</h2>
          <p className="cn-example">
            Classless Inter-Domain Routing (CIDR) was introduced to overcome the inefficiency of classful addressing. It allows allocation based on actual needs by specifying a variable-length subnet mask (VLSM).
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">CIDR Notation and Subnetting Examples</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <pre>
{`CIDR Format: IP_address/prefix_length

Example:
192.168.10.0/26
- Prefix length: 26 means 26 bits for Network, 6 bits for Host
- Number of Hosts: 2^6 - 2 = 62 (subtract network & broadcast)

Binary:
IP:      11000000.10101000.00001010.00000000
Mask:    11111111.11111111.11111111.11000000

This gives 4 subnets:
192.168.10.0/26
192.168.10.64/26
192.168.10.128/26
192.168.10.192/26`}
              </pre>
            </div>
          </div>
        </div>

        {/* RULES OF CLASSLESS */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Detailed Rules of Classless Addressing</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <pre>
{`✔ Rule 1: Use Prefix Length to define subnet size
Example: /30 means only 4 IPs (2 usable)

✔ Rule 2: Must not overlap subnets
Each subnet must be unique and non-overlapping

✔ Rule 3: Subnet Mask can be anywhere from /1 to /32
Allows maximum flexibility unlike fixed /8, /16, /24 in classful

✔ Rule 4: Always subtract 2 IPs per subnet for network & broadcast

✔ Rule 5: Subnets are created using powers of 2
If you need 100 hosts, closest power of 2 is 128 → use /25 (7 bits for host)

✔ Rule 6: Subnet IDs must be aligned to block size
For /27 (32 addresses), blocks start at 0, 32, 64, etc.`}
              </pre>
            </div>
          </div>
        </div>

        {/* DIAGRAM */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: Classful vs Classless Addressing</h2>
          <img
          className="smallImg bg-white"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20190605191916/Untitled-Diagram-2019-06-05T191232.229.png"
            alt="Classful vs Classless Diagram"
          />
        </div>
        <div className="flex gap-5 mt-4">
        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/ip-addressing-classless-addressing/")
          }
        >
          Know more
        </button>
        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/classful-vs-classless-addressing/")
          }
        >
          Classful vs Classless Addressing

        </button>
        </div>

      </div>
    </div>
  );
}

export default ClassfulVsClasslessIP;

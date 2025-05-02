import React from "react";
import "../../../../CSS/CN.css";

function IPv6Header() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">IPv6 Header Format</h1>

        <div className="cn-section">
          <h2 className="cn-subtitle">Overview</h2>
          <p className="cn-example">
            IPv6 is the next-generation IP protocol designed to address the limitations of IPv4,
            such as limited address space and complex header structure. The IPv6 header is
            simplified to improve packet processing efficiency.
          </p>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">IPv6 Header Fields</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <pre>
{`0                   1                   2                   3  
0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1  
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+  
|Version| Traffic Class |           Flow Label                  |  
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+  
|        Payload Length         |  Next Header  |   Hop Limit   |  
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+  
|                                                               |  
+                                                               +  
|                                                               |  
+                        Source Address                         +  
|                                                               |  
+                                                               +  
|                                                               |  
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+  
|                                                               |  
+                                                               +  
|                                                               |  
+                     Destination Address                       +  
|                                                               |  
+                                                               +  
|                                                               |  
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+  `}
              </pre>
            </div>
          </div>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Field Descriptions</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <pre>
{`✔ Version (4 bits)
  - Always set to 6 for IPv6.

✔ Traffic Class (8 bits)
  - Similar to Type of Service in IPv4.
  - Used for packet classification, priority handling.

✔ Flow Label (20 bits)
  - Identifies packets belonging to the same flow.
  - Helps routers provide special handling without deeper inspection.

✔ Payload Length (16 bits)
  - Length of data following the IPv6 header (excluding header).
  - Max = 65,535 bytes (for larger payloads, Extension Header: Jumbo Payload is used).

✔ Next Header (8 bits)
  - Indicates the type of header following the IPv6 header.
  - Can be TCP (6), UDP (17), ICMPv6 (58), or Extension Header types.

✔ Hop Limit (8 bits)
  - Same as TTL in IPv4.
  - Decremented by each hop; 0 = discard packet.

✔ Source Address (128 bits)
  - IPv6 address of sender.

✔ Destination Address (128 bits)
  - IPv6 address of receiver.`}
              </pre>
            </div>
          </div>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Key Differences from IPv4</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <pre>
{`✔ No Header Checksum:
   - Removed to reduce processing time (handled by lower layers).

✔ No Fragmentation by Routers:
   - Performed only by source device using Path MTU Discovery.

✔ Simplified Header:
   - Fixed size: 40 bytes (IPv4 has variable header size).
   - Faster processing by routers.

✔ Extension Headers:
   - Optional headers added after main header.
   - Examples: Routing Header, Fragment Header, Authentication Header.`}
              </pre>
            </div>
          </div>
        </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: IPv6 Header</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/ipv6-header.png"
            alt="IPv6 Header Diagram"
          />
        </div>
        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://en.wikipedia.org/wiki/IPv6_packet")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default IPv6Header;

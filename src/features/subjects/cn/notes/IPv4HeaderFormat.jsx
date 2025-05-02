import React from "react";
import "../../../../CSS/CN.css";

function IPv4HeaderFormat() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">IPv4 Header Format Explained in Detail</h1>

        {/* STRUCTURE OVERVIEW */}
        <div className="cn-section">
          <h2 className="cn-subtitle">IPv4 Header Structure Overview</h2>
          <p className="cn-example">
            The IPv4 header is a 20-byte (minimum) to 60-byte (maximum) data
            structure that carries essential information for routing and
            delivering packets in an IP network.
          </p>
        </div>

        {/* HEADER FIELDS TABLE */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Fields and Descriptions</h2>
          <table className="example-table">
            <thead>
              <tr>
                <th>Field</th>
                <th>Size (bits)</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Version</td>
                <td>4</td>
                <td>IP version number (IPv4 = 4)</td>
              </tr>
              <tr>
                <td>Header Length (IHL)</td>
                <td>4</td>
                <td>Number of 32-bit words (min 5 = 20 bytes)</td>
              </tr>
              <tr>
                <td>Type of Service (ToS)</td>
                <td>8</td>
                <td>Used for QoS (e.g., low delay, high throughput)</td>
              </tr>
              <tr>
                <td>Total Length</td>
                <td>16</td>
                <td>Entire IP packet length (header + data)</td>
              </tr>
              <tr>
                <td>Identification</td>
                <td>16</td>
                <td>Unique ID for fragment reassembly</td>
              </tr>
              <tr>
                <td>Flags</td>
                <td>3</td>
                <td>Control flags (e.g., DF = Don’t Fragment)</td>
              </tr>
              <tr>
                <td>Fragment Offset</td>
                <td>13</td>
                <td>Position of fragment in the original packet</td>
              </tr>
              <tr>
                <td>Time To Live (TTL)</td>
                <td>8</td>
                <td>Limits lifetime (decreased by each router)</td>
              </tr>
              <tr>
                <td>Protocol</td>
                <td>8</td>
                <td>Encapsulated protocol (e.g., TCP = 6, UDP = 17)</td>
              </tr>
              <tr>
                <td>Header Checksum</td>
                <td>16</td>
                <td>Error checking for the header only</td>
              </tr>
              <tr>
                <td>Source Address</td>
                <td>32</td>
                <td>Sender's IP address</td>
              </tr>
              <tr>
                <td>Destination Address</td>
                <td>32</td>
                <td>Receiver's IP address</td>
              </tr>
              <tr>
                <td>Options (optional)</td>
                <td>0-40 bytes</td>
                <td>Used for security, timestamp, route recording</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* BIT FORMAT */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Bit-Level Representation</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <pre>
                {`0               8               16              24              31
+--------+--------+-------------------------------+----------------+
| Version|  IHL   |   Type of Service             | Total Length   |
+--------+--------+-------------------------------+----------------+
| Identification                | Flags | Fragment Offset       |
+-------------------------------+-------+------------------------+
| Time to Live  | Protocol      | Header Checksum              |
+---------------+---------------+-------------------------------+
| Source IP Address                                         |
+-------------------------------------------------------------+
| Destination IP Address                                    |
+-------------------------------------------------------------+
| Options (if any) + Padding                                |
+-------------------------------------------------------------+`}
              </pre>
            </div>
          </div>
        </div>

        {/* INDIVIDUAL FIELD EXPLANATIONS */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Detailed Explanation of Each Field</h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <pre>
                {`✔ Version (4 bits):
- Always set to 4 for IPv4
- Ensures correct protocol version interpretation

✔ IHL - Internet Header Length (4 bits):
- Number of 32-bit words in the header
- Minimum: 5 (20 bytes), Maximum: 15 (60 bytes)

✔ Type of Service (8 bits):
- Prioritizes traffic (DSCP, ECN bits now used)
- Example: low-latency for VoIP, high-throughput for FTP

✔ Total Length (16 bits):
- Full length of packet (header + payload)
- Max value: 65,535 bytes

✔ Identification (16 bits):
- Identifies packet fragments uniquely

✔ Flags (3 bits):
- Reserved (0)
- DF (Don't Fragment): if set, disallow fragmentation
- MF (More Fragments): if set, more fragments follow

✔ Fragment Offset (13 bits):
- Position of fragment relative to start of packet
- Measured in units of 8 bytes

✔ TTL (8 bits):
- Limits packet lifespan (router decrements by 1)
- Prevents infinite loops in network

✔ Protocol (8 bits):
- Indicates upper-layer protocol:
  - TCP = 6
  - UDP = 17
  - ICMP = 1

✔ Header Checksum (16 bits):
- Error check only for header (not data)
- Recalculated at each router

✔ Source Address (32 bits):
- IP of sender

✔ Destination Address (32 bits):
- IP of receiver

✔ Options (0–40 bytes):
- Optional features like:
  - Security
  - Route record
  - Timestamp

✔ Padding:
- Ensures header ends on 32-bit boundary`}
              </pre>
            </div>
          </div>
          <div className="cn-section">
            <h2 className="cn-subtitle">IPv4 Fragmentation</h2>
            <p className="cn-example">
              IPv4 fragmentation occurs when a packet is too large to be
              transmitted over a network with a smaller Maximum Transmission
              Unit (MTU). Routers break the large packet into smaller fragments,
              each of which is treated as an independent IP packet and
              reassembled by the destination host.
            </p>

            <div className="cn-grid">
              <div className="cn-grid-item structured">
                <pre>
                  {`✔ Why Fragmentation?
- MTU (e.g., Ethernet MTU = 1500 bytes) limits packet size.
- IP layer breaks packet > MTU into smaller pieces.

✔ Fields Involved in Fragmentation:
1. Identification (16 bits)
   - Same for all fragments of a packet
   - Used to reassemble fragments at the destination

2. Flags (3 bits):
   - Bit 0: Reserved (always 0)
   - Bit 1 (DF - Don't Fragment): 1 = do not fragment
   - Bit 2 (MF - More Fragments): 1 = more fragments follow, 0 = last fragment

3. Fragment Offset (13 bits):
   - Tells position of fragment in the original packet
   - Measured in 8-byte blocks

✔ Reassembly:
- Done only by the destination.
- Uses Identification + Fragment Offset + MF flag

✔ Example:
  - Original packet: 4000 bytes
  - MTU: 1500 bytes → Payload per fragment ≈ 1480 bytes (20 bytes IP header)

  → Fragment 1:
     Offset = 0, MF = 1, Payload = 1480
  → Fragment 2:
     Offset = 185 (1480/8), MF = 1, Payload = 1480
  → Fragment 3:
     Offset = 370, MF = 0, Payload = 1040`}
                </pre>
              </div>
            </div>
          </div>
          <div className="cn-section">
            <h2 className="cn-subtitle">IPv4 Options and Padding</h2>
            <p className="cn-example">
              The "Options" and "Padding" fields are optional parts of the IPv4
              header. These are included only when specific functionalities such
              as security, routing control, or debugging are required. They make
              the IPv4 header variable in length.
            </p>

            <div className="cn-grid">
              <div className="cn-grid-item structured">
                <pre>
                  {`✔ Options Field:
- Present only if the Header Length (HLEN) > 5 (i.e., > 20 bytes).
- Used for special control functions like debugging, routing, timestamping.
- Each option has this format:
  ┌────────┬────────────┬────────────┐
  │ Type   │ Length     │ Data       │
  └────────┴────────────┴────────────┘

✔ Common IPv4 Options:
1. End of Option List (Type = 0)
   - Marks end of options field.

2. No Operation (Type = 1)
   - Used for alignment; can appear multiple times.

3. Record Route (Type = 7)
   - Each router appends its IP address.
   - Useful for debugging and tracing paths.

4. Timestamp (Type = 68)
   - Routers append timestamp when forwarding packet.

5. Security (Type = 130)
   - Provides security levels (e.g., Confidential, Secret, etc.).

6. Loose Source Routing (Type = 131)
   - Allows packet to follow a list of routers but can deviate.

7. Strict Source Routing (Type = 137)
   - Forces packet to follow exact path of routers.

✔ Padding Field:
- Ensures the IPv4 header is a multiple of 32 bits (4 bytes).
- Padding bytes are usually all zeros (0x00).
- Used when options don’t align to 32-bit boundary.

✔ Header Length:
- HLEN field in IPv4 header indicates length in 32-bit words.
- Example: HLEN = 6 → Header size = 6 × 4 = 24 bytes (4 bytes of options or padding).`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* DIAGRAM AND LINK */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: IPv4 Header Format</h2>
          <img
          className="smallImg"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20240621133536/IPv4-Datagram-Header.jpg"
            alt="IPv4 Header Diagram"
          />
        </div>
        <button
          className="infoBtn"
          onClick={() =>
            window.open(
              "https://www.geeksforgeeks.org/introduction-and-ipv4-datagram-header/"
            )
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default IPv4HeaderFormat;

import React from "react";
import "../../../../CSS/CN.css";

function NetworkPerformance() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Network Performance</h1>

        {/* Bandwidth */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Bandwidth</h2>
          <p className="cn-example">
            Bandwidth refers to the maximum capacity of a network link to transmit data, typically measured in bits per second (bps). It represents the "pipe size" of the network, indicating how much data can pass through the network in a given period.
          </p>
          <p className="cn-example">
            Example: A network with 100 Mbps bandwidth can transfer a maximum of 100 megabits of data per second under ideal conditions.
          </p>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Diagram for Bandwidth:

  Maximum data rate (bps) → Amount of data transmitted
  |
  |    → High Bandwidth → Faster transmission
  |    → Low Bandwidth  → Slower transmission
`}
          </pre>
        </div>

        {/* Throughput */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Throughput</h2>
          <p className="cn-example">
            Throughput refers to the actual amount of data transmitted over a network in a given period. It is often lower than bandwidth due to factors like congestion, protocol overheads, or network interference.
          </p>
          <p className="cn-example">
            Example: In an ideal network with a 100 Mbps bandwidth, throughput might be 90 Mbps due to network congestion and other inefficiencies.
          </p>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Diagram for Throughput:

  Throughput (bps) → Actual data transmitted
  |
  |    → Optimized network → High throughput
  |    → Congestion, packet loss → Lower throughput
`}
          </pre>
        </div>

        {/* Latency (Delay) */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Latency (Delay)</h2>
          <p className="cn-example">
            Latency refers to the time it takes for a packet of data to travel from the source to the destination. This delay is typically measured in milliseconds (ms). Latency is crucial for time-sensitive applications like VoIP and online gaming.
          </p>
          <p className="cn-example">
            Example: A network with a latency of 50 ms means there is a 50-millisecond delay before a message reaches its destination.
          </p>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Diagram for Latency:

  Latency (ms) → Time taken for data transfer
  |
  |    → Low latency → Fast communication
  |    → High latency → Delay in communication
`}
          </pre>
        </div>

        {/* Bandwidth-Delay Product */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Bandwidth-Delay Product</h2>
          <p className="cn-example">
            The Bandwidth-Delay Product (BDP) is a metric used to understand the relationship between the bandwidth and latency of a network. It indicates the amount of data that can be in transit at any given time on the network.
          </p>
          <p className="cn-example">
            BDP is calculated as: BDP = Bandwidth (in bits per second) * Latency (in seconds)
          </p>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Diagram for Bandwidth-Delay Product:

  BDP (bits) = Bandwidth * Latency
  |
  |    → High BDP → Large data in transit at once
  |    → Low BDP  → Smaller data packets in transit
`}
          </pre>
        </div>

        {/* Jitter */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Jitter</h2>
          <p className="cn-example">
            Jitter refers to the variation in latency over time, or the inconsistency of delay between packets. High jitter can cause problems in applications that rely on a stable connection, such as video streaming or VoIP.
          </p>
          <p className="cn-example">
            Example: If one packet takes 30 ms to arrive and the next takes 60 ms, the jitter is 30 ms. Low jitter indicates stable transmission, while high jitter can result in packet loss or delays in real-time applications.
          </p>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Diagram for Jitter:

  Jitter (ms) → Variability in delay
  |
  |    → Low jitter → Stable data transfer
  |    → High jitter → Unstable data transfer
`}
          </pre>
        </div>

      </div>
    </div>
  );
}

export default NetworkPerformance;

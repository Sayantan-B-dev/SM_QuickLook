import React from "react";
import "../../../../CSS/CN.css";

function LatencyThroughputBandwidth() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Latency, Throughput & Bandwidth</h1>

        {/* Latency */}
        <div className="cn-section">
          <h2 className="cn-subtitle">1. Latency (Delay)</h2>
          <p className="cn-example">
            Latency is the total time it takes for a data packet to travel from source to destination across a network. It is usually measured in milliseconds (ms).
          </p>
          <p className="cn-example">
            Latency includes:
            <ul className="cn-example list-disc pl-6">
              <li><strong>Propagation Delay:</strong> Time to travel over the medium (e.g., fiber).</li>
              <li><strong>Transmission Delay:</strong> Time to push all packet bits onto the wire.</li>
              <li><strong>Processing Delay:</strong> Time routers take to examine packet headers.</li>
              <li><strong>Queuing Delay:</strong> Time waiting in routing queues.</li>
            </ul>
          </p>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Total Latency = Propagation Delay + Transmission Delay + Processing Delay + Queuing Delay

Example:
If a 1 Mb packet travels through a 100 Mbps link 1000 km long at 2x10^8 m/s:

Propagation Delay = Distance / Speed = 1000km / 2x10^8 m/s = 5ms
Transmission Delay = Packet Size / Bandwidth = 1Mb / 100Mbps = 0.01s = 10ms
Total ≈ 15ms + other delays
`}
          </pre>
        </div>

        {/* Throughput */}
        <div className="cn-section">
          <h2 className="cn-subtitle">2. Throughput</h2>
          <p className="cn-example">
            Throughput is the actual amount of data successfully transmitted from source to destination in a given time period. It's measured in bits per second (bps), Mbps, or Gbps.
          </p>
          <p className="cn-example">
            It represents network performance and is affected by congestion, latency, retransmissions, etc.
          </p>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Throughput = Total Data Transferred / Total Time

Example:
If 600MB is transferred in 1 minute:
Throughput = 600MB / 60s = 10 MBps = 80 Mbps
`}
          </pre>
        </div>

        {/* Bandwidth */}
        <div className="cn-section">
          <h2 className="cn-subtitle">3. Bandwidth</h2>
          <p className="cn-example">
            Bandwidth is the maximum capacity of a network link to transfer data. It’s like the width of a pipe — the broader it is, the more data it can carry at once.
          </p>
          <p className="cn-example">
            Bandwidth is often confused with throughput, but bandwidth is a limit, while throughput is what actually occurs.
          </p>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Bandwidth = Theoretical Maximum Data Rate of a Link

Example:
A 1 Gbps Ethernet cable has a bandwidth of 1 Gbps regardless of how much data is actually being transferred.
`}
          </pre>
        </div>

        {/* Table */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Comparison Table</h2>
          <table className="cn-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Latency</th>
                <th>Throughput</th>
                <th>Bandwidth</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Definition</td>
                <td>Delay in data transmission</td>
                <td>Actual data transferred per unit time</td>
                <td>Maximum data transfer capacity</td>
              </tr>
              <tr>
                <td>Unit</td>
                <td>Milliseconds (ms)</td>
                <td>bps, Mbps, Gbps</td>
                <td>bps, Mbps, Gbps</td>
              </tr>
              <tr>
                <td>Represents</td>
                <td>Speed of communication</td>
                <td>Efficiency</td>
                <td>Capacity</td>
              </tr>
              <tr>
                <td>Affected by</td>
                <td>Distance, processing delays</td>
                <td>Bandwidth, congestion</td>
                <td>Hardware limits</td>
              </tr>
              <tr>
                <td>Example Analogy</td>
                <td>Time it takes water to start coming from a tap</td>
                <td>Volume of water coming out per second</td>
                <td>Size of the pipe</td>
              </tr>
              <tr>
                <td>Improvement Methods</td>
                <td>Use faster links, optimize routing</td>
                <td>Reduce packet loss, congestion</td>
                <td>Upgrade to higher-capacity cables</td>
              </tr>
            </tbody>
          </table>
        </div>


        {/* Learn more */}
        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.kentik.com/kentipedia/latency-vs-throughput-vs-bandwidth/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default LatencyThroughputBandwidth;

import React from "react";
import "../../../../CSS/CN.css";

function PingVsLoopback() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Ping Command vs Loopback Address</h1>

        {/* Ping Command Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">What is Ping?</h2>
          <p className="cn-example">
            <strong>Ping</strong> (Packet Internet Groper) is a network utility used to test the reachability of a host on an IP network. It also measures round-trip time for messages sent from the originating host to a destination computer.
          </p>
          <p className="cn-example">
            It uses **ICMP (Internet Control Message Protocol)** Echo Request and Echo Reply packets.
          </p>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Example:
> ping google.com

Output:
Pinging google.com [142.250.183.14] with 32 bytes of data:
Reply from 142.250.183.14: bytes=32 time=20ms TTL=116
Reply from 142.250.183.14: bytes=32 time=18ms TTL=116
...
`}
          </pre>
        </div>

        {/* Loopback Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">What is Loopback Address?</h2>
          <p className="cn-example">
            A **loopback address** is a special IP address (usually <code>127.0.0.1</code>) used to test network software without physically sending packets over a network. It's used to check if the TCP/IP stack is properly installed and functioning.
          </p>
          <p className="cn-example">
            The loopback interface is a virtual network interface built into the operating system and always available, even when the computer is not connected to any network.
          </p>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Example:
> ping 127.0.0.1

Output:
Pinging 127.0.0.1 with 32 bytes of data:
Reply from 127.0.0.1: bytes=32 time<1ms TTL=128
Reply from 127.0.0.1: bytes=32 time<1ms TTL=128
...
`}
          </pre>
        </div>

        {/* Comparison Table */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Ping vs Loopback: Comparison Table</h2>
          <table className="cn-table">
            <thead>
              <tr>
                <th>Criteria</th>
                <th>Ping</th>
                <th>Loopback</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Purpose</td>
                <td>Checks connectivity with another host or device</td>
                <td>Tests internal network stack of the local system</td>
              </tr>
              <tr>
                <td>Address Used</td>
                <td>Remote IP/domain (e.g., 8.8.8.8, google.com)</td>
                <td>127.0.0.1 (reserved for loopback)</td>
              </tr>
              <tr>
                <td>Protocol</td>
                <td>ICMP (Internet Control Message Protocol)</td>
                <td>No actual packets leave the device</td>
              </tr>
              <tr>
                <td>Connectivity Type</td>
                <td>External network or LAN</td>
                <td>Internal (host-only)</td>
              </tr>
              <tr>
                <td>Network Dependency</td>
                <td>Needs active network interface</td>
                <td>No dependency on network hardware</td>
              </tr>
              <tr>
                <td>Usage</td>
                <td>Troubleshooting reachability, latency</td>
                <td>Troubleshooting TCP/IP stack</td>
              </tr>
              <tr>
                <td>Example Command</td>
                <td><code>ping google.com</code></td>
                <td><code>ping 127.0.0.1</code></td>
              </tr>
              <tr>
                <td>TTL Value</td>
                <td>Varies depending on hop count</td>
                <td>Typically fixed, low (e.g., 128)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/what-is-a-loopback-address/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default PingVsLoopback;

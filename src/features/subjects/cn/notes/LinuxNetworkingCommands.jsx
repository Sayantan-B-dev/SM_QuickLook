import React from "react";
import "../../../../CSS/CN.css";

function LinuxNetworkingCommands() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">All Important Linux Networking Commands</h1>

        <div className="cn-section">
          <h2 className="cn-subtitle">Command Reference Table</h2>
          <table className="cn-table">
            <thead>
              <tr>
                <th>Command</th>
                <th>Purpose</th>
                <th>Syntax</th>
                <th>Example</th>
                <th>Expected Output</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ifconfig</td>
                <td>Displays or configures a network interface (older tool)</td>
                <td>ifconfig [interface]</td>
                <td><pre>ifconfig</pre></td>
                <td>IP address, netmask, broadcast, MAC address info</td>
              </tr>
              <tr>
                <td>ip a</td>
                <td>Shows all IP addresses and interfaces (modern alternative to ifconfig)</td>
                <td>ip a</td>
                <td><pre>ip a</pre></td>
                <td>Interface list with IP and MAC info</td>
              </tr>
              <tr>
                <td>ip link</td>
                <td>Manage and show network interfaces</td>
                <td>ip link show</td>
                <td><pre>ip link show</pre></td>
                <td>Detailed state of interfaces (UP, DOWN, MTU, etc.)</td>
              </tr>
              <tr>
                <td>ping</td>
                <td>Test network connectivity to a host</td>
                <td>ping [hostname/IP]</td>
                <td><pre>ping google.com</pre></td>
                <td>Replies with latency time (ms)</td>
              </tr>
              <tr>
                <td>netstat</td>
                <td>Show network connections, routing tables, interface stats</td>
                <td>netstat -tulnp</td>
                <td><pre>netstat -tulnp</pre></td>
                <td>List of open ports, listening processes</td>
              </tr>
              <tr>
                <td>ss</td>
                <td>Faster replacement for netstat</td>
                <td>ss -tulwn</td>
                <td><pre>ss -tulwn</pre></td>
                <td>TCP/UDP sockets and port status</td>
              </tr>
              <tr>
                <td>traceroute</td>
                <td>Trace route to a remote host</td>
                <td>traceroute [hostname]</td>
                <td><pre>traceroute google.com</pre></td>
                <td>List of hops with response time</td>
              </tr>
              <tr>
                <td>nslookup</td>
                <td>Query DNS servers</td>
                <td>nslookup [domain]</td>
                <td><pre>nslookup openai.com</pre></td>
                <td>IP address of domain and DNS info</td>
              </tr>
              <tr>
                <td>dig</td>
                <td>Advanced DNS querying</td>
                <td>dig [domain]</td>
                <td><pre>dig openai.com</pre></td>
                <td>DNS record sections (A, NS, etc.)</td>
              </tr>
              <tr>
                <td>hostname</td>
                <td>Shows or sets the system's hostname</td>
                <td>hostname</td>
                <td><pre>hostname</pre></td>
                <td>Your machine’s hostname</td>
              </tr>
              <tr>
                <td>nmcli</td>
                <td>Network Manager CLI to control interfaces</td>
                <td>nmcli dev status</td>
                <td><pre>nmcli dev status</pre></td>
                <td>Shows interface state (connected, disconnected)</td>
              </tr>
              <tr>
                <td>ethtool</td>
                <td>Shows or changes Ethernet settings</td>
                <td>ethtool [interface]</td>
                <td><pre>ethtool eth0</pre></td>
                <td>Speed, duplex, link status</td>
              </tr>
              <tr>
                <td>iwconfig</td>
                <td>Configure wireless interfaces</td>
                <td>iwconfig [interface]</td>
                <td><pre>iwconfig wlan0</pre></td>
                <td>SSID, signal strength, mode</td>
              </tr>
              <tr>
                <td>curl</td>
                <td>Transfer data from or to a server (HTTP requests)</td>
                <td>curl [URL]</td>
                <td><pre>curl https://api.ipify.org</pre></td>
                <td>Your public IP address</td>
              </tr>
              <tr>
                <td>wget</td>
                <td>Download files from web</td>
                <td>wget [URL]</td>
                <td><pre>wget http://example.com/file.txt</pre></td>
                <td>Downloads file to current dir</td>
              </tr>
              <tr>
                <td>tcpdump</td>
                <td>Capture network packets</td>
                <td>tcpdump -i [interface]</td>
                <td><pre>tcpdump -i eth0</pre></td>
                <td>Real-time packet dump from eth0</td>
              </tr>
              <tr>
                <td>nmap</td>
                <td>Port scanner and network mapper</td>
                <td>nmap [target]</td>
                <td><pre>nmap 192.168.1.1</pre></td>
                <td>Open ports, OS detection, services</td>
              </tr>
              <tr>
                <td>whois</td>
                <td>Domain information query</td>
                <td>whois [domain]</td>
                <td><pre>whois openai.com</pre></td>
                <td>Registrar, name servers, expiry info</td>
              </tr>
              <tr>
                <td>route</td>
                <td>Displays routing table (older tool)</td>
                <td>route -n</td>
                <td><pre>route -n</pre></td>
                <td>Destination gateways, subnet masks</td>
              </tr>
              <tr>
                <td>ip route</td>
                <td>Modern tool to show/modify routing table</td>
                <td>ip route show</td>
                <td><pre>ip route</pre></td>
                <td>Default routes and custom paths</td>
              </tr>
            </tbody>
          </table>
        </div>

        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/network-configuration-trouble-shooting-commands-linux/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default LinuxNetworkingCommands;

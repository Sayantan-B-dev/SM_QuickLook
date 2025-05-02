import React from "react";
import "../../../../CSS/CN.css";


function NAT() {
  return (
    <div className="cn-card">
      <div className="cn-section">
        <h2 className="cn-subtitle">Network Address Translation (NAT)</h2>
        <p className="cn-example">
          **Network Address Translation (NAT)** is a method used in computer
          networks to modify the source or destination IP address of packets. It
          is typically used in **routers** or **firewalls** to allow devices in
          a private network (like a home or corporate network) to communicate
          with external networks (like the internet) while hiding internal IP
          addresses. The main goal of NAT is to allow multiple devices within a
          private network to share a single public IP address.
        </p>

        {/* Purpose of NAT */}
        <h3 className="cn-subtitle">Purpose of NAT</h3>
        <p className="cn-example">
          NAT serves two major purposes:
          <ul>
            <li>
              <strong>IP Address Conservation</strong>: Public IP addresses are
              limited. NAT allows multiple devices to share one public IP
              address, conserving the limited resource of public IPs.
            </li>
            <li>
              <strong>Security</strong>: By hiding the internal IP addresses of
              devices in a private network, NAT provides an added layer of
              security. External devices only see the public IP address of the
              NAT device (usually a router or firewall), preventing direct
              access to internal devices.
            </li>
          </ul>
        </p>

        {/* How NAT Works */}
        <h3 className="cn-subtitle">How NAT Works</h3>
        <p className="cn-example">
          NAT modifies the source or destination address of packets traveling
          through a network. When a device inside a private network sends a
          request to the internet, the NAT router changes the source IP address
          to its own public IP address. When a response comes back to the
          router, it checks its NAT table to translate the public IP address
          back to the corresponding private IP address and forwards the response
          to the correct internal device.
        </p>

        <pre>
          {`Example:
1. Device (192.168.1.10) inside a private network sends a packet to the internet.
2. NAT router changes the source IP address from 192.168.1.10 to its public IP (203.0.113.1).
3. The packet is sent to the internet.
4. The destination server responds to the NAT router’s public IP.
5. The NAT router uses its NAT table to translate the public IP back to 192.168.1.10 and forwards the response to the internal device.`}
        </pre>

        {/* Types of NAT */}
        <h3 className="cn-subtitle">Types of NAT</h3>
        <p className="cn-example">
          There are several types of NAT, each with different behaviors:
          <ul>
            <li>
              <strong>Static NAT</strong>: A one-to-one mapping between a
              private IP address and a public IP address. This type is usually
              used when a device (such as a web server) needs to be consistently
              accessible from the outside world with the same public IP.
            </li>
            <li>
              <strong>Dynamic NAT</strong>: A pool of public IP addresses is
              used to map to private IP addresses dynamically. When a device
              needs to communicate with the internet, it is assigned a public IP
              from the pool.
            </li>
            <li>
              <strong>Port Address Translation (PAT)</strong>: Also known as
              "overloading," PAT allows multiple devices on a private network to
              share a single public IP address. Each outgoing connection is
              differentiated by a unique port number.
            </li>
          </ul>
        </p>

        {/* Example of NAT Table */}
        <h3 className="cn-subtitle">Example of NAT Table</h3>
        <p className="cn-example">
          The NAT router keeps a table to track which internal IP and port
          numbers correspond to the public IP and port numbers. Here’s an
          example:
        </p>
        <pre>
          {`Internal IP    | Internal Port | Public IP     | Public Port
----------------------------------------------------------
192.168.1.5    | 12345         | 203.0.113.1   | 56789
192.168.1.6    | 23456         | 203.0.113.1   | 67890`}
        </pre>
        <p className="cn-example">
          When the router receives a packet on public IP `203.0.113.1` at port
          `56789`, it forwards it to the internal IP `192.168.1.5` at port
          `12345` based on this table.
        </p>

        {/* Benefits of NAT */}
        <h3 className="cn-subtitle">Benefits of NAT</h3>
        <p className="cn-example">
          NAT has several benefits, including:
          <ul>
            <li>
              <strong>IP Address Conservation</strong>: NAT reduces the need for
              a large number of public IP addresses, allowing multiple devices
              to share a single public IP.
            </li>
            <li>
              <strong>Security</strong>: By hiding the internal network
              structure, NAT provides an additional layer of security. External
              devices can only see the public IP, not the internal ones.
            </li>
            <li>
              <strong>Simplified Network Management</strong>: NAT helps network
              administrators by simplifying the need for assigning and managing
              multiple public IP addresses for internal devices.
            </li>
          </ul>
        </p>

        {/* Challenges of NAT */}
        <h3 className="cn-subtitle">Challenges of NAT</h3>
        <p className="cn-example">
          Although NAT provides benefits, it also comes with some challenges:
          <ul>
            <li>
              <strong>Breaking End-to-End Connectivity</strong>: NAT can disrupt
              peer-to-peer communication since both devices need to be aware of
              the network configuration.
            </li>
            <li>
              <strong>Performance Issues</strong>: Translating each packet can
              introduce latency and reduce network performance.
            </li>
            <li>
              <strong>Problems with Certain Applications</strong>: Some
              applications (e.g., VoIP, P2P) that rely on direct end-to-end
              connections may not work well with NAT without special
              configurations.
            </li>
          </ul>
        </p>

        {/* NAT Traversal */}
        <h3 className="cn-subtitle">NAT Traversal</h3>
        <p className="cn-example">
          NAT traversal refers to the methods and techniques used to overcome
          the limitations of NAT, especially for peer-to-peer communication.
          Some common NAT traversal techniques include:
          <ul>
            <li>
              <strong>STUN (Session Traversal Utilities for NAT)</strong>: A
              protocol that allows devices behind NAT to discover their public
              IP address and port number.
            </li>
            <li>
              <strong>TURN (Traversal Using Relays around NAT)</strong>: A
              protocol that relays data through a server to help devices behind
              NAT communicate.
            </li>
            <li>
              <strong>UPnP (Universal Plug and Play)</strong>: A set of
              networking protocols that allows devices behind NAT to
              automatically configure port forwarding on the NAT router.
            </li>
          </ul>
        </p>
      </div>
      <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: ARP Process</h2>
          <img
          className="smallImg"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20250203170255888522/7.jpg"
            alt="ARP Process Diagram"
          />
        </div>

        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/network-address-translation-nat/")
          }
        >
          Know more
        </button>
    </div>
  );
}

export default NAT;

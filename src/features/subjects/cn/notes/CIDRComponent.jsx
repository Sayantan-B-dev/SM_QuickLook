import React from "react";
import "../../../../CSS/CN.css";

function CIDRComponent() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Classless Inter-Domain Routing (CIDR)</h1>

        {/* Introduction Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Introduction to CIDR</h2>
          <p className="cn-example">
            Classless Inter-Domain Routing (CIDR) is a method for allocating and routing IP addresses that is more efficient and flexible than the traditional class-based system (Class A, B, and C). CIDR was introduced in 1993 to improve the scalability of IP address allocation, reduce address wastage, and enhance the routing process. The CIDR system allows for more precise control over IP address blocks by utilizing variable-length subnet masking (VLSM), which reduces the size of routing tables and allows for better utilization of available address space.
          </p>
        </div>

        {/* Purpose of CIDR Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Purpose of CIDR</h2>
          <p className="cn-example">
            The primary purpose of CIDR is to provide an alternative to the traditional IP address class system and to improve the efficiency of routing. CIDR achieves this by:
          </p>
          <ul className="cn-example list-disc pl-6">
            <li><strong>Efficient IP Address Utilization:</strong> CIDR allows network administrators to allocate IP address ranges more flexibly and efficiently.</li>
            <li><strong>Smaller Routing Tables:</strong> By using CIDR, ISPs can aggregate multiple networks into a single routing entry, reducing the size of routing tables in routers.</li>
            <li><strong>Eliminating Wasted Addresses:</strong> The traditional class-based system often resulted in wasted IP addresses, especially for smaller networks. CIDR helps avoid this by offering variable-length subnetting.</li>
            <li><strong>Enhancing Routing Performance:</strong> CIDR minimizes the number of routes needed to be stored in routers, which improves routing performance.</li>
          </ul>
        </div>

        {/* CIDR Notation Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">CIDR Notation</h2>
          <p className="cn-example">
            CIDR notation represents an IP address and its associated network mask. It is written in the format of <code>IP Address/Prefix Length</code>, where:
          </p>
          <ul className="cn-example list-disc pl-6">
            <li><strong>IP Address:</strong> The 32-bit IPv4 address in decimal format (e.g., 192.168.1.0).</li>
            <li><strong>Prefix Length:</strong> The number of bits in the subnet mask that are used for the network portion of the address (e.g., /24). This determines the size of the network.</li>
          </ul>
          <p className="cn-example">
            For example, the CIDR notation <code>192.168.1.0/24</code> represents the IP address <code>192.168.1.0</code> with a subnet mask of <code>255.255.255.0</code>, meaning the first 24 bits are allocated for the network portion and the remaining 8 bits are available for host addresses.
          </p>
        </div>

        {/* CIDR Prefix Length and Subnetting Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">CIDR Prefix Length and Subnetting</h2>
          <p className="cn-example">
            The prefix length in CIDR notation indicates how many bits of the IP address are dedicated to the network part. The remaining bits are used for host addresses within that network. The larger the prefix, the smaller the network.
          </p>
          <p className="cn-example">
            For example, the difference between <code>/24</code> and <code>/26</code> is:
          </p>
          <ul className="cn-example list-disc pl-6">
            <li><strong>/24:</strong> This subnet has 256 IP addresses (including the network address and broadcast address).</li>
            <li><strong>/26:</strong> This subnet has 64 IP addresses, with a smaller network and more precise allocation of IP addresses.</li>
          </ul>
          <p className="cn-example">
            CIDR allows networks to be divided or merged based on their required size, providing more flexibility than traditional class-based addressing, which is limited to fixed sizes.
          </p>
        </div>

        {/* CIDR and Routing Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">CIDR and Routing</h2>
          <p className="cn-example">
            CIDR plays a significant role in routing, particularly in the aggregation of routes. With CIDR, ISPs and network administrators can combine several networks into a single routing entry, making routing tables smaller and more efficient.
          </p>
          <p className="cn-example">
            For example, without CIDR, an ISP may need separate routes for multiple subnets such as:
            <ul className="cn-example list-disc pl-6">
              <li><code>192.168.1.0/24</code></li>
              <li><code>192.168.2.0/24</code></li>
              <li><code>192.168.3.0/24</code></li>
            </ul>
            With CIDR, these can be aggregated into a single route:
            <ul className="cn-example list-disc pl-6">
              <li><code>192.168.0.0/22</code> (covers the ranges from 192.168.0.0 to 192.168.3.255)</li>
            </ul>
          </p>
        </div>

        {/* CIDR Block Example Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">CIDR Block Example</h2>
          <p className="cn-example">
            Let's take a closer look at how a CIDR block is allocated. Consider the CIDR block <code>10.0.0.0/24</code>. This means that the first 24 bits represent the network portion, and the last 8 bits are available for hosts. In total, there are 256 possible IP addresses within this block.
          </p>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Network Address: 10.0.0.0
Subnet Mask:     255.255.255.0
Range:           10.0.0.0 - 10.0.0.255
Usable IPs:     10.0.0.1 - 10.0.0.254
Broadcast IP:    10.0.0.255
`}
          </pre>
        </div>

        {/* CIDR and IP Address Allocation Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">CIDR and IP Address Allocation</h2>
          <p className="cn-example">
            One of the key benefits of CIDR is its ability to allocate IP addresses more efficiently. Traditional class-based addressing often resulted in the allocation of too many or too few IP addresses, but CIDR allows network administrators to allocate only the number of IP addresses they need.
          </p>
          <p className="cn-example">
            For instance, a company may need just 20 IP addresses for a small office. Instead of being forced to use an entire class C block with 256 addresses, they could use a smaller CIDR block such as <code>192.168.1.0/27</code>, which provides exactly 32 IP addresses (30 usable).
          </p>
        </div>

        {/* CIDR Diagram Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: CIDR Representation</h2>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
CIDR Block: 192.168.0.0/24
Network Address: 192.168.0.0

192.168.0.0 --------------------------> Network (192.168.0.0 to 192.168.0.255)
|
|-- Subnet Mask (255.255.255.0)
|
|-- Available Host IPs: 192.168.0.1 to 192.168.0.254
`}
          </pre>
        </div>

        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/classless-inter-domain-routing-cidr/")
          }
        >
          Know More
        </button>
      </div>
    </div>
  );
}

export default CIDRComponent;

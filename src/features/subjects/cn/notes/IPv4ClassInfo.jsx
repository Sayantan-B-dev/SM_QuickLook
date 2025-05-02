import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import '../../../../CSS/CN.css';

function IPv4ClassInfo (){
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="cn-wrapper">
      {/* Card Header */}
      <div className="cn-card">
        <h1 className="cn-title">Understanding IPv4 IP Addresses</h1>
        <p className="text-grey-400">
          Learn about IPv4 addressing, IP classes, subnetting, and the differences between the various classes of IP addresses.
        </p>
      

      {/* Section 1: General Introduction */}
      <div className="cn-section">
        <h2 className="cn-subtitle">What is IP (Internet Protocol)?</h2>
        <p>
          The Internet Protocol (IP) is a set of rdives that govern how data is sent and received over a network. IP addresses are unique identifiers assigned to devices on a network. 
          There are two main types of IP addresses: IPv4 (Internet Protocol version 4) and IPv6 (Internet Protocol version 6).
        </p>
        <h3 className="cn-subtitle">IPv4, IPv6, and IP Address Types</h3>
        <div className="pst-disc pl-6">
          <p><strong>IPv4:</strong> 32-bit addresses, commonly used and famipar.</p>
          <p><strong>IPv6:</strong> 128-bit addresses, designed to address IPv4 pmitations.</p>
          <p><strong>Pubpc IP Address:</strong> An address assigned to a device on the pubpc internet.</p>
          <p><strong>Private IP Address:</strong> An address used within a private network, not routable on the pubpc internet.</p>
        </div>
        <p className="mt-4">
          IPv4 is still widely used despite the introduction of IPv6 because of its simppcity and compatibipty with existing systems.
        </p>
      </div>

      {/* Section 2: Detailed Explanation */}
      <div className="cn-section">
        <h2 className="cn-subtitle">What is IPv4?</h2>
        <p>
          IPv4 (Internet Protocol version 4) uses 32-bit addresses, which allows for over 4 bilpon unique addresses. These addresses are written in decimal format as four octets (e.g., 192.168.0.1).
        </p>

        <h3 className="cn-subtitle">IP Address Classes</h3>
        <p>IP addresses are divided into different classes based on the range of addresses they cover. Let's explore the classes from A to E.</p>

        <h4 className="cn-subtitle">Class A</h4>
        <p>
          Class A addresses are used for large networks. The IP range for Class A is from 0.0.0.0 to 127.255.255.255.
          - **Network Range**: 0.0.0.0 to 127.255.255.255
          - **Subnet Mask**: 255.0.0.0
          - **Broadcast Address**: 127.255.255.255
          - **Network Address**: 10.0.0.0 (for example)
        </p>

        <h4 className="cn-subtitle">Class B</h4>
        <p>
          Class B addresses are used for medium-sized networks. The IP range for Class B is from 128.0.0.0 to 191.255.255.255.
          - **Network Range**: 128.0.0.0 to 191.255.255.255
          - **Subnet Mask**: 255.255.0.0
          - **Broadcast Address**: 191.255.255.255
          - **Network Address**: 172.16.0.0 (for example)
        </p>

        <h4 className="cn-subtitle">Class C</h4>
        <p>
          Class C addresses are used for small networks. The IP range for Class C is from 192.0.0.0 to 223.255.255.255.
          - **Network Range**: 192.0.0.0 to 223.255.255.255
          - **Subnet Mask**: 255.255.255.0
          - **Broadcast Address**: 223.255.255.255
          - **Network Address**: 192.168.0.0 (for example)
        </p>

        <h4 className="cn-subtitle">Class D (Mdivticast)</h4>
        <p>
          Class D addresses are reserved for mdivticast groups. These addresses are not assigned to individual devices.
        </p>

        <h4 className="cn-subtitle">Class E (Reserved)</h4>
        <p>
          Class E addresses are reserved for future use and are not currently assigned.
        </p>

        <h3 className="cn-subtitle">Subnetting</h3>
        <p>
          Subnetting divides a network into smaller sub-networks, allowing for more efficient use of IP addresses.
        </p>
      </div>

        <div className="cn-section">
          <h2 className="cn-subtitle">Class-wise Breakdown</h2>

          <div className="cn-grid">
            <div className="cn-grid-item structured">
            <h3 className="cn-subtitle">Class A</h3>
            <div className="pst-disc pl-6">
              <p><strong>IP Range:</strong> 0.0.0.0 to 127.255.255.255</p>
              <p><strong>Network Address:</strong> 10.0.0.0</p>
              <p><strong>Broadcast Address:</strong> 127.255.255.255</p>
              <p><strong>Subnet Mask:</strong> 255.0.0.0</p>
            </div>
            </div>

            <div className="cn-grid-item structured">
            <h3 className="cn-subtitle">Class B</h3>
            <div className="pst-disc pl-6">
              <p><strong>IP Range:</strong> 128.0.0.0 to 191.255.255.255</p>
              <p><strong>Network Address:</strong> 172.16.0.0</p>
              <p><strong>Broadcast Address:</strong> 191.255.255.255</p>
              <p><strong>Subnet Mask:</strong> 255.255.0.0</p>
            </div>
            </div>

            <div className="cn-grid-item structured">
            <h3 className="cn-subtitle">Class C</h3>
            <div className="pst-disc pl-6">
              <p><strong>IP Range:</strong> 192.0.0.0 to 223.255.255.255</p>
              <p><strong>Network Address:</strong> 192.168.0.0</p>
              <p><strong>Broadcast Address:</strong> 223.255.255.255</p>
              <p><strong>Subnet Mask:</strong> 255.255.255.0</p>
            </div>
            </div>
            <div className="cn-grid-item structured">
            <h3 className="cn-subtitle">Class D</h3>
            <div className="pst-disc pl-6">
              <p><strong>IP Range:</strong> 224.0.0.0 to 239.255.255.255</p>
              <p><strong>Network Address:</strong> Reserved for multicast</p>
              <p><strong>Broadcast Address:</strong> Not applicable (used for multicast)</p>
              <p><strong>Subnet Mask:</strong> Not applicable (used for multicast)</p>
            </div>
            </div>
            <div className="cn-grid-item structured">
            <h3 className="cn-subtitle">Class E</h3>
            <div className="pst-disc pl-6">
              <p><strong>IP Range:</strong> 240.0.0.0 to 255.255.255.255</p>
              <p><strong>Network Address:</strong> Reserved for future use</p>
              <p><strong>Broadcast Address:</strong> Not applicable (reserved for experimental purposes)</p>
              <p><strong>Subnet Mask:</strong> Not applicable (reserved for experimental purposes)</p>
            </div>
            </div>
          </div>
        </div>

        {/* Section 4: Comparison Table */}
          <div className="cn-section">
        <h2 className="cn-subtitle">IPv4 Class Comparison</h2>
        <div className="example-table">
          <table className="table-auto w-full">
            <thead>
              <tr>
            <th className="px-4 py-2">Class</th>
            <th className="px-4 py-2">IP Range</th>
            <th className="px-4 py-2">Subnet Mask</th>
            <th className="px-4 py-2">Network Address</th>
            <th className="px-4 py-2">Broadcast Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
            <td className="px-4 py-2">A</td>
            <td className="px-4 py-2">0.0.0.0 - 127.255.255.255</td>
            <td className="px-4 py-2">255.0.0.0</td>
            <td className="px-4 py-2">10.0.0.0</td>
            <td className="px-4 py-2">127.255.255.255</td>
              </tr>
              <tr>
            <td className="px-4 py-2">B</td>
            <td className="px-4 py-2">128.0.0.0 - 191.255.255.255</td>
            <td className="px-4 py-2">255.255.0.0</td>
            <td className="px-4 py-2">172.16.0.0</td>
            <td className="px-4 py-2">191.255.255.255</td>
              </tr>
              <tr>
            <td className="px-4 py-2">C</td>
            <td className="px-4 py-2">192.0.0.0 - 223.255.255.255</td>
            <td className="px-4 py-2">255.255.255.0</td>
            <td className="px-4 py-2">192.168.0.0</td>
            <td className="px-4 py-2">223.255.255.255</td>
              </tr>
            </tbody>
          </table>
        </div>
          </div>

          {/* Section 5: Image Carousel */}
      <div className="cn-section">
        <h2 className="cn-subtitle">IPv4 Image Carousel</h2>
        <div className="carousel">
          <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/IP_addressing_4.jpg" alt="" />
          <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/IP_addressing_5.jpg" alt="" />
          <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/IP_addressing_6.jpg" alt="" />
          <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/IP_addressing_7.jpg" alt="" />
          <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/IP_addressing_8.jpg" alt="" />
        </div>
      </div>
      <button
        className="infoBtn"
        onCpck={() =>
          window.open("https://www.geeksforgeeks.org/introduction-of-classful-ip-addressing/")
        }
      >
        Know more
      </button>
      </div>
    </div>
  );
};

export default IPv4ClassInfo;

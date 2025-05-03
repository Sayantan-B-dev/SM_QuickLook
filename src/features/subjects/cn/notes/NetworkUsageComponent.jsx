import React from "react";
import "../../../../CSS/CN.css";

function NetworkUsageComponent() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Usage of Computer Networks</h1>

        {/* Introduction Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Introduction to Network Usage</h2>
          <p className="cn-example">
            Computer networks are an integral part of modern computing, enabling communication and data exchange between devices. Networks are used in a variety of ways across different industries, serving essential functions in both personal and business environments. By connecting computers and other devices, networks facilitate data sharing, resource access, and remote communications.
          </p>
        </div>

        {/* Primary Uses of Networks */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Primary Uses of Computer Networks</h2>
          <p className="cn-example">
            Computer networks enable a wide range of activities. Here are the primary uses of computer networks:
          </p>

          <h3 className="cn-subtitle">1. Communication</h3>
          <p className="cn-example">
            One of the most fundamental uses of computer networks is communication. Networks allow individuals and organizations to communicate through various methods, including email, video calls, instant messaging, and social media platforms. The internet, powered by complex networking systems, is the backbone of these communication tools, enabling people worldwide to stay connected.
          </p>

          <h3 className="cn-subtitle">2. File Sharing</h3>
          <p className="cn-example">
            File sharing is another essential function of computer networks. Networks allow users to share files, documents, images, and videos across local or global systems. With cloud storage services like Google Drive and Dropbox, users can store and access data remotely, making file sharing easy and efficient.
          </p>

          <h3 className="cn-subtitle">3. Remote Access</h3>
          <p className="cn-example">
            Networks enable remote access to systems and resources, allowing users to access their workstations or files from remote locations. This is particularly useful for businesses with employees working from different locations or for individuals who need access to their personal computers or company resources when away from the office. VPNs (Virtual Private Networks) are commonly used to ensure secure remote connections to private networks.
          </p>

          <h3 className="cn-subtitle">4. Internet of Things (IoT)</h3>
          <p className="cn-example">
            IoT is one of the most exciting and emerging uses of computer networks. Networks are used to connect everyday objects—such as smart thermostats, refrigerators, wearables, and industrial machines—to the internet, enabling them to send and receive data. IoT improves automation and efficiency in homes, workplaces, healthcare, and manufacturing industries.
          </p>

          <h3 className="cn-subtitle">5. Resource Sharing</h3>
          <p className="cn-example">
            Networks allow for the sharing of various resources, such as printers, internet access, and hardware devices. In a networked environment, multiple users can share these resources, reducing costs and enhancing efficiency. For example, in an office setting, employees can use a single printer over the network without needing to be physically connected to it.
          </p>

          <h3 className="cn-subtitle">6. Online Services and Applications</h3>
          <p className="cn-example">
            Many of the applications and services we use today are made possible by computer networks. Streaming platforms (e.g., Netflix, YouTube), online banking, e-commerce websites, and cloud-based applications rely on the internet to provide users with services in real-time. These applications depend on stable, high-speed networks to function effectively.
          </p>

          <h3 className="cn-subtitle">7. Collaboration and Social Networking</h3>
          <p className="cn-example">
            Computer networks are vital for collaboration and social networking. Platforms like Facebook, LinkedIn, and Twitter allow users to connect with friends, family, colleagues, and businesses. Collaborative tools such as Google Docs, Microsoft Teams, and Slack enable people to work together across different locations by sharing documents, making edits, and having real-time discussions.
          </p>

        </div>

        {/* Types of Networks Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Types of Networks and Their Uses</h2>
          <p className="cn-example">
            Different types of computer networks are used depending on the size and scope of the system. Some of the most common types include:
          </p>

          <h3 className="cn-subtitle">1. Local Area Network (LAN)</h3>
          <p className="cn-example">
            A LAN is a network that covers a small geographical area, such as a home, office, or school. It enables devices to communicate with one another within the local environment. LANs are often used for resource sharing, such as accessing printers and files or connecting devices to the internet.
          </p>

          <h3 className="cn-subtitle">2. Wide Area Network (WAN)</h3>
          <p className="cn-example">
            A WAN covers a large geographical area, such as a city, country, or even a continent. The internet is the largest example of a WAN. WANs enable communication between devices located in different parts of the world.
          </p>

          <h3 className="cn-subtitle">3. Metropolitan Area Network (MAN)</h3>
          <p className="cn-example">
            A MAN is typically used to connect networks within a city or large campus. It is larger than a LAN but smaller than a WAN. MANs are often used by businesses and service providers to link multiple buildings or office locations within a single geographic area.
          </p>

          <h3 className="cn-subtitle">4. Personal Area Network (PAN)</h3>
          <p className="cn-example">
            A PAN is a small network that typically consists of a few devices, such as smartphones, laptops, or Bluetooth devices, all within close proximity. These networks are typically used for personal use, like connecting a smartphone to a laptop or Bluetooth speakers.
          </p>

        </div>

        {/* Diagram Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: Network Usage Overview</h2>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Network Usage Categories:
  1. Communication: Email, messaging, voice calls, video conferencing
  2. File Sharing: Cloud storage, peer-to-peer sharing
  3. Remote Access: VPN, secure file access from remote locations
  4. IoT: Smart devices, connected appliances, healthcare systems
  5. Resource Sharing: Printer sharing, internet access, device sharing
  6. Online Services: Streaming, e-commerce, banking, gaming
  7. Collaboration: Social media, collaborative document editing, chat tools

Network Types:
  - LAN: Small scale, local networks within a home or office
  - WAN: Large scale, global networks like the internet
  - MAN: City-wide networks connecting offices or campuses
  - PAN: Personal networks for small devices (e.g., Bluetooth)
`}
          </pre>
        </div>

      </div>
    </div>
  );
}

export default NetworkUsageComponent;

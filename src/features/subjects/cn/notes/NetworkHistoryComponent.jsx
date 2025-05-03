import React from "react";
import "../../../../CSS/CN.css";

function NetworkHistoryComponent() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Definition & History of Networks</h1>

        {/* Introduction Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Introduction to Networks</h2>
          <p className="cn-example">
            A network, in the context of computer science and telecommunications, refers to a system of interconnected devices, nodes, or systems that communicate with one another. These devices or nodes can include computers, routers, servers, and other types of hardware. Networks can be categorized based on their size, design, and purpose, ranging from small local area networks (LANs) to global wide area networks (WANs) such as the internet.
          </p>
        </div>

        {/* History of Networks Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">History of Networks</h2>
          <p className="cn-example">
            The history of computer networks traces back to the 1960s when researchers began exploring ways to connect computers for sharing information and resources. This pursuit of interconnecting computers led to the creation of the first networks, which eventually laid the foundation for the internet as we know it today.
          </p>
          
          <h3 className="cn-subtitle">Early Developments</h3>
          <p className="cn-example">
            The idea of connecting computers started with the development of the ARPANET (Advanced Research Projects Agency Network) in the late 1960s, funded by the U.S. Department of Defense. The ARPANET was the first network to use packet-switching technology, which allowed data to be broken into small packets and sent across different routes to their destination. This was a huge leap from the traditional circuit-switching method used in telephone networks.
          </p>

          <h3 className="cn-subtitle">1970s: The Birth of Protocols</h3>
          <p className="cn-example">
            In the 1970s, computer scientists began developing standardized protocols to make network communication possible. The two most notable protocols of this era were TCP (Transmission Control Protocol) and IP (Internet Protocol), which together form the backbone of modern network communications. The development of these protocols in the early 1970s by Vint Cerf and Robert Kahn was a major breakthrough, paving the way for the growth of global networking.
          </p>

          <h3 className="cn-subtitle">1980s: The Expansion of Networks</h3>
          <p className="cn-example">
            The 1980s saw the expansion of networking as various institutions, universities, and private companies started building networks to communicate with each other. The use of protocols like TCP/IP continued to grow, and by the mid-1980s, these protocols were standardized by the Internet Engineering Task Force (IETF). The concept of local area networks (LANs) emerged, allowing computers within close proximity (such as in a building or office) to share resources like printers, files, and internet access.
          </p>

          <h3 className="cn-subtitle">1990s: The Rise of the Internet</h3>
          <p className="cn-example">
            In the 1990s, the development of the World Wide Web (WWW) by Tim Berners-Lee revolutionized how networks were used. The web allowed users to access and share information through websites, marking the start of the internet’s widespread use. The early days of the internet were primarily academic and research-based, but commercial entities soon started to recognize its potential for business. This led to the rapid growth of the internet and the establishment of internet service providers (ISPs) that enabled individuals to connect to the global network.
          </p>

          <h3 className="cn-subtitle">2000s and Beyond: Global Connectivity</h3>
          <p className="cn-example">
            By the 2000s, the internet had become a ubiquitous part of daily life, facilitating everything from communication to commerce. High-speed broadband connections, mobile networks, and wireless technologies such as Wi-Fi allowed people to access the internet from virtually anywhere. The growth of social media, e-commerce, and cloud computing during this time further connected the world. Networks became faster, more reliable, and more complex, with the introduction of technologies like fiber optics, 5G, and the evolution of Wi-Fi standards.
          </p>

          <h3 className="cn-subtitle">Modern-Day Networks</h3>
          <p className="cn-example">
            Today, networks continue to evolve, with innovations such as the Internet of Things (IoT), cloud computing, and artificial intelligence (AI) integrating into network systems. Networks are not limited to just computers anymore; smart devices, vehicles, industrial equipment, and more are now part of the larger networked ecosystem. The ability to transmit data quickly and securely is more important than ever, and as a result, technologies like 5G, fiber optics, and network security protocols are at the forefront of network development.
          </p>
        </div>

        {/* Diagram Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: Evolution of Computer Networks</h2>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
1960s: ARPANET
   |-> Early packet-switching technology

1970s: TCP/IP Protocols
   |-> Vint Cerf and Robert Kahn's work on TCP/IP

1980s: Rise of LANs
   |-> Establishment of LANs for local communication

1990s: Birth of the Internet
   |-> WWW and commercial internet access

2000s: Broadband and Mobile Networks
   |-> Global internet access, Wi-Fi, and mobile technology

Today: IoT, Cloud, and AI in Networks
   |-> Smart devices, cloud computing, and AI integration
`}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default NetworkHistoryComponent;

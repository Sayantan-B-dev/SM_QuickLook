import React from "react";
import "../../../../CSS/CN.css";

function NetworkTopology() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Network Topology</h1>

        {/* Network Topology Overview Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">What is Network Topology?</h2>
          <p className="cn-example">
            Network topology refers to the arrangement of different elements (links, nodes, etc.) in a computer network. It defines how devices, such as computers, routers, and switches, are connected to one another and how data is transmitted within the network.
          </p>
          <p className="cn-example">
            The choice of topology impacts the network’s performance, scalability, and fault tolerance. It is essential to select the appropriate topology based on the requirements and size of the network.
          </p>
        </div>

        {/* Types of Network Topologies Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Types of Network Topologies</h2>
          <p className="cn-example">
            There are several types of network topologies, each with its advantages and drawbacks. The main topologies are:
          </p>
          <ul className="cn-example list-disc pl-6">
            <li><strong>Bus Topology:</strong> All devices are connected to a single central cable (the bus). Data travels along the bus and is received by all devices. This topology is simple but can suffer from congestion and performance issues with many devices.</li>
            <li><strong>Star Topology:</strong> All devices are connected to a central hub or switch. The central device manages traffic and communication between devices. This topology is widely used due to its ease of management and fault isolation, but the central device can become a point of failure.</li>
            <li><strong>Ring Topology:</strong> Devices are connected in a circular fashion, where data flows in one direction. Each device passes data to the next device until it reaches the destination. While this topology can be efficient, a break in the ring can disrupt the entire network.</li>
            <li><strong>Mesh Topology:</strong> Every device is connected to every other device in the network. This topology provides high redundancy and fault tolerance but can be costly and complex to set up.</li>
            <li><strong>Tree Topology:</strong> A hybrid topology that combines elements of star and bus topologies. It has a central root node with multiple hierarchical levels of devices. It is scalable but can suffer from bottlenecks if the root node fails.</li>
            <li><strong>Hybrid Topology:</strong> A combination of two or more different topologies. It allows for flexible and scalable networks but is more complex to design and manage.</li>
          </ul>
        </div>

        {/* Detailed Explanation and Diagrams Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Network Topology Diagrams</h2>
          <p className="cn-example">
            Below are diagrams illustrating each of the common network topologies:
          </p>

          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Bus Topology:

Device A ----->|              |<----- Device B
                |      Bus      |
Device C ----->|              |<----- Device D


Star Topology:

           Device A
              |
           Hub/Switch
              |
Device B ----|---- Device C

Ring Topology:

Device A ---> Device B ---> Device C ---> Device D ---> Device A


Mesh Topology:

Device A <--> Device B <--> Device C
    |             |              |
Device D <--> Device E <--> Device F


Tree Topology:

             Root Node
              /  |  \
          Device A Device B Device C
             |
         Device D
`}
          </pre>
        </div>

        {/* Summary Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Conclusion</h2>
          <p className="cn-example">
            Choosing the right network topology depends on several factors, including the size of the network, desired scalability, fault tolerance, and budget. It is essential to assess the network’s requirements and understand the strengths and weaknesses of each topology to make an informed decision.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NetworkTopology;

import React from 'react';
import '../../../../CSS/CN.css';

function CircuitSwitching() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Circuit Switching</h1>

        {/* Definition */}
        <div className="cn-section">
          <h2 className="cn-subtitle">What is Circuit Switching?</h2>
          <p className="cn-example">
            <strong>Circuit Switching</strong> is a type of communication in which a dedicated communication path or circuit is established between two endpoints for the duration of the communication. It is commonly used in traditional telephone networks and some types of data networks.
          </p>
          <p className="cn-example">
            The circuit is reserved for the entire duration of the conversation or data transmission, ensuring a constant and uninterrupted connection between the sender and receiver.
          </p>
        </div>

        {/* Formula */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Formula</h2>
          <p className="cn-example">
            In the context of circuit switching, the performance can be described by the formula:
          </p>
          <pre>
            {`Throughput = (Total Bandwidth) / (Number of Users)`}
          </pre>
          <p className="cn-example">
            This formula shows how the total bandwidth is shared among users in a circuit-switched network. Each call or session gets a dedicated bandwidth slice, which limits the overall capacity for other users.
          </p>
        </div>

        {/* Layer */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Which Layer Does Circuit Switching Operate in?</h2>
          <p className="cn-example">
            Circuit switching operates mainly at the <strong>Physical Layer (Layer 1)</strong> of the OSI model. It involves the actual establishment of a dedicated physical path for communication between two devices.
          </p>
        </div>

        {/* Contiguous Flow */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Is Circuit Switching a Contiguous Flow? Why?</h2>
          <p className="cn-example">
            Yes, circuit switching ensures a <strong>contiguous flow</strong> of data. Once the circuit is established, the entire data transmission takes place over the same dedicated path, ensuring continuous communication with no interruption or packet switching.
          </p>
        </div>

        {/* Render Issues */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Why No Render?</h2>
          <p className="cn-example">
            The term "render" generally refers to the process of displaying or showing something, typically in graphics or web contexts. In the case of circuit switching, no "rendering" of packets or data takes place because the circuit is a continuous and established communication path. There is no need to "render" intermediate data packets as in packet-switching methods.
          </p>
        </div>

        {/* Efficiency */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Is Circuit Switching Less Efficient? Why?</h2>
          <p className="cn-example">
            Yes, circuit switching is generally less efficient, especially when the communication is not constant. Since the dedicated circuit is reserved for the entire duration of the communication, it cannot be shared with other users. This leads to inefficient bandwidth utilization, especially if the communication is intermittent or has idle periods.
          </p>
        </div>

        {/* Delay */}
        <div className="cn-section">
          <h2 className="cn-subtitle">How is the Delay in Circuit Switching? Why?</h2>
          <p className="cn-example">
            The delay in circuit switching can be relatively high, especially during the setup phase. Before communication can begin, a dedicated path must be established between the sender and receiver, which introduces a delay known as the "call setup delay." Once the circuit is established, the communication itself has minimal delay since it uses a dedicated, continuous path.
          </p>
        </div>

        {/* Out of Flow */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Out of Flow?</h2>
          <p className="cn-example">
            In the context of circuit switching, data transmission is not out of flow. Since a continuous and dedicated path is maintained, data flow is uninterrupted and follows the same circuit throughout the transmission.
          </p>
        </div>

        {/* Diagram */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: Circuit Switching</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20240906152427/Circuit-Switching.gif"
            alt="Circuit Switching Diagram"
          />
        </div>

        <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/circuit-switching-in-computer-network/")}>Know more</button>
      </div>
    </div>
  );
}

export default CircuitSwitching;

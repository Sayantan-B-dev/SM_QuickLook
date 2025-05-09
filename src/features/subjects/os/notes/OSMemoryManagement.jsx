import React from "react";
import "../../../../CSS/OS.css";

function OSMemoryManagement() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Memory Management in Operating System</h1>

        <div className="os-section">
          <h2 className="os-subtitle">Overview of Memory Management</h2>
          <p className="os-example">
            Memory management refers to the process of managing the computer's primary memory. It keeps track of each byte in a computer’s memory and decides how much memory to allocate to processes and when to deallocate it. The OS ensures effective memory utilization while maintaining protection and isolation between processes.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Degree of Multiprogramming</h2>
          <p className="os-example">
            The degree of multiprogramming is the number of processes that can be kept in memory at the same time. It is directly affected by memory management: the more memory-efficient the OS is, the more processes it can hold. Higher degrees of multiprogramming allow better CPU utilization.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Memory Hierarchy and Data Flow</h2>
          <pre className="os-example">{`
+------------------------+
|     Secondary Storage  |
| (HDD, SSD - Slowest)  |
+------------------------+
            |
            V
+------------------------+
|        Main Memory     |
|       (RAM - Fast)     |
+------------------------+
            |
            V
+------------------------+
|         Cache          |
| (L1 < L2 < L3 - Faster)|
+------------------------+
            |
            V
+------------------------+
|       CPU Registers    |
|     (Fastest Memory)   |
+------------------------+
          `}

          </pre>
          <p className="os-example">
            Data is moved from slower to faster memory levels as needed: from secondary storage to RAM, then cached for quick access, and finally loaded into CPU registers during execution.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Role of Each Memory Unit</h2>
          <div className="os-grid">
            <div className="os-grid-item structured">
              <p className="os-example"><strong>CPU Registers:</strong> Store data and instructions currently being used; very limited in size but extremely fast.</p>
            </div>
            <div className="os-grid-item structured">
              <p className="os-example"><strong>Cache Memory:</strong> Acts as a buffer between CPU and RAM, holds frequently accessed data to improve speed.</p>
            </div>
            <div className="os-grid-item structured">
              <p className="os-example"><strong>Main Memory (RAM):</strong> Stores programs and data the CPU is currently working on; volatile and faster than storage.</p>
            </div>
            <div className="os-grid-item structured">
              <p className="os-example"><strong>Secondary Memory:</strong> Long-term storage like SSD/HDD; used when RAM is full or to store permanent data.</p>
            </div>
          </div>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Diagram: Memory Hierarchy and Flow</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221116104505/1white-660x453.png"
            alt="Memory Hierarchy Diagram"
          />
        </div>

        <button
          className="infoBtn"
          onClick={() => window.open("https://www.geeksforgeeks.org/memory-management-in-operating-system/")}
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default OSMemoryManagement;
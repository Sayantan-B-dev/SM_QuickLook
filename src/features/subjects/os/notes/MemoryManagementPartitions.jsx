import React from "react";
import "../../../../CSS/OS.css";

function MemoryManagementPartitions() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Memory Management Techniques: Fixed and Variable Size Partitioning</h1>

        <div className="os-section">
          <h2 className="os-subtitle">Fixed Size Partitioning</h2>
          <p className="os-example">
            In fixed-size partitioning, the main memory is divided into fixed-size partitions at system initialization. Each partition may contain exactly one process.
          </p>
          <pre>{`
Main Memory:
+---------+  <-- Partition 1 (Fixed Size)
| Process |
+---------+
|         |  <-- Partition 2 (Fixed Size)
+---------+
|         |
+---------+
|         |
+---------+

Wasted memory = Internal Fragmentation (unused memory inside partitions)
          `}</pre>

          <p className="os-example">
            <strong>Advantages:</strong>
            <ul>
              <li>Simple implementation</li>
              <li>Little overhead</li>
            </ul>
            <strong>Disadvantages:</strong>
            <ul>
              <li>Internal fragmentation (process smaller than partition wastes space)</li>
              <li>Fixed number of processes at a time</li>
            </ul>
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Variable Size Partitioning</h2>
          <p className="os-example">
            In variable-size partitioning, partitions are created dynamically to exactly fit the memory requirements of processes. This reduces internal fragmentation but introduces external fragmentation.
          </p>
          <pre>{`
Main Memory:
+--------+--------+--------+
|  P1    |   P2   |   P3   |
+--------+--------+--------+
     ^       ^        ^
   Space  allocated exactly as needed

Unused gaps = External Fragmentation (wasted memory between partitions)
          `}</pre>

          <p className="os-example">
            <strong>Advantages:</strong>
            <ul>
              <li>Better utilization of memory (less internal fragmentation)</li>
              <li>Flexibility to allocate memory as needed</li>
            </ul>
            <strong>Disadvantages:</strong>
            <ul>
              <li>External fragmentation occurs</li>
              <li>Requires compaction to reduce fragmentation</li>
            </ul>
          </p>
        </div>


        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/partition-allocation-methods-in-memory-management/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default MemoryManagementPartitions;

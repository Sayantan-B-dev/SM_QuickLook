import React from "react";
import "../../../../CSS/OS.css";

function ProcessAllocation() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Process Allocation in Fixed Size Partitions</h1>

        <div className="os-section">
          <h2 className="os-subtitle">First Fit</h2>
          <p className="os-example">
            First Fit allocates the first available partition that is large enough to accommodate the process. It scans the memory from the beginning and assigns the first partition that is big enough.
          </p>
          <pre>{`
Memory:
+---------+---------+---------+
|  P1     |   P2    |   P3    |
+---------+---------+---------+

First fit will assign P1 to the first partition, P2 to the second partition, etc. until all processes are allocated.
          `}</pre>

          <p className="os-example">
            <strong>Advantages:</strong>
            <ul>
              <li>Simple and fast allocation method</li>
              <li>Low overhead</li>
            </ul>
            <strong>Disadvantages:</strong>
            <ul>
              <li>Can result in fragmentation over time</li>
              <li>May leave small, unusable gaps in memory</li>
            </ul>
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Next Fit</h2>
          <p className="os-example">
            Next Fit works like First Fit, but instead of starting from the beginning each time, it starts from the last allocated partition. It continues searching from where it left off.
          </p>
          <pre>{`
Memory:
+---------+---------+---------+---------+
|  P1     |   P2    |   P3    |   P4    |
+---------+---------+---------+---------+

Next fit will allocate from the last used position, reducing wasted time searching the entire memory space.
          `}</pre>

          <p className="os-example">
            <strong>Advantages:</strong>
            <ul>
              <li>Reduces search time for the next allocation</li>
              <li>Improves efficiency compared to First Fit</li>
            </ul>
            <strong>Disadvantages:</strong>
            <ul>
              <li>May lead to fragmentation if processes aren't well distributed</li>
              <li>Still leaves unused gaps over time</li>
            </ul>
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Best Fit</h2>
          <p className="os-example">
            Best Fit allocates the smallest available partition that is large enough to accommodate the process. It scans the entire memory to find the partition that minimizes wasted space.
          </p>
          <pre>{`
Memory:
+---------+---------+---------+
|  P1     |   P2    |   P3    |
+---------+---------+---------+

Best fit finds the smallest partition that fits, ensuring minimal unused space.
          `}</pre>

          <p className="os-example">
            <strong>Advantages:</strong>
            <ul>
              <li>Minimizes internal fragmentation</li>
              <li>Good for maximizing memory utilization</li>
            </ul>
            <strong>Disadvantages:</strong>
            <ul>
              <li>Can result in external fragmentation over time</li>
              <li>Slower than First Fit due to memory scanning</li>
            </ul>
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Worst Fit</h2>
          <p className="os-example">
            Worst Fit allocates the largest available partition to a process. It looks for the largest partition and assigns the process to that partition, leaving a large portion of free space in the partition.
          </p>
          <pre>{`
Memory:
+---------+---------+---------+
|  P1     |   P2    |   P3    |
+---------+---------+---------+

Worst fit assigns the largest partition to a process, potentially leaving large gaps.
          `}</pre>

          <p className="os-example">
            <strong>Advantages:</strong>
            <ul>
              <li>Can delay fragmentation by leaving large free spaces</li>
              <li>Works well when processes are of varying sizes</li>
            </ul>
            <strong>Disadvantages:</strong>
            <ul>
              <li>Can lead to large unused memory gaps</li>
              <li>Leads to poor memory utilization</li>
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

export default ProcessAllocation;

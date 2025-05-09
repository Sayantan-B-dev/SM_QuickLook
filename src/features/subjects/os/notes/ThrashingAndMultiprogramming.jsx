import React from "react";
import "../../../../CSS/OS.css";

function ThrashingAndMultiprogramming() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Thrashing and Degree of Multiprogramming</h1>

        <div className="os-section">
          <h2 className="os-subtitle">What is Thrashing?</h2>
          <p className="os-example">
            <strong>Thrashing</strong> occurs when the operating system spends the majority of its time swapping data between main memory and disk storage, rather than executing processes. This usually happens when too many processes are loaded into memory, causing the system to constantly page or swap data in and out of memory, leading to severe performance degradation.
          </p>
          <p className="os-example">
            When thrashing occurs, the CPU spends little time executing instructions and mostly deals with memory management tasks, like page fault handling. This can result in a system slowdown and is detrimental to overall performance.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Why Does Thrashing Occur?</h2>
          <p className="os-example">
            Thrashing occurs due to the following reasons:
          </p>
          <ul>
            <li>
              **Excessive Degree of Multiprogramming**: When the number of processes loaded into memory exceeds the available physical memory, the system constantly swaps pages in and out, causing thrashing.
            </li>
            <li>
              **Insufficient Physical Memory**: If the system doesn’t have enough RAM to handle the processes, it starts swapping pages frequently.
            </li>
            <li>
              **Improper Allocation of Memory**: If memory is not allocated optimally across processes, some processes may have too many pages in memory, while others have too few, leading to increased page faults and thrashing.
            </li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Degree of Multiprogramming</h2>
          <p className="os-example">
            The **Degree of Multiprogramming** (DMP) refers to the number of processes that are loaded into the system’s main memory simultaneously. A higher DMP means that more processes are concurrently in memory, which increases the likelihood of thrashing if the system doesn’t have sufficient memory.
          </p>
          <p className="os-example">
            The **optimal degree of multiprogramming** is determined by the total memory available and the memory requirements of the processes. Too many processes cause thrashing, while too few processes lead to inefficient CPU utilization.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Example of Thrashing</h2>
          <pre>{`
Example:

Consider a system with the following processes and memory requirements:

| Process | Memory Needed (in KB) |
|---------|----------------------|
| P1      | 80                   |
| P2      | 100                  |
| P3      | 120                  |
| P4      | 90                   |
| P5      | 110                  |

Total available memory is 200 KB.

If the system tries to load all 5 processes, it will cause thrashing, as the total memory required (500 KB) exceeds the available memory. The operating system will spend more time swapping processes in and out of memory than executing them.
          `}</pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Solution to Thrashing</h2>
          <p className="os-example">
            Several techniques can be employed to reduce or eliminate thrashing:
          </p>
          <ul>
            <li>
              **Reducing the Degree of Multiprogramming**: By lowering the number of processes in memory, the system can ensure that each process has enough memory to execute, thus reducing the chances of thrashing. This can be done by limiting the number of processes that are concurrently loaded into memory based on available physical memory.
            </li>
            <li>
              **Memory Allocation Algorithms**: Proper memory management algorithms, such as First-Fit, Best-Fit, and Next-Fit, can allocate memory more effectively and reduce the chances of fragmentation, preventing thrashing.
            </li>
            <li>
              **Working Set Model**: The working set of a process refers to the set of pages it actively uses. By tracking and managing the working set, the system can avoid loading unnecessary pages into memory, reducing thrashing. The working set model helps keep memory usage efficient by ensuring that only the pages actively used by a process are kept in memory.
            </li>
            <li>
              **Page Fault Frequency (PFF) Algorithm**: The Page Fault Frequency (PFF) algorithm helps in adjusting the degree of multiprogramming dynamically. If the page fault rate is too high, the system can reduce the number of processes in memory. Conversely, if the system is underutilized, it can increase the number of processes.
            </li>
            <li>
              **Prevention through Load Control**: By monitoring the system’s memory usage and workload, the operating system can limit the number of processes loaded into memory, ensuring that thrashing is avoided before it begins.
            </li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Thrashing Example</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/2-103.png"
            alt="Thrashing Diagram"
          />
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Degree of Multiprogramming</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20240814121136/Multiprogramming-in-OS.png"
            alt="Degree of Multiprogramming Diagram"
          />
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Trade-off between DMP and CPU Utilization</h2>
          <p className="os-example">
            The ideal Degree of Multiprogramming (DMP) ensures that the CPU is efficiently utilized without causing thrashing. Increasing the number of processes beyond the optimal point can lead to thrashing, reducing CPU utilization and making the system slower. Conversely, decreasing the DMP too much can lead to underutilization of the CPU and inefficient processing.
          </p>
          <pre>{`
Trade-off Example:

Consider the following:
- System with 2 GB RAM.
- Process P1 requires 500 MB of memory.
- Process P2 requires 600 MB of memory.
- Process P3 requires 700 MB of memory.

If all processes are loaded simultaneously, thrashing will occur. The system should only load a combination of processes that together do not exceed the available memory. If three processes are loaded and cause thrashing, reducing the degree of multiprogramming (loading only 2 processes) would prevent it.
          `}</pre>
        </div>

        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/techniques-to-handle-thrashing/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default ThrashingAndMultiprogramming;

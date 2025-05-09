import React from "react";
import "../../../../CSS/OS.css";

function TLBComponent() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Translation Lookaside Buffer (TLB)</h1>

        <div className="os-section">
          <h2 className="os-subtitle">What is TLB?</h2>
          <p className="os-example">
            **Translation Lookaside Buffer (TLB)** is a small, fast memory cache that stores recent translations of virtual memory addresses to physical memory addresses. It is part of the memory management unit (MMU) and plays a crucial role in speeding up the virtual-to-physical address translation process.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">How Does TLB Work?</h2>
          <p className="os-example">
            When a virtual address is accessed, the system first checks if the address translation is present in the TLB. If the translation exists, it is referred to as a **TLB hit**. If not, the system needs to perform a slower page table lookup, and this is known as a **TLB miss**.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">TLB and Cache Relationship</h2>
          <p className="os-example">
            TLB is similar to a cache but specifically handles memory address translation. While data caches store frequently accessed data, the TLB stores frequently accessed virtual-to-physical address translations. Both serve to speed up memory access by reducing the number of slower accesses to main memory (RAM).
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">TLB Diagram</h2>
          <pre>
            {`
+------------------+        +-----------------+        +--------------------+
|  Virtual Address | -----> |  TLB Lookup    | -----> |  Physical Address  |
+------------------+        +-----------------+        +--------------------+
            |                          |                          |
            |                     TLB Hit                    TLB Miss
            |                          |                          |
            |                   Access Data                 Access Page Table
            |                                                       |
            +-------------------------------------------------------+
            `}
          </pre>
        </div>
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20190225192626/tlb1.jpg" alt="TLB Diagram" className="smallImg" style={{marginBottom:"20px"}}/>

        <div className="os-section">
          <h2 className="os-subtitle">TLB Formula</h2>
          <p className="os-example">
            TLB hit ratio can be calculated using the formula:
            <br />
            <strong>TLB Hit Ratio = (Number of TLB Hits) / (Total Memory Accesses)</strong>
            <br />
            This ratio helps to measure the effectiveness of the TLB in improving memory access times.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">TLB Example and Numerical Problem</h2>
          <p className="os-example">
            Let's solve a numerical example to calculate the TLB hit ratio:
            <br />
            Total memory accesses = 2000
            <br />
            TLB hits = 1500
            <br />
            TLB misses = 500
            <br />
            Using the formula, we can calculate the TLB hit ratio:
          </p>
          <pre>
            {`
            TLB Hit Ratio = (Number of TLB Hits) / (Total Memory Accesses)
            TLB Hit Ratio = 1500 / 2000
            TLB Hit Ratio = 0.75 or 75%
            `}
          </pre>
        </div>
<div className="os-section">
  <h2 className="os-subtitle">Question: Calculating EMAT with TLB Hit Ratio</h2>
  <p className="os-example">
    **Question**: A system has the following characteristics:
    <br />
    - **TLB Hit Ratio** = 85% (0.85)
    - **TLB Access Time** = 12 ns
    - **Memory Access Time** = 120 ns
    <br />
    Calculate the **Effective Memory Access Time (EMAT)** for this system.
    <br />
    Use the following formula for **EMAT**:
    <br />
    <strong>
      EMAT = (TLB Hit Ratio × (TLB Access Time + Memory Access Time)) + (1 - TLB Hit Ratio) × (TLB Access Time + 2 × Memory Access Time)
    </strong>
  </p>
  <pre>
    {`
    Given:
    TLB Hit Ratio = 0.85
    TLB Access Time = 12 ns
    Memory Access Time = 120 ns

    EMAT = (0.85 × (12 + 120)) + (1 - 0.85) × (12 + 2 × 120)
    EMAT = (0.85 × 132) + (0.15 × 252)
    EMAT = 112.2 + 37.8
    EMAT = 150 ns
    `}
  </pre>
  <p className="os-example">
    **Answer**: The Effective Memory Access Time (EMAT) is **150 ns**.
  </p>
</div>
        <div className="os-section">
          <h2 className="os-subtitle">TLB Advantages and Disadvantages</h2>
          <p className="os-example">
            <strong>Advantages:</strong>
            <ul>
              <li>Speeds up memory access by avoiding page table lookup.</li>
              <li>Reduces the time spent in virtual to physical address translation.</li>
              <li>Improves overall system performance, especially for applications with frequent memory accesses.</li>
            </ul>

            <strong>Disadvantages:</strong>
            <ul>
              <li>Limited in size, so older entries may be replaced, causing TLB misses.</li>
              <li>Not all memory accesses will benefit from the TLB, especially with large address spaces.</li>
              <li>TLB miss penalties can still be significant if the TLB is not efficient.</li>
            </ul>
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Conclusion</h2>
          <p className="os-example">
            TLB plays a crucial role in optimizing memory access times by storing recent address translations. Its effectiveness directly impacts system performance, especially in memory-intensive applications. By understanding TLB, we can better appreciate how modern operating systems and processors handle memory management efficiently.
          </p>
        </div>

        <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/translation-lookaside-buffer-tlb-in-paging/")}>
          Know more
        </button>
      </div>
    </div>
  );
}

export default TLBComponent;

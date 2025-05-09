import React from "react";
import "../../../../CSS/OS.css";

function VirtualMemory() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Virtual Memory in Operating Systems</h1>

        <div className="os-section">
          <h2 className="os-subtitle">What is Virtual Memory?</h2>
          <p className="os-example">
            **Virtual Memory** is a memory management technique used by modern operating systems that creates an illusion of a larger amount of physical memory than is actually available. Virtual memory allows programs to use more memory than the physical RAM by temporarily transferring data from the RAM to the disk (usually to a space called **swap space** or **paging file**) and vice versa.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Components of Virtual Memory</h2>
          <p className="os-example">
            Virtual memory uses several key components to work efficiently:
          </p>
          <ul>
            <li><strong>Page Table</strong>: A data structure used to map virtual addresses to physical addresses.</li>
            <li><strong>Swap Space/Page File</strong>: Space on the disk used for storing parts of the program that are not in active use in the physical RAM.</li>
            <li><strong>Memory Management Unit (MMU)</strong>: A hardware component responsible for translating virtual addresses to physical addresses using the page table.</li>
            <li><strong>Pages and Frames</strong>: Virtual memory is divided into fixed-sized blocks called pages, and the physical memory is divided into blocks called frames. Pages are mapped to frames.</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">How Virtual Memory Works</h2>
          <p className="os-example">
            When a program needs more memory than is physically available, the operating system uses **paging** to move data in and out of physical memory. The data that is not currently needed is moved to the swap space on the disk, and when required again, it is brought back into memory. This swapping is done by the operating system to ensure that active parts of the program always have memory.
          </p>
          <pre>{`
Example:

Consider a system with 2GB of physical RAM. If a program requires 3GB of memory, the OS will use virtual memory to load parts of the program into RAM and store the rest in swap space on the disk.
          `}</pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Advantages of Virtual Memory</h2>
          <ul>
            <li>**Efficient Memory Usage**: Programs can run even if they exceed the available physical memory by swapping data in and out of memory as needed.</li>
            <li>**Isolation**: Virtual memory provides memory protection, ensuring that processes cannot interfere with each other's memory.</li>
            <li>**Simplified Memory Management**: Developers don't have to worry about memory limitations since the operating system handles memory management for them.</li>
            <li>**Increased Flexibility**: Programs can use more memory than the system physically has, leading to more complex and larger applications running smoothly.</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Disadvantages of Virtual Memory</h2>
          <ul>
            <li>**Slower Performance**: Swapping data between RAM and disk can be much slower than accessing data in RAM. This can lead to slower program execution.</li>
            <li>**Disk Wear and Tear**: Frequent swapping can cause excessive wear on disk drives, especially on SSDs.</li>
            <li>**Complexity**: Implementing and managing virtual memory can increase the complexity of the operating system and its resource management tasks.</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Diagram: Virtual Memory</h2>
            <img className="smallImg" src="https://media.geeksforgeeks.org/wp-content/uploads/20250115142221545470/virtual_memory.webp" alt="" />

        </div>

        <div className="os-section">
          <h2 className="os-subtitle">EMAT (Effective Memory Access Time)</h2>
          <p className="os-example">
            **EMAT** is a measure of the time it takes to access memory in a virtual memory system. It accounts for both the time taken to access physical memory and the time it takes to handle page faults (when the data is not in memory and must be loaded from disk). The formula for EMAT is:
          </p>
          <pre>{`
EMAT = (1 - P) * Memory Access Time + P * Page Fault Time

Where:
- P is the probability of a page fault (i.e., the probability that the required page is not in memory).
- Memory Access Time is the time it takes to access data in RAM.
- Page Fault Time is the time it takes to retrieve the data from disk into memory.

Example:

Consider a system where:
- Memory Access Time = 100 ns
- Page Fault Time = 10 ms (10,000,000 ns)
- Page Fault Probability (P) = 0.01

Now, we can calculate the **EMAT**:
EMAT = (1 - 0.01) * 100 + 0.01 * 10,000,000
EMAT = 0.99 * 100 + 0.01 * 10,000,000
EMAT = 99 + 100,000
EMAT = 100,099 ns
          `}</pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Page Fault</h2>
          <p className="os-example">
            A **page fault** occurs when a program tries to access data that is not currently loaded in physical memory. The operating system then has to load the required page from disk into memory, which causes a delay in execution. The process of handling a page fault involves checking whether the required page is in memory, fetching it from the disk if it is not, and updating the page table to reflect the new mapping.
          </p>
        </div>
        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/virtual-memory-in-operating-system/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default VirtualMemory;
